export const parseUser = jsonString => {
  try {
    const parsedJsonString = JSON.parse(jsonString);
    return parsedJsonString;
  } catch (err) {
    return null;
  }
};
console.log(parseUser('{ "name": "Tom" }'));
console.log(parseUser('{ "name": "Tom" '));
