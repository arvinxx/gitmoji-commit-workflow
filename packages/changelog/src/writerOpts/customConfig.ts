import { resolve } from 'path';

const pkg = require(resolve(process.cwd(), './changelogrc.js'));

console.log(pkg);

export default pkg;
