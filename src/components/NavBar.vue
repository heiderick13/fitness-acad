<script>
// import { RouterLink } from 'vue-router'
export default {
    name: 'NavBar',
}
</script>

<template>
    <!-- :key="rerender" -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <RouterLink class="navbar-brand" to="/">O velho maromba</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/about">Quem somos</RouterLink>
                    </li>
                    <!-- <li class="nav-item">
                        <RouterLink class="nav-link" to="/Esporte/Esporte">Esporte</RouterLink>
                    </li> -->
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/home/atividades">Atividades</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/Esporte/Esporte">Esporte</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" aria-current="page" @click="sair()" to="/">Sair</RouterLink>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0" v-else-if="usuarioperfil == 1">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn" type="submit">Pesquisar</button>
                    </form>

                    <li class="nav-item">
                        <RouterLink class="nav-link" aria-current="page" to="/user/add">Minha Conta</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" aria-current="page" @click="sair()" to="/">Sair</RouterLink>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Pesquisar</button>
                    </form>

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