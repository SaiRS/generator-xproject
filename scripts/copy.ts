import * as shell from "shelljs";

function getModuleSrcTemplateDir(moduleName: string): string {
	return `src/${moduleName}/templates`;
}
function getModuleGenerateTemplateDir(moduleName: string): string {
	return `generators/${moduleName}/templates`;
}



shell.mkdir('-p', 'generators/app/templates');
shell.mkdir('-p', 'generators/next/templates');
shell.mkdir('-p', 'generators/dev-env/templates');

// editorconfig
shell.cp('-r', getModuleSrcTemplateDir('editorconfig'), getModuleGenerateTemplateDir('editorconfig'));

// prettier
shell.cp('-r', getModuleSrcTemplateDir('prettier'), getModuleGenerateTemplateDir('prettier'));

// stylint
shell.cp('-r', getModuleSrcTemplateDir('stylelint'), getModuleGenerateTemplateDir('stylelint'));
shell.cp('-r', getModuleSrcTemplateDir('stylelint-prettier'), getModuleGenerateTemplateDir('stylelint-prettier'));
shell.cp('-r', getModuleSrcTemplateDir('stylelint-sass'), getModuleGenerateTemplateDir('stylelint-sass'));

// typescript
shell.cp('-r', getModuleSrcTemplateDir('typescript'), getModuleGenerateTemplateDir('typescript'));

// storybook
shell.cp('-r', getModuleSrcTemplateDir('storybook'), getModuleGenerateTemplateDir('storybook'));

// webpack react app
shell.cp('-r', getModuleSrcTemplateDir('webpack-react-app'), getModuleGenerateTemplateDir('webpack-react-app'));

// next
shell.cp('-u', 'src/next/templates/**', 'generators/next/templates/');

// dev-env
shell.cp('-ur', 'src/dev-env/templates/', 'generators/dev-env');

// copy eslint
shell.cp('-r', getModuleSrcTemplateDir('eslint'), getModuleGenerateTemplateDir('eslint'));

// generator templates
shell.cp('-u', 'src/app/templates/**', 'generators/app/templates/');

// jest config
shell.cp('-r', getModuleSrcTemplateDir('jest'), getModuleGenerateTemplateDir('jest'));


// webpack
shell.cp('-ur', 'src/webpack/templates', 'generators/webpack/templates/');
