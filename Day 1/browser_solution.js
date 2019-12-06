//THIS SOLUTION IS TO BE RAN @ https://adventofcode.com/2019/day/1/input

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

let items = document.querySelector('pre').innerText.split('\n');
items.pop();
let numberItems = items.map(item => +item);
numberItems.reduce((acc, next) => acc + getTotalFuel(next), 0)