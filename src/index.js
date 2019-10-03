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
 
}
