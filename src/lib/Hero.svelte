<script>
  import * as animateScroll from "svelte-scrollto";
</script>

<section id="home" class="text-gray-600 body-font my-2">
  <div class="container mx-auto flex items-center justify-between">
    <div class="flex items-center justify-between mx-5">
      <div class="py-20 mx-4">
        <h1 class="title-font text-gray-900 mb-4 title-font font-medium">
          Trusted by over one thousand clients
        </h1>
        <p>We offer the best web service to our clients.</p>
      </div>
      <button
        class="bg-blue-600 px-6 py-2 text-white rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline"
        on:click={() =>
          animateScroll.scrollTo({
            element: "#services",
            offset: 50,
          })}>Our services</button
      >
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        class="object-cover object-center rounded-xl"
        alt="hero"
        src="https://images.unsplash.com/photo-1633114127451-558041183c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
    </div>
  </div>
</section>
