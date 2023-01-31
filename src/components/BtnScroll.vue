<script>
export default {
    name: 'BtnScroll',
    methods: {
        scrollToTop() {
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }
    }
}
</script>

<template>
    <span @click="scrollToTop" id="top-btn"><i class="bi bi-chevron-up"></i> </span>
</template>


<style>
#top-btn {
    position: fixed;
    right: 2%;
    bottom: 1%;
    font-size: 28px;
    border: none;
    background-color: var(--light-pink);
    padding: 1rem;
    clip-path: circle();
    opacity: .6;
    cursor: pointer;
}

#top-btn:hover {
    opacity: 1;
}
</style>
