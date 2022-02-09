function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(50 - 1);
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(1, 19));