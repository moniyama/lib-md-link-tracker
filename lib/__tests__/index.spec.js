//ver datalovers
//teste apenas no index.js
//colocar require em constante 

const mdLinks = require("../index.js");

describe("testando a função mdlinks", () => {
  it("é uma função", () => {
    expect(typeof mdLinks).toBe("function");
  });
});
