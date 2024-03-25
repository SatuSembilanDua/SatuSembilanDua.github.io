function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Grabber-DXn3Lc-E.js","assets/CanvasUtils-mg_mH1ga.js","assets/ParticlesComponent-lXlvNY8E.js","assets/index-D-FyKvQZ.js","assets/index-CQu-pq3R.css","assets/motion-C0bLFgY8.js","assets/ExternalInteractorBase-CIi3zRdK.js","assets/OptionsColor-CB5oEmDB.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-D-FyKvQZ.js";import{O as r}from"./OptionsColor-CB5oEmDB.js";import"./ParticlesComponent-lXlvNY8E.js";import"./motion-C0bLFgY8.js";class s{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(i){i&&(i.blink!==void 0&&(this.blink=i.blink),i.color!==void 0&&(this.color=r.create(this.color,i.color)),i.consent!==void 0&&(this.consent=i.consent),i.opacity!==void 0&&(this.opacity=i.opacity))}}class u{constructor(){this.distance=100,this.links=new s}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links))}}async function h(n,i=!0){await n.addInteractor("externalGrab",async o=>{const{Grabber:t}=await e(()=>import("./Grabber-DXn3Lc-E.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new t(o)},i)}export{u as Grab,s as GrabLinks,h as loadExternalGrabInteraction};
