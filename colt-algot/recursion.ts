// rekursiiviset funktiot kutsuvat itseään
// base case - vika case

function power(number, exponent) {
  if (exponent === 1) return 1;
  return number * power(number, exponent - 1);
}
