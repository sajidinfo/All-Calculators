// Date Difference Calculator
function calculateDateDifference(date1, date2) {
    const moment = require('moment');
    
    const diff = moment.duration(moment(date2).diff(moment(date1)));
    const days = diff.asDays();
    const hours = diff.asHours();
    const minutes = diff.asMinutes();
    
    return {
        days: Math.floor(days),
        hours: Math.floor(hours),
        minutes: Math.floor(minutes)
    };
}

// Example usage:
const date1 = '2024-07-01'; // First date in YYYY-MM-DD format
const date2 = '2024-07-15'; // Second date in YYYY-MM-DD format

const dateDifference = calculateDateDifference(date1, date2);
console.log(`Difference: ${dateDifference.days} days, ${dateDifference.hours} hours, ${dateDifference.minutes} minutes`);
