<script lang="ts">
	// Svelte Imports
	import { base } from '$app/paths';
	import { createEventDispatcher } from 'svelte';

	import Icon from 'svelte-awesome';
	import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

	// Models
	import type { IHeaderNavLink } from '$models/interfaces/iheader-nav-link.interface';

	// Exports
	export let navLinks!: IHeaderNavLink[];
	export let logoImage!: string;
	export let title = '';
	export let useTitleAndLogo = false;
	export let useThemeModeButton = true;

	// Local Properties
	let dark = false;

	// Local Methods
	const dispatch = createEventDispatcher();

	const toggleTheme = (): void => {
		dark = !dark;
		dispatch('toggleTheme', {
			dark: dark,
		});
	};
</script>

<header
	class="relative flex w-full bg-yellow-50 bg-opacity-60 text-gray-900 dark:bg-black dark:text-gray-100"
>
	<nav class="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between p-6">
		{#if useTitleAndLogo}
			<div class="w-auto p-1 font-bold text-gray-900 dark:text-gray-100">
				<a
					data-sveltekit-preload-data
					href="/"
					class="flex h-12 flex-row items-center justify-center drop-shadow-xl"
					aria-label="{title}"
				>
					<img
						class="h-10 w-auto md:h-14"
						alt="Sveltekit Blogger"
						loading="eager"
						decoding="async"
						width="3.5rem"
						height="3.5rem"
						src="{logoImage}"
					/>
					<span class="ml-3 text-lg"> Sveltekit Blogger </span>
				</a>
			</div>
		{/if}
		<div class="flex flex-row items-center">
			{#each navLinks as navLink (navLink.path)}
				<a
					data-sveltekit-preload-data
					href="{navLink.path}"
					class="p-1.5 text-gray-900 hover:border-b-2 hover:border-gray-800 dark:text-gray-100 dark:hover:border-gray-100 sm:p-3.5"
					class:nav-active-route="{base === navLink.path || base === `${navLink.path}/`}"
					class:nav-inactive-route="{base !== navLink.path &&
						base !== `${navLink.path}/`}"
				>
					{navLink.label}
				</a>
			{/each}
		</div>
	</nav>
	{#if useThemeModeButton}
		<button
			on:click="{() => toggleTheme()}"
			aria-label="Toggle Dark Mode"
			type="button"
			class="{useTitleAndLogo
				? 'sticky-theme-mode-button dark:shadow-dark dark:hover:shadow-dark-lg z-10 h-8 w-8 rounded-full bg-yellow-50 shadow filter hover:border-2 hover:border-gray-500 hover:shadow-md dark:bg-gray-800 dark:hover:border-gray-300'
				: 'dark:shadow-dark dark:hover:shadow-dark-lg z-10 h-8 w-8 rounded-full bg-yellow-50 shadow filter hover:border-2 hover:border-gray-500 hover:shadow-md dark:bg-gray-800 dark:hover:border-gray-300'}"
		>
			{#if dark}
				<Icon
					data="{faSun}"
					class="{'h-3 w-3 text-xs text-gray-700 dark:text-gray-100'}"
					scale="{1.5}"
				/>
			{:else}
				<Icon
					data="{faMoon}"
					class="{'h-3 w-3 text-xs text-gray-700 dark:text-gray-100'}"
					scale="{1.5}"
				/>
			{/if}
		</button>
	{/if}
</header>
