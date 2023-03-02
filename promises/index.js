const fs = require('fs');

function getImage() {
  return new Promise((res, rej) => {
    try {
      const data = fs.readFile('./picture.png', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
      res(data);
    } catch (error) {
      rej(new Error(error));
    }
  });
}

// const image = getImage();
// console.log('image: ', image);


Promise.pending = Promise.race.bind(Promise, [])

let cancel;

new Promise(function(fulfill, reject) {
  cancel = function() {fulfill(Promise.pending())}
  setTimeout(fulfill, 0, 5)
}).then(console.log)

cancel() // 5 is never logged.
console.log();