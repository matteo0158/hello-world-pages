const fs = require('fs');

const createHtmlpageInBuildDir = () => {

    fs.writeFileSync('build/index.html', 'test ecriture');
};

createHtmlpageInBuildDir();

module.exports = createHtmlpageInBuildDir;