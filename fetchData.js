const pokeData = {};

async function fetchData() {
    // 1-151 : I Generation
    // - 251 : II Generation
    // - 386 : III Generation
    // - 493 : IV Generation
    // - 649 : V Generation
    // - 721 : VI Generation
    // - 809 : VII Generation
    // - 905 : VIII Generation
    // - 1008 : IX Generation
    for (let i=1; i<152; i++){
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        let resp = await data.json();
        let pokeObj = {
            id: resp.id,
            name: resp.name,
            description: '~ description',
            spriteLink: resp.sprites.front_default,
            type1: resp.types[0].type.name,
            type2: null
        }
        if (resp.types.length > 1){
            pokeObj.type2 = resp.types[1].type.name;
        }
        console.log('Utworzony obiekt:', pokeObj);
        // >> dodanie obiektu do puli pokeData{}
    }
}