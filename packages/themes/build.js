import run from "@rooney/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({ pkg });
