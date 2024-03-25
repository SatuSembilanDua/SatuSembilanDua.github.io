function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Collider-CG0Ka3-3.js","assets/ParticlesComponent-lXlvNY8E.js","assets/index-D-FyKvQZ.js","assets/index-CQu-pq3R.css","assets/motion-C0bLFgY8.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-D-FyKvQZ.js";async function n(t,o=!0){await t.addInteractor("particlesCollisions",async i=>{const{Collider:r}=await a(()=>import("./Collider-CG0Ka3-3.js"),__vite__mapDeps([0,1,2,3,4,5]));return new r(i)},o)}export{n as loadParticlesCollisionsInteraction};
