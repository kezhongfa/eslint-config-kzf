const shell = require('shelljs');

shell.rm('-rf', 'dist');

shell.cp('-r', 'src', 'dist');

shell.cp('package.json', 'dist');

shell.cp('README.md', 'dist');

// shell.exec("npm config get registry", function (code, stdout) {
//   if (!stdout.includes("registry.npmjs.org")) {
//     shell.exec("npm config set registry=https://registry.npmjs.org");
//   }
// });

// shell.exec("npm publish --access=public dist");

// shell.exec("curl -X PUT https://npm.taobao.org/sync/eslint-config-kzf");
