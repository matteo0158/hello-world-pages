// eslint-disable-next-line no-undef
const fs = require('fs');

const createHtmlpageInBuildDir = () => {

    fs.writeFileSync('build/index.html', 'test ecriture2');
};

createHtmlpageInBuildDir();

// eslint-disable-next-line no-undef
module.exports = createHtmlpageInBuildDir;