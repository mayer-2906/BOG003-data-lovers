import { pokemonForType, consultarPokemonPorEstadistica, consultarPokemonPS } from '../src/data.js';
  //, consultarPokemonPS, consultarPokemonPC, consutarPokemonAtaque, consultarPokemonDefensa, sortPes } from '../src/data.js';
const arrayPrueba=[
  {
  "num": "001",
  "name": "bulbasaur",
  "weight": "6.9 kg",
  "stats": {
    "base-attack": "118",
    "base-defense": "111",
    "base-stamina": "128",
    "max-cp": "1115",
    "max-hp": "113"
  },
  "type": [
    "grass",
    "poison"
  ],
  },
  {
    "num": "011",
    "name": "metapod",
    "weight": "85.5 kg",
    "type": [
      "water"
    ],
    "stats": {
      "base-attack": "171",
      "base-defense": "207",
      "base-stamina": "188",
      "max-cp": "2466",
      "max-hp": "160"
    },
  },
  {
    "num": "033",
    "name": "nidorino",
    "weight": "19.5 kg",
    "type": [
      "poison"
    ],
    "stats": {
      "base-attack": "137",
      "base-defense": "111",
      "base-stamina": "156",
      "max-cp": "1393",
      "max-hp": "135"
    },
  }
];

describe('pokemonForType', () => {
  it('is a function', () => {
    expect(typeof pokemonForType).toBe('function');
  });
  const respuesta=[
    {
      "num": "001",
      "name": "bulbasaur",
      "weight": "6.9 kg",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      },
      "type": [
        "grass",
        "poison"
      ]
      },
      {
        "num": "033",
        "name": "nidorino",
        "weight": "19.5 kg",
        "type": [
          "poison"
        ],
        "stats": {
          "base-attack": "137",
          "base-defense": "111",
          "base-stamina": "156",
          "max-cp": "1393",
          "max-hp": "135"
        },
      }
  ]
  it('returns `pokemonForType`', () => {
    expect(pokemonForType(arrayPrueba,"poison")).toStrictEqual(respuesta);
  });
});


 describe('consultarPokemonPorEstadistica', () => {
  it('is a function', () => {
    expect(typeof consultarPokemonPorEstadistica).toBe('function');
  });
});

describe('consultarPokemonPS', () => {
  it('is a function', () => {
    expect(typeof consultarPokemonPS).toBe('function');
  });
  const ordenadoPS=[
    {
      "num": "011",
      "name": "metapod",
      "weight": "85.5 kg",
      "type": [
        "water"
      ],
      "stats": {
        "base-attack": "171",
        "base-defense": "207",
        "base-stamina": "188",
        "max-cp": "2466",
        "max-hp": "160"
      },
    },
    {
      "num": "033",
      "name": "nidorino",
      "weight": "19.5 kg",
      "type": [
        "poison"
      ],
      "stats": {
        "base-attack": "137",
        "base-defense": "111",
        "base-stamina": "156",
        "max-cp": "1393",
        "max-hp": "135"
      },
    },
    {
      "num": "001",
      "name": "bulbasaur",
      "weight": "6.9 kg",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      },
      "type": [
        "grass",
        "poison"
      ],
    },
  ];
  
  it('return pokemones ordenados por PS', () => {
    expect(consultarPokemonPS(arrayPrueba)).toStrictEqual(ordenadoPS);
  });

});
 