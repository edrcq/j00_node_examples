const fs = require('fs')

async function main() {
    const readFileAsync = promisify(fs.readFile)

    readFileAsync('03test.js')
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.error(err)
        })
}

/* Student part */

function promisify(func) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            func(...args, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    }
}




main()