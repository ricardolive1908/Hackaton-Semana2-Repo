


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
  alert(`El area de la circunferencia es: ${area}`);
}

function salary(){
  var horas = Number (prompt("Ingrese cantidad de horas trabajadas"));
  var sueldo = 0; 
  var horaHombre= 5;
  var i = 0;
  while (i < 6) {
    var sueldoDiario = horas * horaHombre;
    sueldo = sueldo + sueldoDiario;
    i++;
  };
  alert(`Su sueldo semanal es: ${sueldo}`);
}

function telas(){
  var tela= Number(prompt("Ingrese la cantidad de tela en metros"));
  var pulgadas = tela/0.0254;
  alert(`La medida ingresada equivale a ${pulgadas}`);
}

function exchange(){
  var dinero = Number(prompt("Ingrese la cantidad de dinero que desea cambiar a dólares"));
  var Dolares = dinero/3.52;
  alert(`S/.${dinero} soles es igual a ${Dolares} dólares americanos`);
}

function yearofbirth(){
  var year= Number(prompt("Por favor escriba en qué año nació"));
  var age = 2020-year;
  if(age>=18 && age<=50)
  alert(`Su edad es ${age} y está apto para postular al puesto`);
  else
  alert(`Su edad es ${age} y no está apto para postular al puesto`);
}

function bonus(){
  var experience= Number(prompt("Por favor escriba su tiempo de experiencia"));
  if(experience>=1 && experience <= 5)
  {
    var bonus = experience*100;
    alert(`El bono que le corresponde por ${experience} años es de S/.${bonus} soles`);
  }
  else
  {
    bonus=1000;
    alert(`El bono que le corresponde por ${experience} años es de S/.${bonus} soles`);
  }
}

function teacher_salary(){
  var year= Number(prompt("Por favor ingrese el año para calcular su salario"));
  var sueldo=1500;
  sueldo = 1500 + ((1500*1.1))*year;
  alert(`Su salario incrementó de S/.1500 a S/.${sueldo} en ${year} años de trabajo`);
}

function minor_age(){
  var name1 = prompt("Ingrese el nombre de la primera persona");
  var age1 = Number(prompt("Ingrese la edad de la primera persona"));
  var name2 = prompt("Ingrese el nombre de la segunda persona");
  var age2 = Number(prompt("Ingrese la edad de la segunda persona"));
  var name3 = prompt("Ingrese el nombre de la tercera persona");
  var age3 = Number(prompt("Ingrese la edad de la tercera persona"));
  if (age1<age2 && age1<age3)
  {
    alert(`${name1} es la persona de menor edad y su edad es ${age1}`);
  }
  else if (age2<age1 && age2<age3)
  {
    alert(`${name2} es la persona de menor edad y su edad es ${age2}`);
  }
  else
  alert(`${name3} es la persona de menor edad y su edad es ${age3}`)
}

function n_notes(){
  var cantidad = Number(prompt("Indique cuantas notas desea evaluar"));
  var i;
  var note;
  for (i = 0; i < cantidad; i++) {
    note = Number(prompt("Ingrese la nota"));
    var approve=0;
    var disapprove=0;
    if(note<11)
    {disapprove=disapprove+1;}
    else if (note>10)
    {approve=approve+1;}
}
  alert(`La cantidad de aprobados es ${approve} y la cantidad de desaprobados es ${disapprove}`);
}

