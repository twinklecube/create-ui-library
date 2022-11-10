import {babel} from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import replace from "@rollup/plugin-replace";
import url from "@rollup/plugin-url";

import {createRequire} from "module";
const require = createRequire(import.meta.url);
const packageJson = require("./package.json");
const peerDependencies = Object.keys(packageJson.peerDependencies);
const extensions = [
    '.js', '.jsx', '.ts', '.tsx',
];

export default {
    input: './src/index.ts',
    output: [
        {
            dir: './dist/cjs/',
            format: 'cjs',
            preserveModules: true
        },
        {
            dir: './dist/esm/',
            format: 'esm',
            preserveModules: true
        },
    ],
    plugins: [
        postcss (),
        commonjs({
            include: /node_modules/,
            requireReturnsDefault: "auto"
        }),
        resolve({extensions}),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
            preventAssignment: true
        }),
        babel({
            extensions: extensions,
            babelHelpers: 'bundled',
            exclude: ['node_modules/**']
        })
    ],
    external: [
        ...peerDependencies
    ]
}
