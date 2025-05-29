<script>
  import { Heading, P, Button } from "flowbite-svelte";
  import { DownloadOutline } from "flowbite-svelte-icons";
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";

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
    let showHeading = false; // A reactive variable to control visibility

  onMount(() => {
    // Set showHeading to true after the component is mounted
    // A small setTimeout can help ensure the DOM is ready for the transition
    setTimeout(() => {
      showHeading = true;
    }, 50); // Adjust delay as needed
  });
</script>


<div class="text-center sm:p-4" id="Home">
   
    <br><br>
    {#if showHeading}
    <Heading tag="h1" class="mb-4 text-4xl font-extrabold  md:text-5xl lg:text-6xl" >
        <span transition:typewriter>Design.Develop.Deliver</span>
    </Heading>
    {/if}
    <P class="mb-6 text-lg sm:px-16 lg:text-xl xl:px-48 dark:white-400 text-center"> 
        I am Nahusenay, I develop fullstack websites fast and secure. I take care of the designing, the developing, security, deployment and seo.</P>
   {#if showHeading} 
    <div class="text-center flex gap-6 align-center justify-center center flex-wrap">
        <span in:fly={{ x: -200, duration: 800, opacity: 0 }}
        out:fade={{ duration: 500 }}><Button href="/#Contact" outline>
            Contact Me  
         </Button></span> 

         <span in:fly={{ x: 200, duration: 800, opacity: 0 }}
        out:fade={{ duration: 500 }}><Button href="/cv.pdf" download="Nahusenay Tadesse CV and Portfolio.pdf">
Download CV    
<DownloadOutline />
  </Button></span>

         
</div>
    {/if}
    <br><br>
</div>

