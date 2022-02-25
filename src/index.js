module.exports = function check(str, bracketsConfig) {
  const array = [];
  const configArray = bracketsConfig.flat();

  for (let i = 0; i < str.length; i++) {
    const symb = str[i];
    const index = configArray.indexOf(symb);
    const stackLastIndex = array.length - 1;
    const topElement = array[stackLastIndex];

    if (index % 2 === 0) {
      if (symb === configArray[index + 1]  && topElement === symb) {
        array.pop();
      } 
      else {
        array.push(symb);
      }
  
    } else {
      if (!array.length) {
        return false;
      }
      if (topElement === configArray[index - 1]) {
        array.pop();
      } else {
        return false;
      }
    }
  }
  return !array.length;
};
