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
        const regex = /[^\!]\[([^ ]\S+)\]\((\S+)\)/gm // não pega imagens!
        // const regex =/[^\!]\[([^ ]\S+|[^ ].*)\]\((\S+)\)/gm //pega index
        // const regex = /\[([^ ]\S+)\]\((\S+)\)/gm //primeiro
          const result = data.match(regex)
          let arrayResult = []
        result.forEach(pair => {
          const arrayPair = pair.split('](');
          const arrayText = arrayPair[0].split('[')[1]
          const arrayLinks = arrayPair[1].split(')')[0]
          arrayResult.push({
            'href': arrayLinks,
            'text': arrayText
          })
        })
        resolve(arrayResult)
      }
    });
  });
};

module.exports = mdlinks
