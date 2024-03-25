function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-BkUTT9Hq.js","assets/index-DA4r8Zu0.js","assets/index-CQu-pq3R.css","assets/ValueWithRandom-D0zdQtee.js","assets/AnimationOptions-BsF-q81h.js","assets/OptionsColor-DgN-Hrly.js","assets/OptionsUtils-CErYBoO0.js","assets/AnimatableColor-pl3GaUnH.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DA4r8Zu0.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-BkUTT9Hq.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
