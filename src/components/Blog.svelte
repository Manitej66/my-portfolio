<script>
  import { onMount } from "svelte";
  let load = true;
  let articles = [];
  onMount(async () => {
    await fetch("https://dev.to/api/articles?username=manitej").then(
      async (_articles) => {
        let articles_json = await _articles.json();
        articles = articles_json.slice(0, 6);
      }
    );
  });
</script>

<div class="container font-montserrat text-md" id="blog">
  <p class="font-bold text-4xl font-montserrat text-center text-blue-600 py-2">
    My Latest articles
  </p>
  <div
    class="md:w-3/4 mx-auto items-center justify-center  grid grid-cols-1 p-8 gap-8 lg:grid-cols-3"
  >
    {#if load}
      {#each articles as article}
        <div
          on:click={() => {
            window.open(article.canonical_url, "_blank");
          }}
          class="border-blue-600 border-solid border-2 p-4 rounded-lg shadow-2xl cursor-pointer transform transition duration-500 hover:scale-110"
        >
          <img src={article.cover_image} alt="" />
          <p class="py-2">{article.title}</p>
        </div>
      {/each}
    {/if}
  </div>

  <button
    on:click={() => {
      window.open("https://dev.to/manitej", "_blank");
    }}
    class="p-3 shadow-2xl mx-auto block bg-blue-600 mb-4 text-white"
    >View more blogs</button
  >
</div>
