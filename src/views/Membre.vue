<template>
    <div class="container" v-if="membre">
        <h1>{{membre.fullname}}</h1>
        <p>Email : {{membre.email}}</p>
        <p>Inscrit depuis : {{membre.created_at}}</p>
        <h2>Messages</h2>
        <div v-it="loading">
            Chargement des messages ...
        </div>
        <template v-else v-for="message in messagesTries">
            <Message :message="message"></Message>
        </template>
    </div>
</template>
<script>
import Message from '../components/Message.vue'
export default {
    data(){
        ret
        Messageurn{
            membre : false,
            messages : [],
            loading : true
        }
    },
    computed : {
        messagesTries() {
            function compare( a, b ) {
                if (a.created_at < b.created_at){
                    return -1;
                }
                if (a.created_at > b.created_at){
                    return 1;
                }
                return 0;
            }
            return this.message.sort(compare);
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
                    response.data.forEach(message => {
                        if(message.member_id == this.membre.id){
                            message.conversation = conversation;
                            this.messages.push(message);
                        }
                    })
                    cpt++;
                    if(this.$store.state.conversations.length == cpt)
                    {
                        this.loading=false;
                    }
                });
            })
        }
    }
}
</script>