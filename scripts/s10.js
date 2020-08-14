function show_hide(btn)
{
  var b= btn;
  var s=document.getElementById("section-ans");
  var s2 = document.getElementById('section-ex');
  var s3=document.getElementById("btnback");
  var s4=document.getElementById("title");
  if(s.style="none")
  {
    s.style.display="block";
    s2.style.display="none";
    s3.style.display="block";
    s4.style.display="none";
    switch(btn) {
    case "btn1":
    var name = prompt("Ingrese su nombre");
    var lastName= prompt("Ingrese su apellido");
    var age = Number(prompt("Edad"));
    ejercicio1(name,lastName,age);
    break;
    case "btn2":
    var n1 = Number(prompt("Ingrese primer número"));
    var n2 = Number(prompt("Ingrese segundo número"));
    var n3= Number(prompt("Ingrese tercer número"));
    ejercicio2(n1,n2,n3);
    break;
    case "btn3":
    var r = typeof(prompt("Ingresa lo que desees"));
    if(Number.isInteger(r))
    document.getElementById("neon").innerHTML="Ingresaste un: " + ejercicio3(Number(r));
    else
    document.getElementById("neon").innerHTML="Ingresaste un: " + ejercicio3(r);
    break;
    case "btn4":
    var index= Number(prompt("Ingresa la cantidad de argumentos que deseas sumar"));
    var sum=0;
    var number=0;
    for (i = 0; i < index; i++) {
      number= Number(prompt("Ingresa un valor"));
      sum = sum + number;
    }
    document.getElementById("neon").innerHTML="La suma es: " + sum;
    break;
    case "btn5":
      document.getElementById("neon").innerHTML="El resultado es : " + ejercicio5(1,'red',2,'coding',3,4,5,6,7,8,9,'awesome');
    break;
    case "btn6":
      document.getElementById("neon").innerHTML="El resultado es : " + ejercicio6(1,2,3,4,5);
    break;
    case "btn7":
    document.getElementById("neon").innerHTML="El resultado es : " + ejercicio7(1,2,3,4,5,6,7,8,9,0);
    break;
    case "btn8":
      document.getElementById("neon").innerHTML="El resultado es : " + ejercicio8([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]);
    break;
    case "btn9":
      document.getElementById("neon").innerHTML="El resultado es : " + ejercicio9("hello","l");
    break;
    case "btn10":
      document.getElementById("neon").innerHTML="El resultado es : " + ejercicio10({a:1,b:2});
    break;
    case "btn11":
    document.getElementById("neon").innerHTML="El resultado es : " + ejercicio11({ name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 });
    break;
    case "btn12":
    document.getElementById("neon").innerHTML="El resultado es : " + ejercicio12({ name: "Steve" },
      { name: "Mike" },
      { name: "John" }
  );
    break;
    case "btn13":
    document.getElementById("neon").innerHTML="El resultado es : " + ejercicio13({likes: 2,dislikes: 3,followers: 10});       
    break;
    case "btn14":
    var n1 = Number(prompt("Ingrese un número"));
    document.getElementById("neon").innerHTML="El resultado es : " + ejercicio14(n1);
    break;
    case "btn15":
    document.getElementById("neon").innerHTML="El resultado es : " + ejercicio15(2, 3, 1, 0);
    break;
    case "btn16":
    document.getElementById("neon").innerHTML="El resultado es : " + ejercicio16(5);
    break;
    case "btn17":
    document.getElementById("neon").innerHTML="El resultado es : " + ejercicio17(1,2,3,4,5);
    break;
    case "btn18":
    document.getElementById("neon").innerHTML="El resultado es : " + ejercicio18(1, 2, 3, "x", "y", 10);
    break;
    case "btn19":
    document.getElementById("neon").innerHTML="El resultado es : " + ejercicio19(25,4);
    break;
    case "btn20":
    document.getElementById("neon").innerHTML="El resultado es : " + ejercicio20('hola cat1 que tal cat2', /cat/g, 'dog');
    break;
    case "btn21":
    document.getElementById("neon").innerHTML="El resultado es : " + ejercicio21('I am finding Nemo !');
    break;
    case "btn22":
    document.getElementById("neon").innerHTML="El resultado es : " + ejercicio22('Computer');
    break;
        default:
          alert(`no se encontró`);
      }
}
else
  {
    s.style.display="none";
    s2.style.display="block";
    s3.style.display="none";
  }
}
function show_hide_itself()
{
  var s=document.getElementById("section-ans");
  var s2 = document.getElementById('section-ex');
  var s3=document.getElementById("btnback");
  var s4=document.getElementById("title");
  s.style.display="none";
  s2.style.display="grid";
  s3.style.display="none";
  s4.style.display="block";
}

function ejercicio1(name,lastName,age)
{
  document.getElementById("neon").innerHTML="Hola tu nombres es "+ name + " " + lastName + ' y tu edad es ' + age + ' años';

}

function ejercicio2(...numbers)
{
  var result = numbers.map(x=>x*x*x).reduce((a,b)=>a+b,0);
  document.getElementById("neon").innerHTML="El resultado es : " + result; 
}

function ejercicio3(r)
{
 return typeof(r);
}

function ejercicio5(...values) {
  return values.filter(x => typeof (x) != 'string')
}

function ejercicio6(...numbers)
{
let arr = [(Math.min.apply(null, numbers)), Math.max.apply(null, numbers)];
return arr;
}

function ejercicio7(...numbers){
return '(' + numbers.splice(0, 3) + ') ' + numbers.splice(0, 3) + ' - ' + numbers.splice(0);
}

function ejercicio8(arr) {
  let arrMax = [];
  arr.forEach((x) => arrMax.push(Math.max.apply(null, x)));
  return arrMax
}

function ejercicio9(word, letter) {
  return 'the first ' + letter + ' has index: ' + word.indexOf(letter) + ', and the last ' + letter + ' has index ' + word.lastIndexOf(letter)
}

function ejercicio10(object)
{
  let arrKeys = Object.keys(object)
  let arrValues = Object.values(object)
  let arr = []
  arrKeys.forEach((object, index) => arr.push([object, arrValues[index]]))
  return arr
}

function ejercicio11(...arr) {
  return arr.map((x) => x.budget).reduce((a, b) => a + b, 0);
}

function ejercicio12(...arr) {
  return arr.map(x => x.name)
}

function ejercicio13(obj) {
  let arrKeys = Object.keys(obj)
  let arrValues = Object.values(obj)                    
  let arr = []
  arrKeys.forEach((obj, index) => arr.push([obj, arrValues[index]]))
  return arr
}

function ejercicio14(number) {
  let arr = [];
  for (cont = 1; cont <= number; cont++) {
      arr.push(cont);
  }
  return arr.map(x => x * x).reduce((a, b) => a + b, 0);
}

function ejercicio15(...arr) {
  let length = arr.length;
  return arr.map(x => x * length);
}

function ejercicio16(number) {
  let arr = [];
  for (cont = number; cont >=0; cont--) {
      arr.push(cont);
  }
  return arr ;
}

function ejercicio17(...numbers) {
  let min = Math.min.apply(null, numbers);
  let max = Math.max.apply(null, numbers);
  return 'the smallest number is: ' + min + ', the biggest number is: '+max+' the difference is: '+(max-min);
}

function ejercicio18(...values) {
  return values.filter(x => typeof (x) != 'string')
}

function ejercicio19(number,times) {
  let arr = [];
  for (cont = 1; cont <=times; cont++) {
      arr.push(number);
  }
  return arr ;
}

function ejercicio20(value, old, new_) {
  return value.replace(old, new_);
}

function ejercicio21(value) {
  return  'I found nemo at: '+value.search('Nemo');
}

function ejercicio22(value) {
  let length = value.length;                      
  return value.substring(0, length - 1) + value.substring(length - 1).toUpperCase();
}
