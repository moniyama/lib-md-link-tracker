//ver datalovers
//teste apenas no index.js
//colocar require em constante 

const mdLinks = require("../index.js");
describe ("testando a função mdlinks", () => {
  it("é uma função", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it("retorna uma array de objetos", () => {
    return expect(mdLinks("./lib/__tests__/links.md")).resolves.toEqual(
      [
        { href: 'www.site1.com', text: 'Teste1' },
        { href: 'site2.com', text: 'Teste2' },
        { href: 'www.site3.com', text: 'Teste3' }
      ]);
  });

  it("retorna uma array vazia para arquivos sem links", () => {
    return expect(mdLinks("./lib/__tests__/vazio.md")).resolves.toEqual("[]");
  });

  it("retorna o erro", () => {
    return expect(mdLinks("")).rejects.toEqual("Error: ENOENT: no such file or directory, open ''")
  });

});
