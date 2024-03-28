export const DashboardConfiguration = {
  'pokemon': {
    columns: [
      {
        size: 1,
        heading: 'General Pokemon information',
        widgets: [
          {
            title: 'Pokemon colours',
            subtitle: 'List of all the colours',
            type: 'list',
            api: 'https://pokeapi.co/api/v2/pokemon-color/',
          },
          {
            title: 'Pokemon Gender',
            subtitle: 'List of all the genders',
            type: 'list',
            api: 'https://pokeapi.co/api/v2/gender/',
          },
        ],
      },
      {
        size: 2,
        heading: 'Pokemon counts',
        widgets: [
          {
            title: 'Genderless count',
            type: 'number',
            api: 'https://pokeapi.co/api/v2/gender/3/',
          },
          {
            title: 'Female count',
            type: 'number',
            api: 'https://pokeapi.co/api/v2/gender/1/',
          },
          {
            title: 'Male count',
            type: 'number',
            api: 'https://pokeapi.co/api/v2/gender/2/',
          },
        ],
      },
      {
        size: 1,
        heading: 'General Pokemon information',
        widgets: [
          {
            title: 'Pokemon abilities',
            subtitle: 'List of all the abilities',
            type: 'list',
            api: 'https://pokeapi.co/api/v2/ability/',
          },
        ],
      },
      {
        size: 1,
        heading: 'Pokemon counts',
        widgets: [
            {
              title: 'Pokemon type count',
              type: 'number',
              api: 'https://pokeapi.co/api/v2/type/',
            },
            {
              title: 'Pokemon move count',
              type: 'number',
              api: 'https://pokeapi.co/api/v2/move/',
            },
        ],
      },
      {
        size: 1,
        heading: 'General Pokemon information',
        widgets: [
          {
            title: 'Pokemon forms',
            subtitle: 'List of all the forms',
            type: 'list',
            api: 'https://pokeapi.co/api/v2/pokemon-form/',
          },
        ],
      },
      {
        size: 1,
        heading: 'Pokemon habitats',
        widgets: [
          {
            title: 'Pokemon habitat count',
            type: 'number',
            api: 'https://pokeapi.co/api/v2/pokemon-habitat/',
          },
          {
            title: 'Pokemon shape count',
            type: 'number',
            api: 'https://pokeapi.co/api/v2/pokemon-shape/',
          },
          {
            title: 'Pokemon location area count',
            type: 'number',
            api: 'https://pokeapi.co/api/v2/location-area/',
          },
        ],
      },
      { // Fifth column
        size: 1, // The size of the column
        heading: 'Pokemon items',
        widgets: [
          {
            title: 'Pokemon item count',
            type: 'number',
            api: 'https://pokeapi.co/api/v2/item/',
          },
          {
            title: 'Pokemon item attribute count',
            type: 'number',
            api: 'https://pokeapi.co/api/v2/item-attribute/',
          },
        ],
      },
      { // Sixth column
        size: 2, // The size of the column
        heading: 'Pokemon machines and contests',
        widgets: [
          {
            title: 'Pokemon machine count',
            type: 'number',
            api: 'https://pokeapi.co/api/v2/machine/',
          },
          {
            title: 'Pokemon contest type count',
            type: 'number',
            api: 'https://pokeapi.co/api/v2/contest-type/',
          },
        ],
      },
      { // Fourth column
        size: 2, // The size of the column
        heading: 'Pokemon encounters',
        widgets: [
          {
            title: 'Pokemon encounter method count',
            type: 'number',
            api: 'https://pokeapi.co/api/v2/encounter-method/',
          },
          {
            title: 'Pokemon encounter condition count',
            type: 'number',
            api: 'https://pokeapi.co/api/v2/encounter-condition/',
          },
          {
            title: 'Pokemon encounter condition value count',
            type: 'number',
            api: 'https://pokeapi.co/api/v2/encounter-condition-value/',
          },
        ],
      },
    ],
  },
};
