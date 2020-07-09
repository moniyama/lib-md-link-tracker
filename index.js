const fs = require("fs");
const fetch = require("node-fetch");
const path = require("path");

// testar caminhos de erros

const isFile = (inputPath, extensionFile) => {
  return new Promise((resolve, reject) => {
    fs.stat(inputPath, (err, stat) => {
      if (err) reject(inputPath);
      else if (stat.isFile() && path.extname(inputPath) === extensionFile)
        resolve([inputPath]);
      else reject(inputPath);
    });
  });
};

const isDir = (path) => {
  return new Promise((resolve, reject) => {
    const errorMessage = `o caminho ${path} não é um diretório e nem um arquivo com extensão legível.`;
    fs.stat(path, (err, stat) => {
      if (err) reject(errorMessage);
      else if (stat.isDirectory()) resolve(path);
      else reject(errorMessage);
    });
  });
};

const readFile = (pathArray) => {
  const readFileContent = (pathFile) => {
    return new Promise((resolve, reject) => {
      fs.readFile(pathFile, "utf8", (err, data) => {
        if (err) reject(err);
        else resolve({ file: pathFile, data });
      });
    });
  };

  const getLinks = (rawArrayOfFiles) => {
    const array = rawArrayOfFiles.map((eachFile) => {
      const arrayOfMatches = eachFile.data.match(
        /[^!]\[(.[^\]]*)\]\(([^#]\S+)\)/gm
      );
      const formattedLinks = arrayOfMatches.map((item) => {
        const array = item.split("](");
        return {
          href: array[1].split(")")[0],
          text: array[0].split("[")[1].replace(/\r?\n/g, ""),
          file: eachFile.file,
        };
      });
      return formattedLinks;
    });
    return array.reduce((pre, curr) => pre.concat(curr), []);
  };

  return new Promise((resolve, reject) => {
    Promise.all(pathArray.map((pathFile) => readFileContent(pathFile)))
      .then((array) => getLinks(array))
      .then((data) => resolve(data))
      .catch((err) => reject(err));     // linha não coberta no teste
  });
};

const getDirContent = (dirPath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, files) => {
      if (err) return reject(err);
      const arrayOfdirContent = files.map((file) => dirPath.concat(file));
      return resolve(arrayOfdirContent);
    });
  });
};

const separateFilesAndDirArray = (array, extensionFile) => {
  return new Promise((resolve, reject) => {
    let mdFiles = [],
      otherFiles = [];
    if (array) {
      array.forEach((eachPath) => {
        path.extname(eachPath) === extensionFile
          ? (mdFiles = [...mdFiles, eachPath])
          : (otherFiles = [...otherFiles, eachPath]);
      });
      resolve({ mdFiles, otherFiles });
    } 
    else reject("não há arquivos md no file");       // precisa retornar esse erro // nao cobre esse erro
  });
};

const mdlinks = (inputPath, options) => {
  const getData = (path) => {
    const extensionFile = ".md";
    return new Promise((resolve, reject) => {
      isFile(path, extensionFile)
        .then((pathFileArray) => readFile(pathFileArray))
        .then((data) => resolve(data))
        .catch((path) => {
          isDir(path)
            .then((dirPath) => getDirContent(dirPath))
            .then((array) => separateFilesAndDirArray(array, extensionFile))
            .then((obj) => {
              readFile(obj["mdFiles"]).then((array) => resolve(array));
            })
            .catch((err) => reject(err));
        });
    });
  };

  const getDataWithValidation = (path) => {
    return new Promise((resolve, reject) => {
      getData(path)
        .then((result) => {
          Promise.all(
            result.map((url) => {
              return fetch(url.href).then((res) => {
                return {
                  ...url,
                  statusCode: res.status,
                  statusMessage: res.statusText,
                };
              });
            })
          ).then((result) => resolve(result));
        })
        .catch((err) => reject(err));
    });
  };

  return options.validate ? getDataWithValidation(inputPath) : getData(inputPath);
};

module.exports = mdlinks;
