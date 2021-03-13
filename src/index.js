const http = require('http');
const query = require('querystring');
const url = require('url');
// const fs = require('fs');
const htmlResponses = require('./htmlResponses');
const jsonResponses = require('./jsonResponses');
const mediaResponses = require('./mediaResponses');
const youtubeHandler = require('./youtubeHandler.js');
// 3 - locally this will be 3000, on Heroku it will be assigned
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  '/song': jsonResponses.getSongResponse,
  '/songs': jsonResponses.getSongsResponse,
  '/default-styles.css': htmlResponses.getDefaultStyles,
  '/': htmlResponses.getHome,
  '/home.html': htmlResponses.getHome,
  '/client.html': htmlResponses.getClient,
  '/suggest.html': htmlResponses.getSuggest,
  '/admin.html': htmlResponses.getAdmin,
  '/visual-effects.js': htmlResponses.getVisualEffectsJs,
  notFound: htmlResponses.get404Response,
};
const cleanName = (name) => name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
const handlePost = (request, response, parsedUrl) => {
  if (parsedUrl.pathname === '/addSong') {
    const body = [];

    // https://nodejs.org/api/http.html
    request.on('error', (err) => {
      console.dir(err);
      response.statusCode = 400;
      response.end();
    });

    request.on('data', (chunk) => {
      body.push(chunk);
    });

    request.on('end', () => {
      const bodyString = Buffer.concat(body).toString();
      const bodyParams = query.parse(bodyString);
      // const buff = Buffer.concat(body);
      const clean = cleanName(bodyParams.songName);
      youtubeHandler.downloadVideo(bodyParams.songUrl, clean);
      if (jsonResponses.addSong(clean, bodyParams.songName, bodyParams.songHour,
        youtubeHandler.getVideoId(bodyParams.songUrl))) {
        response.statusCode = 201;
      } else {
        response.statusCode = 200;
        response.write('Duplicate upload');
      }
      response.end();
      // const bodyString = Buffer.concat(body).toString();
      // const bodyParams = query.parse(bodyString);

      // console.dir(request);
      // console.dir(Buffer.concat(body));
      // fs.writeFileSync('./client/music/test.mp3', buff);
      // console.dir(bodyString);
      // console.dir(bodyParams);
    });
  }
};

const handleGet = (request, response, parsedUrl) => {
  const { pathname } = parsedUrl;
  console.log('pathname=', pathname);
  const params = query.parse(parsedUrl.query);
  let acceptedTypes = request.headers.accept && request.headers.accept.split(',');
  acceptedTypes = acceptedTypes || [];
  if (pathname.startsWith('/music/')) {
    mediaResponses.getFile(request, response, pathname.substring(7));
  } else if (pathname.startsWith('/images/')) {
    mediaResponses.getImageFile(request, response, pathname.substring(8));
  } else if (urlStruct[pathname]) {
    urlStruct[pathname](request, response, params, acceptedTypes, request.method);
  } else {
    urlStruct.notFound(request, response);
  }
};
const onRequest = (request, response) => {
  // console.log(request.headers);
  const parsedUrl = url.parse(request.url);
  console.log('parsedUrl=', parsedUrl);

  if (request.method === 'POST') {
    handlePost(request, response, parsedUrl);
  } else {
    handleGet(request, response, parsedUrl);
  }
};

// 8 - create the server, hook up the request handling function, and start listening on `port`
http.createServer(onRequest).listen(port);
console.log(`Listening on 127.0.0.1: ${port}`);
