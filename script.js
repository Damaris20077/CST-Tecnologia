// MODELOS DE CELULARES EN VENTA

const celulares = {

    Samsung: [
        "Samsung Galaxy A16",
        "Samsung Galaxy A26",
        "Samsung Galaxy A36",
        "Samsung Galaxy A56",
        "Samsung Galaxy S25"
    ],

    Xiaomi: [
        "Redmi 14C",
        "Redmi Note 14 Pro",
        "Redmi Note 14"
    ],

    POCO: [
        "POCO X7 Pro",
        "POCO X7"
    ],

    Motorola: [
        "Moto G15",
        "Moto G35",
        "Moto G75"
    ],

    Honor: [
        "Honor X6c",
        "Honor X8c",
        "Honor 400 Lite"
    ],

    Apple: [
        "iPhone 13",
        "iPhone 14"
    ]

};


// CONECTAR SELECTS

const marca = document.getElementById("marca");
const modelo = document.getElementById("modelo");


// CAMBIAR MODELOS SEGÚN LA MARCA

marca.addEventListener("change", function(){

    modelo.innerHTML =
    '<option value="">Selecciona un modelo</option>';


    const listaModelos = celulares[this.value];


    if(listaModelos){

        listaModelos.forEach(function(celular){

            const opcion = document.createElement("option");

            opcion.value = celular;

            opcion.textContent = celular;

            modelo.appendChild(opcion);

        });

    }

});


// MENSAJE DE ENVÍO

function mostrarMensaje(event){

    event.preventDefault();

    document.getElementById("mensajeExito").innerHTML =
    "✅ Solicitud enviada correctamente. Un asesor se comunicará contigo.";

}