const { series, watch } = require('gulp');
const cg = require('code-gen-ts').CodeGen;
const fs = require('fs');

const src = 'src';

const corePath = `${src}/app/_core`;
const coreIndex = `${corePath}/index.ts`;
const coreJson = `${corePath}/core.json`;
const coreTs = `${corePath}/core.ts`;

function core(cb) {
    const json = JSON.parse(fs.readFileSync(coreJson));
    const z = cg(json).generate();
    fs.writeFile(coreTs, `${z.output}\r\n`, cb);
    fs.writeFile(coreIndex, 'export * from \'./core\';\r\n', cb);
}

function _watch(cb) {
    watch(coreJson, core);
    cb();
}

exports.default = series(core, _watch);
