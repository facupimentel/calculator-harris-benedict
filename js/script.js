class Planilla {
    constructor(nombre, sexo, peso, altura, edad, bmrResultado, kcal) {
        this.nombre = nombre,
            this.sexo = sexo,
            this.peso = peso,
            this.altura = altura,
            this.edad = edad,
            this.metabolismoBasal = bmrResultado,
            this.objetivo = kcal
    }
}


let nombre, sexo, peso, altura, edad, bmrResultado, objetivo, kcal
let resultados = []

const datosUsuario = () => {
    do {
        nombre = prompt("ingresa tu nombre").toLowerCase()
    } while (nombre === "" || nombre === null)

    do {
        sexo = prompt("ingresa tu sexo: masculino/femenino").toLowerCase()
    } while (sexo !== "masculino" && sexo !== "femenino")

    do {
        peso = parseFloat(prompt("ingresa tu peso en kg"))
    } while (isNaN(peso) || peso === "" || peso === null)

    do {
        altura = parseFloat(prompt("ingresa tu altura"))
    } while (isNaN(altura) || altura === "" || altura === null)

    do {
        edad = parseFloat(prompt("ingresa tu edad"))
    } while (isNaN(edad) || edad === "" || edad === null)

}


function bmr(sexo, peso, altura, edad) {
    let bmrValue
    if (sexo === "masculino") {
        bmrValue = 88.36 + (13.7 * peso) + (5.0 * altura) - (6.7 * edad)
    } else if (sexo === "femenino") {
        bmrValue = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * edad)
    } else {
    }

    return bmrValue
}

const resultadoBmr = () => {
    bmrResultado = Math.round(bmr(sexo, peso, altura, edad))
    alert("Tu metabolismo basal es de: " + bmrResultado + " kcal")
    alert("para mantener tu peso es de: " + (bmrResultado + 500) + "kcal")
    console.log("Metabolismo Basal: " + bmrResultado + " kcal")

}

const tuObjetivo = () => {

    do {
        objetivo = prompt("ingresa tu objetivo: bajar/mantener/subir").toLowerCase()
    } while (objetivo !== "bajar" && objetivo !== "mantener" && objetivo !== "subir")

    switch (objetivo) {
        case "bajar":
            kcal = bmrResultado + 500 - 300
            alert("tu objetivo para bajar es: " + kcal + "kcal")
            console.log("tu objetivo para bajar es: " + kcal + "kcal")
            break
        case "mantener":
            kcal = bmrResultado + 500
            alert("para mantener serian metabolismo basal: " + kcal + " kcal")
            console.log("para mantener seria tu metabolismo basal: " + kcal + " kcal")
            break
        case "subir":
            kcal = bmrResultado + 1000
            alert("tu objetivo para subir son: " + kcal + "kcal")
            console.log("tu objetivo para subir son: " + kcal + "kcal")
            break
        default:
            alert("opción incorrecta")
            break
    }

    const planilla = new Planilla(nombre, sexo, peso, altura, edad, bmrResultado, kcal)
    resultados.push(planilla)
}

let mostrarResultados = document.getElementById("modal-resultados")

const verResultados = () => {
    if (resultados.length === 0) {
        alert("no hay estudios hechos")
    } else {
        resultados.forEach((resultado) => {
            let contenedor = document.createElement("div")
            contenedor.innerHTML = `<h2>TUS DATOS</h2>
                                        <h3>nombre: ${resultado.nombre}</h3>
                                        <h3>sexo: ${resultado.sexo}</h3>
                                        <h3>peso: ${resultado.peso} kg</h3>
                                        <h3>altura: ${resultado.altura} cm</h3>
                                        <h3>edad: ${resultado.edad} años</h3>
                                        <h3>metabolismo: ${resultado.kcal}</h3>
                                        <h3>objetivo: ${resultado.objetivo} kcal</h3>`
            mostrarResultados.appendChild(contenedor)
            console.log(resultados)
            alert("tus resultados se encuentran impresos en pantalla, al salir los podras ver")
        })
    }
}


let menu = parseFloat(prompt("1. realizar calculo \n2. ver resultados \n3. salir"))

while (menu !== 3) {
    switch (menu) {
        case 1:
            datosUsuario()
            resultadoBmr()
            tuObjetivo()
            break
        case 2:
            verResultados()
            break
        default:
            alert("opcion incorrecta")
            break
    }

    menu = parseFloat(prompt("1. realizar calculo \n2. ver resultados \n3. salir"))
    if (menu == 3) {
        alert("gracias, hasta luego")
    }

}