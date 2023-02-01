<script>
import AcadFooter from '../components/AcadFooter.vue';
import NavBar from '../components/NavBar.vue';
import exercisesService from '../service/exercisesService';

export default {
    data() {
        return { exercicios: [], grupoMuscular:{}}
    },
    methods: {
        allExercises() {
            exercisesService.list()
            .then(res => {
                this.exercicios = res.data
            })
            .catch(error => {
                console.log(error)
            })
        },
        filterExercises() {
            const exercicios = this.exercicios
            exercicios.forEach(e => {
                let grupos = document.getElementById("gruposmusculares")
                console.log(grupos)
                console.log(e.grupomuscular)
            })
        }
      

    },
    mounted() {
        this.allExercises()
        
    }

}
</script>

<template>
<h2>Criar Planilha</h2>
<div v-for="exercicio in exercicios" :key="exercicio">

</div>
<select @click="filterExercises()" id="gruposmusculares">
    <option>Grupo Muscular</option>
    <option value="peitoral">Peitoral</option>    
    <option value="costas">Costas</option>    
    <option value="pernas">Pernas</option>    
</select>
</template>

<style scoped>


</style> 