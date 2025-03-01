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
document.body.appendChild(numberBox);

let number = localStorage.getItem('value') || 0;
number = parseInt(number);
numberBox.textContent = number;
localStorage.setItem('value', number + 1);


// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM



// #Jg0gPO00
// створити конвертор ваги з кг у фунти. дані заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок


// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції - addToLocalStorage(arrayName:string,objToAdd:any{}):void


//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.


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

