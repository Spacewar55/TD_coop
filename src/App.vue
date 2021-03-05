<template>
  <div id="app" v-if="apiOK">
    <Header/>
    <router-view/>
  </div>
  <div v-else>
    Impossible de joindre l'API
  </div>
</template>
<script>
import Header from './components/Header.vue'
export default {
  components: { Header },
  data(){
    return {
      chargementOK:false,
      apiOK:false,
    }
  },
  methods : {
    chargerMembres() {
      api.get('members').then(response =>{
        this.$store.commit('setMembres',response.data);
      });
    },
    chargerConversation() {
      api.get('channels').then(response =>{
        this.$store.commit('setConversations',response.data);
      });
    }
  },
  mounted(){
    console.log("L'app est démarée")

    api.get('ping').then(response =>{
      this.apiOK=true;
      console.log("L'api est fonctionnelle");

      if(!this.$store.state.membre){
        if(this.$route.path != "/se-connecter" && this.$route.path != "/creer-compte"){
          this.$router.push('/se-connecter');
        }
      } else {
        this.$bus.$on('charger-membres', this.chargerMembres);
        this.chargerMembres();
        
        this.$bus.$on('charger-conversation', this.chargerConversation);
        this.chargerConversation();
      }
    }).catch(error => {

      console.log("L'api ne fonctionne pas", error);

    }).finally(() => {
      this.chargementOK = true;
    })
  }
}
</script>


