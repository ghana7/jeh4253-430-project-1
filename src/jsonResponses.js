// 6 - this will return a random number no bigger than `max`, as a string
// we will also doing our query parameter validation here
const songs = [
  { name: '12am-song', hour: 0 },
  { name: '1am-song', hour: 1 },
  { name: '2am-song', hour: 2 },
  { name: '3am-song', hour: 3 },
  { name: '4am-song', hour: 4 },
  { name: '5am-song', hour: 5 },
  { name: '6am-song', hour: 6 },
  { name: '7am-song', hour: 7 },
  { name: '8am-song', hour: 8 },
  { name: '9am-song', hour: 9 },
  { name: '10am-song', hour: 10 },
  { name: '10am-song-2', hour: 10 },
  { name: '10am-song-3', hour: 10 },
  { name: 'coconut-mall-theme', hour: 10 },
  { name: '11am-song', hour: 11 },
  { name: '12pm-song', hour: 12 },
  { name: '1pm-song', hour: 13 },
  { name: '2pm-song', hour: 14 },
  { name: '3pm-song', hour: 15 },
  { name: '4pm-song', hour: 16 },
  { name: '5pm-song', hour: 17 },
  { name: '6pm-song', hour: 18 },
  { name: '7pm-song', hour: 19 },
  { name: '8pm-song', hour: 20 },
  { name: '9pm-song', hour: 21 },
  { name: '10pm-song', hour: 22 },
  { name: '11pm-song', hour: 23 },
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

const getSongsByHour = (hour) => {
  const validSongs = songs.filter((song) => song.hour === hour);
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
