const songs = [
  { name: 'fireflies', display: 'Fireflies', hour: 0 },
  { name: 'fireflies', display: 'Fireflies', hour: 1 },
  { name: 'coconut-mall-theme', display: 'Coconut Mall Theme', hour: 2 },
  { name: 'coconut-mall-theme', display: 'Coconut Mall Theme', hour: 3 },
  { name: 'fireflies', display: 'Fireflies', hour: 4 },
  { name: 'fireflies', display: 'Fireflies', hour: 5 },
  { name: 'fireflies', display: 'Fireflies', hour: 6 },
  { name: 'fireflies', display: 'Fireflies', hour: 7 },
  { name: 'fireflies', display: 'Fireflies', hour: 8 },
  { name: 'fireflies', display: 'Fireflies', hour: 9 },
  { name: 'fireflies', display: 'Fireflies', hour: 10 },
  { name: 'paper-tigers', display: 'Paper Tigers', hour: 10 },
  { name: 'west-coast-friendship', display: 'West Coast Friendship', hour: 10 },
  { name: 'fireflies', display: 'Fireflies', hour: 11 },
  { name: 'fireflies', display: 'Fireflies', hour: 12 },
  { name: 'coconut-mall-theme', display: 'Coconut Mall Theme', hour: 13 },
  { name: 'coconut-mall-theme', display: 'Coconut Mall Theme', hour: 14 },
  { name: 'coconut-mall-theme', display: 'Coconut Mall Theme', hour: 15 },
  { name: 'coconut-mall-theme', display: 'Coconut Mall Theme', hour: 16 },
  { name: 'coconut-mall-theme', display: 'Coconut Mall Theme', hour: 17 },
  { name: 'fireflies', display: 'Fireflies', hour: 18 },
  { name: 'fireflies', display: 'Fireflies', hour: 19 },
  { name: 'fireflies', display: 'Fireflies', hour: 20 },
  { name: 'fireflies', display: 'Fireflies', hour: 21 },
  { name: 'fireflies', display: 'Fireflies', hour: 22 },
  { name: 'fireflies', display: 'Fireflies', hour: 23 },
];

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
  const validSongs = songs.filter((song) => song.hour === Number(params.hour));
  return validSongs;
};

const addSong = (nameIn, displayIn, hourIn, videoIdIn) => {
  if (!(getSongsByHour({ hour: hourIn }).some((s) => {
    if (s.videoId) {
      console.log(`${s.videoId} == ${videoIdIn}`);
      return s.videoId === videoIdIn;
    }
    return false;
  }))) {
    songs.push({
      name: nameIn,
      display: displayIn,
      hour: Number(hourIn),
      videoId: videoIdIn,
    });
    return true;
  }
  return false;
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
module.exports.getSongResponse = getSongResponse;
module.exports.getSongsResponse = getSongsResponse;
