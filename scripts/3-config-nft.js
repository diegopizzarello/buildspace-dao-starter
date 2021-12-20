import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x11fD68993dcc802EefC58C5aB3cd50bF44E1185b",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Building Entrance",
        description: "This NFT will give you access to BuildingDAO!",
        image: readFileSync("scripts/assets/building-key.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()