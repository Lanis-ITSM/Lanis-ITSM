<script lang="ts">
	// Start: Local Imports
	// Models
	import type { IProjectCard } from '$models/interfaces';

	// Components

	// UI
	import { ExternalLink } from '$shared/ui';

	// End: Local Imports

	// Start: Exported Properties
	export let project!: IProjectCard;
	// End: Exported Properties

	// TODO
	// let views = 2000;
</script>

{#if project && project?.slug}
	<ExternalLink href="{project.slug}" ariaLabel="{project.title}">
		<div
			class="dark:hover:shadow-dark mb-4 flex items-center rounded border border-gray-200 p-4 hover:shadow hover:transition-shadow dark:border-gray-800 dark:hover:transition-shadow"
		>
			<div class="ml-2 mr-4 h-14 w-14 flex-shrink-0">
				<span class="sr-only">Svelte</span>
				<img
					alt="{'Sveltekit Blogger'}"
					src="{'/images/author/sveltekit-blogger.svg'}"
					width="1.75rem"
					height="1.75rem"
					class="min-w-sm h-14 w-14 text-gray-900 dark:text-gray-100"
				/>
			</div>
			<div>
				<h3 class="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
					{project?.title}
				</h3>
				<p class="leading-5 text-gray-700 dark:text-gray-300">
					{project?.description}
				</p>
			</div>
		</div>
	</ExternalLink>
{/if}
