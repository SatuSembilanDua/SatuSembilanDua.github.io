import{Connect as x}from"./index-n0prM2tx.js";import{g as C}from"./CanvasUtils-Ct2dE8fK.js";import{ab as R,j as m,K as P,h as S,a as O}from"./index-DA4r8Zu0.js";import{E as k}from"./ExternalInteractorBase-CIi3zRdK.js";const y=0,v=1,w=0;function D(i,t,n,o){const e=Math.floor(n.getRadius()/t.getRadius()),s=t.getFillColor(),a=n.getFillColor();if(!s||!a)return;const d=t.getPosition(),r=n.getPosition(),l=R(s,a,t.getRadius(),n.getRadius()),c=i.createLinearGradient(d.x,d.y,r.x,r.y);return c.addColorStop(y,m(s,o)),c.addColorStop(P(e,y,v),S(l,o)),c.addColorStop(v,m(a,o)),c}function E(i,t,n,o,e){C(i,o,e),i.lineWidth=t,i.strokeStyle=n,i.stroke()}function F(i,t,n,o){const e=i.actualOptions,s=e.interactivity.modes.connect;if(s)return D(t,n,o,s.links.opacity)}function H(i,t,n){i.canvas.draw(o=>{const e=F(i,o,t,n);if(!e)return;const s=t.getPosition(),a=n.getPosition();E(o,t.retina.linksWidth??w,e,s,a)})}const L="connect",M=0;class A extends k{constructor(t){super(t)}clear(){}init(){const t=this.container,n=t.actualOptions.interactivity.modes.connect;n&&(t.retina.connectModeDistance=n.distance*t.retina.pixelRatio,t.retina.connectModeRadius=n.radius*t.retina.pixelRatio)}interact(){const t=this.container;if(t.actualOptions.interactivity.events.onHover.enable&&t.interactivity.status==="pointermove"){const o=t.interactivity.mouse.position,{connectModeDistance:e,connectModeRadius:s}=t.retina;if(!e||e<M||!s||s<M||!o)return;const a=Math.abs(s),d=t.particles.quadTree.queryCircle(o,a,r=>this.isEnabled(r));d.forEach((r,l)=>{const c=r.getPosition(),h=1;for(const u of d.slice(l+h)){const f=u.getPosition(),g=Math.abs(e),p=Math.abs(c.x-f.x),b=Math.abs(c.y-f.y);p<g&&b<g&&H(t,r,u)}})}}isEnabled(t){const n=this.container,o=n.interactivity.mouse,e=((t==null?void 0:t.interactivity)??n.actualOptions.interactivity).events;return e.onHover.enable&&o.position?O(L,e.onHover.mode):!1}loadModeOptions(t,...n){t.connect||(t.connect=new x);for(const o of n)t.connect.load(o==null?void 0:o.connect)}reset(){}}export{A as Connector};
