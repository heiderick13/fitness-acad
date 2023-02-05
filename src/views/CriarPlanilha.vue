<script>
import AcadFooter from '../components/AcadFooter.vue';
import NavBar from '../components/NavBar.vue';
import exercisesService from '../service/exercisesService';

export default {
    components: {
        NavBar,
        AcadFooter
    },

    data() {
        return { exercicios: [], grupoMuscular: [], counterId: 0 }
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
            this.grupoMuscular = [];
            exercicios.forEach(e => {
                let grupos = document.getElementById("gruposmusculares").value
                if (grupos == e.grupomuscular) {
                    this.grupoMuscular.push(e)
                }
            })
        },
        createExercisesHTML() {
            if (!document.getElementById("series").value || !document.getElementById("repeticoes").value) {
                alert("Campos em branco")
            }
            const selectedExercise = document.getElementById("exercicioescolhido").value
            const selectedSerie = document.getElementById("serieEscolhida").value
            this.exercicios.forEach(e => {
                if (e.nome == selectedExercise) {
                    e.series = document.getElementById("series").value
                    e.repeticoes = document.getElementById("repeticoes").value
                    document.querySelectorAll(".seriecard").forEach(ele => {
                        if (selectedSerie == ele.id) {
                            let counterId = this.counterId
                            const dinamicId = document.createElement("div")
                            dinamicId.id = "exerDinamicId" + (counterId)
                            dinamicId.classList.add("border-end", "border-start", "px-2")
                            ele.appendChild(dinamicId)
                            ele.lastChild.innerHTML += '<span class="fw-light">Exercício<br></span>' + e.nome +
                                '<br><span class="fw-light">Series</span><br>' + e.series +
                                '<br><span class="fw-light">Reps</span><br>' + e.repeticoes +
                                '<button class="btn btn-danger p-1 mx-2"><i class="bi bi-trash"></i></button>';
                                
                                dinamicId.addEventListener("click", () => {
                                    dinamicId.remove()
                                });
                                this.counterId += 1;
                        }
                    })

                }
            })
        }


    },
    mounted() {
        this.allExercises()

    }

}


</script>

<template>
    <NavBar></NavBar>
    <div class="container text-center">
        <div class="card1 card form-control my-5">
            <h2 class="text-center">Add Exercicios</h2>
            <select @click="filterExercises()" id="gruposmusculares"
                class="form-select my-2">
                <option selected>Grupo Muscular</option>
                <option value="Peitoral">Peitoral</option>
                <option value="Costas">Costas</option>
                <option value="Pernas">Pernas</option>
            </select>
            <select @click="filterExercises()" class="form-select my-2"
                id="exercicioescolhido">
                <option selected>Exercicios</option>
                <option v-for="musculo in grupoMuscular" :key="musculo"> {{
                    musculo.nome
                }}</option>
            </select>
            <div class="input-group my-2">
                <input type="number" class="form-control" placeholder="Series"
                    aria-label="series" id="series" required>
            </div>
            <div class="input-group my-2">
                <input type="number" class="form-control"
                    placeholder="Repeticoes" aria-label="repeticoes"
                    id="repeticoes" required>
            </div>
            <select id="serieEscolhida" class="form-select my-2">
                <option selected>Letra da Serie</option>
                <option id="serieselector">Serie-A</option>
                <option id="serieselector">Serie-B</option>
                <option id="serieselector">Serie-C</option>
                <option id="serieselector">Serie-D</option>
                <option id="serieselector">Serie-E</option>
                <option id="serieselector">Serie-F</option>
            </select>
            <button class="btn btn-primary"
                @click="createExercisesHTML()">Adicionar</button>
        </div>
    </div>
    <div id="corpo" class="d-flex">
        <div class="card2 card">
            <div class="d-flex seriecard my-2" id="Serie-A">
                <div class="serie serieA badge">Serie A</div>
            </div>
            <hr>
            <div class="d-flex seriecard my-2" id="Serie-B">
                <div class="serie serieB badge">Serie B</div>
            </div>
            <hr>
            <div class="d-flex seriecard my-2" id="Serie-C">
                <div class="serie serieC badge">Serie C</div>
            </div>

        </div>
        <div class="card card2">
            <div class="d-flex seriecard my-2" id="Serie-D">
                <div class="serie serieD badge">Serie D</div>
            </div>
            <hr>
            <div class="d-flex seriecard my-2" id="Serie-E">
                <div class="serie serieE badge">Serie E</div>
            </div>
            <hr>
            <div class="d-flex seriecard my-2" id="Serie-F">
                <div class="serie serieF badge">Serie F</div>
            </div>

        </div>
    </div>
</template>

<style scoped>
#corpo {
    padding-bottom: 2rem;
}

.card1 {
    width: 300px;
    margin: auto;
}

.seriecard {
    overflow-x: auto;
    scrollbar-width: none;
}

.seriecard::-webkit-scrollbar {
    display: none;
}

.exercicio {
    min-width: 55px;
}

.card2 {
    width: 400px;
    margin: auto;

}

.serie {
    width: 40px;
    height: 20vh;
    background-color: var(--light-pink);
    color: var(--light-green);
    font-size: 16px;
    writing-mode: vertical-lr;
    text-orientation: upright;
}

.badge {
    height: auto;
}

#headerExercises {
    color: blue
}

@media screen and (max-width: 800px) {
    #corpo {
        flex-direction: column;
    }
}
</style> 