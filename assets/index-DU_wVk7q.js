function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-BUqEO7Ej.js","assets/ParticlesComponent-lXlvNY8E.js","assets/index-D-FyKvQZ.js","assets/index-CQu-pq3R.css","assets/motion-C0bLFgY8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-D-FyKvQZ.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-BUqEO7Ej.js"),__vite__mapDeps([0,1,2,3,4]));return new o},e)}export{_ as loadBaseMover};
