//ver datalovers
//teste apenas no index.js
//colocar require em constante 

const mdLinks = require("../index.js");
describe ("testando a função mdlinks", () => {
  it("é uma função", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it("trata arquivos sem links", () => {
    return expect(mdLinks("./lib/__tests__/links.md")).resolves.toEqual(
      [
        { href: 'www.site1.com', text: 'Teste1' },
        { href: 'site2.com', text: 'Teste2' },
        { href: 'www.site3.com', text: 'Teste3' }
      ]);
      // .then(data => expected(data).toEqual(
      //   [
      //     { href: 'www.site1.com', text: 'Teste1' },
      //     { href: 'site2.com', text: 'Teste2' },
      //     { href: 'www.site3.com', text: 'Teste3' }
      //   ]));
  });
});
