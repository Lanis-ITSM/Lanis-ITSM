<script lang="ts">
	// Start: Local Imports
	import { blur } from 'svelte/transition';

	// Models
	import type { ITopTrack } from '$models/interfaces/itop-track.interface';

	// UI Components
	import ExternalLink from './ExternalLink.svelte';
	// End: Local Imports

	export let index!: number;
	export let track!: ITopTrack;
</script>

{#if track}
	{#key track.title}
		<div
			id="{String(index)}"
			in:blur="{{ delay: 250, duration: 300 }}"
			out:blur="{{ delay: 250, duration: 300 }}"
			class="mt-8 flex w-full max-w-3xl flex-row items-baseline border-b border-gray-100 dark:border-gray-800"
		>
			<p class="text-sm font-bold text-gray-500 dark:text-gray-400">
				{track.ranking}
			</p>
			<div class="flex flex-col pl-3">
				<ExternalLink
					href="{track.songUrl}"
					cssClasses="{'font-medium text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-full'}"
					ariaLabel="{track.title}"
				>
					{track.title}
				</ExternalLink>
				<p class="mb-4 w-60 truncate text-gray-500 sm:w-96 md:w-full" color="gray.500">
					{track.artist}
				</p>
			</div>
		</div>
	{/key}
{/if}
