async function main() {
    try {
        console.log('Hope we are waiting now')
        const result = await waitSomeTime(2000)
        console.log(result)
    }
    catch (err) {
        console.error({ err })
    }
}

function bis() {
    console.log('Hope we are waiting now')
    waitSomeTime(2000)
        .then(result => {
            console.log({ result })
        })
        .catch(err => {
            console.error({ err })
        })
}

function waitSomeTime(ms = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(true)
        }, ms)
    })
} 

bis()
