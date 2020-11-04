const OPTION_1 = 'OK'

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

export function createObject() {
    return 1
}

export {
    promisify,
    func2,
    OPTION_1,
}