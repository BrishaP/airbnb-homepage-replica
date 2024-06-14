__d((function(g,r,i,a,m,e,d){'use strict';m.exports=r(d[0])}),"09a5e5",["b1e39b"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default,n=r(d[1]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionCoordinator=void 0;var o=n(r(d[2]));function s(){const t=r(d[3]);return s=function(){return t},t}var l=r(d[4]),u=r(d[5]),c=r(d[6]),p=r(d[7]),v=r(d[8]),w=r(d[9]),f=r(d[10]),y=r(d[11]),T=t(r(d[12])),S=r(d[13]),k=r(d[14]),b=r(d[15]),h=r(d[16]),A=r(d[17]);function V(t){const n=t||document.body;let o=[];'true'===t?.getAttribute('view-transition-element')&&o.push(t),o=[...o,...Array.from(n.querySelectorAll('[view-transition-element="true"]'))];const s=Array.from(document.querySelectorAll("[data-transition-layer] [view-transition-element=\"true\"]"));return o.filter((t=>!s.includes(t)))}function C(t){return null==t?null:t.scrollHeight>t.clientHeight?t:C(t.parentElement)}function M(t){const n=window.getComputedStyle(t);let o=n.getPropertyValue('view-transition-name');const s=w.MagicTransitionState.polyfill.supportsNative.peek();if(!(o&&'none'!==o||s)){if('none'===n.display)return;o=n.getPropertyValue('--view-transition-name')}return o}function P(){const t=document.querySelectorAll('[data-scrollable="true"]');t&&t.forEach((t=>{t.scrollTop=Number(t.getAttribute('view-transition-scroll-offset'))}))}function E(t,n){let o=t.getBoundingClientRect();if(n){const n=C(t);if('HTML'!==n?.tagName){const{scrollTop:t}=n||{scrollTop:0};o=DOMRect.fromRect({...o.toJSON(),y:o.y+t})}}const l=null==(u=t)?null:Array.from(u.querySelectorAll('[data-scrollable="true"]'));var u;l?.forEach((t=>{const{scrollTop:n}=t;t.setAttribute('view-transition-scroll-offset',`${n}`)}));const c=M(t);if(!c||'none'===c)return{elementName:null,transitionElement:null};t.querySelectorAll('[data-pressable=true]').forEach((t=>{t.setAttribute('style','display: contents')}));const p=t.outerHTML;return{name:c,transitionElement:{element:(0,A.jsx)(b.StaticTransitionElement,{content:p,inert:!0}),dimensions:o,ready:(0,s().signal)(!1)}}}function N(){const t=document.querySelector("[view-transition]"),n=t=>t.effect.getTiming().iterations!==1/0,o=t.getAnimations({subtree:!0}).filter((t=>n(t))),s=Promise.allSettled(o.map((t=>t.finished)));return T.default.getBootstrap('enable_animation_early_finish')?{animations:Promise.race([new Promise((t=>setTimeout(t,5e3))),s])}:{animations:s}}function D(t){const{polyfill:n,ready:o}=w.MagicTransitionState;if(!n.filled.peek()){const s='startViewTransition'in document&&null!==document.startViewTransition;s&&(n.startViewTransition.value=document.startViewTransition.bind(document)),document.startViewTransition=t,n.supportsNative.value=s,n.filled.value=!0,w.MagicTransitionState.native.value=s&&!n.disableNative.value,o.peek()||requestAnimationFrame((()=>{o.value=!0}))}}function _(){const{polyfill:t}=w.MagicTransitionState;t.filled.peek()&&(t.startViewTransition.value&&(document.startViewTransition=t.startViewTransition.value),t.filled.value=!1)}function q(){let t;return[new Promise((n=>{t=n})),function(){t()}]}function O(){const[t,n]=q(),[o,l]=q(),[u,c]=q(),p=(0,s().signal)(!1);return{finished:t,isTransitionSkipped:p,ready:o,setFinished:n,setReady:l,setUpdateCallbackDone:c,skipTransition:function(){p.value=!0},updateCallbackDone:u}}e.ViewTransitionCoordinator=o.default.memo((()=>{const t=(0,o.useRef)(null),{instance:n}=w.MagicTransitionState,{waitForNextValue:T}=(0,p.useNextSignalValue)(),{scheduler:b}=(0,v.usePostTaskScheduler)({strategy:'recycle'}),C=(0,c.useComputed)((()=>{const t=Array.from(n.transitionGroups.value.values());return n.stage.value.step===f.ViewTransitionStage.CaptureOld&&(t.length>0&&t.every((t=>null===t.imagePair.old.value||t.imagePair.old.value.ready.value)))})),M=(0,c.useComputed)((()=>{const t=Array.from(n.transitionGroups.value.values());return n.stage.value.step===f.ViewTransitionStage.CaptureNew&&(!(t.length>0)||t.every((t=>null===t.imagePair.new.value||t.imagePair.new.value.ready.value)))}));function q(){const t=V(n.scope.peek()),o=new Map;if(!t.length)return;t.forEach((t=>{const{name:l,transitionElement:u}=E(t,!0);if(!l)return;const c={name:l,order:n.layers.value++,imagePair:{old:(0,s().signal)(u),new:(0,s().signal)(null)},transition:n};if(o.has(l))throw console.error(`[view-transition-name="${l}"] already exists`,{existing:o.get(l)?.imagePair.old.peek()?.element,new:u.element}),new Error(`[view-transition-name="${l}"] already exists`);o.set(l,c)}));const l=T(C,(t=>!!t));return n.transitionGroups.value=o,l}function U(){n.stage.value=(0,y.makeActiveStage)(f.ViewTransitionStage.CaptureNew,n.stage.peek());const t=V(n.scope.peek()),o=w.MagicTransitionState.shouldUseLiveContent.peek();if(!t.length)return;const l=new Map(n.transitionGroups.peek()),u=[];t.forEach((t=>{const{name:c,transitionElement:p}=E(t);if(!c)return;if(u.includes(c))throw new Error(`[view-transition-name="${c}"] already exists`);u.push(c);const v={...p,live:o,mounted:!1,container:null},w=l.get(c)||{name:c,order:n.layers.value++,imagePair:{old:(0,s().signal)(null),new:(0,s().signal)(v)},transition:n};w.imagePair.new.value=v,l.set(c,w)}));const c=T(M,(t=>!!t));return(0,s().batch)((()=>{n.transitionGroups.value=l,n.portalState.value.readyForPortal.value=!0})),c}function F(){(0,s().batch)((()=>{(0,k.setHistoryNavigationEffects)(),document.documentElement.style.setProperty('--view-transition_capture-old',' '),document.documentElement.style.setProperty('--view-transition_capture-new','initial'),w.MagicTransitionState.anyActive.value=!0,w.MagicTransitionState.middleware.forEach((t=>t.onTransitionStart?.())),n.layers.value=0,n.active.value=!0,n.transitionGroups.value=new Map,n.stage.value=(0,y.makeActiveStage)(f.ViewTransitionStage.CaptureOld,n.stage.peek())}))}function x(){(0,s().batch)((()=>{n.stage.value=(0,y.makeActiveStage)(f.ViewTransitionStage.FreezeScreen,n.stage.peek())})),P()}async function H(){(0,s().batch)((()=>{n.stage.value=(0,y.makeActiveStage)(f.ViewTransitionStage.DOMUpdate,n.stage.peek()),n.updateCallbackDone.value=b.postTask(n.wait,{priority:'user-blocking'})})),await n.updateCallbackDone.peek(),j(),t.current?.setUpdateCallbackDone()}function R(){const{polyfill:t}=w.MagicTransitionState;if((0,s().batch)((()=>{n.stage.value=(0,y.makeActiveStage)(f.ViewTransitionStage.CreateAnimations,n.stage.peek())})),!t.supportsNative.peek()){const t=document.querySelector('[data-testid="site-content"]');t&&(t.style.height='100%',P())}}function G(){t.current?.setReady(),(0,s().batch)((()=>{n.stage.value=(0,y.makeActiveStage)(f.ViewTransitionStage.StartAnimations,n.stage.peek())}))}function $(){(0,s().batch)((()=>{n.stage.value=(0,y.makeActiveStage)(f.ViewTransitionStage.Complete,n.stage.peek())})),t.current?.setFinished()}function j(){document.documentElement.style.setProperty('--view-transition_capture-old','initial'),document.documentElement.style.setProperty('--view-transition_capture-new',' ')}async function I(){await new Promise((t=>requestAnimationFrame((()=>setTimeout(t,0))))),(0,s().batch)((()=>{(0,k.clearHistoryNavigationEffects)(),n.transitionGroups.value=new Map,w.MagicTransitionState.anyActive.value=!1,w.MagicTransitionState.middleware.forEach((t=>t.onTransitionEnd?.())),n.stage.value=(0,y.makeActiveStage)(f.ViewTransitionStage.Idle,n.stage.peek()),n.active.value=!1,n.className.value=null,n.style.value=null,n.scope.value=null,n.portalState.value={readyForPortal:(0,s().signal)(!1),portalComplete:(0,s().signal)(!1)},n.domUpdateCallbacks.clear(),requestIdleCallback((()=>{document.documentElement.style.setProperty('--view-transition_capture-old',null),document.documentElement.style.setProperty('--view-transition_capture-new',null)}))}));const o=document.querySelectorAll('[data-scrollable="true"]');o?.forEach((t=>{t.removeAttribute('view-transition-scroll-offset')}));const l=document.querySelector('[data-testid="site-content"]');l&&(l.style.height=''),t.current=null}function L(t){if(w.MagicTransitionState.debugging.enabled.peek()&&w.MagicTransitionState.debugging.pauseAfterStage.peek()===t){console.log(`Pausing after stage: ${t}`);const n=new AbortController,o=T(w.MagicTransitionState.debugging.pauseAfterStage,(n=>t!==n),n.signal),s=T(w.MagicTransitionState.debugging.enabled,(t=>!t),n.signal);return o.then((()=>{console.log(`Resuming after stage: ${t}`),n.signal.aborted||n.abort()})),s.then((()=>{n.signal.aborted||n.abort()})),Promise.race([o,s])}}const z=(0,u.useEvent)((async o=>{o&&n.domUpdateCallbacks.add(o),await L(f.ViewTransitionStage.Idle),await b.postTask((()=>F()));try{if(await b.postTask((()=>q())),await L(f.ViewTransitionStage.CaptureOld),await b.postTask(x),await L(f.ViewTransitionStage.FreezeScreen),await b.postTask(H),await L(f.ViewTransitionStage.DOMUpdate),!t.current?.isTransitionSkipped.peek()){await b.postTask((()=>U())),await L(f.ViewTransitionStage.CaptureNew),await b.postTask(R),await L(f.ViewTransitionStage.CreateAnimations);const{animations:t}=await b.postTask(N);await b.postTask(G),await L(f.ViewTransitionStage.StartAnimations),await t}}catch(t){n.stage.peek().step===f.ViewTransitionStage.CaptureOld&&await b.postTask(H),console.log(t)}finally{await b.postTask($),await L(f.ViewTransitionStage.Complete),await b.postTask(I)}})),B=(0,u.useEvent)((o=>{const{activeViewTransition:s,polyfill:u}=w.MagicTransitionState,c='object'==typeof o,p=c?o.update:o;if(c&&u.supportsNative.peek()){const{classNames:t,enableHistory:n,style:s}=o;(0,S.configure)({className:t,enableHistory:n,style:s})}if(u.supportsNative.peek()&&!u.disableNative.peek()){F();const t=u.startViewTransition.value((async()=>{let t;return(0,l.flushSync)((()=>{t=p?.()})),await t,w.MagicTransitionState.middleware.forEach((t=>{t.onTransitionDOMUpdated&&n.domUpdateCallbacks.add(t.onTransitionDOMUpdated)})),await n.wait(),j(),t}));return t.ready.then((async()=>{await b.yield(),n.stage.value=(0,y.makeActiveStage)(f.ViewTransitionStage.CreateAnimations,n.stage.peek())})),t.updateCallbackDone.then((async()=>{await b.yield(),n.stage.value=(0,y.makeActiveStage)(f.ViewTransitionStage.DOMUpdate,n.stage.peek())})),t.finished.then((async()=>{await b.yield(),I(),s.value=null})),s.value=t,t}if(!u.supportsNative.peek()){const t={finished:Promise.resolve(),ready:Promise.resolve(),updateCallbackDone:Promise.resolve(),skipTransition:()=>{}};return p?.(),t}return t.current=O(),z(p),t.current})),J=w.MagicTransitionState.instance;return J.start.peek()!==B&&(J.start.value=B,_(),D(B)),(0,A.jsx)(h.RootStyleSync,{viewTransition:n})}))}),"0e2830",["ba7a76","45f788","07aa1f","a954a0","b67917","f4e9c4","265637","8994c5","53bb4a","83da1f","64bb33","5e4d5c","c235f8","c32f72","99778d","c850f3","a94de2","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.attachTransitionElement=function({element:t,setRoot:n,transitionElement:o}){t&&!o.peek().ready.peek()&&(s(t)?o.value.ready.value=!0:n(t))},e.readyToApply=function(t,o){let s=!1;switch(t.transition.stage.value.step){case n.ViewTransitionStage.CaptureOld:case n.ViewTransitionStage.FreezeScreen:case n.ViewTransitionStage.DOMUpdate:case n.ViewTransitionStage.CaptureNew:s='frozen';break;case n.ViewTransitionStage.CreateAnimations:case n.ViewTransitionStage.StartAnimations:case n.ViewTransitionStage.Complete:s='apply'}if(!s)return null;if('frozen'===s)return{[`frozen-view-transition-${o}`]:t.name};return{[`view-transition-${o}`]:t.name}};var t=r(d[0]),n=r(d[1]);t.cssFragment`
  height: auto;
  left: 0;
  mix-blend-mode: var(--view-transition_forced-blend-mode, var(--view-transition_mix-blend-mode));
  position: absolute;
  top: 0;
  width: 100%;

  /* This assumes we will have a static wrapper, if we ever allow live content
  in the old side we need to update this. */
  > [data-static-element-wrapper] > [view-transition-element] [view-transition-element] {
    --view-transition_visibility: hidden;
  }

  > [data-static-element-wrapper] > [view-transition-element] {
    left: 0;
    top: 0;
    margin: 0;
    translate: 0;
    opacity: 1;
    flex: 1;
  }
`;function o(t,n){return n?n.hasAttribute(t)?n:o(t,n.parentElement):null}function s(t){if('none'===window.getComputedStyle(t).display)return!0;const n=o('view-transition-image-pair',t.parentElement);if(!n)return!1;if('none'===window.getComputedStyle(n).display)return!0;const s=o('view-transition-group',n.parentElement);if(!s)return!1;if('none'===window.getComputedStyle(s).display)return!0;const l=o('view-transition',s.parentElement);return!!l&&'none'===window.getComputedStyle(l).display}}),"1bd331",["4786a8","64bb33"]);
__d((function(g,r,i,a,m,e,d){"use strict";var n=r(d[0]).default,t=r(d[1]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.useComputed=function(n){var t=(0,f.useRef)(n);return t.current=n,(0,f.useMemo)((function(){return(0,o.computed)((function(){return t.current()}))}),s)},e.useSignal=function(n){return(0,f.useMemo)((function(){return(0,o.signal)(n)}),s)},e.useSignalEffect=function(n){var t=(0,f.useRef)(n);t.current=n,(0,f.useEffect)((function(){return(0,o.effect)((function(){return t.current()}))}),s)},e.useSignals=function(n){return P(n)};var u,o=r(d[2]),f=t(r(d[3])),c=r(d[4]),s=(n(r(d[5])),n(r(d[6])),new Map,[]),l=Symbol.for("react.element"),v=function(){},p=Symbol.dispose||Symbol.for("Symbol.dispose");function S(n,t){var o=t.effect.S();return u=t,b.bind(t,n,o)}function b(n,t){t(),u=n}(h={u:0,effect:{s:void 0,c:function(){},S:function(){return v},d:function(){}},subscribe:function(){return v},getSnapshot:function(){return 0},S:function(){},f:function(){}})[p]=function(){};var h,y,M=Promise.prototype.then.bind(Promise.resolve());function P(n){void 0===n&&(n=0),y||(y=M((function(){var n;y=void 0,null==(n=u)||n.f()})));var t=(0,f.useRef)();null==t.current&&(t.current=(function(n){var t,f,c,s,l=0,v=(0,o.effect)((function(){f=this}));return f.c=function(){l=l+1|0,s&&s()},(t={u:n,effect:f,subscribe:function(n){return s=n,function(){l=l+1|0,s=void 0,v()}},getSnapshot:function(){return l},S:function(){if(null!=u){var n=u.u,t=this.u;0==n&&0==t||0==n&&1==t?(u.f(),c=S(void 0,this)):1==n&&0==t||2==n&&0==t||(c=S(u,this))}else c=S(void 0,this)},f:function(){null==c||c(),c=void 0}})[p]=function(){this.f()},t})(n));var s=t.current;return(0,c.useSyncExternalStore)(s.subscribe,s.getSnapshot,s.getSnapshot),s.S(),s}Object.defineProperties(o.Signal.prototype,{$$typeof:{configurable:!0,value:l},type:{configurable:!0,value:function(n){var t=n.data,u=P(1);try{return t.value}finally{u.f()}}},props:{configurable:!0,get:function(){return{data:this}}},ref:{configurable:!0,value:null}})}),"250cdf",["ba7a76","45f788","a954a0","07aa1f","69b03d","b8c07d","09a5e5"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.signalToRef=t,e.useSignalToRef=function(l){const o=(0,u.useSignal)(null),s=l||o;(0,n.useEffect)((()=>function(){s.value=null}),[s]);const f=(0,n.useMemo)((()=>t(s)),[s]),c=[s,f];return c.signal=s,c.ref=f,c};var n=r(d[0]),u=r(d[1]);function t(n){return u=>{n.value=u}}}),"2637d5",["07aa1f","e086eb"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransition=function(){const t=(0,o.useCx)(),{transitionGroups:E,stage:_,className:y,style:h}=l.MagicTransitionState.instance,{disableNative:x,supportsNative:b}=l.MagicTransitionState.polyfill,C=v.default.getBootstrap('view_transition_old_polyfill'),F=(0,s.useComputed)((()=>!x.value&&b.value));(0,u.default)({shouldPolyfill:!C,startTransitionCb:n.flushSync}),(0,s.useSignalEffect)((()=>{const t=F.value;document.documentElement.classList.toggle('dir',t),document.documentElement.classList.toggle('native',t),T.viewTransition_native.split(' ').forEach((n=>document.documentElement.classList.toggle(n,t))),T.viewTransition_slideInAndFade.split(' ').forEach((n=>document.documentElement.classList.toggle(n,t))),T.viewTransition_slideInFromEdge.split(' ').forEach((n=>document.documentElement.classList.toggle(n,t))),T.viewTransition_slideUpFromBottom.split(' ').forEach((n=>document.documentElement.classList.toggle(n,t))),T.viewTransition_contextualGrow.split(' ').forEach((n=>document.documentElement.classList.toggle(n,t)));const n=Array.from(y.value||[]);n.forEach((t=>{t.split(' ').forEach((t=>document.documentElement.classList.toggle(t,!0)))}));const o={...h.value||{}};return Object.keys(o).forEach((t=>{document.documentElement.style.setProperty(t,`${o[t]}`)})),()=>{n.forEach((t=>{document.documentElement.classList.remove(...t.split(' '))})),Object.keys(o).forEach((t=>{document.documentElement.style.removeProperty(t)}))}}));const j=(0,s.useComputed)((()=>{const{step:t}=_.value;return t===c.ViewTransitionStage.CaptureOld})),L=(0,s.useComputed)((()=>{switch(_.value.step){case c.ViewTransitionStage.StartAnimations:case c.ViewTransitionStage.Complete:return!0;default:return!1}}));function S(t){const n=E.peek().get('root')?.imagePair,o=n?.[t].peek()?.dimensions;return o&&!j.peek()?{[`--view-transition_${t}-root-clip`]:`inset(-${o.bottom}px ${o.left}px)`}:{}}const k=C?{'--view-transition_visibility':j.value?'hidden':'visible','--view-transition_play-state':L.value?'running':'paused','--view-transition_overflow':L.value?'visible':'hidden',...S('old'),...S('new')}:{};if(F.value&&C)return(0,f.jsx)(w.ViewTransitionCoordinator,{},"native");return(0,f.jsx)("div",{className:t(T.root,T.viewTransitionContainer,T.viewTransition_contextualGrow,T.viewTransition_slideInAndFade,T.viewTransition_slideInFromEdge,T.viewTransition_slideUpFromBottom,...Array.from(y.value||[])),children:C&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{"view-transition":"true",className:t(T.viewTransition,'view-transition','polyfill'),style:k,children:Array.from(E.value.entries()).map((([t,n])=>(0,f.jsx)(p.ViewTransitionGroup,{group:n},t)))}),(0,f.jsx)(w.ViewTransitionCoordinator,{},"polyfill")]})})};t(r(d[1])),r(d[2]);var n=r(d[3]),o=r(d[4]),s=r(d[5]),l=r(d[6]),c=r(d[7]),u=t(r(d[8])),v=t(r(d[9])),p=r(d[10]),w=(r(d[11]),r(d[12]),r(d[13]),r(d[14]),r(d[15]),r(d[16]),r(d[17])),f=r(d[18]);const T={root:"r1awnid5",viewTransition_native:"v1oc6b3k",viewTransition:"v7e8swd",viewTransitionContainer:"v1d1mri8",viewTransition_contextualGrow:"vlugpmm",viewTransition_slideInAndFade:"vgnbcm1",viewTransition_slideInFromEdge:"v1agkal2",viewTransition_slideUpFromBottom:"vqw89vp"}}),"3ba102",["ba7a76","07aa1f","ea4b89","b67917","4786a8","e086eb","83da1f","64bb33","8a711f","c235f8","df7672","cc5217","63fa06","5bf8dc","74aca7","958172","929c43","0e2830","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionNew=function({group:t}){const w=(0,l.useCx)(),f=(0,u.useSignal)(t.imagePair.new),y=(0,u.useSignal)(null),{portalState:k}=c.MagicTransitionState.instance;let q='';const{ref:S}=(0,o.useElementSize)({mode:'callback-only',onSizeChanged:({width:t,height:n})=>{f.value&&(t>0||n>0)&&(f.value.ready.value=!0)},skip:!f.value||f.value.ready.value});if(f.value?.live&&y.value&&(k.value.readyForPortal.value&&(0,n().batch)((()=>{t.imagePair.new.value&&(t.imagePair.new.value.mounted=!0,t.imagePair.new.value.container=y.value)})),k.value.portalComplete.value)){const t=y.value?.querySelector('[view-transition-element]');t?q=`-${getComputedStyle(t).paddingTop}`:c.MagicTransitionState.instance.stage.value.step===_.ViewTransitionStage.CreateAnimations&&(f.value.live=!1)}const h=(0,v.readyToApply)(t,'new');return(0,s.jsx)("div",{ref:t=>{(0,v.attachTransitionElement)({element:t,setRoot:S,transitionElement:f}),y.value=t},className:w(p.container,h&&'view-transition-new'),style:{'--view-transition_new-top':q},...h,children:!f.value?.live&&f.value?.element})};t(r(d[1])),r(d[2]);function n(){const t=r(d[3]);return n=function(){return t},t}var l=r(d[4]),o=r(d[5]),u=r(d[6]),_=r(d[7]),c=r(d[8]),v=r(d[9]),s=(r(d[10]),r(d[11]));const p={container:"csra6u8 atm_e2_1wugsn5 atm_fq_idpfg4 atm_jd_1lh6wy9 atm_mk_stnw88 atm_tk_idpfg4 atm_vy_1osqo2v atm_uoiimy_o3fak9 atm_tk_13nbyhl atm_uoiimy_15vqwwr_k0svna atm_fq_idpfg4_1gcqmc9 atm_tk_idpfg4_1gcqmc9 atm_gi_idpfg4_1gcqmc9 atm_v1_idpfg4_1gcqmc9 atm_k4_kb7nvz_1gcqmc9 atm_am_kb7nvz_1gcqmc9"}}),"63fa06",["ba7a76","07aa1f","ea4b89","a954a0","4786a8","c376e0","265637","64bb33","83da1f","1bd331","e9cc00","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default,n=r(d[1]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.TransitionLayer=void 0;var o=n(r(d[2])),l=(r(d[3]),r(d[4])),s=r(d[5]),_=r(d[6]),u=r(d[7]),c=t(r(d[8])),y=r(d[9]),v=r(d[10]),f=r(d[11]),p=r(d[12]),w=r(d[13]);const b={globalTopLayer:"g5l85gq atm_1wn1q82_12kyp0n atm_nnoydm_glywfm_axyloy atm_ks_xxm5fq_sd5wtw atm_mj_1ylw5n8_sd5wtw atm_vl_o0x12k_sd5wtw atm_nnoydm_glywfm_115h329 atm_qv_1cxm4tl__15gpmni atm_er_ikpmwb__15gpmni atm_ew_glywfm__15gpmni",transitionLayer:"t12eeqg1 atm_8w_1bu657g atm_f3_idpfg4 atm_mj_1apkgb0 atm_mk_10saobi atm_vb_glywfm atm_wq_115503r"};e.TransitionLayer=(0,o.memo)((function(){const t=(0,s.useCx)(),{anyActive:n,debugging:T,instance:x}=v.MagicTransitionState,[S,k]=(0,o.useState)(null),h=!c.default.getBootstrap('enable_global_view_transition_polyfill');null===S&&k((0,u.isWebSafari)()),null===l.motionPreference.system.peek()&&((0,l.initialize)(),(async function(){await _.scheduler.yield(),b.globalTopLayer.split(' ').forEach((t=>document.documentElement.classList.toggle(t,!0)))})(),v.MagicTransitionState.polyfill.disableNative.value=c.default.getBootstrap('disable_native_view_transitions')),v.startReactTransition.peek()!==o.startTransition&&(v.startReactTransition.value=o.startTransition),v.ScrollDriven.ready.value||v.ScrollDriven.install();const L=(0,y.useComputed)((()=>{if(!(T.enabled.value&&n.value))return!1;switch(x.stage.value.step){case f.ViewTransitionStage.Idle:case f.ViewTransitionStage.Complete:return!1;default:return!0}})),P={'--transition-layer_pointer-events':L.value?'auto':'none','--view-transition_forced-blend-mode':S?'normal':void 0};return(0,y.useSignalEffect)((()=>{const t=l.motionPreference.user.value,n=l.motionPreference.system.value;return n&&'no-motion'===t&&document.documentElement.style.setProperty('--reduced-motion_duration','150ms'),n&&'no-animation'===t&&document.documentElement.style.setProperty('--reduced-motion_duration','0.00000000001s'),()=>{document.documentElement.style.removeProperty('--reduced-motion_duration')}})),(0,w.jsx)(w.Fragment,{children:h&&(0,w.jsx)("div",{className:t(b.transitionLayer),"data-transition-layer":!0,"data-testid":"transition-layer","aria-hidden":!0,style:P,inert:L.value?void 0:'true',children:(0,w.jsx)(p.ViewTransition,{})})})}))}),"6b4e79",["ba7a76","45f788","07aa1f","ea4b89","daa5d1","4786a8","a2c93f","e9b7bf","c235f8","e086eb","83da1f","64bb33","3ba102","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";var s=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.useResizeObserverPolyfill=void 0,e.useWaitForResizeObserverPolyfill=function(){return{waitForResizeObserver:(0,u.useEvent)((async()=>!('ResizeObserver'in window)&&(window.ResizeObserver=await o(),!0)))}};var n=s(r(d[1])),t=r(d[2]),u=r(d[3]);async function o(){return(await r(d[5])(d[4]).then(n.default)).default}let l=!1;e.useResizeObserverPolyfill=()=>{const[s,n]=(0,t.useState)(!!l&&'ResizeObserver'in window),u=(0,t.useRef)(!1);return s||(l=!0,'ResizeObserver'in window?n(!0):(async function(){u.current||(u.current=!0,window.ResizeObserver=await o(),n(!0))})()),s}}),"7f17e4",["ba7a76","45f788","07aa1f","f4e9c4","bf224d","057569"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useNextSignalValue=function(){const n=(0,t.useRef)(new Set),u=(0,t.useRef)(!1),c=(0,t.useCallback)(((t,c,o)=>u.current||o?.aborted?Promise.reject(new Error('Component has unmounted')):new Promise((u=>{const s=t.subscribe((t=>{if(!c||c(t)){try{s?.()}catch{}u(t),n.current.delete(s)}}));o?.addEventListener('abort',(()=>{try{s?.()}catch{}u(null)})),n.current.add(s)}))),[]);return(0,t.useEffect)((()=>{const t=n.current;return()=>{u.current=!0,t.forEach((t=>t())),t.clear()}}),[]),{waitForNextValue:c}};var t=r(d[0])}),"8994c5",["07aa1f"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({shouldPolyfill:o=!0,startTransitionCb:l}){const{polyfill:c,ready:u,instance:v}=n.MagicTransitionState,{disableNative:p}=n.MagicTransitionState.polyfill,{supportsNative:f}=n.MagicTransitionState.polyfill,{style:y,className:T}=n.MagicTransitionState.instance;(0,t.useSignalEffect)((()=>{const t=!p.value&&f.value;document.documentElement.classList.toggle('dir',t),document.documentElement.classList.toggle('native',t);const n=Array.from(T.value||[]);n.forEach((t=>{t.split(' ').forEach((t=>document.documentElement.classList.toggle(t,!0)))}));const s={...y.value||{}};return Object.keys(s).forEach((t=>{document.documentElement.style.setProperty(t,`${s[t]}`)})),()=>{n.forEach((t=>{document.documentElement.classList.remove(...t.split(' '))})),Object.keys(s).forEach((t=>{document.documentElement.style.removeProperty(t)}))}}));const w=t=>{const{activeViewTransition:o,polyfill:c}=n.MagicTransitionState,u='object'==typeof t,p=u?t.update:t;if(u&&c.supportsNative.peek()){const{classNames:n,enableHistory:o,style:l}=t;(0,s.configure)({className:n,enableHistory:o,style:l})}if(c.supportsNative.peek()&&!c.disableNative.peek()){const t=c.startViewTransition.value((async()=>{let t;return l?l((()=>{t=p?.()})):t=p?.(),await t,n.MagicTransitionState.middleware.forEach((t=>{t.onTransitionDOMUpdated&&v.domUpdateCallbacks.add(t.onTransitionDOMUpdated)})),await v.wait(),t}));return t.finished.then((async()=>{E(),o.value=null})),o.value=t,t}if(!c.supportsNative.peek()){const t={finished:Promise.resolve(),ready:Promise.resolve(),updateCallbackDone:Promise.resolve(),skipTransition:()=>{}};return p?.(),t}return{}};if(!o)return;if(!c.filled.peek()){const t='startViewTransition'in document&&null!==document.startViewTransition;t&&(c.startViewTransition.value=document.startViewTransition.bind(document)),document.startViewTransition=w,c.supportsNative.value=t,c.filled.value=!0,n.MagicTransitionState.native.value=t&&!c.disableNative.value,u.peek()||requestAnimationFrame((()=>{u.value=!0}))}async function E(){await new Promise((t=>requestAnimationFrame((()=>setTimeout(t,0))))),v.transitionGroups.value=new Map,n.MagicTransitionState.anyActive.value=!1,n.MagicTransitionState.middleware.forEach((t=>t.onTransitionEnd?.())),v.active.value=!1,v.className.value=null,v.style.value=null,v.scope.value=null}};var t=r(d[0]),n=r(d[1]),s=r(d[2])}),"8a711f",["250cdf","83da1f","c32f72"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RootStyleSync=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]),o=r(d[3]);e.RootStyleSync=(0,t.memo)((function({viewTransition:t}){const c=(0,n.useComputed)((()=>{if(s.MagicTransitionState.native.value)return!1;const{step:n}=t.stage.value;switch(n){case o.ViewTransitionStage.FreezeScreen:case o.ViewTransitionStage.DOMUpdate:case o.ViewTransitionStage.CaptureNew:case o.ViewTransitionStage.StartAnimations:case o.ViewTransitionStage.CreateAnimations:case o.ViewTransitionStage.Complete:return!0;default:return!1}})),u=(0,n.useComputed)((()=>{if(s.MagicTransitionState.native.value)return!1;const{step:n}=t.stage.value;switch(n){case o.ViewTransitionStage.CaptureOld:case o.ViewTransitionStage.FreezeScreen:case o.ViewTransitionStage.DOMUpdate:case o.ViewTransitionStage.CaptureNew:case o.ViewTransitionStage.StartAnimations:case o.ViewTransitionStage.CreateAnimations:return!0;default:return!1}}));return(0,n.useSignalEffect)((()=>{const n=t.scope.value||document.body,{style:o}=n,l=c.value;o.setProperty('--view-transition_visibility',l?'hidden':'visible'),o.setProperty('--view-transition_pointer-events',l?'none':'auto'),o.setProperty('--view-transition_overflow',l?'hidden':'visible'),s.MagicTransitionState.native.value||document.documentElement.classList.toggle('view-transition',u.value)})),null}))}),"a94de2",["07aa1f","265637","83da1f","64bb33"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.useOnResize=function({skip:t,element:l,onlyWhen:h,onResize:f}){const{waitForResizeObserver:v}=(0,o.useWaitForResizeObserverPolyfill)(),{scheduler:b}=(0,u.usePostTaskScheduler)(),R=(0,n.useRef)(null),p=(0,n.useRef)(null),z=(0,n.useRef)(null),w=(0,n.useRef)(null),_=(0,c.useEvent)((t=>{let n,u;if(t[0].borderBoxSize?.length){const{blockSize:s,inlineSize:c}=t[0].borderBoxSize[0];u=s,n=c}else u=t[0].contentRect.height,n=t[0].contentRect.width;u!==R.current&&(z.current=R.current,R.current=u),n!==p.current&&(w.current=p.current,p.current=n),h&&!h({entries:t,height:u,previousHeight:z.current,previousWidth:w.current,width:n})||(s.default.getBootstrap('resizeobserver_no_raf_boundary')?f({entries:t,previousHeight:z.current,previousWidth:w.current,width:n,height:u}):b.requestAnimationFrame((()=>{f({entries:t,previousHeight:z.current,previousWidth:w.current,width:n,height:u})})))})),O=(0,n.useRef)(null),k=(0,n.useRef)(l),S=(0,n.useRef)(l?[{element:l}]:[]),W=(0,n.useCallback)(((t,n)=>{O.current?O.current?.observe(t,n):S.current.push({element:t,options:n})}),[]),y=(0,n.useCallback)((t=>{O.current?.unobserve(t)}),[]);k.current!==l&&(k.current&&y(k.current),l&&(W(l),k.current=l));const B=(0,n.useRef)(!1);return(0,n.useEffect)((()=>{if(!t){if(!B.current){if(!('ResizeObserver'in window))return void v().then((()=>{B.current=!0,n()}));B.current=!0}return n(),()=>O.current?.disconnect()}function n(){O.current=new ResizeObserver(_),S.current.forEach((({element:t,options:n})=>{W(t,n)})),S.current=[]}}),[t,B,_,W,v]),{observe:W,unobserve:y}};var n=r(d[1]),u=r(d[2]),s=t(r(d[3])),c=r(d[4]),o=r(d[5])}),"aac0d2",["ba7a76","07aa1f","53bb4a","c235f8","f4e9c4","7f17e4"]);
__d((function(g,r,i,a,m,e,d){
/**
   * @license React
   * react-jsx-dev-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
'use strict';var t=Symbol.for("react.fragment");e.Fragment=t,e.jsxDEV=void 0}),"b1e39b",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useElementSize=function(l){const{element:s,monitor:c,skip:h,mode:o,onSizeChanged:f,threshold:v=5}=l||{},b=(0,n.useRef)(h),p=(0,n.useRef)(null),k=(0,n.useRef)(null),w=(0,n.useCallback)((n=>{k.current=n}),[]),[R,S]=(0,n.useState)({height:null,width:null,entries:[],previousHeight:null,previousWidth:null,target:null}),y=(0,t.useSignal)({height:null,width:null,entries:[],previousHeight:null,previousWidth:null,target:null}),{observe:z,unobserve:W}=(0,u.useOnResize)({skip:h,onlyWhen:({height:n,previousHeight:t,previousWidth:u,width:l})=>{const s=null===t||Math.abs(n-t)>v,h=null===u||Math.abs(l-u)>v;return'height'===c?s:'width'===c?h:h||s},onResize:n=>{const t={...n,target:p.current};switch(o){case'callback-only':f?.(t);break;case'signal':y.value=t;break;default:S(t),f?.(t)}}}),_=(0,n.useCallback)(((n,t)=>{p.current!==n&&(p.current&&W(p.current),p.current=n,n&&z(n,t))}),[z,W]);(0,t.useSignalEffect)((()=>{s&&_(s.value)})),b.current!==h&&(b.current=h,h?(k.current=p.current,_(null)):(_(k.current),k.current=null));if('callback-only'===o)return{ref:_};if('signal'===o)return{ref:_,dimensions:y};return{...R,ref:h?w:_}};var n=r(d[0]),t=r(d[1]),u=r(d[2])}),"c376e0",["07aa1f","e086eb","aac0d2"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.StaticTransitionElement=function({className:t,content:_,inert:c}){const l=(0,n.useCx)();return(0,s.jsx)("div",{"data-static-element-wrapper":!0,className:l(c&&o,t),dangerouslySetInnerHTML:{__html:_||''},style:c?void 0:{width:'100%'}})};t(r(d[1])),r(d[2]);var n=r(d[3]),s=r(d[4]);const o="wy88p0g atm_9s_1txwivl atm_e2_1osqo2v atm_vy_1osqo2v"}),"c850f3",["ba7a76","07aa1f","ea4b89","4786a8","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionOld=function({group:t}){const v=(0,_.useCx)(),p=(0,l.useSignal)(t.imagePair.old),y=(0,n.useRef)(null),{stage:q}=c.MagicTransitionState.instance,{step:h}=q.value,{ref:w}=(0,s.useElementSize)({mode:'callback-only',onSizeChanged:({width:t,height:n})=>{(t>0||n>0)&&(p.value.ready.value=!0)},skip:p.value.ready.value}),C=(0,o.readyToApply)(t,'old'),k=!!y.current?.querySelector('[data-scrollable="true"]');return(0,u.jsx)("div",{ref:t=>{y.current=t,(0,o.attachTransitionElement)({element:t,setRoot:w,transitionElement:p})},className:v(f.container,C&&'view-transition-old',k&&'scrollContent'),style:{top:(()=>{if('FreezeScreen'!==h&&'DOMUpdate'!==h&&'CaptureNew'!==h)return 0;if(y.current&&y.current.firstChild&&y.current.firstChild.firstChild){const t=y.current.firstChild.firstChild,{y:n}=t.getBoundingClientRect();return p.value.dimensions.y-n+"px"}})()},...C,children:p.value.element})};var n=t(r(d[1])),_=(r(d[2]),r(d[3])),s=r(d[4]),l=r(d[5]),c=r(d[6]),o=(r(d[7]),r(d[8])),u=r(d[9]);const f={container:"cycesm atm_e2_1wugsn5 atm_fq_idpfg4 atm_jd_1lh6wy9 atm_mk_stnw88 atm_tk_idpfg4 atm_vy_1osqo2v atm_uoiimy_15vqwwr_k0svna atm_fq_idpfg4_1gcqmc9 atm_tk_idpfg4_1gcqmc9 atm_gi_idpfg4_1gcqmc9 atm_v1_idpfg4_1gcqmc9 atm_k4_kb7nvz_1gcqmc9 atm_am_kb7nvz_1gcqmc9 atm_e2_1osqo2v_2bsxw8 atm_j6_t94yts_2bsxw8 atm_e2_1osqo2v_1nidq11"}}),"cc5217",["45f788","07aa1f","ea4b89","4786a8","c376e0","265637","83da1f","e9cc00","1bd331","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]),n=r(d[1]);const o='move',s=t=>{if(!t)return'';let s='';const{startX:f,startY:v,endX:w,endY:_}=t,h=new Map;return(0,n.setIfDefined)('--view-transition-move-effect_from-x',f,h),(0,n.setIfDefined)('--view-transition-move-effect_from-y',v,h),(0,n.setIfDefined)('--view-transition-move-effect_to-x',w,h),(0,n.setIfDefined)('--view-transition-move-effect_to-y',_,h),(0,n.setCommonOptions)(o,t,h),h.forEach(((t,n)=>{s+=`${n}: ${t};`})),s},f=t.cssFragment`
  @keyframes move {
    from {
      height: var(--view-transition-group-old_height);
      width: var(--view-transition-group-old_width);
      transform: translate(
        var(--view-transition-move-effect_from-x, 0),
        var(--view-transition-move-effect_from-y, 0)
      );
    }

    to {
      height: var(--view-transition-group-new_height);
      width: var(--view-transition-group-new_width);
      transform: translate(var(--view-transition_to-x, 0), var(--view-transition_to-y, 0));
    }
  }
`,v={name:o,apply:n=>t.cssFragment`
      /* normal blending to allow new view to
    sit on top & hide old view */
      --view-transition_mix-blend-mode: normal;

      ${f}
      ${s(n)}
      animation: ${v.animation};
    `,animation:(0,n.makeAnimationDefaults)(o)}}),"d79a65",["4786a8","d3ae23"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.makeVariablesForDimensions=function(t,o){return{[`--${t}_bottom`]:`${o.bottom}px`,[`--${t}_height`]:`${o.height}px`,[`--${t}_left`]:`${o.left}px`,[`--${t}_right`]:`${o.right}px`,[`--${t}_top`]:`${o.top}px`,[`--${t}_width`]:`${o.width}px`}}}),"d7d648",[]);
__d((function(g,r,i,a,m,e,d){"use strict";var n=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionGroup=function({group:n}){const _=(0,t.useCx)();let p={};const c=(0,o.useSignal)(n.transition.stage);null!==n.imagePair.old.value&&(p={...p,'--view-transition-group_default-z-index':`${n.order}`,...(0,l.makeVariablesForDimensions)('view-transition-group-old',n.imagePair.old.value.dimensions)});null!==n.imagePair.new.value&&(p={...p,'--view-transition-group_default-z-index':`${n.order}`,...(0,l.makeVariablesForDimensions)('view-transition-group-new',n.imagePair.new.value.dimensions)});if(null!==n.imagePair.new.value&&null!==n.imagePair.old.value){const t=n.imagePair.old.value.dimensions,o=n.imagePair.new.value.dimensions;p={...p,'--view-transition_to-x':o.left-t.left+"px",'--view-transition_to-y':o.top-t.top+"px"}}const f=(0,o.useComputed)((()=>{switch(c.value.step){case s.ViewTransitionStage.CreateAnimations:case s.ViewTransitionStage.StartAnimations:case s.ViewTransitionStage.Complete:return!0;default:return!1}}));return(0,v.jsx)("div",{className:_(w.viewTransitionGroup,f.value&&w.viewTransitionGroup_ready,'view-transition-group'),"view-transition-group":n.name,style:p,children:(0,v.jsx)(u.ViewTransitionImagePair,{group:n})})};n(r(d[1])),r(d[2]);var t=r(d[3]),o=r(d[4]),s=r(d[5]),u=r(d[6]),l=r(d[7]),v=(r(d[8]),r(d[9]));const w={viewTransitionGroup:"vzn3yxr atm_mk_stnw88 atm_fq_1m3yd0t atm_e2_1b79tz6 atm_tk_188z2w6 atm_vy_1x8kabd atm_wq_18yhkr9",viewTransitionGroup_ready:"v1gapt2j atm_1wocbx7_ewfl5b atm_kmfq6o_4jg895 atm_p_1ky7zha"}}),"df7672",["ba7a76","07aa1f","ea4b89","4786a8","265637","64bb33","e87ed7","d7d648","d79a65","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";function n(){const t=r(d[0]);return n=function(){return t},t}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"batch",{enumerable:!0,get:function(){return n().batch}}),Object.defineProperty(e,"computed",{enumerable:!0,get:function(){return n().computed}}),Object.defineProperty(e,"effect",{enumerable:!0,get:function(){return n().effect}}),Object.defineProperty(e,"signal",{enumerable:!0,get:function(){return n().signal}}),Object.defineProperty(e,"useComputed",{enumerable:!0,get:function(){return t.useComputed}}),Object.defineProperty(e,"useSignal",{enumerable:!0,get:function(){return t.useSignal}}),Object.defineProperty(e,"useSignalEffect",{enumerable:!0,get:function(){return t.useSignalEffect}}),Object.defineProperty(e,"useSignalToRef",{enumerable:!0,get:function(){return u.useSignalToRef}}),Object.defineProperty(e,"useSignals",{enumerable:!0,get:function(){return t.useSignals}});var t=r(d[1]),u=r(d[2])}),"e086eb",["a954a0","250cdf","2637d5"]);
__d((function(g,r,i,a,m,e,d){"use strict";var n=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionImagePair=function({group:n}){const c=(0,t.useCx)(),w=(0,s.useSignal)(n.imagePair.old),_=(0,s.useSignal)(n.imagePair.new);return(0,l.jsxs)("div",{"view-transition-image-pair":n.name,className:c(v.viewTransitionImagePair,'view-transition-image-pair'),children:[null!==w.value&&(0,l.jsx)(u.ViewTransitionOld,{group:n}),null!==_.value&&(0,l.jsx)(o.ViewTransitionNew,{group:n})]})};n(r(d[1])),r(d[2]);var t=r(d[3]),s=r(d[4]),o=r(d[5]),u=r(d[6]),l=r(d[7]);const v={viewTransitionImagePair:"vcfxpj2 atm_fb_1cl4t0h atm_mk_stnw88 atm_f3_idpfg4"}}),"e87ed7",["ba7a76","07aa1f","ea4b89","4786a8","265637","63fa06","cc5217","b8c07d"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/magic-transitions/TransitionLayer.ad738cae36.js.map