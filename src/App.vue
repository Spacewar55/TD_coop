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
  mounted(){
    console.log("L'app est démarée")

    api.get('ping').then(response =>{
      this.apiOK=true;
      console.log("L'api est fonctionnelle");

      api.get('members').then(response =>{
        this.$store.commit('setMembres',response.data);
      });

      if(!this.$store.state.membre){
        if(this.$route.path != "/se-connecter" && this.$route.path != "/creer-compte"){
          this.$routeur.push('/se-connecter');
        }
      }
    }).catch(error => {
      console.log("L'api ne fonctionne pas");

    }).finally(() => {
      this.chargementOK = true;
    })
  }
}
</script>


