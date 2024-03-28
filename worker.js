// Генерируем случайное число от 1 до 100
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Генерируем массив случайных чисел
function generateRandomNumbers(count) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(getRandomNumber());
    }
    return numbers;
}

// Вычисляем среднее значение
function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

// Генерируем массив случайных чисел
const numbers = generateRandomNumbers(10000000);

// Вычисляем среднее значение
const average = calculateAverage(numbers);

// Выводим среднее значение на страницу
document.getElementById("average").textContent = 'Среднее значение: ' + average;
