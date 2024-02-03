export const DashboardConfiguration = {
  'pokemon': {
    columns: [
      { // First column
        size: 1, // The size of the column
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
      { // Second column
        size: 2, // The size of the column
        heading: 'Pokemon counts',
        widgets: [
          /**
               * ISSUE: the property count is not provided, or if fetching with API.
               * The array which is the one that need to be considered for counting is not defined
               * for example: pokemon_species_details
               *  - this contains the array of genderless pokemons, and we can get the count of it for displaying
               *  - Howevever on the configuration the key property which is the pokemon_species_details is not defined
               *  - Thiking of having a property name arrayKey: string
               */

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
    ],
  },
};
