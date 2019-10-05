module.exports = function zeros(expression = "") {

  let parts = expression.split('*');
  let twos = 0, fives = 0;

  for (let part of parts){
    if (part.endsWith("!!")){
      const numberStr = part.substr(0, part.length - 2);
      const number = +numberStr;
      if (number % 2 == 0){
        twos += findDivFact(number, 2);
        fives += findDivFactEXEven(number, 5);
      } else {
        fives += findDivFactEXOdd(number, 5);
      }
    } else {
      const numberStr = part.substr(0, part.length - 1);
      const number = +numberStr;
      twos += findDivFact(number, 2);
      fives += findDivFact(number, 5);
    } 
  }

  const result = (fives < twos)? fives : twos;
  return result;

  function findDivFact(number = 0, divider = 1){
    let answer = 0;
    let div = divider;
    while (number >= div){
      answer += Math.floor(number / div);
      div *= divider;
    }
    return answer;
  }

  function findDivFactEXEven(number = 0, divider = 1){
    let answer = 0;
    let div = divider;
    while (number >= div){
      let temp = Math.floor(number / div);
      answer += Math.floor(temp / 2);
      div *= divider;
    }
    return answer;
  }

  function findDivFactEXOdd(number = 0, divider = 1){
    let answer = 0;
    let div = divider;
    while (number >= div){
      let temp = Math.floor(number / div);
      answer += Math.ceil(temp / 2);
      div *= divider;
    }
    return answer;
  }
}
