import { resolve } from "path"
import { defineConfig, externalizeDepsPlugin } from "electron-vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
    , resolve: {
      alias: {
        "@lib": resolve("src/main/lib"),
        "@shared": resolve("src/shared"),
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    assetsInclude: "src/renderer/assests/**",
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src"),
        "@shared": resolve("src/shared"),
        "@hooks": resolve("src/renderer/src/hooks"),
        "@assests": resolve("src/renderer/src/assests"),
        "@store": resolve("src/renderer/src/store"),
        "@components": resolve("src/renderer/src/components"),
        "@mocks": resolve("src/renderer/src/mocks")
      }
    },
    plugins: [react()]
  }
})
