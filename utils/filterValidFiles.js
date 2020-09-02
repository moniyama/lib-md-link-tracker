const isValidFile = require("./validateFileExtension");

const filterValidFiles = (array) => {
	return new Promise((resolve, reject) => {
		Promise.allSettled(array.map((file) => isValidFile(file)))
			.then((results) => {
				const filter = results.filter((item) => item.status === "fulfilled");
				filter.length
					? resolve(filter)
					: reject("Não há files com a extensão desejada");
			})
	});
};

module.exports = filterValidFiles;
