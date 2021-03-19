<template>
    <div>
        <h1>Conversation {{conversation.label}}</h1>
        <template v-for="message in messages">
            {{message.message}}
            <Message :message="message"/>
            </br>
        </template>
        <fieldset>
            <p>
                <label>Message : </label>
                <input v-model="messForm" required type="text" placeholder="Ecrivez votre message">
                <button type="button" @click="envoyerMessage" class="button is-success">Envoyer</button>
            </p>
        </fieldset>
        
    </div>
</template>
<script>
import Message from '../components/Message.vue'
export default {
    data() {
        return {
            conversation : false,
            messages : [],
            messForm : ''
        }
    },
    mounted(){
        console.log(this.$route.params.conversation_id)
        api.get('channels/'+this.$route.params.conversation_id).then(response => {
            this.conversation = response.data;
        })
        this.chargerMessage()
    }, 
    methods : {
        envoyerMessage(){
            api.post('channels/'+this.$route.params.conversation_id+'/posts',{
                message:this.messForm,
                member_id:this.$store.state.membre.id
            }).then(response => {
                this.chargerMessage()
                this.messForm='';
            }).catch(error => {
                alert(error.response.data.message)
            })
        },
        chargerMessage(){
            api.get('channels/'+this.$route.params.conversation_id+'/posts').then(response => {
                this.messages = response.data;
                console.log(response.data);
            })
        }
    },
}
</script>

