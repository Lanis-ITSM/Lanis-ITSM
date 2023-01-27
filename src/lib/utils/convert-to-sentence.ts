export const convertToSentence = (value: string): string =>
	`${value.charAt(0).toUpperCase()}${value.substring(1).toLocaleLowerCase().replace(/-/g, ' ')}`;
