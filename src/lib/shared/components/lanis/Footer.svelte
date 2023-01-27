<script lang="ts">
	import { local } from '$data/l18n/local';
	import i18n from '$stores/l18n';

	const setLang = (
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLAnchorElement;
		},
	) => {
		e.preventDefault();
		i18n.set({ locale: e.currentTarget.id });
	};
</script>

<footer id="footer">
	<div class="container">
		<h3>LANIS IT Support & Maintenance</h3>
		<p>{local.judul1_isi}</p>
		<div class="social-links">
			<a href="https://twitter.com/Lanis_IT" class="twitter"><i class="bx bxl-twitter"></i></a
			>
			<a href="https://facebook.com/lanis.lanis.52035" class="facebook"
				><i class="bx bxl-facebook"></i></a
			>
			<a href="https://www.instagram.com/lanis.it/" class="instagram"
				><i class="bx bxl-instagram"></i></a
			>
			<a href="mailto:lanisteguh@gmail.com" class="google-plus"
				><i class="bx bxl-google"></i></a
			>
			<a href="https://wa.me/6287865437170" class="linkedin"
				><i class="bx bxl-whatsapp"></i></a
			>
		</div>
		<div class="language">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<a data-sveltekit-preload-code id="en" on:click="{setLang}">{local.footer_1}</a>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<a data-sveltekit-preload-code id="id" on:click="{setLang}">{local.footer_2}</a>
		</div>
	</div>
</footer>
