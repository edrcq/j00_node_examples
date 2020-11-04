function getKey(k) {
    return 'key_' + k
}

const obj = {
    id: 1,
    name: 'Paris'
}

obj[getKey('age')] = 20