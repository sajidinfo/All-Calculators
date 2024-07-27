// Geometry Calculator (Area and Perimeter of Shapes)
function calculateRectangleArea(length, width) {
    const area = length * width;
    return area.toFixed(2);
}

function calculateRectanglePerimeter(length, width) {
    const perimeter = 2 * (length + width);
    return perimeter.toFixed(2);
}

// Example usage:
const rectangleLength = 10; // Length of rectangle in meters
const rectangleWidth = 5; // Width of rectangle in meters

const area = calculateRectangleArea(rectangleLength, rectangleWidth);
console.log(`Area of rectangle: ${area} square meters`);

const perimeter = calculateRectanglePerimeter(rectangleLength, rectangleWidth);
console.log(`Perimeter of rectangle: ${perimeter} meters`);
