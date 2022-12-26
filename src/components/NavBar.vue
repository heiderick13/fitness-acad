<script>
import { RouterLink } from 'vue-router'
export default {
    name: 'NavBar',
}
</script>

<template>
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
                        <RouterLink class="nav-link active" aria-current="NossoPlanos" to="/">Nossos Planos</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/about">Quem somos</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/Esporte/Esporte">Esporte</RouterLink>
                    </li>
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                    </li> -->
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
                        <RouterLink class="nav-link" aria-current="page" to="/user/enter">Entrar</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>