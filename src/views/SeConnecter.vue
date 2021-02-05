<template>
    <div class="row">
        <div class="column column-50 column-offset-25">
            <h1>Se connecter</h1>

            <form @submit.prevent="seConnecter">
                <fieldset>
                    <p>
                        <label>Adresse mail : </label>
                        <input v-model="email" required type="email" placeholder="Email">
                    </p>
                    <p>
                        <label>Mot de passe : </label>
                        <input v-model="password" required type="password" placeholder="Mot de passe">
                    </p>
                    
                    <p><button class="button is-success">Se connecter</button></p>

                    <p><router-link to="/creer-compte">Créer un compte</router-link></p>
                </fieldset>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            email : 'test@test.fr',
            password : 'test'
        }
    },
    methods : {
        seConnecter(){
            api.post('members/signin',{
                email: this.email,
                password: this.password
            }).then(response => {
                this.$store.commit('setMembre',response.data.member);
                this.$store.commit('setToken',response.data.token);

                this.$router.push('/');
            }).catch(error => {
                alert(error.response.data.message);
            })
        }
    }
}
</script>

<style scoped>
.row{
    text-align: center;
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 5px;
    width: 50%;
    margin-left: 25%;
}
h1{
    font-size: 50px;
}
fieldset{
    font-size: 20px;
}
p{
    margin-top: 5px;
}
</style>