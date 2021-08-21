
export const pokemonForType=(pokemon,tipo)=>{
  let pokemones=pokemon.filter(poke=>poke.type.includes(tipo));
  return pokemones;
  
};


export const consultarPokemonPorEstadistica=(pokemones)=>{

  pokemones.sort((a,b)=> (obtenerPromedioEstadistica(b)-obtenerPromedioEstadistica(a)))
  
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

export const obtenerPromedioEstadistica=(poke)=>{

    let baseAt=parseInt(poke.stats['base-attack']);
    let baseDf=parseInt(poke.stats['base-defense']);
    let stamina=parseInt(poke.stats['base-stamina']);
    let maxcp=parseInt(poke.stats['max-cp']);
    let maxhp=parseInt(poke.stats['max-hp']);
    let media=(baseAt+baseDf+stamina+maxcp+maxhp)/5;
    
    return media;
}

export const sortPeso = (lista,opcion)=>{
    switch(opcion){
      case 1:
         lista.sort(function(a,b){return (b.weight-a.weight)});
         break;
      case 2:
         lista.sort(function(a,b){return (a.weight-b.weight)});
         break;
      case 3:
        lista=lista.filter(pokemon=>pokemon.weight<=300);
        lista.sort(function(a,b){return (a.weight-b.weight)});
        break;
      case 4:
        lista=lista.filter(pokemon=>(pokemon.weight>300 && pokemon.weight<=600));
        lista.sort(function(a,b){return (a.weight-b.weight)});
        break;
        case 5:
          lista=lista.filter(pokemon=>pokemon.weight>600);
          lista.sort(function(a,b){return (a.weight-b.weight)});
          break; 
    }
     return lista;
}
