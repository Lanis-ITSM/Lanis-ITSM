<script lang="ts">
	export let event: string;
	export let title: string;
	export let content: string;
</script>

<div class="carousel-item">
	<div class="carousel-container">
		<h2 class="animate__animated animate__fadeInDown">{title}</h2>
		<p class="animate__animated animate__fadeInUp">{content}</p>
		<a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto"
			>{event}</a
		>
	</div>
</div>
