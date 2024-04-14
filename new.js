const fs = require('fs');
let floor = 0
fs.readFile('./input.txt', (err,data)=> {
    console.time('chall')
    if (err) {
        console.log(err);
} else {
    const cont = data.toString()
    for (let i = 0; i < cont.length; i++) {
    if (cont[i]==='(') {
        floor++
    } else if (cont[i]===')'){
        floor--
    }
    if (floor === -1) {
        console.log(i+1);
        break;
    }
}
console.log(floor);
}
console.timeEnd('chall')
})

// Andrei's way

// function question1() {
// fs.readFile('./input.txt', (err, data) => {
// console.time('santa-time');
// const directions = data.toString();
// const directionsArray = directions.split('');
// const answer = directionsArray.reduce((acc, currentValue) =>{
// if (currentValue === '(') {
// return acc += 1
// } else if (currentValue === ')') {
// return acc -= 1
// }
// }, 0)
// console.timeEnd('santa-time'); 
// console.log('floor:', answer);
// })
// }
// question1()

// function question2() {
//     fs.readFile('./input.txt', (err, data) => {
// console.time('santa-time');
// const directions = data.toString();
// const directionsArray = directions.split('');
// let acc = 0
// let counter = 0
// const answer = directionsArray.some((currentValue)=>{
//     if (currentValue === '(') {
//     acc += 1
//     } else if (currentValue === ')') {
//     acc -= 1
//     }
//     counter++
//     return acc<0;
//     })
// console.timeEnd('santa-time');
// console.log(counter);
// })
// }
// question2()