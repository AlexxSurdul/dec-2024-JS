// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

//створюємо блок
const textElement = document.createElement('div');
textElement.id = 'text';
textElement.innerText = 'text for div';
textElement.style.backgroundColor = 'red';
textElement.style.fontSize = '18px';

//створюємо кнопку
const buttonElement = document.createElement('button');
buttonElement.innerText = 'on/off';
buttonElement.style.fontSize = '18px';

document.body.append(textElement, buttonElement);

//івент для приховування блока
buttonElement.onclick = () => {
    let hiddenElement = document.getElementById('text');
    hiddenElement.classList.toggle('hidden');

}

//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача

//підтягуємо елементи з html
const form = document.getElementById('form');
const ageInput = document.getElementById('age');
const result = document.getElementById('result');

//функція перевірки віку, яка виводить попередження, якщо вік менше 18
form.onsubmit = function (ev) {
    ev.preventDefault();
    if (ageInput.value < 18) {
        result.innerText = 'Ви не досягли повноліття';
    }
}

// #ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати дані з полів, та вивести об'єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

//підтягуємо елементи з html
const form2 = document.getElementById('form2');
const person = document.getElementById('person');
const personName = document.getElementById('name');
const personSurname = document.getElementById('surname');
const personAge = document.getElementById('age2');

//функція, яка виводить дані з інпутів
form2.onsubmit = function (ev) {
    ev.preventDefault();
    person.innerText = `${personName.value} ${personSurname.value} ${personAge.value}`;

}

// #2VaLt4vDczH
// є сторінка, на якій є блок, в якому знаходиться цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

//створюємо блок для виводу числа
const numberBox = document.createElement('div');
numberBox.classList.add('block');
document.body.appendChild(numberBox);

//заповнюємо блок числом, яке буде збільшуватись після перезавантаження сторінки
let number = localStorage.getItem('value') || 0;
number = parseInt(number);
numberBox.textContent = number;
localStorage.setItem('value', JSON.stringify(number + 1));


// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM

//задаємо масив об'єктів
let sessionsList = [];
//заповнюємо його датами, якщо запису в локалсторедж ще нема, то вносимо новий. якщо є - додаємо новий об'єкт до масиву в локалсторедж
if (localStorage.getItem('sessionsList') === null) {
    sessionsList.push({date: new Date()});
} else {
    sessionsList = JSON.parse(localStorage.getItem('sessionsList'));
    sessionsList.push({date: new Date()});
}
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
//код для підтягування даних і запис в DOM на сторінці sessionsListPage.html

// #Jg0gPO00
// створити конвертор ваги з кг у фунти. дані заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

//підтягуємо інпути з html
const kilo = document.getElementById('kilo');
const pound = document.getElementById('pound');
//задаємо функцію, яка на льоту буде конвертувати кілограми у фунти
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
//пишемо масив в localStorage
localStorage.setItem('users', JSON.stringify(users));

//функція, яка додає об'єкт у заданий масив в localStorage
function addToLocalStorage(arrayName, objToAdd) {
    let newArr = JSON.parse(localStorage.getItem(arrayName));
    //перевіряємо чи в localStorage є потрібний масив, якщо він не null, то додаємо у нього об'єкт і пишемо назад в localStorage
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
    // Отримуємо значення з інпутів, цифри парсимо в цілі числа
    const rows = parseInt(document.getElementById('rows').value);
    const cells = parseInt(document.getElementById('cells').value);
    const content = document.getElementById('content').value;

    // Очищаємо контейнер для таблиці, без цього коду таблиця наповнюється безкінечно
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

//створюємо блок для виводу числа
const numberBoxDelay = document.createElement('div');
numberBoxDelay.classList.add('block');
document.body.appendChild(numberBoxDelay);

//заповнюємо блок числом, яке буде збільшуватись після перезавантаження сторінки із затримкою
let numberDelay = localStorage.getItem('valueDelay') || 100;
numberDelay = parseInt(numberDelay);
numberBoxDelay.textContent = `${numberDelay} грн`;
//додаємо затримку через setTimeout у 10 с (10 тис мс)
setTimeout(() => {
    localStorage.setItem('valueDelay', JSON.stringify(numberDelay + 10));
}, 10000);


// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантаженні сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const bigArr = [
    {"id": 1, "name": "Object 1", "value": 10, "active": true},
    {"id": 2, "name": "Object 2", "value": 20, "active": false},
    {"id": 3, "name": "Object 3", "value": 30, "active": true},
    {"id": 4, "name": "Object 4", "value": 40, "active": false},
    {"id": 5, "name": "Object 5", "value": 50, "active": true},
    {"id": 6, "name": "Object 6", "value": 60, "active": false},
    {"id": 7, "name": "Object 7", "value": 70, "active": true},
    {"id": 8, "name": "Object 8", "value": 80, "active": false},
    {"id": 9, "name": "Object 9", "value": 90, "active": true},
    {"id": 10, "name": "Object 10", "value": 100, "active": false},
    {"id": 11, "name": "Object 11", "value": 110, "active": true},
    {"id": 12, "name": "Object 12", "value": 120, "active": false},
    {"id": 13, "name": "Object 13", "value": 130, "active": true},
    {"id": 14, "name": "Object 14", "value": 140, "active": false},
    {"id": 15, "name": "Object 15", "value": 150, "active": true},
    {"id": 16, "name": "Object 16", "value": 160, "active": false},
    {"id": 17, "name": "Object 17", "value": 170, "active": true},
    {"id": 18, "name": "Object 18", "value": 180, "active": false},
    {"id": 19, "name": "Object 19", "value": 190, "active": true},
    {"id": 20, "name": "Object 20", "value": 200, "active": false},
    {"id": 21, "name": "Object 21", "value": 210, "active": true},
    {"id": 22, "name": "Object 22", "value": 220, "active": false},
    {"id": 23, "name": "Object 23", "value": 230, "active": true},
    {"id": 24, "name": "Object 24", "value": 240, "active": false},
    {"id": 25, "name": "Object 25", "value": 250, "active": true},
    {"id": 26, "name": "Object 26", "value": 260, "active": false},
    {"id": 27, "name": "Object 27", "value": 270, "active": true},
    {"id": 28, "name": "Object 28", "value": 280, "active": false},
    {"id": 29, "name": "Object 29", "value": 290, "active": true},
    {"id": 30, "name": "Object 30", "value": 300, "active": false},
    {"id": 31, "name": "Object 31", "value": 310, "active": true},
    {"id": 32, "name": "Object 32", "value": 320, "active": false},
    {"id": 33, "name": "Object 33", "value": 330, "active": true},
    {"id": 34, "name": "Object 34", "value": 340, "active": false},
    {"id": 35, "name": "Object 35", "value": 350, "active": true},
    {"id": 36, "name": "Object 36", "value": 360, "active": false},
    {"id": 37, "name": "Object 37", "value": 370, "active": true},
    {"id": 38, "name": "Object 38", "value": 380, "active": false},
    {"id": 39, "name": "Object 39", "value": 390, "active": true},
    {"id": 40, "name": "Object 40", "value": 400, "active": false},
    {"id": 41, "name": "Object 41", "value": 410, "active": true},
    {"id": 42, "name": "Object 42", "value": 420, "active": false},
    {"id": 43, "name": "Object 43", "value": 430, "active": true},
    {"id": 44, "name": "Object 44", "value": 440, "active": false},
    {"id": 45, "name": "Object 45", "value": 450, "active": true},
    {"id": 46, "name": "Object 46", "value": 460, "active": false},
    {"id": 47, "name": "Object 47", "value": 470, "active": true},
    {"id": 48, "name": "Object 48", "value": 480, "active": false},
    {"id": 49, "name": "Object 49", "value": 490, "active": true},
    {"id": 50, "name": "Object 50", "value": 500, "active": false},
    {"id": 51, "name": "Object 51", "value": 510, "active": true},
    {"id": 52, "name": "Object 52", "value": 520, "active": false},
    {"id": 53, "name": "Object 53", "value": 530, "active": true},
    {"id": 54, "name": "Object 54", "value": 540, "active": false},
    {"id": 55, "name": "Object 55", "value": 550, "active": true},
    {"id": 56, "name": "Object 56", "value": 560, "active": false},
    {"id": 57, "name": "Object 57", "value": 570, "active": true},
    {"id": 58, "name": "Object 58", "value": 580, "active": false},
    {"id": 59, "name": "Object 59", "value": 590, "active": true},
    {"id": 60, "name": "Object 60", "value": 600, "active": false},
    {"id": 61, "name": "Object 61", "value": 610, "active": true},
    {"id": 62, "name": "Object 62", "value": 620, "active": false},
    {"id": 63, "name": "Object 63", "value": 630, "active": true},
    {"id": 64, "name": "Object 64", "value": 640, "active": false},
    {"id": 65, "name": "Object 65", "value": 650, "active": true},
    {"id": 66, "name": "Object 66", "value": 660, "active": false},
    {"id": 67, "name": "Object 67", "value": 670, "active": true},
    {"id": 68, "name": "Object 68", "value": 680, "active": false},
    {"id": 69, "name": "Object 69", "value": 690, "active": true},
    {"id": 70, "name": "Object 70", "value": 700, "active": false},
    {"id": 71, "name": "Object 71", "value": 710, "active": true},
    {"id": 72, "name": "Object 72", "value": 720, "active": false},
    {"id": 73, "name": "Object 73", "value": 730, "active": true},
    {"id": 74, "name": "Object 74", "value": 740, "active": false},
    {"id": 75, "name": "Object 75", "value": 750, "active": true},
    {"id": 76, "name": "Object 76", "value": 760, "active": false},
    {"id": 77, "name": "Object 77", "value": 770, "active": true},
    {"id": 78, "name": "Object 78", "value": 780, "active": false},
    {"id": 79, "name": "Object 79", "value": 790, "active": true},
    {"id": 80, "name": "Object 80", "value": 800, "active": false},
    {"id": 81, "name": "Object 81", "value": 810, "active": true},
    {"id": 82, "name": "Object 82", "value": 820, "active": false},
    {"id": 83, "name": "Object 83", "value": 830, "active": true},
    {"id": 84, "name": "Object 84", "value": 840, "active": false},
    {"id": 85, "name": "Object 85", "value": 850, "active": true},
    {"id": 86, "name": "Object 86", "value": 860, "active": false},
    {"id": 87, "name": "Object 87", "value": 870, "active": true},
    {"id": 88, "name": "Object 88", "value": 880, "active": false},
    {"id": 89, "name": "Object 89", "value": 890, "active": true},
    {"id": 90, "name": "Object 90", "value": 900, "active": false},
    {"id": 91, "name": "Object 91", "value": 910, "active": true},
    {"id": 92, "name": "Object 92", "value": 920, "active": false},
    {"id": 93, "name": "Object 93", "value": 930, "active": true},
    {"id": 94, "name": "Object 94", "value": 940, "active": false},
    {"id": 95, "name": "Object 95", "value": 950, "active": true},
    {"id": 96, "name": "Object 96", "value": 960, "active": false},
    {"id": 97, "name": "Object 97", "value": 970, "active": true},
    {"id": 98, "name": "Object 98", "value": 980, "active": false},
    {"id": 99, "name": "Object 99", "value": 990, "active": true},
    {"id": 100, "name": "Object 100", "value": 1000, "active": false}
];

//підтягуємо елементи з HTML
let list10 = document.getElementById("list10");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let b = 0;

//
function listUpdater() {
//додаємо в li об'єкти з масиву
    for (let i = b; i < b + 10 && i < bigArr.length; i++) {
        let li = document.createElement('li');
        list10.appendChild(li);
        li.textContent = JSON.stringify(bigArr[i]);
    }
}

//задаємо логіку роботи next
next.onclick = function () {
    if (b < bigArr.length - 10) {
        list10.innerHTML = '';
        b = b + 10;
        listUpdater();
    }
}

//задаємо логіку роботи prev
prev.onclick = function () {
    if (b > 0) {
        list10.innerHTML = '';
        b = b - 10;
        listUpdater();
    }
}

//відображення списку після загрузки сторінки
listUpdater();
