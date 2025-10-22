import FS from "node:fs";
import Path from "node:path";
import { Effect } from "effect";
import { EnvPaths } from "./env-paths";

const isSpaceConfigExistsEffect = Effect.try({
  try: () => {
    console.log(Path.join(EnvPaths.config, "chotospace.json"));

    return FS.existsSync(Path.join(EnvPaths.config, "chotospace.json"));
  },
  catch: (unknown) => {
    // new Error(`something went wrong ${unknown}`);
    Effect.fail(`something went wrong ${unknown}`);
  },
});

export { isSpaceConfigExistsEffect };
