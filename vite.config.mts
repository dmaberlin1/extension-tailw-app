import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import svgr from 'vite-plugin-svgr'
import {crx,ManifestV3Export} from "@crxjs/vite-plugin";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import manifest from './manifest.json'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      eslintPlugin(),
      svgr(),
      crx({manifest: manifest as unknown as ManifestV3Export})
  ],
})
