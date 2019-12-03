const fs = require("fs");

const mdlinks = (pathFile) => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathFile, "utf8", (err, data) => {
      if (err) {
        reject(`${err}`);
      } else {
        const regex = /[^!]\[([^ ]\S+)\]\((\S+)\)/gm;
        const result = data.match(regex);
        if (result !== null) {
          let arrayResult = result.map((pair) => {
            let arrayPair = pair.split("](");
            let arrayText = arrayPair[0].split("[")[1];
            let arrayLinks = arrayPair[1].split(")")[0];
            return {
              "href": arrayLinks,
              "text": arrayText
            };
          });
          resolve(arrayResult);
        } else {
          resolve("[]");
        }
      }
    });
  });
};

module.exports = mdlinks;
