
import {obtenerPromedioEstadistica} from './data.js';
import {pokemonForType} from './data.js';


//bontonCargarPoke=document.querySelector("#buttonCargarPokemom"),
const filtrarBug=document.getElementById("bug"),
      filtrarSteel=document.getElementById("steel"),
      filtrarWater=document.getElementById("water"),
      filtrarDragon=document.getElementById("dragon"),
      filtrarElectric=document.getElementById("electric"),
      filtrarGhost=document.getElementById("ghost"),
      filtrarFire=document.getElementById("fire"),
      filtrarFairy=document.getElementById("fairy"),
      filtrarIce=document.getElementById("ice"),
      filtrarFighting=document.getElementById("fighting"),
      filtrarNormal=document.getElementById("normal"),
      filtrarGrass=document.getElementById("grass"),
      filtrarPhychic=document.getElementById("psychic"),
      filtrarRock=document.getElementById("rock"),
      filtrarDark=document.getElementById("dark"),
      filtrarGround=document.getElementById("ground"),
      filtrarPoison=document.getElementById("poison"),
      filtrarFlying=document.getElementById("flying"),
      limpiarfiltros=document.getElementById("limpiar"),
      contenedorpoke=document.getElementById("contenedorPokemones"); 
     // botonForType=document.querySelector("#cargarTipo");
//let cantidadDePokemonesMostrados=0;
let pokesFiltrados=null;
let tiposfiltros="";


async function obtenerPokemones(){
    try {
        const resultado=await fetch('./data/pokemon/pokemon.json');
        const lista=await resultado.json();
        return lista.pokemon;
    } catch (error) {
        return false;
    }
    
}

window.addEventListener('load',cargarPokemones());


/*Carga las tarjetas pokemon cada vez que es llamado */
async function cargarPokemones(){
    let listaDePokemon= await obtenerPokemones();
    //console.log(listaDePokemon);    

        for(let i=0;i<listaDePokemon.length;i++){
                document.querySelector("#contenedorPokemones").appendChild(crearTarjeta(listaDePokemon[i]));
        }   
        
    
}

function crearTarjeta(pokeTarj){
    let divContenedorTarjeta=document.createElement("div");
    divContenedorTarjeta.classList.add("contenedor-tarjeta");
    divContenedorTarjeta.id=`${pokeTarj.num}`;
    divContenedorTarjeta.setAttribute("onclick","girarTarjeta()");
    let divTarjeta=document.createElement("div");
    divTarjeta.classList.add("tarjetaPokemon");
    let imgPokemon=document.createElement("img");
    imgPokemon.classList.add("img_Pokemon");
    imgPokemon.src=pokeTarj.img;
    let numPokemon=document.createElement("p");
    numPokemon.classList.add("num_pokemon");
    numPokemon.textContent=`${pokeTarj.num}`;
    let nombrePokemon=document.createElement("p");
    nombrePokemon.classList.add("nombre_pokemon");
    nombrePokemon.textContent=`${pokeTarj.name}`;
    let parrafoTarjeta=document.createElement("p");
    parrafoTarjeta.classList.add("tipo_pokemon");
    parrafoTarjeta.textContent=`Stats:  ${obtenerPromedioEstadistica(pokeTarj)}`;
    divTarjeta.appendChild(imgPokemon);
    divTarjeta.insertAdjacentElement("afterbegin",nombrePokemon);
    divTarjeta.insertAdjacentElement("afterbegin",numPokemon);
    divTarjeta.insertAdjacentElement("beforeend",parrafoTarjeta);

    divContenedorTarjeta.appendChild(divTarjeta);
    
    let divTarjetaTrasera=document.createElement("div");
    divTarjetaTrasera.classList.add("trasera");
    let stadisticas=document.createElement("div");
    stadisticas.classList.add("stats");

    let divStatsAtaq=document.createElement("div");
    divStatsAtaq.classList.add("div-stats")
    let titleAtaque=document.createElement("p");
    titleAtaque.classList.add("textLabel")
    titleAtaque.textContent="AT"
    let valorAtaque=document.createElement("p");
    valorAtaque.classList.add("valoresStas");
    valorAtaque.textContent=`${pokeTarj.stats['base-attack']}`;
    divStatsAtaq.appendChild(titleAtaque);
    divStatsAtaq.appendChild(valorAtaque);
    stadisticas.appendChild(divStatsAtaq);

    let divStatsDefen=document.createElement("div");
    divStatsDefen.classList.add("div-stats")
    let titleDefen=document.createElement("p");
    titleDefen.classList.add("textLabel")
    titleDefen.textContent="DF"
    let valorDefen=document.createElement("p");
    valorDefen.classList.add("valoresStas");
    valorDefen.textContent=`${pokeTarj.stats['base-defense']}`;
    divStatsDefen.appendChild(titleDefen);
    divStatsDefen.appendChild(valorDefen);
    stadisticas.appendChild(divStatsDefen);

    let divStatEstamina=document.createElement("div");
    divStatEstamina.classList.add("div-stats")
    let titleStamina=document.createElement("p");
    titleStamina.classList.add("textLabel")
    titleStamina.textContent="PS"
    let valorStamina=document.createElement("p");
    valorStamina.classList.add("valoresStas");
    valorStamina.textContent=`${pokeTarj.stats['base-stamina']}`;
    divStatEstamina.appendChild(titleStamina);
    divStatEstamina.appendChild(valorStamina);
    stadisticas.appendChild(divStatEstamina);

    let divStatsPC=document.createElement("div");
    divStatsPC.classList.add("div-stats")
    let titlePC=document.createElement("p");
    titlePC.classList.add("textLabel")
    titlePC.textContent="Max-CP"
    let valorPC=document.createElement("p");
    valorPC.classList.add("valoresStas");
    valorPC.textContent=`${pokeTarj.stats['max-cp']}`;
    divStatsPC.appendChild(titlePC);
    divStatsPC.appendChild(valorPC);
    stadisticas.appendChild(divStatsPC);

    let divStatsHP=document.createElement("div");
    divStatsHP.classList.add("div-stats")
    let titleHP=document.createElement("p");
    titleHP.classList.add("textLabel")
    titleHP.textContent="Max-hp"
    let valorHP=document.createElement("p");
    valorHP.classList.add("valoresStas");
    valorHP.textContent=`${pokeTarj.stats['max-hp']}`;
    divStatsHP.appendChild(titleHP);
    divStatsHP.appendChild(valorHP);
    stadisticas.appendChild(divStatsHP);

    let parrafoResist=document.createElement("p");
    parrafoResist.classList.add("resistencia_pokemon");
    parrafoResist.textContent=` Resistente a: ${obtenerResistencia(pokeTarj.resistant)}`;
    let parrafotipo=document.createElement("p");
    parrafotipo.classList.add("resistencia_pokemon");
    parrafotipo.textContent=` Tipo: ${obtenerType(pokeTarj.type)}`;
    
    
    divTarjetaTrasera.insertAdjacentElement("beforeend",parrafoResist);
    divTarjetaTrasera.appendChild(stadisticas);
    divTarjetaTrasera.appendChild(parrafoResist);
    divTarjetaTrasera.appendChild(parrafotipo);
    divContenedorTarjeta.appendChild(divTarjetaTrasera);
    
 
    return divContenedorTarjeta;
}

function obtenerType(tipo){
    let tipos="";
    for(let i=0;i<tipo.length;i++){
        tipos=` ${tipo[i]}  ${tipos} `;
    }
    return tipos;
}

function obtenerResistencia(resist){
    let resistencias="";
    for(let i=0;i<resist.length;i++){
        resistencias=`${resist[i]},  ${resistencias} `;
    }
    return resistencias;
}

filtrarBug.addEventListener('click', async () =>{

    filtrarBug.style.border='4px solid blue';
    tiposfiltros=tiposfiltros+"  "+ filtrarBug.value;
    limpiarContenedor()
    if(pokesFiltrados==null){
        let lista= await obtenerPokemones();
        pokesFiltrados=pokemonForType(lista,filtrarBug.id);
        mostrarPokemones(pokesFiltrados)
    }
    else{
        pokesFiltrados=pokemonForType(pokesFiltrados,filtrarBug.id);
        mostrarPokemones(pokesFiltrados);
    }

    mostrarPorcentaje(pokesFiltrados.length, tiposfiltros);

});
//Funcion para calcular el procentaje de pokemones de un tipo
const mostrarPorcentaje=(dato,tipo)=>{

    let porcentaje=(dato/251)*100;
    porcentaje=porcentaje.toFixed(2);
    document.querySelector(".datoEstadistico").innerHTML=`El porcentaje de pokemones de tipo  ${tipo} : es `
    document.querySelector(".porcentaje").innerHTML=`  ${porcentaje}%`; 
}

filtrarSteel.addEventListener('click', async () =>{
    filtrarSteel.style.border='4px solid blue';
    tiposfiltros=tiposfiltros+"  "+ filtrarSteel.value;
    limpiarContenedor()
    if(pokesFiltrados==null){
        let lista= await obtenerPokemones();
        pokesFiltrados=pokemonForType(lista,filtrarSteel.id);
        mostrarPokemones(pokesFiltrados)
    }
    else{
        pokesFiltrados=pokemonForType(pokesFiltrados,filtrarSteel.id);
        mostrarPokemones(pokesFiltrados);
    }
    mostrarPorcentaje(pokesFiltrados.length, tiposfiltros);

});



filtrarDragon.addEventListener('click', async () =>{
    filtrarDragon.style.border='4px solid blue';
    tiposfiltros=tiposfiltros+"  "+ filtrarDragon.value;
    //console.log(tiposfiltros);
    limpiarContenedor();
    if(pokesFiltrados==null){
        let lista= await obtenerPokemones();
        pokesFiltrados=pokemonForType(lista,filtrarDragon.id);
        mostrarPokemones(pokesFiltrados)
    }
    else{
        pokesFiltrados=pokemonForType(pokesFiltrados,filtrarDragon.id);
        mostrarPokemones(pokesFiltrados);
    }
    mostrarPorcentaje(pokesFiltrados.length, tiposfiltros);
});

filtrarElectric.addEventListener('click',async () =>{
    filtrarElectric.style.border='4px solid blue';
    tiposfiltros=tiposfiltros+"  "+ filtrarElectric.value;
    limpiarContenedor()
    if(pokesFiltrados==null){
        let lista= await obtenerPokemones();
        pokesFiltrados=pokemonForType(lista,filtrarElectric.id);
        mostrarPokemones(pokesFiltrados)
    }
    else{
        pokesFiltrados=pokemonForType(pokesFiltrados,filtrarElectric.id);
        mostrarPokemones(pokesFiltrados);
    }
    mostrarPorcentaje(pokesFiltrados.length, tiposfiltros);

});

filtrarGhost.addEventListener('click',async () =>{
    filtrarGhost.style.border='4px solid blue';
    tiposfiltros=tiposfiltros+"  "+ filtrarGhost.value;
    limpiarContenedor()
    if(pokesFiltrados==null){
        let lista= await obtenerPokemones();
        pokesFiltrados=pokemonForType(lista,filtrarGhost.id);
        mostrarPokemones(pokesFiltrados)
    }
    else{
        pokesFiltrados=pokemonForType(pokesFiltrados,filtrarGhost.id);
        mostrarPokemones(pokesFiltrados);
    }
    mostrarPorcentaje(pokesFiltrados.length, tiposfiltros);

});

filtrarFire.addEventListener('click',async () =>{
    filtrarFire.style.border='4px solid blue';
    tiposfiltros=tiposfiltros+"  "+ filtrarFire.value;
    limpiarContenedor()
    if(pokesFiltrados==null){
        let lista= await obtenerPokemones();
        pokesFiltrados=pokemonForType(lista,filtrarFire.id);
        mostrarPokemones(pokesFiltrados)
    }
    else{
        pokesFiltrados=pokemonForType(pokesFiltrados,filtrarFire.id);
        mostrarPokemones(pokesFiltrados);
    }
    mostrarPorcentaje(pokesFiltrados.length, tiposfiltros);

});

filtrarFairy.addEventListener('click',async () =>{
    filtrarFairy.style.border='4px solid blue';
    tiposfiltros=tiposfiltros+"  "+ filtrarFairy.value;
    limpiarContenedor()
    if(pokesFiltrados==null){
        let lista= await obtenerPokemones();
        pokesFiltrados=pokemonForType(lista,filtrarFairy.id);
        mostrarPokemones(pokesFiltrados)
    }
    else{
        pokesFiltrados=pokemonForType(pokesFiltrados,filtrarFairy.id);
        mostrarPokemones(pokesFiltrados);
    }
    mostrarPorcentaje(pokesFiltrados.length, tiposfiltros);

});

filtrarIce.addEventListener('click',async () =>{
    filtrarIce.style.border='4px solid blue';
    tiposfiltros=tiposfiltros+"  "+ filtrarIce.value;
    limpiarContenedor()
    if(pokesFiltrados==null){
        let lista= await obtenerPokemones();
        pokesFiltrados=pokemonForType(lista,filtrarIce.id);
        mostrarPokemones(pokesFiltrados)
    }
    else{
        pokesFiltrados=pokemonForType(pokesFiltrados,filtrarIce.id);
        mostrarPokemones(pokesFiltrados);
    }
    mostrarPorcentaje(pokesFiltrados.length, tiposfiltros);
});

filtrarFighting.addEventListener('click',async () =>{
    filtrarFighting.style.border='4px solid blue';
    tiposfiltros=tiposfiltros+"  "+ filtrarFighting.value;
    limpiarContenedor()
    if(pokesFiltrados==null){
        let lista= await obtenerPokemones();
        pokesFiltrados=pokemonForType(lista,filtrarFighting.id);
        mostrarPokemones(pokesFiltrados)
    }
    else{
        pokesFiltrados=pokemonForType(pokesFiltrados,filtrarFighting.id);
        mostrarPokemones(pokesFiltrados);
    }
    mostrarPorcentaje(pokesFiltrados.length, tiposfiltros);
});

filtrarNormal.addEventListener('click',async () =>{
    filtrarNormal.style.border='4px solid blue';
    tiposfiltros=tiposfiltros+"  "+ filtrarNormal.value;
    limpiarContenedor()
    if(pokesFiltrados==null){
        let lista= await obtenerPokemones();
        pokesFiltrados=pokemonForType(lista,filtrarNormal.id);
        mostrarPokemones(pokesFiltrados)
    }
    else{
        pokesFiltrados=pokemonForType(pokesFiltrados,filtrarNormal.id);
        mostrarPokemones(pokesFiltrados);
    }
    mostrarPorcentaje(pokesFiltrados.length, tiposfiltros);

});

filtrarPhychic.addEventListener('click',async () =>{
    filtrarPhychic.style.border='4px solid blue';
    tiposfiltros=tiposfiltros+"  "+ filtrarPhychic.value;
    limpiarContenedor()
    if(pokesFiltrados==null){
        let lista= await obtenerPokemones();
        pokesFiltrados=pokemonForType(lista,filtrarPhychic.id);
        mostrarPokemones(pokesFiltrados)
    }
    else{
        pokesFiltrados=pokemonForType(pokesFiltrados,filtrarPhychic.id);
        mostrarPokemones(pokesFiltrados);
    }
    mostrarPorcentaje(pokesFiltrados.length, tiposfiltros);
});

filtrarRock.addEventListener('click',async () =>{
    filtrarRock.style.border='4px solid blue';
    tiposfiltros=tiposfiltros+"  "+ filtrarRock.value;
    limpiarContenedor()
    if(pokesFiltrados==null){
        let lista= await obtenerPokemones();
        pokesFiltrados=pokemonForType(lista,filtrarRock.id);
        mostrarPokemones(pokesFiltrados)
    }
    else{
        pokesFiltrados=pokemonForType(pokesFiltrados,filtrarRock.id);
        mostrarPokemones(pokesFiltrados);
    }
    mostrarPorcentaje(pokesFiltrados.length, tiposfiltros);
});

filtrarDark.addEventListener('click',async () =>{
    filtrarDark.style.border='4px solid blue';
    tiposfiltros=tiposfiltros+"  "+ filtrarDark.value;
    limpiarContenedor()
    if(pokesFiltrados==null){
        let lista= await obtenerPokemones();
        pokesFiltrados=pokemonForType(lista,filtrarDark.id);
        mostrarPokemones(pokesFiltrados)
    }
    else{
        pokesFiltrados=pokemonForType(pokesFiltrados,filtrarDark.id);
        mostrarPokemones(pokesFiltrados);
    }
    mostrarPorcentaje(pokesFiltrados.length, tiposfiltros);
});

filtrarGround.addEventListener('click',async () =>{
    filtrarGround.style.border='4px solid blue';
    tiposfiltros=tiposfiltros+"  "+ filtrarGround.value;
    limpiarContenedor()
    if(pokesFiltrados==null){
        let lista= await obtenerPokemones();
        pokesFiltrados=pokemonForType(lista,filtrarGround.id);
        mostrarPokemones(pokesFiltrados)
    }
    else{
        pokesFiltrados=pokemonForType(pokesFiltrados,filtrarGround.id);
        mostrarPokemones(pokesFiltrados);
    }
    mostrarPorcentaje(pokesFiltrados.length, tiposfiltros);
});

filtrarPoison.addEventListener('click',async () =>{
    filtrarPoison.style.border='4px solid blue';
    tiposfiltros=tiposfiltros+"  "+ filtrarPoison.value;
    limpiarContenedor()
    if(pokesFiltrados==null){
        let lista= await obtenerPokemones();
        pokesFiltrados=pokemonForType(lista,filtrarPoison.id);
        mostrarPokemones(pokesFiltrados)
    }
    else{
        pokesFiltrados=pokemonForType(pokesFiltrados,filtrarPoison.id);
        mostrarPokemones(pokesFiltrados);
    }
    mostrarPorcentaje(pokesFiltrados.length, tiposfiltros);
});

filtrarWater.addEventListener('click',async () =>{
    filtrarWater.style.border='4px solid blue';
    tiposfiltros=tiposfiltros+"  "+ filtrarWater.value;
    limpiarContenedor()
    if(pokesFiltrados==null){
        let lista= await obtenerPokemones();
        pokesFiltrados=pokemonForType(lista,filtrarWater.id);
        mostrarPokemones(pokesFiltrados)
    }
    else{
        pokesFiltrados=pokemonForType(pokesFiltrados,filtrarWater.id);
        mostrarPokemones(pokesFiltrados);
    }
    mostrarPorcentaje(pokesFiltrados.length, tiposfiltros);
});

filtrarGrass.addEventListener('click',async () =>{
    filtrarGrass.style.border='4px solid blue';
    tiposfiltros=tiposfiltros+"  "+ filtrarGrass.value;
    limpiarContenedor()
    if(pokesFiltrados==null){
        let lista= await obtenerPokemones();
        pokesFiltrados=pokemonForType(lista,filtrarGrass.id);
        mostrarPokemones(pokesFiltrados)
    }
    else{
        pokesFiltrados=pokemonForType(pokesFiltrados,filtrarGrass.id);
        mostrarPokemones(pokesFiltrados);
    }
    mostrarPorcentaje(pokesFiltrados.length, tiposfiltros);
});

filtrarFlying.addEventListener('click',async () =>{
    filtrarFlying.style.border='4px solid blue';
    tiposfiltros=tiposfiltros+"  "+ filtrarFlying.value;
    limpiarContenedor()
    if(pokesFiltrados==null){
        let lista= await obtenerPokemones();
        pokesFiltrados=pokemonForType(lista,filtrarFlying.id);
        mostrarPokemones(pokesFiltrados)
    }
    else{
        pokesFiltrados=pokemonForType(pokesFiltrados,filtrarFlying.id);
        mostrarPokemones(pokesFiltrados);
    }
    mostrarPorcentaje(pokesFiltrados.length, tiposfiltros);
});

function limpiarContenedor(){

    while(contenedorpoke.firstChild){
        contenedorpoke.removeChild(contenedorpoke.firstChild);
    }
    
}

function mostrarPokemones(pokes){
    for(let i=0;i<pokes.length;i++){
        document.querySelector("#contenedorPokemones").appendChild(crearTarjeta(pokes[i]));
    }
}

limpiarfiltros.addEventListener('click', ()=>{
    location.reload(true)
    //limpiarContenedor();
    pokesFiltrados=null;
})


