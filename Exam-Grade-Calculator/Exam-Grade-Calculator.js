// examGradeCalculator.js
function calculateExamGrade(marksObtained, totalMarks) {
    const percentage = (marksObtained / totalMarks) * 100;
    let grade;

    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B+';
    } else if (percentage >= 60) {
        grade = 'B';
    } else if (percentage >= 50) {
        grade = 'C+';
    } else if (percentage >= 40) {
        grade = 'C';
    } else {
        grade = 'F';
    }

    return grade;
}

// Example usage
const marksObtained = 85;
const totalMarks = 100;

const grade = calculateExamGrade(marksObtained, totalMarks);
console.log(`Grade: ${grade}`);
