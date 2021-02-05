<template>
    <header>
        <div class="navbar">
            <ul>
                <li><a href="">COOP</a></li>
                <li><router-link to="/membres">Membre(s)</router-link></li>
                <li><a class="active" href="#home">Conversation(s)</a></li>
            </ul>
            <ul>
                <li><button class="button is-danger is-light" @click="seDeconnecter">Déconnection</button></li>
            </ul>
        </div>
    </header>
</template>
<script>
export default {
    methods : {
        seDeconnecter(){
            this.$store.commit('seDeconnecter');
            this.$router.push('/se-connecter');
        }
    }
}
</script>
<style scoped>
.navbar{
    background-color: aqua;
    font-size: x-large;
}
.navbar > ul > li{
    display: inline;
    margin-left: 10px;
    margin-right: 50px;
}
/*.navbar > ul:last-child{
    text-align: right;
}*/
a{
    color: white;
}
</style>