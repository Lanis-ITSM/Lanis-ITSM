<script lang="ts">
	export let title = '';
	export let description = '';
	export let slug = '';
	export let logo = '';
</script>

<a
	data-sveltekit-preload-data
	href="{`/snippets/${slug}`}"
	class="border-grey-200 dark:hover:shadow-dark w-full rounded border p-4 filter hover:shadow-md dark:border-gray-900"
>
	<img
		alt="{title}"
		height="{32}"
		width="{32}"
		src="{`/logos/${logo}`}"
		class="rounded-full drop-shadow filter"
	/>
	<h3 class="mt-2 text-left text-lg font-bold text-gray-900 dark:text-gray-100">
		{title}
	</h3>
	<p class="mt-1 text-gray-700 dark:text-gray-400">{description}</p>
</a>
