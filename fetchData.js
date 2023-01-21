const pokeDataArr = [];
const fetchData = async function() {
    try {
        for (let i=1; i<=151; i++){
            let data1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            let resp = await data1.json();
            let pokeObj = {
                id: resp.id,
                name: resp.name,
                spriteLink: resp.sprites.front_default,
                type1: resp.types[0].type.name,
                type2:(resp.types.length > 1 ? resp.types[1].type.name : null)
            }
            console.log('Pokemon:', pokeObj);
            // const pokeArr = Object.keys(pokeObj); // Obj to Arr
            pokeDataArr.push(pokeObj);
        }
    } catch(err) {
        console.log("Oops!", err);
    }
    finally {
        console.log('OUTPUT:', pokeDataArr);
    }
}
fetchData();