Algoritmo MinorAge
	definir Person1 como caracter
	definir Person2 como caracter
	definir Person3 como caracter
	definir Age1 como entero
	definir Age2 como entero
	definir Age3 como entero
	
	Escribir "Escribir nombre de la primera persona"
	Leer Person1
	Escribir "Escribir edad de la primera persona"
	Leer Age1
	
	Escribir "Escribir nombre de la segunda persona"
	Leer Person2
	Escribir "Escribir edad de la segunda persona"
	Leer Edad2
	
	Escribir "Escribir nombre de la tercera persona"
	Leer Person3
	Escribir "Escribir edad de la tercera persona"
	Leer Edad3
	
	Si (Age1<Age2) & (Age1<Age3) entonces 
		escribir "La persona con menor edad es: ", Person1 " con ", Age1 " años"
	sino 
		si (Age2<Age1) & (Age2<Age3) entonces 
			escribir "La persona con menor edad es: ", Person2 " con ", Age2 " años"
		sino 
			si (Age3<Age1) & (Age3<Age2) Entonces
				escribir "La persona con menor edad es: ", Person3 " con ", Age3 " años"
			FinSi
		FinSi
	FinSi
	
FinAlgoritmo
