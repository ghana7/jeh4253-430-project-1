const fs = require('fs');

const errorPage = fs.readFileSync(`${__dirname}/../client/error.html`);
const client = fs.readFileSync(`${__dirname}/../client/client.html`);
const defaultStyles = fs.readFileSync(`${__dirname}/../client/default-styles.css`);

const get404Response = (request, response) => {
  response.writeHead(404, { 'Content-Type': 'text/html' });
  response.write(errorPage);
  response.end();
};

const getClient = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(client);
  response.end();
};

const getDefaultStyles = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(defaultStyles);
  response.end();
};

module.exports.get404Response = get404Response;
module.exports.getClient = getClient;
module.exports.getDefaultStyles = getDefaultStyles;