const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeslot) => `<li class="type">${typeslot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${convertPokemonTypesToLi(pokemon.types).join('')}
            </ol>
            <img src="assets/images/svg/${pokemon.order}.svg" alt="${pokemon.name}">
        </div>

    </li>`
}

const pokemonList = document.getElementById('pokemons');

pokeApi.getPokemons().then((pokemons = []) => {

    const newHtml = pokemons.map((convertPokemonToLi)).join('');
    pokemonList.innerHTML = newHtml;

})








