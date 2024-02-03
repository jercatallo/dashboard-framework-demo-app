export const configurationMock = {
  'pokemon': {
    'columns': [
      {
        'size': 1,
        'heading': 'General Pokemon information',
        'widgets': [
          {
            'title': 'Pokemon colours',
            'subtitle': 'List of all the colours',
            'type': 'list',
            'data': [
              {
                'name': 'black',
                'url': 'https://pokeapi.co/api/v2/pokemon-color/1/',
              },
              {
                'name': 'blue',
                'url': 'https://pokeapi.co/api/v2/pokemon-color/2/',
              },
              {
                'name': 'brown',
                'url': 'https://pokeapi.co/api/v2/pokemon-color/3/',
              },
              {
                'name': 'gray',
                'url': 'https://pokeapi.co/api/v2/pokemon-color/4/',
              },
              {
                'name': 'green',
                'url': 'https://pokeapi.co/api/v2/pokemon-color/5/',
              },
              {
                'name': 'pink',
                'url': 'https://pokeapi.co/api/v2/pokemon-color/6/',
              },
              {
                'name': 'purple',
                'url': 'https://pokeapi.co/api/v2/pokemon-color/7/',
              },
              {
                'name': 'red',
                'url': 'https://pokeapi.co/api/v2/pokemon-color/8/',
              },
              {
                'name': 'white',
                'url': 'https://pokeapi.co/api/v2/pokemon-color/9/',
              },
              {
                'name': 'yellow',
                'url': 'https://pokeapi.co/api/v2/pokemon-color/10/',
              },
            ],
            'icon': '/src/assets/pointer.png',
          },
          {
            'title': 'Pokemon Gender',
            'subtitle': 'List of all the genders',
            'type': 'list',
            'data': [
              {
                'name': 'female',
                'url': 'https://pokeapi.co/api/v2/gender/1/',
              },
              {
                'name': 'male',
                'url': 'https://pokeapi.co/api/v2/gender/2/',
              },
              {
                'name': 'genderless',
                'url': 'https://pokeapi.co/api/v2/gender/3/',
              },
            ],
            'icon': '/src/assets/pointer.png',
          },
        ],
        'icon': '/src/assets/pokeball-pokemon-svgrepo-com.svg',
      },
      {
        'size': 2,
        'heading': 'Pokemon counts',
        'widgets': [
          {
            'title': 'Genderless count',
            'type': 'number',
            'data': 161,
            'icon': '/src/assets/pikachu.png',
          },
          {
            'title': 'Female count',
            'type': 'number',
            'data': 841,
            'icon': '/src/assets/pikachu.png',
          },
          {
            'title': 'Male count',
            'type': 'number',
            'data': 828,
            'icon': '/src/assets/eevee.png',
          },
        ],
        'icon': '/src/assets/pokeball-pokemon-svgrepo-com.svg',
      },
    ],
  },

};
