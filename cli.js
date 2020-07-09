#!/usr/bin/env node

const mdLinks = require("./index.js");
const path = process.argv[2];

const checkOptionInput = () => {
  let optionStatus = {};
  const optionsPossibilities = [process.argv[3], process.argv[4]];
  if (optionsPossibilities.includes("--validate")) {
    optionStatus.validate = true;
  }
  if (optionsPossibilities.includes("--stats")) {
    optionStatus.stats = true;
  }
  return optionStatus;
};

const countLink = (array) => {
  return {
    unique: [...new Set(array.map((item) => item.href))].length,
    total: array.length,
    break: array.map((item) => item.statusCode).filter((item) => item === 404)
      .length,
  };
};

const options = checkOptionInput();

mdLinks(path, options)
  .then((result) => {
    const statistics = countLink(result);
    if (options.stats) {
      // printa statics
      console.log("Total", statistics.total);
      console.log("Unique", statistics.unique);
    }
    if (options.stats && options.validate) {
      // printa statics de validate
      console.log("Break", statistics.break);
    }
    if (!options.stats) {
      // se nao tiver stats, print os links e suas propriedades
      result.forEach((link) => {
        link.hasOwnProperty("statusCode")
          ? console.log(
              link.file,
              link.href,
              link.text,
              link.statusCode,
              link.statusMessage
            )
          : console.log(link.file, link.href, link.text);
      });
    }
  })
  .catch((err) => console.log(err));
