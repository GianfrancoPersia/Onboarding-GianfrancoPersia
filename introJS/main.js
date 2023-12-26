let myName = "Gianfranco"
console.log (myName)

let myLastName = "Persia"
console.log(myLastName)

let myAge = 22
console.log(myAge)

let myPet = "Tiger"
let petAge = 12

let nombreCompleto = `${myName} ${myLastName}`
console.log(nombreCompleto)

let presentationText = `${myName} 
${myLastName}
${myAge}
${myPet}
${petAge}
${nombreCompleto}`

console.log(presentationText)


let sumAges = myAge + petAge
console.log(sumAges)

let restAges= myAge - petAge
console.log(restAges)

let productAges= myAge * petAge
console.log(productAges)

let divisionAges = myAge - petAge
console.log(divisionAges)

let student = {
    firstName : "Juan",
    lastName : "Gomez",
    age: 20,
    height: 1.80,
    weight: 75
}

console.table(student)
console.table(student.firstName)
console.log(student.lastName)
console.log(student.age)
console.log(student.height)
console.log(student.weight)

let pet = {
    firstName : "Roco",
    age: "5",
    dogBreed: "Terranova",
    weight: 40,
    color: "Black"
}

console.table(pet)
console.table(pet.firstName)
console.log(pet.age)
console.log(pet.weight)
console.log(pet.dogBreed)
console.log(pet.color)

let fruta =["manzana", "naranja", "banana", "frutilla", "sandia"]
console.log(fruta)

console.log(fruta[0])
console.log(fruta[1])
console.log(fruta[2])
console.log(fruta[3])
console.log(fruta[4]);


let age = prompt("ingrese su edad")

if (age >= 18){
    console.log("I am Adult " + age)
}

let numero = [1,2,3,4,5]

console.log(numero)

console.log(numero[0])
console.log(numero[1])
console.log(numero[2])
console.log(numero[3])
console.log(numero[4]);


let padre = {
    nombre: "juan",
    edad: 50
}
let madre = {
    nombre: "roxana",
    edad: 48
}
let hijo = {
    nombre: "lucas",
    edad: 18
}
let hija = {
    nombre: "paula",
    edad: 16
}
let abuela = {
    nombre: "elsa",
    edad: 86
}

let familia = [padre,madre,hijo,hija,abuela]
console.log(familia)

console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])


let randomText = `${fruta[1]} ${numero[3]} ${familia[4].nombre}` 
console.log(randomText)