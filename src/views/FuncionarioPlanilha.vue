<script>
import NavBar from '../components/NavBar.vue';
import userService from '../service/userService';
export default {
    components: {
        NavBar
    },
    data() {
        return {
            usuario: {},
            id: this.$route.params.id,
            data_nasc:""
        }
    },
    methods: {
        getUser(id) {
            userService.get(id)
                .then(res => {
                    this.usuario = res.data
                    //Func idade = transoforma data_nasc em idade
                    const idade =  function (data)  {
                        var hoje = new Date();
                        var data_nasc = new Date(data);
                        var idade = hoje.getFullYear() - data_nasc.getFullYear();
                        var mes = hoje.getMonth() - data_nasc.getMonth();
                        if (mes < 0 || (mes === 0 && hoje.getDate() < data_nasc.getDate())) {
                            idade--;
                        }
                        return idade;
                    }
                    this.usuario.data_nasc = idade(this.usuario.data_nasc)
                }).catch(err => { console.log(err)})
                

        }
    },
    mounted() {
        this.getUser(this.id)
    }
}
</script>

<template>
    <NavBar></NavBar>
    <h1 class="text-center">Info e Planilha Cliente</h1>
    <div class="row text-center justify-content-center">

        <div class="card  p-0 col-md-3 col-8  m-5">
            <div class="card-header">Foto de Perfil</div>
            <div class="card-body text-center">
                <img class="img-account-profile rounded-circle mb-2 img-fluid"
                    src="../../images/user-svgrepo-com.svg" alt="">
            </div>
        </div>

        <div class="card col-8 col-md-6 p-0 m-5 ">
            <ul class="list-group">
                <li class="list-group-item ">
                    <span class="">Nome</span><br />
                    {{ usuario.nome }}
                </li>
                <li class="list-group-item">
                    <span>Email</span><br />{{ usuario.email }}
                </li>
                <li class="list-group-item"><span>Idade</span><br />{{ usuario.data_nasc }} Anos</li>
                <li class="list-group-item">
                    <span>Tel</span><br />{{ usuario.telefone }}
                </li>
            </ul>
            <div class="mx-auto">
                <button type="button" class="btn m-2 border" to="/">
                    Criar Planilha
                </button>
                <button type="button" class="btn m-2 border" to="/">
                    Atualizar Planilha
                </button>
            </div>
        </div>

    </div>


</template>

<style scoped>
.btn {
    color: var(--light-green);
    border-color: var(--white);
    background-color: var(--light-pink);
}


.btn:hover {
    background-color: var(--light-green);
    color: var(--white);
}
</style>