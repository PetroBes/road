const asyncFunctionWhichThrows = async () => {
  throw new Error('This is Error message from async func');
}

const functionWhichThrows = () => {
  throw new Error('This is Error message');
}

asyncFunctionWhichThrows()
  .catch(err => 
    console.log(`.catch Error with message: ${err.message}`)
  )
  .finally(() =>
  console.log('Finally will do the job anyways')
  );


try {
  functionWhichThrows()
} catch(err) {
  console.log(`Sync catch the error: ${err.message}`)
  try {
    throw 'String';
  } catch (err) {
    console.log(`try/catch can be nested, throw can be ${err}`)
  }
} finally {
  console.log('Finally still works')
}
