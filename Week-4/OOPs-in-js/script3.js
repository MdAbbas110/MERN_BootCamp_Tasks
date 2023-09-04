const person = {
    _age: 0
}

Object.defineProperties(person, 'name',{
    value: 'abbas',
    writable: false,
    enumerable: true,
    configurable: false
})

Object.defineProperties(person, 'email',{
    value: 'abbas110@gmail.com',
    writable: false,
    enumerable: true,
    configurable: false
})

Object.defineProperties(person, 'age', {
    set: function(value) {
        this._age = value
    },
    enumerable: true,
    configurable: false
})
