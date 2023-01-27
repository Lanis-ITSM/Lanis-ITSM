<script lang="ts">
	import { onMount } from 'svelte';

	// MODELS
	import type { IApplicationRouteTitle } from '$models/interfaces';

	// COMPONENTS
	import Title from './Title.svelte';

	export let routePathData: IApplicationRouteTitle[] = [];

	const getRouteTitle = (value: string): string => {
		const route = routePathData.filter((data) => data.path === value);
		return route.length === 1 ? route.map((data) => data.name).reduce((data) => data) : '404';
	};

	let pathName = '';
	let title = '';

	const getPathFromWindow = (): void => {
		setTimeout(() => {
			pathName = window ? window.location.pathname : '/';
			title = getRouteTitle(pathName);
		}, 300);
	};

	const onUpdate = (): void => {
		getPathFromWindow();
	};

	onMount(() => {
		getPathFromWindow();
	});
</script>

<svelte:window on:click="{() => onUpdate()}" />
<Title title="{title}" />
