const fs = require("fs");
const fetch = require("node-fetch");
const path = require("path");

const bringArrayOfFiles = (inputPath) => {
  return new Promise((resolve, reject) => {
    let result = [];
    const savePath = (file) => {
      if (path.parse(file).ext === ".md") {
        result = [...result, file];
        console.log(result)
      }
      return result;
    };

    const checkDirContent = (pathDir) => {
      const parsePath = (ir = path.parse(pathDir));
      fs.readdir(pathDir, (err, files) => {
        if (err) return reject(err);
        const arrayOfdirContent = files.map((file) =>
          path.join(parsePath.dir, parsePath.base, file)
        );
        arrayOfdirContent.map((content) => verifyPath(content));
      });
    };

    const verifyPath = (inputPath) => {
      // !path.parse(inputPath).ext ? checkDirContent(inputPath) : savePath(inputPath);        // one way
      return fs.stat(inputPath, (err, stat) => {                                          // other way
        stat.isDirectory() ? checkDirContent(inputPath) : savePath(inputPath);
      });
    };

    // let result = [];
    // const verifyPath = (inputPath) => {
    //   return fs.stat(inputPath, (err, stat) => {
    //     if (err) return console.log("err of fs stats");
    //     if (stat.isDirectory()) {                               // -----------  é diretorio
    //       console.log("is directory", inputPath);
    //       const parsePath = (ir = path.parse(inputPath));
    //       fs.readdir(inputPath, (err, files) => {
    //         if (err) return console.log("err of readdir");
    //         const arrayOfdirContent = files.map((file) =>
    //           path.join(parsePath.dir, parsePath.base, file)
    //         );
    //         arrayOfdirContent.map((content) => verifyPath(content));
    //       });
    //     } else if (path.parse(inputPath).ext === ".md") {       // --------------- não é diretorio e tem extensáo .md
    //       console.log("result", result);
    //       result = [...result, inputPath];
    //     }
    //   });
    // };

    verifyPath(inputPath);
  });
};

const mdlinks = (pathFile, options) => {
  return new Promise((resolve, reject) => {
    let resultArray = []
    let filesArray = []
    const readFile = (pathFile, options) => {
      fs.readFile(pathFile ,'utf8' ,(err, data) => {
        console.log('lendo arquivo:', pathFile)
        if(err) { //  há erro no caminho do arquivo
          reject(err)
        } else {   // file encontrado
          const arrayLinks = data.match(/[^!]\[(.[^\]]*)\]\(([^#]\S+)\)/gm)
          arrayLinks.forEach((item, index) => {
            const array = item.split("](")
            const href = array[1].split(")")[0];
            resultArray = [...resultArray, {
              "href": href,
              "text": array[0].split("[")[1].replace(/\r?\n/g, ""),
              "file": path.basename(pathFile),
            }]
            console.log("resultArray", resultArray.length)
          });
          // if(options.validate) {
          //   Promise.all(
          //     resultArray.map(url => {
          //       return fetch(url.href).then(res => {
          //         return {...url, statusCode: res.status, statusMessage: res.statusText}
          //       })
          //     })
          //   )
          //   .then((result) => resolve(result))
          // } else resolve(resultArray)
        }
      })
    }

    const savePath = (file) => {
      if (path.parse(file).ext === ".md") {
        // readFile(file, options)
        filesArray = [...filesArray, file];
        console.log("filesArray", filesArray)
      }
      // return result;
    };

    const checkDirContent = (pathDir) => {
      const parsePath = (ir = path.parse(pathDir));
      fs.readdir(pathDir, (err, files) => {
        if (err) return reject(err);
        const arrayOfdirContent = files.map((file) =>
          path.join(parsePath.dir, parsePath.base, file)
        );
        arrayOfdirContent.map((content) => {
          !path.parse(content).ext ? checkDirContent(content) : savePath(content);
        });
      });
    };

    fs.stat(pathFile, (err, stat) => {                                          // other way
        stat.isDirectory() ? checkDirContent(pathFile) : filesArray = [...filesArray, pathFile ];
    });

    // Promise.all(filesArray.map(item => readFile(item, options)))











    // fs.readFile(pathFile ,'utf8' ,(err, data) => {
    //   if(err) { //  há erro no caminho do arquivo
    //     reject(err)
    //   } else {   // file encontrado
    //     let resultArray = []
    //     const arrayLinks = data.match(/[^!]\[(.[^\]]*)\]\(([^#]\S+)\)/gm)
    //     arrayLinks.forEach((item, index) => {
    //       const array = item.split("](")
    //       const href = array[1].split(")")[0];
    //       resultArray[index] = {
    //         "href": href,
    //         "text": array[0].split("[")[1].replace(/\r?\n/g, ""),
    //         "file": path.basename(pathFile),
    //       }
    //     });
    //     if(options.validate) {
    //       Promise.all(
    //         resultArray.map(url => {
    //           return fetch(url.href).then(res => {
    //             return {...url, statusCode: res.status, statusMessage: res.statusText}
    //           })
    //         })
    //       ).then((result) => resolve(result))
    //     } else resolve(resultArray)
    //   }
    // })
  });
};

// /Users/Moni/Documents/forks-SAP004/SAP004-md-links/README.md     => workd

module.exports = mdlinks;

// module.exports = () => {
// ...
// };
