function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-QPN4abha.js","assets/index-DA4r8Zu0.js","assets/index-CQu-pq3R.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-DA4r8Zu0.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-QPN4abha.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
