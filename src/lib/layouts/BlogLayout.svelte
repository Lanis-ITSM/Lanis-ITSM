<script lang="ts">
	import { onMount } from 'svelte';

	// Environment
	import environment from '$environment';

	// Models
	import type { IMetaTagProperties } from '$models/interfaces';

	// Components
	import { HeadTags } from '$shared/components';

	// UI
	import { TagsContainer, NextArticle, ShareButtons, ExternalLink } from '$shared/ui';

	// Utils
	import { blogTypeDate } from '$utils/date-formatters';
	import { readingTime } from '$utils/reading-time';

	// Exports
	export let title = '';
	export let slug = '';
	export let description = '';
	export let tags: string[] = [];
	export let date = '';
	export let author = '';
	export let previousArticleLink = '';
	export let nextArticleLink = '';

	let readingTimeDuration = '';

	const editUrl = `${environment.gitHubConfig.GITHUB_BLOG_EDIT_URL}/${slug}/index.md`;
	const discussUrl = `${environment.twitterConfig.TWITTER_SEARCH_URL}?q=${encodeURIComponent(
		`https://sveltekit-blog-starter.vercel.app/blog/${slug}`,
	)}`;

	let metaData: IMetaTagProperties = {
		url: `/blog/${slug}`,
		title: `${title} | Sveltekit`,
		description: `${description}`,
		keywords: ['sveltekit blog', 'sveltekit starter', 'svelte starter', 'svelte', ...tags],
		image: `/images/blogs/${slug}/banner.jpg`,
		searchUrl: `/blog/${slug}`,
		twitter: {
			label1: 'Written by',
			data1: author,
			label2: 'Published on',
			data2: blogTypeDate(date),
		},
		openGraph: {
			type: 'article',
		},
	};

	// Start: Reactive properties
	$: {
		if (title && slug) {
			metaData = {
				title: `${title} | Sveltekit`,
				url: `/blog/${slug}`,
				keywords: [
					'sveltekit blog',
					'sveltekit starter',
					'svelte starter',
					'svelte',
					...tags,
				],
				searchUrl: `/blog/${slug}`,
				description: `${description}`,
				image: `/images/blogs/${slug}/banner.jpg`,
				twitter: {
					label1: 'Written by',
					data1: author,
					label2: 'Published on',
					data2: blogTypeDate(date),
				},
				openGraph: {
					type: 'article',
				},
			};
		}
	}
	// End: Reactive properties

	// Local Methods
	const blogContent = document.getElementById('blog-content');
	onMount(() => {
		readingTimeDuration = readingTime(blogContent?.textContent ?? '').time;
	});
</script>

<!-- Start: Header Tag -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tag -->

<article class="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
	<h1 class="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
		{title}
	</h1>
	<div class="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
		<div class="flex items-center">
			<img
				alt="{'Sveltekit Blogger'}"
				src="{'/images/author/sveltekit-blogger.svg'}"
				class="h-7 w-7 rounded-full"
			/>
			<p class="ml-2 text-sm text-gray-700 dark:text-gray-300">
				{author}
				{' / '}
				{blogTypeDate(date)}
			</p>
		</div>
		<p class="min-w-32 mt-2 text-sm text-gray-500 md:mt-0">
			{readingTimeDuration}
		</p>
	</div>
	<div class="dark:prose-dark prose w-full max-w-none" id="blog-content">
		<slot />
	</div>
	<div class="mt-8">
		<TagsContainer tags="{tags}" />
	</div>
	<div class="mt-8">
		<p class="mb-4 text-sm text-gray-700 dark:text-gray-300">{'Share the article on'}</p>
		<ShareButtons
			title="{title}"
			description="{description}"
			url="{`${environment.launchURL}/blog/${slug}`}"
		/>
	</div>
	<div class="mt-8 text-sm text-gray-700 dark:text-gray-300">
		<ExternalLink
			href="{discussUrl}"
			ariaLabel="{title}"
			cssClasses="{'text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-500'}"
		>
			{'Discuss on Twitter'}
		</ExternalLink>
		{` • `}
		<ExternalLink
			href="{editUrl}"
			ariaLabel="{title}"
			cssClasses="{'text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-500'}"
		>
			{'Edit on GitHub'}
		</ExternalLink>
	</div>
	{#if previousArticleLink || nextArticleLink}
		<div class="mt-8 w-full">
			<NextArticle previousHref="{previousArticleLink}" nextHref="{nextArticleLink}" />
		</div>
	{/if}
</article>
