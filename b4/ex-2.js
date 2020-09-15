const kiemTraChanLe = (n) => {
  if(n % 2 === 0){
    return true;
  }
  return false;
}
const tongSoHaiSo = (a,b) => {
  return a + b;
}

const giaiThua = (n) => {
  let gt = 1;
  for(let i = 2; i <= n; i++) {
    gt *= i;
  }
  return gt;
}
export default giaiThua;

// export 2 function de cho nhung file khac cos the su dung dc
export const maths = {
  kiemTraChanLe,
  tongSoHaiSo
}