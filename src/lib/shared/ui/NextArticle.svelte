<script lang="ts">
	// Exports
	export let previousHref = '';

	export let nextHref = '';
</script>

<div class="mb-10 flex flex-wrap pt-2 pb-2">
	<div class="flex w-1/2 justify-start">
		{#if previousHref}
			<a data-sveltekit-preload-data href="{previousHref}" aria-label="previous">
				<small
					class="block text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-500"
				>
					Previous article
				</small>
			</a>
		{/if}
	</div>
	<div class="flex w-1/2 justify-end">
		{#if nextHref}
			<a data-sveltekit-preload-data href="{nextHref}" aria-label="next">
				<small
					class="block text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-500"
				>
					Next article
				</small>
			</a>
		{/if}
	</div>
</div>
