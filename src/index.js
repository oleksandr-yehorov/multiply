module.exports = function multiply(first, second) {
  
  // split and reverse first and second numbers into two arrays

  let one = first.split('').reverse();
  let two = second.split('').reverse();

  // initializing temporary array for multiplying each number in arrays

  let temp = [];

  // multiply each element and write it in temp
  // if there is a record in temp - we add a number, if not, then we overwrite

  for (var i = 0; i < one.length; i++) {
    for (var j = 0; j < two.length; j++) {
      var multi = one[i] * two[j];
        if (temp[i + j]) {
          temp[i + j] = temp[i + j] + multi
        } else {
          temp[i + j] = multi;
        };
    };
  };
  
  
  // some manipulations with temp
  // there must be one digit left in the temp cell,
  // dozens and other orders are moved one position higher on the temp

  for (var i = 0; i < temp.length; i++) {
    var num = temp[i] % 10;              // get digit
    var move = Math.floor(temp[i] / 10); // move up digit
    temp[i] = num;                       // last digit upper

    if (temp[i + 1])                     // move up higher orders
      temp[i + 1] += move;
    else if (move != 0)
      temp[i + 1] = move;  
  };

}
