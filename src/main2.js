import pokemon from './data/pokemon/pokemon.js';

const listaDePokemon=pokemon,
      bontonCargarPoke=document.querySelector("#buttonCargarPokemom");
let cantidadDePokemonesMostrados=0;

window.addEventListener('Load',cargarPokemones());

bontonCargarPoke.addEventListener('click', () =>{
    if(cantidadDePokemonesMostrados<250)
        cargarPokemones();
});

function cargarPokemones(){

    let pokemonAgregado=0;
    for(let i=cantidadDePokemonesMostrados;i<cantidadDePokemonesMostrados+10;i++){
        if(i<listaDePokemon.pokemon.length){
            document.querySelector("#contenedorPokemones").appendChild(crearTarjeta(listaDePokemon.pokemon[i]));
            pokemonAgregado++;
        }
    }
    cantidadDePokemonesMostrados+=pokemonAgregado;
}

function crearTarjeta(pokeTarj){

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
    parrafoTarjeta.textContent=`Tipo:  ${obtenerType(pokeTarj.type)}`;
    let parrafoResist=document.createElement("p");
    parrafoResist.classList.add("resistencia_pokemon");
    parrafoResist.textContent=` Resistencia:  ${obtenerResistencia(pokeTarj.resistant)}`
    divTarjeta.appendChild(imgPokemon);
    divTarjeta.insertAdjacentElement("afterbegin",nombrePokemon);
    divTarjeta.insertAdjacentElement("afterbegin",numPokemon);
    /* divTarjeta.insertAdjacentElement("beforeend",parrafoTarjeta);
    divTarjeta.insertAdjacentElement("beforeend",parrafoResist);
 */
    return divTarjeta;
}

function obtenerType(tipo){
    let tipos="";
    for(let i=0;i<tipo.length;i++){
        tipos=`${tipo[i]}  ${tipos} `;
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

