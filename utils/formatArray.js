const formatArray = (array, file) => {
  return array.map((pair) => {
    const arrayPair = pair.split("](");
    return {
      file: file,
      href: arrayPair[1].split(")")[0],
      text: arrayPair[0].split("[")[1].replace(/\r?\n?/g, ""),
    };
  });
};

module.exports = formatArray;