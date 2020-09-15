// khai callback
//console.log('A');
// setTimeout la 1 ham xu ly bat dong dong  - web api cua trinh duyet. Xu ly 1 cong viec dua vao 1 khoang thoi gian quy dinh
// setTimeout(() => {
//   console.log('B');
// },3000); 
// console.log('C');

function anCom(cb) {
  setTimeout(() => {
    console.log('An com xong roi');
    // cb : tham so - function : chinh la callback function
    // thuc thi lenh cho callback
    // cb bat buoc phai la 1 ham
    if(typeof cb === 'function'){
      cb();
    }
    
  }, 2000);
}

function hocBai(){
  console.log('Di hoc bai');
}
const myCallback = () => {
  // goi ham hoc bai o day.
  hocBai();
}
// theo logic an com -> hoc bai
anCom(myCallback);
//hocBai();

const myPromies = new Promise((resolve, reject) => {
  // resolve : thong bao ket qua xu ly thanh cong cua nhung tac vu xu ly bat dong bo nam ben trong nay 
  // reject : thong bao ket qua xu ly that bai cua nhung tac vu xu ly bat dong bo nam ben trong nay 
  setTimeout(() => {
    if( 1+1  == 3){
      resolve({message: 'thao tac done'});
    } else {
      reject({message: 'not done'});
    }
  }, 1000);
});
// gia su co 1 tien trinh khac can doi ket qua cua Promise tra ve de xu ly tiep cong viec khac thi lam ntn?
// di lay ket qua cua Promise tra ve
//console.log(myPromies);
myPromies.then(data => console.log(data)) // nhan ket qua tu resolve
        .catch(err => console.log(err)); // nhan ket qua tu reject

