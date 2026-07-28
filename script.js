// MODELOS DE CELULARES POR MARCA

const celulares = {

    Samsung: [
        "Galaxy S24 Ultra",
        "Galaxy S24",
        "Galaxy S23",
        "Galaxy A55",
        "Galaxy A35",
        "Galaxy A25",
        "Galaxy A15"
    ],

    Apple: [
        "iPhone 15 Pro Max",
        "iPhone 15 Pro",
        "iPhone 15",
        "iPhone 14",
        "iPhone 13",
        "iPhone 12"
    ],

    Xiaomi: [
        "Xiaomi 14",
        "Xiaomi Redmi Note 13 Pro",
        "Redmi Note 13",
        "Redmi Note 12",
        "Redmi 12"
    ],

    POCO: [
        "POCO F6",
        "POCO X6 Pro",
        "POCO X6",
        "POCO M6"
    ],

    Motorola: [
        "Motorola Edge 50",
        "Moto G84",
        "Moto G54",
        "Moto G34"
    ],

    Honor: [
        "Honor Magic 6 Pro",
        "Honor 90",
        "Honor X8"
    ],

    Huawei: [
        "Huawei P60 Pro",
        "Huawei Nova 12",
        "Huawei Mate 50"
    ],

    Oppo: [
        "Oppo Reno 11",
        "Oppo A78",
        "Oppo A58"
    ],

    Realme: [
        "Realme 12 Pro",
        "Realme C55",
        "Realme C53"
    ],

    Tecno: [
        "Tecno Camon 20",
        "Tecno Spark 10",
        "Tecno Pova 5"
    ],

    Infinix: [
        "Infinix Note 40",
        "Infinix Note 30",
        "Infinix Hot 40"
    ],

    Vivo: [
        "Vivo V30",
        "Vivo Y36",
        "Vivo Y27"
    ],

    Nokia: [
        "Nokia G42",
        "Nokia C32",
        "Nokia C22"
    ]

};


// CONECTAR SELECTS

const marca = document.getElementById("marca");
const modelo = document.getElementById("modelo");


// CAMBIAR MODELOS CUANDO CAMBIA LA MARCA

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


// MENSAJE AL ENVIAR FORMULARIO

function mostrarMensaje(event){

    event.preventDefault();


    document.getElementById("mensajeExito").innerHTML =
    "✅ Solicitud enviada correctamente. Un asesor se comunicará contigo.";

}