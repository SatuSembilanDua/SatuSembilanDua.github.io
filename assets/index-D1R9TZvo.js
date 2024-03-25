function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-BrmNWjKC.js","assets/index-DA4r8Zu0.js","assets/index-CQu-pq3R.css","assets/OptionsColor-DgN-Hrly.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DA4r8Zu0.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-BrmNWjKC.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
