function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-GyQ9NGQ-.js","assets/ParticlesComponent-lXlvNY8E.js","assets/index-D-FyKvQZ.js","assets/index-CQu-pq3R.css","assets/motion-C0bLFgY8.js","assets/ValueWithRandom-23isO9Zw.js","assets/AnimationOptions-DLmKw3mK.js","assets/OptionsColor-CB5oEmDB.js","assets/OptionsUtils-bZhZ9pTa.js","assets/AnimatableColor-UXP-fZIi.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-D-FyKvQZ.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-GyQ9NGQ-.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
