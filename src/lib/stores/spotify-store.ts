import { writable } from 'svelte/store';

import type { INowPlayingTrack } from '$models/interfaces';

export const nowPlayingSong = writable<INowPlayingTrack>({ isPlaying: false });
