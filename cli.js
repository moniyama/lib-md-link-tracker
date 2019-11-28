#!/usr/bin/env node

// linha para utilizar o bin no node.js que está no package.json
//package.json: geralmente o name = comando excutável no bin
    //package.json:
    //echo é pra printar na tela
    //'jest --coverage' mostra a tabela % do teste
const mdlinks = require('./lib/index.js')

mdlinks(process.argv[2])
    .then((result) => {
        result.forEach(element => {
            console.log(element.href + " " + element.text)
        });
        console.log(process.argv)
    })
    .catch((error) => console.log(error))