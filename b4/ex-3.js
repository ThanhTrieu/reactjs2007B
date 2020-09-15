// su dung 2 function tu file ex-2.js da export
import { maths } from './ex-2';
import myMathGiaThua from './ex-2'
let number = 10;
let number2 = 20;

let sum = maths.tongSoHaiSo(number, number2);
if(maths.kiemTraChanLe(number)){
  console.log(`${number} la so chan`)
} else {
  console.log(`${number} la so le`)
}
let gt = myMathGiaThua(5);
console.log(sum);
console.log(`Giai thua cua 5 la : ${gt}`);