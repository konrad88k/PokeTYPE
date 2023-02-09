# [>> PokeTYPE <<](https://poke-type.netlify.app)

// In-app functions:
+ fetch data from PokeAPI (id, image, name, description, type) - 'https://pokeapi.co/docs/v2'
+ create pokemon card list
+ show cards depend on type selection (if no tab selected show all cards)
+ choose pokemon type - toggle on/off (max 2)

// User can pick up to 2 of the filter options to sort cards in type order.

// Layout similar to robofriends:
- header (PokeTYPE)
- poketype icons - 'https://archives.bulbagarden.net/wiki/Category:Type_icons'
- some pokemon graphics (eg. pikachu)
- generation tabs (I/II/III)
- filter options (tabs)
- poke cards list (depends of type and generation)
- footer (fixed position)
- page up button (absolute position, visibility from 150vh scroll)

// All pokemons displays as a cards with:
1. "https://pokeapi.co/api/v2/pokemon/{id}/" -> sprites -> front_default.png'
2. id + name
3. [optional] Pokemon -> Characteristic -> description: ex. 'Loves to eat' | (max 30)

// Build with ES6 + Webpack. - 'https://webpack.js.org/guides/installation/'

// Deploy with GitHub Pages or Netlify.

---
    Generations of pokemons:
    // 1-151 : I Generation
    // - 251 : II Generation
    // - 386 : III Generation
    // - 493 : IV Generation
    // - 649 : V Generation
    // - 721 : VI Generation
    // - 809 : VII Generation 
    // - 905 : VIII Generation <-- no sprites
    // - 1008 : IX Generation <-- no sprites
---