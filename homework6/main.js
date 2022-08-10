// // - Знайти та вивести довижину наступних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let hw = 'hello world';
// let li = 'lorem ipsum';
// let jsCool = 'javascript is cool'
//
// console.log(hw.length);
// console.log(li.length);
// console.log(jsCool.length);
//
// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
// console.log(hw.toUpperCase());
// console.log(li.toUpperCase());
// console.log(jsCool.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let hwBig = 'HELLO WORLD';
// let liBig = 'LOREM IPSUM';
// let coolBig = 'JAVASCRIPT IS COOL';
//
// console.log(hwBig.toLowerCase());
// console.log(liBig.toLowerCase());
// console.log(coolBig.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let strNew = str.substring(1, str.length - 3);
// console.log(strNew);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let arr = str.split(' ');
// console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомогою map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// let map = arr.map(item => (item.toString()));
// console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// let dir = +prompt('-1 or 1');
// let positiv = nums.sort((a, b) => a > b);
// let negativ = nums.sort((a, b) => a < b);
//
// function sortNums(direction) {
//     if (direction === 1) {
//         console.log(positiv);
//     }
//     if (direction === -1) {
//         console.log(negativ);
//     }
// }
// sortNums(dir);

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration < b.monthDuration));
// console.log(coursesAndDurationArray.filter(month => month.monthDuration > 5));

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cards = [
    {cardSuit: 'clubs', value: 'Ace', color:'black'},
    {cardSuit: 'clubs', value: 6, color:'black'},
    {cardSuit: 'clubs', value: 7, color:'black'},
    {cardSuit: 'clubs', value: 8, color:'black'},
    {cardSuit: 'clubs', value: 9, color:'black'},
    {cardSuit: 'clubs', value: 10, color:'black'},
    {cardSuit: 'clubs', value: 'Jack', color:'black'},
    {cardSuit: 'clubs', value: 'Queen', color:'black'},
    {cardSuit: 'clubs', value: 'King', color:'black'},

    {cardSuit: 'diamonds', value: 'Ace', color:'red'},
    {cardSuit: 'diamonds', value: 6, color:'red'},
    {cardSuit: 'diamonds', value: 7, color:'red'},
    {cardSuit: 'diamonds', value: 8, color:'red'},
    {cardSuit: 'diamonds', value: 9, color:'red'},
    {cardSuit: 'diamonds', value: 10, color:'red'},
    {cardSuit: 'diamonds', value: 'Jack', color:'red'},
    {cardSuit: 'diamonds', value: 'Queen', color:'red'},
    {cardSuit: 'diamonds', value: 'King', color:'red'},

    {cardSuit: 'hearts', value: 'Ace', color:'red'},
    {cardSuit: 'hearts', value: 6, color:'red'},
    {cardSuit: 'hearts', value: 7, color:'red'},
    {cardSuit: 'hearts', value: 8, color:'red'},
    {cardSuit: 'hearts', value: 9, color:'red'},
    {cardSuit: 'hearts', value: 10, color:'red'},
    {cardSuit: 'hearts', value: 'Jack', color:'red'},
    {cardSuit: 'hearts', value: 'Queen', color:'red'},
    {cardSuit: 'hearts', value: 'King', color:'red'},
    {value: 'Joker', color:'red'},

    {cardSuit: 'spades', value: 'Ace', color:'black'},
    {cardSuit: 'spades', value: 6, color:'black'},
    {cardSuit: 'spades', value: 7, color:'black'},
    {cardSuit: 'spades', value: 8, color:'black'},
    {cardSuit: 'spades', value: 9, color:'black'},
    {cardSuit: 'spades', value: 10, color:'black'},
    {cardSuit: 'spades', value: 'Jack', color:'black'},
    {cardSuit: 'spades', value: 'Queen', color:'black'},
    {cardSuit: 'spades', value: 'King', color:'black'},
    {value: 'Joker', color:'black'},
];

// let spadeAce = cards.reduce(function (spadeAce, card) {
//     if (card.cardSuit === 'spades' && card.value === 'Ace') {
//         spadeAce.push(card)
//     }
//     return spadeAce;
// }, []);
// console.log(spadeAce);
//
// let reduce = cards.reduce(function (accum, card) {
//     if (card.value === 6) {
//         accum.six.push(card);
//     } if (card.color === 'red') {
//         accum.red.push(card);
//     } if (card.cardSuit === 'diamonds') {
//         accum.diamond.push(card);
//     }
//     return accum;
//     }, {six: [], red:[], diamond:[]});
// console.log(reduce);
//
// let clubs = cards.filter(card => card.cardSuit === 'clubs');
// let reduce2 = clubs.reduce(function (accum, card) {
//     if (card.value >= 9) {
//         accum.clubsNine.push(card);
//     } if (card.value === 'Jack') {
//         accum.clubsNine.push(card);
//     } if (card.value === 'Queen') {
//         accum.clubsNine.push(card);
//     } if (card.value === 'King') {
//         accum.clubsNine.push(card);
//     } if (card.value === 'Ace') {
//         accum.clubsNine.push(card);
//     }
//     return accum;
// }, {clubsNine: []})
// console.log(reduce2);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = cards.reduce(function (accumu, card) {
    if (card.cardSuit === 'spades') {
        accumu.spades.push(card);
    } if (card.cardSuit === 'diamonds') {
        accumu.diamonds.push(card);
    } if (card.cardSuit === 'clubs') {
        accumu.clubs.push(card);
    } if (card.cardSuit === 'hearts') {
        accumu.hearts.push(card);
    }
    return accumu;
}, {spades:[], diamonds:[], hearts:[], clubs:[]});

console.log(reduce);