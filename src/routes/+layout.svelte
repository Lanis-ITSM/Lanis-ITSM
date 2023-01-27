<script>
	import '../app.postcss'; // tailwind
	import '../app.scss'; // bootstrap
	import { Header, Footer } from '$shared/components/lanis';
</script>

<Header />
<slot />
<Footer />

<!-- <div class="container" style="margin-top: 80px">
	<div class="row">
		<div class="col-md-12">
			<slot />
		</div>
	</div>
</div> -->

<!-- <style global lang="postcss">
	// will be executed later after <script/>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style> -->
