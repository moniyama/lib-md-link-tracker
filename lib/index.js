// para chamar e testear o arquivo, usar no terminal node lib/index.js
// so node abre um js no temrinal => e chama a biblioteca
// criar uma const mdlinks = require('./lib/index.js')
// depois => no js exportar => module.exports = mdlinks; 

//node.js as a file server

const fs = require('fs')

const mdlinks = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./README.md', 'utf8', (err, data) => {
      if (err) {
        reject(error)
      } else {
        // const regex = /\[(.*)\]\((.*)\)/gm
          const regex = /\[([^ ]\S+)\]\((\S+)\)/gm
          const result = data.match(regex)
          let arrayResult = []
        result.forEach(pair => {
          const arrayPair = pair.split('](');
          const arrayText = arrayPair[0]
          const arrayLinks = arrayPair[1]
          arrayResult.push({
            'href': arrayLinks.slice(0, arrayLinks.length-1),
            'text': arrayText.slice(1)
          })
        })
        
        resolve(arrayResult)
      }
    });
  });
};

module.exports = mdlinks
