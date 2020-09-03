const fs = require("fs");
const getData = require("../utils/getData.js");
const validateLink = require("../utils/validateLink.js");

const mdlinks = (path, options) => {
	return new Promise((resolve, reject) => {
		const hasValidation = async () => {
			if (options.validate) {
				try {
					const data = await getData(path)
					const res = await Promise.all(data.map(link => validateLink(link)))
					return resolve(res)
				} catch (error) {
					reject(error)
				}
			} else {
				getData(path)
					.then(res => resolve(res)).catch(err => reject(err))
			}
		}
		hasValidation()
	});
};

module.exports = mdlinks;
