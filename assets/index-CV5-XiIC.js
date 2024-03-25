function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-CCYeay9M.js","assets/ParticlesComponent-lXlvNY8E.js","assets/index-D-FyKvQZ.js","assets/index-CQu-pq3R.css","assets/motion-C0bLFgY8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-D-FyKvQZ.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-CCYeay9M.js"),__vite__mapDeps([0,1,2,3,4]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
