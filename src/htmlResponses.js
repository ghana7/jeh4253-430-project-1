const fs = require('fs');

const errorPage = fs.readFileSync(`${__dirname}/../client/error.html`);
const home = fs.readFileSync(`${__dirname}/../client/home.html`);
const client = fs.readFileSync(`${__dirname}/../client/client.html`);
const suggest = fs.readFileSync(`${__dirname}/../client/suggest2.html`);
const admin = fs.readFileSync(`${__dirname}/../client/admin.html`);
const defaultStyles = fs.readFileSync(`${__dirname}/../client/default-styles.css`);

const get404Response = (request, response) => {
  response.writeHead(404, { 'Content-Type': 'text/html' });
  response.write(errorPage);
  response.end();
};

const getHome = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(home);
  response.end();
};
const getClient = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(client);
  response.end();
};
const getSuggest = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(suggest);
  response.end();
};
const getAdmin = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(admin);
  response.end();
};

const getDefaultStyles = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(defaultStyles);
  response.end();
};

module.exports.get404Response = get404Response;
module.exports.getHome = getHome;
module.exports.getClient = getClient;
module.exports.getSuggest = getSuggest;
module.exports.getAdmin = getAdmin;
module.exports.getDefaultStyles = getDefaultStyles;
