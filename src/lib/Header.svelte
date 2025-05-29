<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, DarkMode } from "flowbite-svelte";
    let sections = ['Home', 'About', 'Services', 'Projects', 'Contact'];


</script>
<div class="sticky top-0">
<Navbar class="*:ring-primary-700!">
    <div class="hidden lg:flex">

    </div>
     <NavHamburger />
    <NavUl>
        {#each sections as section}
            <NavLi href="/#{section}" >
            <button
                class="px-4 py-2 rounded-lg font-semibold transition-all duration-200
                             bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-md
                             hover:from-primary-600 hover:to-primary-800 hover:scale-105 hover:shadow-lg
                             active:scale-95 active:shadow-inner focus:outline-none focus:ring-2 focus:ring-primary-400"
            >
                {section}
            </button>
            </NavLi>
        {/each}
    </NavUl>
 

    <DarkMode class = "border" />
    
</Navbar>
</div>

<style>


   
</style>