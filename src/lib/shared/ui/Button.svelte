<script lang="ts">
	/* eslint-disable @typescript-eslint/no-explicit-any */
	import { createEventDispatcher, afterUpdate } from 'svelte';

	export let text = '';
	export let rounded = true;

	const dispatch = createEventDispatcher();

	const onClick = (event: any) => {
		/* eslint-disable no-console */
		console.log(event);
		rounded = !rounded;

		dispatch('click', event);
	};

	afterUpdate(() => {
		dispatch('afterUpdate');
	});
</script>

<button class="button" class:rounded="{rounded}" on:click="{(e) => onClick(e)}">
	<strong> {rounded ? 'Rounded' : 'Square'} </strong>
	<br />
	{text}
	<br />
	<slot />
</button>
