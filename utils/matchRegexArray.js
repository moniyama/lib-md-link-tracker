const matchRegexArray = (fileContent) => {
  const regex = /[^!]\[(.[^\]]*)\]\(([^#]\S+)\)/gm;
  return fileContent.match(regex);
};

module.exports = matchRegexArray;