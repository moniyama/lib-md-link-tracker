const fs = require("fs");
const isValid = require("../utils/validatePath.js");
const readFile = require("../utils/readFile.js");

const mdlinks = (path) => {
	return new Promise((resolve, reject) => {
		isValid(path)
			.then((type) => {
				if (type === "isFile") {
					readFile(path).then((res) => resolve(res));
				} else if (type === "isDirectory") {
					console.log("read Dir");
				}
			})
			.catch((err) => reject(err));
	});
};

module.exports = mdlinks;
