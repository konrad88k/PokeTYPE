// Fetch data from PokeAPI - 'https://pokeapi.co/docs/v2'

// Layout similar to robofriends:
- header (white)
- poketype icon - 'https://archives.bulbagarden.net/wiki/Category:Type_icons'
- filter options (tabs)
- poke cards (color depends of type)

// All pokemons displays as a cards with:
1. "https://pokeapi.co/api/v2/pokemon/{id}/" -> sprites -> front_default.png'
2. id + name
3. Pokemon -> Characteristic -> description: ex. 'Loves to eat'

// User can pick one of the filter options to sort cards in type order.
PokeType onClick:
- change header shadow color
- change icon 
- sort pokemon cards

// Build with ES6 + Webpack. - 'https://webpack.js.org/guides/installation/'

// Deploy with GitHub Pages.