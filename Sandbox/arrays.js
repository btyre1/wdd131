const steps = ["one", "two", "three"];
const listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join();

const letterGrades = ['A', 'B', 'A'];
const convertToGPA(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}
const gpas = letterGrades.map(convertToGPA);
const gpa = gpas.reduce((total, num) => total + num, 0) / gpas.length;