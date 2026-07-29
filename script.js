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


const formulario = document.getElementById("formulario");



if(formulario){


    formulario.addEventListener("submit", function(e){


        e.preventDefault();



        document.getElementById("mensajeExito").innerHTML =

        "✅ ¡Solicitud enviada correctamente! <br><br>" +

        "Gracias por confiar en CST Servicio & Tecnología. " +

        "Hemos informado a nuestro asesor y se comunicará contigo al número 📞 0962055495 para ayudarte con tu compra.";



        formulario.reset();



    });



}