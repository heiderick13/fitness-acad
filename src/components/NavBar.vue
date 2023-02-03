<script>
export default {
    name: 'NavBar',
    data() {
        return { usuarioperfil: {} }
    },
    methods: {
        getUser() {
            try {
                let userjson = JSON.parse(sessionStorage.getItem("user"));
                this.usuarioperfil = userjson == null ? null :
                    userjson.perfil
            } catch (error) {
                return error
            }

        },
        sair() {
            sessionStorage.clear()
            this.usuarioperfil == null
            this.$router.push("/")
        },
        reloadNav() {
            if (this.$route.path == "/") {
                return
            }

            document.querySelector('.list-links').outerHTML = "";
        }

    },
    mounted() {
        this.getUser();
        this.reloadNav();
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <RouterLink class="navbar-brand" to="/"><img src="../../images/logo.png" alt="logo da academia" height="40">
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="list-links navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="nav-item">
                        <a class="nav-link" href="#atividades">Atividades</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#quem-somos">Quem somos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#professores">Nossos Professores</a>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" aria-current="page" to="/booking">agendamento</RouterLink>
                    </li>

                </ul>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0" v-if="usuarioperfil == 0">
                    <li class="nav-item">
                        <RouterLink class="nav-link" aria-current="page" to="/func/list">Clientes</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" aria-current="page" @click="sair()" to="/">Sair</RouterLink>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0" v-else-if="usuarioperfil == 1">
                    <li class="nav-item">
                        <RouterLink class="nav-link" aria-current="page" to="/user/add">Minha Conta</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" aria-current="page" @click="sair()" to="/">Sair</RouterLink>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0" v-else>
                    <li class="nav-item">
                        <RouterLink class="nav-link" aria-current="page" @click="sair()" to="/">Sair</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" aria-current="page" to="/user/add">Cadastro</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" aria-current="page" to="/user/login">Entrar</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(255, 164, 28, 0.8));
    font-weight: 700;
}

.navbar-brand {
    margin-top: -10px;
}

.btn {
    color: var(--white);
    border-color: var(--white);
}

.form-control:focus {
    border-color: var(--primary);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px var(--primary);
}

.btn:hover {
    background-color: var(--primary);
    color: var(--white);
}
</style>