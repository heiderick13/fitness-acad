<script>
import NavBar from '../components/NavBar.vue';
import userService from '../service/userService';
export default {
    components: {
        NavBar
    },
    data() {
        return { usuario: {} }
    },
    methods: {
        teste() {
            const user = sessionStorage.getItem("tempuser")
            userService.get(user)
                .then(res => {
                    console.log(res.data)
                    this.usuario = res.data
                })

        }
    },
    mounted() {
        this.teste()
    }
}
</script>

<template>
    <h1 class="text-center">Info e Planilha Cliente</h1>
    <div class="d-flex justify-content-center">
        <ul class="list-group list-group-horizontal flex-fill offset-md-4 my-5">
            <li class="list-group-item ">
                <span class="">Nome</span><br />
                {{ usuario.nome }}
            </li>
            <li class="list-group-item">
                <span>Email</span><br />{{ usuario.email }}</li>
            <li class="list-group-item"><span>Data
                    Nasc.</span><br />{{ usuario.data_nasc }}</li>
            <li class="list-group-item">
                <span>Tel</span><br />{{ usuario.telefone }}</li>
        </ul>
    </div>
    <div class="mx-auto">
            <button type="button" class="btn mx-2" to="/">
                Login
            </button>
            <button type="button" class="btn mx-2"
                to="/">
                Voltar
            </button>
        </div>
    


</template>

<style scoped>

</style>