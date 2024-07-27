// BMI Calculator
function calculateBMI(weight, height) {
    // Height should be in meters
    const bmi = weight / (height * height);
    return bmi.toFixed(1); // Return BMI rounded to 1 decimal place
}

// Example usage:
const weightInKg = 70; // Weight in kilograms
const heightInMeters = 1.75; // Height in meters

const bmi = calculateBMI(weightInKg, heightInMeters);
console.log(`Your BMI: ${bmi}`);
