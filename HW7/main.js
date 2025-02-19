// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [
    new User(0, 'Іван', 'Іваненко', 'ivan@gmail.com', '+380505552233'),
    new User(1, 'Олена', 'Петренко', 'olena@gmail.com', '+380675553344'),
    new User(2, 'Андрій', 'Сидоренко', 'andriy@gmail.com', '+380935554455'),
    new User(3, 'Марина', 'Коваленко', 'marina@gmail.com', '+380685556677'),
    new User(4, 'Василь', 'Мельник', 'vasyl@gmail.com', '+380505558899'),
    new User(5, 'Тетяна', 'Шевченко', 'tetiana@gmail.com', '+380675551122'),
    new User(6, 'Олександр', 'Бондаренко', 'oleksandr@gmail.com', '+380935559900'),
    new User(7, 'Катерина', 'Гриценко', 'kateryna@gmail.com', '+380685552233'),
    new User(8, 'Юрій', 'Кравченко', 'yuriy@gmail.com', '+380505553344'),
    new User(9, 'Наталія', 'Лисенко', 'nataliya@gmail.com', '+380675554455')
];

console.log(users);

console.log('-----');
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);

console.log('-----');
//
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sortedUsers = users.sort((a, b) => a.id - b.id);
console.log(sortedUsers);

console.log('-----');
//
// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

const clients = [
    new Client(0, 'Іван', 'Іваненко', 'ivan@gmail.com', '+380505552233', ['Хліб', 'Молоко']),
    new Client(1, 'Олена', 'Петренко', 'olena@gmail.com', '+380675553344', ['Кава', 'Цукор', 'Шоколад']),
    new Client(2, 'Андрій', 'Сидоренко', 'andriy@gmail.com', '+380935554455', ['Яйця']),
    new Client(3, 'Марина', 'Коваленко', 'marina@gmail.com', '+380685556677', ['Сир', 'Овочі', 'Фрукти']),
    new Client(4, 'Василь', 'Мельник', 'vasyl@gmail.com', '+380505558899', ['Масло', 'Хліб', 'Молоко', 'Цукор']),
    new Client(5, 'Тетяна', 'Шевченко', 'tetiana@gmail.com', '+380675551122', ['Овочі', 'Фрукти']),
    new Client(6, 'Олександр', 'Бондаренко', 'oleksandr@gmail.com', '+380935559900', ['Яйця', 'Масло']),
    new Client(7, 'Катерина', 'Гриценко', 'kateryna@gmail.com', '+380685552233', ['Шоколад', 'Кава']),
    new Client(8, 'Юрій', 'Кравченко', 'yuriy@gmail.com', '+380505553344', ['Цукор', 'Молоко', 'Фрукти']),
    new Client(9, 'Наталія', 'Лисенко', 'nataliya@gmail.com', '+380675554455', ['Сир', 'Хліб', 'Масло', 'Яйця', 'Шоколад'])
];
console.log(clients);

console.log('-----');
//
//
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const sortedClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);

console.log('-----');
//
//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.

function Car(model, vendor, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.vendor = vendor;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

}

const car1 = new Car('3', 'Mazda', 2018, 215, 1988);
const car2 = new Car('6', 'Mazda', 2019, 225, 2488);
console.log(car1);

//    додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function () {

    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
}
car1.drive();

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car.prototype.info = function () {
    for (const key in this) {
        const current = this[key];
        if (typeof current !== 'function') {
            console.log(`${key} - `, this[key]);
        }

    }
}
car2.info();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car.prototype.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed = this.maxSpeed + newSpeed;
}
car2.increaseMaxSpeed(100);
console.log(car2);

// -- changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear = function (newValue) {
    this.year = newValue;
}
car1.changeYear(2025);
console.log(car1);

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Car.prototype.addDriver = function (driver) {
    this.driver = driver;
}
car1.addDriver({name: 'John', surname: 'Doe'});

console.log(car1);


console.log('-----');
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class CarClass {
    constructor(model, vendor, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.vendor = vendor;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;

    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);

    };

    info() {
        for (const key in this) {
            const current = this[key];
            if (typeof current !== 'function') {
                console.log(`${key} - `, this[key]);
            }

        }
    };


    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver(driver) {
        this.driver = driver;
    };
}

const car3 = new CarClass('2', 'Mazda', 2021, 235, 1988);
const car4 = new CarClass('3', 'Mazda', 2024, 245, 2488);
console.log(car3);
console.log(car4);

car3.drive();

car3.info();

car4.increaseMaxSpeed(200);
car4.changeYear(2026);
car4.addDriver({name: 'Johanna', surname: 'Doe'});
console.log(car4);


car4.info();
console.log('-----');
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellas = [
    new Cinderella('Анна', 19, 36),
    new Cinderella('Марія', 21, 37),
    new Cinderella('Олена', 18, 35),
    new Cinderella('Катерина', 24, 38),
    new Cinderella('Юлія', 20, 36),
    new Cinderella('Ірина', 23, 39),
    new Cinderella('Наталія', 19, 37),
    new Cinderella('Світлана', 24, 40),
    new Cinderella('Оксана', 20, 38),
    new Cinderella('Тетяна', 21, 36)
];
console.log(cinderellas);

const prince = new Cinderella('Артур', 22, 38);
console.log(prince);

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.footSize && cinderella.age <= prince.age) {
        console.log(cinderella);
    }
}

const findPrinces = cinderellas.find(value => value.footSize === prince.footSize && value.age <= prince.age);
console.log(findPrinces);

console.log('-----');
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.customForeach = function (callback) {
    for (const item of this) {
        callback(item);
    }
}

cinderellas.customForeach((item) => console.log(item));
console.log('-----');


Array.prototype.customFilter = function (callback) {
    let newArray = [];
    for (const item of this) {
        if (callback(item)) {
            newArray.push(item);
        }
    }
    return newArray;
}
let cinderella = cinderellas.customFilter(cinderella => cinderella.age >= 22);
console.log(cinderella);