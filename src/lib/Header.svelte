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
               <Button>{section}</Button> 
            </NavLi>
        {/each}
    </NavUl>
 

    <DarkMode class = "border" />
    
</Navbar>
</div>

<style>


   
</style>