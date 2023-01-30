
const botonEncriptar = document.querySelector(".bot-encriptar")
const botonDesencriptar = document.querySelector(".bot-desencriptar")
const espacioDescodificado = document.querySelector(".codificador")

//una vez el texto esta escrito mediante el boton encriptar lo recuperamos, hacemos validaciones y lo encriptamos.
botonEncriptar.addEventListener("click", encriptar)
function encriptar(){

  // Recuperamos el contendio ingresado por el usuario.
    let textarea = document.querySelector(".texto");
    let textoListo = textarea.value
    
  //hacemos las validaciones solicitadas por el cliente.
    let hasUppercase = /[A-Z]/.test(textoListo);
    let hasAccent = /[áéíóú]/.test(textoListo);
    if (hasUppercase || hasAccent) {
    alert("El parrafo contiene letras mayusculas o acentos, no se permiten.")
    } else {      
  //hacemos la encriptacion del texto introducido por el usuario
      textoListo = textoListo.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  //creamos el espacio donde va a aparecer el nuevo texto ya encriptado.
      espacioDescodificado.innerHTML = `
    <div class="contendor-texto">
      <p class="mensaje">${textoListo}</p>
    </div>
    <button class="bot-copiar">Copiar texto</button>`
    textarea.value = "";

  //capturamos el boton copiar que creamos y colocamos un escuchador y la funcion copiarTexto.
    const copiar = document.querySelector(".bot-copiar")
    copiar.addEventListener("click", copiarTexto)
  }

  }

//una vez el texto esta encriptado y colocado nuevamente en el contendio principal lo desencriptamos.
  botonDesencriptar.addEventListener("click", desencriptar)

  function desencriptar(){
  // Recuperamos el contendio encriptado ingresado por el usuario.
    let textarea = document.querySelector(".texto");
    let textoListo = textarea.value

  //hacemos las validaciones solicitadas por el cliente.
    let hasUppercase = /[A-Z]/.test(textoListo);
    let hasAccent = /[áéíóú]/.test(textoListo);
    if (hasUppercase || hasAccent) {
    alert("El parrafo contiene letras mayusculas o acentos, no se permiten.")
    } else {    
    //hacemos la desencriptacion del texto introducido por el usuario.
    textoListo = textoListo.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")
    //creamos el espacio donde va a aparecer el nuevo texto ya desencriptado.
    espacioDescodificado.innerHTML = `<div class="contendor-texto">
        <p class="mensaje">${textoListo}</p>
      </div>
      <button class="bot-copiar">Copiar texto</button>`
    textarea.value = "";

  //capturamos el boton copiar que creamos y colocamos un escuchador y la funcion copiarTexto.
    const copiar = document.querySelector(".bot-copiar")
    copiar.addEventListener("click", copiarTexto)
  }}

  //proporciona al usuario la posibilidad de copiar el texto de manera sencilla
  function copiarTexto() {
    let parrafo = document.querySelector(".mensaje");
    navigator.clipboard.writeText(parrafo.innerText).then(function() {
      alert("Texto copiado al portapapeles");
    }, function(err) {
      alert("Error al copiar texto al portapapeles", err);
    });
  }
  
  