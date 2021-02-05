<template>
    <div class="message">
        <header>
            <div>
                <b>{{membre.fullname}}</b> <time>le {{dateMessage}}</time>
            </div>
            <div class="conversation" v-if="message.conversation">
                Message posté dans <router-link :to="{Name:'Conversation',params:{id:message.conversation.id}}">{{message.conversation.topic}}</router-link>
            </div>
        </header>
        {{message.message}}
        {{dateMessage}}
    </div>
</template>
<script>
import Header from "./Header.vue";

export default {
    props: ['message'],
    computed :{
        membre(){
            return this.$store.getters.getMembre(this.message.member_id);
        },
        dateMessage() {
            let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            this.membre.depuis = d.toLocaleDateString('fr-FR', options);
        }
    }
}
</script>