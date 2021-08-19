const reverseString = string => {
  if (typeof string !== 'string') {
    return null;
  } else {
    return string.split('').reverse().join('');
  }
};
console.log(reverseString('tom'));
