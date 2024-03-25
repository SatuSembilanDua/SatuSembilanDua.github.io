function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-FIEU7RIh.js","assets/index-DA4r8Zu0.js","assets/index-CQu-pq3R.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DA4r8Zu0.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-FIEU7RIh.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
