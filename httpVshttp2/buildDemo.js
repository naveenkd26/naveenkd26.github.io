const cpFile = require('cp-file');
 
cpFile('public/index.html', 'demo/index.html').then(() => {
    console.log('indx.html file copied to demo/ ');
});


const replace = require("replace");
 
replace({
  regex: "localhost",
  replacement: "naveenkd26.github.io",
  paths: ['./demo'],
  recursive: true,
  silent: true,
});