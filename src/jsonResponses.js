// 6 - this will return a random number no bigger than `max`, as a string
// we will also doing our query parameter validation here
const songs = [
  { name: 'test-song', hour: 1 },
];

const getSong = () => songs[Math.floor(Math.random() * songs.length)];

const getSongJSON = () => JSON.stringify(getSong());

const getSongXML = () => {
  const song = getSong();
  return `<joke>
            <q>${song.name}</q>
            <a>${song.hour}</a>
          </joke>`;
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
    content = getSongXML();
    type = 'text/xml';
  } else {
    content = getSongJSON();
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
