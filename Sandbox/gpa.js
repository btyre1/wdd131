function getGrades(inputSelector) {
  const grades = document.querySelector(inputSelector).value;
  const gradesArray = grades.split(",");
  const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
  console.log(cleanGrades);
  return cleanGrades;
}

function lookupGrade(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  } else if (grade === "C") {
    points = 2;
  } else if (grade === "D") {
    points = 1;
  }
  return points;
}

function calculateGpa(grades) {
  const gradePoints = grades.map((grade) => lookupGrade(grade));
  const gpa =
    gradePoints.reduce((total, num) => total + num) / gradePoints.length;
  return gpa.toFixed(2);
}

function outputGpa(gpa, selector) {
  const outputElement = document.querySelector(selector);
  outputElement.innerText = gpa;
}

function clickHandler() {
  const grades = getGrades("#grades");
  const gpa = calculateGpa(grades);
  outputGpa(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);