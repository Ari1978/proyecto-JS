const carritoDeSeguros = [];
const marcasDeAutos = [
    "Renault", "Ford", "Fiat", "Chevrolet", "Peugeot"
];
const tiposDePoliza = [
    { nombre: "básico", precio: 75000 },
    { nombre: "intermedio", precio: 82000 },
    { nombre: "full", precio: 102000 }
];
const serviciosExtras = [
    { nombre: "servicio mecánico", precio: 22000 },
    { nombre: "servicio de grua", precio: 15000 }
];

let precio = 0;
let precioFinal = 0;
let tipoDePoliza = "";
let seguirCotizando = true;



const ingresarDatosDelVehiculo = () => { 
    let marcaDeAuto = "";
    let anioDelAuto = "";
    let modeloDelAuto = "";

    // Solicitar los datos del vehículo
    while (marcaDeAuto === "" || anioDelAuto === "" || modeloDelAuto === "") {
        marcaDeAuto = prompt("Que marca de auto tenes?\nRenault\n Ford\n Fiat\n Chevrolet\n Peugeot");
        anioDelAuto = prompt("Ingrese el año del vehículo");
        modeloDelAuto = prompt("Ingrese el modelo del auto");

        if (marcaDeAuto === "" || anioDelAuto === "" || modeloDelAuto === "") {
            alert("Todos los campos son obligatorios. Por favor, ingrese todos los datos.");
        } else {
            alert("Su auto es un: " + marcaDeAuto + "\nEl año es: " + anioDelAuto + "\nEl modelo es: " + modeloDelAuto);
        }
    }

    // Solicitar el tipo de póliza
    do {
        tipoDePoliza = prompt("¿Qué tipo de seguro quieres contratar?\n Básico: $75.000\n Intermedio: $82.000\n Full: $102.000");
        tipoDePoliza = tipoDePoliza.toLowerCase().trim();
        
        if (tipoDePoliza === "básico") {
            precio = 75000;
            alert("Usted contrató el plan básico a: $" + precio);
        } else if (tipoDePoliza === "intermedio") {
            precio = 82000;
            alert("Usted contrató el plan intermedio a: $" + precio);
        } else if (tipoDePoliza === "full") {
            precio = 102000;
            alert("Usted contrató el plan full a: $" + precio);
        } else {
            alert("Opción no válida. Por favor, elija entre: Básico, Intermedio o Full.");
        }
    } while (tipoDePoliza !== "básico" && tipoDePoliza !== "intermedio" && tipoDePoliza !== "full");

    precioFinal = precio;

    // Agregar servicios extras
    let extras = "";
    while (extras !== null) {
        extras = prompt("¿Desea agregar a su plan un servicio extra?\n Servicio mecánico: $22.000\n Servicio de Grua: $15.000\n (Deje en blanco para terminar)");

        if (extras !== null && extras.trim() !== "") {
            extras = extras.trim().toLowerCase();

            switch (extras) {
                case "servicio mecánico":
                    precioFinal += 22000;
                    break;
                case "servicio de grua":
                    precioFinal += 15000;
                    break;
                default:
                    alert("Opción no válida.");
                    break;
            }
        }
    }
};

const seguroDelVehiculo = () => {
    alert("Bienvenidos a Seguros Norte");
    alert("Aqui contrataras el mejor seguro para tu auto!");

    ingresarDatosDelVehiculo();
    
    alert("Tipo de póliza seleccionada: " + tipoDePoliza + "\nMonto total a pagar: $" + precioFinal);
    
    seguirCotizando = confirm("¿Desea contratar otro seguro?");
    
    if (seguirCotizando) {
        precioFinal = 0;
        tipoDePoliza = ""; 
        seguroDelVehiculo(); 
    }
};

// Iniciar el proceso
seguroDelVehiculo();