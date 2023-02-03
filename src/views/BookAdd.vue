<script>
import NavBar from '../components/NavBar.vue';
import AcadFooter from '../components/AcadFooter.vue';
import BookingAdd from '../components/BookingAdd.vue';

export default {
  components: {
    NavBar,
    AcadFooter,
    BookingAdd
  },
  data() {
    return { rerender: 0 }
  },
  methods: {
    forceRerender() {
      this.rerender++
    }
  },
  mounted() {
    this.forceRerender()
  }
}


</script>

<template>
  <NavBar :key="rerender"></NavBar>
  <section>
    <BookingAdd></BookingAdd>
  </section>
  <AcadFooter></AcadFooter>
  <BtnScroll></BtnScroll>
</template>

<style scoped>
section {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
