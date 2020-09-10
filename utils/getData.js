const fs = require("fs");
const isValidFile = require("./validateFileExtension.js");
const readFile = require("./readFile.js");
const readDirectory = require("./readDirectory.js");
const filterValidFiles = require("./filterValidFiles.js");
const isFileOrDirectory = require("./decideFileOrDirectory.js");

const getData = async (path) => {
	try {
		const res = await isFileOrDirectory(path)
		if (res.type === "dir") {
			try {
				const array = await readDirectory(res.path)
				const filter = await filterValidFiles(array)
				const result = await Promise.allSettled(filter.map((file) => readFile(file.value)))
				return (
					result
						.filter((item) => item.status === "fulfilled")
						.map((file) => file.value)
						.reduce((acc, current) => acc.concat(current))
				)
			} catch (error) { console.log("error getData", error); return error }
		} else {
			try {
				const path = await isValidFile(res.path)
				const result = await readFile(path)
				return result
			} catch (error) { return error }
		}
	} catch (error) { return error }
}

module.exports = getData