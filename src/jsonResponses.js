// 6 - this will return a random number no bigger than `max`, as a string
// we will also doing our query parameter validation here
const songs = [
  { name: 'Fireflies', hour: 0 },
  { name: 'Fireflies', hour: 1 },
  { name: 'coconut-mall-theme', hour: 2 },
  { name: 'coconut-mall-theme', hour: 3 },
  { name: 'Fireflies', hour: 4 },
  { name: 'Fireflies', hour: 5 },
  { name: 'Fireflies', hour: 6 },
  { name: 'Fireflies', hour: 7 },
  { name: 'Fireflies', hour: 8 },
  { name: 'Fireflies', hour: 9 },
  { name: 'Fireflies', hour: 10 },
  { name: 'paper-tigers', hour: 10 },
  { name: 'west-coast-friendship', hour: 10 },
  { name: 'Fireflies', hour: 11 },
  { name: 'Fireflies', hour: 12 },
  { name: 'coconut-mall-theme', hour: 13 },
  { name: 'coconut-mall-theme', hour: 14 },
  { name: 'coconut-mall-theme', hour: 15 },
  { name: 'coconut-mall-theme', hour: 16 },
  { name: 'coconut-mall-theme', hour: 17 },
  { name: 'Fireflies', hour: 18 },
  { name: 'Fireflies', hour: 19 },
  { name: 'Fireflies', hour: 20 },
  { name: 'Fireflies', hour: 21 },
  { name: 'Fireflies', hour: 22 },
  { name: 'Fireflies', hour: 23 },
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

// ALWAYS GIVE CREDIT - in your code comments and documentation
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

module.exports.getSongResponse = getSongResponse;
module.exports.getSongsResponse = getSongsResponse;
