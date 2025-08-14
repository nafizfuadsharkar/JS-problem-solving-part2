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

console.log(resultReport([]));
