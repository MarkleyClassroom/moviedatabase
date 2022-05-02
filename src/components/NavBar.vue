<template>
    <div class="navbar">
        <div class="navbar-nav">
            <!-- <a href="#" class="nav-link">Home</a>
            <a href="#" class="nav-link">Movies</a> -->
            <router-link to="/" class="nav-link">Home</router-link>
             <router-link to="/movies" class="nav-link">Movies</router-link>
        </div>
    </div>
</template>

<script>
export default{
    name: "NavBar"
}
</script>
<style scoped>
    .nav-link {padding: 25px;}
</style>
