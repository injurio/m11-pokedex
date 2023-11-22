import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/injurio/pokedata',  
    withCredentials: false,
    headers: {
        Accept: 'application/json',   
        'Content-Type': 'application/json' 
    }
})

export default {
    getPokemons() { 
        return apiClient.get('/pokemons').catch(error => {
            console.error("Error fetching pokemons:", error);
            throw error;
        });
    },
    getPokemon(name) {
        return apiClient.get('/pokemons?name=' + name).catch(error => {
            console.error("Error fetching pokemon:", error);
            throw error;
        });
    }     
}