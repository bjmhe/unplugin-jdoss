import { defineConfig } from "vite-plus";
import * as attw from "@arethetypeswrong/core";
import * as publint from "publint";
import * as publintUtils from "publint/utils";
import ApiSnapshot from "tsnapi/rolldown";

export default defineConfig({
  pack: {
    attw: {
      enabled: true,
      profile: "esm-only",
      module: attw,
    },
    deps: { onlyBundle: [] },
    dts: {
      tsgo: true,
    },
    entry: "src/*.ts",
    exports: true,
    minify: true,
    platform: "neutral",
    plugins: [ApiSnapshot()],
    publint: {
      enabled: true,
      module: [publint, publintUtils],
    },
    sourcemap: true,
  },
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
    ignorePatterns: ["__snapshots__/**/*", "dist/**/*"],
  },
  fmt: {
    ignorePatterns: ["__snapshots__/**/*", "dist/**/*"],
  },
});
