// ham trong js
function sumNumber(n1, n2) {
  // check n1 phai la so chan - n2 phai la so le
  // phai thoa ma moi tinh tong - khong thoa man tra ve null
  /*
  if(kiemTraChanLe(n1) && !kiemTraChanLe(n2)){
    return n1 + n2;
  }
  // sai vi kiemTraChanLe la function expression : phai duoc dinh nghia truoc khi goi ra su dung
  */
  return n1 + n2;
}
let result = sumNumber(4,5);
console.log(result);
// function expression
let kiemTraChanLe = function kiemTraChanLe(number){
  if(number % 2 == 0){
    return true;
  }
  return false;
}
let number = 99;
if(kiemTraChanLe(number)){
  console.log(`${number} la so chan`)
} else {
  console.log(`${number} la so le`)
}
// nested function
function tinhDienTichHinhThang(a,b,h){
  // tinh tong 2 day
  function tongHaiDay(){
    return a + b;
  }

  function nhanVoiChieuCao(){
    return tongHaiDay()*h;
  }

  function chiaDoiKetQua(){
    return nhanVoiChieuCao()/2;
  }
  return chiaDoiKetQua;
}
let dt = tinhDienTichHinhThang(2,3,4);
console.log(dt());

let totalNumber = (a,b) => a + b;
console.log(totalNumber(10,20));
// 1 - 100
let kiemTraSoChinhPhuong = (n) => {
  let val = Math.sqrt(n);
  if(Number.isInteger(val)){
    return true;
  }
  return false;
}
let tinhTongCacSoChinhPhuong = (x,y) => {
  // tinh tong so CP tu 1 - 100;
  let total = 0;
  for(let i = x; i<= y; i++) {
    if(kiemTraSoChinhPhuong(i)){
      total += i;
    }
  }
  return total;
}
let testArrowFn = a => b => a * b;
let kq = testArrowFn(4)(5);
console.log(kq);

function testArrowFn2(a) {
  function testArrowFn3(b){
    return a * b;
  }
  return testArrowFn3;
}
console.log(testArrowFn2(4)(5));
// viet ham arrow function tinh giai thua cua 1 so bat ky
let tinhGiaiThua = (n) => {
  if(n < 0){
    return 0;
  }
  if(n == 0 || n == 1) {
    return 1;
  }
  let gt = 1;
  for(let i = 1; i<= n; i++){
    gt *= i;
  }
  return gt;
}
console.log(tinhGiaiThua(5));
let x = 10/0;
console.log(x, typeof x);
let y = 10 /'acb';
console.log(y, typeof y);

let u = 10;
let t = 'sas20bcv';
t = parseInt(t);
console.log(u + t);
let m = ''; // chuoi so: number string
if(!isNaN(m) && m.length > 0){
  console.log('Y');
} else {
  console.log('N');
}
let myNumber = 2020;
myNumber = myNumber.toString();
let myNumber2 = 2;
console.log(myNumber + myNumber2);// 20202 
console.log(typeof myNumber);