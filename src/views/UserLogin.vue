<script>
import AcadFooter from '../components/AcadFooter.vue';

</script>

<template>
    <section class="container vh-100">
        <div class="d-flex flex-column bg-light mwidth mx-auto">

            <h2 class="text-center mt-3">Login</h2>
            <div class="form-group">
                <label for="loginEmail">Email</label>
                <input type="email" placeholder="email@email.com"
                    class="form-control">
            </div>
            <div class="form-group">
                <label for="loginPass">Senha</label>
                <input type="email" placeholder="*******" class="form-control">
            </div>
            <div class="mx-auto my-2">
                <button type="button" class="btn btn-outline-success mx-2">
                    Login
                </button>
                <RouterLink type="button" class="btn btn-outline-success mx-2"
                    to="/">
                    Voltar
                </RouterLink>
            </div>
        </div>
        <AcadFooter></AcadFooter>
    </section>
</template>

<style scoped>
.container {
    margin-top: 100px;
}
.mwidth {
    max-width: 520px;
}

.form-control:focus {
    border-color: #198754;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #198754;
}

</style>