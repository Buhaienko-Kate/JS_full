const concatProps = (obj) => {
  // put your code here
  let arr = [];
  for (let key in obj) {
    arr.push(obj[key]);
  }
  return arr;
};
console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' }));

// examples
concatProps({ name: 'John Doe', age: 17, interest: 'football' }); // ==> ['John Doe', 17, 'football']
