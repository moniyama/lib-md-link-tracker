// para chamar e testear o arquivo, usar no terminal node lib/index.js
// so node abre um js no temrinal => e chama a biblioteca
// criar uma const mdlinks = require('./lib/index.js')
// depois => no js exportar => module.exports = mdlinks; 

//node.js as a file server
// './README.md'
const fs = require("fs")

const mdlinks = (pathFile) => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathFile, "utf8", (err, data) => {
      if (err) {
        reject(error);
      } else {
        const regex = /[^\!]\[([^ ]\S+)\]\((\S+)\)/gm; // não pega imagens!
        // const regex =/[^\!]\[([^ ]\S+|[^ ].*)\]\((\S+)\)/gm //pega index
        // const regex = /\[([^ ]\S+)\]\((\S+)\)/gm //primeiro
        const result = data.match(regex);
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
      }
    });
  });
};

module.exports = mdlinks;
