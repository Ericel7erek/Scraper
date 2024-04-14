
// let c;
// if (1===1){
//   const { large } = await import('./exports.js')
//   c = large
// }
// const b = 7
// console.log(c,b);

// const a = require("fs")
// console.log(a);

// const http = require("http")
// console.log(http);

const fs = require("fs")
// Append
// fs.appendFile('./hello.txt', 'this is world', err => {
//   if(err) {
//   console.log(err)}
// });

// Write
  // fs.writeFile('./bye.txt', 'this is the END...', err =>{
  //   if(err) {
  //     console.log(err)
  // }})

// Delete
  fs.unlink('./bye.txt', err =>{
    if(err) {
      console.log(err);
  }
  console.log('Inception');
})

fs.readFile('./hello.txt', (err, data) => {
  if(err) {
    console.log(err)
  } console.log('Async',data.toString("utf-8"));
})
const file = fs. readFileSync('./hello.txt');
console. log('Sync', file.toString());