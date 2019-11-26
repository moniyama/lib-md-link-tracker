// para chamar e testear o arquivo, usar no terminal node lib/index.js
// so node abre um js no temrinal => e chama a biblioteca
// criar uma const mdlinks = require('./lib/index.js')
// depois => no js exportar => module.exports = mdlinks; 

//node.js as a file server

const fs = require('fs')

const mdlinks = () => {
    fs.readFile('/Users/admin/Documents/Projetos/SAP003-md-links/README.md', 'utf8', (err, data) => {
        const regex = /^\[(.*)\]\((.*)\)/gm
        const result = data.match(regex)
        console.log(result)
        if (err) throw err;
      })
}

mdlinks();

// '^\[(.*)\]\((.*)\)'  // codigo para pegar global e multiline