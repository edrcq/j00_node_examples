function f(a) {
    return function s(b, c) {
        return (b + c) * a
    }
}

const f1 = f(1)
const a1 = f1(4, 5)
const a2 = f1(1, 2)
const a3 = f1(10, -10)

const f2 = f(a3)
const b1 = f2(60, 100)

console.log(
    f1.toString()
)