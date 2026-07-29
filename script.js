// MODELOS DE CELULARES POR MARCA

const celulares = {

    Samsung: [
        "Galaxy A16",
        "Galaxy A26",
        "Galaxy A36",
        "Galaxy A56",
        "Galaxy S25"
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




// CAMBIAR MODELOS SEGÚN MARCA

const marca = document.getElementById("marca");
const modelo = document.getElementById("modelo");



marca.addEventListener("change", function(){


    let marcaSeleccionada = this.value;


    modelo.innerHTML = 
    '<option value="">Selecciona un modelo</option>';



    if(celulares[marcaSeleccionada]){


        celulares[marcaSeleccionada].forEach(function(nombre){


            let opcion = document.createElement("option");

            opcion.value = nombre;

            opcion.textContent = nombre;


            modelo.appendChild(opcion);


        });


    }


});





// MENSAJE AL ENVIAR FORMULARIO

function mostrarMensaje(event){

    event.preventDefault();


    document.getElementById("mensajeExito").innerHTML =
    "✅ Solicitud enviada correctamente. Un asesor se comunicará contigo.";


}