#!/usr/bin/env node

const mdlinks = require("./lib/index.js");

mdlinks(process.argv[2])
	.then((result) => {
		console.log(result)
		// result.forEach((element) => {
			// console.log(element.href, element.text.substring(0, 50));
		// });
	})
	.catch((err) =>
		console.log(`Ocorreu um erro: "${err}"`)
	);
