import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        assetsDir: '',
        rollupOptions: {
            output: {
                entryFileNames: 'index.ts',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'index.css') return 'index.css';
                    return '[name][extname]';
                },
            },
        },
    },
})

