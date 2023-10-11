const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
const pokemonList = document.getElementById('pokemons');
const loadMoreButton = document.getElementById("loadMoreButton");

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="assets/images/svg/${pokemon.number}.svg" alt="${pokemon.name}">
        </div>

    </li>`
}



function loadPokemonItens(){
    pokeApi.getPokemons().then((pokemons = []) => {

        const newHtml = pokemons.map((convertPokemonToLi)).join('');
        pokemonList.innerHTML += newHtml;
    
    })
}








