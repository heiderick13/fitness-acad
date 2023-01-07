<script setup>
import NavBar from '../components/NavBar.vue';
import AcadFooter from '../components/AcadFooter.vue'
</script>
  
<template>
  <NavBar></NavBar>
  <section id="atividades">
    <ul id="nossas_atividades">
      <li class="atividade">
        <h2 class="titulo_atividade">Musculação</h2>
        <p class="descricao_atividade">
          Aqui você encontra os melhores equipamentos de musculação para ficar
          como o físico pronta(o) para o verão.
        </p>
        <p class="preco_atividade">R$ 149,90</p>
      </li>
      <li class="atividade">
        <h2 class="titulo_atividade">Boxe</h2>
        <p class="descricao_atividade">
          Aulas de boxe com os melhores instrutores da cidade
          para você aprender a arte dos ringues e se manter na melhor forma.
        </p>
        <p class="preco_atividade">R$ 199,99</p>
      </li>
      <li class="atividade">
        <h2 class="titulo_atividade">Jiu-jitsu</h2>
        <p class="descricao_atividade">
          Aprenda essa luta que consagrou diversos brasileiros mundo pelo mundo.
          Temos os melhores instrures por aqui.
        </p>
        <p class="preco_atividade">R$ 199,99</p>
      </li>
      <li class="atividade">
        <h2 class="titulo_atividade">Natação</h2>
        <p class="descricao_atividade">
          Venha fazer esse exercício que além de ser um dos melhores para a saúde
          e condicionamento físico, ainda é refrescante. (Temos piscina aquecido para o inverno)
        </p>
        <p class="preco_atividade">R$ 169,99</p>
      </li>
      <li class="atividade">
        <h2 class="titulo_atividade">Bike Indoor</h2>
        <p class="descricao_atividade">
          É um exercício aeróbico que mistura elementos de diferentes ritmos, como salsa, samba, reggaetón e até mesmo
          hip-hop, tornando-se uma dança divertida, mas que queima muitas calorias!
        </p>
        <p class="preco_atividade">R$ 119,99</p>
      </li>
      <li class="atividade">
        <h2 class="titulo_atividade">Jump</h2>
        <p class="descricao_atividade">
          Aula pré-coreografada moderada a intensa com objetivo de melhorar o fôlego, a
          resistência muscular e a coordenação motora utilizando um mini-trampolim.
        </p>
        <p class="preco_atividade">R$ 119,99</p>
      </li>
    </ul>
  </section>
  <AcadFooter></AcadFooter>
</template>

<style scoped>
#atividades {
  min-height: 100vh;
  background-color: #31119B;
  align-content: center;
  color: #fefefe;
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
