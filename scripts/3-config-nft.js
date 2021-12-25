import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xfC87025f00ce465e1a7D35A1B314BcA8d50399F8"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "TheGuild Amulet",
        description: "TheGuild Allegiance",
        image: readFileSync("scripts/assets/amulet.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
