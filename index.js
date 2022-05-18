// eslint-disable-next-line no-undef
const fs = require('fs');

const createHtmlpageInBuildDir = () => {
    if (!fs.existsSync('build')) {
        fs.mkdirSync('build')
    }
    fs.writeFileSync('build/index.html', 'test ecriture2');
};
//test build
createHtmlpageInBuildDir();

// eslint-disable-next-line no-undef
module.exports = createHtmlpageInBuildDir;