export const deepCopy = obj => {
  let result;

  try {
    result = JSON.parse(JSON.stringify(obj));
  } catch {
    result = null;
  }

  return result;
};
