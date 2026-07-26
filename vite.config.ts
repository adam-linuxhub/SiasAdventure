import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  server: {
    open: "start.html",
  },
  build: {
    rollupOptions: {
      input: {
        start: resolve(__dirname, "start.html"),
        game: resolve(__dirname, "game.html"),
      },
    },
  },
});