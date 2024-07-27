// Polynomial Calculator (Addition and Multiplication of Polynomials)
function addPolynomials(poly1, poly2) {
    const result = [];
    const maxLength = Math.max(poly1.length, poly2.length);

    for (let i = 0; i < maxLength; i++) {
        const term1 = poly1[i] || 0;
        const term2 = poly2[i] || 0;
        result.push(term1 + term2);
    }

    return result;
}

function multiplyPolynomials(poly1, poly2) {
    const result = new Array(poly1.length + poly2.length - 1).fill(0);

    for (let i = 0; i < poly1.length; i++) {
        for (let j = 0; j < poly2.length; j++) {
            result[i + j] += poly1[i] * poly2[j];
        }
    }

    return result;
}

// Example usage:
const polynomial1 = [2, -3, 4]; // Coefficients of x^2, x, constant
const polynomial2 = [1, 2]; // Coefficients of x, constant

const sumResult = addPolynomials(polynomial1, polynomial2);
console.log(`Sum of polynomials: ${sumResult.join(' + ')} = 0`);

const productResult = multiplyPolynomials(polynomial1, polynomial2);
console.log(`Product of polynomials: ${productResult.join(' + ')} = 0`);
