function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-bVrhamRo.js","assets/index-D-FyKvQZ.js","assets/index-CQu-pq3R.css","assets/ValueWithRandom-23isO9Zw.js","assets/AnimationOptions-DLmKw3mK.js","assets/ParticlesComponent-lXlvNY8E.js","assets/motion-C0bLFgY8.js","assets/OptionsColor-CB5oEmDB.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-D-FyKvQZ.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-bVrhamRo.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5,6,7]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
