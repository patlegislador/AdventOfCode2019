//NodeJS Solution - Reading the inputs from a text file instead of getting from the DOM

const fs = require('fs');

const getFuel = mass => {
    return Math.floor(mass / 3) - 2;
}

const getTotalFuel = fuel => {
    let totalFuel = 0;
    let ongoing = true;
    while (ongoing) {
        fuel = getFuel(fuel);
        fuel <= 0 ? ongoing = false : totalFuel += fuel;
    }
    return totalFuel;
}

let modules = fs.readFileSync('input.txt', 'utf-8').split('\n');
let numberItems = modules.map(item => +item);
numberItems.reduce((acc, next) => acc + getTotalFuel(next), 0)