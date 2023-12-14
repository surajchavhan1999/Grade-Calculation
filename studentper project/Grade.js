function calculate() {
  // Get input values and parse them as integers
  var a = parseInt(document.getElementById('bookone').value, 10);
  var b = parseInt(document.getElementById('booktwo').value, 10);
  var c = parseInt(document.getElementById('bookthree').value, 10);
  var d = parseInt(document.getElementById('bookfour').value, 10);
  var e = parseInt(document.getElementById('bookfive').value, 10);

  if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100) {
    alert("Please enter correct values");
    return false;
  }

  var obtain = a + b + c + d + e;

  document.getElementById("Obtain").innerHTML = obtain;

  var per = (obtain / 500) * 100;

  document.getElementById("per").innerHTML = per.toFixed(2) + "%";

  if (a >= 40 && b >= 40 && c >= 40 && d >= 40 && e >= 40) {
    document.getElementById("remarks").innerHTML = "<span style='color:	#FF0000'>Pass</span>";
  } else {
    document.getElementById("remarks").innerHTML = "<span style='color:#289'>Fail</span>";
  }

  var grade;
  if (per >= 80) {
    grade = "A";
  } else if (per >= 70) {
    grade = "B";
  } else if (per >= 60) {
    grade = "C";
  } else if (per >= 50) {
    grade = "D";
  } else if (per >= 40) {
    grade = "E";
  } else {
    grade = "Moye Moye F";
  }

  // Display the calculated grade
  document.getElementById("grade").innerHTML = "Grade: " + grade;

  return false;
}
