const fs = require("fs");
const getData = require("../utils/getData.js");
const validateLink = require("../utils/validateLink.js");

const mdlinks = (path, options) => {
	return new Promise((resolve, reject) => {
		options.validate
			? getData(path)
				.then(array => Promise.all(array.map(link => validateLink(link)))
					.then(res => resolve(res)))
				.catch(err => {console.log("err index.js", err); reject(err)})
			: getData(path).then(res => resolve(res)).catch(err => reject(err))
	});
};

module.exports = mdlinks;
