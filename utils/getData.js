const fs = require("fs");
const isValidFile = require("./validateFileExtension.js");
const readFile = require("./readFile.js");
const readDirectory = require("./readDirectory.js");
const filterValidFiles = require("./filterValidFiles.js");
const isFileOrDirectory = require("./decideFileOrDirectory.js");

const getData = (path) => {
	return new Promise((resolve, reject) => {
		isFileOrDirectory(path)
			.then((res) => {
				if (res.type === "dir") {
					readDirectory(res.path)
						.then((array) => {
							filterValidFiles(array)
								.then((array) =>
									Promise.allSettled(
										array.map((file) => readFile(file.value))
									).then((res) => {
										resolve(
											res
												.filter((item) => item.status === "fulfilled")
												.map((file) => file.value)
												.reduce((acc, current) => acc.concat(current))
										)
									}
									)
								)
								.catch((err) => reject(err));
						})
						.catch((err) => reject(err));
				} else {
					isValidFile(res.path)
						.then((path) =>
							readFile(path)
								.then((result) => resolve(result))
								.catch((err) => reject(err))
						)
						.catch((err) => reject(err));
				}
			})
			.catch((err) => reject(err));
	});
};

module.exports = getData