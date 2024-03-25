function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-D1fYN_k9.js","assets/Ranges-MnVlNP_b.js","assets/ParticlesComponent-lXlvNY8E.js","assets/index-D-FyKvQZ.js","assets/index-CQu-pq3R.css","assets/motion-C0bLFgY8.js","assets/index-BNfVe6oY.js","assets/OptionsColor-CB5oEmDB.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-D-FyKvQZ.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-D1fYN_k9.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]));return new n(a)},r)}export{o as loadLinksInteraction};
