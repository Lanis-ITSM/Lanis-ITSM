<script lang="ts">
  import TailwindCss from "./TailwindCSS.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Hero from "./lib/Hero.svelte";
  import Services from "./lib/Services.svelte";
  import Team from "./lib/Team.svelte";
  import Footer from "./lib/Footer.svelte";

  import SvelteDefault from "./SvelteDefault.svelte";
</script>

<TailwindCss />

<main class="max-w mx-auto px-4">
  <!-- <SvelteDefault /> -->
  <div class="pt-4 pb-12">
    <Navbar />
    <Hero />
    <Services />
    <!-- 
    <Team />
    <Footer /> -->
    <div />
  </div>
</main>
