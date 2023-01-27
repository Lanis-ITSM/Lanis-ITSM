<script lang="ts">
	import type { IVideoCard } from '$models/interfaces';
	import { ExternalLink } from '$shared/ui';

	export let video!: IVideoCard;
</script>

{#if video && video?.id && video?.snippet && video?.statistics}
	<ExternalLink
		href="{`https://www.youtube.com/watch?v=${video.id}`}"
		cssClasses="{'w-full'}"
		ariaLabel="{video.snippet.title}"
	>
		<div class="mb-8 w-full">
			<div class="flex flex-col justify-between md:flex-row">
				<h4
					class="mb-2 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl"
				>
					{video.snippet.title}
				</h4>
				<p class="mb-4 w-32 text-left text-gray-500 md:mb-0 md:text-right">
					{`${new Number(video.statistics.viewCount).toLocaleString()} views`}
				</p>
			</div>
			<p class="text-gray-600 dark:text-gray-400">
				{video.snippet.description.slice(0, 85) + '...'}
			</p>
		</div>
	</ExternalLink>
{/if}
