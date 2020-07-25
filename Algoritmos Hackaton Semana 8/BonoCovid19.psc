Algoritmo BonoCovid19
	Definir Bonitos Como Entero
	Definir AñosExp Como Entero
	
	Escribir "Introducir Tiempo de Experiencia" 
	Leer AñosExp 
	
	si AñosExp >= 1 y AñosExp <= 5 
		Entonces Bonitos = AñosExp*100
		Escribir "El bono que le corresponde es de $", Bonitos
	SiNo
		Bonitos = 1000
		Escribir "El bono que le corresponde es de $" Bonitos
	FinSi
	
	
FinAlgoritmo
