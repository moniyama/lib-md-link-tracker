const mdlinks = require('./lib/index.js')

mdlinks()
    .then((result) => {
        result.forEach(element => {
            console.log(element.href + " " + element.text)
        });
    })
    .catch((error) => console.log(error))