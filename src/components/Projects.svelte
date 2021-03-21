<div id="projects" class="font-MaisonNeueDemi">
  <p class="font-bold text-4xl text-center text-blue-600 py-2">Projects</p>

  <div
    class="md:w-3/4 mx-auto items-center justify-center  grid grid-cols-1 p-8 gap-8 lg:grid-cols-3"
  >
    <div
      on:click={() => {
        window.open("https://twitsubs.vercel.app/", "_blank");
      }}
      class="border-blue-600 h-96 border-solid border-2 p-4 rounded-lg shadow-2xl cursor-pointer transform transition duration-500 hover:scale-110"
    >
      <img src="/twitsubs.png" alt="" />
      <p class="pt-2 text-xl font-bold">Twitsubs</p>
      <p class="pt-2">
        This web app is a tool that displays live youtube subscriber count in
        Twitter bio. Automatically updates every 24hrs
      </p>
    </div>

    <div
      on:click={() => {
        window.open("https://twitter.com/TechBot19", "_blank");
      }}
      class="border-blue-600 h-96 border-solid border-2 p-4 rounded-lg shadow-2xl cursor-pointer transform transition duration-500 hover:scale-110"
    >
      <img src="/bot.png" alt="" />
      <p class="pt-2 text-xl font-bold">Tech twitter bot</p>
      <p class="pt-2">Twitter Like and Retweet bot</p>
    </div>

    <div
      on:click={() => {
        window.open("https://assign-me.vercel.app/", "_blank");
      }}
      class="border-blue-600 h-96 border-solid border-2 p-4 rounded-lg shadow-2xl cursor-pointer transform transition duration-500 hover:scale-110"
    >
      <img src="/assign.png" alt="" />
      <p class="pt-2 text-xl font-bold">Text to handwriting PDF</p>
      <p class="pt-2">
        This is a web app made using svelte that converts text into a
        user-written PDF file
      </p>
    </div>
    <div
      on:click={() => {
        window.open(
          "https://play.google.com/store/apps/details?id=com.rps1432",
          "_blank"
        );
      }}
      class="border-blue-600 h-96 border-solid border-2 p-4 rounded-lg shadow-2xl cursor-pointer transform transition duration-500 hover:scale-110"
    >
      <img src="/rps.png" alt="" />
      <p class="pt-2 text-xl font-bold">Rock paper scissors app</p>
      <p class="pt-2">Famous indoor game now can be played Online</p>
    </div>

    <div
      on:click={() => {
        window.open(
          "https://play.google.com/store/apps/details?id=com.techshots12",
          "_blank"
        );
      }}
      class="border-blue-600 h-96 border-solid border-2 p-4 rounded-lg shadow-2xl cursor-pointer transform transition duration-500 hover:scale-110"
    >
      <img src="/tech.png" alt="" />
      <p class="pt-2 text-xl font-bold">Tech shots</p>
      <p class="pt-2">Find All Latest Tech News At one Place!</p>
    </div>
    <div
      on:click={() => {
        window.open(
          "https://play.google.com/store/apps/details?id=com.expirenotifier",
          "_blank"
        );
      }}
      class="border-blue-600 h-96 border-solid border-2 p-4 rounded-lg shadow-2xl cursor-pointer transform transition duration-500 hover:scale-110"
    >
      <img src="/ex.png" alt="" />
      <p class="pt-2 text-xl font-bold">Product Expiry Notifier</p>
      <p class="pt-2">Find All Latest Tech News At one Place!</p>
    </div>
  </div>

  <button
    on:click={() => {
      window.open("https://github.com/Manitej66", "_blank");
    }}
    class="p-3 shadow-2xl mx-auto block bg-blue-600 mb-4 text-white"
    >View all projects</button
  >
</div>
