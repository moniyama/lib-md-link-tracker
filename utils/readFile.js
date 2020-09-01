const fs = require("fs");
const matchRegexArray = require("../utils/matchRegexArray.js");
const formatArray = require("../utils/formatArray.js");

const readFile = (pathFile) => {
	return new Promise((resolve, reject) => {
		fs.readFile(pathFile, "utf8", (err, data) => {
			if (err) reject(err);
			else
				matchRegexArray(data)
					? resolve(formatArray(matchRegexArray(data)))
					: reject("Não há links no arquivo");
		});
	});
};

module.exports = readFile;
