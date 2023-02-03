<script>

export default {
    name: 'AcadFooter',
}
</script>

<template>

    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
            integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>

    <footer>
        <div id="footerContainer">

            <div id="footerLogo">
                <!-- <h2 id="logo">Fitness</h2> -->
                <img src="../../images/logo.png" alt="logo">
            </div>

            <div id="footerMap">
                <img src="../../images/local.png" alt="mapa">
            </div>

            <div id="footerData">
                <h3>Endereço</h3>
                <ul id="footerInfo">
                    <li>Av taltaltal nº 777</li>
                    <li>Chapa Quente - RJ</li>
                    <li id="br">Brasil</li>
                    <li><i class="fa-solid fa-square-phone"><b>(21) 99999-9999</b></i></li>
                </ul>
            </div>
        </div>

        <div id="socialMedia">
            <ul>
                <RouterLink class="footerLink" to="#"><i class="fa-brands fa-facebook-f"></i></RouterLink>
                <RouterLink class="footerLink" to="#"><i class="fa-brands fa-square-instagram"></i></RouterLink>
                <RouterLink class="footerLink" to="#"><i class="fa-brands fa-twitter"></i></RouterLink>
                <RouterLink class="footerLink" to="#"><i class="fa-brands fa-youtube"></i></RouterLink>
            </ul>
        </div>

    </footer>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&family=Poppins:wght@400;500&family=Prosto+One&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

li {
    list-style: none;
}

footer {
    position: relative;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(rgba(71, 45, 157, 0.8), rgba(0, 0, 0, 0.8)), url("../../images/exercise-weights-iron-dumbbell-with-extra-plates.jpg");
    background-position: center;
    background-size: cover;
}

#footerContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 7px;
    border-top: 2px solid var(--secondary);
}

#footerLogo {
    text-align: center;
    padding: 70px 0;
    margin: 0 100px;
    color: var(--secondary);
}

#footerLogo img {
    max-width: 120px;
}

#logo {
    font-family: 'Lora', serif;
    font-weight: 600;
    text-shadow: 1px 1px 1px #000;
}

#footerMap {
    margin: 0 30px;
}

#footerMap img {
    width: 100%;
    border: 4px solid var(--secondary);
    border-radius: 20px;
    box-shadow: 1px 1px 1px #000;
    max-height: 190px;
    opacity: 0.7;
}

#footerData {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 70px 0;
    color: var(--secondary);
}

#footerData h3 {
    font-family: 'Prosto One', cursive;
    font-size: 1rem;
    padding-right: 25px;
    text-shadow: 1px 1px 1px #000;
}

#footerInfo {
    font-size: 0.8rem;
    text-shadow: 1px 1px 1px #000;
}

#footerInfo b {
    font-family: 'Prosto One', cursive;
    padding-left: 5px;
}

#socialMedia {
    background: linear-gradient(rgba(255, 164, 28, 0.8), rgba(0, 0, 0, 0.8));
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7vh;
    width: 100%;
}

#socialMedia ul {
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 60px;
    font-size: 1.5rem;
}

.footerLink {
    text-decoration: none;
    color: var(--primary);
}

.footerLink:hover {
    cursor: pointer;
    color: var(--white);
    transition: 0.5s;
}

@media screen and (min-width: 700px) {

    #footerContainer {
        justify-content: center;
        align-items: center;
        padding: 0 5px;
        gap: 20px;
    }

    #footerLogo {
        text-align: left;
        padding: 0 70px 170px 0;
        margin: 0 0 0 20px;
    }

    #footerMap {
        margin: 0;
        max-width: 250px;
        padding: 70px 0;
    }

    #footerData {
        flex-direction: column;
        align-items: flex-start;
        padding-left: 25px;
        margin-left: 20px;
    }

    #footerData h3 {
        padding-bottom: 15px;
    }
}

@media screen and (min-width: 815px) {

    #footerLogo {
        text-align: right;
        padding: 0 0 170px 0;
    }

    #footerMap {
        margin-right: 15px;
    }
}

@media screen and (min-width: 900px) {

    #footerMap {
        margin-right: 30px;
    }
}

@media screen and (min-width: 1000px) {

    #footerContainer {
        justify-content: space-around;
        padding: 0 10px;
        margin: 0;
    }

    #footerLogo {
        margin: 0 120px 0 0;
        text-align: center;
        padding: 0 0 100px 0;
    }

    #footerMap {
        order: 3;
        margin: 0;
        padding: 30px 0;
    }

    #footerData {
        padding: 0;
        margin: 0;
        order: 2;
        align-items: flex-start;
    }

    #footerInfo {
        padding: 0;
        margin: 0;
        font-size: 0.8rem;
    }

    #br {
        padding-bottom: 10px;
    }
}
</style>