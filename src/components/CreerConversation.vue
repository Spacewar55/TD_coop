<template>
    <div>
        <div id="creer-conversation" v-if="afficher">
            <section>
                <button class="close" @click="masquerFormulaire">❌</button>
                <h3>Créer une conversation</h3>

                <form @submit.prevent="creerConversation">
                    <fieldset>
                        <p>
                            <label>Titre : </label>
                            <input v-model="label" required type="text" placeholder="Quels sont les concepts?">
                        </p>
                        <p>
                            <label>Sujet : </label>
                            <input v-model="sujet" required type="text" placeholder="Quel est le sujet?">
                        </p>
                        <p><button>Créer la conversation</button></p>
                        <p><button type="button" @click="masquerFormulaire" class="button is-warning button-clear">Annuler</button></p>
                    </fieldset>
                </form>
            </section>
        </div>
        <button @click="afficherFormulaire">Créer une nouvelle conversation</button>
    </div>
</template>
<script>
export default {
    data() {
        return{
            afficher: false,
            sujet: '',
            label: ''
        }
    }, 
    mounted() {
        this.$bus.$on('afficher-creer-conversation',this.afficherFormulaire)
    },
    methods :{
        afficherFormulaire() {
            this.afficher = true;
        },
        masquerFormulaire() {
            this.afficher = false;
        },
        creerConversation(){
            api.post('channels',{
                label: this.label,
                topic: this.sujet
            }).then(response => {
                alert("Conversation a été créée!");
                this.$bus.$emit("charger-conversation");
            }).catch(error => {
                alert(error.response.data.message);
            })
        }
    }
}
</script>

<style scoped>
#creer-conversation{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
}
section{
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    background: white;
}
section > .close{
    position: absolute;
    top: -1em;
    right: -1em;
    width: 3em;
    height: 3em;
    line-height: 3em;
    margin: 0;
    padding: 0;
    border-radius: 50%;
}
h3{
    text-align: center;
    font-size: 30px;
}
p{
    margin-top: 5px;
}
</style>