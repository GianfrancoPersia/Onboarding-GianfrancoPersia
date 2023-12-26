// 1 2- bajo

function agregar() {
    let resultado = 100 * 20;
    console.log("El resultado de 100 x 20 es: " + resultado);
}

agregar();


// 3 4-
function agregar(num1,num2) {
    resultado = num1 * num2;
    console.log("El resultado es: " + resultado);
}
let num1 = 100
let num2 = 20

agregar(num1,num2);


// 5-


function agregar(num1,num2) {
    resultado = num1 * num2;
    return resultado
}
num1 = 100
num2 = 20

console.log(agregar(num1,num2));


// 6-

const multiplicacion = function (num1,num2) {
    resultado = num1 * num2;
    return resultado
}

console.log(multiplicacion(100,20));



// medio 1-

function saludar(nombre){
    console.log (`<----| Hola ${nombre} ¿Como estas? |---->`)
}

let nombre = prompt("ingresa tu nombre")

saludar(nombre)


// 2- 

const multiplicacion2 = function(num1,num2){
    resultado = num1*num2
    return resultado
}

num1 = prompt("ingresa un numero para multiplicar")
num2 = prompt("ingresa el segundo numero para multiplicar")

console.log (multiplicacion2(num1,num2))

// 3-


function areaTriangulo(base,altura){
    let area=base*altura
    return area
}

let base= prompt("ingrese la base del triangulo")
let altura=prompt("ingrese la altura del triangulo")

console.log("el area del triangulo es = " + areaTriangulo(base,altura))


// 4-

function perimetroTriangulo(lado1,lado2,lado3){
    let perimetro = lado1+lado2+lado3
    return perimetro
}

let lado1= parseInt(prompt("ingrese el lado 1 del triangulo"))
let lado2= parseInt(prompt("ingrese el lado 2 del triangulo"))
let lado3= parseInt(prompt("ingrese el lado 3 del triangulo"))

console.log("el perimetro del triangulo es = " + perimetroTriangulo(lado1,lado2,lado3))


// 5-

function isAnAdult(edad){
    if (edad >= 18){
        return("Eres mayor de edad")
    }else{
        return("Sos menor de edad")
    }
}
let edad = prompt("ingresa tu edad")
console.log(isAnAdult(edad))



// alto 1-
let impuesto= 0

function calcIimpuesto(ingresos){
    if (ingresos <= 10000){
        impuesto = ingresos * 0.1
        return impuesto
    }else if (ingresos > 10000 && ingresos <= 20000){
        impuesto = ingresos * 0.15
        return impuesto
    }else{
        impuesto = ingresos * 0.2
        return impuesto
    }
}

console.log(calcIimpuesto(12000))


// 2-

function diaHabil(numeroDia) {
    switch (numeroDia) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Es un día hábil";
        case 6:
        case 7:
            return "Es fin de semana";
        default:
            return "Error. Debe estar entre 1 y 7.";
    }
}

console.log(diaHabil(5))


// 3-
function informacionPersonal() {
    let nombre = prompt("Ingrese su Nombre:");

    if (!nombre) {
        console.error("Error: El nombre no puede estar vacío.");
        return;
    }

    let apellido = prompt("Ingrese su Apellido:");

    if (!apellido) {
        console.error("Error: El apellido no puede estar vacío.");
        return;
    }

    let edad = prompt("Ingrese su Edad:");

    if (isNaN(edad) || edad === "") {
        console.error("Error: La edad debe ser un número válido.");
        return;
    }

    let informacionPersonal = {
        nombre: nombre,
        apellido: apellido,
        edad: parseInt(edad)
    };

    console.log("Información Personal:");
    console.log(informacionPersonal);
}

informacionPersonal();


// 4-
function saludar(nombre) {
    return `Hola, mi nombre es ${nombre}`;
}

function calcularEdad(anioNacimiento, anioActual) {
    return anioActual - anioNacimiento;
}

function presentarUsuario(nombre, anioNacimiento, anioActual) {
    let saludo = saludar(nombre);

    let edad = calcularEdad(anioNacimiento, anioActual);

    let mensajePresentacion = `${saludo}. Tengo ${edad} años.`;

    alert(mensajePresentacion);
}

presentarUsuario("Lucas", 2001, 2023);




