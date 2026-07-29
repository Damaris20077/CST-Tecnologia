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



if(marca && modelo){


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



}








// MENSAJE AL ENVIAR SOLICITUD


function mostrarMensaje(event){


    event.preventDefault();



    // Toma el número que escribió el cliente

    let numeroCliente = document.querySelector('input[type="tel"]').value;



    document.getElementById("mensajeExito").innerHTML =


    "✅ ¡Solicitud recibida correctamente! <br><br>" +

    "Gracias por confiar en <strong>CST Servicio & Tecnología</strong>. <br><br>" +

    "Nuestro equipo se comunicará contigo al número 📞 <strong>" 
    + numeroCliente +
    "</strong> para continuar con tu compra. <br><br>" +

    "📱 Estamos listos para ayudarte a encontrar el celular ideal.";



    document.querySelector(".formulario").reset();



}