import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  ssr: true,
  server: {
    baseURL: "/divesea/",
    preset: "static",
  },
});
