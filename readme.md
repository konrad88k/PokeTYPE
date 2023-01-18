// In-app features:
+ fetch data from PokeAPI (id, image, name, description, type) - 'https://pokeapi.co/docs/v2'
+ single pokemon card (id, image, name, desctiption) x 1279
+ show pokemon cards depend on type selection (default: none -> all cards)
+ event handler: click on type icon (type toggle on/off)

// User can pick up to 3 of the filter options to sort cards in type order.

// Layout similar to robofriends:
- header (white)
- poketype icons (max 3 at once) - 'https://archives.bulbagarden.net/wiki/Category:Type_icons'
- filter options (tabs)
- poke cards (color depends of type)

// All pokemons displays as a cards with:
1. "https://pokeapi.co/api/v2/pokemon/{id}/" -> sprites -> front_default.png'
2. id + name
3. Pokemon -> Characteristic -> description: ex. 'Loves to eat'

// Build with ES6 + Webpack. - 'https://webpack.js.org/guides/installation/'

// Deploy with GitHub Pages.