// tim hieu ve generator function
// su dung theo mau ham : declare function (ko su dung arrow function - express function)

function* demo(){
  // generator function
  let index = 1;
  while(index < 3) {
    yield index++;
    // yield : muc dich - xu ly tuan tu
  }
}
let generator = demo();
//console.log(generator, typeof generator);
// generator: luon luon co phuong thuc next()
//console.log(generator.next().value); // 1
//console.log(generator.next().done); // 2
//console.log(generator.next().done); // 3
//console.log(generator.next().value); // 4