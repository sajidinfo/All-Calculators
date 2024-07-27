// studyTimeCalculator.js
function calculateStudyTime(totalPages, pagesPerHour, daysAvailable) {
    const hoursPerDay = totalPages / (pagesPerHour * daysAvailable);
    return hoursPerDay.toFixed(2);
}

// Example usage
const totalPages = 300; // Total number of pages to study
const pagesPerHour = 20; // Average pages read per hour
const daysAvailable = 10; // Number of days available for study

const hoursPerDay = calculateStudyTime(totalPages, pagesPerHour, daysAvailable);
console.log(`Hours needed to study per day: ${hoursPerDay}`);
