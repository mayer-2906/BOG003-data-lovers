import { pokemonForType, consultarPokemonPorEstadistica, consultarPokemonPS,consultarPokemonPC, consutarPokemonAtaque, consultarPokemonDefensa, sortPeso } from '../src/data.js';
  //    } from '../src/data.js';
const arrayPrueba=[
  {
  "num": "001",
  "name": "bulbasaur",
  "weight": "6.9",
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
    "weight": "85.5",
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
    "weight": "19.5",
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
      "weight": "6.9",
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
        "weight": "19.5",
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

  const ordStats=[

    {
      "num": "011",
      "name": "metapod",
      "weight": "85.5",
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
      "weight": "19.5",
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
      "weight": "6.9",
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
      }
  ]
  it('return lista ordenada por stats',()=>{
    expect(consultarPokemonPorEstadistica(arrayPrueba)).toStrictEqual(ordStats)
  })
});

describe('consultarPokemonPS', () => {
  it('is a function', () => {
    expect(typeof consultarPokemonPS).toBe('function');
  });
  const ordenadoPS=[
    {
      "num": "011",
      "name": "metapod",
      "weight": "85.5",
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
      "weight": "19.5",
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
      "weight": "6.9",
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

describe('consultarPokemonPC', () => {
  it('is a function', () => {
    expect(typeof consultarPokemonPC).toBe('function');
  });

  const ordenadosPC=[
    {
      "num": "011",
      "name": "metapod",
      "weight": "85.5",
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
      "weight": "19.5",
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
      "weight": "6.9",
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

  it('return pokemones ordenados por PC', () => {
    expect(consultarPokemonPC(arrayPrueba)).toStrictEqual(ordenadosPC);
  });

});


describe('consutarPokemonAtaque', () => {
  it('is a function', () => {
    expect(typeof consutarPokemonAtaque).toBe('function');
  });

  const ordenadosPC=[
    {
      "num": "011",
      "name": "metapod",
      "weight": "85.5",
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
      "weight": "19.5",
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
      "weight": "6.9",
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

  it('return pokemones ordenados por ataque', () => {
    expect(consutarPokemonAtaque(arrayPrueba)).toStrictEqual(ordenadosPC);
  });

});


describe('consultarPokemonDefensa', () => {
  it('is a function', () => {
    expect(typeof consultarPokemonDefensa).toBe('function');
  });

  const ordenadosPD=[
    {
      "num": "011",
      "name": "metapod",
      "weight": "85.5",
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
      "weight": "19.5",
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
      "weight": "6.9",
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
    }  
  ];

  it('return pokemones ordenados por Defensa', () => {
    expect(consultarPokemonDefensa(arrayPrueba)).toStrictEqual(ordenadosPD);
  });

});


describe('sortPeso', () => {
  it('is a function', () => {
    expect(typeof sortPeso).toBe('function');
  });

  const ordenadosPW=[
    {
      "num": "011",
      "name": "metapod",
      "weight": "85.5",
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
      "weight": "19.5",
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
      "weight": "6.9",
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
    }      
  ];

  it('return pokemones ordenados por peso de mayor a menor', () => {
    expect(sortPeso(arrayPrueba, 1)).toStrictEqual(ordenadosPW);
  });

  
  const ordenadosPW2=[
    {
      "num": "001",
      "name": "bulbasaur",
      "weight": "6.9",
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
      "num": "033",
      "name": "nidorino",
      "weight": "19.5",
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
      "num": "011",
      "name": "metapod",
      "weight": "85.5",
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
    }      
  ];

  it('return pokemones ordenados por peso de menor a mayor', () => {
    expect(sortPeso(arrayPrueba, 2)).toStrictEqual(ordenadosPW2);
  });

  const pokePesados=[
    {
      "num": "001",
      "name": "bulbasaur",
      "weight": "6.9",
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
        "weight": "580",
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
        "num": "011",
        "name": "metapod",
        "weight": "750",
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
      }
  ]

  const respuesta3=[
    {
      "num": "001",
      "name": "bulbasaur",
      "weight": "6.9",
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
      }
  ]
  
  it('return pokemones de peso menor a 300', () => {
    expect(sortPeso(pokePesados, 3)).toStrictEqual(respuesta3);
  });

  const respuesta4=[
    {
      "num": "033",
      "name": "nidorino",
      "weight": "580",
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

  it('return pokemones de peso mayor a 300 y menor de 600', () => {
    expect(sortPeso(pokePesados, 4)).toStrictEqual(respuesta4);
  });

  const respuesta5=[
    {
      "num": "011",
      "name": "metapod",
      "weight": "750",
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
    }
  ]

  
  it('return pokemones de peso mayor a 600', () => {
    expect(sortPeso(pokePesados, 5)).toStrictEqual(respuesta5);
  });

});
