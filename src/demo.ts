import * as jblob from '.';

const data = {
  foo: 'bar',
};

console.log(jblob.encode(data)); // tslint:disable-line
console.log(JSON.stringify(data)); // tslint:disable-line
