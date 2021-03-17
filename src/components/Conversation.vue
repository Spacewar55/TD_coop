<template>
    <div class="row">
        <div class="column">
            <h2>{{conversation.label}}</h2>
        </div>
        <div class="column">
            <router-link :to="{name:'Discussion',params : {conversation_id:conversation_id}}" class="button is-info" title="Conversation">👁️</router-link>
            &nbsp;
        </div>
    </div>
</template>

<script>
export default {
    props : ['conversation'],
    computed : {
        listeConv() {
            return this.$store.state.conversation.id == this.conversation.id
        }
    }
}
</script>