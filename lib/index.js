const fs = require("fs");
const isValidFile = require("../utils/validateFileExtension.js");
const readFile = require("../utils/readFile.js");
const readDirectory = require("../utils/readDirectory.js");
const filterValidFiles = require("../utils/filterValidFiles.js");
const isFileOrDirectory = require("../utils/decideFileOrDirectory.js");
const getData = require("../utils/getData.js");

const mdlinks = (path) => {
	return new Promise((resolve, reject) => {
		resolve(getData(path))
	})
};

module.exports = mdlinks;
