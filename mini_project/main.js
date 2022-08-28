// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну
// // інфорацію про об'єкт на який клікнули

let targets = document.getElementsByClassName('target');
let target = targets[0];

fetch('https://jsonplaceholder.typicode.com/users')

    .then((response) => {
        return response.json();
    })

    .then( users => {
    for (const user of users) {

        let div = document.createElement('div');
        div.classList.add('user');

        let title = document.createElement('h3');
        title.classList.add('user_info');
        title.innerText = user.id + '. ' + user.name;
        div.appendChild(title);

        let link = document.createElement('a');
        link.classList.add('user_details');
        link.innerText = 'Details';
        link.href = `user-details.html?id=${user.id}`;
        link.target = '_blank';
        div.appendChild(link);

        target.appendChild(div);
    }
    }
    );





