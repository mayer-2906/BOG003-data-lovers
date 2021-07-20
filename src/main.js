import pokemon from './data/pokemon/pokemon.js';
import data from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
const listaDePokemon=pokemon,
      bontonCargarPoke=document.querySelector("#buttonCargarPokemom");
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
        /*console.log(poke);*/
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

/*FUNCION PARA ORDENAR LOS POKEMONES POR EL MAS PESADO*/
let ordenPesoMayorAMenor=()=>{

    let pokemonesMayorAMenor=new  Array();
    pokemonesMayorAMenor =[...listaDePokemon.pokemon];
    //return pokemonesMayorAMenor.sort(function(a,b){return (Number(b.size.weight.replace(/[a-z]|[\s]/mg,""))-Number(a.size.weight.replace(/[a-z]|[\s]/mg,"")))});
    pokemonesMayorAMenor.sort(function(a,b){return (Number(b.size.weight.replace(/[a-z]|[\s]/mg,""))-Number(a.size.weight.replace(/[a-z]|[\s]/mg,"")))});
    let pokemonesOrdenados=new Array(Object);
    for(let i=0;i<pokemonesMayorAMenor.length-1;i++){
        let poke={
            
            /* let {num, name, size.weight}=pokemonesMayorAMenor[1]; */
            
            numero: pokemonesMayorAMenor[i].num,
            nombre: pokemonesMayorAMenor[i].name,
            peso: pokemonesMayorAMenor[i].size.weight
        }
        pokemonesOrdenados.push(poke);
    }
    return pokemonesOrdenados;
}

/**voy a intentar crear u objeto y agregarle atributos */

console.table(ordenPesoMayorAMenor());
 
/* console.table(pokemonSize())
/* Funcion para filtrar los pokemon por type, caso de ejemplo grass */
/* let pokemonForType=()=>{
    /*let poke=new Object();*/
    /* let pokemones=listaDePokemon.pokemon.filter(poke=>poke.type.filter(tipo=>tipo=="fire")=="fire"); 
    let pokemones=listaDePokemon.pokemon.filter(poke=>poke.type.includes("fire"));

    /* listaDePokemon.pokemon.forEach(Element=>{
        for(let i=0;i<Element.type.length;i++){
            if(Element.type[i]=="fire"){
                pokemones.push(Element);
                console.log(Element);
            }
        }        
    }) 
    return pokemones;
    
} */
/*buscar para hacerlo con el metodo includes */
/* console.table(pokemonForType());  */

window.addEventListener('Load',cargarPokemones());

bontonCargarPoke.addEventListener('click', () =>{
    if(cantidadDePokemonesMostrados<250)
        cargarPokemones();
});

function cargarPokemones(){

    let pokemonAgregado=0;
    for(let i=cantidadDePokemonesMostrados;i<cantidadDePokemonesMostrados+30;i+=3){
        /*crea una fila de tarjetas */
        let fila=document.createElement("div");
        fila.classList.add("filaPokemon");
        for(let j=0;j<3;j++){
            fila.appendChild(crearTarjeta(listaDePokemon.pokemon[i+j]));
            pokemonAgregado++;
        }
        document.querySelector("#contenedor_Pokemones").appendChild(fila);
    }
    cantidadDePokemonesMostrados+=pokemonAgregado;
}



/* 
function crearfila(){
} */

/* function crearTarjeta(pokeTarj){

    /* let nuevoPokemonTarjeta=[pokeTarj.name,pokeTarj.img,pokeTarj.type,pokeTarj.resistant];
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
    /* console.table(nuevoPokemonTarjeta); 
} */
/*Intentaremos hacer una tarjeta trasera para al dar click rote 180 grados y muestre los datos del pokemon */
function crearTarjeta(pokeTarj){

    /* let contenedorFichaPokemon=document.createElement("DIV");     */
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
        resistencias=`${resist[i]},  ${resistencias} `;
    }
    return resistencias;
}

/*console.log(crearTarjeta(listaDePokemon.pokemon[3]));*/



/*console.table(mostrarPrimeros(2));*/
