# [PokeTYPE](https://poke-type.netlify.app)

### Work in progress..

Web application created for training purposes. Pokemon cards were based on data from PokeAPI.
User can pick up to 2 of the filter options to sort cards in type order.

// In-app functions
+ fetch data from PokeAPI (id, image, name, description, type) - 'https://pokeapi.co/docs/v2'
+ create pokemon card list
+ show cards depend on type selection (if no tab selected show all cards)
+ choose pokemon type - toggle on/off (max 2)
+ [to do] click on card -> flip it and show flavor text on the back - 'https://pokeapi.co/api/v2/pokemon-species/'
+ [to do] choose pokemon generation (I - IX)

// Layout
- header (PokeTYPE)
- [to do] poketype icons - 'https://archives.bulbagarden.net/wiki/Category:Type_icons'
- some poke graphics (eg. pikachu)
- [to do] generation tabs (I/II/III..)
- filter options (tabs)
- poke cards list (depends of type and generation)
- hint (fixed position)
- page up button (arrow)

// Single pokemon card
1. "https://pokeapi.co/api/v2/pokemon/{id}/" -> sprites -> front_default.png'
2. id + name
3. [optional] text on the back

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