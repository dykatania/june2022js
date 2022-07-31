//   - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('Write a num');
console.log(x);

    if (x !== 0) {
        console.log(true);
    } else {
        console.log(false);
    }

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

let time = +prompt('Write number from 0 to 59');
console.log(time);

    if (time >= 0 && time <15) {
        console.log('first quarter of an hour');
    } else if (time >= 15 && time < 30) {
        console.log('second quarter of an hour');
    } else if (time >= 30 && time < 45) {
        console.log('third quarter of an hour');
    } else if (time >= 45 && time <= 59) {
        console.log('fourth quarter of an hour')
    } else {
        console.log(false);
    }


//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Write the number of the month');
console.log(day);

    if (day >= 1 && day < 11) {
        console.log('First decade of the month');
    } else if (day >= 11 && day < 21) {
        console.log('Second decade of the month');
    } else if (day >= 21 && day <=31) {
        console.log('Third decade of the month');
    } else {
        console.log(false);
    }

//- Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let weekday = +prompt('Write the day of the week');
console.log(weekday);

    switch (weekday) {
        case 1 :
            console.log('Monday');
            break;
        case 2 :
            console.log('Tuesday');
            break;
        case 3 :
            console.log('Wednesday');
            break;
        case 4 :
            console.log('Thursday');
            break;
        case 5 :
            console.log('Friday');
            break;
        case 6 :
            console.log('Saturday');
            break;
        case 7 :
            console.log('Sunday');
            break;
        default:
            console.log('Write the day of the week only');
    }

//    - Користувач вводить або має два числа.
//        Потрібно знайти та вивести максимальне число з тих двох .
//        Також потрібно врахувати коли введені рівні числа.

let a = +prompt('Write a num');
let b = +prompt('Write a num');

    if (a > b) {
        console.log(a);
    } else if (b > a) {
        console.log(b);
    } else if (b === a) {
        console.log('are the same');
    }

//    - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//        задопомогою  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let y = 2 || 'default';
console.log(y);

let z = 'mumbles' || 'default';
console.log(z);

let k ;
console.log(k);

let r = NaN || 'default';
console.log(r);
