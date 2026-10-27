import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'Pedagogia-Hospitalaria'
const projectVersion = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8')).version
const commitId = process.env.GITHUB_SHA?.slice(0, 7) ?? 'local'

export default defineConfig({
  plugins: [react],
  base: process.env.GITHUB_PAGES === 'true' ? `/${repositoryName}/` : '/',
  define: {
    __APP_VERSION__: JSON.stringify(projectVersion),
    __APP_COMMIT__: JSON.stringify(commitId),
  },
})
