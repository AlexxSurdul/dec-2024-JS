// #dYQNrBV
// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
{
    let a = 'hello';
    console.log(a);
    let b = 'owu';
    console.log(b);
    let c = 'com';
    console.log(c);
    let d = 'ua';
    console.log(d);
    let e = 1;
    console.log(e);
    let f = 10;
    console.log(f);
    let g = -999;
    console.log(g);
    let h = 123;
    console.log(h);
    let i = 3.14;
    console.log(i);
    let j = 2.7;
    console.log(j);
    let k = 16;
    console.log(k);
    let l = true;
    console.log(l);
    let m = false;
    console.log(m);

    console.log(a, b, c, d, e, f, g, h, i, j, k, l, m);
}

// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

{
    let firstName = 'Олександр';
    let middleName = 'Ігорович';
    let lastName = 'Сурдул';
    let person = firstName + ' ' + middleName + ' ' + lastName
    console.log(person);
}

// #4N0y5tufA
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

{
    let a = 100;
    let b = '100';
    let c = true;
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}

// #ruUtWDUI
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

{
    const answer1 = prompt('Як тебе звуть?', 'ім\'я');
    const answer2 = prompt('Як тебе звуть?', 'по-батькові');
    const answer3 = prompt('Скільки тобі років?', 'вік');
    let result = answer1 + ' ' + answer2 + ' ' + answer3;

    console.log(result);
}