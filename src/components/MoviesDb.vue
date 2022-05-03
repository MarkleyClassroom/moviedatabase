<template>
    <div>
        <h1>Upcoming Movies</h1>
        <div v-for="movie in movies" :key=movie.id>
            <router-link :to="`/movies/${movie.id}`">
            {{movie.title}}
            {{movie.id}}</router-link>

        </div>
    </div>
</template>

<script>

import axios from axios
export default {
    name: "MoviesDb",
    data(){
        return {
            movies: []
        }
    }, 
    mounted()
    {
        axios.get("")
        .then( (response)=> {
            this.movies = response.data.results;
        })
    }
}
</script>
