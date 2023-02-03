<script>
import NavBar from '../components/NavBar.vue';
import AcadFooter from '../components/AcadFooter.vue';
import BookingAdmin from '../components/BookingAdmin.vue';

export default {
  components: {
    NavBar,
    AcadFooter,
    BookingAdmin
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
    <BookingAdmin></BookingAdmin>
  </section>
  <AcadFooter></AcadFooter>
  <BtnScroll></BtnScroll>
</template>

<style scoped>
</style>
