import { defineConfig, presetWebFonts, presetWind4 } from "unocss";

export default defineConfig({
  presets: [
    presetWind4(),
    presetWebFonts({
      provider: "coollabs",
      fonts: {
        sans: "Outfit",
      },
    }),
  ],
});
