const mdLinks = require("../index.js");
const testResult = require("./teste-results-mock.js");

const path = {
  unknownFile: "./unknown.md",
  unknownDirectory: "./unknownDir/",
  file: "./test/teste.md",
  directory: "./test/",
  txtFile: "./test/teste.txt",
  // emptyFileDir: "./test/dir_teste/",
};

const option = {
  valid: { validate: true},
  none: {}
};
const errorMessage = (path) => `o caminho ${path} não é um diretório e nem um arquivo com extensão legível.`

describe.skip("mdLinks reading a file with then test", () => {
  it("should be a function", () => {
    expect(Object.is(typeof mdLinks, "function")).toBe(true);
  });

  it("should return a array of objects", (done) => {
    const data = mdLinks(path.file, option.none);
    data.then((result) => {
      expect(result).toEqual(testResult.modules.simpleArray);
      done();
    });
  });

  it("should return error", (done) => {
    const data = mdLinks(path.unknownFile, option.none);
    data.catch((result) => {
      expect(result).toEqual(errorMessage(path.unknownFile));
      done();
    });
  });

  it("should return a array of objects with validate option", (done) => {
    const data = mdLinks(path.file, option.valid);
    data.then((result) => {
      expect(result).toEqual(testResult.modules.arrayWithValidateStatus);
      done();
    });
  });

  it("should return error with validate option", (done) => {
    const data = mdLinks(path.unknownFile, option.valid);
    data.catch((result) => {
      expect(result).toEqual(errorMessage(path.unknownFile));
      done();
    });
  });
});

describe.skip("mdLinks reading a dir with then test", () => {
  it("should return a array of objects", (done) => {
    const data = mdLinks(path.directory, option.none);
    data.then((result) => {
      expect(result).toEqual(testResult.modules.simpleArray);
      done();
    });
  });

  it("should return error", (done) => {
    const data = mdLinks(path.unknownDirectory, option.none);
    data.catch((result) => {
      expect(result).toEqual(errorMessage(path.unknownDirectory));
      done();
    });
  });

  it("should return a array of objects with validate option", (done) => {
    const data = mdLinks(path.directory, option.valid);
    data.then((result) => {
      expect(result).toEqual(testResult.modules.arrayWithValidateStatus);
      done();
    });
  });

  it("should return error with validate option", (done) => {
    const data = mdLinks(path.unknownDirectory, option.valid);
    data.catch((result) => {
      expect(result).toEqual(errorMessage(path.unknownDirectory));
      done();
    });
  });

  it("should return error when the path is neither a directory nor a file with .md extension", (done) => {
    const data = mdLinks(path.txtFile, option.valid);
    data.catch((result) => {
      expect(result).toEqual(errorMessage(path.txtFile));
      done();
    });
  });

  // it("should return error when the path has directory a directory with no links in a .md file", (done) => {
  //   const data = mdLinks(path.emptyFileDir, option.valid);
  //   data.catch((result) => {
  //     expect(result).toEqual("não há arquivos no teste");
  //     done();
  //   });
  // });

});

describe("mdLinks reading a file with async await", () => {
  it("should return a array of objects", async () => {
    const data = mdLinks(path.file, option.none);
    await expect(data).resolves.toEqual(testResult.modules.simpleArray);
  });

  it("should return error", async () => {
    const data = mdLinks(path.unknownFile, option.none);
    await expect(data).rejects.toEqual(errorMessage(path.unknownFile));
  });

  it("should return a array of objects with validate option", async () => {
    const data = mdLinks(path.file, option.valid);
    await expect(data).resolves.toEqual(testResult.modules.arrayWithValidateStatus);
  });

  it("should return error with validate option", async () => {
    const data = mdLinks(path.unknownFile, option.valid);
    await expect(data).rejects.toEqual(errorMessage(path.unknownFile));
  });
});

describe("mdLinks reading a dir with async awayt", () => {
  it("should return a array of objects", async () => {
    const data = mdLinks(path.directory, option.none);
    await expect(data).resolves.toEqual(testResult.modules.simpleArray);
  });

  it("should return error", async () => {
    const data = mdLinks(path.unknownDirectory, option.none);
    await expect(data).rejects.toEqual(errorMessage(path.unknownDirectory));
  });

  it("should return a array of objects with validate option", async () => {
    const data = mdLinks(path.directory, option.valid);
    await expect(data).resolves.toEqual(testResult.modules.arrayWithValidateStatus);
  });

  it("should return error with validate option", async () => {
    const data = mdLinks(path.unknownDirectory, option.valid);
    await expect(data).rejects.toEqual(errorMessage(path.unknownDirectory));
  });

  it("should return error when the path is neither a directory nor a file with .md extension", async() => {
    const data = mdLinks(path.txtFile, option.valid);
    await expect(data).rejects.toEqual(errorMessage(path.txtFile));
  });

});