module.exports = function toReadable (number) {

  number_r = ("" + number).split('').reverse().join('');
  let wordNumber = '';

  const arr = [['','one','two','three','four','five','six','seven','eight','nine'], ['', '', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'], ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'],]; 

    if (number == 0) {
        return "zero"
    }

  for (let i = 0; i < number_r.length; i++) {
    if (+(number_r[1] + number_r[0]) > 9 && +(number_r[1] + number_r[0]) < 20){
        wordNumber += arr[2][number_r[i]];
        i +=2;
    }

    if (i == 2) {
        if (+number_r[i] == 0 || number_r[i] == undefined) {
            continue;
        }

        wordNumber = ((+number_r[1] != 0)) ? arr[0][number_r[i]] + " hundred " + wordNumber: arr[0][number_r[i]] + " hundred" + wordNumber;
    }

    else {
        if (i == 1 && +number_r[i] == 0) {
            continue;
        }

        wordNumber = (i == 0) ? " " + arr[i][number_r[i]]: arr[i][number_r[i]] + wordNumber;
    }

  }
  
  return wordNumber.trim();
}

