// gpaCalculator.js
function calculateGPA(grades, credits) {
    let totalGradePoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < grades.length; i++) {
        totalGradePoints += grades[i] * credits[i];
        totalCredits += credits[i];
    }

    return (totalGradePoints / totalCredits).toFixed(2);
}

// Example usage
const grades = [8.5, 9.0, 7.5, 8.0]; // Grades in points
const credits = [4, 3, 2, 3]; // Corresponding credits for each course

const gpa = calculateGPA(grades, credits);
console.log(`GPA: ${gpa}`);
