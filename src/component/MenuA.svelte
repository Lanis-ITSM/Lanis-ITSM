<script lang="ts">
  import * as animateScroll from "svelte-scrollto";

  interface typeProps {
    header?: boolean;
    menuTitle?: string;
    menuName?: string;
  }

  const menuOrA = (pass) => {
    if (pass) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      animateScroll.scrollTo({
        element: "#services",
        offset: 50,
      });
    }
  };

  export let menuTitle: typeProps["menuTitle"] = null;
  // export let menuName: typeProps["menuName"];
</script>

<a
  class="flex title-font font-medium items-center text-gray-900 mr-5 mb-4 md:mb-0"
  name=""
  href="/"
  on:click={() => {
    menuOrA(menuTitle ? true : false);
  }}
>
  <slot />
  {#if menuTitle}
    <h2 class="ml-3 text-xl mx-5">
      {menuTitle}
    </h2>
  {/if}
</a>
