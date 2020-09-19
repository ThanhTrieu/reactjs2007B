// oop js 

class Animals {
  color = 'black';
  weight = 3;
  age = 3;

  constructor(){
    console.log('day la constructor cua class Cha');
  }
  sanMoi(name){
    return `Dang rinh bat con ${name}`;
  }
}
// class Cats ke thua class Animals : tu khoa extends
class Cats extends Animals {
  constructor(){
    super(); // chay phuong thuc constructor cua class cha
    console.log('day la constructor cua class con');
  }
  // override - ghi de phuong thuc
  sanMoi(name){
    return `Nam ngu khong bat con ${name}`;
  }
  diNgu(){
    return `${super.sanMoi('chim')} ma di ngu `;
  }
}
let cat = new Cats();
console.log(cat.color);
console.log(cat.sanMoi('chuot'));
console.log(cat.diNgu());