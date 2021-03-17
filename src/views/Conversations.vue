<template>
    <div class="container">
        <h1>Liste des conversations</h1>
        <CreerConversation/>
        <template v-for="conversation in $store.state.conversations">
            {{conversation.label}}
            </br>
        </template>
    </div>
</template>

<script>
import CreerConversation from '../components/CreerConversation.vue';
export default {
    data() {
        return{
            conversation: true,
        }
    },
    components:{
        CreerConversation
    }
}
</script>