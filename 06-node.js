const fs = require('fs')

fs.readFile('./03test.js', (err, data) => {
    if (err) {
        return console.log('cannot read file')
    }
    console.log(data.toString())
})


function readFileAsync() {
    
}