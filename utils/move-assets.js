const path = require('path');
const fs = require('fs');
const source = path.resolve('.attachments');
const dest = path.resolve('Docs', '.vuepress', 'public', '.attachements')
require('child_process').exec(`rm -rd ${dest};cp -r ${source} ${dest}`);