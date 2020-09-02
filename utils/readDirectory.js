const fs = require("fs");
const path = require("path");

const readDirectory = (inputPath) => {
	return new Promise((resolve, reject) => {
		fs.readdir(inputPath, (err, files) => {
			if (err) return reject(err);
			const arrayContents = files.map((file) => inputPath.concat(file));
			return resolve(arrayContents);
		});
	});
};

module.exports = readDirectory;
