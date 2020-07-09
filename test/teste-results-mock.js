const simpleArray = [
  {
    href: "http://pt.wikipedia.org/wiki/Makdown",
    text: "link errado",
    file: "./test/teste.md",
  },
  {
    href: "https://pt.wikipedia.org/wiki/Markdown",
    text: "Texto sobre Markdown",
    file: "./test/teste.md",
  },
  {
    href: "https://regex101.com/",
    text: "Online Regex Tester",
    file: "./test/teste.md",
  },
  {
    href: "https://regexr.com/",
    text: "Regexr",
    file: "./test/teste.md",
  },
];

const arrayWithValidateStatus = [
  {
    href: "http://pt.wikipedia.org/wiki/Makdown",
    text: "link errado",
    file: "./test/teste.md",
    statusCode: 404,
    statusMessage: "Not Found",
  },
  {
    href: "https://pt.wikipedia.org/wiki/Markdown",
    text: "Texto sobre Markdown",
    file: "./test/teste.md",
    statusCode: 200,
    statusMessage: "OK",
  },
  {
    href: "https://regex101.com/",
    text: "Online Regex Tester",
    file: "./test/teste.md",
    statusCode: 200,
    statusMessage: "OK",
  },
  {
    href: "https://regexr.com/",
    text: "Regexr",
    file: "./test/teste.md",
    statusCode: 200,
    statusMessage: "OK",
  },
];

exports.modules = {
  simpleArray,
  arrayWithValidateStatus,
};
