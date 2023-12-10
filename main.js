//1
let firsName = "Ярослав";
let lastName = "Белуш";
let total = firsName + " " + lastName;
document.write(total + " ");

//2
let a = 3;
let b = 5;
let plus = a+b;
document.writeln(plus + " ");
let min = a-b;
document.writeln(min + " ");
let umn = a*b;
document.writeln(umn + " ");
let del = a/b;
document.writeln(del + " ");
let ost = a%b;
document.writeln(ost + " ");

//3
let isTrue = true;
let isFalse = false;
let bool = isTrue&&isFalse;
document.writeln(bool);
let bool2 = isTrue||isFalse;
document.writeln(bool2);
let bool3 = !isTrue;
document.writeln(bool3); 

//4
let counter = 5;
counter++;
document.writeln(counter);
counter--;
counter--;
document.writeln(counter);

//5
let greeting = "Приветствую";
let name2 = "Ярослав.";
let message = greeting + " " + name2;
alert(message);

//6
let prefix = "Приветствую ";
let middle = "на ";
let suffix = "Сайте.";
let predl = prefix+middle+suffix;
document.writeln(predl);

//7
let num1 = 5;
let num2 = 15;
let result = `Результат: ${num1 + num2}`;
document.writeln(result);

//8
document.writeln("строка".toUpperCase());
document.writeln("СТРОКА".toLowerCase());

