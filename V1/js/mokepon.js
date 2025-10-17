let ataqueJugador
let ataqueEnemigo 
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionBotonReiniciar = document.getElementById('reiniciar')
    sectionBotonReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById("boton-mascota") 
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego) 

}

function seleccionarMascotaJugador () {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputBulbasaur = document.getElementById('bulbasaur')
    let inputCharmander = document.getElementById('charmander')
    let inputSquirtle = document.getElementById('squirtle')
    let inputTotodile = document.getElementById('totodile')
    let inputPiplup = document.getElementById('piplup')
    let inputOshawott = document.getElementById('oshawott')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if (inputBulbasaur.checked) {
        spanMascotaJugador.innerHTML = 'Bulbasaur'
    } else if (inputCharmander.checked) {
       spanMascotaJugador.innerHTML = 'Charmander'
    } else if (inputSquirtle.checked) {
        spanMascotaJugador.innerHTML = 'Squirtle'
    } else if (inputTotodile.checked) {
        spanMascotaJugador.innerHTML = 'Totodile'
    } else if (inputPiplup.checked) {
       spanMascotaJugador.innerHTML = 'Piplup'
    } else if (inputOshawott.checked) {
        spanMascotaJugador.innerHTML = 'Oshawott'
    } else {
        alert('Selecciona tu mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo () {
    let mascotaAleatoria = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Bulbasaur' 
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Squirtle'
    } else if (mascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = 'Charmander'
    } else if (mascotaAleatoria == 4) {
        spanMascotaEnemigo.innerHTML = 'Totodile' 
    } else if (mascotaAleatoria == 5) {
        spanMascotaEnemigo.innerHTML = 'Piplup'
    } else {
        spanMascotaEnemigo.innerHTML = 'Oshawott'
    } 
}
 
function ataqueFuego() {
    ataqueJugador = 'FUEGO 🔥'
    ataqueAleatorioEnemigo ()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA 💧'
    ataqueAleatorioEnemigo ()
}   
function ataqueTierra() {
    ataqueJugador = 'TIERRA 🌱'
    ataqueAleatorioEnemigo ()
}

function ataqueAleatorioEnemigo () {
    let ataqueAleatorio = aleatorio (1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'TIERRA 🌱'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'FUEGO 🔥'
    } else {
        ataqueEnemigo = 'AGUA 💧'
    } 
    combate ()

}    

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueEnemigo == ataqueJugador) {
            crearMensaje("EMPATE")
        } else if (ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'TIERRA 🌱') {
            crearMensaje("TU ENEMIGO PERDIÓ 1 VIDA")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if (ataqueJugador == 'AGUA 💧' && ataqueEnemigo == 'FUEGO 🔥') {
            crearMensaje("TU ENEMIGO PERDIÓ 1 VIDA")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if (ataqueJugador == 'TIERRA 🌱' && ataqueEnemigo == 'AGUA 💧') {
            crearMensaje("TU ENEMIGO PERDIÓ 1 VIDA")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else {
            crearMensaje("PERDISTE 1 VIDA")
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
        }

        revisarVidas() 
    }

function revisarVidas () {
    if (vidasEnemigo == 0) {
        crearMensajeFinal ("FELICIDADES! GANASTE :)")
    } else if (vidasJugador == 0) {
        crearMensajeFinal ("PERDISTE! LO SIENTO :(")
    }
}    

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
    
    sectionMensajes.innerHTML = resultado 
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById ('resultado')

    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego) 

    let sectionBotonReiniciar = document.getElementById('reiniciar')
    sectionBotonReiniciar.style.display = 'block'

}

function reiniciarJuego() {
    location.reload()
}

function aleatorio (min, max) {
    return Math.floor(Math.random() * max - min + 1) + min
}

window.addEventListener('load', iniciarJuego)