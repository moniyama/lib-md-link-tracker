const fs = require("fs");
const fetch = require("node-fetch");
const path = require("path");

const isFile = (inputPath, extensionFile) => {
  return new Promise((resolve, reject) => {
    fs.stat(inputPath, (err, stat) => {
      if(err) reject(inputPath)
      else if(stat.isFile() && path.extname(inputPath) === extensionFile) resolve([inputPath])
      else reject(inputPath)
    })
  })
}

const isDir = (path) => {
  return new Promise((resolve, reject) => {
    const errorMessage = `o caminho ${path} não é um diretório e nem um arquivo com extensão legível.`
    fs.stat(path, (err, stat) => {
      if(err) reject(errorMessage)
      else if(stat.isDirectory()) resolve(path)
      else reject(errorMessage)
    })
  })
}

const readFile = (pathArray) => {
  const readFileContent = (pathFile) => {
    return new Promise((resolve, reject) => {
      fs.readFile(pathFile ,'utf8' ,(err, data) => {
        if(err) reject(err)
        else resolve({"file": pathFile, data}) 
      })
      
    })
  }

  const getLinks = (rawArrayOfFiles) => {
    const array = rawArrayOfFiles.map((eachFile) => {
      const arrayOfMatches = eachFile.data.match(/[^!]\[(.[^\]]*)\]\(([^#]\S+)\)/gm)
      const formattedLinks = arrayOfMatches.map(item => {
        const array = item.split("](")
        return {
          "href": array[1].split(")")[0],
          "text": array[0].split("[")[1].replace(/\r?\n/g, ""),
          "file": eachFile.file
        }
      })
      return formattedLinks
    })
    return array.reduce((pre, curr) => pre.concat(curr))
  }

  return new Promise((resolve, reject) => {
    Promise.all(pathArray.map(pathFile => readFileContent(pathFile)))
    .then(array => getLinks(array))
    .then(data => resolve(data))
    .catch(err => reject(err))
  })
}

const getDirContent = (dirPath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, files) => {
      if (err) return reject(err);
      const arrayOfdirContent = files.map((file) => path.join(dirPath, file));
      return resolve(arrayOfdirContent)
    })
  })
}

const separateFilesAndDirArray = (array, extensionFile) => {
  return new Promise((resolve, reject) => {
    let mdFiles = [], otherFiles = [];
    if(array) {
      array.forEach(eachPath => {
        if(path.extname(eachPath) === extensionFile) {
          mdFiles = [...mdFiles, eachPath]
        } else {
          otherFiles = [...otherFiles, eachPath]
        }
      })
      // tratar otherFiles => garantir que todos q estáo sao dir
      // otherFiles.map(link => {
      //   isDir(link) 
      //     .then(path => {
      //       console.log('path', path)
      //       dirPaths = [...dirPaths, path]
      //     })
      //     .catch(err => console.log(err))
      // })
      resolve({ mdFiles, otherFiles })
    } else {
      reject(null)
    }
  })
}

const mdlinks = (inputPath, options) => {

  const extensionFile = ".md"
  return new Promise((resolve, reject) => {
    isFile(inputPath, extensionFile)
      .then(pathFileArray => readFile(pathFileArray))
      .then(data => console.log("data", data))
      .catch(path => { 
        isDir(path)
          .then(dirPath => getDirContent(dirPath))
          .then(array => separateFilesAndDirArray(array, extensionFile))
          .then(obj => {
            readFile(obj['mdFiles'])
              .then(array => resolve(array))
          })
          .catch(err => console.log("err", err))
      })
        
    //     if(options.validate) {
    //       Promise.all(
    //         resultArray.map(url => {
    //           return fetch(url.href).then(res => {
    //             return {...url, statusCode: res.status, statusMessage: res.statusText}
    //           })
    //         })
    //       ).then((result) => resolve(result))
    //     } else resolve(resultArray)
    // }




    // let resultArray = []
    // let filesArray = []
    // const readFile = (pathFile, options) => {
    //   fs.readFile(pathFile ,'utf8' ,(err, data) => {
    //     console.log('lendo arquivo:', pathFile)
    //     if(err) { //  há erro no caminho do arquivo
    //       reject(err)
    //     } else {   // file encontrado
    //       const arrayLinks = data.match(/[^!]\[(.[^\]]*)\]\(([^#]\S+)\)/gm)
    //       arrayLinks.forEach((item, index) => {
    //         const array = item.split("](")
    //         const href = array[1].split(")")[0];
    //         resultArray = [...resultArray, {
    //           "href": href,
    //           "text": array[0].split("[")[1].replace(/\r?\n/g, ""),
    //           "file": path.basename(pathFile),
    //         }]
    //         console.log("resultArray", resultArray.length)
    //       });
    //       // if(options.validate) {
    //       //   Promise.all(
    //       //     resultArray.map(url => {
    //       //       return fetch(url.href).then(res => {
    //       //         return {...url, statusCode: res.status, statusMessage: res.statusText}
    //       //       })
    //       //     })
    //       //   )
    //       //   .then((result) => resolve(result))
    //       // } else resolve(resultArray)
    //     }
    //   })
    // }

    // const savePath = (file) => {
    //   if (path.parse(file).ext === ".md") {
    //     // readFile(file, options)
    //     filesArray = [...filesArray, file];
    //     console.log("filesArray", filesArray)
    //   }
    //   // return result;
    // };

    // const checkDirContent = (pathDir) => {
    //   const parsePath = (ir = path.parse(pathDir));
    //   fs.readdir(pathDir, (err, files) => {
    //     if (err) return reject(err);
    //     const arrayOfdirContent = files.map((file) =>
    //       path.join(parsePath.dir, parsePath.base, file)
    //     );
    //     arrayOfdirContent.map((content) => {
    //       !path.parse(content).ext ? checkDirContent(content) : savePath(content);
    //     });
    //   });
    // };

    // fs.stat(pathFile, (err, stat) => {                                          // other way
    //     stat.isDirectory() ? checkDirContent(pathFile) : filesArray = [...filesArray, pathFile ];
    // });

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
