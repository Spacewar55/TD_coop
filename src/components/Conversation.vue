<template>
    <div class="row">
        <div class="column">
            {{conversation.label}} : {{conversation.topic}}
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
<style>
.container{
    padding-top:5em;
}
</style>