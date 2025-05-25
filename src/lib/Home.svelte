<script>
  import { Heading, P, Button } from "flowbite-svelte";
  import { DownloadOutline } from "flowbite-svelte-icons";
</script>


<div class="text-center h-lvh" id="Home">
    <div class="ribbons-container">
        <div class="ribbon"></div>
        <div class="ribbon"></div>
        <div class="ribbon"></div>
        <div class="ribbon"></div>
        <div class="ribbon"></div>
    </div>
    <Heading tag="h1" class="mb-4 text-4xl font-extrabold  md:text-5xl lg:text-6xl">Design. Develop. Deliver.</Heading>
    <P class="mb-6 text-lg sm:px-16 lg:text-xl xl:px-48 dark:white-400 text-center"> 
        I am Nahusenay, I develop fullstack websites fast and secure. I take care of the designing, the developing, security, deployment and seo.</P>
    
    <div class="text-center">
         <Button href="/#Contact">
  Contact Me  
  </Button>
    <Button href="/cv.pdf" download="Nahusenay Tadesse CV and Portfolio.pdf">
Download CV    
<DownloadOutline />
  </Button>
</div>
</div>

<style>
 .ribbons-container {
    position: absolute;
    width: 100%;
    height: 50vh;
    overflow: hidden;
    pointer-events: none; /* Allows interaction with elements below */
}

.ribbon {
    position: absolute;
    height: 40px; /* Adjust ribbon height */
    border-radius: 20px; /* Rounded ends */
    opacity: 0.8;
    filter: blur(1px); /* Slight blur for softness */
    z-index: -1;
}

/* Ribbon 1 */
.ribbon:nth-child(1) {
    width: 250px;
    background: linear-gradient(135deg, #ff00ff, #00ffff); /* Purple to Cyan */
    top: 10%;
    left: -20%; /* Start off-screen */
    animation: ribbonMove1 20s infinite alternate ease-in-out;
        z-index: -1;

}

/* Ribbon 2 */
.ribbon:nth-child(2) {
    width: 300px;
    background: linear-gradient(45deg, #ff4d4d, #ffff00); /* Red to Yellow */
    top: 50%;
    right: -20%; /* Start off-screen */
    animation: ribbonMove2 25s infinite alternate-reverse ease-in-out;
        z-index: -1;

}

/* Ribbon 3 */
.ribbon:nth-child(3) {
    width: 180px;
    background: linear-gradient(90deg, #00ff88, #4d4dff); /* Green to Blue */
    bottom: 20%;
    left: -15%; /* Start off-screen */
    animation: ribbonMove3 18s infinite alternate ease-in-out;
        z-index: -1;

}

/* Ribbon 4 */
.ribbon:nth-child(4) {
    width: 280px;
    background: linear-gradient(225deg, #ffa500, #ff6347); /* Orange to Tomato */
    top: 30%;
    right: -25%; /* Start off-screen */
    animation: ribbonMove4 22s infinite alternate-reverse ease-in-out;
        z-index: -1;

}

/* Ribbon 5 */
.ribbon:nth-child(5) {
    width: 200px;
    background: linear-gradient(270deg, #8a2be2, #00ced1); /* Blue Violet to Dark Cyan */
    bottom: 5%;
    left: -10%; /* Start off-screen */
    animation: ribbonMove5 19s infinite alternate ease-in-out;
        z-index: -1;

}

/* Keyframes for Ribbon Movements */

@keyframes ribbonMove1 {
    0% {
        transform: translateX(0) translateY(0) rotate(0deg);
        opacity: 0.5;
    }
    50% {
        transform: translateX(120vw) translateY(50px) rotate(180deg);
        opacity: 1;
    }
    100% {
        transform: translateX(0) translateY(0) rotate(360deg);
        opacity: 0.5;
    }
}

@keyframes ribbonMove2 {
    0% {
        transform: translateX(0) translateY(0) rotate(0deg);
        opacity: 0.7;
    }
    50% {
        transform: translateX(-120vw) translateY(-70px) rotate(-150deg);
        opacity: 0.9;
    }
    100% {
        transform: translateX(0) translateY(0) rotate(0deg);
        opacity: 0.7;
    }
}

@keyframes ribbonMove3 {
    0% {
        transform: translateX(0) translateY(0) rotate(0deg);
        opacity: 0.6;
    }
    40% {
        transform: translateX(110vw) translateY(-30px) rotate(200deg);
        opacity: 0.8;
    }
    80% {
        transform: translateX(20vw) translateY(80px) rotate(100deg);
        opacity: 0.7;
    }
    100% {
        transform: translateX(0) translateY(0) rotate(0deg);
        opacity: 0.6;
    }
}

@keyframes ribbonMove4 {
    0% {
        transform: translateX(0) translateY(0) rotate(0deg);
        opacity: 0.5;
    }
    60% {
        transform: translateX(-130vw) translateY(40px) rotate(-220deg);
        opacity: 0.9;
    }
    100% {
        transform: translateX(0) translateY(0) rotate(0deg);
        opacity: 0.5;
    }
}

@keyframes ribbonMove5 {
    0% {
        transform: translateX(0) translateY(0) rotate(0deg);
        opacity: 0.7;
    }
    70% {
        transform: translateX(125vw) translateY(-60px) rotate(250deg);
        opacity: 1;
    }
    100% {
        transform: translateX(0) translateY(0) rotate(0deg);
        opacity: 0.7;
    }
}
</style>