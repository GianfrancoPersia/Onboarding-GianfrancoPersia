// bajo 1-

let i = prompt("ingrese un numero")

if (i>=1 && i<=100){
    for ( i = i ; i >=1 ; i--){
        console.log(i)
    }
}


// 2-
let num = parseInt(prompt("Ingrese un número entre 1 y 10"));

if (num >= 1 && num <= 10) {
    console.log(`Tabla de multiplicar del ${num}:`);
    for (let i = 1; i <= 10; i++) {
        let resultado = num * i;
        console.log(`${num} x ${i} = ${resultado}`);
    }
} else {
    console.log("Error");
}


// 3-

suma = 0
num =parseInt(prompt("ingrese un numero"))

while (num != 0){
    suma+=num
    num =parseInt(prompt("ingrese un numero"))
}

console.log("la sumatoria de numeros es= " + suma)


// 4-

suma = 0
num = 1
do {
    num = parseInt(prompt("Ingrese un número (ingrese 0 para finalizar):"))
    suma += num
} while (num!== 0)

console.log(`La sumatoria es: ${suma}`)


// 5 6-

let persona = {
    nombre : "Jose",
    apellido: "Gomez",
    origen: "Mendoza",  
    estudios: "Ingenieria Informatica",
};
  
console.log("Keys de las propiedades del objeto");
for (let key in persona) {
    console.log(key);
}

console.log("Keys values de las propiedades del objeto")
for (let key in persona){
    console.log(persona[key])
}


// medio 1-

let numeroSecreto = suma
let sumatoria = 0
let intentos= 0
num = parseInt(prompt("ingrese un numero"))
while(num != numeroSecreto){
    intentos++
    if (num < numeroSecreto){
        console.log("el numero es menor que el numero secreto")
    }else{
        console.log("el numero es mayor que el numero secreto")
    }
    num = parseInt(prompt("ingrese un numero"))
}
console.log("Has acertado")


// 2- 

num = parseInt(prompt("Ingrese un número:"));

console.log(`Los divisores de ${num} son:`);

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        console.log(i);
    }
}


// 3-

function campana(){
    console.log("Ding Dong")
    return "Ding Dong"
}

let numRepetir = parseInt(prompt("ingrese el numero de veces que desee repetir"))
let resultado=""
for (let i=1 ; i <= numRepetir; i++){
    resultado += campana()
}


// 4- 

const dateLimit = "1997-8-3";
const fechas = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"];

const dateLimitObject = new Date(dateLimit);

console.log(`Fechas mayores o iguales a ${dateLimit}:`);
for (const fecha of fechas) {
    if (new Date(fecha) >= dateLimitObject) {
        console.log(fecha);
    }
}


// 5-

const colores = ["Rojo", "Verde", "Azul", "Violeta", "Marrón", "Negro", "Blanco"];
console.log("Colores:");
for (const color of colores) {
    console.log(color);
}

// 6- 

function imprimirColores(colores) {
    console.log("Colores:");
    for (const color of colores) {
        console.log(color);
    }
}

const colores1 = ["Rojo", "Verde", "Azul", "Violeta", "Marrón", "Negro", "Blanco"];
const colores2 = ["Cyan", "Magenta", "Amarillo", "Gris", "Naranja"];

imprimirColores(colores1);
console.log("----------------------");
imprimirColores(colores2);


// 7- 

// Arreglo de números
numeros = [5, 7, 1, 3, 50];

for (const numero of numeros) {
    const doble = numero * 2;
    console.log(`El número es ${numero} y su doble es ${doble}`);
}


// 8-

function presentarFamilia(familia) {
    for (const miembro of familia) {
        const mensaje = `Hola, soy ${miembro.nombre} ${miembro.apellido} (${miembro.miembro}) y tengo ${miembro.edad} años.`;
        console.log(mensaje);
    }
}
const familia = [
    {nombre: 'María', apellido: 'López', edad: 40, miembro: 'madre'},
    {nombre: 'Juan', apellido: 'Pérez', edad: 38, miembro: 'padre'},
    {nombre: 'Romina', apellido: 'Pérez', edad: 13, miembro: 'hija'},
    {nombre: 'Tomás', apellido: 'Pérez', edad: 10, miembro: 'hijo'}
];

presentarFamilia(familia);


// alto 1-

let sumaPares = 0;
let sumaImpares = 0;

let numeroIngresado = parseInt(prompt("Ingrese un número (ingrese 0 para finalizar):"));

while (numeroIngresado !== 0) {
    if (numeroIngresado % 2 === 0) {
        sumaPares += numeroIngresado;
    } else {
        sumaImpares += numeroIngresado;
    }
    numeroIngresado = parseInt(prompt("Ingrese otro número (ingrese 0 para finalizar):"));
}
console.log(`Suma de números pares: ${sumaPares}`);
console.log(`Suma de números impares: ${sumaImpares}`);


// 2-

const numeros = [15, 8, 3, 12, 20, 7, 25, 18, 10, 5];

let numeroMasGrande = numeros[0];

for (const numero of numeros) {
    if (numero > numeroMasGrande) {
        numeroMasGrande = numero;
    }
}
console.log(`El número más grande de la matriz es: ${numeroMasGrande}`);
