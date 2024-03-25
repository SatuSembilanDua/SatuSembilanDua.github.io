function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TrailMaker-DkfZuybr.js","assets/ExternalInteractorBase-CIi3zRdK.js","assets/ParticlesComponent-lXlvNY8E.js","assets/index-D-FyKvQZ.js","assets/index-CQu-pq3R.css","assets/motion-C0bLFgY8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-D-FyKvQZ.js";import{d as s}from"./ParticlesComponent-lXlvNY8E.js";import"./motion-C0bLFgY8.js";class u{constructor(){this.delay=1,this.pauseOnStop=!1,this.quantity=1}load(e){e&&(e.delay!==void 0&&(this.delay=e.delay),e.quantity!==void 0&&(this.quantity=e.quantity),e.particles!==void 0&&(this.particles=s({},e.particles)),e.pauseOnStop!==void 0&&(this.pauseOnStop=e.pauseOnStop))}}async function p(i,e=!0){await i.addInteractor("externalTrail",async t=>{const{TrailMaker:n}=await r(()=>import("./TrailMaker-DkfZuybr.js"),__vite__mapDeps([0,1,2,3,4,5]));return new n(t)},e)}export{u as Trail,p as loadExternalTrailInteraction};
