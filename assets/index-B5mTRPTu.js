function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersPlugin-wc8pnh4Y.js","assets/index-D-FyKvQZ.js","assets/index-CQu-pq3R.css","assets/ParticlesComponent-lXlvNY8E.js","assets/motion-C0bLFgY8.js","assets/AnimatableColor-UXP-fZIi.js","assets/AnimationOptions-DLmKw3mK.js","assets/OptionsColor-CB5oEmDB.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-D-FyKvQZ.js";import{E as s}from"./EmitterShapeBase-4KcS34Iy.js";async function d(a,i=!0){if(!a.emitterShapeManager){const{ShapeManager:t}=await e(()=>import("./ShapeManager-BKFAh34R.js"),__vite__mapDeps([]));a.emitterShapeManager=new t(a)}a.addEmitterShapeGenerator||(a.addEmitterShapeGenerator=(t,m)=>{var r;(r=a.emitterShapeManager)==null||r.addShapeGenerator(t,m)});const{EmittersPlugin:o}=await e(()=>import("./EmittersPlugin-wc8pnh4Y.js").then(t=>t.c),__vite__mapDeps([0,1,2,3,4,5,6,7])),p=new o(a);await a.addPlugin(p,i)}export{s as EmitterShapeBase,d as loadEmittersPlugin};
