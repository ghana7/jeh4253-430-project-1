const startSongs = require('./startSongs');

const songs = startSongs.getStartSongs();

const getSongByHour = (hour) => {
  const validSongs = songs.filter((song) => song.hour === hour);
  return validSongs[Math.floor(Math.random() * validSongs.length)];
};

const getSong = (params) => {
  if (params.hour) {
    return getSongByHour(Number(params.hour));
  }
  return songs[Math.floor(Math.random() * songs.length)];
};

const getSongsByHour = (params) => {
  const validSongs = songs.filter((song) => song.hour === Number(params.hour) % 24);
  return validSongs;
};

const addSong = (nameIn, displayIn, hourIn, urlIn) => {
  if (!(getSongsByHour({ hour: hourIn }).some((s) => {
    if (s.url) {
      return s.url === urlIn;
    }
    return false;
  }))) {
    songs.push({
      name: nameIn,
      display: displayIn,
      hour: Number(hourIn),
      url: urlIn,
    });
    return true;
  }
  return false;
};

const removeSong = (hour, name) => {
  const numDeleted = songs.reduceRight((acc, item, index, object) => {
    if (item.hour === Number(hour) && item.name === name) {
      object.splice(index, 1);
      console.log('deleted');
      return acc + 1;
    }
    return acc;
  }, 0);
  return numDeleted > 0;
};

const getSongJSON = (params) => JSON.stringify(getSong(params));

const getSongXML = (params) => {
  const song = getSong(params);
  return `<song>
            <name>${song.name}</name>
            <hour>${song.hour}</hour>
          </song>`;
};

const getSongsJSON = (params) => JSON.stringify(getSongsByHour(params));

const getSongsXML = (params) => {
  const songsByHour = getSongsByHour(params);
  let val = '<songs>';
  songsByHour.forEach((s) => {
    val += `<song>
      <name>${s.name}</name>
      <hour>${s.hour}</hour>
    </song>`;
  });
  val += '</songs>';
  return val;
};
const respond = (response, type, content) => {
  response.writeHead(200, { 'Content-Type': type });
  response.write(content);
  response.end();
};

// Source: https://stackoverflow.com/questions/2219526/how-many-bytes-in-a-javascript-string/29955838
// Refactored to an arrow function by ACJ
const getBinarySize = (string) => Buffer.byteLength(string, 'utf8');

const getSongResponse = (request, response, params, acceptedTypes, httpMethod) => {
  let content;
  let type;

  if (acceptedTypes[0] === 'text/xml') {
    content = getSongXML(params);
    type = 'text/xml';
  } else {
    content = getSongJSON(params);
    type = 'application/json';
  }
  if (httpMethod === 'HEAD') {
    response.writeHead(200, { 'Content-Type': type, 'Content-Length': getBinarySize(content) });
    response.end();
  } else {
    respond(response, type, content);
  }
};

const getSongsResponse = (request, response, params, acceptedTypes, httpMethod) => {
  let content;
  let type;

  if (acceptedTypes[0] === 'text/xml') {
    content = getSongsXML(params);
    type = 'text/xml';
  } else {
    content = getSongsJSON(params);
    type = 'application/json';
  }
  if (httpMethod === 'HEAD') {
    response.writeHead(200, { 'Content-Type': type, 'Content-Length': getBinarySize(content) });
    response.end();
  } else {
    respond(response, type, content);
  }
};

module.exports.addSong = addSong;
module.exports.removeSong = removeSong;
module.exports.getSongResponse = getSongResponse;
module.exports.getSongsResponse = getSongsResponse;
