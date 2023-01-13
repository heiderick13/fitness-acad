<script>
import NavBar from '../components/NavBar.vue';
import { User } from '../model/User.js';
import userService from '@/service/userService'

var user = new User(); //Criando um objeto do tipo User (Classe)

export default {
    components: { NavBar },
    data() {
        return {
            user
        }
    },
    methods: {
        cadastro() {
            userService.add(this.user)
            .then(res => {
                    console.log(res.data);
                    alert("Cadastrado!");
                    this.$router.push("/");
                }).catch(error => {
                    alert(error.data);
                });
        }
    }
}
</script>

<template>
    <NavBar></NavBar>
    <section class="d-flex flex-column m-3 bg-light mwidth mx-auto">
        <h2>Cadastro</h2>
        <div class="form-group">
            <label for="">Nome</label>
            <input type="text" name="nome" class="form-control" placeholder="" aria-describedby="helpName"
                v-model="user.nome" />
            <small id="helpName" class="text-muted"></small>
        </div>

        <div class="form-group">
            <label for="">E-mail</label>
            <input type="email" name="email" class="form-control" placeholder="" aria-describedby="helpEmail"
                v-model="user.email" />
            <small id="helpEmail" class="text-muted"></small>
        </div>

        <div class="form-group">
            <label for="">Senha</label>
            <input type="password" name="senha" class=" form-control" placeholder="" aria-describedby="helpPass"
                v-model="user.senha" />
            <small id="helpPass" class="text-muted"></small>
        </div>

        <div class="form-group">
            <label for="">Data Nasc.</label>
            <input type="date" name="data_nasc" class="form-control" placeholder="" aria-describedby="helpDate"
                v-model="user.data_nasc" />
            <small id="helpDate" class="text-muted"></small>
        </div>
        <div class="form-group">
            <label for="">Tel</label>
            <input type="tel" name="tel" class="form-control" placeholder="" aria-describedby="helpTel"
                v-model="user.telefone" />
            <small id="helpTel" class="text-muted"></small>
        </div>

        <div class="form-group">
            <label for="">CPF</label>
            <input type="number" name="cpf" class="form-control" placeholder="" aria-describedby="helpCPF"
                max="99999999999" min="00000000000" v-model="user.cpf" />
            <small id="helpCPF" class="text-muted"></small>
        </div>

        <div class="mx-auto m-2">
            <button type="button" class="btn mx-2" @click="cadastro()">
                Cadastrar
            </button>
            <button type="button" class="btn mx-2">
                Sair
            </button>
        </div>
    </section>
</template>

<style scoped>
.mwidth {
    max-width: 520px;
}
.form-control:focus{
    border-color: var(--primary);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px var(--primary);
}
.btn {
    border-color:var(--primary);
}
.btn:hover {
    color:var(--white);
    background-color: var(--primary);
}
</style>