const obj = {
    a: 5,
    hello: 'world'
}
const objBis = {...obj}
console.log(obj === objBis)

var { a, hello } = obj
// a = 5
// hello = world
a = 6
hello = '!world'
console.log(a, hello, obj)

function sum(...args) {
    let total = 0
    for(let n of args) {
        total += n
    }
    return total
}

function s_sum(...args) {
    return args.reduce((acc, val) => acc + val)
}

const ttl = sum(1, 2, 3, 4, a)
const ttl2 = s_sum(1, 2, 3, 4, a)
console.log(ttl, ttl2)

/* Array destructuring */

const arr = [ 1, 2, 3 ]
const arrBis = [...arr]