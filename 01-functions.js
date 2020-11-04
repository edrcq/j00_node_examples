function hello() {

}


// anonymous - inferred name
var awesomeFunction = function(coolThings) {
    // ..
    return amazingStuff;
};

awesomeFunction.name;
// "awesomeFunction"








/* part 2 */

var awesomeFunction = function someName(coolThings) {
    // ..
    return amazingStuff;
};

awesomeFunction.name;
// "someName"


/* part 3 */

// async function declaration
async function three() {

}


var f;
f = (x, y) => 42; // 42

f = x => x * 2;
f = x => { return x * 2; };

f = (x) => x * 2;
f = async (x,y) => x * y;

f = x => ({ x: x * 2 }); // { x: }

f = async x => {
    var y = await doSomethingAsync(x);
    return y * 2;
};