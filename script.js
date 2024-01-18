// Объявите переменную с именем ‘myVar’ и присвойте ей значение 10. Выведите значение ‘myVar’ в div1.
let myVar = 10
document.getElementById("div1").innerHTML = myVar
console.log(myVar)


// Преобразуйте строку ‘123’ в число. Выведите результат в div2
let str = "123"
let num = parseInt(str)
document.getElementById("div2").innerHTML = num
console.log(num)


// Преобразуйте число 123 в строку. Выведите результат в div3.
let num1 = 123
let str1 = num.toString()
document.getElementById("div3").innerHTML = str1
console.log(str1)


// Проверьте, является ли значение переменной ‘myVar’ числом. Выведите результат в div4.
let check = typeof myVar
document.getElementById("div4").innerHTML = check
console.log(check)


// Преобразуйте логическое значение true в строку. Выведите результат в div5.
let value = true
let str2 = value.toString()
document.getElementById("div5").innerHTML = str2
console.log(str2)


// Преобразуйте строку ‘true’ в логическое значение. Выведите результат в div6
let str3 = "true"
let value1 = Boolean(str2)
document.getElementById("div6").innerHTML = value1
console.log(value1)


// Создайте объект с именем ‘myObj’, которая содержит поля ‘name’ и ‘age’. Выведите значение ‘myObj’ в div7.
let myObj = {name: "Tima", age: 16};
document.getElementById("div7").innerHTML = JSON.stringify(myObj, null, 2);
console.log(myObj)


// Проверьте, является ли значение переменной ‘myVar’ объектом. Выведите результат в div8.
let check1 = typeof myVar
document.getElementById("div8").innerHTML = check1
console.log(check1)


// Преобразуйте число 123.456 в строку, округлив его до двух знаков после запятой. Выведите результат в div9.
let num2 = 123.456
let str4 = num2.toFixed(2)
document.getElementById("div9").innerHTML = str4
console.log(str4)


// 123.456’ в число, округлив его до целого значения. Выведите результат в div10.
const str5 = "123.456";
const num3 = Math.round(parseFloat(str5));
document.getElementById("div10").innerHTML = num3;
console.log(num3)