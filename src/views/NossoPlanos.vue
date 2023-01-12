<script setup>
import NavBar from '../components/NavBar.vue';
import AcadFooter from '../components/AcadFooter.vue'

// export default {
//   components: { NavBar }
// }

</script>

<template>
  <NavBar></NavBar>
 <section>
      <!-- <div class="container-fluid">
        <div id="mainSlider" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#mainSlider" data-slide-to="0" class="active"></li>
            <li data-target="#mainSlider" data-slide-to="1"></li>
            <li data-target="#mainSlider" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://pixabay.com/get/g7400dcc06a3d82a1620bb7f7e5e00c83b44540e754295083313c4ae5b8bfe7761336da1321e99632e3cd0cd4e42f479bf87c0881c621d7dfd9f3de29ac47f20ec173494f6d5c0bbbb0032f94dee5e997_1280.jpg"
                class="d-block w-100" alt="venha conhecer nossos planos">
              <div class="carousel-caption d-none d-md-block">
                <h2>Venha conhecer nossas instalações! </h2>
                <a href="#" class="main-btn">Quem somos</a>
              </div>

            </div>

            <div class="carousel-item">
              <img
                src="https://pixabay.com/get/g7400dcc06a3d82a1620bb7f7e5e00c83b44540e754295083313c4ae5b8bfe7761336da1321e99632e3cd0cd4e42f479bf87c0881c621d7dfd9f3de29ac47f20ec173494f6d5c0bbbb0032f94dee5e997_1280.jpg"
                class="d-block w-100" alt="venha conhecer nossos planos">
              <div class="carousel-caption d-none d-md-block">
                <h2>Venha conhecer nossos planos de academia! </h2>
                <a href="#" class="main-btn">Conhecer planos</a>
              </div>

            </div>

            <div class="carousel-item">
              <img
                src="https://pixabay.com/get/gd26c9e67f899aba69be1ff96796aa6ed4fa1a8d66441967ad49b914fca209a811061007f94d5ffd384288c94c4f5107838fcebdb5ec53b535f84b89cd245010382221042fa7703972d456b4277d8bb97_1280.jpg"
                class="d-block w-100" alt="venha conhecer nossos planos">
              <div class="carousel-caption d-none d-md-block">
                <h2>Veja nossa academia mais proxima de voce! </h2>
                <a href="#" class="main-btn">Nossa Localização</a>
              </div>

            </div>
          </div>
          <a href="#mainSlider" class="carousel-control-prev" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span></a>

          <a href="#mainSlider" class="carousel-control-next" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">next</span></a>

        </div>

      </div> -->
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/imgfitness01.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/imgfitness02.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/imgfitness01.jpg" class="d-block w-100" alt="...">
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
    <AcadFooter></AcadFooter>    
</template>
