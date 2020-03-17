module.exports = function check(str, config) {
  if (str.length % 2 != 0) return false;
  let openers = [],
      closers = [];
  for (let i=0; i<config.length; i++) {
    openers.push(config[i][0]);
    closers.push(config[i][1]);
  } 
    let matchOpen,
      BracketsArray = [];
  for (let i = 0; i < str.length; i++) {
    let bracket = str[i];
    for (let j = 0; j < openers.length; j++) {
      if (bracket == openers[j] && bracket == closers[j]) {
        if (BracketsArray.indexOf(bracket) == -1) {
          BracketsArray.push(bracket);
        } else {
          matchOpen = openers[closers.indexOf(bracket)];
          if (BracketsArray.pop() != matchOpen) {
            return false;
          }
        }
      } else {
        if (bracket == openers[j]) {
          BracketsArray.push(bracket);
        }
        if (bracket == closers[j]) {
          matchOpen = openers[closers.indexOf(bracket)];
          if (BracketsArray.pop() != matchOpen) {
            return false;
          }
        }
      }
    }
  }
  return BracketsArray.length == 0 ? true : false;
}
