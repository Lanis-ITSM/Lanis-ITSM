<script lang="ts">
  import MenuA from "../component/MenuA.svelte";

  const menus = ["home", "services", "navigation"];
</script>

<header class="text-gray-600 body-font">
  <div
    class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
  >
    <MenuA menuTitle="Lanis IT Support and Maintenance" />
    <nav class="md:mx-auto flex flex-wrap items-center justify-center">
      {#each menus as menu}
        <MenuA>{menu}</MenuA>
      {/each}
    </nav>
  </div>
</header>
