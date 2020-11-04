var myAddress = {
    country: 'FR',
    street: '11 rue des pommiers',
}

var yourAddress = {
    country: 'FR',
    street: '11 rue des pommiers',
}

console.log(myAddress)

changeAddress(myAddress, 'test')

console.log(myAddress)

function changeAddress(address, street) {
    address.street = street
    // return address
}