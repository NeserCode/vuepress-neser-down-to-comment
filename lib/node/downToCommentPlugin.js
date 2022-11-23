import { getDirname, path } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url);
export const downToCommentPlugin = () => ({
    name: '@vuepress/plugin-neser-down-to-comment',
    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    alias: {
        // workaround for https://github.com/vitejs/vite/issues/7621
        '@vuepress/plugin-neser-down-to-comment/client': path.resolve(__dirname, '../client/index.js'),
    },
});
