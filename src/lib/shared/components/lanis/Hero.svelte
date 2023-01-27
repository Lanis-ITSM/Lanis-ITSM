<script lang="ts">
	// const carousel = [
	// 	{
	// 		src: 'images/lanis/hero/smartcity.png',
	// 		alt: 'Smart City',
	// 	},
	// 	{
	// 		src: 'images/lanis/hero/greenearth.jpg',
	// 		alt: 'Green Earth',
	// 	},
	// ];
</script>

<section id="hero" class="d-flex flex-column justify-content-end align-items-center">
	<div class="col-xxl-8 container px-4 py-5">
		<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
			<div class="col-10 col-sm-8 col-lg-6">
				<img
					src="images/lanis/hero/greenearth.jpg"
					class="d-block mx-lg-auto img-fluid rounded"
					alt="Lanis IT Support"
					width="700"
					height="768"
					loading="lazy"
				/>
			</div>
			<div class="col-lg-6">
				<h1 class="display-5 fw-bold lh-1 mb-3 text-white">Lanis IT Support</h1>
				<p class="lead"
					>Menghasilkan produk yang berinovasi serta mampu menjangkau ke seluruh pelosok
					negeri</p
				>
			</div>
		</div>
	</div>

	<svg
		class="hero-waves"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 24 150 28 "
		preserveAspectRatio="none"
	>
		<defs>
			<path
				id="wave-path"
				d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
			>
			</path></defs
		>
		<g class="wave1">
			<use xlink:href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)"> </use></g
		>
		<g class="wave2">
			<use xlink:href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)"> </use></g
		>
		<g class="wave3"> <use xlink:href="#wave-path" x="50" y="9" fill="#fff"> </use></g>
	</svg>
</section>
