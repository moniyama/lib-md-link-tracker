#!/usr/bin/env node

// linha para utilizar o bin no node.js que está no package.json
//package.json: geralmente o name = comando excutável no bin

const mdlinks = require('./lib/index.js')

mdlinks()
    .then((result) => {
        result.forEach(element => {
            console.log(element.href + " " + element.text)
        });
    })
    .catch((error) => console.log(error))