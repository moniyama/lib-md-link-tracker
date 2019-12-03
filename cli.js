#!/usr/bin/env node

const mdlinks = require("./lib/index.js");

mdlinks(process.argv[2])
  .then((result) => {
    Array.isArray(result)
      ? result.forEach(element => {
        console.log(element.href, element.text);
      })
      : console.log("Não há links no arquivo");
  })
  .catch(() => { console.log("Ocorreu um erro: Arquivo/diretório não encontrado!");});