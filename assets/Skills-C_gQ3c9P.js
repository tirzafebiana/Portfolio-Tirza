var Pt=Object.defineProperty,Ft=Object.defineProperties;var qt=Object.getOwnPropertyDescriptors;var Et=Object.getOwnPropertySymbols;var Dt=Object.prototype.hasOwnProperty,Gt=Object.prototype.propertyIsEnumerable;var zt=(n,a,u)=>a in n?Pt(n,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[a]=u,at=(n,a)=>{for(var u in a||(a={}))Dt.call(a,u)&&zt(n,u,a[u]);if(Et)for(var u of Et(a))Gt.call(a,u)&&zt(n,u,a[u]);return n},ht=(n,a)=>Ft(n,qt(a));import{t as It,j as v,u as Ot,a as Ht,w as Z}from"./index-PNgoc_od.js";import{a as r,u as Vt}from"./domegallery-BnHQL8cU.js";import"./vendor-BUISI1qn.js";const{CPP:Zt,CSS:Ut,FlutterLight:Jt,GithubLight:Kt,HTML:Wt,JavaScript:Bt,Postman:Qt,ReactLight:te,TypeScript:ee}=It,re=[{src:Bt,alt:"JavaScript"},{src:ee,alt:"TypeScript"},{src:Wt,alt:"HTML"},{src:Ut,alt:"CSS"},{src:Jt,alt:"Flutter"},{src:te,alt:"React"},{src:Kt,alt:"GitHub"},{src:Qt,alt:"Postman"},{src:Zt,alt:"C++"}],ct={maxVerticalRotationDeg:5,dragSensitivity:20,enlargeTransitionMs:300,segments:35},U=(n,a,u)=>Math.min(Math.max(n,a),u),Ct=n=>(n%360+360)%360,ne=n=>((n+180)%360+360)%360-180,lt=(n,a,u)=>{var d;const M=(d=n.dataset[a])!=null?d:n.getAttribute(`data-${a}`),A=M==null?NaN:parseFloat(M);return Number.isFinite(A)?A:u};function se(n,a){const u=Array.from({length:a},(o,s)=>-37+s*2),M=[-4,-2,0,2,4],A=[-3,-1,1,3,5],d=u.flatMap((o,s)=>(s%2===0?M:A).map(q=>({x:o,y:q,sizeX:2,sizeY:2}))),T=d.length;if(n.length===0)return d.map(o=>ht(at({},o),{src:"",alt:""}));n.length>T&&console.warn(`[DomeGallery] Provided image count (${n.length}) exceeds available tiles (${T}). Some images will not be shown.`);const X=n.map(o=>typeof o=="string"?{src:o,alt:""}:{src:o.src||"",alt:o.alt||""}),p=Array.from({length:T},(o,s)=>X[s%X.length]);for(let o=1;o<p.length;o++)if(p[o].src===p[o-1].src){for(let s=o+1;s<p.length;s++)if(p[s].src!==p[o].src){const j=p[o];p[o]=p[s],p[s]=j;break}}return d.map((o,s)=>ht(at({},o),{src:p[s].src,alt:p[s].alt}))}function oe(n,a,u,M,A){const d=360/A/2,T=d*(n+(u-1)/2);return{rotateX:d*(a-(M-1)/2),rotateY:T}}function ie({images:n=re,maxItems:a,fit:u=.5,fitBasis:M="auto",minRadius:A=600,maxRadius:d=1/0,padFactor:T=.25,overlayBlurColor:X="#060010",maxVerticalRotationDeg:p=ct.maxVerticalRotationDeg,dragSensitivity:o=ct.dragSensitivity,enlargeTransitionMs:s=ct.enlargeTransitionMs,segments:j=ct.segments,dragDampening:q=2,openedImageWidth:D="400px",openedImageHeight:P="400px",imageBorderRadius:O="30px",openedImageBorderRadius:L="30px",grayscale:Y=!1}){a!==void 0&&n.length>a&&(n=n.slice(0,a));const _=r.useRef(null),J=r.useRef(null),yt=r.useRef(null),tt=r.useRef(null),et=r.useRef(null),gt=r.useRef(null),G=r.useRef(null),ut=r.useRef(null),C=r.useRef({x:0,y:0}),dt=r.useRef({x:0,y:0}),F=r.useRef(null),rt=r.useRef(!1),K=r.useRef(!1),W=r.useRef(!1),I=r.useRef(null),H=r.useRef("mouse"),nt=r.useRef(null),st=r.useRef(!1),xt=r.useRef(0),ft=r.useRef(0),ot=r.useRef(!1),vt=r.useCallback(()=>{ot.current||(ot.current=!0,document.body.classList.add("dg-scroll-lock"))},[]),Mt=r.useCallback(()=>{var t;ot.current&&((t=_.current)==null?void 0:t.getAttribute("data-enlarging"))!=="true"&&(ot.current=!1,document.body.classList.remove("dg-scroll-lock"))},[]),Tt=r.useMemo(()=>se(n,j),[n,j]),it=(t,i)=>{const b=yt.current;b&&(b.style.transform=`translateZ(calc(var(--radius) * -1)) rotateX(${t}deg) rotateY(${i}deg)`)},bt=r.useRef(null);r.useEffect(()=>{const t=_.current;if(!t)return;const i=new ResizeObserver(b=>{var m;const c=b[0].contentRect,f=Math.max(1,c.width),h=Math.max(1,c.height),y=Math.min(f,h),k=Math.max(f,h),$=f/h;let g;switch(M){case"min":g=y;break;case"max":g=k;break;case"width":g=f;break;case"height":g=h;break;default:g=$>=1.3?f:y}let w=g*u;const x=h*1.35;w=Math.min(w,x),w=U(w,A,d),bt.current=Math.round(w);const l=Math.max(8,Math.round(y*T));t.style.setProperty("--radius",`${bt.current}px`),t.style.setProperty("--viewer-pad",`${l}px`),t.style.setProperty("--overlay-blur-color",X),t.style.setProperty("--tile-radius",O),t.style.setProperty("--enlarge-radius",L),t.style.setProperty("--image-filter",Y?"grayscale(1)":"none"),it(C.current.x,C.current.y);const E=(m=et.current)==null?void 0:m.querySelector(".enlarge");if(E&&tt.current&&J.current){const e=tt.current.getBoundingClientRect(),S=J.current.getBoundingClientRect();if(D&&P){const R=document.createElement("div");R.style.cssText=`position: absolute; width: ${D}; height: ${P}; visibility: hidden; top: -9999px;`,document.body.appendChild(R);const N=R.getBoundingClientRect();document.body.removeChild(R);const B=e.left-S.left+(e.width-N.width)/2,V=e.top-S.top+(e.height-N.height)/2;Object.assign(E.style,{left:`${B}px`,top:`${V}px`})}else Object.assign(E.style,{left:`${e.left-S.left}px`,top:`${e.top-S.top}px`,width:`${e.width}px`,height:`${e.height}px`})}});return i.observe(t),()=>i.disconnect()},[u,M,A,d,T,X,Y,O,L,D,P]),r.useEffect(()=>{it(C.current.x,C.current.y)},[]);const pt=r.useCallback(()=>{I.current&&(cancelAnimationFrame(I.current),I.current=null)},[]),Xt=r.useCallback((t,i)=>{let c=U(t,-1.4,1.4)*80,f=U(i,-1.4,1.4)*80,h=0;const y=U(q!=null?q:.6,0,1),k=.94+.055*y,$=.015-.01*y,g=Math.round(90+270*y),w=()=>{if(c*=k,f*=k,Math.abs(c)<$&&Math.abs(f)<$){I.current=null;return}if(++h>g){I.current=null;return}const x=U(C.current.x-f/200,-p,p),l=ne(C.current.y+c/200);C.current={x,y:l},it(x,l),I.current=requestAnimationFrame(w)};pt(),I.current=requestAnimationFrame(w)},[q,p,pt]);Vt({onDragStart:({event:t})=>{var c,f;if(G.current)return;pt();const i=t;H.current=i.pointerType||"mouse",H.current==="touch"&&i.preventDefault(),H.current==="touch"&&vt(),rt.current=!0,K.current=!1,W.current=!1,dt.current=at({},C.current),F.current={x:i.clientX,y:i.clientY};const b=(f=(c=i.target).closest)==null?void 0:f.call(c,".item__image");nt.current=b||null},onDrag:({event:t,last:i,velocity:b=[0,0],direction:c=[0,0],movement:f})=>{if(G.current||!rt.current||!F.current)return;const h=t;H.current==="touch"&&h.preventDefault();const y=h.clientX-F.current.x,k=h.clientY-F.current.y;W.current||y*y+k*k>16&&(W.current=!0);const $=U(dt.current.x-k/o,-p,p),g=dt.current.y+y/o,w=C.current;if((w.x!==$||w.y!==g)&&(C.current={x:$,y:g},it($,g)),i){rt.current=!1;let x=!1;if(F.current){const R=h.clientX-F.current.x,N=h.clientY-F.current.y,B=R*R+N*N,V=H.current==="touch"?10:6;B<=V*V&&(x=!0)}const[l,E]=b,[m,e]=c;let S=l*m,z=E*e;if(!x&&Math.abs(S)<.001&&Math.abs(z)<.001&&Array.isArray(f)){const[R,N]=f;S=R/o*.02,z=N/o*.02}!x&&(Math.abs(S)>.005||Math.abs(z)>.005)&&Xt(S,z),F.current=null,K.current=!x,x&&nt.current&&!G.current&&mt(nt.current),nt.current=null,K.current&&setTimeout(()=>K.current=!1,120),H.current==="touch"&&Mt(),W.current&&(ft.current=performance.now()),W.current=!1}}},{target:J,eventOptions:{passive:!1}}),r.useEffect(()=>{const t=gt.current;if(!t)return;const i=()=>{var e,S;if(performance.now()-xt.current<250)return;const c=G.current;if(!c)return;const f=c.parentElement,h=(e=et.current)==null?void 0:e.querySelector(".enlarge");if(!h)return;const y=f.querySelector(".item__image--reference"),k=ut.current;if(!k){h.remove(),y&&y.remove(),f.style.setProperty("--rot-y-delta","0deg"),f.style.setProperty("--rot-x-delta","0deg"),c.style.visibility="",c.style.zIndex="0",G.current=null,(S=_.current)==null||S.removeAttribute("data-enlarging"),st.current=!1;return}const $=h.getBoundingClientRect(),g=_.current.getBoundingClientRect(),w={left:k.left-g.left,top:k.top-g.top,width:k.width,height:k.height},x={left:$.left-g.left,top:$.top-g.top,width:$.width,height:$.height},l=document.createElement("div");l.className="enlarge-closing",l.style.cssText=`
        position: absolute;
        left: ${x.left}px;
        top: ${x.top}px;
        width: ${x.width}px;
        height: ${x.height}px;
        z-index: 9999;
        border-radius: ${L};
        overflow: hidden;
        box-shadow: none;
        transition: all ${s}ms ease-out;
        pointer-events: none;
        margin: 0;
        transform: none;
        filter: ${Y?"grayscale(1)":"none"};
      `;const E=h.querySelector("img");if(E){const z=E.cloneNode();z.style.cssText="width: 100%; height: 100%; object-fit: cover;",l.appendChild(z)}h.remove(),_.current.appendChild(l),l.getBoundingClientRect(),requestAnimationFrame(()=>{l.style.left=w.left+"px",l.style.top=w.top+"px",l.style.width=w.width+"px",l.style.height=w.height+"px",l.style.opacity="0"});const m=()=>{l.remove(),ut.current=null,y&&y.remove(),f.style.transition="none",c.style.transition="none",f.style.setProperty("--rot-y-delta","0deg"),f.style.setProperty("--rot-x-delta","0deg"),requestAnimationFrame(()=>{var z;c.style.visibility="",c.style.opacity="0",c.style.zIndex="0",G.current=null,(z=_.current)==null||z.removeAttribute("data-enlarging"),requestAnimationFrame(()=>{f.style.transition="",c.style.transition="opacity 300ms ease-out",requestAnimationFrame(()=>{c.style.opacity="1",setTimeout(()=>{var R;c.style.transition="",c.style.opacity="",st.current=!1,!rt.current&&((R=_.current)==null?void 0:R.getAttribute("data-enlarging"))!=="true"&&document.body.classList.remove("dg-scroll-lock")},300)})})})};l.addEventListener("transitionend",m,{once:!0})};t.addEventListener("click",i);const b=c=>{c.key==="Escape"&&i()};return window.addEventListener("keydown",b),()=>{t.removeEventListener("click",i),window.removeEventListener("keydown",b)}},[s,L,Y]);const mt=t=>{var wt,Rt;if(K.current||st.current)return;st.current=!0,xt.current=performance.now(),vt();const i=t.parentElement;G.current=t,t.setAttribute("data-focused","true");const b=lt(i,"offsetX",0),c=lt(i,"offsetY",0),f=lt(i,"sizeX",2),h=lt(i,"sizeY",2),y=oe(b,c,f,h,j),k=Ct(y.rotateY),$=Ct(C.current.y);let g=-(k+$)%360;g<-180&&(g+=360);const w=-y.rotateX-C.current.x;i.style.setProperty("--rot-y-delta",`${g}deg`),i.style.setProperty("--rot-x-delta",`${w}deg`);const x=document.createElement("div");x.className="item__image item__image--reference opacity-0",x.style.transform=`rotateX(${-y.rotateX}deg) rotateY(${-y.rotateY}deg)`,i.appendChild(x);const l=x.getBoundingClientRect(),E=J.current.getBoundingClientRect(),m=tt.current.getBoundingClientRect();ut.current={left:l.left,top:l.top,width:l.width,height:l.height},t.style.visibility="hidden",t.style.zIndex="0";const e=document.createElement("div");e.className="enlarge",e.style.cssText=`position:absolute; left:${m.left-E.left}px; top:${m.top-E.top}px; width:${m.width}px; height:${m.height}px; opacity:0; z-index:30; will-change:transform,opacity; transform-origin:top left; transition:transform ${s}ms ease, opacity ${s}ms ease; border-radius:${L}; overflow:hidden; box-shadow:none;`;const S=i.dataset.src||((wt=t.querySelector("img"))==null?void 0:wt.src)||"",z=i.dataset.alt||((Rt=t.querySelector("img"))==null?void 0:Rt.alt)||"",R=document.createElement("img");R.src=S,R.alt=z,R.style.cssText=`width:100%; height:100%; object-fit:cover; filter:${Y?"grayscale(1)":"none"};`,e.appendChild(R),et.current.appendChild(e);const N=l.left-m.left,B=l.top-m.top,V=l.width/m.width,jt=l.height/m.height;if(e.style.transform=`translate(${N}px, ${B}px) scale(${V}, ${jt})`,requestAnimationFrame(()=>{var Q;e.style.opacity="1",e.style.transform="translate(0px, 0px) scale(1, 1)",(Q=_.current)==null||Q.setAttribute("data-enlarging","true")}),D||P){const Q=_t=>{if(_t.propertyName!=="transform")return;e.removeEventListener("transitionend",Q);const Lt=e.style.transition;e.style.transition="none";const kt=D||`${m.width}px`,$t=P||`${m.height}px`;e.style.width=kt,e.style.height=$t;const St=e.getBoundingClientRect();e.style.width=m.width+"px",e.style.height=m.height+"px",e.offsetWidth,e.style.transition=`left ${s}ms ease, top ${s}ms ease, width ${s}ms ease, height ${s}ms ease`;const Yt=m.left-E.left+(m.width-St.width)/2,Nt=m.top-E.top+(m.height-St.height)/2;requestAnimationFrame(()=>{e.style.left=`${Yt}px`,e.style.top=`${Nt}px`,e.style.width=kt,e.style.height=$t});const At=()=>{e.removeEventListener("transitionend",At),e.style.transition=Lt};e.addEventListener("transitionend",At,{once:!0})};e.addEventListener("transitionend",Q)}};return r.useEffect(()=>()=>{document.body.classList.remove("dg-scroll-lock")},[]),v.jsxs(v.Fragment,{children:[v.jsx("style",{dangerouslySetInnerHTML:{__html:`
    .sphere-root {
      --radius: 520px;
      --viewer-pad: 72px;
      --circ: calc(var(--radius) * 3.14);
      --rot-y: calc((360deg / var(--segments-x)) / 2);
      --rot-x: calc((360deg / var(--segments-y)) / 2);
      --item-width: calc(var(--circ) / var(--segments-x));
      --item-height: calc(var(--circ) / var(--segments-y));
    }
    
    .sphere-root * { box-sizing: border-box; }
    .sphere, .sphere-item, .item__image { transform-style: preserve-3d; }
    
    .stage {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      position: absolute;
      inset: 0;
      margin: auto;
      perspective: calc(var(--radius) * 2);
      perspective-origin: 50% 50%;
    }
    
    .sphere {
      transform: translateZ(calc(var(--radius) * -1));
      will-change: transform;
      position: absolute;
    }
    
    .sphere-item {
      width: calc(var(--item-width) * var(--item-size-x));
      height: calc(var(--item-height) * var(--item-size-y));
      position: absolute;
      top: -999px;
      bottom: -999px;
      left: -999px;
      right: -999px;
      margin: auto;
      transform-origin: 50% 50%;
      backface-visibility: hidden;
      transition: transform 300ms;
      transform: rotateY(calc(var(--rot-y) * (var(--offset-x) + ((var(--item-size-x) - 1) / 2)) + var(--rot-y-delta, 0deg))) 
                 rotateX(calc(var(--rot-x) * (var(--offset-y) - ((var(--item-size-y) - 1) / 2)) + var(--rot-x-delta, 0deg))) 
                 translateZ(var(--radius));
    }
    
    .sphere-root[data-enlarging="true"] .scrim {
      opacity: 1 !important;
      pointer-events: all !important;
    }
    
    @media (max-aspect-ratio: 1/1) {
      .viewer-frame {
        height: auto !important;
        width: 100% !important;
      }
    }
    
    // body.dg-scroll-lock {
    //   position: fixed !important;
    //   top: 0;
    //   left: 0;
    //   width: 100% !important;
    //   height: 100% !important;
    //   overflow: hidden !important;
    //   touch-action: none !important;
    //   overscroll-behavior: contain !important;
    // }
    .item__image {
      position: absolute;
      inset: 10px;
      border-radius: var(--tile-radius, 12px);
      overflow: hidden;
      cursor: pointer;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      transition: transform 300ms;
      pointer-events: auto;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    .item__image--reference {
      position: absolute;
      inset: 10px;
      pointer-events: none;
    }
  `}}),v.jsx("div",{ref:_,className:"sphere-root relative w-full h-full",style:{"--segments-x":j,"--segments-y":j,"--overlay-blur-color":X,"--tile-radius":O,"--enlarge-radius":L,"--image-filter":Y?"grayscale(1)":"none"},children:v.jsxs("main",{ref:J,className:"absolute inset-0 grid place-items-center overflow-hidden select-none bg-transparent",style:{touchAction:"none",WebkitUserSelect:"none",maskImage:"radial-gradient(ellipse at center, black 30%, transparent 65%)",WebkitMaskImage:"radial-gradient(ellipse at center, black 30%, transparent 65%)"},children:[v.jsx("div",{className:"stage",children:v.jsx("div",{ref:yt,className:"sphere",children:Tt.map((t,i)=>v.jsx("div",{className:"sphere-item absolute m-auto","data-src":t.src,"data-alt":t.alt,"data-offset-x":t.x,"data-offset-y":t.y,"data-size-x":t.sizeX,"data-size-y":t.sizeY,style:{"--offset-x":t.x,"--offset-y":t.y,"--item-size-x":t.sizeX,"--item-size-y":t.sizeY,top:"-999px",bottom:"-999px",left:"-999px",right:"-999px"},children:v.jsx("div",{className:"item__image absolute block overflow-hidden cursor-pointer bg-gray-200 transition-transform duration-300",role:"button",tabIndex:0,"aria-label":t.alt||"Open image",onClick:b=>{performance.now()-ft.current<80||mt(b.currentTarget)},onTouchEnd:b=>{performance.now()-ft.current<80||mt(b.currentTarget)},style:{inset:"10px",borderRadius:`var(--tile-radius, ${O})`,backfaceVisibility:"hidden"},children:v.jsx("img",{src:t.src,draggable:!1,alt:t.alt,className:"w-full h-full object-cover pointer-events-none",style:{backfaceVisibility:"hidden",filter:`var(--image-filter, ${Y?"grayscale(1)":"none"})`}})})},`${t.x},${t.y},${i}`))})}),v.jsxs("div",{ref:et,className:"absolute inset-0 z-20 pointer-events-none flex items-center justify-center",style:{padding:"var(--viewer-pad)"},children:[v.jsx("div",{ref:gt,className:"scrim absolute inset-0 z-10 pointer-events-none opacity-0 transition-opacity duration-500",style:{background:"rgba(0, 0, 0, 0)",backdropFilter:"none"}}),v.jsx("div",{ref:tt,className:"viewer-frame h-full aspect-square flex",style:{borderRadius:`var(--enlarge-radius, ${L})`}})]})]})})]})}const pe=()=>{var T;const[n,a]=r.useState(.5),u=r.useRef(null),M=r.useRef(null),{isDarkMode:A}=Ot(),d=Ht();return r.useEffect(()=>{const X=()=>{if(!u.current)return;const p=u.current.getBoundingClientRect(),o=window.innerHeight;let s=0;if(p.top<=o&&p.bottom>=0){const P=p.height,O=p.top+P/2,L=o/2,Y=Math.abs(O-L),_=o/2+P/2;s=1-Y/_,s=Math.max(0,Math.min(1,s)),s=s*s*(3-2*s)}const j=.5,D=j+(1-j)*s;a(D)};return window.addEventListener("scroll",X),X(),()=>{window.removeEventListener("scroll",X)}},[]),v.jsxs("section",{ref:u,id:"skills",className:"min-h-screen py-20 relative",style:{background:((T=d.background.sections)==null?void 0:T.skills)||d.background.gradient,transition:"background 0.3s ease-in-out"},children:[v.jsx("div",{className:"absolute top-0 left-0 right-0 pointer-events-none",style:{height:"300px",background:A?`linear-gradient(180deg, ${d.background.gradientEnd} 0%, transparent 100%)`:`linear-gradient(180deg, ${d.colors.pink[25]} 0%, transparent 100%)`,zIndex:1}}),v.jsxs("div",{className:"container mx-auto px-6 relative",style:{zIndex:2},children:[v.jsx("h2",{className:"text-4xl font-bold text-center mb-12",style:{color:A?d.colors.white:d.colors.pink[500]},children:"Skills"}),v.jsxs("div",{ref:M,className:"relative w-full",style:{height:"600px",transform:`scale(${n})`,transformOrigin:"center center",willChange:"transform"},children:[v.jsx(ie,{maxItems:9}),v.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:A?`radial-gradient(ellipse at center, transparent 40%, ${Z(d.colors.dark[900],.1)} 70%, ${Z(d.colors.dark[900],.6)} 90%, ${Z(d.colors.dark[900],.8)} 100%)`:`radial-gradient(ellipse at center, transparent 40%, ${Z(d.colors.pink[50],.1)} 70%, ${Z(d.colors.pink[50],.6)} 90%, ${Z(d.colors.pink[50],.8)} 100%)`,maskImage:"radial-gradient(ellipse at center, black 50%, transparent 85%)",WebkitMaskImage:"radial-gradient(ellipse at center, black 50%, transparent 85%)"}})]})]})]})};export{pe as default};
