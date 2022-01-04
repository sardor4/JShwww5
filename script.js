let num;
while (1) {
    num = +prompt("Какое задание вывести?", 1);

    switch (num) {
        case 1: {
            console.log('1 задание  (сумма чисел от 1 до n)\n', ' ');
            let n = 230;
            let result = n * (n + 1) / 2;
            console.log(result);
            break;
        }
        case 2: {
            console.log('2 задание (сумма чисел Фибоначчи от 0 до n числа)\n', ' ');
            let p = +prompt("Номер элемента ряда Фибоначчи: ");
            let n1 = 0;
            let n2 = 1;
            let arr = [];
            let fib_sum;
            for (let i = 0; i < p - 2; i++) {
                fib_sum = n1 + n2;
                n1 = n2;
                n2 = fib_sum;
                arr.push(n2);
            }
            console.log(arr.map(i => x += i, x = 1).reverse()[0]);
            console.log("Значение этого элемента: " + n2);
            break;
        }
        case 3: {
            console.log('3 задание (умножение чисел от n до m)\n', ' ');
            let n = +prompt('Введите 1 число');
            let m = +prompt('Введите 2 число');
            for (let i = 1; i <= m; i++) {
                res = n * i
                console.log(res);
            }
            console.log("Конечный результат: " + res);
            break;
        }
        default:
            break;
    }
    if (num == 3) {
        break;
    }
}