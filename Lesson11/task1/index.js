function splitText(string, number = 10) {
  const strArr = [];
  let startPosition = 0;
  while (true) {
    if (typeof string !== 'string') {
      return null;
    }
    let chunk = string.substr(startPosition, number);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += number;
  }
  return strArr.join('\n');
}

console.log(splitText(55888, 3));
