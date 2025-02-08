// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr_a;
arr_a = [10, 'ff', -25, 'Hi1', '-10$', 1631 + 3, false, 54545666654545454545444444444646464879799999n, '9 or 10', ''];
console.log(arr_a);
console.log(arr_a[0]);
console.log(arr_a[1]);
console.log(arr_a[2]);
console.log(arr_a[3]);
console.log(arr_a[4]);
console.log(arr_a[5]);
console.log(arr_a[6]);
console.log(arr_a[7]);
console.log(arr_a[8]);
console.log(arr_a[9]);

console.log('-------------------------');
// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: '300 Spartans',
    pageCount: 300,
    genre: 'history'
}
let book2 = {
    title: '400 Italians',
    pageCount: 400,
    genre: 'comedy'
}
let book3 = {
    title: '999 Americans',
    pageCount: 999,
    genre: 'fantasy'
}
console.log(book1, book2, book3);

console.log('---------------------------');
// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: '300 Spartans',
    pageCount: 300,
    genre: 'history',
    authors: [
        {name: 'Spartan II', age: 30},
        {name: 'Spartan V', age: 35}
    ]
};
let book5 = {
    title: '400 Italians',
    pageCount: 400,
    genre: 'comedy',
    authors: [
        {name: 'Italian III', age: 40},
        {name: 'Italian IV', age: 45}
    ]
};
let book6 = {
    title: '999 Americans',
    pageCount: 999,
    genre: 'fantasy',
    authors: [
        {name: 'American II', age: 50},
        {name: 'American XV', age: 55}
    ]
};
console.log(book4, book5, book6);
console.log(book5.title + ', ' + book5.genre);
console.log(book6.authors[1].name
);

console.log('------------------------');
// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users;
users = [
    {name: 'UserOne', username: 'user1', password: 'pswrd1'},
    {name: 'UserTwo', username: 'user2', password: 'pswrd2'},
    {name: 'UserThree', username: 'user3', password: 'pswrd3'},
    {name: 'UserFour', username: 'user4', password: 'pswrd4'},
    {name: 'UserFive', username: 'user5', password: 'pswrd5'},
    {name: 'UserSix', username: 'user6', password: 'pswrd6'},
    {name: 'UserSeven', username: 'user7', password: 'pswrd7'},
    {name: 'UserEight', username: 'user8', password: 'pswrd8'},
    {name: 'UserNine', username: 'user9', password: 'pswrd9'},
    {name: 'UserTen', username: 'user10', password: 'pswrd10'}
];
console.log(users[0].password);
console.log(users[2]['password']);
console.log(users[5].password);
console.log(users[9].password);
console.log(users[7].username + ': ' + users[7].password);
console.log(users[3].name + ': ' + users[3].password);

console.log('---------------------------');
// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати.
// Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

let weather1;
weather1 = [{
    day: 'sunday', temp: {
        morning: 10, afternoon: 15, evening: 11
    }
}, {
    day: 'monday', temp: {
        morning: 10, afternoon: 15, evening: 11
    }
}, {
    day: 'tuesday', temp: {
        morning: 10, afternoon: 15, evening: 11
    }
}, {
    day: 'wednesday', temp: {
        morning: 10, afternoon: 15, evening: 11
    }
}, {
    day: 'thursday', temp: {
        morning: 10, afternoon: 15, evening: 11
    }
}, {
    day: 'friday', temp: {
        morning: 10, afternoon: 15, evening: 11
    }
}, {
    day: 'saturday', temp: {
        morning: 10, afternoon: 15, evening: 11
    }
},];

console.log(weather1);
console.log(weather1[3]);
console.log(weather1[5].day + ': ' + weather1[5].temp.evening);

console.log('-------');

let weather2;
weather2 = [
    {day: 'sunday', morning: 15, afternoon: 25, evening: 18},
    {day: 'monday', morning: 12, afternoon: 22, evening: 15},
    {day: 'tuesday', morning: 15, afternoon: 25, evening: 18},
    {day: 'wednesday', morning: 11, afternoon: 23, evening: 20},
    {day: 'thursday', morning: 15, afternoon: 25, evening: 18},
    {day: 'friday', morning: 13, afternoon: 20, evening: 16},
    {day: 'saturday', morning: 15, afternoon: 25, evening: 18},
]

console.log(weather2[1].afternoon);
console.log(weather2[1]);

console.log('---------------------------');
//-----------------------------------------------------------------//
// Логічні розгалуження:
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x;
x = -3;
// x = +prompt('Enter a number');

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


console.log('---------------------------');
// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю або четверту частину години).

let time;
time = 59;
// time = +prompt('Введіть ціле число від 0 до 59')

if (time >= 0 && time < 15) {
    console.log('перша чверть');
} else if (time >= 15 && time < 30) {
    console.log('друга чверть');
} else if (time >= 30 && time < 45) {
    console.log('третя чверть');
} else if (time >= 45 && time <= 59) {
    console.log('четверта чверть');
} else {
    console.log('некоректне значення');
}


console.log('---------------------------');
// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day;
day = 32;
// day = +prompt('Введіть ціле число від 1 до 31')

if (day >= 1 && day <= 10) {
    console.log('перша декада');
} else if (day > 10 && day <= 20) {
    console.log('друга декада');
} else if (day > 20 && day <= 31) {
    console.log('третя декада');
} else {
    console.log('некоректне значення');
}


console.log('---------------------------');
// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let schedule;
schedule = 1
// schedule = +prompt('Enter the ordinal number of the day of the week.');
switch (schedule) {
    case 1:
        document.write('<h2>Sunday schedule</h2>', '<ul><li>One<li>Two<li>Three');
        break;
    case 2:
        document.write('<h2>Monday schedule</h2>', '<ul><li>One<li>Two<li>Three');
        break;
    case 3:
        document.write('<h2>Tuesday schedule</h2>', '<ul><li>One<li>Two<li>Three');
        break;
    case 4:
        document.write('<h2>Wednesday schedule</h2>', '<ul><li>One<li>Two<li>Three');
        break;
    case 5:
        document.write('<h2>Thursday schedule</h2>', '<ul><li>One<li>Two<li>Three');
        break;
    case 6:
        document.write('<h2>Friday schedule</h2>', '<ul><li>One<li>Two<li>Three');
        break;
    case 7:
        document.write('<h2>Saturday schedule</h2>', '<ul><li>One<li>Two<li>Three');
        break;
    default:
        document.write('<h2>Enter a valid number<h2>');
}

console.log('---------------------------');
// #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let y;
let z;
y = 10;
z = 0;

// y = +prompt('Enter a number')
// z = +prompt('Enter a number')

if (y > z) {
    console.log(y);
    document.write('<h2>Bigger number is: <h2>' + y);
} else if (z>y) {
    console.log(z);
    document.write('<h2>Bigger number is: <h2>' + z);
} else if (z===y) {
    console.log(z);
    document.write('<h2>Bigger number is: <h2>' + z);
} else if (z===0 && y===0) {
    console.log(z);
    document.write('<h2>Bigger number is: <h2>' + z);
}
else {
    console.log('enter a valid number');
    document.write('<h2>enter a valid number<h2>');
}



console.log('---------------------------');
// #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні,
//         тобто ті, які приводиться до false, а це 0 null undefined і тд).

let w;
w = NaN;

// if (w === false || w === null || w === undefined || w === 0 ||w === -0 || w === 0n || w === "" || w === NaN) {
//         w = 'default';
//     } // не спрацьовують всі значення, наприклад NaN ((


w = !w ? "default" : w; // вирішення через !w підглянув в у відповідях (у лекції не було такого), але переробив під ternary

console.log(w);



console.log('---------------------------');
// #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration >5) {
    console.log(coursesAndDurationArray[0].title,': ', 'Супер');
}
if (coursesAndDurationArray[1].monthDuration >5) {
    console.log(coursesAndDurationArray[1].title,': ', 'Супер');
}
if (coursesAndDurationArray[2].monthDuration >5) {
    console.log(coursesAndDurationArray[2].title,': ', 'Супер');
}
if (coursesAndDurationArray[3].monthDuration >5) {
    console.log(coursesAndDurationArray[3].title,': ', 'Супер');
}
if (coursesAndDurationArray[4].monthDuration >5) {
    console.log(coursesAndDurationArray[4].title,': ', 'Супер');
}
if (coursesAndDurationArray[5].monthDuration >5) {
    console.log(coursesAndDurationArray[5].title,': ', 'Супер');
}