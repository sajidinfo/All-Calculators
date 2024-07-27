// courseCreditsCalculator.js
function calculateTotalCredits(courses) {
    return courses.reduce((total, course) => total + course.credits, 0);
}

// Example usage
const courses = [
    { name: 'Mathematics', credits: 4 },
    { name: 'Physics', credits: 3 },
    { name: 'Chemistry', credits: 3 },
    { name: 'Computer Science', credits: 2 }
];

const totalCredits = calculateTotalCredits(courses);
console.log(`Total Credits: ${totalCredits}`);
