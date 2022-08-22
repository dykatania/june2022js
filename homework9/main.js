// - є масив
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// //
// //     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// let targets = document.getElementsByClassName('target');
// let target = targets[0];
//
// for (const simpson of simpsons) {
//
//     let div = document.createElement('div');
//     div.classList.add('box');
//
//     let boxTitle = document.createElement('h2');
//     boxTitle.innerText = simpson.name + ' ' + simpson.surname;
//     div.appendChild(boxTitle);
//
//     let img = document.createElement('img');
//     img.src = simpson.photo;
//     div.appendChild(img);
//
//     let info = document.createElement('p');
//     info.innerText = 'Age: ' + simpson.age + ' years';
//     div.appendChild(info);
//
//     let text = document.createElement('p');
//     text.innerText = simpson.info;
//     div.appendChild(text);
//
//     target.appendChild(div);
// }

// Цикл в циклі
// - Є масив
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// let targets = document.getElementsByClassName('target');
// let target = targets[0];
//
// for (const coursesArrayElement of coursesArray) {
//
//     let div = document.createElement('div');
//     div.classList.add('box');
//
//     let courseTitle = document.createElement('h3');
//     courseTitle.innerText = coursesArrayElement.title;
//     div.appendChild(courseTitle);
//
//     let duration = document.createElement('h4');
//     duration.innerText = coursesArrayElement.monthDuration + ' months, ' + coursesArrayElement.hourDuration + ' hours'
//     div.appendChild(duration);
//
//     let modules = document.createElement('ul');
//     for (const module of coursesArrayElement.modules) {
//         let li = document.createElement('li');
//         li.innerText = module;
//         modules.appendChild(li);
//     }
//     div.appendChild(modules);
//
//     target.appendChild(div);
// }

//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let targets = document.getElementsByClassName('target');
// let target = targets[0];
//
// let block = document.createElement('div');
// block.classList.add('wrap', 'collapse', 'alpha', 'beta');
// target.appendChild(block);
//
// target.appendChild(block.cloneNode(true));

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let array = ['Main','Products','About us','Contacts'];
//
// let menus = document.getElementsByClassName('menu');
// let menu = menus[0];
//
// for (const elementOfArray of array) {
//     let li = document.createElement('li');
//     li.innerText = elementOfArray;
//     menu.appendChild(li);
// }

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let targets = document.getElementsByClassName('target');
// let target = targets[0];
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//
//     let div = document.createElement('div');
//     div.classList.add('box');
//
//     let title = document.createElement('h2');
//     title.innerText = coursesAndDurationArrayElement.title;
//     div.appendChild(title);
//
//     let months = document.createElement('p');
//     months.innerText = coursesAndDurationArrayElement.monthDuration + ' months';
//     div.appendChild(months);
//
//     target.appendChild(div);
// }

// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let targets = document.getElementsByClassName('target');
// let target = targets[0];
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//
//     let div = document.createElement('div');
//     div.classList.add('item');
//
//     let title = document.createElement('h2');
//     title.classList.add('heading');
//     title.innerText = coursesAndDurationArrayElement.title;
//     div.appendChild(title);
//
//     let description = document.createElement('p');
//     description.classList.add('description');
//     description.innerText = coursesAndDurationArrayElement.monthDuration + ' months';
//     div.appendChild(description);
//
//     target.appendChild(div);
// }

//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку
//     зникав елемент з id="text".

// let div = document.createElement('div')
// div.id = 'text'
// document.body.appendChild(div);
//
// let button = document.createElement('button');
// button.innerText = 'CLICK ME';
// document.body.appendChild(button);
//
// button.onclick = function () {
//     div.remove();
// }

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
//     з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let form = document.createElement('form');
// form.name = 'f1';
// document.body.appendChild(form);
//
// let input = document.createElement('input');
// input.type = 'number';
// input.name = 'age';
// form.appendChild(input);
//
// let button = document.createElement('button');
// button.innerText = 'Save';
// form.appendChild(button);
//
// let form1 = document.forms.f1;
//
// form1.onsubmit = function (e) {
//     e.preventDefault();
//     if (input.value >= 18) {
//         document.write('Just watch this video');
//     }
//     else {
//         document.write('You are too young, sorry baby');
//     }
// }

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let form = document.createElement('form');
form.name = 'f1';
document.body.appendChild(form);

let input1 = document.createElement('input');
input1.type = 'number';
input1.name = 'lines';
form.appendChild(input1);

let input2 = document.createElement('input');
input2.type = 'number';
input2.name = 'columns';
form.appendChild(input2);

let input3 = document.createElement('input');
input3.type = 'text';
input3.name = 'content';
form.appendChild(input3);

let button = document.createElement('button');
button.innerText = 'Create';
form.appendChild(button);







// let form1 = document.forms.f1;
// form1.onsubmit = function (e) {
//     e.preventDefault();
//
//     let ul = document.createElement('ul');
//     document.body.appendChild(ul);
//
//     let li = document.createElement('li');
//     li.innerText = input3 * input2;
//
// }