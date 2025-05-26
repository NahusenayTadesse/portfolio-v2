<script>
  import { Heading, P, Button } from "flowbite-svelte";
  import { DownloadOutline } from "flowbite-svelte-icons";

	function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>


<div class="text-center h-lvh sm:p-4" id="Home">
   
    <br><br><br><br>
   
    <Heading tag="h1" class="mb-4 text-4xl font-extrabold  md:text-5xl lg:text-6xl" >
        <span transition:typewriter>Design.Develop.Deliver</span>
    </Heading>
    <P class="mb-6 text-lg sm:px-16 lg:text-xl xl:px-48 dark:white-400 text-center"> 
        I am Nahusenay, I develop fullstack websites fast and secure. I take care of the designing, the developing, security, deployment and seo.</P>
    
    <div class="text-center flex gap-6 align-center justify-center center flex-wrap">
         <Button href="/#Contact" outline>
            Contact Me  
         </Button>
         <Button href="/cv.pdf" download="Nahusenay Tadesse CV and Portfolio.pdf">
Download CV    
<DownloadOutline />
  </Button>
</div>
</div>

