#!/usr/bin/env node

const mdlinks = require("./lib/index.js");

mdlinks(process.argv[2])
	.then((result) => {
		result.forEach((element) => {
			console.log(element.href, element.text.substring(0, 50));
		});
	})
	.catch(() =>
		console.log("Ocorreu um erro: Arquivo/diretório não encontrado!")
	);
