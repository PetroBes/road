(async function() {
  const one = () => Promise.resolve('one');

  async function myFunc() {
    console.log('in function');
    const res = await one();
    console.log('res: ', res)
  }


  console.log('Before');
  const done = await one();
  console.log('done', done);
  myFunc();
  // const res = await myFunc();
  // console.log('ressssss', res);
  console.log('After');

})();