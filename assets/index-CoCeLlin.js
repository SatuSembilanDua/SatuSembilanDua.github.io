function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-Boq2iKoH.js","assets/ParticlesComponent-lXlvNY8E.js","assets/index-D-FyKvQZ.js","assets/index-CQu-pq3R.css","assets/motion-C0bLFgY8.js","assets/OptionsColor-CB5oEmDB.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-D-FyKvQZ.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-Boq2iKoH.js"),__vite__mapDeps([0,1,2,3,4,5]));return new r},a)}export{l as loadRollUpdater};
