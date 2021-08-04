// estas funciones son de ejemplo

export const pokemonForType=(pokemon,tipo)=>{
  let pokemones=pokemon.filter(poke=>poke.type.includes(tipo));
  return pokemones;
  
};

export const cargarPokemones= (cantidadDePokemonesMostrados,pokemon)=>{

  let pokemonAgregado=0;
    for(let i=cantidadDePokemonesMostrados;i<cantidadDePokemonesMostrados+10;i++){
        if(i<pokemon.length){
            document.querySelector("#contenedorPokemones").appendChild(crearTarjeta(pokemon[i]));
            pokemonAgregado++;
        }
    }
    cantidadDePokemonesMostrados+=pokemonAgregado;
};

export const consultarPokemonPorEstadistica=(pokemones)=>{

  pokemones.sort(function(a,b){return (obtenerPromedioEstadistica(b)-obtenerPromedioEstadistica(a))})
  pokemones.forEach(element => {
    console.log(element.num+" "+element.name+" "+obtenerPromedioEstadistica(element));
  }); 
  return pokemones;
};

export const consultarPokemonPS=(pokemones)=>{

  return pokemones.sort(function(a,b){return (b.stats['base-stamina']-a.stats['base-stamina'])});

}

export const consultarPokemonPC=(pokemones)=>{
  return pokemones.sort(function(a,b){return (b.stats['max-cp']-a.stats['max-cp'])})
}

export const consutarPokemonAtaque=(pokemones)=>{
  return pokemones.sort(function(a,b){return (b.stats['base-attack']-a.stats['base-attack'])})
}

export const consultarPokemonDefensa=(pokemones)=>{
  return pokemones.sort(function(a,b){return (b.stats['base-defense']-a.stats['base-defense'])})
}
/*"base-attack": "118",
      "base-defense": "111",
      "base-stamina": "128",
      "max-cp": "1115",
      "max-hp": "113" */
export const obtenerPromedioEstadistica=(poke)=>{

    let baseAt=parseInt(poke.stats['base-attack']);
    let baseDf=parseInt(poke.stats['base-defense']);
    let stamina=parseInt(poke.stats['base-stamina']);
    let maxcp=parseInt(poke.stats['max-cp']);
    let maxhp=parseInt(poke.stats['max-hp']);
    let media=(baseAt+baseDf+stamina+maxcp+maxhp)/5;
    
    return media;
}

const data={

  /* lista:new Array(), */
  
  ordenPesoMayorAMenor(){

  let pokemonesMayorAMenor=new  Array();
  pokemonesMayorAMenor =lista;
  //return pokemonesMayorAMenor.sort(function(a,b){return (Number(b.size.weight.replace(/[a-z]|[\s]/mg,""))-Number(a.size.weight.replace(/[a-z]|[\s]/mg,"")))});
  pokemonesMayorAMenor.sort(function(a,b){return (Number(a.size.weight.replace(/[a-z]|[\s]/mg,""))-Number(b.size.weight.replace(/[a-z]|[\s]/mg,"")))});
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
}

export default data;
