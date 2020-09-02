const fs = require("fs");
const path = require("path");

const isValidFile = (inputPath) => {
	const extensionFile = ".md";
	return new Promise((resolve, reject) => {
		fs.stat(inputPath, (err, stat) => {
			if (err) reject(err);
			else if (stat.isFile() && path.extname(inputPath) === extensionFile) {
				resolve(inputPath);
			} else reject(`${inputPath} não é válido`);
		}) ;
	});
};

module.exports = isValidFile;
