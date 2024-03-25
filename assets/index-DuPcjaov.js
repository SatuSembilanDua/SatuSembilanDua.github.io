function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_}from"./index-D-FyKvQZ.js";import{i as u,b as g,e as D,l as T}from"./ParticlesComponent-lXlvNY8E.js";import"./motion-C0bLFgY8.js";const h=2,d=.5;function O(r){const{context:e,particle:t,radius:o,opacity:n}=r,a=t.shapeData;if(!a)return;const l=a.value;if(l===void 0)return;t.text===void 0&&(t.text=u(l,t.randomIndexData));const i=t.text,c=a.style??"",x=a.weight??"400",m=Math.round(o)*h,y=a.font??"Verdana",w=t.shapeFill,f=i==null?void 0:i.split(`
`);if(f){e.font=`${c} ${x} ${m}px "${y}"`,e.globalAlpha=n;for(let p=0;p<f.length;p++)b(e,f[p],o,n,p,w);e.globalAlpha=1}}function b(r,e,t,o,n,a){const l=e.length*t*d,i={x:-l,y:t*d},c=t*h;a?r.fillText(e,i.x,i.y+c*n):r.strokeText(e,i.x,i.y+c*n)}const s=["text","character","char","multiline-text"];class v{draw(e){O(e)}async init(e){const t=e.actualOptions;if(s.find(o=>g(o,t.particles.shape.type))){const o=s.map(a=>t.particles.shape.options[a]).find(a=>!!a),n=[];D(o,a=>{n.push(T(a.font,a.weight))}),await Promise.all(n)}}particleInit(e,t){if(!t.shape||!s.includes(t.shape))return;const o=t.shapeData;if(o===void 0)return;const n=o.value;n!==void 0&&(t.text=u(n,t.randomIndexData))}}const S=Object.freeze(Object.defineProperty({__proto__:null,TextDrawer:v,validTypes:s},Symbol.toStringTag,{value:"Module"}));async function A(r,e=!0){const{TextDrawer:t}=await _(()=>Promise.resolve().then(()=>S),void 0);await r.addShape(s,new t,e)}export{A as loadTextShape};
