async function main() {
    readFileAsyncCheat('x03test.js')
        .then(res => {
            console.log(res.toString())
        })
        .catch(err => {
            console.log('REJECTED')
            console.error(err)
        })
}


/* Student part */
const fs = require('fs')
const util = require('util')

const readFileAsyncCheat = util.promisify(fs.readFile)

function readFileAsync(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

main()