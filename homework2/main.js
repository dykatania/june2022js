// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let tobuy = ['milk', 'water', 'cookies', 'bread', 'socks', 'sausages', 'sour cream', 'shorts', 'cucumber', 'tomato'];
console.log(tobuy[0]);
console.log(tobuy[1]);
console.log(tobuy[2]);
console.log(tobuy[3]);
console.log(tobuy[4]);
console.log(tobuy[5]);
console.log(tobuy[6]);
console.log(tobuy[7]);
console.log(tobuy[8]);
console.log(tobuy[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let kobzar = {
    title: 'Kobzar',
    pageCount: 300,
    genre: 'Poetry'
};
let tiger = {
    title: 'Tiger Trappers',
    pageCount: 277,
    genre: 'Adventure novel'
};
let orwell = {
    title: '1984',
    pageCount: 324,
    genre: 'Dystopian'
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let kobzar1 = {
    title: 'Kobzar',
    pageCount: 300,
    genre: 'Poetry',
    authors: [
        {
            name: 'Taras Shevchenko',
            age: 47
        }
    ]
};
let tiger1 = {
    title: 'Tiger Trappers',
    pageCount: 277,
    genre: 'Adventure novel',
    authors: [
        {
            name: 'Ivan Bahrianyi',
            age: 56
        }
    ]
};
let orwell1 = {
    title: '1984',
    pageCount: 324,
    genre: 'Dystopian',
    authors: [
        {
            name: 'George Orwell',
            age: 46
        }
    ]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let u1 = {name: 'Tania', username: 'dykatania', password: 1488};
let u2 = {name: 'Bodya', username: 'badan', password: 1234};
let u3 = {name: 'Serhiy', username: 'serhio', password: 5488};
let u4 = {name: 'Viktoria', username: 'primavera', password: 7788};
let u5 = {name: 'Anya', username: 'bogachka', password: 5544};
let u6 = {name: 'Slavik', username: 'slavek', password: 2244};
let u7 = {name: 'Taras', username: 'taroslav', password: 8855};
let u8 = {name: 'Olena', username: 'dupazelena', password: 6622};
let u9 = {name: 'Andriana', username: 'tsiotka', password: 2754};
let u10 = {name: 'Bublyk', username: 'kytsiuk', password: 5499};

let users = [u1, u2, u3, u4, u5, u6, u7, u8, u9, u10];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(
    users[3].password,
    users[4].password,
    users[5].password,
    users[6].password,
    users[7].password,
    users[8].password,
    users[9].password,
);
