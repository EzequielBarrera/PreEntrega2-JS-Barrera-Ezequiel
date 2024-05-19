// Clase constructora de empleados
class Empleado {
    constructor(nombre, edad, sector, id, dni) {
        this.nombre = nombre
        this.edad = edad
        this.sector = sector
        this.id = id
        this.dni = dni
    }
}

//Creamos empleados
const Trabajador1 = new Empleado("Sofía", 20, "Desarrollo", 4125, 45195987)
const Trabajador2 = new Empleado("Simón", 24, "Producción", 5115, 53981380)
const Trabajador3 = new Empleado("Pedro", 21, "Testing", 6163, 12958573)
const Trabajador4 = new Empleado("Pedro", 22, "Producción", 5115, 23857283)
const Trabajador5 = new Empleado("Josefina", 20, "Desarrollo", 4125, 29353857)
const Trabajador6 = new Empleado("Julián", 26, "Testing", 6163, 91325732)

//Acá van guardados
const Empleados = [Trabajador1, Trabajador2, Trabajador3, Trabajador4, Trabajador5, Trabajador6]

//Tester de array funcional
console.log(Empleados)

//Menú interactivo
function Menu() {
    const Opciones = parseInt(prompt("¡Hola, bienvenido a SCorp.! \n------------------------------------\n¿Qué desea hacer? \n1. Crear empleado. \n2. Dar empleado de baja. \n3. Modificar datos de empleado. \n4. Consultar empleado. \n5. Ordenar sectores. \n6. Ver empleados. \n7. Filtrar por sectores \n8. Salir"))
    return Opciones
}

//Función "Crear empleado"
function CrearEmpleado() {
    let nombre = prompt("Ingrese el nombre")
    let edad = parseInt(prompt("Ingrese la edad"))
    let sector = parseInt(prompt("Ingrese el sector \n1. Desarrollo. \n2. Testing \n 3.Producción"))
    if (sector === 1) {
        sector = "Desarrollo"
    } else if (sector === 2) {
        sector = "Testing"
    } else if (sector === 3) {
        sector = "Producción"
    } else {
        alert("Por favor elija un número.")
        return sector
    }
    let id = parseInt(prompt("Ingrese el id del sector \nDesarrollo =  4125 \nProducción = 5115 \nTesting = 6163"))
    if (id != 4125 && id != 5115 && id != 6163 || (sector === "Desarrollo" && id === 5115) || (sector === "Desarrollo" && id === 6163)) {
        alert("Por favor, que las ID coincidan con su sector correspondiente.")
        return
    } else if (id != 4125 && id != 5115 && id != 6163 || (sector === "Producción" && id === 4125) || (sector === "Producción" && id === 6163)) {
        alert("Por favor, que las ID coincidan con su sector correspondiente.")
        return
    } else if (id != 4125 && id != 5115 && id != 6163 || (sector === "Testing" && id === 4125) || (sector === "Testing" && id === 5115)) {
        alert("Por favor, que las ID coincidan con su sector correspondiente.")
        return
    }
    let dni = parseInt(prompt("Ingrese el DNI del empleado"))
    const NuevoEmpleado = new Empleado(nombre, edad, sector, id, dni)
    Empleados.push(NuevoEmpleado)
    console.log(Empleados)
}

//Función "Dar empleado de baja"
function DarBaja() {
    let Buscador = parseInt(prompt("Ingrese el DNI del empleado a dar de baja."))
    let Busqueda = Empleados.find((DNI) => DNI.dni === Buscador)
    if (Busqueda !== undefined) {
        let Confirmacion = confirm("¿Quiere despedir a " + Busqueda.nombre + "?")
        if (Confirmacion) {
            let IndiceEmpleado = Empleados.indexOf(Busqueda)
            console.log("Usuario eliminado: " + Busqueda.nombre + "  --  DNI: " + Busqueda.dni)
            Empleados.splice(IndiceEmpleado, 1)
            console.log(Empleados)
        }
    }
}

//Función "Modificar datos de empleado"

function Modificar(){
    let Buscador = parseInt(prompt("Ingrese el DNI del empleado a editar"))
    let Busqueda = Empleados.find((DNI) => DNI.dni === Buscador)
    alert("Usted va a modificar los datos de " + Busqueda.nombre)
    if(Busqueda !== undefined){
        Busqueda.nombre = prompt("Modifique el nombre")
        Busqueda.edad = parseInt(prompt("Modifique la edad"))
        Busqueda.sector = parseInt(prompt("Ingrese el sector \n1. Desarrollo. \n2. Testing \n 3.Producción"))
        if (Busqueda.sector === 1) {
            Busqueda.sector = "Desarrollo"
        } else if (Busqueda.sector === 2) {
            Busqueda.sector = "Testing"
        } else if (Busqueda.sector === 3) {
            Busqueda.sector = "Producción"
        } else {
            alert("Por favor elija un número.")
            return Busqueda.sector
        }
        Busqueda.id = parseInt(prompt("Ingrese el id del sector \nDesarrollo =  4125 \nProducción = 5115 \nTesting = 6163"))
        if (Busqueda.id != 4125 && Busqueda.id != 5115 && Busqueda.id != 6163 || (Busqueda.sector === "Desarrollo" && Busqueda.id === 5115) || (Busqueda.sector === "Desarrollo" && Busqueda.id === 6163)) {
            alert("Por favor, que las ID coincidan con su sector correspondiente.")
            return
        } else if (Busqueda.id != 4125 && Busqueda.id != 5115 && Busqueda.id != 6163 || (Busqueda.sector === "Producción" && Busqueda.id === 4125) || (Busqueda.sector === "Producción" && Busqueda.id === 6163)) {
            alert("Por favor, que las ID coincidan con su sector correspondiente.")
            return
        } else if (Busqueda.id != 4125 && Busqueda.id != 5115 && Busqueda.id != 6163 || (Busqueda.sector === "Testing" && Busqueda.id === 4125) || (Busqueda.sector === "Testing" && Busqueda.id === 5115)) {
            alert("Por favor, que las ID coincidan con su sector correspondiente.")
            return
        }
    }
}

//Función "Consultar empleado"

function Consultar(){
    let Buscador = parseInt(prompt("Ingrese el DNI del empleado a consultar"))
    let Busqueda = Empleados.find((Empleado) => Empleado.dni === Buscador)
    alert(`Los datos de ${Busqueda.nombre} son: \nEdad: ${Busqueda.edad} \nDNI: ${Busqueda.dni} \nSector: ${Busqueda.sector} \nID del Sector: ${Busqueda.id}`)
}

//Función "Ordenar sectores"

function OrdenarArray(){
    Empleados.sort((a,b) => a.id - b.id)
}

//Función "Ver empleados"

function RevisarEmpleados(){
    for(let Empleado = 0; Empleado<Empleados.length; Empleado++){
        alert(`Nombre: ${Empleados[Empleado].nombre} \nEdad: ${Empleados[Empleado].edad} \nDNI: ${Empleados[Empleado].dni} \nSector: ${Empleados[Empleado].sector} \nID del sector: ${Empleados[Empleado].id}`)
    }
}

//Función "Filtrado por sector"

function Filtrado(){
    let Buscador = parseInt(prompt("Ingrese el ID del sector \n4125 = Desarrollo \nProducción = 5115 \n Testing = 6163"))
    let Busqueda = Empleados.filter((Empleado) => Empleado.id === Buscador)
    for(let Empleado of Busqueda){
        alert(`Datos del empleado en el ${Empleado.sector} \nNombre: ${Empleado.nombre} \nEdad: ${Empleado.edad} \nDNI: ${Empleado.dni}`)
    }
}

//Botón para iniciar sistema

let Boton = document.getElementById("Sistema")
Boton.addEventListener("click", ()=>{
    let Opciones = Menu()
    switch (Opciones) {
        case 1:
            CrearEmpleado()
            break
        case 2:
            DarBaja()
            break
        case 3:
            Modificar()
            break
        case 4:
            Consultar()
            break
        case 5:
            OrdenarArray()
            break
        case 6:
            RevisarEmpleados()
            break
        case 7:
            Filtrado()
            break
        case 8:
            alert("Adios")
            break
}
})