/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_GLM_API_KEY: string
  readonly VITE_OSS_ACCESS_KEY_ID: string
  readonly VITE_OSS_ACCESS_KEY_SECRET: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
