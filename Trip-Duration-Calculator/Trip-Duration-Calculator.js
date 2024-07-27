// Trip Duration Calculator
function calculateTripDuration(distance, speed) {
    // Calculate trip duration based on distance and speed
    let duration = distance / speed;
    return duration;
}

// Example usage:
let duration = calculateTripDuration(300, 60); // 300 km distance, 60 km/h speed
console.log(`Trip duration: ${duration.toFixed(2)} hours`);
