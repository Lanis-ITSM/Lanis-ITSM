<script lang="ts">
	// Start: Local Imports
	// Components
	import { TagsContainer } from '$shared/ui';

	// Models
	import type { IBlog } from '$models/interfaces';

	// End: Local Imports

	// Start: Exported Properties
	export let blog!: IBlog;
	// End: Exported Properties
</script>

{#if blog && blog?.slug}
	<div class="mb-8 w-full border-b border-gray-100 pb-5 dark:border-gray-800">
		<div class="flex flex-col justify-between md:flex-row">
			<a data-sveltekit-preload-data href="{`/blog/${blog.slug}`}" class="w-full">
				<h3
					class="mb-2 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl"
				>
					{blog.title}
				</h3>
			</a>
			<!-- <p class="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
					{`${views ? new Number(views).toLocaleString() : '–––'} views`}
				</p> -->
		</div>
		<p class="text-gray-600 dark:text-gray-400">{blog.description}</p>
		<TagsContainer tags="{blog.tags}" />
	</div>
	<!-- <hr class="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" /> -->
{/if}
