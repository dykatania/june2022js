// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rectangle(a, b) {
//     let area = a * b;
//     return area;
// }
//
// console.log(
//     rectangle(
//     a = +prompt('Side a'),
//     b = +prompt('Side b')
//     )
// )

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circle(r) {
//     const area = Math.PI * Math.pow(r, 2);
//     return area;
// }
//
// console.log(
//     circle(
//         r = +prompt('Write radius')
//     )
// )

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinder(h, r) {
//     const area = h * Math.PI * Math.pow(r, 2);
//     return area;
// }
//
// console.log(
//     cylinder(
//         h = +prompt('Write height'),
//         r = +prompt('Write radius')
//     )
// )

// - створити функцію яка приймає масив та виводить кожен його елемент

// let num = [
//     1, 2, 3, 4, 5, 6, 4, 8
// ];
//
// function arrayPrinter(array) {
//     for (const item of array){
//         console.log(item)
//     }
// }
//
// arrayPrinter(num);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function text(p) {
//     document.write(`<p>${p}</p>`);
// }
//
// text(p = prompt('Write something'));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(item) {
//     document.write(`
//         <div>
//             <ul>
//                 <li>${item}</li>
//                 <li>${item}</li>
//                 <li>${item}</li>
//             </ul>
//         </div>
//     `)
// }
//
// list(item = prompt('Item of list'))

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list(item, n) {
//     document.write(`<ul>`);
//     let i = 1;
//     while (i <= n) {
//         document.write(`<li>${item}</li>`);
//     i++;
//     }
//     document.write(`</ul>`);
// }
//
// list(
//      item = prompt('Item of list'),
//      n = +prompt('How much items')
//);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let objects = [
//     'hello', 1, 3, true, 5, 'okten', 4, false
// ];
//
// function arrayPrinter(array) {
//     document.write(`<ul>`);
//     for (let item of array){
//         document.write(`<li>${item}</li>`);
//         }
//     document.write(`</ul>`);
// }
//
// arrayPrinter(objects);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let people = [
//     {
//         id: 'lol',
//         name: 'Lola',
//         age: 55
//     },
//     {
//         id: 'kek',
//         name: 'Keksik',
//         age: 33
//     },
//     {
//         id: 'chek',
//         name: 'Cheburec',
//         age: 4
//     },
// ]
//
// function usersList(array) {
//     for (let user of array) {
//         document.write(`
//             <div>${user.id} -- ${user.name} -- ${user.age}</div>
//             <div>__________________</div>
//         `);
//     }
// }
//
// usersList(people);

// - створити функцію яка повертає найменьше число з масиву

// let num = [
//     55, 69, 3, 4, 5, 2, -4, 8
// ];
//
// function minNum(array) {
//     let n = array[0]
//         for (let item of array) {
//             if (n > item) {
//                 n = item
//             }
//         }
//     return n;
// }
//
// console.log(minNum(num));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let num = [
    1, 2, 3, 4, 5
];
function sum(array) {
    let x = array[0];
    let res1 = x + array[i];
    for (i = 1; i <= array.length; i++) {
        let res2 = res1 + array[i++];
    }
    console.log(res2);
}

sum(num);