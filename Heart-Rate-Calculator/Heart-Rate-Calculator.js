// Heart Rate Calculator
function calculateHeartRate(age) {
    // Karvonen method for maximum heart rate
    const maxHeartRate = 220 - age;
    // Target heart rate zone (50-85% of max heart rate)
    const targetHeartRateMin = Math.round(maxHeartRate * 0.5);
    const targetHeartRateMax = Math.round(maxHeartRate * 0.85);

    return {
        maxHeartRate,
        targetHeartRateMin,
        targetHeartRateMax
    };
}

// Example usage:
const personAge = 35; // Age in years

const heartRateDetails = calculateHeartRate(personAge);
console.log(`Maximum Heart Rate: ${heartRateDetails.maxHeartRate}`);
console.log(`Target Heart Rate Zone: ${heartRateDetails.targetHeartRateMin}-${heartRateDetails.targetHeartRateMax}`);
