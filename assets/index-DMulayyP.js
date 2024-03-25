function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-D7rkr6op.js","assets/index-DA4r8Zu0.js","assets/index-CQu-pq3R.css","assets/ValueWithRandom-D0zdQtee.js","assets/AnimationOptions-BsF-q81h.js","assets/OptionsColor-DgN-Hrly.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DA4r8Zu0.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-D7rkr6op.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
