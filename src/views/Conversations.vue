<template>
    <div class="container">
        <h1>Liste des conversations</h1>
        <CreerConversation/>
        <div>
            <template v-for="conversation in $store.state.conversations">
                <Conversation :conversation="conversation"/>
                <router-link :to="{name:'Discussion',params : {conversation_id:conversation.id}}" class="button is-info" title="Conversation">👁️</router-link> 
            </template>
        </div>    
    </div>
</template>

<script>
import CreerConversation from '../components/CreerConversation.vue';
import Conversation from '../components/Conversation.vue'
export default {
    data() {
        return{
            conversation: true,
        }
    },
    components:{
        CreerConversation,
        Conversation
    }
}
</script>