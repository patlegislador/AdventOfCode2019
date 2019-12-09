const fs = require('fs')

const path_one = {
    X: 0,
    Y: 0
}

const path_two = {
    X: 0,
    Y: 0
}

fs.readFile('Day 3/wires1.txt', (err, data) => {
    if (err) throw err;

    const wires1 = data.toString().split(',')

    wires1.forEach(item => console.log(item))
})

fs.readFile('Day 3/wires2.txt', (err, data) => {
    if (err) throw err;

    const wires2 = data.toString().split(',')
})