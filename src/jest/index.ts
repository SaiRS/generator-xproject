import Generator from 'yeoman-generator';
import * as shell from 'shelljs';

class JestConfig extends Generator {
	writing() {
		const pkgJson = {
			scripts: {
				'jest:test': 'cross-env NODE_ENV=test jest --coverage',
				'jest:test:watch': 'cross-env NODE_ENV=test jest --watchAll'
			},
			devDependencies: {
				jest: '^24.7.1',
				'@types/jest': '^24.0.0',
				'ts-jest': '^23.10.5',
				'babel-jest': '^24.7.1'
			}
		};

		// Extend or create package.json file in destination path
		this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

		// copying(1) --> shell脚本完成
		// copying(2)
		this.fs.copy(
			this.templatePath('jest.config.js'),
			this.destinationPath('jest.config.js')
		);

		this.fs.copy(
			this.templatePath('config/jest'),
			this.destinationPath('config/jest')
		);
	}

	install() {
		this.npmInstall();
	}
}

module.exports = JestConfig;
