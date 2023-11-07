const pokemonList = document.getElementById('pokemons');
const pokemonShowUp = document.getElementById('pokemonShowUp');
const loadMoreButton = document.getElementById("loadMoreButton");
const pokemon = document.getElementById("pokemon");

const limit = 6;
let offset = 0;

function loadPokemonItens(offset, limit) {

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {

        const newHtml = pokemons.map((pokemon) => `
                    <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
            
                </li>`
        ).join('')
        pokemonList.innerHTML = newHtml;

    })
};

loadPokemonItens(offset, limit);


loadMoreButton.addEventListener('click', () => {
    offset += limit;
    loadPokemonItens(offset, limit);
})

function ShowBaseStats(id) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
                li class="pokemonShowUp ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
            <li class="pokemonShowDown Down${pokemon.type}">
                <ol class="types">
                    <li class="type ${pokemon.type}">${pokemon.type}</li>
                </ol>
                <h3>About</h3>
                <ol class="pokemonInfo">
                    <li class="infoWeight">
                        <span class="weight"><img src="https://cdn.icon-icons.com/icons2/1239/PNG/512/weight_83953.png" alt="Weight">${pokemon.weight} kg</span>
                        <span>Weight</span>
                    </li>
                    <li class="infoHeight">
                        <span class="height"><img src="https://cdn.icon-icons.com/icons2/1491/PNG/512/ruler_102796.png" alt="Ruler">${pokemon.height} m</span>
                        <span>Height</span>
                    </li>
                    <li class="infoMoves">
                        <span class="moves">${pokemon.moves}</span>
                        <span>Moves</span>
                    </li>
                </ol>
                <h3>Base Stats</h3>
                <ol class="baseStats">
                    <li>HP
                        <span>${pokemon.hp}</span> 
                        <progress value="${pokemon.hp}" max="100"></progress>

                    </li>
                    <li>ATK
                        <span>${pokemon.atk}</span> 
                        <progress value="${pokemon.atk}" max="100"></progress>
                    </li>
                    <li>DEF
                        <span>${pokemon.def}</span> 
                        <progress value="${pokemon.def}" max="100"></progress>
                    </li>
                    <li>SATK
                        <span>${pokemon.satk}</span> 
                        <progress value="${pokemon.satk}" max="100"></progress>
                    </li>
                    <li>SDEF
                        <span>${pokemon.sdef}</span> 
                        <progress value="${pokemon.sdef}" max="100"></progress>
                    </li>
                    <li>SPD
                        <span>${pokemon.spd}</span> 
                        <progress value="${pokemon.spd}" max="100"></progress>
                    </li>
                </ol>
            </li>
    `)
        pokemonShowUp.innerHTML = newHtml;

    })
};


pokemon.forEach((pokemon) => {
    pokemon.addEventListener('click', () =>{
        const id = pokemon.getAttribute(data-id);
        ShowBaseStats(id);
    })
})













