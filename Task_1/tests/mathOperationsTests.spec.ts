import { MathOperations } from '../src/mathOperations';

describe('MathOperations', () => {
    let mathOperations: MathOperations;
    let result: number;
  
    beforeEach(() => {
        mathOperations = new MathOperations();
    });
  
    describe('power', () => {
        describe('positive test', () => {
            test('Возведение положительного числа в положительную степень', () => {
                const result = MathOperations.power(2, 3);
                expect(result).toBe(8);
            });

            test('Возведение числа в степень 0', () => {
                const result = MathOperations.power(2, 0);
                expect(result).toBe(1);
            });

            test('Возведение числа 0 в степень', () => {
                const result = MathOperations.power(0, 3);
                expect(result).toBe(0);
            });

            test('Возведение отрицательного числа в положительную степень', () => {
                const result = MathOperations.power(-2, 3);
                expect(result).toBe(-8);
            });

            test('Возведение положительного числа в отрицательную степень', () => {
                const result = MathOperations.power(2, -3);
                expect(result).toBeCloseTo(0.125);
            });

            test('Возведение числа в дробную степень', () => {
                const result = MathOperations.power(9, 0.5);
                expect(result).toBe(3);
            });
        });
    });

    describe('sqrt', () => {
        describe('positive test', () => {
            test('Нахождение квадратного корня положительного числа', () => {
                const result = MathOperations.sqrt(4);
                expect(result).toBe(2);
            });

            test('Нахождение квадратного корня нуля', () => {
                const result = MathOperations.sqrt(0);
                expect(result).toBe(0);
            });
        });

        describe('negative test', () => {
            test('Нахождение квадратного корня отрицательного целого числа', () => {
                const result = () => MathOperations.sqrt(-1);
                expect(result).toThrow("Square root of negative number");
            });

            test('Нахождение квадратного корня отрицательного дробного числа', () => {
                const result = () => MathOperations.sqrt(-1.5678);
                expect(result).toThrow("Square root of negative number");
            });

            test('Нахождение квадратного корня отрицательного числа близкого к нулю', () => {
                const result = () => MathOperations.sqrt(-0.001);
                expect(result).toThrow("Square root of negative number");
            });
        });
    });

    describe('max', () => {
        describe('positive test', () => {
            test('Нахождение максимального значения в массиве положительных чисел', () => {
                const result = MathOperations.max([1, 2, 3, 4, 5]);
                expect(result).toBe(5);
            });

            test('Нахождение максимального значения в массиве отрицательных чисел', () => {
                const result = MathOperations.max([-1, -2, -3, -4, -5]);
                expect(result).toBe(-1);
            });
        });

        describe('negative test', () => {
            test('Нахождение максимального значения в пустом массиве', () => {
                const result = () => MathOperations.max([]);
                expect(result).toThrow("Array is empty");
            });
            test('Нахождение максимального значения в массиве с разными типами данных', () => {
                const result = MathOperations.max([1, 'two', 3, 'four']);
                expect(result).toBe(NaN);
            });

            test('Нахождение максимального значения в массиве с типами данных "строка"', () => {
                const result = MathOperations.max(['try', 'two', 'ghf', 'four']);
                expect(result).toBe(NaN);
            });

            
            test('Нахождение максимального значения в массиве с типами данных "undefined"', () => {
                const result = MathOperations.max([undefined, undefined]);
                expect(result).toBe(NaN);
            });

            test('Передача массива с неподдерживаемыми типами данных', () => {
                const result = MathOperations.max([null, [], {}, true]);
                expect(result).toBeNaN();
            });
        });
    });

    describe('min', () => {
        describe('positive test', () => {
            test('Нахождение минимального значения в массиве положительных чисел', () => {
                const result = MathOperations.min([1, 2, 3, 4, 5]);
                expect(result).toBe(1);
            });

            test('Нахождение минимального значения в массиве отрицательных чисел', () => {
                const result = MathOperations.min([-1, -2, -3, -4, -5]);
                expect(result).toBe(-5);
            });
        });

        describe('negative test', () => {
            test('Нахождение минимального значения в пустом массиве', () => {
                const result = () => MathOperations.min([]);
                expect(result).toThrow("Array is empty");
            });
            test('Нахождение минимального значения в массиве с разными типами данных', () => {
                const result = MathOperations.max([1, 'two', 3, 'four']);
                expect(result).toBe(NaN);
            });

            test('Нахождение максимального значения в массиве с типами данных "строка"', () => {
                const result = MathOperations.max(['try', 'two', 'ghf', 'four']);
                expect(result).toBe(NaN);
            });

            test('Нахождение максимального значения в массиве с типами данных "undefined"', () => {
                const result = MathOperations.max([undefined, undefined]);
                expect(result).toBe(NaN);
            });

            test('Передача массива с неподдерживаемыми типами данных', () => {
                const result = MathOperations.max([null, [], {}, true]);
                expect(result).toBeNaN();
            });
        });
    });

    describe('average', () => {
        describe('positive test', () => {
            test('Нахождение среднего арифметического массива положительных чисел', () => {
                const result = MathOperations.average([1, 2, 3, 4, 5]);
                expect(result).toBe(3);
            });

            test('Нахождение среднего арифметического массива отрицательных чисел', () => {
                const result = MathOperations.average([-1, -2, -3, -4, -5]);
                expect(result).toBe(-3);
            });

            test('Нахождение среднего арифметического массива с одним элементом', () => {
                const result = MathOperations.average([42]);
                expect(result).toBe(42);
            });
        });

        describe('negative test', () => {
            test('Нахождение среднего арифметического пустого массива', () => {
                const result = () => MathOperations.average([]);
                expect(result).toThrow("Array is empty");
            });
            test('Нахождение среднего арифметического массива с разными типами данных', () => {
                const result = MathOperations.average([1, 2, 3, 'four']);
                expect(result).toBeNaN();
            });
        });
    });

        
  


});
