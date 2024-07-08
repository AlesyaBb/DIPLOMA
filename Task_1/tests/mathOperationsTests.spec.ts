//UNIT TESTING

import { MathOperations } from '../src/mathOperations';

describe('MathOperations', () => {
    let mathOperations: MathOperations;
    let result: number;
  
    beforeEach(() => {
        mathOperations = new MathOperations();
    });
  
    describe('Power', () => {
        describe('Positive test', () => {
            test('Raising a positive number to a positive power', () => {
                const result = MathOperations.power(2, 3);
                expect(result).toBe(8);
            });

            test('Raising a number to the power 0', () => {
                const result = MathOperations.power(2, 0);
                expect(result).toBe(1);
            });

            test('Raising the number 0 to a power', () => {
                const result = MathOperations.power(0, 3);
                expect(result).toBe(0);
            });

            test('Raising a negative number to a positive power', () => {
                const result = MathOperations.power(-2, 3);
                expect(result).toBe(-8);
            });

            test('Raising a positive number to a negative power', () => {
                const result = MathOperations.power(2, -3);
                expect(result).toBeCloseTo(0.125);
            });

            test('Raising a number to a fractional power', () => {
                const result = MathOperations.power(9, 0.5);
                expect(result).toBe(3);
            });
        });
    });

    describe('Sqrt', () => {
        describe('Positive test', () => {
            test('Finding the square root of a positive number', () => {
                const result = MathOperations.sqrt(4);
                expect(result).toBe(2);
            });

            test('Finding the square root of zero', () => {
                const result = MathOperations.sqrt(0);
                expect(result).toBe(0);
            });
        });

        describe('Negative test', () => {
            test('Finding the square root of a negative integer', () => {
                const result = () => MathOperations.sqrt(-1);
                expect(result).toThrow("Square root of negative number");
            });

            test('Finding the square root of a negative fractional number', () => {
                const result = () => MathOperations.sqrt(-1.5678);
                expect(result).toThrow("Square root of negative number");
            });

            test('Finding the square root of a negative number close to zero', () => {
                const result = () => MathOperations.sqrt(-0.001);
                expect(result).toThrow("Square root of negative number");
            });
        });
    });

    describe('Max', () => {
        describe('Positive test', () => {
            test('Finding the maximum value in an array of positive numbersл', () => {
                const result = MathOperations.max([1, 2, 3, 4, 5]);
                expect(result).toBe(5);
            });

            test('Finding the maximum value in an array of negative numbers', () => {
                const result = MathOperations.max([-1, -2, -3, -4, -5]);
                expect(result).toBe(-1);
            });
        });

        describe('Negative test', () => {
            test('Finding the maximum value in an empty array', () => {
                const result = () => MathOperations.max([]);
                expect(result).toThrow("Array is empty");
            });
            test('Finding the maximum value in an array with different data types', () => {
                const result = MathOperations.max([1, 'two', 3, 'four']);
                expect(result).toBe(NaN);
            });

            test('Finding the maximum value in an array with data types "string"', () => {
                const result = MathOperations.max(['try', 'two', 'ghf', 'four']);
                expect(result).toBe(NaN);
            });

            
            test('Finding the maximum value in an array with data types "undefined"', () => {
                const result = MathOperations.max([undefined, undefined]);
                expect(result).toBe(NaN);
            });

            test('Passing an array with unsupported data types', () => {
                const result = MathOperations.max([null, [], {}, true]);
                expect(result).toBeNaN();
            });
        });
    });

    describe('Min', () => {
        describe('Positive test', () => {
            test('Finding the minimum value in an array of positive numbers', () => {
                const result = MathOperations.min([1, 2, 3, 4, 5]);
                expect(result).toBe(1);
            });

            test('Finding the minimum value in an array of negative numbers', () => {
                const result = MathOperations.min([-1, -2, -3, -4, -5]);
                expect(result).toBe(-5);
            });
        });

        describe('Negative test', () => {
            test('Finding the minimum value in an empty array', () => {
                const result = () => MathOperations.min([]);
                expect(result).toThrow("Array is empty");
            });
            test('Finding the minimum value in an array with different data types', () => {
                const result = MathOperations.max([1, 'two', 3, 'four']);
                expect(result).toBe(NaN);
            });

            test('Finding the maximum value in an array with data types "string"', () => {
                const result = MathOperations.max(['try', 'two', 'ghf', 'four']);
                expect(result).toBe(NaN);
            });

            test('Finding the maximum value in an array with data types "undefined"', () => {
                const result = MathOperations.max([undefined, undefined]);
                expect(result).toBe(NaN);
            });

            test('Passing an array with unsupported data types', () => {
                const result = MathOperations.max([null, [], {}, true]);
                expect(result).toBeNaN();
            });
        });
    });

    describe('Average', () => {
        describe('Positive test', () => {
            test('Finding the arithmetic mean of an array of positive numbers', () => {
                const result = MathOperations.average([1, 2, 3, 4, 5]);
                expect(result).toBe(3);
            });

            test('Finding the arithmetic mean of an array of negative numbers', () => {
                const result = MathOperations.average([-1, -2, -3, -4, -5]);
                expect(result).toBe(-3);
            });

            test('Finding the arithmetic mean of an array with one element', () => {
                const result = MathOperations.average([42]);
                expect(result).toBe(42);
            });
        });

        describe('Negative test', () => {
            test('Finding the arithmetic mean of an empty array', () => {
                const result = () => MathOperations.average([]);
                expect(result).toThrow("Array is empty");
            });
            test('Finding the arithmetic average of an array with different data types', () => {
                const result = MathOperations.average([1, 2, 3, 'four']);
                expect(result).toBeNaN();
            });
        });
    });   
});
