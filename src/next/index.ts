import Generator from 'yeoman-generator';

class Webpack extends Generator {
	writing() {
		this.fs.copy(
			this.templatePath('next.config.js'),
			this.destinationPath('next.config.js')
		);

		const pkgJson = {
			dependencies: {
				next: 'latest',
				react: 'latest',
				'react-dom': 'latest'
			},
			devDependencies: {
				'@types/next': 'latest',
				'@zeit/next-typescript': 'latest',
				'fork-ts-checker-webpack-plugin': 'latest'
			},
			scripts: {
				'next:start': 'cross-env next start',
				'next:build': 'cross-env next build'
			}
		};

		const tsConfig = {
			compilerOptions: {
				noUnusedLocals: true,
				noUnusedParameters: true,
				preserveConstEnums: true,
				removeComments: false,
				strict: true,
				lib: ['dom', 'es2017'],
				jsx: 'react'
			}
		};

		const babelConfig = {
			presets: ['next/babel', '@zeit/next-typescript/babel']
		};

		// Extend or create package.json file in destination path
		this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
		this.fs.extendJSON(this.destinationPath('tsconfig.json'), tsConfig);
		this.fs.extendJSON(this.destinationPath('.babelrc'), babelConfig);
	}

	install() {
		this.npmInstall();
	}
}

module.exports = Webpack;