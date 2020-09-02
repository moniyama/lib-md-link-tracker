const fetch = require("node-fetch");

const validateLinks = (array) => Promise.all(
  array.map((url) => {
    console.log(url.href)
    return fetch(url.href).then((res) => {
      return {
        ...url,
        statusCode: res.status,
        statusMessage: res.statusText,
      };
    });
  })
)

module.exports = validateLinks
