function calculateHypotenuse(a, b) {
    return Math.sqrt(a*a + b*b);
  }
  
  // Örnek kullanım
  console.log(calculateHypotenuse(3, 4));  // Çıktı: 5
  console.log(calculateHypotenuse(5, 12));  // Çıktı: 13
/// first solution

function calculateHypotenuse(a, b) {
    return Math.sqrt(a*a + b*b);
  }
  
  console.log(calculateHypotenuse(3, 4));  // Output: 5
//// second solution  
function calculateHypotenuse(a, b) {
    return Math.hypot(a, b);
  }
  
  console.log(calculateHypotenuse(3, 4));  // Output: 5
/// third solutution

function calculateHypotenuse(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  }
  
  console.log(calculateHypotenuse(3, 4));  // Output: 5
// dorduncu cozum

function isRightTriangle(a, b, c) {
    return (a*a + b*b == c*c) || (a*a + c*c == b*b) || (b*b + c*c == a*a);
  }
  
  console.log(isRightTriangle(3, 4, 5));  // Output: true
  console.log(isRightTriangle(5, 6, 7));  // Output: false
// besinci cozum  