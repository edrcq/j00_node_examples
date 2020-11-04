function Classroom(students = []) {
    this.students = students
}

Classroom.prototype.welcome = function welcome() {
    for (let stud of this.students) {
        console.log('Hello ' + stud)
    }
}

Classroom.generate = function() {
    return new Classroom([])
}

const myClass = new Classroom(['Henry'])
myClass.welcome()


/*

class MyClass {
    constructor(name) {
        this.name = name
    }

    hello() {
        console.log(`Hello ${this.name}`)
    }

    say() {

    }
}

const c = new MyClass('nobody')
c.hello()

*/