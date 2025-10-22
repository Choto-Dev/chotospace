import FS from "node:fs/promises";
import { defineBuildConfig } from "unbuild";

const libs = await FS.readdir("./src/lib");

export default defineBuildConfig({
  entries: ["./src/index.ts", ...libs.map((lib) => `./src/lib/${lib}`)],
  rollup: {
    emitCJS: true,
    esbuild: {
      target: ["es2015"],
    },
  },
  outDir: "dist",
  declaration: true,
});
