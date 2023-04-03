// КАЛЬКУЛЯТОР

// let calculator = {
// sum () {
// return this.a + this.b;
// },
// mul() {
// return this.a * this.b;
// },
// read() {
// this.a= + prompt('Введите первое значение', '');
// this.b= + prompt('Введите второе значение', '');
// }
// }
// calculator.read();  // запускаем функцию : св-во read и весь обьект calculator
// alert( calculator.sum() ); // запускаем ф-цию сумма
// alert( calculator.mul() ); // запускаем ф-цию умножение

// ====================
//первый символ делаем прописным
// const capitalizeFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1) // Метод charAt возвращает символ, стоящий на указанной позиции в строке. строка.charAt(позиция символа).
// //  из строки берем 1ю позицию и приводим к верхнему регистру. Далее отрезаем и удаляем (Slice(1)) все, что далее первого символа в стр.
// ====================
// function capitalize (str) {
//     return `${str[0].toUpperCase()}${str.slice(1)}`
// }
// console.log(capitalize('hello')); // Hello
// ======================
// const accum = (str) => str
//   .split('') // разбиваем исходную строку на массив по символу
//   .map((word, i) => capitalizeFirstLetter(Array(i+2).join(word).toLowerCase()))
//   .join('-'); // объединяем полученные фрагменты (элементы массива)
// console.log(accum('abcd'));    // "A-Bb-Ccc-Dddd"

// тоже самое др методом
// const  accum = (str) => {
//   let res = ''; // добавляем начальный символ для строк

//   for (i = 0; i < str.length; i++) {
//     res = res + str[i].toUpperCase() + str[i].toLowerCase().repeat(i) + '-';
//     }
//   // сборка новой строки res = к существующему прибавляем следующий (+=res), далее каждый символ приводим к верхнему + нижнему регистру и повторяем i-раз (т.е. если он по порядку третий, то три раза повторение), добавляем тире '-' м\у буквами.

//   return res.slice(0, res.length - 1);
//   // возвращаем результат, оставляя все в границах от 0 до res.length - 1 (конца длины строки). т.е. каждый цикл мы возвращаем всю новую собранную строку из первой буквы. Далее тоже самое со второй буквой.

// }
//  console.log(accum('abcd'))

// ====================
// let accessAllowed='Welcome'
// let denideAllowed='See you in the future..'
// let age= prompt('How old are you?', '')
// if (age>=18){
//   alert(accessAllowed)
// } else {
//   alert(denideAllowed)
//   }

// тоже самое др методом
// let age = prompt('How old are you?', '')
// let accessAllowed=(age>=18) ? 'Welcome' : 'See you in the future..';
// alert(accessAllowed)

// ========================

// Вывести первый и последний символ строки

// const text = "Mozilla";
// const result =`First: ${text[0]}\nLast: ${text[text.length - 1]}`;
// console.log(result);
// ===========================

// Функция, которая считает количество упоминаний буквы в строке
// function fn(str, char){
//     let i=0
//     let count = 0
//     while (i<str.length){
//       if (str[i].toLowerCase() === char || str[i].toUpperCase() === char) {
//         count=count + 1
//        }
//        i++
//     }
//   return count
//   }
//   console.log(fn('Hello', 'H'));

// =========================
// REVERSE строки
// const reverse=(str)=>{
//   let result =''
//   for (let i=0; i<str.length; i++){
//     result=`${str[i]}${result}`
//     }
//   return result
// }
// console.log(reverse('hello world'))
// цикл от большего к меньшему
// function rev(str){
//     let newstr=''
//     for (let i=str.length-1; i>0; i--){
//       newstr= newstr + str[i]
//     }
//     return newstr
//     }
//     console.log(rev('hello'));

// еще один пример reverse, str.charAt(i) и str[i] одно и то же - индекс символа в строке
// ===================================
// function reversStr(arr){
//     return arr.map(function(item){
//      if (item.includes('a')){
//       return item.split('').reverse().join('')
//        }
//         return item
//     })
//   }

//   console.log(reversStr( ['hello', 'magic', 'home', 'job', 'car']))
// =========================================

// const reverse=(str)=>{
//   let result =''
//   for (let i=str.length-1; i>0; i--){
//     result=result+str.charAt(i)
//     }
//   return result
// }
// console.log(reverse('hello'))

// еще пример с помощью spread (...) и reduce. spread разделяет строку (обьект) на символы, помещает все это в total в нашем случае это аккумулятор prev, next это индекс (как i), отвечает за кол-во итераций
// ???? как здесь происходит переворот символов ???? - next+prev

// function reverseStr(str) {
//     return rev=[...str].reduce((prev, next)=> next+ prev)
// }
// console.log(reverseStr('hello'))

// ====================
// самый простой способ !!!!!!!
// function reverseStr(str) {
//     return str.split('').reverse().join('')
//     }
// console.log(reverseStr('hello'))
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
// ================================

// Реализуйте функцию getHiddenCard(), которая принимает на вход номер кредитки (состоящий из 16 цифр) в виде строки и возвращает его скрытую версию,
//  которая может использоваться на сайте для отображения. Если исходная карта имела номер 2034399002125581, то скрытая версия выглядит так ****5581.
//  Другими словами, функция заменяет первые 12 символов, на звездочки. Количество звездочек регулируется вторым необязательным параметром.
// Значение по умолчанию — 4.

// function getHiddenCard(str,count=2){
//     // новую стр не создаем т.к. метод repeat slice создает новую строку сам

//     return  `${'*'.repeat(count)}${str.slice(12)}`
//  }
// console.log(getHiddenCard('1234567812345678',6));;

// ==================================================

// const makeItFunny = (str, n) => {
//     let i = 0;
//     let result = '';
//     while (i < str.length) {

//        if ((i + 1) % n === 0) {                                     // если следующий индекс (i+1 т.е. по порядку) при делении на n даст остаток =0, то возвращаем его и делаем toUpperCase
//         result = `${result}${str[i].toUpperCase()}`;
//       } else {                                                      // иначе просто возвращаем букву без изменений
//         result = `${result}${str[i]}`;
//       }
//       i++;
//     }
//     return result;
//   };
// console.log(makeItFunny('I never look back', 3));
// // Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.
// // Для определения каждого n-ного элемента понадобится остаток от деления %. Подумайте, как его можно использовать.

// ==========================================================

// //Реализуйте функцию hasChar(), которая проверяет (с учётом регистра), содержит ли строка указанную букву. Функция принимает два параметра: Строка, Буква для поиска
// // Пример вызова
// // hasChar('Renly', 'R'); // true

// const hasChar = (str, char) => str.includes(char) || false;
// console.log(hasChar('Hello', 'j'))

// console.log('hello');
// =====================================
// тоже самое с циклом
// const hasChar=(str, char)=>{
// let result = ''
// for (i=0; i<str.length; i++){
//    if (str[i]===char){
//     return true
//    } else{
//     return false
//    }
// return result
// }
// }
// console.log(hasChar('hello', 'H'))
//     ====================================
// Введите номер телефона в международном формате
// const isInternationalNumber = () => {
//     const str= prompt('Input your mobile number', '+7..')
//     let result = ''
//     if (str.length === 10) {
//         return result = '+7' + str
//     } if (str.length === 11) {
//         return result = '+7' + str.slice(1)
//     } if (str.length === 12 && str.startsWith('+')){
//         return result= str
//     } else {alert('Wrong number');
//     }
// }
// console.log(isInternationalNumber());
// ===============================
// Мы хотим купить квартиру, которая удовлетворяет условиям: площадь от 100 кв. метров и больше на любой улице ИЛИ площадь от 80 кв.
// метров и больше, но на центральной улице Main Street.

// Напишем функцию, проверяющую квартиру. Она принимает два аргумента: площадь (число) и название улицы (строку):

// const isGoodAppartment = (area, street) => {
//     const result = area >=100 || (area >=80 && street === 'Main Street')
//     return result
// }
// console.log(isGoodAppartment(100, 'Queens Street'));
// =============================
// функцию isLeapYear(), которая определяет, является ли год високосным или нет. Год будет високосным,
// если он кратен (то есть делится без остатка) 400 или он одновременно кратен 4 и не кратен 100.

// const isLeapYear = (year) => {
//     const result = ''
//     if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0){
//         console.log('Високосный год!');
//     } else {
//         console.log('Не високосный год');
//     }
//     return result
//     }
//     console.log(isLeapYear(400));
// =============================
// ПАЛИНДРОМ
// function isPalindrome(word){
//     const result = word
//     .toLowerCase()
//     .split('').reverse().join('')
// if (result === word){
//     console.log('Is PALINDROM');
// } else {
// console.log('Is not PALINDROM');
// }

//     return result
// }
// console.log(isPalindrome('mam'));
// ==================================

// // В небольшом городе население p0 = 1000 в начале года. Население постоянно растет на 2 процента каждый год и еще 50 новых людей каждый год переезжают в город жить. Сколько лет необходимо городу, чтобы его население стало больше или равно p >= 1200 жителей?
// // В конце первого года: 1000 + 1000 * 0.02 + 50 => 1070 жителей.
// // В конце второго года: 1070 + 1070 * 0.02 + 50 => 1141 жителей (** число жителей всегда целое **).
// // В конце третьего года: 1141 + 1141 * 0.02 + 50 => 1213.
// // Итого понадобится 3 года.
// // Немного об аргументах:
// // p0 -население в начале года, целое число больше 0
// // процент, положительное число или с плавающей запятой
// // aug - количество жителей, которые покидают или пребывают в город, целое число
// // p - население, которое требуется достичь, целое число больше 0
// // Функция nbYear должна возвращать количество лет, которое потребуется для достижения населения больше или равно p.

// // ПРИМЕР
// // nbYear(1500, 5, 100, 5000) -> 15
// // nbYear(1500000, 2.5, 10000, 2000000) -> 10

// function nbYear(p0, percent, aug, p) {
//       let years = 0;
//       function recYears(p0, percent, aug, p) {
//         years += 1;
//         if (p/p0 <= 1.06 && p/p0 >= 1) {
//           return years;
//         } else {
//           return recYears(p0 + p0 * (percent/100) + aug, percent, aug, p)
//         }
//       }
//       return recYears(p0, percent, aug, p);
//     }
// console.log(nbYear(1000, 2, 50, 1200))
// =========================
// Реализуйте функцию getLetter(), которая извлекает из переданной строки указанный символ (по порядковому номеру, а не по его индексу) и
// возвращает его наружу. Если такого символа нет, то функция возвращает пустую строку.

// const  getLetter = (name, char) => name[char-1] || `''`

// console.log(getLetter('hello', 0));
// ===============================
// Реализуйте функцию normalizeUrl(), которая выполняет так называемую нормализацию данных. Она принимает адрес сайта и возвращает
// его с https:// в начале.
// Функция принимает адреса в виде АДРЕС или https://АДРЕС, но всегда возвращает адрес в виде https://АДРЕС
// Можно использовать метод startsWith(), чтобы проверить, начинается ли строка с префикса
// https:. А потом на основе этого добавлять или не добавлять https://.

// const normalizeUrl = (site) => {
//     if (site.startsWith('https://')) {
//         return site
//     } else {
//         return `${'https://'}${site}`
//     }
// }
// console.log(normalizeUrl('ya.ru'));
// =========================
// На электронной карте Вестероса, которую реализовал Сэм, союзники Старков отображены зеленым кружком, враги — красным, а нейтральные семьи — серым.
// Напишите для Сэма функцию whoIsThisHouseToStarks(), которая принимает на вход фамилию семьи и возвращает одно из трёх значений: 'friend', 'enemy', 'neutral'.
// Правила определения:
// Друзья ('friend'): 'Karstark', 'Tally'
// Враги ('enemy'): 'Lannister', 'Frey'
// Любые другие семьи считаются нейтральными

// function whoIsThisHouseToStarks(name) {
//     let status
//     if (name === 'Karstark' || name ==='Tally') {
//         status= 'friend'
//     } else if (name === 'Lannister' || name ==='Frey') {
//         status = 'enemy'
//     } else  {
//         status ='neutral'
//     }
//     return status
// }
// console.log(whoIsThisHouseToStarks('Lannister'));
// ====================
// принимает на вход строку и,
// если первая буква не заглавная, возвращает перевернутый вариант исходной строки.
// Если первая буква заглавная, то строка возвращается без изменений.
// Если на вход передана пустая строка, функция должна вернуть пустую строку.

// function convertText(text) {

//     if (text === '') {
//         return  ''
//        }
//        if (result= text[0] === text[0].toUpperCase()){
//        return text
//        } else {
//         return [...text].reduce((prev, next) => next + prev)
//        }
//     }
// console.log(convertText('Hello'));

// ================================
// Реализуйте функцию getNumberExplanation(), которая принимает на вход число и возвращает объяснение этого числа. Если для числа нет объяснения, то возвращается null:
// const getNumberExplanation=(number)=>{
//     const one = 'devil number'
//     const two = 'answer for everything'
//     const three= 'prime number'
//     switch (number) {
//         case 666:
//             return one;
//         case 42:
//             return two;
//         case 7:
//             return three;
//         default: null
//     }
// }

// console.log(getNumberExplanation(666));
// =============================
// Реализуйте функцию filterString(), принимающую на вход строку и символ,
// и возвращающую новую строку, в которой удален переданный символ во всех его позициях. Регистр символов важен.
// ?????????????????? ПОЧЕМУ НЕ ИСПОЛЬЗОВАЛИ toUpperCase\toLowerCase, как проверили на регистр ? - if(str[i] != char)  если индекс не char
//  (не заглавный или не прописной т.е. нет совпадения), то возвращаем!

// const filterString = (str, char) => {
//     let result = ''
//     let i =0
//     while (i<str.length){
//         if(str[i] != char){
//             result = result + str[i]
//          }
//         i++
//     }
//     return result
//     }

//     console.log(filterString('Ikon', 'I'));
// ============
// Сэмвелл обнаружил, что его сообщения перехватываются в замке «Близнецы» и там читаются. Из-за этого их атаки перестали быть внезапными. Немного подумав, он разработал программу,
//  которая бы шифровала сообщения по следующему алгоритму. Она бы брала текст и переставляла в нем каждые два подряд идущих символа.
// const encrypt = (str) => {
//     let result = '';
//     for (let i = 0; i < str.length; i += 2) {
//         const nextSymbol=str[i+1] || '';
//        result = `${result}${nextSymbol}${str[i]}`;
//        }
//       return result;
//   };
// console.log(encrypt('hello'));

// ===============
// Удалить пробелы из строки

// const str = '   Hello World   ';
// console.log(str.replace(/ /g,''));

// Чтобы удалить из строки все пробельные символы, а не только пробел, используйте \s вместо. \s соответствует всем символам новой строки,
// символам табуляции, символам пробела и т. д. Это приведет к простому коду ниже:

// const str = '   Hello World   ';
// console.log(str.replace(/\s/g,''));

// =================
// Найти Минимальное значение в массиве
// const findSmallestInt = (args) => {
//   let min = args[0]
//   for (const item of args) {
//     if (item < min) {
//       min = item
//     }
//   }
//   return min
// }
// console.log(findSmallestInt([1, 0, 3, 4]));

// const findSmallestInt= (args) => {
//   const small = args.reduce((acc, item) => Math.min(acc, item))
//   return small
// }
// console.log(findSmallestInt([1,-1,3,4]));
// ===============
// на вход число. верните число, где каждый элемент возведен в квадрат.
// function squareDigits(n) {
//     return +(n.toString().split('').map(val => val * val).join(''));
//     // полученное число переводим в строку, далее разбиваем по символам, далее элемент*элемент (возводим в квадрат)
//     //и собираем в строку. Знак + перед выражением переводит тип данных в число. ечли его убрать, то будет строка
//   }

//   console.log(squareDigits(12345));
//   =========================

// на вход массив с числами и строками, на выход только числа
// function filter_list(l) {

//     return l.filter(elem => typeof elem === 'number')

//   }

//   console.log(filter_list([1, 'a', 'b', 0, 15])); // [ 1, 0, 15 ]
//   =================
// Считает самое короткое слово в строке. возвращает длину строки
// function findShort(s) {
//     var words = s.split(' ')
//     var lengthOfMin = words[0].length

//     for (let i = 1; i < words.length; i++ ) {
//         if (words[i].length < lengthOfMin) {
//           lengthOfMin = words[i].length
//           }
//         }
//       return lengthOfMin
// }

// console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
// ============
// Задача: скрыть символы. кроме 4х последних
// function maskify(cc) {
//     if (cc.length <= 4) { // если длина строки меньше 4х, то вернуть строку
//       return cc
//     } else {
//       let result = ''
//       for (let i = 0; i < cc.length - 4; i++) { // проходим по строке и маскируем в *
//         result += '*'
//       }
//       result += cc.slice(-4) // склеиваем * и 4 символа строки
//       return result
//     }
//   }
//   console.log(maskify('12345679876'));
//   =======
// та же задача по маскированию ####
// function maskify(cc) {

//     return cc.slice(0,-4).replace(/./g, '#') + cc.slice(-4)
//     //slice извлекает текст от 0 до -4. заменяем все символы на # . символ с
//      точкой (/./g) без точки не работает. далее прибавляем оставшиеся 4 символа строки
//     }
//     console.log(maskify('1234567890'));  //######7890
// ===================
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0

// function positiveSum(arr) {
//     const result = arr.reduce((sum, el) => {
//         if (el >= 0) {
//             console.log(sum, el);
//             return sum += el
//         } else {
//             return sum
//         }
//     },0)
//     return result
// }
// console.log(positiveSum([1,-2,3,4,5]));
// ===============
// function basicOp(operation, value1, value2) {
//   if (operation === '+') {
//     return value1 + value2
//   } else if (operation === '-') {
//     return value1 - value2
//   } else if (operation === '*') {
//     return value1 - value2
//   } else if (operation === '-') {
//     return value1 - value2
//   } else if (operation === '/') {
//     return value1 / value2
//   }
//   return
// }
// console.log(basicOp('/', 4, 7))

// тоже самое через swith/case

// function basicOp(operation, value1, value2) {
// switch (operation){
//   case '+':
//     return value1 + value2
//   case '-':
//     return value1 - value2
//   case '*':
//     return value1 * value2
//   case '/':
//     return value1 / value2
//   default:
//   return'Please try agen'
//   }
// console.log(basicOp('/', 4, 7))
// =====================

// Напишите функцию square, которая принимает на вход значение произвольного типа данных,
// преобразует его в число и возвращает квадрат этого числа. Если значение невозможно
// преобразовать в число, функция должна вернуть строку «Ошибка преобразования данных».

// square('3') →  9
// square('Мама мыла раму') →  'Ошибка преобразования данных'
// square() →  'Ошибка преобразования данных'

// const square = (data) => {
//     let result
//     result = +data // знак + преобразует тип в number. можно записать как (Number(data))
//     if (typeof result=== 'number' && !Number.isNaN(result) ){ // Если result = типу 'number' и result не является NaN (т.е. только данные, которые можно преобразовать в
//         // числа), тогда идем далее и возвращаем **2

//         return Math.pow(result,2)
//     } else {
//        console.log('Ошибка преобразования данных');
//     }
// return result
// }

// console.log(square('2'));

// ===============

// const cycle = (myArray, yourArray)=>{

// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < yourArray.length; j++) {
//     if (myArray[i] === yourArray[j]) {
//       console.log('Both loops have the number: ' + yourArray[j])
//     }
//   }
// }
// }
// console.log(cycle([6, 19, 20], [19, 81, 2])); // Both loops have the number: 19

//     =================

//     const splitByLength = (str, length) => {
//       let result = []
//       for(let i =0; i<str.length; i+=length ){  // i+=length что бы проход по циклу был по длине length
//           result.push(str.slice(i, i+length)) // обрезаем стр с элем i в цикле и длиной 3 (на первой итерации) и 6 на второй и так далее
//       }
//       return result
//       }
//       console.log(splitByLength('Мама мыла раму', 3)); // ['Мам', 'а м', 'ыла', ' ра', 'му']
// ===========
// вывести наибольшее и наименьшее значение
// function highAndLow(numbers){
//   const arr=numbers.split(' ').map(Number)
//   arr.sort((a,b) => b-a) // сделали сортировку от большего к меньшему, теперь осталось собрать стр из 2х эл (самый большой и самый маленький - крайние)
//   return `${arr[0]} ${arr[arr.length-1]}`
//     }
//     console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // ==>> "42 -9"
// ===========

// Превращаем строки в массив:
// const str = "8 -5 42 4 -4"
// const strElem ='1,6,-55,0'

// let strElem_Arr=strElem.split('') // ['1', ',', '6', ',', '-', '5', '5', ',', '0']
// let strElem_Arr=strElem.split(' ') // [ '1,6,-55,0' ]
// let strElem_Arr=strElem.split(',') // [ '1', '6', '-55', '0' ]

// let strArr=str.split(',') // [ '8 -5 42 4 -4' ]
// let strArr=str.split(' ') // [ '8', '-5', '42', '4', '-4' ]
// console.log(typeof strArr); // object (str)

// делаем из стр числа:
// let strToNumber = str.split(' ').map(Number)  // [ 8, -5, 42, 4, -4 ] Object (Number)
// const strNumb = +'123456'  // 123456  строки -> числа

// делаем из числа строку:
// const numbStr = String(123456) // 123456  числа -> строки
// =============
// Умножте отриц значения на 2 и выведите на экран
// const foo = (arr) => {
//   const negativeNumbers = arr.filter(el => el < 0)
//   return negativeNumbers.map(el => -(el**2)) // ставим (-), что бы умнодить отриц числа
// console.log(negativeNumbers)
// }
// const foo = (arr) => {
//   const result = []
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] < 0) {
//       result.push(-(arr[i] ** 2))  // ставим (-), что бы умнодить отриц числа
//     }
//   }
//   return result
// }

// console.log(foo([1, -4, -15, 5])) // ===>>> [-16, -255]

// =====
// Напишите функцию removeDuplicates, которая принимает на вход массив и возвращает новый
// массив — копию исходного, в которой отсутствуют повторяющиеся значения

// const removeDuplicates = (arr) => {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//       let e = arr[i]
//       if (result.indexOf(e) === -1) { // если индекс arr[i] не true, то result.push(e)
//           result.push(e)
//  }
//   }
//   return result
// }
// console.log(removeDuplicates([1, 2, 7, 2, 8, 0, 2, 0]))    // [1, 2, 7, 8, 0]
// ============

// const count = (arr, number)=>  {
//   let count = 0
//   const arrIndex = []
// for (i=0; i<arr.length; i++) {
//   if (arr[i] === number) {
//       count ++
//       arrIndex.push(i)
//   }
// }
// console.log(`Элемент ${number} был обнаружен в массиве ${count} раза. Индексы элементов: ${arrIndex.join(', ')}` )
// return `Элемент ${number} был обнаружен в массиве ${count} раза. Индексы элементов: ${arrIndex.join(', ')}`
// }
// count([1, 2, 7, 2, 8, 0, 2], 0)  // Элемент 0 был обнаружен в массиве 1 раза. Индексы элементов: 5
// ===========
// Вывести уникальные значения массива
// const removeDuplicates = arr => [ ...new Set(arr) ]
// console.log(removeDuplicates([1, 2, 7, 2, 8, 0, 2, 0])); // [1, 2, 7, 8, 0]
// ===
// Напишите функцию evaluate, которая принимает на вход строку операции, записанной в префиксной
// нотации, и возвращает результат выполнения операции:

// const evaluate = (str) => {

//  let result =  str.slice(1,-1).split(' ') // .replace(')', '')     replace(/[\(\]/g, '')]) используем регулярные выраэения

// let operator = result[0]
// let operand1 =result[1]
// let operand2 =result[2]
// let result2 = result[1]+result[0]+result[2]
// let xxx=eval(result2)

// return xxx
// }

// console.log(evaluate('(* 3 3)')); // → 9;
// console.log(evaluate('(- 420 69)')); // -> 351;
// ====
// метод диструкции

// const evaluate = (str) => {
//     const arrayOfSymbols = str.slice(1, -1).split(' ').sort()
//     const [operator, num1, num2] = arrayOfSymbols

//     switch (operator) {
//         case '-': return num1 - num2
//         case '+': return Number(num1) + Number(num2)
//         case '/': return num1 / num2
//         case '*': return num1 * num2
//     }
// }
// console.log(evaluate('(* 3 3)') ); // 9
// console.log(evaluate('(- 420 69)') ); // 351
// ===============
// Напиши функцию, которая принимает массив городов и возвращает новый массив только тех, в названии которых четное количество букв
// ['Москва', 'Псков', 'Новосибирск', 'Омск', 'Хабаровск'] -> [ 'Москва', 'Омск' ]

// const City = (arr) => {
//     let result = []
// arr.filter(el => el.length % 2 === 0 ? result.push(el) : false)
// return result
// }
// console.log(City(['Москва', 'Псков', 'Новосибирск', 'Омск', 'Хабаровск']));

// let result = []
// for (let item of arr) {
//     if (item.length % 2 === 0) {
//         result.push(item)
//     }
// }
// return result
// ===========
// Напиши функцию, которая, принимая число num,  возвращает массив чисел от 0 до num, которые делятся на 2, но не делятся на 3
// 20 -> [  2,  4,  8, 10, 14, 16, 20 ]
// const arr = (num) => {
//     let result = []
//     for (let i=1; i<=num; i++){
//         if (i %2 === 0 && i %3 !==0){
//           result.push(i)
//         }
//     }
//     return result
// }
// console.log(arr(20));
//===========================
// Напишите функцию, которая принимает строку и возвращает true, если строка является палиндромом (читается одинаково с обоих концов), и false если нет.
// 'довод' => true, 'клавиатура' => false

// const palindrom =(str) => {
//     if (str.toLowerCase() === str.toLowerCase().split('').reverse().join('')){
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// console.log(palindrom('Довод'));
// =============
// Дан массив А и значение Х. Верните true, если Х есть в массиве А, и false в противном случае. Нельзя использовать встроенные функции
// ([1,2,3,5,6,4], 4) true
// ([1,2,3,4], 7) false

// const compare = (arr1, number) => {
//     if (arr1.includes(number)){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(compare([1,2,3,5,6,4], 0));
// ===============
// Напишите функцию, которая принимает строку S и возвращает новую строку с вопросительным знаком в конце,
// если исходная строка не заканчивается вопросительным знаком.Если исходная строка заканчивается вопросительным знаком, верните ее
// ("Yes") => "Yes?"
// ("No?") => "No?"
// const strEndOfSymbol = (s) => {
//     let newStr = ''
//     if (s.endsWith('?')) {
//         newStr = s
//     } else {
//         newStr = s + '?'
//     }
//     return newStr
// }
// console.log(strEndOfSymbol("No?"));
// ==========
// Напишите функцию, которая переводит положительные числа в отрицательные
// (-4) => -4   // (0.2) => -0.2

// const viceVerse=(num) => {

// return Math.floor(num * 100) / 100 // меняет знак всем и округляет до сотых
// return num - (num * 2) // меняет знак всем
//    return   -Math.abs(num) // только переводит + на -
// }
// console.log(viceVerse(-2.6543));
// ========
// Напишите функцию, которая удалит восклицательные знаки(!) в строке и вернет новую
// ("Elbrus! Hello!!") => "Elbrus Hello"
// const restrict = (str) => {
//     let result = ''
//     for (let i = 0; i <= str.length; i++) {
//         if (str[i] === '!') {
//           result =  str.replace(/!/gi, '')  // знак ! помещаем в  / /  gi - удалить все повторения
//         }
//     }
//     return result
// }
// console.log(restrict("Elbrus! Hello!!"));
// ==========
// Напишите функцию, принимающую слово и возвращающую количество заглавных букв в нем  // "проКрАСТИНация" -> 6

// const countUpperCase = (str) => {
//     let count = 0
//     for (i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toUpperCase()){
//             count ++
//         }
//     }
//     return count
// }
// console.log(countUpperCase('проКрАСТИНация'));
// ==============
// Напишите функцию, которая принимает два аргумента - массив слов и число, а возвращает новый массив со словами, длина которых равна
// второму второму аргументу
// ["Олень", "Сосна", "Грибы", "Береза", "Медведь"], 6 -> ['Береза']

// const lengthWords = (arr, numb) => {
//   let result = []
//   result = arr.filter(el => el.length === 6)
//   return result
//  }
//  console.log(lengthWords(["Олень", "Сосна", "Грибы", "Береза", "Медведь"], 6))

// ====================
// Написать функцию, которая на вход принимает положительное число с дробной частью (float), а на выходе получает число, округленное до пятерок.
// Пример:
// toFloat(27) => 25
// toFloat(27.8) => 30
// toFloat(41.7) => 40

// Если мы хотим, чтобы округлить до ближайшего числа, кратного 5, самый простой способ создать функцию, которая делит число на 5,
// округляет его, а затем умножает его на ту же сумму:

// const toFloat = (num) => {
//     return let = Math.round(num/5)*5
// }
// console.log(toFloat(27))
// =======
// Написать функцию, которая принимает массив, и проверяет что все элементы больше 50
// Например test5([43, 84, 35, 94, 64, 95, 82]) -> false
// Например test5([99, 84, 94, 64, 95, 82]) -> true

// const isElem50 = (arr) => {
//     let result
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] <= 50) {
//             console.log(false)
//             break
//         } else {
//             console.log(true)
//             break
//         }
//     }
//     return result
// }
// isElem50([63, 84, 55, 94, 64, 95, 82])
// =============
// Функция должна вывести номмер столетия. 1890 => 19

// function centuryFromYear(year) {
//     let result = 0;
//     for (let i = 0; i < year; i++) {
//       if (i % 100 === 0) {  // если остаток от деления === 0 (100\100, 200\100 ..), то увеличиваем счетчик ++. потом суммируем
//         console.log(i)
//         result++;
//       }
//     }
//     return result;
//   }
// console.log(centuryFromYear(1889))
// ==========
// Создайте функцию, которая принимает в качестве аргументов объект и ключ объекта, а возвращает значение объекта, доступное по этому ключу.

// Пример: ({ 'key': 'property' }, 'key') => 'property'  */
// const objValue = (obj, key) => {
//   let result = "";
//   for (let key in obj) {
//     result = obj[key];
//   }
//   return result;
// };
// console.log(objValue({ key: "property" }, "key"));
// =======================
