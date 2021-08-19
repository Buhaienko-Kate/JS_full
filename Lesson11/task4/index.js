const countOccurrences = (text = '', str) => {
  // put your code here
  if (str === '') {
    return null;
  } else {
    return text.split(str).length - 1;
  }
};

console.log(countOccurrences('fdgdjk kjhh', 'k'));
