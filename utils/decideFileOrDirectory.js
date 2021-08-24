const fs = require("fs");
const path = require("path");

const isFileOrDirectory = (inputPath) => {
	return new Promise((resolve, reject) => {
		let result = {
			path: inputPath
		}
		fs.stat(inputPath, (err, stat) => {
			if (err) reject(err);
			else if (stat.isFile()) resolve({ ...result, type: "file" });
			else if (stat.isDirectory()) resolve({ ...result, type: "dir" });
		});
	});
};

module.exports = isFileOrDirectory;
