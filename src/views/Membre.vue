<template>
    <div class="container" v-if="membre">
        <h1>{{membre.fullname}}</h1>
        <p>Email : {{membre.email}}</p>
        <p>Inscrit depuis : {{membre.created_at}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            membre : false,
            messages : [],
            loading : true
        }
    },
    mounted() {
        if(this.$route.params.membre_id){
            this.membre = this.$store.getters.getMembre(this.$route.params.membre_id);
            let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            this.membre.depuis = d.toLocaleDateString('fr-FR', options);

            let cpt=0;
            this.$store.state.conversations.forEach(conversation =>{
                api.get('channels/'+conversation.id+'/posts').then(response => {
                    response.data.forEach(this.message => {
                        if(message.member_id == this.membre.id){

                        }
                    })
                    tousLesMessages = tousLesMessages.concat(response.data);
                });
            })
        }
    }
}
</script>