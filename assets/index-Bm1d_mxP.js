function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-ClXp5evQ.js","assets/ValueWithRandom-23isO9Zw.js","assets/AnimationOptions-DLmKw3mK.js","assets/ParticlesComponent-lXlvNY8E.js","assets/index-D-FyKvQZ.js","assets/index-CQu-pq3R.css","assets/motion-C0bLFgY8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-D-FyKvQZ.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-ClXp5evQ.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new r(e)},a)}export{d as loadLifeUpdater};
