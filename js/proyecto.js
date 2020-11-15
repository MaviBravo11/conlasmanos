// //----------- OBJETOS CONSTRUCTOR Y NEW------------

// function Cliente(nombre, conocer, edad,redes) {  //función constructora
//     this.nombre = nombre;
//     this.conocer = conocer;
//     this.edad = edad;
//     this.redes = redes;

//     this.comenzarCotizacion = function () { return nombre + ", vamos a cotizar tu cuadro personalizado!" }
// }

// var nombre = document.getElementById("nombre").value;
// console.log(nombre);

//prompt("Hola! ¿Cómo te llamás?").trim();  //borro espacios que el usuario ponga al ppio y final
// var redes = prompt("¿Cuál es tu usuario de instagram?").toLowerCase();
// var conocer = prompt("Es la primera vez que vas a encargar un cuadro? ", "SI - NO").toUpperCase(); //paso a mayúsculas
// // conocer = conocer.toUpperCase();  //paso anterior sin combinar. Sobrescribiendo 'conocer'

// if (conocer == "SI") {
//     alert("¡Muchas gracias por confiar!");
// }

// else {
//     console.log("Ya es cliente");
// }

// var edad = parseInt(prompt("¿Qué edad tenés?"));

// var miCliente = new Cliente(nombre, conocer, edad, redes);

// console.log(miCliente);

// if (edad < 18) {
//     alert("Tené en cuenta que para finalizar la compra es necesario que estés con una persona mayor presente.");
//     console.log("Es menor de edad. Chequear compra")
// }
// else {
//     console.log("Es una persona mayor. Tiene " + edad + " años");
// }

// console.log("el usuario de instagram es " + redes)
// alert(miCliente.comenzarCotizacion());

// --------------------------------------------------------------------

let vistaNombre = document.getElementById("resultadoSaludo");
let inputNombre = document.getElementById("nombre");
let insta = document.getElementById("instagram");
let btn = document.getElementById("calculo");
let usuarios = [];
const userListNode = document.getElementById("userList");

let saludar = function calcular() {
    var dato1 = inputNombre.value;
    console.dir(dato1);
    vistaNombre.innerHTML =
        "Hola " +
        dato1 +
        "! <span class='maviland'>Seleccioná las opciones de tu cuadro: </span>";
};

/* let guardarInsta = function calcular() {
  var dato1 = insta.value;
  setItemLocal("instagram", dato1);
};

const setNombre = function () {
  let nombre = inputNombre.value;
  setItemLocal("nombre", nombre);
}; */

const agregarUsuario = () => {
    let usuario = {
        nombre: inputNombre.value,
        instagram: insta.value,
    };
    usuarios.push(usuario);
    setLocalList("usuarios", usuarios);
    inputNombre.value = "";
    insta.value = "";
    createUserNode(usuario);
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

// const createUserNode = (newUser) => {
//   const liNode = document.createElement("li");
//   userListNode.appendChild(liNode);
//   liNode.innerHTML =
//     "<h3>" + newUser.nombre + "</h3>" + "<p>" + newUser.instagram + "</p>";
//   return liNode;
// };

// document.getElementById("nombre").addEventListener("change", saludar)
inputNombre.addEventListener("blur", saludar);
/* insta.addEventListener("blur", guardarInsta); */
btn.onclick = agregarUsuario;
let usuariosList = getLocalList("usuarios");

// for (let i = 0; i < usuariosList.length; i++) {
//   createUserNode(usuariosList[i]);
// }