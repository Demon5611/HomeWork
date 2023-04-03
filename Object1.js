const user = {
        name: 'Pumpkin',
        age: 22,
        profession: 'Pomidor',
        salary: 10000,
      
    } 
    // user.passport = 'vv333d33'
    // Object.defineProperty(user, 'passport', { // почему-то не отобразился паспорт 
    //     value:'vv333d33',
    //     numerable: true
    // })

    // console.log(user)
     
    // // keys (index) 
    // let keys = Object.keys(user) // превратили в массив и можно работать далее с обьектом
    // console.log(keys)
    // // values/ получим значения обьекта 
    // let values = Object.values(user) // превратили в массив (но нет связки ключ-свойство)и можно работать далее с обьектом
    // console.log(values)
    // entries / получим массивы из обьекта 
    let entries = Object.entries(user) // превратили в массив (есть связка ключ-св-во) и можно работать далее с обьектом, map reduce ... 
    entries.map(([index, item])=> console.log(index, item)) // прошли по массиву и выдернули связку ключ-значение без ковычек и скобок 
    // console.log(entries)

    // function filterObjValues(data, key) {
    //     const result = [];
    //         for (let i = 0; i < data.length; i++) {
    //         // получаем объект по индексу
    //         const obj = data[i];
    //         console.log(data[i])
    //             // Если значение по key совпадает с value, добавляем объект в массив.
    //         if (obj[key] === value) {
    //             result.push(obj);
    //         }
    //     }
    //         return result;
    // }
    //     const filteredArray = filterObjValues(data, key)
    //     console.log(filteredArray)
// ============
// Написать функцию, которая принимает массив объектов и строку которая является ключом объекта, и возвращает массив значений которые равны ключу
// Например test1(data, power) -> [330, 200, 570]
// Например test1(data, model) -> ['A5', 'rav4', 'mustang']

// const data = [
//     {
//         car: 'audi',
//         model: 'A5',
//         power: 330
//     },
//     {
//         car: 'toyota',
//         model: 'rav4',
//         power: 200
//     },
//     {
//         car: 'ford',
//         model: 'mustang',
//         power: 570
//     },
// ]
// function propertyValue(array, key) {
//   return array.map(a => a[key]);
// }
// console.log(propertyValue(data, 'power'));
// console.log(propertyValue(data, 'model'));
// ==========
// деструктуризация
// const customer = {
//     name: 'Sherlock',
//     email: 's.h.@gmail.com',
//     age: 34,
//     address: {
//       streetNo: '221b Baker Street',
//       city: 'London',
//       country: 'UK'
//     }
//   }
// // const name = customer.name
// // const email = customer.email

// // const {name, email} = customer
// // console.log(name) //Sherlock
// // console.log(email) // s.h.@gmail.com


// // const {name: customerName, email} = customer
// //   console.log(customerName)
// let name, email;

// ({ name, email } = customer);

// console.log(name);
// console.log(email)

// const Test = require('@codewars/test-compat');