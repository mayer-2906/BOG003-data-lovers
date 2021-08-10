import pokemon from './data/pokemon/pokemon.js';
import {consultarPokemonPorEstadistica} from './data.js';
import {consultarPokemonPS} from './data.js';
import {consultarPokemonPC} from './data.js';
import {consutarPokemonAtaque} from './data.js';
import {consultarPokemonDefensa} from './data.js';
import {obtenerPromedioEstadistica} from './data.js';



const selectOrden=document.querySelector("#orden"),
      contenedorpoke=document.querySelector("#contenedorPokemones"),
      //tarjeta=document.querySelectorAll(".tarjetaPokemon"),
      pokemones=pokemon.pokemon;


selectOrden.addEventListener("change",(e)=>{
    let opcion=e.target.value;
    
    let listaPokemon=[...pokemones];
    
    switch(opcion){

        case "estadistica": 
            limpiarContenedor();
            cargarPokemones(consultarPokemonPorEstadistica(listaPokemon)); 
            break;
        case "puntosDeSalud":
            limpiarContenedor();
            cargarPokemones(consultarPokemonPS(listaPokemon));
            break;
        case "puntosDeCombate":
            limpiarContenedor();
            cargarPokemones(consultarPokemonPC(listaPokemon));
            break;
        case "ataqueEspecial":
            limpiarContenedor();
            cargarPokemones(consutarPokemonAtaque(listaPokemon));
            break;
        case "puntosDeDefensa":
            limpiarContenedor();
            cargarPokemones(consultarPokemonDefensa(listaPokemon));
            break;
    }       
    
})

/*Funcion para limpiar el html */
function limpiarContenedor(){

    while(contenedorpoke.firstChild){
        contenedorpoke.removeChild(contenedorpoke.firstChild);
    }
}

function cargarPokemones(lista){

    for(let i=0;i<lista.length;i++){
            contenedorpoke.appendChild(crearTarjeta(lista[i]));
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
        tipos=`${tipo[i]}  ${tipos} `;
        //console.log(tipos);
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
/* 
function girarTarjeta(e){
    e.classList.toggle("active");
}
 */