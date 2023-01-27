import { writable } from 'svelte/store';
// import { international } from "$data/l18n/international";
// import { local } from "$data/l18n/local";

export type Il18n = {
	locale: string;
	lang?: { [translate: string]: string };
};

const i18n = writable<Il18n>({ locale: 'id' });

export default i18n;
