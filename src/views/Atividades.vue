

  
<script setup>
</script>
  
<template>
  <section id="atividades">
    <ul id="nossas_atividades">
      <li class="atividade">
        <h2 class="titulo_atividade">Lorem</h2>
        <p class="descricao_atividade">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          quaerat nihil velit quas, possimus
        </p>
        <p class="preco_atividade">R$ XXX,XX</p>
      </li>
      <li class="atividade">
        <h2 class="titulo_atividade">Lorem</h2>
        <p class="descricao_atividade">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          quaerat nihil velit quas, possimus
        </p>
        <p class="preco_atividade">R$ XXX,XX</p>
      </li>
      <li class="atividade">
        <h2 class="titulo_atividade">Lorem</h2>
        <p class="descricao_atividade">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          quaerat nihil velit quas, possimus
        </p>
        <p class="preco_atividade">R$ XXX,XX</p>
      </li>
      <li class="atividade">
        <h2 class="titulo_atividade">Lorem</h2>
        <p class="descricao_atividade">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          quaerat nihil velit quas, possimus
        </p>
        <p class="preco_atividade">R$ XXX,XX</p>
      </li>
      <li class="atividade">
        <h2 class="titulo_atividade">Lorem</h2>
        <p class="descricao_atividade">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          quaerat nihil velit quas, possimus
        </p>
        <p class="preco_atividade">R$ XXX,XX</p>
      </li>
      <li class="atividade">
        <h2 class="titulo_atividade">Lorem</h2>
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
  height: 100vh;
  align-content: center;
}

#atividades ul {
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

#atividades li {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  list-style: none;
  place-self: center;
  height: 400px;
  width: 300px;
  border-radius: 1rem;
  border: solid 1px black;
  text-align: center;
}

#atividades .preco_atividade {
  font-size: 1.5rem;
}
</style>
