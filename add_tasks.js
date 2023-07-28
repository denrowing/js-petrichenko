// function calculateVolumeAndArea(num) {
//     if (typeof(num) === 'number' && num > 0 && Number.isInteger(num) ) {
//         return `'volume': ${Math.pow(num, 3).toString()} , 'square': ${( Math.pow(num, 2) * 6 ).toString()} `
//     } else {
//         return 'An error occurred while calculating'
//     }
// }

// console.log(calculateVolumeAndArea(7));
// console.log(calculateVolumeAndArea(15));
// console.log(calculateVolumeAndArea(15.5));
// console.log(calculateVolumeAndArea('15'));
// console.log(calculateVolumeAndArea(-15));


// function getCoupeNumber(num) {
//     if ( num === 0 || num > 36 ) {
//         return 'Such place dont exist'
//     } 

//     if (!Number.isInteger(num) || num < 0 || (typeof(num) !== 'number')) {
//         return 'Error. Check the number your typed'
//     }

//     if ( ( num >= 33 && num < 36 ) ) {
//         return Math.round( num / 4 ) + 1
//     } else {
//         return Math.round( num / 4 )
//     }

// }

// console.log(getCoupeNumber(33));  // => 9
// console.log(getCoupeNumber(2)); // => 1
// console.log(getCoupeNumber(7)); // => 2
// console.log(getCoupeNumber(8)); // => 2
// console.log(getCoupeNumber(300)); // => "Таких мест в вагоне не существует"
// console.log(getCoupeNumber(0));  //=> "Таких мест в вагоне не существует"
// console.log(getCoupeNumber(7.7)); // => "Ошибка. Проверьте правильность введенного номера места"
// console.log(getCoupeNumber(-10)); // => "Ошибка. Проверьте правильность введенного номера места"
// console.log(getCoupeNumber('Hello')); // => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber(7) // => 2
// getCoupeNumber(300) // => "Таких мест в вагоне не существует"
// getCoupeNumber(0)  //=> "Таких мест в вагоне не существует"
// getCoupeNumber(7.7) // => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber(-10) // => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber('Hello')

// function getTimeFromMinutes(minuts) {

//     if( minuts >= 0 && minuts < 60 ) {
//        return  `Это 0 часов и ${minuts} минут`
//     }

//     if (minuts >= 60 && minuts <= 600 ) {
//         return `Это ${ Math.floor( minuts / 60 ) } часов и ${ minuts % 60 } минут`
//     }

//     if (minuts < 0 || !Number.isInteger(minuts) ) {
//         return  "Ошибка, проверьте данные"
//     }
// }

// console.log(getTimeFromMinutes(150)); //=> "Это 2 часа и 30 минут"
// console.log(getTimeFromMinutes(60));  //=> "Это 0 часов и 50 минут"
// console.log(getTimeFromMinutes(0)); //=> "Это 0 часов и 0 минут"
// console.log(getTimeFromMinutes(-150));  //=> "Ошибка, проверьте данные"

// function findMaxNumber(a, b, c, d) {
//     if ( typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number') {
//         return 0
//     }

//     if ( !a || !b || !c || !d) {
//         return 0
//     }

//     return Math.max(a, b, c, d)
// }

// console.log(findMaxNumber(1, 35, 6.6, 11)); //=>  11
// console.log(findMaxNumber(1, 5, '6', '10')); // =>  0
// console.log(findMaxNumber(1, 5, 4)); // =>  0


// function fib(qty) {
//     let result = ' '
//     let pre = 0
//     let suf = 1
//     let resultNum

//     if (typeof(qty) !== "number" || qty === 0) {
//         return result
//     }

//     for (let i = 0; i < qty; i++) {

//         if ( qty === 1 ) {
//             return result += 0
//         }

//         if ( qty >= 2 ) {
//             result += ' ' + pre.toString()
//             resultNum = pre + suf
//             pre = suf
//             suf = resultNum
//         }


//     }
//     return result

// }

// console.log(fib(4));  //=> ''0 1 1 2"
// console.log(fib(7));  //=> ''0 1 1 2 3 5 8"
// console.log(fib('7')); //=> ''"
// console.log(fib(1));  //=> "0"
// console.log(fib(0));  //=> ''"


//Callback
// function study(lang, callback) {
//     console.log(`I'm learning ${lang}`);
//     callback()
// }

// function done() {
//     console.log("I've been learned this subject very well");
// }

// study('NodeJS', done)

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(data) {
//         const lang = data.skills.languages.map( a => a.toUpperCase()).join(' ')
//         return `Мне ${data['age']} и я владею языками: ${lang}`
//     }

// };

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience(plan) {
//     const { exp } = plan.skills
//     return exp
// }

// console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//     let str = ''
//     let obj = plan.skills.programmingLangs
//     for (let key in obj) {
//         str += `Язык ${key} изучен на ${obj[key]} \n`
//     }
//     return str
// }

// console.log(showProgrammingLangs(personalPlanPeter));

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
// const emptyArr = []

// function showFamily(arr) {
//     let str = arr.join(' ')
//     if ( str.length === 0 ) {
//         return 'Семья пуста'
//     } else {
//         return `Семья состоит из: ${str}`
//     }
// }

// function showFamily(arr) {
//     let str = arr.join(' ')
//     if ( str.length === 0 ) {
//         return 'Семья пуста'
//     } else {
//         return `Семья состоит из: ${str}`
//     }
// }

// console.log(showFamily(family));
// console.log(showFamily(emptyArr));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     // return arr.map( a => a.toLowerCase() ).forEach( b => console.log(b + '\n') )
//     arr.forEach( city => console.log( city.toLowerCase() ) )

// }

// console.log(standardizeStrings(favoriteCities));


// const someString = 'This is some strange string';

// function reverse(str) {
// if ( typeof(str) === "string" ) {
//     return str.split(' ').map( a => a.split('').reverse().join('') ).reverse().join(' ')
// } else {
//     return 'Ошибка!'
// }
// }

// console.log(reverse(someString));
// console.log(reverse(5));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr( arr, missingCurr ) {

//     let str = ''
//     arr.length === 0 ? str = 'Нет доступных валют' : str = `Доступные валюты: \n`
//     let filteredCurrency = arr.filter( a => a !== missingCurr )
//     filteredCurrency.forEach( (curr, i) => str += `${curr}\n`)


//     // let str = '';
//     // arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

//     // arr.forEach(function(curr, i) {
//     //     if (curr !== missingCurr) {
//     //         str += `${curr}\n`;
//     //     }
//     // });

//     return str

// }

// console.log(availableCurr([ ...baseCurrencies, ...additionalCurrencies ], 'RUB'));

// Задача:
// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.
// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂

// Но эта задача содержит несколько подзадач внутри:
// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
// - определение того, хватает ли бюджета на оплату такого объема;
// - все числа идут без единиц измерения для упрощения, просто цифры и все;
// - функция должна продолжать работать, даже если изменяется количество магазинов, 
// высота, бюджет или подставляется вообще другой объект.

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {
//     // let volumeOfShops = data.shops.map(a => a.width * a.length).reduce((sum, item) => {
//     //     sum += item
//     //     return sum
//     // }, 0) * data.height;
//     // let costsForWarmingNeeded = volumeOfShops * data.moneyPer1m3;
//     // console.log(volumeOfShops);
//     // console.log(costsForWarmingNeeded);
//     // data.budget > costsForWarmingNeeded ? console.log('Бюджета достаточно') : console.log('Бюджета недостаточно');
//     let square = 0
//     data.shops.forEach( shop => square += shop.width * shop.length );
//     let costsForWarmingNeeded = square * data.height * data.moneyPer1m3;
//     if ( data.budget > costsForWarmingNeeded) {
//         return 'Бюджета достаточно'
//     } else {
//         return 'Бюджета недостаточно'
//     }
// }

// isBudgetEnough(shoppingMallData)
// // console.log(isBudgetEnough(shoppingMallData));


// Задача:

// У вас есть список учеников, которые хотят поиграть в игру:

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'WWW'];
// Но команд может быть только 3 по 3 человека. 
// Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку.
// Эти группы должны быть массивами. 
// Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.
// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.


// function sortStudentsByGroups(arr) {
//     let sortedArr = arr.sort( (a, b) => a.localeCompare(b) )
//     let leavedStudents = '-'
//     let ungameStudents = `Оставшиеся студенты: ${leavedStudents}`
//     let commands = []
//     let commandsQty = Math.floor(arr.length / 3)

       
//     for ( let i = 0, k = 0; i < commandsQty; i++ ) {
//         commands[i] = []
//         for ( let j = 0; j < 3; j++, k++ ) {
//             commands[i][j] = sortedArr[k]
//         }        
//     }

    
//     console.log(sortedArr);
//     console.log(commandsQty);
//     console.log(commands);

//     if (arr.length % 3 === 0) {
//         return commands.push(ungameStudents)
//     } else {
//         leavedStudents = arr.splice( -( arr.length % 3 ) )
//         ungameStudents = `Оставшиеся студенты: ${leavedStudents.join(', ')}`
//         console.log(ungameStudents);
//         return commands
//     }
// }

// sortStudentsByGroups(students)
// console.log(sortStudentsByGroups(students));



// function createCounter() {
//     let counter = 0
    
//     function myFunction() {
//         return counter += 1
//     }

//     return myFunction 
// }

// let increment = createCounter()


// console.log(increment());
// console.log(increment());
// console.log(increment());


// typeof(b) === ''

// console.log( NaN || 2 || undefined ); // 2 +
// console.log( NaN && 2 && undefined ); // NaN +
// console.log( 1 && 2 && 3 ); // 3 +
// console.log( !1 && 2 || !3 ); // !3- / false+
// console.log( 25 || null && !3 ); // 25 +
// console.log( NaN || null || !3 || undefined || 5); // !3- / 5
// console.log( NaN || null && !3 && undefined || 5); // 5+
// console.log( 5 === 5 && 3 > 1 || 5); // true+

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }



// •	Какое будет выведено значение: 
// let x = 5; 
// alert( x++ ); // 5 +

// •	Чему равно такое выражение: 
// [ ] + false - null + true  // NaN +

// •	Что выведет этот код: 
// let y = 1; let x = y = 2; alert(x); //2 +

// •	Чему равна сумма 
// [ ] + 1 + 2  // NaN-   '12'+ пустой массив ведет себя как строка при операциях сложения

// •	Что выведет этот код: 
// alert( "1"[0] ) // NaN- 1+ вывести элемент строки под индексом 0

// •	Чему равно 
// 2 && 1 && null && 0 && undefined // null+

// •	Есть ли разница между выражениями? 
// !!( a && b ) == (a && b) // false -- && undefined / all expressions undefined +

// •	Что выведет этот код: 
// alert( null || 2 && 3 || 4 ) // 3+

// • Правда ли что a == b ?
// a = [1, 2, 3]; b = [1, 2, 3] // это ссылки на разные массивы false - /
//  но одинаковій тип данніх thats why its true +

// •	Что выведет этот код: 
// alert( +"Infinity" ) // NaN- or Infinity+ строка преобразуеться в другой тип данных

// •	Верно ли сравнение: 
// "Ёжик" > "яблоко" // true- /false+

// •	Чему равно
//  0 || "" || 2 || undefined || true || falsе    // 2+

// Total score: 6 from 12 (50%) 'not bad'



// Нужно исправить функции так, чтобы они давали всегда правильный результат.

// 1) Функция isOpen не хочет правильно работать. 
//  Необходимо найти причины и исправить.

// 2) Функция isAverageLunchPriceTrue должна брать цены двух любых блюд из меню, 
// складывать их и сравнивать с средним чеком (averageLunchPrice).
// Сейчас функция работает, но постоянно выдает неправильный результат. 
// Ведь из представленного меню сумма двух любых цен всегда будет больше 20. 
// Необходимо найти причину и исправить.

// 3) Функция transferWaitors создана для того, чтобы копировать шаблон данных и передавать их в другой ресторан. 
// Конечно, в другом ресторане будут другие блюда, другие официанты и тп. 
// Сейчас эта функция только в начале разработки и должна менять данные про официантов.

// Но в нынешнем виде мы обнаружили, что после её запуска не только копия данных содержит новых официантов, 
// но и основные данные! В restorantData сотрудник Alice исчезает и заменяется Mike! 
// Необходимо найти причину и немедленно исправить, чтобы данные были разделены.

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто': answer = 'Закрыто';

    return answer;
}

// console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    // +fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0,-1)
    if ( parseFloat(fDish.price) + parseFloat(sDish.price) < parseFloat(average) ) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    
    const copy = JSON.parse(JSON.stringify(data))

    copy.waitors[0] = { name: 'Mike', age: 32 };
    console.log(copy);
    return copy;
}

transferWaitors(restorantData)
console.log(restorantData);


