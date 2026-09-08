import { existsSync, readdirSync } from "node:fs";

const publicDir = ".output/public";
const assetsDir = `${publicDir}/_build/assets`;

if (!existsSync(`${publicDir}/index.html`)) {
  console.error("Missing .output/public/index.html");
  process.exit(1);
}

if (!existsSync(assetsDir) || readdirSync(assetsDir).length === 0) {
  console.error("Missing SolidStart client assets in .output/public/_build/assets");
  process.exit(1);
}

console.log("Static build output verified.");
