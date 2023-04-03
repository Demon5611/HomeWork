ЗАДАНИЕ 1
 написать функцию, которая принимает три аргумента и возвращает массив целых чисел от min до max с шагом step.
ПРИМЕР: generateRange(2, 10, 2) // [2,4,6,8,10]

function generateRange(x, y, z) {
  let array = [];
  for (let i = x; i <= y; i+=z) {
    array.push(i);
  }
   return array;
}
console.log(generateRange(2, 10, 2))

ЗАДАНИЕ 2
Считанные секунды до старта! Юрий Гагарин готов произнести свою знаменитую на весь мир фразу. 
Напишите функцию, которая возвращает строку из чисел от 20 до 0 с шагом 4 и в конце добавляет “Поехали!”
ПРИМЕР: cycleGo() // '201612840 Поехали!'
function cycleGo() {
  let min = 0;
  let max = 20;
  let step = 4;
  let str = '';
    for (i = max; min <= i; i-= step){
     str=str+i
   }
   return str + ' Поехали!';
 }
console.log(cycleGo())
	


ЗАДАНИЕ 3
 Напишите функцию, которая принимает строку, удаляет все пробелы из нее и возвращает измененную строку.
ПРИМЕР: trimSpaces("Ко с мос !") // "Космос!"
__
function trimSpaces(str){
const newStr = ""
return str.split(' ').join('')
}
console.log(trimSpaces('Ко с мос!'))

ЗАДАНИЕ 4
Напишите функцию, которая принимает arrStr и num, а возвращает новый массив со словами, длина которых равна num
ПРИМЕР: filterArray(["Коррекция", "Виток", "Воздух", "Газоанализатор", "Температура"], 6) // ['Воздух']

const filterArray = (arrStr, num) => arrStr.filter(s => s.length === num);


ЗАДАНИЕ 5 
Напишите функцию, которая переводит положительные числа в отрицательные. Отрицательные не изменяются.
ПРИМЕР: oppositeNumber(-4) // -4 oppositeNumber(0.2) // -0.2

const oppositeNumber = (...numbers) => numbers.map(num => num > 0 ? -num : num)
console.log(oppositeNumber(1,-9,55,-0.2, 0.4))
==============================
function oppositeNumber(array) {
  return array.map(item => item >0 ? -item : item)
  }
console.log(oppositeNumber(4,4,5,6,-9,7, 0.2, - 0.3))
=============================
через число 
function invert(array) {
return -Math.fabs(array)
 }
console.log(invert(-0.2))