// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції, які в нього були до цього моменту.

//--------об'єкт з функцією всередині------------
const users = [
    {
        name: 'John',
        email: 'john@example.com',
        password: 'password123',
        age: 21,
        nameUpperCase() {
            return this.name.toUpperCase()
        },
    },
    {
        name: 'Anna',
        email: 'anna@example.com',
        password: 'password000',
        age: 25,
        nameUpperCase() {
            return this.name.toUpperCase()
        },
    }
];

// console.log(users.nameUpperCase()); //перевірка функції
console.log(users);

console.log('-----');
// //---------функція копіювання, не працює для масиву об'єктів з функціями-------------------
//
// function objFnCopier (objToCopying) {
//     let objTemp = JSON.parse(JSON.stringify(objToCopying));
//     Object.entries(objToCopying).forEach(([key, value]) => {
//        if (typeof value === 'function') {
//            objTemp[key] = value;
//        }
//     });
//     return objTemp;
// }
//
// let usersCopy = objFnCopier (users);
// console.log(usersCopy);
// console.log(users.nameUpperCase === usersCopy.nameUpperCase);

//---------спроба скопіювати масив об'єктів---------------

function objFnArrCopier(objToCopying) {

    if (Array.isArray(objToCopying)) {
        return objToCopying.map(item => objFnArrCopier(item));
    }

    if (typeof objToCopying !== 'object' || objToCopying === null) {
        return objToCopying;
    }

    let objTemp = JSON.parse(JSON.stringify(objToCopying));


    Object.entries(objToCopying).forEach(([key, value]) => {
        if (typeof value === 'function') {
            objTemp[key] = value;
        }
    });

    return objTemp;
}


let usersArrCopy = objFnArrCopier(users);
console.log(usersArrCopy);

console.log('-----');

// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let newArray = coursesAndDurationArray.map((item, index) => ({...item, id: index + 1}));


console.log(newArray);