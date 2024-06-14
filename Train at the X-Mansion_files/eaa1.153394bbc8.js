__d((function(g,r,i,a,m,e,d){"use strict";var o=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"WrappedPlaceholder",{enumerable:!0,get:function(){return p.DefaultPlaceholder}}),e.default=void 0,Object.defineProperty(e,"normalizeLoader",{enumerable:!0,get:function(){return s.normalizeLoader}}),Object.defineProperty(e,"renderNull",{enumerable:!0,get:function(){return p.renderNull}});var n=o(r(d[1])),t=r(d[2]),l=r(d[3]),s=r(d[4]),p=r(d[5]),u=r(d[6]);class h extends n.default.PureComponent{constructor(o,n){super(o),this.promise=void 0,this.promise=null,this.state={Component:o.loader.value||null},o.loadReady&&(0,t.collectAsyncChunks)(o.loader,n)}componentDidMount(){const{loadReady:o}=this.props;o&&this.loadComponent()}UNSAFE_componentWillReceiveProps(o){const{loadReady:n}=this.props;!n&&o.loadReady&&this.loadComponent()}componentWillUnmount(){this.promise=null}loadComponent(){const{loader:o,onComponentFinishLoading:n}=this.props;this.state.Component?this.props.onComponentFinishLoading():this.promise=o().then(l.nextTask).then((o=>{this.promise&&this.setState({Component:o},n)}))}render(){const{Component:o}=this.state,{renderPlaceholder:n,placeholderHeight:t,loader:l,onComponentFinishLoading:s,loadReady:h,...c}=this.props;return o?(0,u.jsx)(o,{...c}):n?n(this.props):(0,u.jsx)(p.DefaultPlaceholder,{height:t})}}e.default=h,h.contextTypes={...t.asyncChunksContextTypes},h.defaultProps=void 0,h.defaultProps={onComponentFinishLoading(){},placeholderHeight:null,renderPlaceholder:null,loadReady:!0}}),"018c3b",["ba7a76","07aa1f","f35aee","0ad034","09d809","b96ee5","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={usePrefetch:!0,useOrCreateNiobeMinimalistClient:!0,useMinimalistPreloadedQuery:!0,useMinimalistClientSideQuery:!0,useMinimalistMutation:!0,useMinimalistInvalidateQuery:!0,useNiobeMinimalistClient:!0,useTriggeredQuery:!0,usePrefetchQuery:!0,useClientSideRestQuery:!0,usePreloadedRestQuery:!0,useSubscription:!0,combinePrepares:!0};function t(){const n=r(d[0]);return t=function(){return n},n}function u(){const n=r(d[1]);return u=function(){return n},n}function o(){const n=r(d[2]);return o=function(){return n},n}function c(){const n=r(d[3]);return c=function(){return n},n}function s(){const n=r(d[4]);return s=function(){return n},n}function f(){const n=r(d[5]);return f=function(){return n},n}function l(){const n=r(d[6]);return l=function(){return n},n}function b(){const n=r(d[7]);return b=function(){return n},n}function y(){const n=r(d[8]);return y=function(){return n},n}function P(){const n=r(d[9]);return P=function(){return n},n}function p(){const n=r(d[10]);return p=function(){return n},n}function M(){const n=r(d[11]);return M=function(){return n},n}Object.defineProperty(e,"combinePrepares",{enumerable:!0,get:function(){return M().combinePrepares}}),Object.defineProperty(e,"useClientSideRestQuery",{enumerable:!0,get:function(){return y().useClientSideRestQuery}}),Object.defineProperty(e,"useMinimalistClientSideQuery",{enumerable:!0,get:function(){return o().useMinimalistClientSideQuery}}),Object.defineProperty(e,"useMinimalistInvalidateQuery",{enumerable:!0,get:function(){return s().useMinimalistInvalidateQuery}}),Object.defineProperty(e,"useMinimalistMutation",{enumerable:!0,get:function(){return c().useMinimalistMutation}}),Object.defineProperty(e,"useMinimalistPreloadedQuery",{enumerable:!0,get:function(){return u().useMinimalistPreloadedQuery}}),Object.defineProperty(e,"useNiobeMinimalistClient",{enumerable:!0,get:function(){return f().useNiobeMinimalistClient}}),Object.defineProperty(e,"useOrCreateNiobeMinimalistClient",{enumerable:!0,get:function(){return t().useOrCreateNiobeMinimalistClient}}),Object.defineProperty(e,"usePrefetch",{enumerable:!0,get:function(){return t().usePrefetch}}),Object.defineProperty(e,"usePrefetchQuery",{enumerable:!0,get:function(){return b().usePrefetchQuery}}),Object.defineProperty(e,"usePreloadedRestQuery",{enumerable:!0,get:function(){return P().usePreloadedRestQuery}}),Object.defineProperty(e,"useSubscription",{enumerable:!0,get:function(){return p().useSubscription}}),Object.defineProperty(e,"useTriggeredQuery",{enumerable:!0,get:function(){return l().useTriggeredQuery}});var O=r(d[12]);Object.keys(O).forEach((function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(n,t)||t in e&&e[t]===O[t]||Object.defineProperty(e,t,{enumerable:!0,get:function(){return O[t]}}))}))}),"068abc",["822ad4","2f1620","28e971","5036d6","9cc6b5","81f188","c6e4ec","e4bd41","c9917c","ffded6","839c7b","8a2d0a","436eb1"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=t(r(d[1]));e.default=u.default.createContext({})}),"179d2f",["ba7a76","07aa1f"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,{taskSignal:n,skip:c=!1}={}){const v=(0,l.useSignal)(t.value??null),{scheduler:o}=(0,s.usePostTaskScheduler)({signal:n});return(0,u.useEffect)((()=>{v.peek()||(null==t.value?c||t().then((u=>{o.postTask((()=>{v.value=u,t.value=u}))})):v.value=t.value)}),[t,v,o,c]),v};var u=r(d[0]),l=r(d[1]),s=r(d[2])}),"1b491d",["07aa1f","265637","53bb4a"]);
__d((function(g,r,i,a,m,e,d){"use strict";function n(){const t=r(d[0]);return n=function(){return t},t}Object.defineProperty(e,"__esModule",{value:!0}),e.useMinimalistClientSideQuery=function(t,u){return(0,n().useNiobeMinimalistClient)().useClientSideQuery({query:t,...u})}}),"28e971",["81f188"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(u,n=!0){const[c,o]=(0,t.useState)(!1);!c&&n&&(o(!0),u())};var t=r(d[0])}),"29f7c3",["07aa1f"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useAppRoutes=function(){return(0,t.useContext)(u.AppRoutesContext)};var t=r(d[0]),u=r(d[1])}),"2c12de",["07aa1f","8a5cbd"]);
__d((function(g,r,i,a,m,e,d){"use strict";function n(){const t=r(d[0]);return n=function(){return t},t}function t(){const n=r(d[1]);return t=function(){return n},n}function o(){const n=r(d[2]);return o=function(){return n},n}Object.defineProperty(e,"__esModule",{value:!0}),e.useMinimalistPreloadedQuery=function({queryRef:u,onCompleted:c,onError:s}){u&&u.promise||(0,n().throwNiobeError)((0,n().invalidQueryRefError)(u));const f=(0,o().useNiobeMinimalistClient)().usePreloadedQuery(u,c,s);return(0,t().usePreventCaching)(f?.error),f}}),"2f1620",["8e002d","52254f","81f188"]);
__d((function(g,r,i,a,m,e,d){}),"324de3",[]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.cookiesPreferencesContextSheetLoader=e.cookiesBannerContainerLoader=void 0;var o=t(r(d[1])),n=r(d[2]);e.cookiesPreferencesContextSheetLoader=Object.assign((0,n.normalizeLoader)((()=>r(d[4])(d[3]).then(o.default))),{prefetch:()=>r(d[4]).prefetch(d[3])}),e.cookiesBannerContainerLoader=Object.assign((0,n.normalizeLoader)((()=>r(d[4])(d[5]).then(o.default))),{prefetch:()=>r(d[4]).prefetch(d[5])}),Object.assign((0,n.normalizeLoader)((()=>r(d[4])(d[6]).then(o.default))),{prefetch:()=>r(d[4]).prefetch(d[6])})}),"4031e0",["ba7a76","45f788","09d809","ee8c0c","057569","7413e4","ce6959"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t={NetworkStatus:!0};Object.defineProperty(e,"NetworkStatus",{enumerable:!0,get:function(){return u().NetworkStatus}});var n=r(d[0]);function u(){const t=r(d[1]);return u=function(){return t},t}Object.keys(n).forEach((function(u){"default"!==u&&"__esModule"!==u&&(Object.prototype.hasOwnProperty.call(t,u)||u in e&&e[u]===n[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return n[u]}}))}))}),"436eb1",["324de3","5455a5"]);
__d((function(g,r,i,a,m,e,d){"use strict";var o=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,u.jsx)(n.default,{loader:t.cookiesBannerContainerLoader,forceShow:!0})};o(r(d[1]));var t=r(d[2]),n=o(r(d[3])),u=r(d[4])}),"465c9c",["ba7a76","07aa1f","4031e0","b3dc21","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useSyncRef=function(t){const u=(0,n.useRef)(t);return u.current=t,u};var n=r(d[0])}),"4d5562",["07aa1f"]);
__d((function(g,r,i,a,m,e,d){"use strict";function t(){const n=r(d[0]);return t=function(){return n},n}Object.defineProperty(e,"__esModule",{value:!0}),e.useMinimalistMutation=function(n,u){return(0,t().useNiobeMinimalistClient)().useMutation(n,u)}}),"5036d6",["81f188"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.usePreventCaching=function(o){const{preventCaching:s}=(0,t.useContext)(n.HyperloopProvidedContext);(o?.graphQLErrors?.length||o?.message)&&s?.()};var t=r(d[0]),n=r(d[1])}),"52254f",["07aa1f","a78e15"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.usePostTaskScheduler=function({controller:n,delay:y,event:k,name:f,priority:p,signal:b,strategy:T="manual"}={}){const v=(0,t.useRef)(n),$=!!f,h=(0,t.useRef)(''),w=(0,t.useRef)({runningTasks:new Map}),C=(0,o.useSyncRef)({delay:y,event:k,priority:p,signal:b}),E=(0,o.useSyncRef)(p),R=(0,o.useSyncRef)(T);h.current||(h.current=`postTask:${f}`);const S=(0,c.useDebugLogger)(h.current,l,$),A=(0,t.useCallback)((()=>{v.current=void 0}),[]),L=(0,t.useCallback)(((t,n)=>{const s=C.current?.signal||v.current?.signal;let c;function u(){window.clearTimeout(c)}return s?.aborted?0:(c=window.setTimeout((()=>{s?.removeEventListener('abort',u),t()}),n),s?.addEventListener('abort',u),c)}),[]),P=(0,t.useCallback)((t=>{const n=C.current?.signal||v.current?.signal;function c(){n?.removeEventListener('abort',u),t()}function u(){n?.removeEventListener('abort',u),s.raf.cancel(c)}return n?.aborted?()=>{}:((0,s.raf)(c),n?.addEventListener('abort',u),u)}),[]),_=(0,t.useCallback)((()=>{const t=C.current?.signal||v.current?.signal;t&&S((()=>[`Canceled ${w.current.runningTasks.get(t)?.size} tasks associated with current signal.`,{options:C.current,signal:t,tasks:!!t&&Array.from(w.current.runningTasks.get(t)?.values()||[]),trace:new Error}]),(()=>w.current.runningTasks.get(t)?.size)),v.current?.abort(),'recycle'===R.current&&(v.current=void 0)}),[S,C,R]),q=(0,t.useCallback)(((t,n,s,c)=>{w.current.runningTasks.has(t)||w.current.runningTasks.set(t,new Set),w.current.runningTasks.get(t)?.add(n);const o=performance?.now();return s.then((function(){const u=performance?.now(),l=Math.round(u-o);S((()=>[`[${c?.signal?.aborted?'Canceled':'Complete'}] ${'function'==typeof n?'scheduler.postTask':'scheduler.wait'}(${c?.delay?`delay: ${c?.delay}`:''}${c?.event?`event: ${c?.event}`:''}): Priority=${c?.priority??t.priority??'user-visible'}, Time=${l}ms`,{end:u,elapsed:l,options:c,result:s,task:n,signal:t,start:o}])),w.current.runningTasks.get(t)?.delete(n)})).catch(u.exceptAbortError),s}),[S]),x=(0,o.useSyncRef)(q),z=(0,o.useSyncRef)(P),M=(0,o.useSyncRef)(L);(0,t.useEffect)((()=>{const t=w.current;return()=>{v.current?.abort(),v.current=void 0,t.runningTasks.clear()}}),[]);const j=(0,t.useRef)(null);j.current||(j.current={get requestAnimationFrame(){'manual'===R.current&&v.current||(v.current||=(0,u.createTaskController)(E.current));const t=z.current;return function(n){return S((()=>["scheduler.requestAnimationFrame()",{callback:n,signal:b}])),t(n)}},get setTimeout(){'manual'===R.current&&v.current||(v.current||=(0,u.createTaskController)(E.current));const t=M.current;return function(n,s){return S((()=>[`scheduler.setTimeout(${s}, ${b?'signal':''})`,{callback:n,duration:s}])),t(n,s)}},get postTask(){const t=x.current;return function(n,s){'manual'===R.current&&v.current||(v.current||=(0,u.createTaskController)(E.current));const c=s?.signal??v.current?.signal,o=u.scheduler.postTask(n,{...s,signal:c});return S((()=>[`scheduler.postTask(${s?.delay?`delay: ${s?.delay}`:''}${s?.event?`event: ${s?.event} }`:''}): Priority=${s?.priority??c.priority??'user-visible'}`,{controller:v.current,options:s,result:t(c,n,o,s),signal:v.current?.signal,start:performance?.now(),task:n,trace:new Error('TraceTask').stack}])),o.catch((t=>(0,u.exceptAbortError)()(t)))}},get wait(){const t=x.current;return function(n){'manual'===R.current&&v.current||(v.current||=(0,u.createTaskController)(E.current));const s=n?.signal??v.current?.signal,c=u.scheduler.wait({...n,signal:s});return S((()=>[`scheduler.wait(${n?.delay?`{ delay: ${n.delay} }`:`{ event: ${n?.event} }`}): Priority=${n?.priority??s.priority}`,{controller:v.current,options:n,queuedTask:c,result:t(s,`wait(${n?.delay??n?.event})`,c,n),signal:v.current?.signal,start:performance?.now(),trace:new Error('TraceTask').stack}])),c.catch(u.exceptAbortError)}},get yield(){return function(t){return S((()=>[`scheduler.yield(): Priority=${t?.priority??t?.signal?.priority}`])),u.scheduler.yield()}}});return{abort:_,recycle:A,scheduler:j.current,signal:v.current?.signal}};var t=r(d[0]),n=r(d[1]),s=r(d[2]),c=r(d[3]),u=r(d[4]),o=r(d[5]);s.raf.batchedUpdates=n.unstable_batchedUpdates;const l=Object.freeze({background:'pink',color:'maroon'})}),"53bb4a",["07aa1f","b67917","d27a51","f8ea9a","a2c93f","4d5562"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.NetworkStatus=void 0;e.NetworkStatus=(function(t){return t[t.loading=1]="loading",t[t.setVariables=2]="setVariables",t[t.fetchMore=3]="fetchMore",t[t.refetch=4]="refetch",t[t.poll=6]="poll",t[t.ready=7]="ready",t[t.error=8]="error",t})({})}),"5455a5",[]);
__d((function(g,r,i,a,m,e,d){"use strict";var u=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(u,c){const f=(0,t.useRef)();f.current&&(0,n.default)(c,f.current.key)||(f.current={key:c,value:u()});return f.current.value};var t=r(d[1]),n=u(r(d[2]))}),"54d92b",["ba7a76","07aa1f","3dcd9d"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.usePrefetch=function(f){const{overrideScheduler:b,usePostTaskOptions:h={strategy:'recycle'}}=f||{},{scheduler:P}=(0,u.usePostTaskScheduler)(h),C=(0,n.useRef)(new AbortController),y=(0,n.useCallback)((()=>{C.current.abort(),C.current=new AbortController}),[C]),{getMatchedRoute:A}=(0,o.useAppRoutes)(),v=(0,l().useSharedPrepareOptions)(),R=(0,p().useNiobeClients)({context:{}}),S=(0,n.useRef)(v);S.current=v;const k=(0,n.useRef)(R);k.current=R;return{prefetch:(0,n.useCallback)((function({path:n,state:o,shouldPreparePreparables:u=!0,schedulerOptions:l={priority:'background'}}){const p=new AbortController,f=new(s().MultiAbortController);async function h(){const s=A(n,{matchAll:!0});if(!s)return;if(!k.current)return;const l=(0,c().extractPrepareFromMatches)(s);if(await(0,c().loadPreparables)({preparables:l}),u){const{niobeMinimalistClient:u,niobeApolloClient:s,niobeClient:p}=k.current;await(0,c().preparePreparables)({preparables:l,prepareOptions:{...S.current,niobeClient:p,niobeApolloClient:s,loadQuery:n=>u.prefetchPreloadQuery?.bind(u)({...n,signal:b?void 0:f.signal}),preloadRestQuery:u.preloadRestQuery?.bind(u),readQuery:u.readQuery.bind(u),previousPrepareProps:null,previousLocation:null,isPrefetch:!0,location:(0,t().createLocation)(n,o)}})}}if(f.addSufficientSignal(C.current.signal),f.addSufficientSignal(p.signal),b){const n=h();return n.finished=n,n}P.postTask((()=>h()),{...l,signal:f.signal});const y=h();return y.abort=()=>p.abort(),y.finished=y,y}),[A,P,b]),abortAll:y}};var n=r(d[0]);function t(){const n=r(d[1]);return t=function(){return n},n}var o=r(d[2]),u=r(d[3]);function s(){const n=r(d[4]);return s=function(){return n},n}function c(){const n=r(d[5]);return c=function(){return n},n}function l(){const n=r(d[6]);return l=function(){return n},n}function p(){const n=r(d[7]);return p=function(){return n},n}}),"5caabc",["07aa1f","d69748","2c12de","53bb4a","871302","bbc9ed","de8b38","e7c79c"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;function n(){const o=t(r(d[1]));return n=function(){return o},o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(d[2]),s=t(r(d[3])),u=t(r(d[4]));const c={window:()=>g.window,document:()=>g.document},p={target(t,n,o){const s=t[n];if((0,u.default)(c,s))return null;if(null==s)return new Error(`Required prop \`${n}\` was not specified in \`${o}\`.`);if([Window,Document,HTMLDocument,HTMLElement].some((t=>s instanceof t||s?.constructor.name===t.name)))return null;const p=Object.prototype.toString.call(s).replace(/.*\s(.*?)]/,'$1');return new Error(`Invalid prop \`${n}\` supplied to \`${o}\`. Must be an instance of \`EventTarget\`, got \`${p}\`.`)},type:n().default.oneOf(['beforeprint','beforeunload','blur','click','error','focus','focusin','focusout','hashchange','keydown','keypress','keyup','load','message','mousedown','mouseenter','mouseleave','mousemove','mouseout','mouseover','mouseup','overscroll','pageshow','popstate','resize','scroll','scrollend','select','touchcancel','touchend','touchmove','touchstart','visibilitychange','unload','wheel']).isRequired,onEvent:n().default.func.isRequired,passive:n().default.bool,capture:n().default.bool},l={target:void 0,passive:!1,capture:!1};function v({target:t,type:n,onEvent:s,passive:p,capture:l}){if('string'==typeof t&&!(0,u.default)(c,t))throw new Error(`Unknown target "${t}" specified in EventListener"`);const v='string'==typeof t?c[t]():t;return(0,o.addEventListener)(v,n,s,{passive:p,capture:l})}class f extends s.default.Component{constructor(...t){super(...t),this.removeEventListener=void 0}componentDidMount(){this.removeEventListener=v(this.props)}componentDidUpdate(t){const{target:n,type:o,onEvent:s,passive:u,capture:c}=this.props;n===t.target&&o===t.type&&s===t.onEvent&&u===t.passive&&c===t.capture||(this.removeEventListener&&this.removeEventListener(),this.removeEventListener=v(this.props))}componentWillUnmount(){this.removeEventListener&&this.removeEventListener()}render(){return null}}e.default=f,f.propTypes=p,f.defaultProps=l}),"654ebb",["ba7a76","b56f5a","7ea00e","07aa1f","750095"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(d[0]);e.default=t.useLayoutEffect}),"68e472",["07aa1f"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useNiobeMinimalistClient=void 0;var t=r(d[0]);function n(){const t=r(d[1]);return n=function(){return t},t}function o(){const t=r(d[2]);return o=function(){return t},t}e.useNiobeMinimalistClient=()=>{const l=(0,t.useContext)(n().NiobeClientReactContext),u=l?.niobeMinimalistClient??null;return void 0===u&&(0,o().throwNiobeError)((0,o().invalidNiobeClientType)('minimalist')),null===u&&(0,o().throwNiobeError)((0,o().niobeClientNotFoundFromContext)('minimalist')),u.type&&'mock'!==u.type&&'minimalist'!==u.type&&(0,o().warnNiobeError)((0,o().mismatchingNiobeClientType)('minimalist',u.type),{sampleRate:.1}),u}}),"81f188",["07aa1f","7ab1a7","8e002d"]);
__d((function(g,r,i,a,m,e,d){"use strict";function t(){const n=r(d[0]);return t=function(){return n},n}function n(){const t=r(d[1]);return n=function(){return t},t}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useOrCreateNiobeMinimalistClient",{enumerable:!0,get:function(){return n().useOrCreateNiobeMinimalistClient}}),Object.defineProperty(e,"usePrefetch",{enumerable:!0,get:function(){return t().usePrefetch}})}),"822ad4",["5caabc","dec20b"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.useSubscription=function({subscription:t,variables:b,onNext:v,onConnectionEstablished:f,skip:p}){const _=(0,u().useNiobeMinimalistClient)(),h=(0,o.default)((()=>b),b),[y,w]=(0,n.useState)(l('subscribing',void 0,void 0)),[E,k]=(0,n.useState)('visible'),S=(0,s.default)(v),C=(0,s.default)(f);return(0,n.useEffect)((()=>{if(p)return;let n;const s=()=>{if(n&&clearTimeout(n),'hidden'===document.visibilityState){n=setTimeout((()=>k('hidden')),3e4)}else k('visible')};c.default.getBootstrap('web_niobe_websocket_visibility_disconnect')&&document.addEventListener('visibilitychange',s);const o=new AbortController;'hidden'===E&&o.abort();const u=_.subscribe({subscription:t,variables:h},o.signal);return o.signal.aborted?w((t=>l('disconnected',t.value,void 0))):w((t=>l('subscribing',t.value,void 0))),(async function(){for await(const t of u){if(o.signal.aborted)return;if('established'===t.state){w((t=>l('subscribed',t.value,void 0)));try{C.current?.()}catch(t){w((n=>l('error',n.value,t)))}}else if('message'===t.state){const n=t.data;try{S.current?.(n)}catch(t){w((n=>l('error',n.value,t)))}w((()=>l('subscribed',n,void 0)))}else'error'===t.state?w((n=>l('error',n.value,t.error))):'reconnecting'===t.state?w((t=>l('suspended',t.value,void 0))):'pending'===t.state?w((t=>l('subscribing',t.value,void 0))):'disconnected'===t.state&&w((t=>l('error',t.value,new Error('Unexpected disconnection'))))}})(),()=>{c.default.getBootstrap('web_niobe_websocket_visibility_disconnect')&&(n&&clearTimeout(n),document.removeEventListener('visibilitychange',s)),o.abort()}}),[t,h,_,p,S,E]),p?l('skipped',void 0,void 0):y};var n=r(d[1]),s=t(r(d[2])),o=t(r(d[3])),c=t(r(d[4]));function u(){const t=r(d[5]);return u=function(){return t},t}const l=(t,n,s)=>({state:t,value:n,error:s})}),"839c7b",["ba7a76","07aa1f","d18042","54d92b","c235f8","81f188"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MultiAbortController=void 0;e.MultiAbortController=class{constructor({waitTick:t=!1}={}){this.aborted=!1,this.coalescedAbortController=new AbortController,this.nonAbortedSignals=new Set,this.waitTick=void 0,this.signal=this.coalescedAbortController.signal,this.waitTick=t}addSignal(t){this.nonAbortedSignals.add(t),t.addEventListener('abort',(()=>{const o=()=>{this.nonAbortedSignals.delete(t),0===this.nonAbortedSignals.size&&(this.coalescedAbortController.abort(),this.aborted=!0)};this.waitTick?setTimeout(o,0):o()}),{signal:this.coalescedAbortController.signal})}addSufficientSignal(t){t.addEventListener('abort',(()=>{this.nonAbortedSignals.clear(),this.coalescedAbortController.abort()}),{signal:this.coalescedAbortController.signal})}}}),"871302",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.combinePrepares=function(...n){return t=>n.reduce(((n,u)=>({...n,...u(t)})),{})}}),"8a2d0a",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useMinimalistInvalidateQuery=function({query:u}){const l=(0,t().useNiobeMinimalistClient)();return{invalidate:(0,n.useCallback)((({variables:n}={})=>{l.invalidate({query:u,variables:n})}),[l,u])}};var n=r(d[0]);function t(){const n=r(d[1]);return t=function(){return n},n}}),"9cc6b5",["07aa1f","068abc"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default,u=r(d[1]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){const[t,u]=(0,n.useState)(null),s=t=>{u(('number'==typeof t?t:0)+8)},{pathname:c}=(0,o.useLocation)(),_='/'===c,h=(0,f.default)()===f.FORM_FACTOR.COMPACT,p=!_||!(!_||!h)||!(!_||!t);return(0,l.default)('footer:banner:height',(t=>{s(t)})),{readyToDisplay:p,footerHeight:t}};var n=r(d[2]),o=r(d[3]),f=u(r(d[4])),l=t(r(d[5]))}),"a67083",["ba7a76","45f788","07aa1f","1e300f","e0b071","e05d88"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,l=!1){const f=u.default.useContext(c.default);t&&!l&&(0,n.collectAsyncChunks)(t,f)};var u=t(r(d[1])),n=r(d[2]),c=t(r(d[3]))}),"a7dd33",["ba7a76","07aa1f","f35aee","179d2f"]);
__d((function(g,r,i,a,m,e,d){"use strict";var n=r(d[0]).default,t=r(d[1]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n){const t=(0,c().useOrCreateNiobeMinimalistClient)();if((0,s.default)((()=>{(0,u.airdogCount)('user_consent.unexpected.state',1,'missing:minimalist_client')}),!t),!t)return null;return(0,f.jsx)(o().NiobeClientReactContext.Provider,{value:{niobeClient:t,niobeMinimalistClient:t},children:(0,f.jsx)(l.default,{renderPlaceholder:l.renderNull,...n})})};t(r(d[2]));var u=r(d[3]),l=n(r(d[4]));function o(){const n=r(d[5]);return o=function(){return n},n}function c(){const n=r(d[6]);return c=function(){return n},n}var s=t(r(d[7])),f=r(d[8])}),"b3dc21",["45f788","ba7a76","07aa1f","3e4681","018c3b","7ab1a7","068abc","29f7c3","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){if((0,n.default)().cookies_banner_force_in)return'true'===(0,n.default)().cookies_banner_force_in;if(o.default.getBootstrap('cookies_banner_force_in'))return!0};var n=t(r(d[1])),o=t(r(d[2]))}),"b40a24",["ba7a76","a7c4ef","c235f8"]);
__d((function(g,r,i,a,m,e,d){"use strict";var n=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.DefaultPlaceholder=u,e.default=function(n){const{loader:t,onComponentFinishLoading:o,placeholderHeight:s,renderPlaceholder:h,loadReady:f=!0,...p}=n,_=h?h(p):(0,c.jsx)(u,{height:s}),{AsyncComponent:y}=(0,l.default)({loader:t,placeholder:_??void 0,skip:!f,onComponentFinishLoading:o});return(0,c.jsx)(y,{...p})},e.renderNull=function(){return null};n(r(d[1])),r(d[2]);var t=r(d[3]),o=n(r(d[4])),l=n(r(d[5])),c=r(d[6]);const s={container:"cyqdyy atm_2d_1p8m8iw atm_mk_h2mmj6"};function u({height:n=300}){const l=(0,t.useCx)();return(0,c.jsx)("div",{className:l(s.container),style:{height:n},children:(0,c.jsx)(o.default,{})})}}),"b96ee5",["ba7a76","07aa1f","ea4b89","4786a8","f18e21","c19a22","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extractPrepareFromMatches=function(o){const p=[];return o.forEach((({match:o,route:t})=>{t?.component?.prepareNiobe&&p.push({match:o,prepareNiobe:t.component.prepareNiobe,load:t.component.load,skipMofiData:t.component.skipMofiData})})),p},e.loadPreparables=function({preparables:o}){return Promise.all(o.map((({load:o})=>o?.())))},e.preparePreparables=function({preparables:o,prepareOptions:p}){return Promise.all(o.map((({match:o,prepareNiobe:t})=>Promise.resolve(t({...p,match:o})).then((o=>Promise.all(Object.values(o).map((o=>Promise.resolve(o).then((o=>o?.promise??o))))))))))}}),"bbc9ed",[]);
__d((function(g,r,i,a,m,e,d){"use strict";var n=r(d[0]).default,l=r(d[1]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({loader:n,taskSignal:l,dependenciesLoadedSignal:h,canHidePlaceholderSignal:S,placeholder:y,skip:j=!1,onComponentFinishLoading:x}){const b=(0,_.default)(n,{taskSignal:l,skip:j}),{scheduler:w}=(0,o.usePostTaskScheduler)({signal:l}),z=(0,s.useSignal)(y);(0,v.default)(n,j);const C=(0,s.useComputed)((()=>null!=b.value&&(h?.value??!0)&&(S?.value??!0))),E=(0,s.useSignal)(C.value),N=(0,c.useEvent)((()=>{E.value=!0,x?.()}));(0,s.useSignalEffect)((()=>{C.value&&!E.value&&w.setTimeout(N,500)}));const P=(0,t.useMemo)((()=>function(n){const l=(0,u.useCx)(),t=(0,s.useSignal)(z),o=(0,s.useSignal)(C),c=(0,s.useSignal)(E),v=null!=b.value&&(h?.value??1)?b.value:k;return void 0===t.value?(0,f.jsx)(v,{...n}):(0,f.jsxs)("div",{className:l(p.container),children:[(0,f.jsx)("div",{className:l(p.element),children:(0,f.jsx)(v,{...n})}),t.value&&(0,f.jsx)("div",{className:l(p.element,p.placeholder,o.value?p.ready:p.notReady),onTransitionEnd:N,children:c.value?null:t.value})]})}),[E,C,z,b,h,N]);if(j)return{AsyncComponent:k};return{AsyncComponent:P}};var t=l(r(d[2])),u=r(d[3]),s=r(d[4]),o=r(d[5]),c=r(d[6]),v=n(r(d[7])),_=n(r(d[8])),f=r(d[9]);const p={container:"c1jo210i atm_9s_11p5wf0",element:"enk25hy atm_dm_kb7nvz atm_da_kb7nvz",placeholder:"p1mkvczo atm_uc_wpoic6",notReady:"nerb90o atm_k4_kb7nvz atm_vl_ewfl5b",ready:"ri1yqzk atm_k4_idpfg4 atm_vl_15vqwwr"},k=()=>(0,f.jsx)(f.Fragment,{})}),"c19a22",["ba7a76","45f788","07aa1f","4786a8","265637","53bb4a","f4e9c4","a7dd33","1b491d","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useTriggeredQuery=function(t,l){const c=(0,u.useRef)(),s=(0,u.useRef)(),[o,f]=(0,u.useState)(null),v=(0,u.useCallback)((({variables:u})=>(c.current=null,s.current=null,new Promise(((n,t)=>{c.current=n,s.current=t,f(u)})))),[]),b=(0,n().useMinimalistClientSideQuery)(t,{...l,variables:o||void 0,skip:null===o}),{data:_,error:y,loading:k}=b;return(0,u.useEffect)((()=>{(y||_)&&(y&&s.current?s.current(y):_&&c.current&&c.current(_),c.current=null,s.current=null)}),[_,y,k]),[v,b]};var u=r(d[0]);function n(){const u=r(d[1]);return n=function(){return u},u}}),"c6e4ec",["07aa1f","28e971"]);
__d((function(g,r,i,a,m,e,d){}),"c9917c",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(u){const n=(0,t.useRef)(u);return n.current=u,n};var t=r(d[0])}),"d18042",["07aa1f"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.raf=void 0;let t=S();const n=n=>b(n,t);e.raf=n;let l=S();n.write=t=>b(t,l);let o=S();n.onStart=t=>b(t,o);let c=S();n.onFrame=t=>b(t,c);let s=S();n.onFinish=t=>b(t,s);let f=[];n.setTimeout=(t,l)=>{let o=n.now()+l,c=()=>{let t=f.findIndex((t=>t.cancel==c));~t&&f.splice(t,1),w-=~t?1:0},s={time:o,handler:t,cancel:c};return f.splice(u(o),0,s),w+=1,v(),s};let u=t=>~(~f.findIndex((n=>n.time>t))||~f.length);n.cancel=n=>{o.delete(n),c.delete(n),t.delete(n),l.delete(n),s.delete(n)},n.sync=t=>{y=!0,n.batchedUpdates(t),y=!1},n.throttle=t=>{let l;function c(){try{t(...l)}finally{l=null}}function s(...t){l=t,n.onStart(c)}return s.handler=t,s.cancel=()=>{o.delete(c),l=null},s};let h=window.requestAnimationFrame;n.use=t=>h=t,n.now='undefined'!=typeof performance?()=>performance.now():Date.now,n.batchedUpdates=t=>t(),n.catch=console.error,n.frameLoop='always',n.advance=()=>{'demand'!==n.frameLoop?console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand'):L()};let p=-1,w=0,y=!1;function b(t,n){y?(n.delete(t),t(0)):(n.add(t),v())}function v(){p<0&&(p=0,'demand'!==n.frameLoop&&h(z))}function z(){~p&&(h(z),n.batchedUpdates(L))}function L(){let h=p;p=n.now();let y=u(p);y&&(_(f.splice(0,y),(t=>t.handler())),w-=y),o.flush(),t.flush(h?Math.min(64,p-h):16.667),c.flush(),l.flush(),s.flush(),w||(p=-1)}function S(){let t=new Set,n=t;return{add(l){w+=n!=t||t.has(l)?0:1,t.add(l)},delete:l=>(w-=n==t&&t.has(l)?1:0,t.delete(l)),flush(l){n.size&&(t=new Set,w-=n.size,_(n,(n=>n(l)&&t.add(n))),w+=t.size,n=t)}}}function _(t,l){t.forEach((t=>{try{l(t)}catch(t){n.catch(t)}}))}}),"d27a51",[]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({setIsCookieBannerInitiallyNeeded:t,onSubmitConsent:f}){const{readyToDisplay:c,footerHeight:y}=(0,n.default)();if(!c)return null;return(0,s.jsx)(u.default,{loader:l.cookiesBannerContainerLoader,forceShow:(0,o.default)(),footerHeight:y,setIsCookieBannerInitiallyNeeded:t,onSubmitConsent:f})};t(r(d[1]));var n=t(r(d[2])),o=t(r(d[3])),l=r(d[4]),u=t(r(d[5])),s=r(d[6])}),"d33fab",["ba7a76","07aa1f","a67083","b40a24","4031e0","b3dc21","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"CookiesBanner",{enumerable:!0,get:function(){return n.default}});var n=t(r(d[1]));t(r(d[2]))}),"db9766",["ba7a76","d33fab","465c9c"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.useOrCreateNiobeMinimalistClient=function(){return(0,l().useMinimalistClient)({context:(0,n.useContext)(u.default)})??null};var n=r(d[1]),u=t(r(d[2]));function l(){const t=r(d[3]);return l=function(){return t},t}}),"dec20b",["ba7a76","07aa1f","179d2f","9b702c"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.usePrefetchQuery=function(t){const c=(0,u().useNiobeMinimalistClient)(),[l,f]=(0,n.useState)({client:c,data:void 0,loading:!1,networkStatus:s().NetworkStatus.loading,variables:t.variables,error:void 0}),v=(0,o.default)((()=>t),[t]),w=(0,n.useMemo)((()=>new AbortController),[v]);(0,n.useEffect)((()=>()=>{w.abort()}),[w]);const b=(0,n.useCallback)((async function(){f((t=>({...t,loading:!0,networkStatus:s().NetworkStatus.loading})));const{signal:t}=w;try{const n=await c.prefetchQuery({signal:t,...v});return f({error:void 0,...n,client:c,loading:!1,networkStatus:s().NetworkStatus.ready,variables:v.variables,data:n.data||void 0}),n}catch(t){const n=t instanceof Error?t:new Error(String(t));f({error:{name:n.name,message:n.message,networkError:n,extraInfo:{},graphQLErrors:[]},client:c,loading:!1,networkStatus:s().NetworkStatus.error,variables:v.variables,data:void 0})}}),[c,v]);return[l,b]};var n=r(d[1]),o=t(r(d[2]));function s(){const t=r(d[3]);return s=function(){return t},t}function u(){const t=r(d[4]);return u=function(){return t},t}}),"e4bd41",["ba7a76","07aa1f","54d92b","5455a5","81f188"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;t(r(d[1]));var n=r(d[2]),o=r(d[3]);e.default=(0,n.withStyles)((({dls19:t})=>({container:{marginTop:0,marginBottom:0,marginLeft:'auto',marginRight:'auto',textAlign:'center',whiteSpace:'nowrap',position:'absolute',top:'50%',left:'50%',transform:'translateX(-50%) translateY(-50%)'},dot:{width:6,height:6,marginRight:4,borderRadius:'100%',display:'inline-block',animationName:{'0%, 80%, 100%':{opacity:0},'30%, 50%':{opacity:1}},animationDuration:'0.8s',animationIterationCount:'infinite',animationTimingFunction:'linear',animationFillMode:'both',verticalAlign:'middle',backgroundColor:t.palette.hof},dot1:{animationDelay:'-0.3s'},dot2:{animationDelay:'-0.15s'}})))((function({css:t,styles:n}){return(0,o.jsxs)("div",{"data-testid":"dot-loader",...t(n.container),children:[(0,o.jsx)("div",{...t(n.dot,n.dot1)}),(0,o.jsx)("div",{...t(n.dot,n.dot2)}),(0,o.jsx)("div",{...t(n.dot)})]})}))}),"f18e21",["ba7a76","07aa1f","e0b084","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";var n=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.useDangerousEvent=void 0,e.useEvent=s;var t=r(d[1]),u=n(r(d[2]));function s(n){const s=(0,t.useRef)(null);return(0,u.default)((()=>{s.current=n})),(0,t.useCallback)(((...n)=>{const t=s.current;if(!t)throw new Error('useEvent can not be called before the first render completes. Use useCallback instead if required on the initial render.');return t(...n)}),[])}e.useDangerousEvent=s}),"f4e9c4",["ba7a76","07aa1f","68e472"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useDebugLogger=function(f,l,p=!0){const b=(0,t.useRef)(o),h=(0,t.useRef)();h.current||(h.current=(t,n)=>{b.current(t,n)});const w=(0,t.useRef)(!1);p&&!w.current&&(w.current=!0,u.push((function(){const t='object'==typeof l?(0,n.createPrefixStyle)(l.background,l.color):l,o=(0,n.createLogger)(f,t,!0);b.current=o})),c||(c=new Promise((t=>{void 0!==window.scheduler?window.scheduler.postTask(t,{priority:'background'}):setTimeout(t)})).then(s)));return h.current};var t=r(d[0]),n=r(d[1]);function o(){}o.group=()=>{},o.groupEnd=()=>{},o.table=()=>{};const u=[];let c;function s(){for(;u.length>0;){u.pop()()}c=void 0}}),"f8ea9a",["07aa1f","102445"]);
__d((function(g,r,i,a,m,e,d){}),"ffded6",[]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/eaa1.aca2ab48c0.js.map