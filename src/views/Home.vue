<template>
  <div>
    <div class="container">
      <h1>Liste des conversations</h1>
      <CreerConversation/>
    </div>
  </div>
</template>

<script>
import CreerConversation from '@/components/CreerConversation.vue'

export default {
  components: {
    CreerConversation
  }
}
</script>

<style>
h1{
  text-align: center;
  font-size: 20px;
}
</style>

