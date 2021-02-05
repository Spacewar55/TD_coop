<template>
    <div class="row">
        <div class="column">
            <h2>{{membre.fullname}}</h2>
            <a :href="'mailto:'+membre.email">{{membre.email}}</a>
        </div>
        <div class="column">
            <router-link :to="{name:'Membre',params : {membre_id:membre.id}}" class="button is-info" title="Profil">Voir Profil</router-link> 
            &nbsp;
            <button :disabled="membreConnecte" class="button is-danger button-outline" @click="effacerMembre" title="Effacer">X</button>
        </div>
    </div>
</template>

<script>
    export default {
        props : ['membre'],
        computed : {
            membreConnecte() {
                return this.$store.state.membre.id == this.membre.id
            }
        },
        methods : {
            effacerMembre(){
                if(confirm('Voulez vous supprimer le membre '+this.membre.fullname+' ?'))
                {
                    api.delete('members/'+this.membre.id).then(response => {
                        this.$bus.$emit('charger-membres');
                    }).catch(error => {
                        console.log(error.response.data);
                    });
                }
            }
        }
    }
</script>
<style>
.container{
    padding-top:5em;
}
h1{
    font-size: 30px;
}
</style>
