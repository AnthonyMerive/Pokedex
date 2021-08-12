
const form = document.querySelector('#form');
const main = document.querySelector('#main');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const id = document.querySelector('#pokeNumber').value;
    console.log(id);

    const getPokemon = async (num) => {

        url = `https://pokeapi.co/api/v2/pokemon/${num}`
        const res = await fetch(url)
        const data = await res.json()
        showPokemon(data)
    }
    getPokemon(id);
    
    function showPokemon(pokemon) {
        main.innerHTML = ''
        //no supe como recorrer el array siendo mas especifico
        //con lo cual tome el contenido del array y lo asigne
        //a variables que son luego mostradas con inner
        const id = pokemon.id;
        console.log(id)
        const name = pokemon.name;
        console.log(name)
        const image = pokemon.sprites.other.dream_world.front_default;
        console.log(image)
        const pokeEl = document.createElement('div')
        pokeEl.classList.add('poke')

        pokeEl.innerHTML = `
            <img src="${image}" alt="">
            <div class="poke-info">
            <h3>${name}</h3>
            <span class=""># ${id}</span>
            </div>
            `
        main.appendChild(pokeEl)

        limpiaFormulario()
    }

    function limpiaFormulario(){
        document.getElementById("form").reset();
    }
})



