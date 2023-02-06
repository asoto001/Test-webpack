import '../styles/style.scss';
import axios from 'axios';

const form = document.getElementById('form');

const getPokemons = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    response.data.results.forEach(element => {
        document.body.innerHTML += `
        <hr>
        ${element.name}
        `
    });
}

getPokemons();

form.addEventListener('submit', () => {
    e.preventDefault();
    SVGFEDropShadowElement.fire("Good Job!" , "You clicked the button!", "success");
})

console.log('hola mundo');