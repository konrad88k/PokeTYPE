const pokeData = {};

async function fetchData() {
    for (let i=1; i<152; i++){
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        let obj = await data.json();
        let id = obj.id;
        let name = obj.name;
        let sprite = obj.sprites.front_default;
        let type1 = obj.types[0].type.name;
        let type2 = '-';
        if (obj.types.length > 1){
            type2 = obj.types[1].type.name;
        }
        let pokeObj = {
            id: id,
            name: name,
            description: '~ description',
            spriteLink: sprite,
            type1: type1,
            type2: type2
        }
        console.log('Utworzony obiekt:', pokeObj);
        // >> dodanie obiektu do puli pokeData{}
    }
}