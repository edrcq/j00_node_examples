const fs = require('fs')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var userInput;


function readFileAsync(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

readline.question('Enter a name:\n', async input => {
    console.log(`Reading file ${input}...`);

    readFileAsync(input)
        .then(data => {
            console.log('FILE READ')
            console.log(data.toString())
        })
        .catch(err => {
            console.error({
                err
            })
        })

    console.log('readline closed !')
    readline.close();
});


