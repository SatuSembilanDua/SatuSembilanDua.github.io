import{Slow as u}from"./index-5XJ63WUV.js";import{E as d}from"./ExternalInteractorBase-CIi3zRdK.js";import{a as m,J as f}from"./index-DA4r8Zu0.js";const v="slow",y=0;class O extends d{constructor(o){super(o)}clear(o,t,i){o.slow.inRange&&!i||(o.slow.factor=1)}init(){const o=this.container,t=o.actualOptions.interactivity.modes.slow;t&&(o.retina.slowModeRadius=t.radius*o.retina.pixelRatio)}interact(){}isEnabled(o){const t=this.container,i=t.interactivity.mouse,s=((o==null?void 0:o.interactivity)??t.actualOptions.interactivity).events;return s.onHover.enable&&!!i.position&&m(v,s.onHover.mode)}loadModeOptions(o,...t){o.slow||(o.slow=new u);for(const i of t)o.slow.load(i==null?void 0:i.slow)}reset(o){o.slow.inRange=!1;const t=this.container,i=t.actualOptions,s=t.interactivity.mouse.position,n=t.retina.slowModeRadius,e=i.interactivity.modes.slow;if(!e||!n||n<y||!s)return;const c=o.getPosition(),r=f(s,c),l=r/n,w=e.factor,{slow:a}=o;r>n||(a.inRange=!0,a.factor=l/w)}}export{O as Slower};
