// Calorie Intake Calculator
function calculateCalorieIntake(weight, height, age, gender, activityLevel) {
    // Harris-Benedict equation for Basal Metabolic Rate (BMR)
    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height * 100) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height * 100) - (4.330 * age);
    }

    // Adjust BMR based on activity level
    const activityFactors = {
        sedentary: 1.2,
        lightlyActive: 1.375,
        moderatelyActive: 1.55,
        veryActive: 1.725,
        extraActive: 1.9
    };

    const activityFactor = activityFactors[activityLevel];
    const calorieIntake = bmr * activityFactor;

    return calorieIntake.toFixed(0); // Return calorie intake rounded to nearest whole number
}

// Example usage:
const weightKg = 65; // Weight in kilograms
const heightCm = 170; // Height in centimeters
const ageYears = 30; // Age in years
const gender = 'male'; // 'male' or 'female'
const activityLevel = 'lightlyActive'; // Choose from sedentary, lightlyActive, moderatelyActive, veryActive, extraActive

const calorieIntake = calculateCalorieIntake(weightKg, heightCm / 100, ageYears, gender, activityLevel);
console.log(`Recommended Daily Calorie Intake: ${calorieIntake} calories`);
