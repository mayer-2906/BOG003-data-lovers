// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const pokemonForType=(pokemon)=>{
  /*let poke=new Object();*/
  /* let pokemones=listaDePokemon.pokemon.filter(poke=>poke.type.filter(tipo=>tipo=="fire")=="fire"); */
  let pokemones=pokemon.filter(poke=>poke.type.includes("fire"));

  /* listaDePokemon.pokemon.forEach(Element=>{
      for(let i=0;i<Element.type.length;i++){
          if(Element.type[i]=="fire"){
              pokemones.push(Element);
              console.log(Element);
          }
      }        
  }) */
  return pokemones;
  
};

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
