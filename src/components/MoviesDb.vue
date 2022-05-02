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


export default {
    name: "MoviesDb",
    data(){
        return {
            movies: []
        }
    }, 
    mounted()
    {
        this.$http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=70ef7c62eee1244489c96681175a2a0f&language=en-US&page=1")
        .then( (response)=> {
            this.movies = response.data.results;
        })
    }
}
</script>
