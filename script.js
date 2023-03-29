"use strict"
//task1
// let a ;
// let b ;
// let result = (a + b < 10) ? 'yes':'no';
// console.log(result);
//task2
// function num_power(num, pow) {
//     let result = 1;
//     for (let i = 0; i < pow; i++) {
//         result *= num;
//     }
//     return result;

// }
// console.log(num_power(4, 3));
// console.log(num_power(16,2));
//task3

// let tbl = document.getElementById('tbl');
// let slct = document.getElementById('slct')

// function add() {
//     let result = ' '
//     let color;
//     let val = Number(slct.value)
//     for (let i = 0; i < val; i++) {
//         result += `<tr>`;
//         for (let j = 0; j < val; j++) {
//             color = (i == j) ? 'black' : ((i + j) == x) ? 'black' : '';
//             result += `<td style="background-color:${color};"> ${i}+${j}  </td>`
//         }
//         result+= `<tr>`
//     }
//     tbl.innerHTML=result;
// }
// slct.addEventListener('click', add);