<script lang="ts">
	import Tag from './Tag.svelte';

	export let tags!: string[];
</script>

{#if tags.length > 0}
	<div class="mt-4 flex w-full flex-row flex-wrap items-center">
		{#each tags as tag, index (tag)}
			<Tag tag="{tag}" />
			{#if index !== tags.length - 1}
				<p class="mr-2 ml-2 text-gray-500 dark:text-gray-50">
					{` • `}
				</p>
			{/if}
		{/each}
	</div>
{/if}
