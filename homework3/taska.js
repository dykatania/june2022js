//- Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
//кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//    Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

if (friends[2] ) {
    console.log('big')
} else if (friends[2] == null) {
    console.log('small')
}

//- Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//    Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

let a = +prompt('write a num');
let b = +prompt('write a num');
let c = +prompt('write a num');

if (a > b && a < c) {
    console.log(a)
} else if (a < b && a > c) {
    console.log(a)
} else if (b > a && b < c) {
    console.log(b)
} else if (b < a && b > c) {
    console.log(b)
} else if (c > a && c < b) {
    console.log(c)
} else if (c < a && c > b) {
    console.log(c)
} else {
    console.log('try again')
}

//- Перепишіть конструкцію if з використанням умовного оператора '?':

let result = a + b < 4 ? 'Мало' : 'Багато';
console.log(result);

//- Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
//напишіть це тернарним оператором

let num = +prompt('write a num from -100 to +100');
let foo = num < 100 && num > 0 ? ' positiv' : 'zero';
let res = num > -100 && num < 0 ? 'negativ' : foo;

console.log(res);

//- У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//    Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = prompt('boolean');
let tester = test === 'true' ? 'Вірно' : 'Неправильно';
console.log(tester);

//- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
//Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let js = prompt('Яка «офіційна» назва JavaScript?');
console.log(js);

if (js === 'ECMAScript') {
    console.log('Правильно!')
} else {
    console.log('Не знаєте? ECMAScript!')
}

  //  - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
//Користувач вводить номер квартири просто в змінні або через prompt('') .
 //   Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let apartment = +prompt('Write num of your apartments');

if (apartment >= 1 && apartment <=20) {
    console.log('First entrance');
} else if (apartment > 20 && apartment <= 48) {
    console.log('Second entrance');
} else if (apartment > 48 && apartment <= 90) {
    console.log('Third entrance');
} else {
    console.log('Change your choice');
}

//- Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

let number = +prompt('Write a num');

if (number === 10) {
    console.log('ВІРНО');
} else {
    console.log('НЕВІРНО');
}

//- Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//    Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
 //   Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let temperature = +prompt('What temperature is outside?');
let weather = temperature <= 22 && temperature >= 10 ? 'йдемо сьогодні в OKTEN на навчання' : 'сидимо вдома і вчимося ОНЛАЙН';

console.log(weather);

//- За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//    числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

let victory = +prompt('Write num from 1 to 5');
console.log(victory);

    switch (victory) {
        case 1 :
            console.log('Volkswagen Passat');
            break;
        case 2 :
            console.log('Yamaha');
            break;
        case 3 :
            console.log('Iphone 1');
            break;
        case 4 :
            console.log('Book');
            break;
        case 5 :
            console.log('Toyota RAV4');
            break;
        default :
            console.log('Error228');
    }