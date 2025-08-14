// problem 1 
function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }
  let fine = fare + fare * (20 / 100) + 30;
  return fine;
}

// problem 2 
function  onlyCharacter( str ) {
          if (typeof str !== 'string'){
            return "Invalid"
          }
          let str2 = str.replaceAll(' ', '').toUpperCase();
          return str2;
}

// problem 3 
function bestTeam(player1, player2) {
  if (
    typeof player1 !== "object" ||
    typeof player2 !== "object" ||
    player1 === null ||
    player2 === null
  ) {
    return "Invalid";
  }
  let totalfoul1 = player1.foul + player1.cardY + player1.cardR;
  let totalfoul2 = player2.foul + player2.cardY + player2.cardR;
  if (totalfoul1 > totalfoul2) {
    return player2.name;
  } else if (totalfoul1 < totalfoul2) {
    return player1.name;
  } else {
    return "Tie";
  }
}

// problem 4
function isSame(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return "Invalid";
  }
}

// problem 5
function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  let obj = { finalScore: 0, pass: 0, fail: 0 };
  let sum = 0;
  for (let num of marks) {
    sum += num;
    if (num >= 40) {
      obj.pass += 1;
    } else if (num < 40) {
      obj.fail += 1;
    }
  }
  if (marks.length > 0) {
    obj.finalScore = Math.round(sum / marks.length);
  }
  return obj;
}