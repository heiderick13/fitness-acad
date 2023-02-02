<script setup>
import NavBar from '../components/NavBar.vue';
import AcadFooter from '../components/AcadFooter.vue';



</script>
<template>
  <NavBar></NavBar>
  <section class="academia">
    <h1>
      Queremos falar um pouco sobre nós
    </h1>
    <p>
      Atualmente estamos localizado em, Av taltaltal nº 777
      Chapa Quente - RJ Brasil.
      Estamos no mercado a mais de 10 anos , tendo todo carinho e atenção com nossos alunos, trazendo para eles o auto
      estima para poder cuida da sua saúde, temos diverças modalidade pra executar.
    </p>
    <P>
      Temos também varios professores muito bem capacitado para poder dar auxilior para o valor , para que ele venha ter
      um otimo resuldado
    </P>
  </section>

  <section class="nomes">
    <p>
      Esses são os nossos professores!!!
    </p>

    <div>
      <span class="boxe">
        arthur maliano - 34 anos, profissional há mais de 10 anos na área do boxe. Ele esta disposto ajdar os aluno para
        emagrece e se defender.
      </span>
      <span class="bikeindoor">
        thiago gomes - 30 anos , profissional durante 7 anos , já ajudou varias pessoas emagrecer e ter uma vida
        saudavel
      </span>

      <span class="jiujitsu">
        Carlos Alberto - 44 anos mestre de jiujitsu , tem varias medalhas de compeonato e esta disposto a form futuros
        compeões
        de jiujitsu
      </span>
      <span class="musculação">
        Rafael Dias- 30 anos, personal tem um grande conhecimento na área para poder ajudar as pessoas que esta
        tendo difilcudade em emagrecer.
      </span>

      <span class="jumb">
        Leticia Ribeiro - 30 anos, professora muito procurada em nesta área , por conta ela vem trazendo um trabalho bem
        delicado para que n venha prejudicar os alunos que tem problema de saude mas que queira fazer o jumb.
      </span>
      <span class="natação">
        Ricardo Gomes- 25 anos , ele tem um orimo trabalho de natação ao povo de terceira idade , crianças , tendo a
        responsabilidade de dar o maximo suporte que o aluno esteja precisando
      </span>
    </div>

  </section>

  <div class="professor">
    <img src="../../images/boxe.jpg" alt="boxe" width="250" height="250" class="boxe">
    <img src="../../images/baker indoor.jpg" alt="bike indoor" width="250" class="bike indoor">
    <img src="../../images/jiujitsu.jpg" alt="jiujitsu" width="250" class="jiujitsu">
    <img src="../../images/musculação.jpg" alt="musculação" width="250" class="musculação">
    <img src="../../images/jump.jpg" alt="jumb" width="250" class=" jumb">
    <img src="../../images/natação.jpg" alt="natação" width="255" class="natação">
  </div>


  <AcadFooter></AcadFooter>
</template>

<style scoped>
div.professor {
  display: inline-flex;
}

section.academia {
  background-color: #202020;
  color: white;
  padding: 50px;

}

section.nomes {
  background-color: #5a30e4;
  color: white;
  padding: 30px;
}

span.boxe {
  display: flex;
}

span.bikeindoor {
  display: flex;
}

span.jiujitsu {
  display: flex;
}

span.musculação {
  display: flex;
}

span.jumb {
  display: flex;
}

span.natação {
  display: flex;
}
</style>



















