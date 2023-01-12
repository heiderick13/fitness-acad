<script setup>
import NavBar from '../components/NavBar.vue';

// export default {
//   components: { NavBar }
// }

</script>

<template>
  <NavBar></NavBar>
 <section>
      
      <div id="carouselExample" class="carousel slide h-25">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://pixabay.com/get/g4f720afc0477570967bf374499ef33b410fd8fcd321abba928751dfdb3ae74b5f000ab2403a722bc076147c51f934d0b89a3874cad63ce4312d5176ad35388ca3c9a4608ae1367c42cfab3029f04bbae_1280.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://pixabay.com/get/g75e9add3452d8182ee5904a616904a12d103c37a5e6de53eb3c46440371f908eee1a5636534b93a8f26bdb78126b7d997d5caa987249634d9fb4dd3ce9adfbc44cbb507d9074c5c5165d5f668767b91f_1280.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://pixabay.com/get/g10530da67ddcccab4394a16f7b924fea28b0d61bd7fd31f413b6f49f2eb3e76e08bebcb62844cbfacb56a4f590be811bfc4d71438d247fefba47aefd3ea0731b79381eef0f5cbdc13cb45bdea8164314_1280.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    
    </section>
</template>
