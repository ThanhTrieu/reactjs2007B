// string trong js
// du lieu nam trong nhay don hoac nhay kep hoac backticks
let myString = 'Chung ta dang hoc js';
let myString2 = "Chung ta dang hoc js";
let myString3 = `Chung ta dang hoc js`;
console.log(typeof myString, typeof myString2, typeof myString3); 
// trong backticks : co the su dung bien hay cac bieu thuc tinh toan
let myString4 = `can bac hai cua 81 la : ${Math.sqrt(81)}`;
console.log(myString4);
let myString5 = 'can bac hai cua 81 la :' + Math.sqrt(81);
let myString6 = 'Chung ta dang hoc js\n';
let myString7 = 'Buoi sau hoc tiep js';
console.log(myString6 + myString7);
let myString8 = `tewewewe
                asdsadad
                dsdsadsdsd`;
console.log(myString8);

let string = 'Chung ta dang hoc js co ban';
let newString = string.toUpperCase();
console.log(newString, string);
let find = string.indexOf('js', 20);
let find2 = string.lastIndexOf('js', 20);
console.log(find, find2);
let newString2 = string.slice(5,-20);
let newString3 = string.substring(5,-20);
let newString4 = string.substr(5,200);
let newString5 = string.replace('js','reactjs');
console.log(newString5);
console.log(newString2); // tach 1 chuoi con ra
console.log(newString3); // tach 1 chuoi con ra
console.log(newString4); // tach 1 chuoi con ra
// ghep chuoi - noi chuoi
console.log(newString2.concat(newString3));