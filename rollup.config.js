// TODO setup svelte: https://github.com/sveltejs/rollup-plugin-svelte
import { nodeResolve } from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [
        svelte({
            compilerOptions: {
                generate: 'ssr',
                hydratable: true,
            }
        }),
        typescript(),
        nodeResolve()],
}