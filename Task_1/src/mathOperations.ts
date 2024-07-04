export class MathOperations {
    // Возведение числа в степень
    static power(base: number, exponent: number): number {
        return Math.pow(base, exponent);
    }

    // Нахождение квадратного корня числа
    static sqrt(number: number): number {
        if (number < 0) {
            throw new Error("Square root of negative number");
        }
        return Math.sqrt(number);
    }

    // Проверка, является ли число четным
    static isEven(number: number) {
        return number % 2 === 0;
    }

    // Проверка, является ли число нечетным
    static isOdd(number: number) {
        return number % 2 !== 0;
    }

    // Нахождение модуля числа
    static abs(number: number) {
        return Math.abs(number);
    }

    // Нахождение наибольшего общего делителя двух чисел
static gcd(a: number, b: number): number {
    if (!b) {
        return a;
    }
    return MathOperations.gcd(b, a % b);
}
    // Нахождение наименьшего общего кратного двух чисел
    static lcm(a: number, b: number) {
        return Math.abs(a * b) / MathOperations.gcd(a, b);
    }

    // Нахождение максимального значения в массиве чисел
    static max(arr: any): any {
        if (arr.length === 0) {
            throw new Error("Array is empty");
        }
        return Math.max(...arr);
    }

    // Нахождение минимального значения в массиве чисел
    static min(arr: any) {
        if (arr.length === 0) {
            throw new Error("Array is empty");
        }
        return Math.min(...arr);
    }

    // Нахождение среднего арифметического массива чисел
    static average(arr: any) {
        if (arr.length === 0) {
            throw new Error("Array is empty");
        }
        const sum = arr.reduce((acc: any, num: number) => acc + num, 0);
        return sum / arr.length;
    }

    // Проверка, является ли число простым
    static isPrime(number: number) {
        if (number <= 1) return false;
        if (number <= 3) return true;
        if (number % 2 === 0 || number % 3 === 0) return false;
        for (let i = 5; i * i <= number; i += 6) {
            if (number % i === 0 || number % (i + 2) === 0) return false;
        }
        return true;
    }

    // Нахождение суммы цифр числа
    static sumOfDigits(number: number) {
        return number
            .toString()
            .split('')
            .map(Number)
            .reduce((acc, digit) => acc + digit, 0);
    }

    // Переворачивание числа (например, 12345 становится 54321)
    static reverseNumber(number: number) {
        return parseInt(number.toString().split('').reverse().join(''), 10);
    }
}