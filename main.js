//alert("Esto es un alerta")

//prompt("te gusta mmás marvel o dc"), 

//confirm("sex and the city, es parte de DC")


//variables
    // las variables guardan datos 
        //los datos pueden ser números y "strings" hilos o cadenas de texto


//let edad //aquí se declara la variable

//edad = 33 //asignar valor a una variable 

//let anioDeNacimiento = 1992  //se define la variable y se le asigna un valor 

//alert (edad)  //para ver la variable

//edad = 34

//alert (edad)
// las variables guardan DATOS
//1.números
//2."strings" cadenas de texto 
//3. Concatenacipin 
// Operaciones aritméticas con números 



let respuestaDelusuario= prompt("decime tu nombre")

alert(respuestaDelusuario)

//las variables recolectadas se guardan en el navegador 

let nombre="malena " 
let apellido= "rey"

let nombrecompleto= nombre + apellido 

alert(nombrecompleto)

let edadDelUsuarlio = prompt ("Cuantos años tenes?")

alert("Naciste en el año " + 2020 - edadDelUsuarlio)

//también se pueden hacer las operaciones aritméticas báscias 
//se puede concatenar texto y variables

//hay tres maneras de declarar variables
//1.- let ---> permite cambiar su valor
//2.  Const -->no se puede cambiar el valor en el futuro 
//3. var---> no la usamos nunca pero es igual a let porque se puede cambiar el valor de la variable despúes.
//JS distingue entre mayúsculas y minusculas, la costumbre es usar minúsculas si es una variable conformada de más de una palabra se usa el camelCase
//UPERCASE_DEL_USUARIO separado con guiones bajos se usa cuando se quiere poner atención con la variable
//palabras reservadas: let, const, var, alert
// se pueden crear muchas variables a la vez ej. 

let nombre. edad. domicilio

//valor booleano==> true, false, SON MUY IMPORTANTES EN ESTRUCTURAS CONDICIONALES

//para guardar variables también se puede hacer en la consola
//console.log es una herramienta del programador 
//las strings pueden ser declaracas con comillas dobles "", o comillas simples ' (alt+)
console.log ("Hola, chicas.")

//Uso de las comillas mágicas ` se recomienda que la utilicemos para programar porque podemos hacer saltos de línea y ademmás podemos introducir variables 

//ejemplo del uso de template strings/ las comiilas mágicas 

let nombre = "malena"

let apellido = "Rey"

let mensaje = "Hola, " + nombre + " " + apellido + ", bienvenida a Ada"

let mensajeConComillasMagicas = `Hola, ${nombre} ${apellido}, bienvenida a Ada`

//operadores de comparación me permiten comparar los valores de dos variables y la respuesta es un booleano ej

let esMayro = anioDeNacimiento > edad 

let esMenro =  anioDeNacimiento < edad 

console.log (esMayor)

console. log (esMenor)

//un prompt siempr devuelve un string 
//typeof===> es la palabra reservada de js para saber qué tipo de dato es 


//como convertir un string a  número 

let edad= prompt("Decime tu edad")

let edadComoNumero= Number(edad)

const anioDeNacimiento = 2020 -edadComoNumero

alert(`Naciste en el año ${anioDeNacimiento}`)

// se puede coercionar una variable a booleano