export const pokeArr = [];

async function fetchData() {
    try {
        for (let i = 1; i <= 251; i++) {
            let data1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            let resp = await data1.json();
            let pokeObj = {
                id: resp.id,
                name: resp.name,
                spriteLink: resp.sprites.front_default,
                type1: resp.types[0].type.name,
                type2: (resp.types.length > 1 ? resp.types[1].type.name : null)
            }
            pokeArr.push(pokeObj);
        }
    } catch (err) {
        console.log("[fetchData] Error:", err);
    }
    finally {
        console.log("Data count:", pokeArr.length);
    }
}
export default fetchData;