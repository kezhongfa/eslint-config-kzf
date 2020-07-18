/* eslint-disable no-console */
const shell = require('shelljs');
const colors = require('colors');
const argv = require('./argv');

const { version, tag = 'latest' } = argv;

console.log('tag:', version, tag);

if (version) {
  shell.rm('-rf', 'dist');

  shell.cp('-r', 'src', 'dist');

  shell.cp('package.json', 'dist');

  shell.cp('README.md', 'dist');

  shell.exec('npm config get registry', (_, stdout) => {
    if (!stdout.includes('registry.npmjs.org')) {
      shell.exec('npm config set registry=https://registry.npmjs.org');
    }
  });

  shell.exec(`npm version ${version}`);

  shell.exec(`npm publish --access=public dist --tag ${tag}`);

  shell.exec('curl -X PUT https://npm.taobao.org/sync/eslint-config-kzf');
} else {
  console.error(colors.red('你未指定version 参数'));
}
