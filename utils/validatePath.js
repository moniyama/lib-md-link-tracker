const fs = require("fs");
const path = require("path");

const isValid = (inputPath) => {
	const extensionFile = ".md";
	return new Promise((resolve, reject) => {
		fs.stat(inputPath, (err, stat) => {
			if (err) reject(err);
			else if (stat.isDirectory())
				resolve("isDirectory");
			else if (stat.isFile() && path.extname(inputPath) === extensionFile) {
				resolve("isFile");
			}
		});
	});
};

module.exports = isValid;
