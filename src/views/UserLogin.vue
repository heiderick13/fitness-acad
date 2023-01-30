<script>
import AcadFooter from '../components/AcadFooter.vue';
import userService from '../service/userService';
export default {
    components: { AcadFooter },
    data() {
        return { user: {
            email: "", senha:""
        }}
    },
    methods: {
        entrar() {
            userService.login(this.user)
            .then((res) => {
                    console.log(res.data);
                    sessionStorage.setItem("user", JSON.stringify(res.data));
                    this.$router.push("/");
                    this.$router.go();
                    console.log("Logado!")
                })
                .catch((error) => {
                    console.log(error);
                    alert("Erro ao tentar entrar!");
                });
        }
        }
    }




</script>

<template>
    <section class="container">
        <div class="d-flex flex-column bg-light mwidth mx-auto">

            <h2 class="text-center mt-3">Login</h2>
            <div class="form-group">
                <label for="loginEmail">Email</label>
                <input type="email" placeholder="email@email.com"
                    class="form-control" v-model="user.email">
            </div>
            <div class="form-group">
                <label for="loginPass">Senha</label>
                <input type="password" placeholder="*******" class="form-control" v-model="user.senha">
            </div>
            <div class="mx-auto my-2">
                <RouterLink type="button" class="btn  mx-2" @click="entrar()" to="/">
                    Login
                </RouterLink>
                <RouterLink type="button" class="btn  mx-2"
                    to="/">
                    Voltar
                </RouterLink>
            </div>
        </div>
    </section>
    <AcadFooter></AcadFooter>
</template>

<style scoped>
.container {
    margin-top: 100px;
    margin-bottom: 35vh;
}
.mwidth {
    max-width: 520px;
}

.form-control:focus {
    border-color: var(--primary);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px var(--primary);
}
.btn {
    border-color:var(--primary);
}
.btn:hover {
    background-color: var(--primary);
    color:var(--white);
}
</style>