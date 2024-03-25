function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Remover-D10YJdRN.js","assets/ExternalInteractorBase-CIi3zRdK.js","assets/ParticlesComponent-lXlvNY8E.js","assets/index-D-FyKvQZ.js","assets/index-CQu-pq3R.css","assets/motion-C0bLFgY8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-D-FyKvQZ.js";import{s as a}from"./ParticlesComponent-lXlvNY8E.js";import"./motion-C0bLFgY8.js";class c{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=a(e))}}async function m(n,t=!0){await n.addInteractor("externalRemove",async e=>{const{Remover:o}=await r(()=>import("./Remover-D10YJdRN.js"),__vite__mapDeps([0,1,2,3,4,5]));return new o(e)},t)}export{c as Remove,m as loadExternalRemoveInteraction};
