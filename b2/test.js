const test = async () => {
  await setTimeout(() => {
    console.log('AAAA');
  }, 1000)
}

const demo = async() => {
  await console.log('BBBBBB');
}

test();
demo();