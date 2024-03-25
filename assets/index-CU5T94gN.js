function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-LQziu45V.js","assets/ParticlesComponent-lXlvNY8E.js","assets/index-D-FyKvQZ.js","assets/index-CQu-pq3R.css","assets/motion-C0bLFgY8.js","assets/ValueWithRandom-23isO9Zw.js","assets/AnimationOptions-DLmKw3mK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-D-FyKvQZ.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-LQziu45V.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new r(e)},a)}export{i as loadRotateUpdater};
