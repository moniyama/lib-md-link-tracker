const fs = require("fs");

const mdlinks = (pathFile) => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathFile, "utf8", (err, data) => {
      if (err) {
        reject(`${err}`);
      } else {
        const regex = /[^!]\[(.[^\]]*)\]\(([^#]\S+)\)/gm;
        const result = data.match(regex);
        if (result !== null) {
          let arrayResult = result.map((pair) => {
            let arrayPair = pair.split("](");
            let arrayText = arrayPair[0].split("[")[1].replace(/\r?\n?/g, "")
            let arrayLinks = arrayPair[1].split(")")[0];
            return {
              "href": arrayLinks,
              "text": arrayText
            };
          });
          console.log(arrayResult)
          resolve(arrayResult);
        } else {
          resolve("[]");
        }
      }
    });
  });
};

module.exports = mdlinks;
