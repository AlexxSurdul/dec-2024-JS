// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const divElement = document.createElement('div');
divElement.classList.add('wrap', 'collapse', 'alpha', 'beta');
divElement.innerText = 'text for div';
divElement.style.backgroundColor = 'red';
divElement.style.fontSize = '18px';
document.body.append(divElement);

const divClone = divElement.cloneNode(true);
document.body.append(divClone);

//     #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const arr = ['Main', 'Products', 'About us', 'Contacts'];
const ul = document.createElement('ul');

for (const element in arr) {
    let li = document.createElement('li');
    li.innerText = arr[element];
    ul.append(li);
}
document.body.append(ul);

// #jeBqHV525U5
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const element of coursesAndDurationArray) {
    const course = document.createElement('div');
    course.innerText = `Course: ${element.title}, Month duration: ${element.monthDuration}`;
    document.body.append(course);
}

//     #Kx1xgoKy8
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const element of coursesAndDurationArray) {
    const course = document.createElement('div');
    course.classList.add('item');

    const heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.innerText = element.title;

    const description = document.createElement('p');
    description.classList.add('description');
    description.innerText = `Duration: ${element.monthDuration} mo.`;

    course.append(heading, description);
    document.body.append(course);
}