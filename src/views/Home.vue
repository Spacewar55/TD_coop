<template>
  <div>
    <div class="container">
      <h1>Liste des conversations</h1>
      <CreerConversation/>

      <!-- <div class="conversations">
        <template v-for="conversation in $store.state.conversations">
          <Conversation :conversation="conversation"/>
        </template>
      </div> -->
    </div>
  </div>
</template>

<script>
import CreerConversation from '@/components/CreerConversation.vue'
import Conversation from '@/components/Conversation.vue'

export default {
  components: {
    CreerConversation,
    Conversation
  }
}
</script>

<style>
h1{
  text-align: center;
  font-size: 20px;
}
</style>

