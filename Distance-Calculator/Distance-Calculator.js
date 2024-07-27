// Distance Calculator
function calculateDistance(x1, y1, x2, y2) {
    // Calculate distance between two points (x1, y1) and (x2, y2)
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
}

// Example usage:
let distance = calculateDistance(1, 2, 4, 6); // Distance between (1, 2) and (4, 6)
console.log(`Distance: ${distance.toFixed(2)}`);
