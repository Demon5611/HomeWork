1) Использование временной переменной ОК 

function swapWithTemp(num1,num2)
{
  console.log(num1,num2)

  var temp = num1;
  num1 = num2;
  num2 = temp;

  console.log(num1,num2)
}

swapWithTemp(2.34,3.45)

2) Использование сложения и вычитания

function swapWithPlusMinus(num1,num2)
{
  console.log(num1,num2)
  num1 = num1+num2;
  num2 = num1-num2;
  num1 = num1-num2;
  console.log(num1,num2)
}
swapWithPlusMinus(2.34,3.45)

// тоже самое методом сложения

function swapWithPlusMinusShort(num1,num2)
{
  console.log(num1,num2)
  num2 = num1+(num1=num2)-num2;
  console.log(num1,num2)
}
swapWithPlusMinusShort(2,3)

3) Использование сложения или вычитания

function swapWithPlus(num1,num2){
  console.log(num1,num2)

  num2 = num1 + (num1=num2, 0)

  console.log(num1,num2)
}

//Попробуйте реализовать это с помощью только вычитания
swapWithPlus(2.3,3.4)

// или так 
num2 = num1 + 0 => num2 = num1

4) Использование умножения и деления
function swapWithMulDiv(num1,num2){
  console.log(num1,num2)

  num1 = num1*num2;
  num2 = num1/num2;
  num1 = num1/num2;

  console.log(num1,num2)
}

swapWithMulDiv(2.34,3.45)

или так 
num2 = num1 * num2 / num2
=> num2 = num1

6) Использование побитового исключающего ИЛИ

function swapWithXOR(num1,num2){
  console.log(num1,num2)

  num1 = num1^num2;
  num2 = num1^num2; 
  num1 = num1^num2;

  console.log(num1,num2)
}

// протестируйте также отрицательные значения
swapWithXOR(10,1)
// 4-ех битное представление 10 -> 1010
//4-ех битное представление 1 -> 0001
//Тогда:
//На 4 строке: num1 = num1 ^ num2 => 1010 ^ 0001 => 1011 => 7 
//На 5 строке: num2 = num1 ^ num2 => 1011 ^ 0001 => 1010 => 10
//На 6 строке: num1 = num1 ^ num2 => 1011 ^ 1010 => 0001 => 1
//

7) Использование побитового исключающего НЕ ИЛИ

function swapWithXNOR(num1,num2){
  console.log(num1,num2)

  num1 = ~(num1^num2);
  num2 = ~(num1^num2);
  num1 = ~(num1^num2);

  console.log(num1,num2)
}

//Попробуйте отрицательные значения
swapWithXNOR(10,1)

//4-ех битное представление 10 -> 1010
//4-ех битное представление 1 -> 0001
//На 4 строчке:
num1 = ~(num1 ^ num2) => ~(1010 ^ 0001) =>~(1011) => ~11 => -12
//Так как мы получили отрицательное значение, нам необходимо конвертировать его в двоичное,
// инвертировать биты и прибавить единицу:
//-12 => 1100 => 0011 + 1 => 0100
//На 5 строчке:
//num2 = ~(num1 ^ num2) => ~(0100 ^ 0001) => ~(0101) => ~5 => -6
//-6 => 0110 => 1001 + 1 => 1010 => 10
//На 6 строчке:
//num1 = ~(num1 ^ num2) => ~(0100^ 1010) => ~(1110) => ~14 => -15
//-15 => 1111 => 0000 + 1 => 0001 => 1
//Это займет некоторое время, но мы получим обмен значений. Но, к сожалению, у этого способа будут те же проблемы, что и у метода с XOR. 
//Все плохо с числами с плавающей точкой и бесконечностями.

8) Использование присваивания внутри массива

function swapWithArray(num1,num2){
  console.log(num1,num2)
  num2 = [num1, num1 = num2][0];
  console.log(num1,num2)
swapWithArray(2.3,Infinity)
В нулевом индексе массива хранится num1, в 1 индексе мы присваиваем num1 num2 и, соответственно, храним num2. Затем мы просто обращаемся к 0 индексу, чтобы получить num1 и присвоить это значения num2. Таким образом мы может менять и целые числа, и числа с плавающей точкой, и бесконечности, и даже строки. 
Выглядит довольно аккуратно, но мало читабельно. Взглянем на похожий способ.

9) Использование деструктуризации ОК
let num1 = 23.45;
let num2 = 45.67;
console.log(num1,num2);
[num1,num2] = [num2,num1];
console.log(num1,num2);

10) Использование немедленно вызываемой функции (IIFE) ОК 
function swapWithIIFE(num1,num2){
  console.log(num1,num2)
  num1 = (function (num2){ return num2; })(num2, num2=num1)
  console.log(num1,num2)
}
swapWithIIFE(2.3,3.4)

