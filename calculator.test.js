const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('should return the sum of two numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should handle negative numbers correctly', () => {
      expect(calculator.add(-5, 7)).toBe(2);
    });

    test('should handle decimal numbers correctly', () => {
      expect(calculator.add(1.5, 2.75)).toBe(4.25);
    });
  });

  describe('subtract', () => {
    test('should return the difference of two numbers', () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });

    test('should handle negative numbers correctly', () => {
      expect(calculator.subtract(2, 5)).toBe(-3);
    });

    test('should handle decimal numbers correctly', () => {
      expect(calculator.subtract(5.75, 2.25)).toBe(3.5);
    });
  });

  // Add tests for the divide and multiply methods in a similar manner

  describe('divide', () => {
    test('should return the quotient of two numbers', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });
    
    test('should handle division by zero', () => {
        expect(() => calculator.divide(5, 0)).toThrow('Division by zero');
    });
    
    test('should handle decimal numbers correctly', () => {
        expect(calculator.divide(8.5, 2.5)).toBe(3.4);
    });
  });

  describe('multiply', () => {
    test('should return the product of two numbers', () => {
        expect(calculator.multiply(4, 5)).toBe(20);
    });
    
    test('should handle negative numbers correctly', () => {
        expect(calculator.multiply(-3, 7)).toBe(-21);
    });
    
    test('should handle decimal numbers correctly', () => {
        expect(calculator.multiply(2.5, 3.5)).toBe(8.75);
    });
  });

});