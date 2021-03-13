const fs = require('fs');
const path = require('path');

const images = ['sun', 'moon', 'play', 'pause', 'circle', 'audioOn', 'audioOff'];
const imageDict = {};
images.forEach((i) => {
  imageDict[i] = fs.readFileSync(`${__dirname}/../client/images/${i}.png`);
});
console.log('finished loading images');
const loadFile = (request, response, fileName, fileType) => {
  const file = path.resolve(__dirname, fileName);

  fs.stat(file, (err, stats) => {
    if (err) {
      if (err.code === 'ENOENT') {
        response.writeHead(404);
      }
      // return response.end(err);
    }

    let { range } = request.headers;

    if (!range) {
      range = 'bytes=0-';
    }

    const positions = range.replace(/bytes=/, '').split('-');

    let start = parseInt(positions[0], 10);

    const total = stats.size;
    const end = positions[1] ? parseInt(positions[1], 10) : total - 1;

    if (start > end) {
      start = end - 1;
    }

    const chunksize = (end - start) + 1;

    response.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${total}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': fileType,
    });

    const stream = fs.createReadStream(file, { start, end });

    stream.on('open', () => {
      stream.pipe(response);
    });

    stream.on('error', (streamErr) => {
      response.end(streamErr);
    });

    return stream;
  });
};

const getFile = (request, response, fileName) => {
  loadFile(request, response, `../src/music/${fileName}`, 'audio/mpeg');
};

const getImageFile = (request, response, fileName) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(imageDict[fileName]);
  response.end();
};

module.exports.getImageFile = getImageFile;
module.exports.getFile = getFile;
