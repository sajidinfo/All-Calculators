// Node.js Algebra Solver Example
// Solves quadratic equations ax^2 + bx + c = 0

function solveQuadraticEquation(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [x1.toFixed(2), x2.toFixed(2)];
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        return [x.toFixed(2)];
    } else {
        return ['Complex roots'];
    }
}

// Example usage:
const a = 1;
const b = -3;
const c = 2;

const roots = solveQuadraticEquation(a, b, c);
console.log(`Roots of the equation ${a}x^2 + ${b}x + ${c} = 0 are: ${roots}`);
