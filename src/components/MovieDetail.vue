<template>
    <div>
        <h1>{{movieobj.title}}
        
        </h1>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "MovieDetail",
    data(){
        return{
            id: this.$route.params.id,
            movieobj:Object
        }
    },
    mounted(){
        const request = ``;
       axios.get(request)
        .then( (response) =>{
            console.log(response.data)
            this.movieobj = response.data
        })
    }
}
</script>
