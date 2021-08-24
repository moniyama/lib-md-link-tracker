const fetch = require("node-fetch");

const validateLink = async (url) => {
  try {
    const res = await fetch(url.href)
    return {
      ...url,
      statusCode: res.status,
      statusMessage: res.statusText,
    };
  } catch (error) {
    return {
      ...url,
      statusCode: error.errno,
      statusMessage: error.message
    }
  }
}

module.exports = validateLink
