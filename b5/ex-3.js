// oop js
class Student {
  // luu y : ko dung tu khoa let, var, const de khai bao
  masv = 113; // khai bao thuoc tinh (mieu ta dac diem -tinh chat cua doi tuong)
  name = 'Van Teo'; // khai bao thuoc tinh
  // khai bao phuong thuc(ham - hanh dong cua doi tuong)
  hocBai(mon = 'C/C++') {
    return `Dang hoc mon ${mon}`;
  }

  constructor(name){
    console.log(`Hi ${name} : Toi se la phuong thuc chay dau tien`);
    // thong thuong se la noi de khai bao thuoc tinh
    this.email = 'vanteo@gmail.com';
    this.phone = '12132423';
  }

  // luu y khong co tu khoa function
  diNgu(time = '1am') {
    return `${time} roi ngu thoi`;
  }
  diHoc = (time = '7am') => {
    return `di hoc vao luc ${time}`;
  }
  // this === Student
  static giaiLaoGiuaGio(obj){
    // trong static ko ton tai this de truy cap vao thuoc tinh hay phuong thuc
    // tham so obj : chinh la doi tuong cua class truyen vao
    return `${obj.name} ra ngoai uong tra da`;
  }
}
// khoi tao doi tuong cho class
let st = new Student('ThanhTrieu');
// truy cap vao thuoc tinh nam ben trong class
let myName = st.name;
console.log(myName);
console.log(st.hocBai('Reactjs')); // truy cap vao phuong thuc
console.log(Student.giaiLaoGiuaGio(st));