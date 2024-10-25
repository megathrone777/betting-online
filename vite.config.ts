import path from "path";
import { defineConfig } from "vite";
import vituumPlugin from "vituum";
import twigPlugin from "@vituum/vite-plugin-twig";

export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [
    vituumPlugin(),
    twigPlugin({
      root: path.resolve(__dirname, "src"),
      reload: true,
    }),
  ],
  server: {
    port: 1337,
  },
});
