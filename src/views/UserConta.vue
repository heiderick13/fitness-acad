<script>
import NavBar from "../components/NavBar.vue";
import userService from "../service/userService";

export default {
  components: { NavBar },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    mountUser() {
      let user = JSON.parse(sessionStorage.getItem("user"));
      userService.get(user.email).then((res) => {
        this.user = res.data;
      });
    },
    updateUser() {
        let user = JSON.parse(sessionStorage.getItem("user"));
        userService.update(this.user)
        .then((res) => {
            console.log(res.data)
            this.$refs.close.click()
            alert("Dados Atualizados!")
        }).catch(err => {
            console.log(err)
        });
    },
    deleteUser() {
        let user = JSON.parse(sessionStorage.getItem("user"));
        userService.deleteLogic(user.email)
        .then(() => {
          this.$router.push("/");
          sessionStorage.clear();
          this.$refs.close.click()
            alert("Conta Deletada!")
            .then(() =>{ this.$router.go()})
        }).catch(err => {
            console.log(err.message)
            console.log(err)
        });
    }
    
  },
  mounted() {
    this.mountUser();
  },
};
</script>

<template>
  <NavBar></NavBar>
  <section class="vh-100" style="background-color: #f4f5f7">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-lg-6 mb-4 mb-lg-0">
          <div class="card mb-3" style="border-radius: 0.5rem">
            <div class="row g-0">
              <div class="col-md-4 text-center" style="border-top-left-radius: 0.5rem; border-bottom-left-radius: 0.5rem">
                <img class="img-account-profile rounded-circle mb-2 img-fluid p-4" src="../../images/user-svgrepo-com.svg" alt="" />
                <h5>{{ user.nome }}</h5>
              </div>
              <div class="col-md-8">
                <div class="card-body p-4">
                  <h6>Informações</h6>
                  <hr class="mt-0 mb-4" />
                  <div class="row pt-1">
                    <div class="col-6 mb-3">
                      <h6>Email</h6>
                      <p class="text-muted">{{ user.email }}</p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6>Tel</h6>
                      <p class="text-muted">{{ user.telefone }}</p>
                    </div>
                  </div>
                  <div class="row pt-1">
                    <div class="col-6 mb-3">
                      <h6>CPF</h6>
                      <p class="text-muted">
                        {{ user.cpf }}
                      </p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6>Data Nascimento</h6>

                      <p class="text-muted">
                        {{ user.data_nasc }}
                      </p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-start">
                    <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                    <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                    <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
                  </div>
                  <button type="button" class="btn m-2" data-bs-toggle="modal" data-bs-target="#userModal">Atualizar Dados</button>
                  <div id="userModal" class="modal fade">
                    <div class="modal-content modal-dialog">
                      <div class="modal-header">
                        <h3 class="text-success fw-semibold">Atualizar Conta</h3>
                      </div>
                      <div class="modal-body">
                        <div class="form-group">
                          <label for="">Nome</label>
                          <input type="text" name="nome" class="form-control" placeholder="" aria-describedby="helpName" v-model="user.nome" />
                        </div>
                        <div class="form-group">
                          <label for="">CPF</label>
                          <input type="text" name="cpf" class="form-control" placeholder="" aria-describedby="helpName" v-model="user.cpf" />
                        </div>
                        <div class="form-group">
                          <label for="">Tel</label>
                          <input type="text" name="telefone" class="form-control" placeholder="" aria-describedby="helpName" v-model="user.telefone" />
                        </div>
                        <div class="form-group">
                          <label for="">Data Nascimento</label>
                          <input type="text" name="data_nasc" class="form-control" placeholder="" aria-describedby="helpName" v-model="user.data_nasc" />
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn mx-2" @click="updateUser()">Atualizard</button>
                        <button type="button" ref="close" class="btn mx-2" data-bs-dismiss="modal">Voltar</button>
                      </div>
                    </div>
                  </div>
                  <button type="button" class="btn m-2" data-bs-toggle="modal" data-bs-target="#deleteModal">Deletar Conta</button>
                  <div id="deleteModal" class="modal fade">
                    <div class="modal-content modal-dialog">
                        <div class="modal-header">
                            <h4 class="text-success fw-semibold">Deletar Conta?</h4>
                        </div>
                        <div class="modal-body">
                            <h2>Tem certeza que deseja deletar sua conta?</h2>
                        </div>
                        <div class="modal-footer">
                            <button type="button" ref="close" class="btn btn-danger mx-2" @click="deleteUser()">Deletar</button>
                            <button type="button" ref="close" class="btn mx-2" data-bs-dismiss="modal">Voltar</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.btn {
  border: 2px solid var(--light-pink);
  background-color: var(--light-pink);
}

.btn:hover {
  background-color: #4abc96;
  color: var(--white);
}
.btn-danger {
    background-color: rgb(226, 44, 44);
    color: white;
}
.btn-danger:hover {
    border: 2px solid black;
    background-color: rgb(226, 44, 44)
}

</style>
