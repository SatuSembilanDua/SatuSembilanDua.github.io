function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Pusher-rDyv5EdL.js","assets/ExternalInteractorBase-CIi3zRdK.js","assets/ParticlesComponent-lXlvNY8E.js","assets/index-D-FyKvQZ.js","assets/index-CQu-pq3R.css","assets/motion-C0bLFgY8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-D-FyKvQZ.js";import{s}from"./ParticlesComponent-lXlvNY8E.js";import"./motion-C0bLFgY8.js";class f{constructor(){this.default=!0,this.groups=[],this.quantity=4}load(t){if(!t)return;t.default!==void 0&&(this.default=t.default),t.groups!==void 0&&(this.groups=t.groups.map(i=>i)),this.groups.length||(this.default=!0);const e=t.quantity;e!==void 0&&(this.quantity=s(e))}}async function h(u,t=!0){await u.addInteractor("externalPush",async e=>{const{Pusher:i}=await r(()=>import("./Pusher-rDyv5EdL.js"),__vite__mapDeps([0,1,2,3,4,5]));return new i(e)},t)}export{f as Push,h as loadExternalPushInteraction};
