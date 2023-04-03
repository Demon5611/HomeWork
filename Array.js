// Напишите функцию generateIntegers, которая принимает один аргумент число n и генерирует массив, который содержит целые числа от 0 до n включительно.
// Например, generateIntegers(3) должен вернуть [0, 1, 2, 3].
// N может быть любым целым числом больше и равным 0
  
// function generateIntegers(n) {
//  let myArray=[] 
//   for (i=0; i<=n; i++){
//     myArray.push(i)
//   }
//     return myArray
// }
// console.log(generateIntegers(3))

// ======================================
// Дано целое число n и два других значения. Функция valueRepeater должна создавать массив размером n, в который входят два других значения и они чередуются.

// function valueRepeater (n, firstWord, secondWord) {
//   let result = [];
//   for (let i=0; i<n; i+=1){
//     result.push(i%2===0?firstWord:secondWord);
//   };
//     return result;
// }
// console.log(valueRepeater (4, 'firstWord', 'secondWord'))

// ======================================
//Реализуйте функцию, которая принимает массив целых чисел и возвращает массив с удвоением каждого значения. 

// let arr = [1,2,3,4]
// let newArr=[]
// arr.forEach(function (elem, i) {
//   newArr.push(elem *= 2)
//   console.log(elem)
// })

// Еще один вариант удвоения ч\з метод MAP 
// let arr =[1,2,3,4,5,6,7,8,9,10]
//  arr.map(function (elem) {
//  newArr.push (elem*=2)
//    })
// console.log(newArr)
// ===================================
// const presidents = [
//   {first: 'Georg', last: 'Wahington', born: 1734, died: 1799},
//   {first: 'Jon', last: 'Adams', born: 1735, died: 1839},
//   {first: 'Ronald', last: 'Reagan', born: 1914, died: 1987},
//   {first: 'Gerald', last: 'Ford', born: 1934, died: 1976},
//   {first: 'Richard', last: 'Nixon', born: 1913  , died: 1983},
// ]
// const newPresidents=presidents.map(presidents =>{
//   return presidents // обязательно стелать возврат. положили в новую перем newPresedents
//   // return `${presidents.first} ${presidents.born}`
// })
// console.log(newPresidents);
// ==================================

// еще один вариант циклом
// function multyArr (arr) {
// let newArr=[]
// for (i=0; i< arr.length; i++){ 
//   newArr.push(arr[i]*=2) }
//   return newArr
// }
// console.log(multyArr([2,3,4,5]))

// ======================================
// Реализуйте функцию arraySquarer, которая принимает массив с числами, а возвращает новый массив, состоящий из квадратов этих чисел.
// Для решения этой задачи используйте метод forEach.

// function arraySquarer(arr) {
//   return arr.map(function(elem) {
//       return  Math.pow(elem,2);
//     })
// }
// console.log(arraySquarer([2, 4, 5, 3]));

// ======================================
/// работа с методом перебора массива MAP 
// const data = [
//   {
//     id: 1,
//     name: 'Dima',
//     email: 'r@r.ru',
//     age: 22,
//     isActive: true
//   },
//   {
//     id: 2,
//     name: 'Denis',
//     email: 'w@r.ru',
//     age: 44,
//     isActive: false
//   },
//     {
//     id: 3,
//     name: 'Yan',
//     email: 'y@r.ru',
//     age: 65,
//     isActive: true
//   },
//       {
//     id: 4,
//     name: 'Des',
//     email: 'yd@r.ru',
//     age: 100,
//     isActive: false
//   },
// ]

// let getEmail = data.map(function (elem) {
// let obg = []
//       return obj = {
//      name: elem.name, 
//      email: elem.email
//    }
//   })
// console.log(getEmail)


// ======================================
// Необходимо написать функцию counter, которая принимает в виде аргументов два числа: старт и конец. Функция должна возвращать число элементов массива между числами,
//  за исключением числа, в котором содержится число 5.
// Стартовое и конечное число включается в число элементов массива.
// Результат может содержать число 5.
// Стартовое число всегда меньше конечного. Оба числа могут быть отрицательными.
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12


// function counter(start, end) {
//   const arr = [];
//   for (let i = start; i <= end; i++) {
//     const find5 = String(i).split('').find(item => item === '5');
//      	// превращаем каждый элемент в строку. 
//    	 // разбиваем по символам
//   	  // ищем элемент (item), если нашли, то возвращаемся в начало цикла, но на i++ т.е. на следующий символ, сново проверяем на равенство с '5' 
//     if (find5 === undefined) {
//   	    // если равенства нет (т.е. undefined), то в массив в конец добавляем символ
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(counter(1, 6));

// ==========================
// метод forEach. применим к массивам, когда нужно из них выбраиь элементы. содержит два параметра. 1й (elem) - элементы массива с которыми будем работать. 2й - индекс массива. Названия  параметров произвольны.

// const myArr=['first', 'second', 'therd']
// myArr.forEach((elem, index)=>{
//   console.log(elem, index);
// })

// еще пример : 
// let obj = {
//   property1: 'one',
//   property2: 'two',
//   property3: 'asd'
//   }
//   // Object - это конструктор JS, создает новый обьект. keys - это метод конструктора Object, он создает св-ва, а точнее, исп-т св-ва обьекта obj. key - инициируем переменную, куда мы сложим результат перебора св-в forEach в виде вновь созданного обьекта через Object
  
// Object.keys(obj).forEach(key=> {
// console.log(key, obj[key]);
// })


// FILTER
// const presidents = [
//   {first: 'Georg', last: 'Wahington', born: 1734, died: 1799},
//   {first: 'Jon', last: 'Adams', born: 1735, died: 1839},
//   {first: 'Ronald', last: 'Reagan', born: 1914, died: 1987},
//   {first: 'Gerald', last: 'Ford', born: 1934, died: 1976},
//   {first: 'Richard', last: 'Nixon', born: 1913  , died: 1983},
// ]
// const filterBorn = presidents.filter(item => {
//   if (item.born >= 1913) {
//     return true
//   }
//   })
// в одну строку
// const filterBorn = presidents.filter(item => item.born >= 1913)
//   console.table(filterBorn)
// ==============================
// REDUCE
// const presidents = [
//   {first: 'Georg', last: 'Wahington', born: 1734, died: 1799},
//   {first: 'Jon', last: 'Adams', born: 1735, died: 1839},
//   {first: 'Ronald', last: 'Reagan', born: 1914, died: 1987},
//   {first: 'Gerald', last: 'Ford', born: 1934, died: 1976},
//   {first: 'Richard', last: 'Nixon', born: 1913  , died: 1983},
// ]

// total - здесь это первый эл-т нового массива, с которого начинается цикл и далее он суммируется
// item - второй эл-т колбек функции, через него мы обращаемся к ключам массива (индекс)
// сразу создаем новую переменную нового массива sum, 0 - указываем, что начинаем цикл от 0

// const sum = presidents.reduce((total, item)=> total + (item.died-item.born)/presidents.length,0)
// console.table(sum);
==============================
// FIND
// const presidents = [
//     {first: 'Georg', last: 'Wahington', born: 1734, died: 1799},
//     {first: 'Jon', last: 'Adams', born: 1735, died: 1839},
//     {first: 'Ronald', last: 'Reagan', born: 1914, died: 1987},
//     {first: 'Gerald', last: 'Ford', born: 1934, died: 1976},
//     {first: 'Richard', last: 'Nixon', born: 1913  , died: 1983},
//   ]
  
//   const name= presidents.find(item => item.first === 'Jon')
//   console.log(name);
FINDINDEX
// const nameIndex= presidents.findIndex(item => item.first === 'Jon')
// console.log(nameIndex);

// сборка всех методов в цепь
// const presidents = [
//   {first: 'Georg', last: 'Wahington', born: 1734, died: 1799},
//   {first: 'Jon', last: 'Adams', born: 1735, died: 1839},
//   {first: 'Ronald', last: 'Reagan', born: 1914, died: 1987},
//   {first: 'Gerald', last: 'Ford', born: 1934, died: 1976},
//   {first: 'Richard', last: 'Nixon', born: 1913  , died: 1983},
// ]


// const newPresidents = presidents
//       .filter(item => item.died>1900)
//       .map(item => {
//         return {
// info: `${item.first} ${item.last}`,
// born: item.born,
// died: item.died, 
//       }
// })
//       .reduce((total, item) => total + item.died, 0)
// console.table(newPresidents)
