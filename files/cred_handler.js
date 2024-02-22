const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');

async function file_reader() {
    const filepath = resolve('credentials.json');
    const contents = await readFile(filepath, { encoding : 'utf8' });
    return JSON.parse(contents);
}

module.exports = {
    file_reader : file_reader
};