// 1-
let numero1 = 4
let numero2 = 5

if (numero1 > numero2){
    console.log(numero1)
}
else{
    console.log(numero2) 
}

// 2-
let num1 = prompt("ingrese el numero 1")
let num2 = prompt("ingrese el numero 2")

if (num1 > num2){
    console.log(num1 + " es mayor")
}else if(num1 == num2){
    console.log("los numero son iguales")
}
else{
    console.log(num2 + " es mayor") 
}

// 3-

if (numero1 == numero2){
    console.log("Los numeros son iguales")
}else{
    console.log("Los numeros son diferentes")
}

// 4-

let fecha1 = "2018-9-2"
let fecha2 = "2023-7-5"

if (fecha1 > fecha2){
    console.log(`La fecha ${fecha1} es mayor que ${fecha2}`)
}else if (fecha1 == fecha2){
    console.log("Las fechas son iguales")
}else{
    console.log(`La fecha ${fecha2} es mayor que ${fecha1}`)
}

// 5-

fecha1 = "2017-4-2"
fecha2 = "2016-2-2"
if (fecha1 > fecha2){
    console.log(`La fecha ${fecha1} es mayor que ${fecha2}`)
}else if (fecha1 == fecha2){
    console.log("Las fechas son iguales")
}else{
    console.log(`La fecha ${fecha2} es mayor que ${fecha1}`)
}

// 6-

num1 = 5
num2 = 7
let num3 = 9

if (num1 > num2 && num1 > num3){
    console.log(`El numero ${num1} es el mas grande`)
}else if (num2 > num1 && num2 > num3){
    console.log(`El numero ${num2} es el mas grande`)
}else{
    console.log(`El numero ${num3} es el mas grande`)
}

// medio 1-
let interruptor = prompt("ingrese un color: rojo, azul, verde")
switch (interruptor) {
    case interruptor="rojo":
        console.log("El color de la pasión")
        break;
    case interruptor="azul":
        console.log("El color del ma")
        break;
    case interruptor="verde":
        console.log("El color de la naturaleza")
        break;
    default:
        console.log ("El color ingresado fue incorrecto")
        break;
}

// 2-

num1 = parseFloat(prompt("Ingrese el primer valor de 1 a 100"));
num2 = parseFloat(prompt("Ingrese el segundo valor de 1 a 100"));

let operacion = prompt("Ingrese la operación: suma, resta, multiplicación, división");

if (num1 >= 1 && num1 <= 100 && num2 >= 1 && num2 <= 100) {
    switch (operacion) {
        case "suma":
            console.log(`La suma de ${num1} y ${num2} es: ${num1 + num2}`);
            break;
        case "resta":
            console.log(`La resta de ${num1} y ${num2} es: ${num1 - num2}`);
            break;
        case "multiplicacion":
            console.log(`La multiplicación de ${num1} y ${num2} es: ${num1 * num2}`);
            break;
        case "division":
            if (num2 !== 0) {
                console.log(`La división de ${num1} y ${num2} es: ${num1 / num2}`);
            } else {
                console.log("No se puede dividir por cero.");
            }
            break;
        default:
            console.log("Ingrese suma, resta, multiplicación o división.");
    }
} else {
    console.log("Los valores deben estar en el rango de 1 a 100.");
}

// 3-

let persona1 = {
    nombre: Juan,
    edad: 39,
    altura: 1.69
}
let persona2 = {
    nombre: Gonzalo,
    edad: 20,
    altura: 1.80
}

if (persona1.altura > persona2.altura && persona1.edad > persona2.edad){
    console.log(`${persona1} es mas alto y mayor que ${persona2}`)
}else if (persona1.altura > persona2.altura && persona1.edad < persona2.edad){
    console.log(`${persona1} es mas alto pero menor que ${persona2}`)
}else if (persona1.altura < persona2.altura && persona1.edad > persona2.edad){
    console.log(`${persona1} es mas petiso pero mayor que ${persona2}`)
}else{
    console.log(`${persona2} es mas alto y mas grande que ${persona1}`)
}

// 4-

nombre = prompt ("ingrese su nombre")
edad = prompt ("ingrese su edad")
let altura = prompt ("ingrese su altura en cm")
let vision = prompt ("califique su vision del 1 al 10")

if (edad >= 18 && altura >= 110 && vision >=8){
    console.log("Estas calificado para conducir")
}else{
    console.log("No estas calificado")
}


// 5-

edad=parseInt(prompt("ingresa tu edad"))

switch (true) {
    case (edad>0 && edad<=12):
        console.log("infantil")
        break;20
    case (edad>=13 && edad<18):
        console.log("adolecente")
        break;
    case (edad>=19 && edad<45):
        console.log("joven")
        break;
    case (edad>=45 && edad<100):
        console.log("mayor")
        break;
    case (edad<=100):
        console.log("¿Es realmente tan viejo? ")
        break;

    default:
        console.log("ingrese una edad")
        break;
}

// 6-

let user = prompt("Ingrese un número (1 a 3):");
let number = parseInt(user);

if (number >= 1 && number <= 3) {
  console.log(`1: El número ingresado es  ${number}`);
  console.log(`2: El doble del número ingresado es  2*${number}`);
  console.log(`3: El triple del número ingresado es 3*${number}`);
} else {
  console.log("El valor no está permitido");
}

// alto 1-

let nombreCliente = prompt("Ingresa tu nombre")
let pase = prompt("Ingresa tu pase")
let entrada = prompt("Quieres utilizar tu entrada? responde con si o no")

if(nombreCliente == "gianfranco" || pase == "vip" ){
    console.log("Bienvenido")


}else if (entrada == "si"){
    let usarEntrada = prompt("Quieres utilizar tu entrada? responde con si o no")
    if(usarEntrada == "si"){
        console.log("Bienvenido")
    }else{
        console.log("Adios")
    }

}else{
    let comprarEntrada = ("Quieres comprar una entrada? (si o no)")
    if(comprarEntrada=="si"){
        let confirmarCompra = parseFloat(prompt("Cuánto dinero tienes disponible?" ))
        if (confirmarCompra==1000){
            console.log("Bienvenido")
        }else{
            console.log("no tienes dinero suficiente, Adios ")
        }
    }else{
        console.log("Adios")
    }
}


