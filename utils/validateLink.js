const fetch = require("node-fetch");

const validateLink = (url) =>
  fetch(url.href)
    .then((res) => {
      return {
        ...url,
        statusCode: res.status,
        statusMessage: res.statusText,
      };
    })
    .catch(err => {
      console.log("err", err.message)
      return {
        ...url,
        statusCode: err.errno,
        statusMessage: err.message
      }
    });

module.exports = validateLink
