// lam viec voi mang trong js
let fruits = new Array('tao','cam','quyt','mit','dua', 1,2,3,4,5);
// kieu du lieu : object
let numbers = [1,2,3,4,5,6,7,8,9]; // cu phap hay dung
 // 2 mang tren deu la mang 1 chieu
 // mang da chieu 
 let myArr = [[1,2,3], ['a,','b','c']];
 // kiem tra so luong phan tu 
 let count = fruits.length;
 console.log(count);
 // truy cap vao 1 phan tu nam trong mang
 // nameArray[index_element];
 console.log(fruits[3]); // mit 
 // in chu 'c' trong mang myArr
 console.log(myArr[1][2]);
 // truy cap vao tat cac cac phan tu trong mang
 let myNumbers = [1,2,3,4,5,6,7,8,9];
 let limit = myNumbers.length;
 for(let i = 0; i < limit; i++) {
   console.log(myNumbers[i]);
 };
 myNumbers.forEach(function(value, index, array){
   console.log(value);
 });
 for (let i of myNumbers) {
   console.log(i);
 }
 // mutable - immutable
 let number = [1,2,3,4,5,6,7,8,9];
 // them so 10 vao cuoi mang
 number.push(10);
 console.log(number); // [1,2,3,4,5,6,7,8,9,10];
 // xoa phan tu cuoi mang
 let lastElement = number.pop(); // 10
 console.log(lastElement, number); // 10;[1,2,3,4,5,6,7,8,9];
 number.unshift(lastElement);
 console.log(number); //[10,1,2,3,4,5,6,7,8,9];
 let firstElement = number.shift(); //10
 console.log(firstElement, number); //10 ; [1,2,3,4,5,6,7,8,9];

 let find = number.indexOf(6, 6);
 console.log(find); // 5 - vi tri cua phan tu
 let find2 = number.lastIndexOf(6,6);
 console.log(find2);

 let number2 = [1,2,3,4,5,6,7,8,9];
 let child = number2.slice(3,20);//[4,5,6]:[4,5,6,7]
 console.log(child, number2);
 number2.splice(3,3,100,200,300);
 console.log(number2);

 let str = number2.join('*'); // bien mang ve chuoi
 console.log(number2, str);
 let str2 = number2.toString(); // bien mang ve chuoi
 console.log(number2, str2);

 // kiem tra xem co phai la mang ko?
if(Array.isArray(number2)){
console.log('OK');
} else {
  console.log('NO');
}
// sap xep mang
let randomArr = [2,8,3,9,10,1,6,4,12,11,99,19];
// sap xep theo tang dan hoac giam dan
randomArr.sort(function(a,b){
  return a - b;
});
console.log(randomArr);
let randomArr2 = [1,2,3,4,5,6,7,8,9];
let kq = randomArr2.find( item => item % 2 == 0);
// tim ra phan tu dau tien la so chan trong mang
console.log(kq);
// loc ra tat cac so le vao 1 mang
let kq2 = randomArr2.filter( val => val % 2 != 0);
console.log(kq2); // [1,3,5,7,9];
let kq3 = [];
// for(let i = 0; i< randomArr2.length; i++) {
//   if(randomArr2[i] % 2 != 0){
//     kq3.push(randomArr2[i])
//   }
// }
randomArr2.map((item) => {
  if(item % 2 != 0){
    kq3.push(item)
  }
})
console.log(kq3);
let randomArr3 = [1,2,3,4,5,6,7,8,9];
// tinh tong tat ca cac so chan;
let tong = randomArr3.filter( item => item % 2 == 0)
                     .reduce((val, current) => val + current);
console.log(tong);
let randomArr4 = [1,2,3];