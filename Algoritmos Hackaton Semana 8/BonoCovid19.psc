Algoritmo BonoCovid19
	Definir Bonitos Como Entero
	Definir A�osExp Como Entero
	
	Escribir "Introducir Tiempo de Experiencia" 
	Leer A�osExp 
	
	si A�osExp >= 1 y A�osExp <= 5 
		Entonces Bonitos = A�osExp*100
		Escribir "El bono que le corresponde es de $", Bonitos
	SiNo
		Bonitos = 1000
		Escribir "El bono que le corresponde es de $" Bonitos
	FinSi
	
	
FinAlgoritmo
