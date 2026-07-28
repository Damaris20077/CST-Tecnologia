function mostrarMensaje(event){

    event.preventDefault();


    document.getElementById("mensajeExito").innerHTML =
    "✅ ¡Solicitud enviada correctamente!<br>Nos comunicaremos contigo pronto.";


    document.querySelector(".formulario").reset();


    document.getElementById("modelo").innerHTML =
    '<option value="">Primero selecciona una marca</option>';

}





const modelos = {


Samsung:[

"Galaxy S25 Ultra",
"Galaxy S24 Ultra",
"Galaxy A55",
"Galaxy A35",
"Galaxy A15"

],


Apple:[

"iPhone 16 Pro Max",
"iPhone 16",
"iPhone 15 Pro",
"iPhone 15",
"iPhone 14"

],


Xiaomi:[

"Xiaomi 14",
"Redmi Note 13 Pro",
"Redmi Note 13",
"Redmi 13C"

],


POCO:[

"POCO F6 Pro",
"POCO X6 Pro",
"POCO X6",
"POCO M6 Pro"

],



Motorola:[

"Moto Edge 50",
"Moto G85",
"Moto G54",
"Moto E14"

],



Honor:[

"Honor Magic 6 Pro",
"Honor 200",
"Honor 90",
"Honor X8b"

],



Huawei:[

"Nova 12",
"P60 Pro",
"Mate 50"

],



Oppo:[

"OPPO Reno 12",
"OPPO Reno 11",
"OPPO A79"

],



Realme:[

"Realme GT 6",
"Realme 12 Pro",
"Realme C67"

],



Tecno:[

"Tecno Camon 30",
"Tecno Spark 20"

],



Infinix:[

"Infinix Note 40",
"Infinix Hot 40"

],



Vivo:[

"Vivo V30",
"Vivo Y36"

],



Nokia:[

"Nokia G42",
"Nokia C32"

]


};





const marca = document.getElementById("marca");

const modelo = document.getElementById("modelo");



marca.addEventListener("change", function(){


    modelo.innerHTML =
    '<option value="">Selecciona un modelo</option>';



    modelos[this.value].forEach(function(nombre){


        let opcion = document.createElement("option");


        opcion.value = nombre;


        opcion.textContent = nombre;


        modelo.appendChild(opcion);


    });


});