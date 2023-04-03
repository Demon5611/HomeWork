MAP  
// MAP 
// const arr=[1,2,3]
// const newArr=arr.map(el=> el*3)
// console.log(newArr);
// ============
// const arr = [1, 2, 3]
// const newArr = arr.map((el) => {
//     return el * 3
// })
// console.log(newArr);
// ==============
// const arr = [1, 2, 3]
// const newArr = arr.map(function(el) {
//     return el * 3
// })
// console.log(newArr);

// ==========================
// Работа со строками через MAP, добавить символ к каждой букве. метод call помогает расспредить строку на символы 
// const name = 'hello'
// const newName=Array.prototype.map.call(name,eachLeter=>{
//     return `${eachLeter}a`
// })
// console.log(newName);
// ====================

// переворачивает только ту стр, которая содержит символ 'a'
// function reversStr(arr){
//     return arr.map(function(item){
//      if (item.includes('a')){
//       return item.split('').reverse().join('')
//        } 
//         return item
//     })
//   }
//   console.log(reversStr( ['hello', 'magic', 'home', 'job', 'car']))
//   ==================
FILTER

// let users = [
//     { id: 11, name: 'Adam', age: 23, group: 'editor' },
//     { id: 47, name: 'John', age: 28, group: 'admin' },
//     { id: 85, name: 'William', age: 34, group: 'editor' },
//     { id: 97, name: 'Oliver', age: 28, group: 'admin' }
//   ];
// //   let res = users.filter(it => it.name.includes('Oli'));
// let res = users.filter(it=>it.name.length>4)
// let res = users.filter(item=>item.age >=23)
// console.log(res);
// =======================
FIND
// let users = [
//     { id: 11, name: 'Adam', age: 23, group: 'editor' },
//     { id: 47, name: 'John', age: 28, group: 'admin' },
//     { id: 85, name: 'William', age: 34, group: 'editor' },
//     { id: 97, name: 'Oliver', age: 28, group: 'admin' }
//   ];

//   let adam = users.find(users => users.name === 'Adam' );

// console.log(adam);

// ===============
REDUCE
// let  a = [1,2,3,4]
// let sum =0
// for (let i=0; i<a.length; i++){
//     sum = sum + a[i]
// }
// console.log(a, sum);

// метод исп-м если: есть перебор, нужно накопление суммы
//  prev - вычисляемое значение 
// prev = a[0] изначально т.е. 1. можем руками указать с какой нач суммы мы стартуем, если укажем 0 в конце фигурных скобок
// обязательно указываем return и к нему прибавляем элемент item
// item - элемент текущего массива 
// let b=a.reduce(function(prev, item, index){

// return prev + item
// },0)
// console.log(b);


// поиск максимального значения в массиве
// let a = [1, 0, 8, 44, 5, -3, 1, 2, 3, 4]
// let max = a[0] // присваиваем нулевому индексу знач max
// for (let i = 0; i < a.length; i++) {
//     if (a[i] > max) { // смотрим, если элемент > max (0), то  max = a[i] max присваиваем значение элемента. и так по всему циклу 
//         max = a[i]
//     }
// }
// console.log(max);


// если исчисляемый элемент (сумма) (prev) < элемента цикла (item), то вернуть элемент. изначально prev считает себя или как 1й эл-т массива, если не указали парметр в конце 
// фигурных скобок. если указали 0, то считаем себя нулем и отсчет от нуля
// const a = [-1, 55, 15]
// const max = a.reduce((accum, item, _, arr) => {


//     if (accum < item) {
//         return item
//     } else {
//         return accum
//     }

// },)
// console.log(a, 'MAX =', max);


// const min = a.reduce((accum, item) => {

//     if (accum < item) {
//         return accum
//     } else {
//         return item
//     }
// },)
// console.log(a, 'MIN =', min);


// ===============
// // ищем индекс максимального эл-та массива 

// let max = a[0]
// let index = 0
// for (let i = 0; i < a.length; i++) {
//     if (a[i] > max) {
//         max = a[i]
//         index = i
//     }
// }
// console.log(index);

// что задать в качестве нач значения ? для этого добавили [0, a[0]] массив с нулем и с индексом a[0], 
// который является вторым элементом исчисляемого массива prev [1] с индексом a[0] https://www.youtube.com/watch?v=m4qMknyBzSo
// let d = a.reduce((prev, item, index) => {
//     if (item > prev[1]) {
//         return [index, item]
//     }
//     else {
//         return prev
//     }
// }, [0, a[0]])
// console.log(d);
// // =============
//  слияние массивов в один 
// const data = [[1, 2, 3], [3, 4, 5], [5, 6, 7]]
// const flat = data.reduce((prev, item) => {
//     return prev.concat(item)
// }, [])
// console.log(flat);
// ===============
// В магазине на начало дня х руб и три чека по 1,5,15 руб. Вывести на экран в следующем виде : 
// Чек:0 = 1
// Чек:1 = 5
// Чек:2 = 15
// Итого: 21
// const a = [1,5, 15]
// const b = a.reduce((accum, el, index) => {
//     // console.log(accum, el);
//     accum += `Чек:${index} = ${el}\n${index === a.length-1 ? `Итого: ${a.reduce((acc, el)=> acc + el)}` : ''}` 
//     return accum 
    
// }, '')
// console.log( b)
// ======================
// посчитать кол-во джидаев
// const users = [{
//     username: "lando12",
//     jedi: false
// }, {
//     username: "kvaigon99",
//     jedi: true
// }, {
//     username: "anakin skywalker",
//     jedi: false // DARK SIDE ISN'T JEDI WAY!!!
// }, {
//     username: "littlegreenpug",
//     jedi: true
// }, {
//     username: "ray",
//     jedi: true
// }, {
//     username: "padmebestqueenever",
//     jedi: false
// }];

// const countJedi = (users) => {

//     return users.reduce((sum, elem) => {
//         if (elem.jedi) {
//             sum++
//         }
//         return sum
//     }, 0)
// }

// console.log(countJedi(users));  

// выгрузить на экран массив имен джидаев 
// const getArrayOnlyJdai = (users) => {

//     return users.reduce((names, user) => {
//       if (user.jedi){
//         names.push(user.username) // здесь возвращаем в аккумулятор names-push, добавляем элемент  user и он цепляется к ключу username в обьекте users
//       }
//         return names
//     }, []) // ставим [] т.к. возвращать будем в массив обьекты 
// }

// console.log(getArrayOnlyJdai(users)); // [ 'kvaigon99', 'littlegreenpug', 'ray' ]