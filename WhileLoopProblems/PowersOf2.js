const prompt = require('prompt-sync')();
// 1. Print powers of a 2 until a given index

let index = Number(prompt('Enter the index: '));
let i=1;
let power=0;
while(i<=index && power<256)
{
    power=Math.pow(2, i);
    console.log(power);
    i++;
}
