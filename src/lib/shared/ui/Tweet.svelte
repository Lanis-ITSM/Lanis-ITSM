<script lang="ts">
	import type { ITweet } from '$models/interfaces';

	export let tweet!: ITweet;

	const createdAt = new Date(tweet.created_at);

	const formatedText = tweet.text.replace(/https:\/\/[\n\S]+/g, '');
	/* eslint-disable no-console */
	console.log(createdAt, formatedText);
</script>
