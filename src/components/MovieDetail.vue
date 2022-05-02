<template>
    <div>
        <h1>{{movieobj.title}}
        
        </h1>
    </div>
</template>

<script>
//import axios from 'axios'
export default {
    name: "MovieDetail",
    data(){
        return{
            id: this.$route.params.id,
            movieobj:Object
        }
    },
    mounted(){
        const request = `https://api.themoviedb.org/3/movie/${this.id}?api_key=70ef7c62eee1244489c96681175a2a0f&language=en-US`;
       this.$http.get(request)
        .then( (response) =>{
            console.log(response.data)
            this.movieobj = response.data
        })
    }
}
</script>
