import pokemon from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
const listaDePokemon=pokemon;
let cantidadDePokemonesMostrados=0;

/* console.log(typeof(listaDePokemon)); 

let mostrarPrimeros = function(n){
    let pokemones=new Array();
    for(let i=0; i < n; i++){
        pokemones[i]=listaDePokemon.pokemon[i];
        console.table(pokemones[i]);
    }
    return pokemones;

} */
/* mostrarPrimeros(2); */
/* console.log(listaDePokemon) */
/* Funcion para filtrar los pokemon por size//mostraremos lo height <1.0 */
let pokemonSize= function(){
    let poke=new Object();
    let pokemones=new Array();
    for(let i=0;i<listaDePokemon.pokemon.length;i++){
        poke=listaDePokemon.pokemon[i];
        /*console.log(`numero: ${poke.num} nombre: ${poke.name} altura: ${poke.size.height}`);-*/
        console.log(poke);
        /*console.table(poke);*/
        /*console.log(poke.size.height);*/
        let alt=poke.size.height.replace(/[a-z]|[\s]/mg,"");
        /*console.log(typeof(alt));
        console.log(alt);*/
        if(Number(alt)<=1){

            /*console.log("hola entre al if");*/
            pokemones.push(poke);
            
        }
    } 
    return pokemones;
}

/* console.table(pokemonSize()) */
/* Funcion para filtrar los pokemon por type, caso de ejemplo grass */
let pokemonForType=()=>{
    /*let poke=new Object();*/
    let pokemones=new Array();
    listaDePokemon.pokemon.forEach(Element=>{
        for(let i=0;i<Element.type.length;i++){
            if(Element.type[i]=="grass"){
                pokemones.push(Element);
                console.log(Element);
            }
        }        
    })
    return pokemones;
    
}

/* console.table(pokemonForType()); */

window.addEventListener('Load',cargarPokemones());

function cargarPokemones(){

    for(let i=cantidadDePokemonesMostrados;i<cantidadDePokemonesMostrados+250;i+=3){
        /*crea una fila de tarjetas */
        let fila=document.createElement("div");
        fila.classList.add("filaPokemon");
        for(let j=0;j<3;j++){
            fila.appendChild(crearTarjeta(listaDePokemon.pokemon[i+j]));
            /*cantidadDePokemonesMostrados++;*/
        }
        document.querySelector("#contenedor_Pokemones").appendChild(fila);
    }
    /*cantidadDePokemonesMostrados+=30;*/
}

/* 
function crearfila(){
} */

function crearTarjeta(pokeTarj){

    /* let nuevoPokemonTarjeta=[pokeTarj.name,pokeTarj.img,pokeTarj.type,pokeTarj.resistant];*/
    let divTarjeta=document.createElement("div");
    divTarjeta.classList.add("tarjetaPokemon");
    let imgPokemon=document.createElement("img");
    imgPokemon.classList.add("img_Pokemon");
    imgPokemon.src=pokeTarj.img;
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
    divTarjeta.insertAdjacentElement("beforeend",parrafoTarjeta);
    divTarjeta.insertAdjacentElement("beforeend",parrafoResist);

    return divTarjeta;
    /* console.table(nuevoPokemonTarjeta); */
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
        resistencias=`${resist[i]}  ${resistencias} `;
    }
    return resistencias;
}

console.log(crearTarjeta(listaDePokemon.pokemon[3]));



/*console.table(mostrarPrimeros(2));*/
