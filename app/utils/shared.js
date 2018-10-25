export const deepCopy = obj => {
  let result;

  try {
    result = JSON.parse(JSON.stringify(obj));
  } catch (ex) {
    console.log(ex);
    result = null;
  }

  return result;
};

export const stringToNumber = str => {
  let result;

  try {
    result = parseFloat(str);
  } catch (ex) {
    console.log(ex);
    result = null;
  }

  return result;
};
