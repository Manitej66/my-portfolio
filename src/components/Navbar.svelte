<script>
  import * as animateScroll from "svelte-scrollto";
</script>

<div
  class="flex font-MaisonNeueDemi justify-around items-center h-20 bg-blue-600 fixed w-screen top-0 text-white z-50"
>
  <p
    on:click={() =>
      animateScroll.scrollTo({ element: "#hero", duration: 1500 })}
    class="font-bold cursor-pointer"
  >
    MT ⚡
  </p>
  <div class="space-x-2 flex">
    <p
      on:click={() =>
        animateScroll.scrollTo({
          element: "#projects",
          duration: 1500,
          offset: -100,
        })}
      class="cursor-pointer"
    >
      Projects
    </p>
    <p
      class="cursor-pointer"
      on:click={() =>
        animateScroll.scrollTo({
          element: "#skills",
          offset: -100,
          duration: 1500,
        })}
    >
      Skills
    </p>
    <p
      on:click={() =>
        animateScroll.scrollTo({
          element: "#blog",
          duration: 1500,
          offset: -100,
        })}
      class="cursor-pointer"
    >
      Blog
    </p>
  </div>
</div>
