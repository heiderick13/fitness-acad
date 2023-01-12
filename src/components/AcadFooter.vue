<script>

export default {
    name: 'AcadFooter',
}
</script>

<template class="fixed-bottom">
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>

<footer>    
        <div id="footerContainer">
            <div id="footerLogo">
               <h2 id="logo">FITNESS</h2>
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
                </ul>
            </div>
        </div>

        <div id="footerFone">
           <li><i class="fa-solid fa-square-phone"></i></li>
           <li><b>(21) 99999-9999</b></li>
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

li {
    list-style: none;
}

footer {
    position: relative;
    font-family: 'Poppins', sans-serif; 
    background: linear-gradient(rgba(71, 45, 157,0.8), rgba(0,0,0,0.8)), url("../../images/exercise-weights-iron-dumbbell-with-extra-plates.jpg");
    background-position: center;
    background-size: cover; 
}

#footerContainer {    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 7px;
    border-top: 3px solid var(--secondary);        
}

#footerLogo {
    text-align: center;
    padding: 70px 0 30px 0;
    margin-bottom: 30px;
    color: var(--secondary);
}

#logo {    
    font-family: 'Lora', serif;
    font-weight: 600;
    text-shadow: 1px 1px 1px #000;    
}

#footerMap {
    margin-bottom: 30px;
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
    flex-direction:row;
    align-items: flex-start;
    padding-bottom: 5px;
    margin-top: 35px;
    color:var(--secondary);
}

#footerData h3{
    font-family: 'Prosto One', cursive;
    font-size: 1rem;
    padding-right: 25px;
    text-shadow: 1px 1px 1px #000;            
}

#footerInfo {
    font-size: 0.8rem;
    text-shadow: 1px 1px 1px #000;
}

#footerFone { 
    background-color: transparent;
    display: flex;
    font-size: 0.8rem;
    align-items: center;
    justify-content: center;
    padding-left: 120px;
    padding-bottom: 30px; 
    color: var(--secondary);
    gap: 5px;
    text-shadow: 1px 1px 1px #000;   
}

#footerFone:nth-child(2){
    font-family: 'Prosto One', cursive;
}

#socialMedia {
    background: linear-gradient(rgba(255,164,28,0.8), rgba(0,0,0,0.8));
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
    padding-top: 15px;      
}
.footerLink:hover {
    cursor: pointer;
    color:var(--white);
    transition: 0.5s;       
}

@media screen and (min-width: 700px) {
    
    #footerContainer {    
        justify-content: none;
        padding: 0 5px;
        gap: 5px;            
    }

    #footerLogo {
        text-align: left;
        padding: 40px 85px 0 0;        
    }

    #footerMap {
        max-width: 250px;
        padding-top: 80px;               
    }   

    #footerData {
        flex-direction:column;
        align-items: flex-start;
        padding: 58px 0px 0 80px;
    }

    #footerData h3{
        padding-bottom: 15px;        
    }

    #footerFone {
        position: absolute;      
        justify-content: flex-end;
        bottom: 174px;
        right: 50px;
        padding: 0;
        margin: 0;        
    }

    #socialMedia {
        margin-top: 55px;
    }
}

@media screen and (min-width: 815px) {

    #footerFone {      
        right: 78px;
        bottom: 184px;
    }
}

@media screen and (min-width: 900px) {

    #footerLogo {
        padding: 40px 120px 0 0;        
    }

    #footerFone {      
        padding: 0 103px 20px 0;              
    }

    #footerData h3{
        padding: 30px 0px 25px 90px;
    }

    #footerInfo {
        padding-left: 90px;
    }
}

@media screen and (min-width: 1200px) {

    footer{
        position: relative;
    }

    #footerContainer {    
        justify-content: space-between;
        padding: 0 10px;
        margin: 0;            
    }

    #footerLogo {
        text-align: left;
        padding: 25px 0px 0 150px;        
    }

    #footerMap {
        order: 3;
        padding: 30px 0;
        margin-right: 100px;
        max-width: 235px;
        padding-bottom: 0;
    }
    
    #footerData {
        position: absolute;
        order: 2;
        align-items: flex-end;
        bottom: 110px;
        right: 470px;        
    }

    #footerData h3{
        padding-right: 40px;
        padding: 0 40px 5px;               
    }    

    #footerInfo {
        padding: 0;
        margin: 0;
        font-size: 0.8rem;                              
    }

    #footerFone {
        font-size: 0.8rem;
        padding: 0;  
        position: absolute;    
        bottom: 85px;
        right: 458px;        
    }

    #socialMedia {
        margin-top: 0;
    }
}
</style>