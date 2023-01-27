/* eslint-disable no-console */
import fs from 'fs';
import spaceConfig from './spaceConfig';
import type { Project } from './spaceConfig';

// const pathToEnvironmentPorpertiesFolder = './src/environments';

const getArguments = (argv: string[], flag: string): string =>
	argv
		.filter((value) => value.includes(flag))
		.map((value) => value.split('=')[1])
		.reduce((value) => value);

const processArguments = process.argv;

try {
	// const configuration = getArguments(processArguments, '--configurations');
	const projectName = getArguments(processArguments, '--project');
	const modeType = getArguments(processArguments, '--mode');
	const arch = getArguments(processArguments, '--arhitect-type');
	const mode = modeType ? modeType : 'local';

	const writeToFile = (filePath: string, data: Buffer): void => fs.writeFileSync(filePath, data);

	const project: Project = spaceConfig.projects[projectName];
	const root = project.root;
	const fileReplacements = project.architect[arch].configurations[mode].fileReplacements;

	fileReplacements.forEach((value: { with: string; replace: string }) => {
		const content = fs.readFileSync(`${root}${value.with}`);
		writeToFile(`${root}${value.replace}`, content);
	});
} catch (error) {
	console.error(error);
}
