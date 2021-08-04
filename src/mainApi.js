///const ListaDePokemones=fetchData();

const bontonCargarPoke=document.getElementById("buttonCargarPokemom");
let contadorPokemones=0;
const fetchData = async () =>{
    try {
        let pokemones=[];
        for(let i=contadorPokemones+1;i<contadorPokemones+31;i++){
            const respuesta= await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const poke= await respuesta.json();
            //console.log(typeof(poke));
            console.log(poke);
            const newPoke={
                num:poke.id,
                name:poke.name,
                weight:poke.weight,
                img:poke.sprites.front_default,
            }
            pokemones.push(newPoke);
        }
        //console.table(pokemones);
        return pokemones
        /* pokemones.forEach(element =>{
            console.log(`Num: ${element.id}Nombre: ${element.name} peso: ${element.weight}`);
        }) */
        
    } catch (error) {
        console.log("no se pudo traer la api");
    }
}

window.addEventListener('Load', async () =>{
    let resolve="";
    try {
        resolve= await cargarPokemones();
    } catch (error) {
        console.log(resolve);
    }
});

bontonCargarPoke.addEventListener('click', async () =>{
    
    let respuesta="";
    try {
         respuesta= await cargarPokemones();
    } catch (error) {
        console.log(respuesta);
    }
    
});

const cargarPokemones= async () =>{

    try {
        let pokemonAgregado=0;
        let listaDePokemon= await fetchData();
        while(pokemonAgregado<listaDePokemon.length){
            document.querySelector("#contenedorPokemones").appendChild(crearTarjeta(listaDePokemon[pokemonAgregado]));
            pokemonAgregado++;
        
        }
        contadorPokemones+=pokemonAgregado;
        return true;
    } catch (error) {
        console.log(error);
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
    //let parrafoTarjeta=document.createElement("p");
    //parrafoTarjeta.classList.add("tipo_pokemon");
    //parrafoTarjeta.textContent=`Tipo:  ${obtenerType(pokeTarj.type)}`;
    //let parrafoResist=document.createElement("p");
    //parrafoResist.classList.add("resistencia_pokemon");
    //parrafoResist.textContent=` Resistencia:  ${obtenerResistencia(pokeTarj.resistant)}`
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