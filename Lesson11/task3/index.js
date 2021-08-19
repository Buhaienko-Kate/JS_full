function splitString(string, number = 10) {
  if (typeof string !== 'string') {
    return null;
  }
  const strArr = [];
  let startPosition = 0;
  while (true) {
    let chunk = string.substr(startPosition, number);
    if (chunk.length === 0) {
      break;
    }

    if (chunk.length < number) {
      chunk = chunk.concat('.'.repeat(number - chunk.length));
    }
    strArr.push(chunk);
    startPosition += number;
  }
  return strArr;
}

console.log(splitString('fhjfjdnsks', 3));
