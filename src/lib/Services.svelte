<script lang="ts">
  const services = [
    "Website design",
    "Website development",
    "Mobile application design",
    "Mobile application development",
  ];
</script>

<section id="services">
  <div class="container mx-auto">
    <div class="py-20">
      <h1
        class="title-font text-center text-gray-900 mb-2 title-font font-medium"
      >
        Our services
      </h1>
      <p class="mb-8 leading-relaxed text-center">
        We offer the following services to our clients.
      </p>
      <div class="flex flex-wrap lg:w-4/5 sm:mx-auto">
        {#each services as service}
          <div class="p-2 md:w-1/2 w-full">
            <div class="bg-blue-600 rounded p-4 text-center text-white">
              <p>{service}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
