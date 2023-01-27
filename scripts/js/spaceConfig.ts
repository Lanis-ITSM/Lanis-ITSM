const spaceConfig: ISpace = {
	version: 1,
	projects: {
		lanis: {
			projectType: 'application',
			root: '.',
			sourceRoot: 'src',
			routes: 'src/routes',
			lib: 'src/lib',
			assets: 'static',
			architect: {
				build: {
					configurations: {
						prod: {
							fileReplacements: [
								{
									replace: '/src/environment/environment.ts',
									with: '/src/environment/environment.prod.ts',
								},
							],
						},
						dev: {
							fileReplacements: [
								{
									replace: '/src/environment/environment.ts',
									with: '/src/environment/environment.dev.ts',
								},
							],
						},
						qa: {
							fileReplacements: [
								{
									replace: '/src/environment/environment.ts',
									with: '/src/environment/environment.qa.ts',
								},
							],
						},
						local: {
							fileReplacements: [
								{
									replace: '/src/environment/environment.ts',
									with: '/src/environment/environment.local.ts',
								},
							],
						},
					},
				},
				serve: {
					configurations: {
						prod: {
							fileReplacements: [
								{
									replace: '/src/environment/environment.ts',
									with: '/src/environment/environment.prod.ts',
								},
							],
						},
						dev: {
							fileReplacements: [
								{
									replace: '/src/environment/environment.ts',
									with: '/src/environment/environment.dev.ts',
								},
							],
						},
						qa: {
							fileReplacements: [
								{
									replace: '/src/environment/environment.ts',
									with: '/src/environment/environment.qa.ts',
								},
							],
						},
						local: {
							fileReplacements: [
								{
									replace: '/src/environment/environment.ts',
									with: '/src/environment/environment.local.ts',
								},
							],
						},
					},
				},
			},
		},
	},
};

export default spaceConfig;

export interface ISpace {
	version: number;
	projects: Projects;
}

export interface Projects {
	[project: string]: Project;
}

export interface Project {
	projectType: string;
	root: string;
	sourceRoot: string;
	routes: string;
	lib: string;
	assets: string;
	architect: Architect;
}

export interface Architect {
	[archType: string]: Build;
}

export interface Build {
	configurations: Configurations;
}

export interface Configurations {
	[mode: string]: Dev;
}

export interface Dev {
	fileReplacements: FileReplacement[];
}

export interface FileReplacement {
	replace: string;
	with: string;
}
