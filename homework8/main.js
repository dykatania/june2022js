// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [];
//
// users.push(
//     new User('0', 'Olena', 'Leleka', 'leleka@gmail.com', +380999999999),
//     new User('1', 'Bohdan', 'Tkhir', 'tkhir@gmail.com', +380988888888),
//     new User('2', 'Sasha', 'Borsuk', 'borsuk@gmail.com', +380977777777),
//     new User('3', 'Glib', 'Shchur', 'shchur@gmail.com', +380966666666),
//     new User('4', 'Yura', 'Kohut', 'kohut@gmail.com', +380955555555),
//     new User('5', 'Olya', 'Kril', 'kril@gmail.com', +380944444444),
//     new User('6', 'Mary', 'Ursul', 'ursul@gmail.com', +380933333333),
//     new User('7', 'Tania', 'Dyka', 'dyka@gmail.com', +380922222222),
//     new User('8', 'Yevhenia', 'Borsuk', 'borsuchka@gmail.com', +380911111111),
//     new User('9', 'Liubomyr', 'Lola', 'lola@gmail.com', +380900000000),
//     );
//
// console.log(users);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// console.log(users.filter(pair => pair.id % 2 === 0))
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// console.log(users.sort((a, b) => a.id < b.id));

// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
//
// let clients = [];
//
// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// clients.push(
//     new Client('0', 'Olena', 'Leleka', 'leleka@gmail.com', +380999999999, ['horilka', 'cider']),
//     new Client('1', 'Bohdan', 'Tkhir', 'tkhir@gmail.com', +380988888888, ['sour beer', 'lager beer', 'stout beer']),
//     new Client('2', 'Sasha', 'Borsuk', 'borsuk@gmail.com', +380977777777, ['horilka', 'non alk beer', 'cider']),
//     new Client('3', 'Glib', 'Shchur', 'shchur@gmail.com', +380966666666, ['non alk beer']),
//     new Client('4', 'Yura', 'Kohut', 'kohut@gmail.com', +380955555555, ['lager beer', 'stout beer']),
//     new Client('5', 'Olya', 'Kril', 'kril@gmail.com', +380944444444, ['non alk beer', 'cider']),
//     new Client('6', 'Mary', 'Ursul', 'ursul@gmail.com', +380933333333, ['horilka', 'non alk beer', 'cider', 'stout beer']),
//     new Client('7', 'Tania', 'Dyka', 'dyka@gmail.com', +380922222222, ['non alk beer', 'cider', 'sour beer']),
//     new Client('8', 'Yevhenia', 'Borsuk', 'borsuchka@gmail.com', +380911111111, ['non alk beer']),
//     new Client('9', 'Liubomyr', 'Lola', 'lola@gmail.com', +380900000000, ['horilka', 'cider']),
// );
//
// console.log(clients);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// console.log(clients.sort((a, b) => a.order.length > b.order.length));

// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// // виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(manufacturer, year, maxspeed, enginevolume,) {
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.enginevolume = enginevolume;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//
//     this.info = function () {
//         console.log(`
//         manufacturer - ${this.manufacturer}
//         year of manufacture - ${this.year}
//         maximum speed - ${this.maxspeed}
//         engine volume - ${this.enginevolume}`);
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = this.year + newValue
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
// }
//
// let car1 = new Car('VW', 2017, 240, 2.0, );
// console.log(car1);
// car1.info();
// car1.increaseMaxSpeed(20);
// car1.changeYear(2019);
// car1.addDriver('Tania');
// car1.drive();
// console.log(car1);

// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(manufacturer, year, maxspeed, enginevolume) {
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.enginevolume = enginevolume;
//
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//         }
//
//         this.info = function () {
//             console.log(`
//                 manufacturer - ${this.manufacturer}
//                 year of manufacture - ${this.year}
//                 maximum speed - ${this.maxspeed}
//                 engine volume - ${this.enginevolume}`);
//         }
//
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxspeed = this.maxspeed + newSpeed;
//         }
//
//         this.changeYear = function (newValue) {
//             this.year = this.year + newValue
//         }
//
//         this.addDriver = function (driver) {
//             this.driver = driver
//         }
//     }
// }
//
//         let car1 = new Car('VW', 2017, 240, 2.0, );
//         console.log(car1);
//         car1.info();
//         car1.increaseMaxSpeed(20);
//         car1.changeYear(2019);
//         car1.addDriver('Tania');
//         car1.drive();
//         console.log(car1);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Popelushka(name, age, shoesize) {
    this.name = name;
    this.age = age;
    this.shoesize = shoesize;
}

let arr = [
    new Popelushka('Vika',21,38),
    new Popelushka('Tanya',20,40),
    new Popelushka('Ira',21,37),
    new Popelushka('Katya',19,38),
    new Popelushka('Zosia',22,40),
    new Popelushka('Nastya',23,41),
    new Popelushka('Oksana',21,39),
    new Popelushka('Olya',24,40),
    new Popelushka('Anya',22,42),
    new Popelushka('Masha',21,36)
]

class Prince {
    constructor(name, age, shoesize) {
        this.name = name;
        this.age = age;
        this.shoesize = shoesize;
    }
}

let prince = new Prince('Viktor',21,37);

for (const popelushka of arr) {
    if (prince.shoesize === popelushka.shoesize) {
        console.log(`${prince.name} find ${popelushka.name}'s shoe`)
    }
    }

console.log(arr.find(popelushka => popelushka.shoesize === prince.shoesize));



