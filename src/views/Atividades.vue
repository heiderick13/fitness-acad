<script setup>
import NavBar from '../components/NavBar.vue';
</script>
  
<template>
  <NavBar></NavBar>
  <section id="atividades">
    <ul id="nossas_atividades">
      <li class="atividade">
        <h2 class="titulo_atividade">Atividade</h2>
        <p class="descricao_atividade">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          quaerat nihil velit quas, possimus
        </p>
        <p class="preco_atividade">R$ XXX,XX</p>
      </li>
      <li class="atividade">
        <h2 class="titulo_atividade">Atividade</h2>
        <p class="descricao_atividade">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          quaerat nihil velit quas, possimus
        </p>
        <p class="preco_atividade">R$ XXX,XX</p>
      </li>
      <li class="atividade">
        <h2 class="titulo_atividade">Atividade</h2>
        <p class="descricao_atividade">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          quaerat nihil velit quas, possimus
        </p>
        <p class="preco_atividade">R$ XXX,XX</p>
      </li>
      <li class="atividade">
        <h2 class="titulo_atividade">Atividade</h2>
        <p class="descricao_atividade">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          quaerat nihil velit quas, possimus
        </p>
        <p class="preco_atividade">R$ XXX,XX</p>
      </li>
      <li class="atividade">
        <h2 class="titulo_atividade">Atividade</h2>
        <p class="descricao_atividade">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          quaerat nihil velit quas, possimus
        </p>
        <p class="preco_atividade">R$ XXX,XX</p>
      </li>
      <li class="atividade">
        <h2 class="titulo_atividade">Atividade</h2>
        <p class="descricao_atividade">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          quaerat nihil velit quas, possimus
        </p>
        <p class="preco_atividade">R$ XXX,XX</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
#atividades {
  min-height: 100vh;
  background-color: #31119B;
  align-content: center;
  color: #FFA41C;
}

#atividades ul {
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

#atividades .atividade {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
  min-height: 400px;
  /* min-width: 300px; */
  line-height: 2;
  list-style: none;
  place-self: center;
  border-radius: .5rem;
  border: solid 2px #FFA41C;
  text-align: center;
}

.atividade .preco_atividade {
  font-size: 1.5rem;
}

@media screen and (max-width: 1000px) {
  #atividades ul {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {
  #atividades ul {
    grid-template-columns: 1fr;
  }

  #atividades li {
    max-width: 400px;
  }
}
</style>
