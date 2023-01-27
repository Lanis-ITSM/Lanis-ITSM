<script lang="ts">
	// Local Imports

	// Models
	import type { ITopTrack } from '$models/interfaces';

	// Components
	import { Track } from '$shared/ui';

	// Exports
	export let topTracks!: ITopTrack[];
</script>

{#each topTracks as topTrack, index (topTrack.songUrl)}
	<Track index="{index}" track="{topTrack}" />
{/each}
