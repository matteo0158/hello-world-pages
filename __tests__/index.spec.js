/* eslint-disable no-undef */
const fs = require('fs');
const createHtmlpageInBuildDir = require('../index');

test("hello_world", () => {
    createHtmlpageInBuildDir();

    const content = fs.readFileSync(`${__dirname}/../build/index.html`, 'utf-8');

    expect(content).toEqual('test ecriture2');
})