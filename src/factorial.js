function factorial(n) {
    if (n < 0) {
      throw new Error('Число должно быть больше или равно нулю');
    }
    if (n === 0 || n === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  module.exports = factorial;
  