// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//---------create--------------------
const textElement = document.createElement('div');
textElement.id = 'text';
textElement.innerText = 'text for div';
textElement.style.backgroundColor = 'red';
textElement.style.fontSize = '18px';

const buttonElement = document.createElement('button');
buttonElement.innerText = 'on/off';
buttonElement.style.fontSize = '18px';

document.body.append(textElement, buttonElement);

//----------event-----------------


buttonElement.onclick = () => {
    let hiddenElement = document.getElementById('text');
    hiddenElement.classList.toggle('hidden');

}

//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача

const form = document.getElementById('form');
const ageInput = document.getElementById('age');
const result = document.getElementById('result');

form.onsubmit = function (ev) {
    ev.preventDefault();
    if (ageInput.value < 18) {
        result.innerText = 'Ви не досягли повноліття';
    }
}


// #ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати дані з полів, та вивести об'єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const form2 = document.getElementById('form2');
const person = document.getElementById('person');
const personName = document.getElementById('name');
const personSurname = document.getElementById('surname');
const personAge = document.getElementById('age2');

form2.onsubmit = function (ev) {
    ev.preventDefault();
    person.innerText = `${personName.value} ${personSurname.value} ${personAge.value}`;

}

// #2VaLt4vDczH
// є сторінка, на якій є блок, в якому знаходиться цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

const numberBox = document.createElement('div');
numberBox.classList.add('block');
document.body.appendChild(numberBox);

let number = localStorage.getItem('value') || 0;
number = parseInt(number);
numberBox.textContent = number;
localStorage.setItem('value', JSON.stringify(number + 1));


// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM

let sessionsList = [];
if (localStorage.getItem('sessionsList') === null) {
    sessionsList.push({date: new Date()});
} else {
    sessionsList = JSON.parse(localStorage.getItem('sessionsList'));
    sessionsList.push({date: new Date()});
}
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));


// #Jg0gPO00
// створити конвертор ваги з кг у фунти. дані заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const kilo = document.getElementById('kilo');
const pound = document.getElementById('pound');
kilo.oninput = function () {
    pound.textContent = `${kilo.value * 2.20462262185}`;
};

// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції - addToLocalStorage(arrayName:string,objToAdd:any{}):void

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

localStorage.setItem('users', JSON.stringify(users));

function addToLocalStorage(arrayName, objToAdd) {
    let newArr = JSON.parse(localStorage.getItem(arrayName))
    if (newArr !== null) {
        newArr.push(objToAdd);
        localStorage.setItem(arrayName, JSON.stringify(newArr));
    }
}

addToLocalStorage('users', {name: 'sdgsgd', age: 55, status: true});

//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

document.getElementById('generateBtn').addEventListener('click', function () {
    // Отримуємо значення з інпутів
    const rows = parseInt(document.getElementById('rows').value);
    const cells = parseInt(document.getElementById('cells').value);
    const content = document.getElementById('content').value;

    // Очищаємо контейнер для таблиці
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    // Створюємо таблицю
    const table = document.createElement('table');

    // Додаємо рядки та ячейки
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < cells; j++) {
            const cell = document.createElement('td');
            cell.textContent = content; // Вставляємо вміст у ячейку
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    // Додаємо таблицю до контейнера
    tableContainer.appendChild(table);
});

//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значення додається по 10 грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається


// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантаженні сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

