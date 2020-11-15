let vistaNombre = document.getElementById("resultadoSaludo");
let inputNombre = document.getElementById("nombre");
let insta = document.getElementById("instagram");
let btn = document.getElementById("calculo");
let usuarios = [];
const userListNode = document.getElementById("userList");

let saludar = function armarSaludo() {
    var dato1 = inputNombre.value;
    console.log(dato1);
    vistaNombre.innerHTML = "Hola " + dato1 + "! Seleccioná las opciones de tu cuadro: ";
};


const agregarUsuario = () => {
    let usuario = {
        nombre: inputNombre.value,
        instagram: insta.value,
    };
    usuarios.push(usuario);
    setLocalList("usuarios", usuarios);
    inputNombre.value = "";
    insta.value = "";

};

const getLocalList = (key) => {
    let localList = localStorage.getItem(key);
    if (localList) {
        let listParsed = JSON.parse(localList);
        return listParsed;
    } else {
        return [];
    }
};

const setLocalList = function(key, usuario) {
    let usuarioString = JSON.stringify(usuario);
    localStorage.setItem(key, usuarioString);
};


inputNombre.addEventListener("blur", saludar);
btn.onclick = agregarUsuario;
let usuariosList = getLocalList("usuarios");








//jQuery
$("#nombre").hover(resaltar, desmarcar)

function resaltar() {
    $(this).css("borderColor", "#3c6e71");
}

function desmarcar() {
    $(this).css("borderColor", "silver")
}

$("#instagram").hover(resaltar, desmarcar)

function resaltar() {
    $(this).css("borderColor", "#3c6e71");
}

function desmarcar() {
    $(this).css("borderColor", "silver")
}




$("#botonCotizar").click(aparecerTotal);

var precios = {
    acrilicro: 1000,
    micro: 800,
    lapiz: 700,
    bastidor: 1000,
    lienzo: 800,
    hoja: 600,
    medida1: 300,
    medida2: 400,
    medida3: 500,
    medida4: 600,
    medida5: 800,

}

console.log(acrilicro)
console.log(medida1)

function aparecerTotal() {

    $("#total").fadeIn(2000);

    var tecnicaSeleccionada = $("#tecnica").val();
    var precioAcrilico = precios[tecnicaSeleccionada]

    var baseSeleccionada = $("#base").val();
    var precioBase = precios[baseSeleccionada]

    var medidaSeleccionada = $("#medida").val();
    var precioMedida = precios[medidaSeleccionada]



    var totalCotizacion = precioAcrilico + precioBase + precioMedida;


    $("#total").text(" Su total es $" + totalCotizacion)
}


$("#tecnica").change(onCostoTecnicaChange);

function onCostoTecnicaChange() {
    var tecnicaSeleccionada = $("#tecnica").val();
    var precioAcrilico = precios[tecnicaSeleccionada]

    $("#costoTecnica").text(precioAcrilico);
}


$("#base").change(onCostoBaseChange);

function onCostoBaseChange() {
    var baseSeleccionada = $("#base").val();
    var precioBase = precios[baseSeleccionada]

    $("#costoBase").text(precioBase);
}

$("#medida").change(onCostoMedidaChange);

function onCostoMedidaChange() {
    var medidaSeleccionada = $("#medida").val();
    var precioBase = precios[medidaSeleccionada]

    $("#costoMedida").text(precioBase);
}





$("#botonEmpezar").click(scrollear);

function scrollear() {
    $("html,body").animate({
            scrollTop: $("#seccionCotizacion").offset().top
        },
        2000);
}


$("#menuCuadros").click(mostrarCuadros);

function mostrarCuadros() {
    $("html,body").animate({
            scrollTop: $("#seccionCuadros").offset().top
        },
        2000);
}

$("#menuRomina").click(mostrarRomina);

function mostrarRomina() {
    $("html,body").animate({
        scrollTop: $("#seccionRomina").offset().top
    }, 2000)
}

$("#menuContacto").click(mostrarContacto);

function mostrarContacto() {
    $("html,body").animate({
        scrollTop: $("#seccionContacto").offset().top
    }, 2000)
}