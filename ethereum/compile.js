const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');
const fso = require('fs');

// https://stackoverflow.com/questions/57464939/solidity-how-to-compile-multiple-smart-contracts-in-compile-js-file
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const contractsPath = path.resolve(__dirname, 'contracts');
const fileNames = fso.readdirSync(contractsPath);
const input = fileNames.reduce(
    (input, fileName) => {
        const filePath = path.resolve(contractsPath, fileName)
        const source = fs.readFileSync(filePath, 'utf8');
        return {sources: {...input.sources, [fileName]: source}};
    }, {sources: {}}
);

const output = solc.compile(input, 1).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}
