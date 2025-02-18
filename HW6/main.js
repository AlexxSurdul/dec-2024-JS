// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

const strCounter = (string) => string.length;
console.log(strCounter('hello world'));
console.log(strCounter('lorem ipsum'));
console.log(strCounter('javascript is cool'));

console.log('----------------------------');
// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

const strtoUpperCase = (a) => a.toUpperCase();
console.log(strtoUpperCase('hello world'));
console.log(strtoUpperCase('lorem ipsum'));
console.log(strtoUpperCase('javascript is cool'));


console.log('----------------------------');

// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

const strtoLowerCase = (a) => a.toLowerCase();
console.log(strtoLowerCase('HELLO WORLD'));
console.log(strtoLowerCase('LOREM IPSUM'));
console.log(strtoLowerCase('JAVASCRIPT IS COOL'));


console.log('----------------------------');

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

const strD = ' dirty string   ';
console.log(strD.replaceAll(' ', ''))

console.log('----------------------------');
//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

const strR = 'Ревуть воли як ясла повні';
console.log(strR.split(' '));

console.log('----------------------------');
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.


const numArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const stringArr = numArr.map(converter => converter.toString());
console.log(stringArr);

console.log('----------------------------');
// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================

const nums = [11, 21, 3, -5, 100];


function sortNums(array, direction) {
    if (direction === 'ascending') {
        array.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        array.sort((a, b) => b - a);
    }
    return array;
}

console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]


console.log('----------------------------');
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const sortDuration = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
console.log(sortDuration);

const filterDuration = coursesAndDurationArray.filter((value) => value.monthDuration > 5);
console.log(filterDuration);

const mapDuration = coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, title: value.title, monthDuration: value.monthDuration};
});
console.log(mapDuration);

console.log('----------------------------');
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//
// =========================

const cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
const cardValues = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
// const cardColors = ['red', 'black'];

// const colorSuits = cardSuits.map(function (value) {
//     if (value === 'spade' || value === 'clubs') {
//         return {suit: value, color: cardColors[1]};
//     } else {
//         return {suit: value, color: cardColors[0]};
//     }
// })


const cardsSet = [];
for (const cardSuit of cardSuits) {
    for (const cardValue of cardValues) {
        const card = {value: cardValue, suit: cardSuit};
        if (cardSuit === 'spade' || cardSuit === 'clubs') {
            card.color = 'black'
        } else {
            card.color = 'red';
        }
        cardsSet.push(card);
    }
}
console.log(cardsSet);
console.log('----------------------------');
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

console.log(cardsSet.filter((card) => card.value === 'ace' && card.suit === 'spade'));
console.log(cardsSet.filter((card) => card.value === '6'));
console.log(cardsSet.filter((card) => card.color === 'red'));
console.log(cardsSet.filter((card) => card.suit === 'diamond'));
console.log(cardsSet.filter((card) => card.suit === 'clubs' && card.value !== '6' && card.value !== '7' && card.value !== '8'));

console.log('----------------------------');
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================

const sortedCards = cardsSet.reduce((acc, card) => {
        if (card.suit === 'spade') {
            acc.spades.push(card)
        } else if (card.suit === 'diamond') {
            acc.diamonds.push(card)
        } else if (card.suit === 'heart') {
            acc.hearts.push(card)
        } else {
            acc.clubs.push(card)
        }
        return acc;
    },
    {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    });
console.log(sortedCards);
console.log('----------------------------');
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

function filteredSaas(arr, module) {
    return arr.filter(item =>
        item.modules.includes(module));
}

console.log(filteredSaas(coursesArray, 'sass'));
console.log(filteredSaas(coursesArray, 'docker'));