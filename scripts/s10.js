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
    ejercicio1(b);
    break;
    case "btn12":
    ejercicio1(b);
    break;
    case "btn13":
    ejercicio1(b);
    break;
    case "btn14":
    ejercicio1(b);
    break;
    case "btn15":
    ejercicio1(b);
    break;
    case "btn16":
    ejercicio1(b);
    break;
    case "btn17":
    ejercicio1(b);
    break;
    case "btn18":
    ejercicio1(b);
    break;
    case "btn19":
    ejercicio1(b);
    break;
    case "btn20":
    ejercicio1(b);
    break;
    case "btn21":
    ejercicio1(b);
    break;
    case "btn22":
    ejercicio1(b);
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