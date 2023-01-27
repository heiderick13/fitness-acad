<script>
import AcadFooter from '../components/AcadFooter.vue';
import NavBar from '../components/NavBar.vue';
import userService from '../service/userService';
export default {
    components: {
        NavBar
    },
    data() {
        return { usuarios: [], usuario: {}}
    },
    methods: {
        todosUsuarios() {
            userService.list()
            .then(res => {
                this.usuarios = res.data
                
            })
            .catch(error => {
                console.log(error)
            })
        },
        escolherUsuario(id) {
            this.usuario = id;
            console.log(this.usuario);
            sessionStorage.setItem("tempuser", this.usuario)
            this.$router.push("/user/info")
        }
    },
    mounted() {
        this.todosUsuarios()
    }
}
    
    


</script>

<template>
<NavBar></NavBar>
<h1>Clientes</h1>
<div class="list-group mx-auto" v-for="user in usuarios" :key="user"> 
  <button type="button" class="list-group-item list-group-item-action" @click="escolherUsuario(user._id)">Nome : {{ user.nome}}</button>
</div>


</template>

<style scoped>
h1 {
    text-align: center;
}
.list-group {
    text-align:center;
    max-width:500px;   
}
</style>