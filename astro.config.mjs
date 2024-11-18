import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      include: {
        mdi: ["*"],
      },
    }),
    react(),
  ],

  output: "server",
  adapter: cloudflare(),
});