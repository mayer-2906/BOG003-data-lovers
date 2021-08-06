///const ListaDePokemones=fetchData();


const bontonCargarPoke=document.getElementById("buttonCargarPokemom"),
      contenedorpoke=document.querySelector("#contenedorPokemones");
      
let listapokemones=[];
let contadorPokemones=0;
const fetchData = async () =>{
    try {
        let pokemones=[];
        for(let i=contadorPokemones+1;i<898;i++){
            const respuesta= await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const poke= await respuesta.json();
            //console.log(typeof(poke));
            //console.log(poke);
            const newPoke={
                num:poke.id,
                name:poke.name,
                weight:poke.weight,
                img:poke.sprites.front_default,
                height:poke.height,
                stats:poke.stats,
                types:poke.types,
            }
            //console.log(newPoke);
            pokemones.push(newPoke);
            listapokemones.push(newPoke);
        }
        //console.table(pokemones);

        return pokemones
        /* pokemones.forEach(element =>{
            console.log(`Num: ${element.id}Nombre: ${element.name} peso: ${element.weight}`);
        }) */
        
    } catch (error) {
        //console.log("no se pudo traer la api");
    }
}

//window.addEventListener('Load', async () =>{
//    let resolve="";
//    try {
//        resolve= await cargarPokemones();
//    } catch (error) {
//        console.log(resolve);
//    }
//});

bontonCargarPoke.addEventListener('click', async () =>{
    
    //let respuesta="";
    try {
        bontonCargarPoke.style.display="none";
        await cargarPokemones();
    } catch (error) {
        //console.log(respuesta);
    }
    
});


/* function limpiarContenedor(){

    while(contenedorpoke.firstChild){
        contenedorpoke.removeChild(contenedorpoke.firstChild);
    }
} */

const cargarPokemones= async () =>{

    try {
        let pokemonAgregado=0;
        let listaDePokemon= await fetchData();
        while(pokemonAgregado<listaDePokemon.length){
            contenedorpoke.appendChild(crearTarjeta(listaDePokemon[pokemonAgregado]));
            pokemonAgregado++;
        
        }
        contadorPokemones+=pokemonAgregado;
        return true;
    } catch (error) {
        //console.log(error);
        return false;
    }
    
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
    let pesoPoke=document.createElement("p");
    pesoPoke.classList.add("peso_poke");
    pesoPoke.textContent=`peso:  ${pokeTarj.weight}`;
    //let parrafoResist=document.createElement("p");
    //parrafoResist.classList.add("resistencia_pokemon");
    //parrafoResist.textContent=` Resistencia:  ${obtenerResistencia(pokeTarj.resistant)}`
    divTarjeta.appendChild(imgPokemon);
    divTarjeta.insertAdjacentElement("afterbegin",nombrePokemon);
    divTarjeta.insertAdjacentElement("afterbegin",numPokemon);
    divTarjeta.insertAdjacentElement("beforeend",pesoPoke);
    /*divTarjeta.insertAdjacentElement("beforeend",parrafoResist);
 */
    return divTarjeta;
}

