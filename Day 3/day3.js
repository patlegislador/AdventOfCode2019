const fs = require('fs')

fs.readFile('Day 3/wires1.txt', (err, data) => {
    if (err) throw err;

    const path_one = {
        //determines current position
        X: 0,
        Y: 0
    }

    const wires1 = data.toString().split(',')

    wires1.forEach(item => {
        let direction = item.charAt(0);
        let steps = +(item.slice(1))
        if (direction === 'R') path_one.X += steps
        else if (direction === 'L') path_one.X -= steps
        else if (direction === 'U') path_one.Y += steps
        else if (direction === 'D') path_one.Y -= steps
        else return
    });


    fs.readFile('Day 3/wires2.txt', (err, data) => {
        if (err) throw err;

        const wires2 = data.toString().split(',')

        wires2.forEach(item => {

        })
    })
})