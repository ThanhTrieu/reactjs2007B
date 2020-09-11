// lam viec voi object trong js
// khai bao object
let person = {}; // khai bao 1 object rong
let car = {
  name: 'BMW',
  color: 'white',
  money: 100000,
  weight: 100,
  start: function(place){
    // this === car
    return `xe ${this.name} xuat phat tai ${place}`;
  }, 
  stop: (place) => {
    // this !== car
    // this === window
    return `Xe ${this.name} da dung o ${place}`;
  }
};
// truy cap vao thuoc tinh hoac phuong thuc
let nameCar = car.name; // car['name'];
console.log(nameCar);
console.log(car.start('Ha Noi'));
console.log(car.stop('Sai Gon'));

let cat = {
  name: 'Tom',
  color: 'black',
  age: 40
};
for (let i in cat) {
  console.log(cat[i], i);
}
// them phan tu vao object
const student = { name: 'Van Teo', age : 21 };
// bo sung them thuoc tinh vao object
student.email = 'van@teo';
student.address = 'Ha Noi';
console.log(student);
// ket hop mang voi object
let products = [
  {
    id: 1,
    name: 'Iphone 8',
    money: 100,
    img: 'iphone8.jpg'
  },
  {
    id: 2,
    name: 'samsung s20',
    money: 200,
    img: 'samsung.jpg'
  },
  {
    id: 3,
    name: 'Bphone 3',
    money: 300,
    img: 'bphone.jpg'
  }
];
let total = 0;
products.map(item => {
  total += parseInt(item.money);
});
console.log(total);
