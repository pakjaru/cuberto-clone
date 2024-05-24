import { fileURLToPath } from "url"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@images", replacement: fileURLToPath(new URL("./src/assets/images", import.meta.url)) },
      { find: "@utils", replacement: fileURLToPath(new URL("./src/utils", import.meta.url)) },
    ],
  },
  plugins: [react()],
})
