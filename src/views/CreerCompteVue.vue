<template>
    <div class="row">
        <div class="column column-50 column-offset-25">
            <h1>Créer compte</h1>

            <form @submit.prevent="creerCompte">
                <fieldset>
                    <p>
                        <label>Nom et prénom : </label>
                        <input v-model="fullname" type="text" placeholder="Nom et prénom">
                    </p>
                    <p>
                        <label>Adresse mail : </label>
                        <input v-model="email" type="email" placeholder="Email">
                    </p>
                    <p>
                        <label>Mot de passe : </label>
                        <input v-model="password" type="password" placeholder="Mot de passe">
                    </p>
                    <p><button class="button is-success">Créer mon compte</button></p>
                </fieldset>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            fullname : '',
            email : '',
            password : ''
        }
    },
    methods : {
        creerCompte(){
            api.post('members',{
                fullname:this.fullname,
                email:this.email,
                password:this.password
            }).then(response => {
                alert('Votre compte a été créé, vous pouvez vous connecter à Coop !')
                this.$router.push('/se-connecter')
            }).catch(error => {
                alert(error.response.data.message)
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