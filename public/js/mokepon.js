/* VARIABLES iniciarJuego */
const sectionSeleccionarAtaque = document.getElementById("selecionar-ataque");
const sectionReiniciar = document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonReiniciar = document.getElementById("reiniciar");
const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const contenedorAtaques = document.getElementById("contenedorAtaques");

/* VARIABLES seleccionarMascotaJugador */
const sectionSeleccionarMascota = document.getElementById("selecionar-mascota");
const spanMascotaJugador = document.getElementById('mascota-jugador');

/* VARIABLES seleccionarMascotaEnemigo */
const spanMascotaEnemigo = document.getElementById('mascota-enemigo');

/* VARIABLES combate */
const spanVidaJugador = document.getElementById('vida-jugador');
const spanVidaEnemigo = document.getElementById('vida-enemigo');

/* VARIABLES crarMensaje */
const sectionMensajes = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataques-del-jugador');
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');

const sectionVerMapa = document.getElementById('ver-mapa');
const mapa = document.getElementById('mapa')

let jugadorId = null
let enemigoId = null
let input1
let input2
let input3
let input4
let input5
let input6
let ataqueJugador = [] 
let ataqueEnemigo = [] 
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let mokepones = []
let mokeponesEnemigos = []
let mascotaJugador
let mascotaJugadorObjeto
let opcionDeMokepones
let ataquesMokepon
let ataquesMokeponEnemigo
let indexAtaqueJugador
let indexAtaqueEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = [] 
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "../assets/mokemap.jpg"
let alturaBuscada
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350

if(anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaBuscada = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaBuscada

class Mokepon {
    constructor(nombre, foto, vida, fotoMapa, id = null){
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let Squirtle = new Mokepon('Squirtle', "../assets/Squirtle.jpg", 5, "../assets/CabezaSquirtle.jpg");
let Mamoswine = new Mokepon('Mamoswine', "../assets/Mamoswine.jpg", 5, "../assets/CabezaMamoswine.jpg");
let Charizard = new Mokepon('Charizard', "../assets/Charizard.jpg", 5, "../assets/CabezaCharizard.jpg");
let Volcanion = new Mokepon('Volcanion', "../assets/Volcanion.jpg", 5, "../assets/CabezaVolcanion.jpg");
let Drednaw = new Mokepon('Drednaw', "../assets/Drednaw.jpg", 5, "../assets/CabezaDrednaw.jpg");
let Torkoal = new Mokepon('Torkoal', "../assets/Torkoal.jpg", 5, "../assets/CabezaTorkoal.jpg"); 

let EnemigoSquirtle = new Mokepon('Squirtle', "../assets/Squirtle.jpg", 5, "../assets/CabezaSquirtle.jpg");
let EnemigoMamoswine = new Mokepon('Mamoswine', "../assets/Mamoswine.jpg", 5, "../assets/CabezaMamoswine.jpg");
let EnemigoCharizard = new Mokepon('Charizard', "../assets/Charizard.jpg", 5, "../assets/CabezaCharizard.jpg");
let EnemigoVolcanion = new Mokepon('Volcanion', "../assets/Volcanion.jpg", 5, "../assets/CabezaVolcanion.jpg");
let EnemigoDrednaw = new Mokepon('Drednaw', "../assets/Drednaw.jpg", 5, "../assets/CabezaDrednaw.jpg");
let EnemigoTorkoal = new Mokepon('Torkoal', "../assets/Torkoal.jpg", 5, "../assets/CabezaTorkoal.jpg");

const SquirtleAtaques = [
    { nombre : 'Agua 💧', id: 'boton-agua'},
    { nombre : 'Agua 💧', id: 'boton-agua'},
    { nombre : 'Agua 💧', id: 'boton-agua'},
    { nombre : 'Fuego 🔥', id: 'boton-fuego'},
    { nombre : 'Tierra 🌱', id: 'boton-tierra'},
]

const MamoswineAtaques = [
    { nombre : 'Tierra 🌱', id: 'boton-tierra'},
    { nombre : 'Tierra 🌱', id: 'boton-tierra'},
    { nombre : 'Tierra 🌱', id: 'boton-tierra'},
    { nombre : 'Agua 💧', id: 'boton-agua'},
    { nombre : 'Fuego 🔥', id: 'boton-fuego'},
]

const CharizardAtaques = [
    { nombre : 'Fuego 🔥', id: 'boton-fuego'},
    { nombre : 'Fuego 🔥', id: 'boton-fuego'},
    { nombre : 'Fuego 🔥', id: 'boton-fuego'},
    { nombre : 'Agua 💧', id: 'boton-agua'},    
    { nombre : 'Tierra 🌱', id: 'boton-tierra'},
]

const VolcanionAtaques = [
    { nombre : 'Fuego 🔥', id: 'boton-fuego'},
    { nombre : 'Fuego 🔥', id: 'boton-fuego'},
    { nombre : 'Fuego 🔥', id: 'boton-fuego'},
    { nombre : 'Agua 💧', id: 'boton-agua'},    
    { nombre : 'Tierra 🌱', id: 'boton-tierra'},
]

const DrednawAtaques = [
    { nombre : 'Agua 💧', id: 'boton-agua'},
    { nombre : 'Agua 💧', id: 'boton-agua'},
    { nombre : 'Agua 💧', id: 'boton-agua'},
    { nombre : 'Fuego 🔥', id: 'boton-fuego'},
    { nombre : 'Tierra 🌱', id: 'boton-tierra'},
]

const TorkoalAtaques = [
    { nombre : 'Fuego 🔥', id: 'boton-fuego'},
    { nombre : 'Fuego 🔥', id: 'boton-fuego'},
    { nombre : 'Fuego 🔥', id: 'boton-fuego'},
    { nombre : 'Agua 💧', id: 'boton-agua'},    
    { nombre : 'Tierra 🌱', id: 'boton-tierra'},
]

Squirtle.ataques.push(...SquirtleAtaques)
Mamoswine.ataques.push(...MamoswineAtaques)
Charizard.ataques.push(...CharizardAtaques)
Volcanion.ataques.push(...VolcanionAtaques)
Drednaw.ataques.push(...DrednawAtaques)
Torkoal.ataques.push(...TorkoalAtaques)

EnemigoSquirtle.ataques.push(...SquirtleAtaques)
EnemigoMamoswine.ataques.push(...MamoswineAtaques)
EnemigoCharizard.ataques.push(...CharizardAtaques)
EnemigoVolcanion.ataques.push(...VolcanionAtaques)
EnemigoDrednaw.ataques.push(...DrednawAtaques)
EnemigoTorkoal.ataques.push(...TorkoalAtaques)

mokepones.push(Squirtle,Mamoswine,Charizard,Volcanion,Drednaw,Torkoal);

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display = "none"
    
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
          <p>${mokepon.nombre}</p>
          <img src=${mokepon.foto} alt=${mokepon.nombre} />
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        input1 = document.getElementById('Squirtle');
        input2 = document.getElementById('Mamoswine');
        input3 = document.getElementById('Charizard');
        input4 = document.getElementById('Volcanion');
        input5 = document.getElementById('Drednaw');
        input6 = document.getElementById('Torkoal');
    })

    sectionReiniciar.style.display = "none";
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    botonReiniciar.addEventListener("click", reiniciarJuego);
    unirseAlJuego();
}

function unirseAlJuego(){
    fetch("http://localhost:8080/unirse")
        .then(function(res) {
            if (res.ok) {
                res.text()
                    .then(function(respuesta){
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })
}

function seleccionarMascotaJugador(){

    if (input1.checked){
        spanMascotaJugador.innerHTML = input1.id;
        mascotaJugador = input1.id;
    }
    else if (input2.checked){
        spanMascotaJugador.innerHTML = input2.id;
        mascotaJugador = input2.id;
    }
    else if (input3.checked){
        spanMascotaJugador.innerHTML = input3.id;
        mascotaJugador = input3.id;
    }
    else if (input4.checked){
        spanMascotaJugador.innerHTML = input4.id;
        mascotaJugador = input4.id;
    }
    else if (input5.checked){
        spanMascotaJugador.innerHTML = input5.id;
        mascotaJugador = input5.id;
    }
    else if (input6.checked){
        spanMascotaJugador.innerHTML = input6.id;
        mascotaJugador = input6.id;
    }else {
        alert("No seleccionaste nada, se te asigna Squirtle como mascota por defecto");
        spanMascotaJugador.innerHTML = 'Squirtle';
        mascotaJugador = input1.id;
    }

    sectionSeleccionarMascota.style.display = "none";
    selecionarMokepon(mascotaJugador)
    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
}

function selecionarMokepon(mascotaJugador) {
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre) {
            ataques = mokepones[i].ataques;
        }
    }
    mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon;
    })

    botonFuego = document.getElementById("boton-fuego");
    botonAgua = document.getElementById("boton-agua");
    botonTierra = document.getElementById("boton-tierra");
    botones = document.querySelectorAll('.BAtaque');
}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === 'Fuego 🔥'){
                ataqueJugador.push('Fuego');
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            } else if (e.target.textContent === 'Agua 💧'){
                ataqueJugador.push('Agua');
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            } else if (e.target.textContent === 'Tierra 🌱'){
                ataqueJugador.push('Tierra');
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            }
            if (ataqueJugador.length === 5){
                enviarAtaques()
            }
        })
    })
}

function enviarAtaques(){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/ataques`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques(){
    fetch(`http://localhost:8080/mokepon/${enemigoId}/ataques`)
        .then(function(res){
            if (res.ok) {
                res.json()
                    .then(function({ ataques }){
                        if (ataques.length === 5) {
                            ataqueEnemigo = ataques
                            combate()
                        }
                })
            }
        })
}


function seleccionarMascotaEnemigo(enemigo){
    spanMascotaEnemigo.innerHTML = enemigo.nombre;
    ataquesMokeponEnemigo = enemigo.ataques;
    secuenciaAtaque();
}

function ataqueAleatorioEnemigo(){
    console.log('Ataques enemigo', ataquesMokeponEnemigo);
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1);
    
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('Fuego');
    } else if (ataqueAleatorio == 2 || ataqueAleatorio == 3){
        ataqueEnemigo.push('Agua');
    } else {
        ataqueEnemigo.push('Tierra');
    }
    console.log(ataqueEnemigo);
    iniciarPelea();
}

function iniciarPelea() {
    if (ataqueJugador.length === 5){
        combate();
    }
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador];
    indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

function combate() {
    clearInterval(intervalo)

    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index);
            crarMensaje("EMPATE");
        } else if (ataqueJugador[index] == 'Fuego' && ataqueEnemigo[index] == 'Tierra'){
            indexAmbosOponentes(index, index);
            crarMensaje("Ganaste");
            victoriasJugador++;
            spanVidaJugador.innerHTML = victoriasJugador;
        } else if (ataqueJugador[index] == 'Agua' && ataqueEnemigo[index] == 'Fuego'){
            indexAmbosOponentes(index, index);
            crarMensaje("Ganaste");
            victoriasJugador++;
            spanVidaJugador.innerHTML = victoriasJugador;
        } else if (ataqueJugador[index] == 'Tierra' && ataqueEnemigo[index] == 'Agua'){
            indexAmbosOponentes(index, index);
            crarMensaje("Ganaste");
            victoriasJugador++;
            spanVidaJugador.innerHTML = victoriasJugador;
        } else {
            indexAmbosOponentes(index, index);
            crarMensaje("Perdiste");
            victoriasEnemigo++;
            spanVidaEnemigo.innerHTML = victoriasEnemigo;
        }
    }

    revisarVidas();
}

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crarMensajeFinal("Esto fue un empate!!!");
    } else if (victoriasJugador > victoriasEnemigo) {
        crarMensajeFinal("FELICITACIONES! Ganaste :)");
    } else {
        crarMensajeFinal("Lo siento, perdiste :(");
    }
}

function crarMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p');
    let nuevoAtaqueDelEnemigo = document.createElement('p');
    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crarMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal;
    sectionReiniciar.style.display = "block";
}

function reiniciarJuego() {
    location.reload();
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    mokeponesEnemigos.forEach(function (mokepon) {
        mokepon.pintarMokepon()
        revisarColision(mokepon)
    })
}

function enviarPosicion(x,y) {
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function(res){
        if(res.ok){
            res.json()
            .then(function ({ enemigos }){
                mokeponesEnemigos = enemigos.map(function (enemigo) {
                    let mokeponEnemigo = null
                    
                    const mokeponNombre = enemigo.mokepon.nombre || ""
                    
                    

                    if (mokeponNombre == 'Squirtle') {
                        EnemigoSquirtle.id = enemigo.id
                        mokeponEnemigo = EnemigoSquirtle
                    } else if (mokeponNombre == 'Mamoswine') {
                        EnemigoMamoswine.id = enemigo.id
                        mokeponEnemigo = EnemigoMamoswine
                    } else if (mokeponNombre == 'Charizard') {
                        EnemigoCharizard.id = enemigo.id
                        mokeponEnemigo = EnemigoCharizard
                    } else if (mokeponNombre == 'Volcanion') {
                        EnemigoVolcanion.id = enemigo.id
                        mokeponEnemigo = EnemigoVolcanion
                    } else if (mokeponNombre == 'Drednaw') {
                        EnemigoDrednaw.id = enemigo.id
                        mokeponEnemigo = EnemigoDrednaw
                    } else if (mokeponNombre == 'Torkoal') {
                        EnemigoTorkoal.id = enemigo.id
                        mokeponEnemigo = EnemigoTorkoal
                    }

                        
                        
                        mokeponEnemigo.x = enemigo.x
                        mokeponEnemigo.y = enemigo.y


                        return mokeponEnemigo
                    })
                })
        }
     })
}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function teclaPrecionada(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break;
        case 'ArrowDown':
            moverAbajo()
            break;
        case 'ArrowLeft':
            moverIzquierda()
            break;
        case 'ArrowRight':
            moverDerecha()
            break;    
        default:
            break;
    }
}

function iniciarMapa(){
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener('keydown', teclaPrecionada)
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre) {
            return mokepones[i]
        }
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x
    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo 
    ){
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    enemigoId = enemigo.id
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
}

window.addEventListener('load', iniciarJuego); // un evento que va acorde a la venta, una vez carga el html este se encarga de carga el js