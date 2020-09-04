// tim hieu kieu du lieu trong js
var number = 10;
let name = 'Van Teo';
// kiem tra kieu du lieu cua bien
// console.log: hien thi ket qua ra ngoai man hinh lenh
let checking = false;
let myAge;
console.log(typeof number);
console.log(typeof name);
console.log(typeof checking);
console.log(typeof myAge);
// tu khoa const : dinh nghia hang so
const PI = 3.14;
//PI = 3.15; // sai : khong dc thay doi truc tiep gia tri
console.log(PI);
const person = {name: 'Teo', age: 20};
person.email = 'teo@gmail.com'; // ko sao ca - hop le
person.name = 'Van Ty'; // van hop le
//person = {money: 1000}; // sai
console.log(person);

var myWorks = 'DEV';
var myWorks = 'Singer'; // ghi de lai bien
console.log(myWorks);

let myAddress = 'Ha Noi';
//let myAddress = 'Nam Dinh'; // sai - khong duoc phep ghi de hay dinh nghia lai bien do
console.log(myAddress);
////////////////////////////////

console.log(a); // undefined
var a = 'test'; // hoisting
console.log(a) // test

let myMoney = 100;
if(myMoney > 90){
  let myMoney = 80;
  console.log(myMoney); // ???
}
console.log(myMoney); // ???
// tu khoa var : ton tai con tro this tro vao chinh bien do - tu khoa let thi ko
let yourAge = 20;
if(yourAge == 22){
  // do something
} else if(yourAge == 21) {
  // do something
} else if(yourAge == 23) {
  // // do something
} else if(yourAge == 20) {
  // // do something
} else if(yourAge == 20) {
  // // do something
} else {
  // do something
}
 // do something v2

 switch(yourAge) {
  case 20:
    // do something
    break;
 }

 // vong lap for
 for(let i = 1; i < 10; i++){
  console.log(i);
 }
 let j = 10;
 while( j < 3) {
   console.log(j);
   j++;
 }
 // min - max : 0 - n
 do {
  console.log(j);
  j++;
 } while(j < 20); 
 // min - max : 1 - n
 let k = 1;
 let t = 100;
 while( k <= t){
  if(k % 2 == 0){
    console.log(k);
  }
  k++;
 }

 for(let i = 2; i<= Math.sqrt(100); i++ ){
  if(100 % i != 0){
    console.log('100 la phai so nguyen to');
    //break;
  }
 }
 // 1 - 100;
 // in ra day so fibonaci
 let n = 1;
 let m = 2;
 let d = 0;
 for(let i = 1; i<= 8; i++){
  if(d < 8){
    n = i;
    m = i+1;
    d = n+m;
    console.log(n,m,d);
  }
 }
 // declare function
 function sumNumber(a, b = 3) {
   return a+b;
 }
 let sum = sumNumber(1, 2);
 console.log(sum);