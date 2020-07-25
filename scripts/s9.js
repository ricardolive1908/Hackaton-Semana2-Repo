
function addition(){
  var n1 = Number(prompt("Ingrese el primer numero"));
  var n2 = Number(prompt ("Ingrese el segundo numero"));
  var suma = n1+n2;
  alert(`La suma de los números es: ${suma}`);
}

function average(){
  var n1 = Number(prompt("Ingrese el primer numero"));
  var n2 = Number(prompt ("Ingrese el segundo numero"));
  var n3 = Number(prompt("Ingrese el tercer numero"));
  var n4 = Number(prompt ("Ingrese el cuarto numero"));
  var promedio = (n1+n2+n3+n4)/4;
  alert(`El promedio es : ${promedio}`);
}

function area_rectangle(){
  var altura = Number(prompt("Ingrese la altura"));
  var base = Number(prompt("Ingrese base"));
  var area = (altura*base)/2;
  alert(`El area del rectángulo es: ${area}`);
}

function area_triangle(){
  var altura = Number(prompt("Ingrese la altura"));
  var base = Number(prompt("Ingrese base"));
  var area = (altura*base)/2;
  alert(`El area del triángulo es: ${area}`);
}

function area_circunference(){
  var radio = Number(prompt("Ingrese el radio"));
  var area = Math.PI* Math.pow(radio,2);
  alert(`El area del triángulo es: ${area}`);
}



