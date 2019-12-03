const mdLinks = require("../index.js");
describe("testando a função mdlinks", () => {
  it("é uma função", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it("retorna uma array de objetos com propriedades de href e text", () => {
    return expect(mdLinks("./lib/__tests__/links.md")).resolves.toEqual(
      [
        { href: "https://nodejs.org/docs/latest-v0.10.x/api/modules.html",
          text: "(CommonJS)" },
        { href: "https://nodejs.org/api/fs.html", text: "fs" },
        { href: "https://nodejs.org/api/path.html", text: "path" },
        { href: "https://medium.com/@alcidesqueiroz/javascript-ass%C3%ADncrono-callbacks-promises-e-async-functions-9191b8272298",
          text: "JavaScript ass�ncrono: callbacks, promises e async\r\n  functions" },
        { href: "https://docs.npmjs.com/getting-started/publishing-npm-packages",
          text: "Publicar\r\n  package" },
        { href: "http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175",
          text: "M�dulos, librer�as, paquetes, frameworks... �cu�l es la\r\n  diferencia?" }
      ]);
  });

  it("retorna uma array vazia para arquivos que não possuem links", () => {
    return expect(mdLinks("./lib/__tests__/vazio.md")).resolves.toEqual("[]");
  });

  it("retorna um erro quando o arquivo/diretorio não é identificado", () => {
    return expect(mdLinks("")).rejects.toEqual("Error: ENOENT: no such file or directory, open ''");
  });

});
