import pokemon from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
const listaDePokemon=pokemon;

let mostrarPrimeros = function(n){
    let pokemones=new Array();
    for(let i=0; i < n; i++){
        pokemones[i]=listaDePokemon.pokemon[i];
        console.table(pokemones[i]);
    }
    return pokemones;

} 
/* mostrarPrimeros(2); */
/* console.log(listaDePokemon) */
/* Funcion pa filtrar los pokemon por size//mostraremos lo height <1.0 */
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

/* console.table(pokemonSize()) */

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

console.table(pokemonForType());





/*console.table(mostrarPrimeros(2));*/
