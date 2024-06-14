__d((function(g,r,i,a,m,e,d){"use strict";var n=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({children:n,enabled:l,PopperTooltipComponent:o,...u}){return l?(0,t.jsx)(o,{...u,children:n}):null};n(r(d[1]));var t=r(d[2])}),"0a7ca2",["ba7a76","07aa1f","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default,n=r(d[1]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({className:t,style:n,availabilityDescription:x,structuredDisplayPrice:j,listingId:D}){const O=(0,s.useCx)(),P=(0,h.useOnlyOnContext)(),{hasDescriptionEvaluated:S,availabilityDescription:f}=(0,I.default)(P,x),b=(0,l.useCallback)((t=>{(0,u.deliverFreeCancellationHighlightExperiment)(),t()}),[]),C=P.isOnlyOn?S&&!f:!!j&&!f;return C||f?(0,v.jsxs)("div",{className:O(t,E.priceTopSpacing),style:n,"data-testid":"price-availability-row",children:[(0,v.jsx)(y.FadeInOut,{className:O(E.availabilityDescription),shouldShow:!!f,children:f}),j&&(0,v.jsx)(y.FadeInOut,{disabled:!P.isOnlyOn,shouldShow:C,unmountOnExited:!1,children:(0,v.jsx)(_.default,{eventData:{listing_id:D},children:(0,v.jsx)(c.default,{nestedExplanationPosition:"inline",primaryLineSize:p.DISPLAY_PRICE_LINE_SIZE,primaryLineUnitPriceFontWeight:p.DISPLAY_PRICE_UNIT_FONT_WEIGHT,secondaryLineSize:p.DISPLAY_PRICE_LINE_SIZE,children:(0,v.jsx)(o.default,{structuredDisplayPrice:j,onExplanationTriggerClick:b})})})})]}):null};var l=n(r(d[2])),s=(r(d[3]),r(d[4])),c=t(r(d[5])),o=t(r(d[6])),u=r(d[7]),_=t(r(d[8])),p=r(d[9]),y=r(d[10]),h=r(d[11]),I=t(r(d[12])),v=r(d[13]);const E={availabilityDescription:"a1djnv4w atm_mk_stnw88 atm_c8_o7aogt atm_g3_8jkm7i atm_cs_9dzvea atm_e2_8jkm7i",priceTopSpacing:"pi11895 atm_h3_lh1qj6"}}),"10724f",["ba7a76","45f788","07aa1f","ea4b89","4786a8","cb3ef9","91f476","4d0940","c0b994","6d0528","18e5b7","91d2dc","30ef5c","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({steps:t,duration:o,remainingTime:c,enabled:p=!0,monospaced:y=!1}){const{onesContainerRef:D,onesDigitRefs:C,tensContainerRef:R,tensDigitRefs:_,renderedDigits:b}=(0,l.useRenderDigits)(y),v=(0,n.useCallback)((n=>{const l=[...f(D.current,C.current,u.getOnesDigit,n,o,t,y),...f(R.current,_.current,u.getTensDigit,n,o,t,y)].filter(s.default);(0,u.syncAnimations)(l)}),[o,t,D,C,R,_,y]);return(0,n.useLayoutEffect)((()=>{if(!p)return;const t=(0,u.getDelay)(o,c),n=(0,u.getIterations)(o,c);v({duration:o,iterations:n,delay:t,fill:'forwards'})}),[o,p,c,v]),b};var n=r(d[1]),s=t(r(d[2])),u=r(d[3]),l=r(d[4]),o=r(d[5]),c=r(d[6]);const f=(t,n,s,u,l,f,p)=>{if(!t)return[];return[...n.flatMap(((t,n)=>[t?.animate((0,o.preCalcTransformFrames)(n,f,l,s),u)??null,t?.animate((0,o.preCalcOpacityFrames)(n,f,l,s),u)??null])),p?null:t?.animate((0,c.calcContainerWidthKeyframes)(f,l,s),u)]}}),"1742fe",["ba7a76","07aa1f","f30bc0","9faabf","7bc0de","396162","2d0bc2"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.FadeInOut=void 0;var n=t(r(d[1])),o=(r(d[2]),r(d[3])),_=r(d[4]),s=(r(d[5]),r(d[6])),u=r(d[7]);const f=s.variableName,l="c1wvuewq atm_q_1bwjh7f atm_y_1okk58 atm_1c_p1p1lo atm_k4_idpfg4 atm_y_1kuoloi__1rrf6b5",c="c1irrjfm atm_k4_kb7nvz",v="c4rptod atm_y_sspwr6 atm_1c_1l72x26 atm_k4_idpfg4 atm_y_1kuoloi__1rrf6b5",k="c1o0lit4 atm_k4_idpfg4 atm_vl_15vqwwr";e.FadeInOut=(0,n.forwardRef)((({shouldShow:t,children:s,className:p,style:w,fadeInDuration:b=500,fadeOutDuration:x=200,disabled:y,unmountOnExited:S=!0},T)=>{const h=(0,o.useCx)(),O=(0,_.useTransition)(t,t?b:x),j=O===_.TransitionState.exited&&S,q=y||!j,I=(0,n.useMemo)((()=>({...w,[f('--fade-in-out-content_fade-in_animation-duration')]:b?`${b}ms`:void 0,[f('--fade-in-out-content_fade-out_animation-duration')]:x?`${x}ms`:void 0})),[b,x,w]);return(0,u.jsx)("div",{className:h(p,!y&&O===_.TransitionState.entering&&l,!y&&O===_.TransitionState.entered&&c,!y&&O===_.TransitionState.exiting&&v,!y&&O===_.TransitionState.exited&&k),style:y?void 0:I,ref:T,role:"presentation",children:q&&s})}))}),"18e5b7",["45f788","07aa1f","ea4b89","4786a8","dce3ab","aabdb1","027757","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default,n=r(d[1]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({impressionRef:t,onlyOnContext:{loadConfetti:n,state:o}}){const f='motion'===c.motionPreference.user.value,y=!u.default.getBootstrap('search-web.listing-card.only-on-animation.killswitch'),[v,O]=(0,l.useState)(!1);(0,l.useEffect)((()=>{n&&O(!0)}),[n]);const _=v&&y&&f;return(0,h.jsx)(s.default,{impressionRef:t,onlyOnState:o,loadReady:_,loader:p,renderPlaceholder:()=>null})};var o=n(r(d[0])),l=t(r(d[2])),s=n(r(d[3])),f=n(r(d[4])),u=n(r(d[5])),c=r(d[6]),h=r(d[7]);const p=Object.assign((0,f.default)((()=>r(d[9])(d[8]).then(o.default))),{prefetch:()=>r(d[9]).prefetch(d[8])})}),"2c2045",["45f788","ba7a76","07aa1f","b96ee5","b4385c","c235f8","daa5d1","b8c07d","93e4e4","057569"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RELATIVE_WIDTHS=void 0,e.calcContainerWidthKeyframes=function(t,n,c){const h=[],u=s()/n/2;let f=t;for(;f>0;){const n=1-f/t,s=1-Math.max(f-1,0)/t,W=c(f-1),l=Math.min(n+u,1),_=s-u;h.push({offset:l,...o(W),easing:'ease-out'},{offset:_,...o(W),easing:'ease-out'}),f-=1}return h},e.getContainerWidthStyle=e.containerWidthChangeDuration=void 0;var t=r(d[0]);const n=e.RELATIVE_WIDTHS=[1,.78,.9340013822,.9340013822,.9619903248,.95,.9122322046,.9004837595,.9671734623,.9602626123],o=t=>({width:`${n[t]}ch`});e.getContainerWidthStyle=o;const s=()=>(0,t.timingWithMotionPref)(500);e.containerWidthChangeDuration=s}),"2d0bc2",["9faabf"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,o){const[l,s]=(0,n.useState)(new Date),[u,_]=(0,n.useState)(O(l)),[c,f]=(0,n.useState)(!1),v=(0,n.useCallback)((()=>{(0,n.startTransition)((()=>{s(new Date),_(O(new Date))}))}),[]);(0,y.default)(t.isOnlyOn?u:null,v);return{availabilityDescription:(0,n.useMemo)((()=>{const n=D(t,o,l);return t.state&&f(!0),n}),[t,l,o]),hasDescriptionEvaluated:c,refreshReferenceTimeAt:u}},e.getComingSoonDescription=v;var n=r(d[1]),o=t(r(d[2]));function l(){const n=t(r(d[3]));return l=function(){return n},n}function s(){const n=t(r(d[4]));return s=function(){return n},n}function u(){const n=t(r(d[5]));return u=function(){return n},n}function _(){const n=t(r(d[6]));return _=function(){return n},n}function c(){const n=t(r(d[7]));return c=function(){return n},n}var y=t(r(d[8])),f=r(d[9]);const O=t=>(0,u().default)((0,s().default)(t,1));function v(t,n,u={monthOnly:'long',extendedDate:'long'}){if(!t)return o.default.t('only_on_stays.listing_card_availability_coming_soon');const y=t.getFullYear()>n.getFullYear(),f=(0,_().default)((0,c().default)(t),(0,c().default)(n)),O=(0,l().default)(t,n),v=(0,l().default)(t,(0,s().default)(n,1));return O?o.default.t('only_on_stays.listing_card_availability_coming_later_today'):v?o.default.t('only_on_stays.only_on_stays.listing_card_availability_coming_tomorrow'):f<=3?o.default.t('only_on_stays.listing_card_availability_coming_date',{date:t.toLocaleDateString(o.default.locale(),{day:'numeric',month:u.extendedDate})}):y&&f>3&&f<=6?o.default.t('only_on_stays.only_on_stays.only_on_stays.only_on_stays.listing_card_availability_coming_year_month',{year_month:t.toLocaleDateString(o.default.locale(),{year:'numeric',month:u.extendedDate})}):y&&f>6?o.default.t('only_on_stays.only_on_stays.listing_card_availability_coming_year',{year:t.toLocaleDateString(o.default.locale(),{year:'numeric'})}):f>3&&f<=11?o.default.t('only_on_stays.only_on_stays.only_on_stays.listing_card_availability_coming_month',{month:t.toLocaleDateString(o.default.locale(),{month:u.monthOnly})}):void 0}function D(t,n,l){switch(t.state){case f.OnlyOnListingState.BOOKING_CLOSED:return o.default.t('pdp_platform.elvis.book_it.booking_closed');case f.OnlyOnListingState.SOLD_OUT:return o.default.t('only_on_stays.sold_out');case f.OnlyOnListingState.COMING_SOON:return n??v(t.availableAt,l);case f.OnlyOnListingState.COUNTDOWN:case f.OnlyOnListingState.LIVE:default:return null}}}),"30ef5c",["ba7a76","07aa1f","a9f4b1","415e3d","c8f7b4","694c86","a26b7e","dc7821","3958dd","91d2dc"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({showSeconds:O,state:l}){const{ref:h,width:u}=(0,n.useElementSize)({monitor:'width',skip:l!==s.OnlyOnListingState.COUNTDOWN}),{ref:c,width:S}=(0,n.useElementSize)({monitor:'width',skip:l!==s.OnlyOnListingState.COUNTDOWN}),{ref:w,width:f}=(0,n.useElementSize)({monitor:'width',skip:l!==s.OnlyOnListingState.LIVE}),L=(0,t.useMemo)((()=>{let t;return l!==s.OnlyOnListingState.LIVE&&l!==s.OnlyOnListingState.BOOKING_CLOSED||!f?O&&S?t=Math.ceil(S):!O&&u&&(t=Math.ceil(u)):t=Math.ceil(f),t}),[u,S,f,O,l]),E=(0,t.useMemo)((()=>L&&{width:`calc(${L}px + ${o.BADGE_HORIZONTAL_PADDING/o.BADGE_FONT_SIZE*2}em)`}),[L]);return{dhmCountdownRef:h,hmsCountdownRef:c,liveLabelRef:w,contentWidth:L,widthStyle:E,hasMeasuredContent:!!L}};var t=r(d[0]),n=r(d[1]),s=r(d[2]),o=r(d[3])}),"32f848",["07aa1f","c376e0","91d2dc","fb3a91"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({steps:t,duration:c,remainingTime:f,enabled:w=!0,monospaced:O=!1}){const{onesContainerRef:_,onesDigitRefs:p,tensContainerRef:y,tensDigitRefs:C,renderedDigits:R}=(0,s.useRenderDigits)(O),T=(0,n.useCallback)(((t,n)=>{const o=[...D(_.current,p.current,(0,l.getOnesDigit)(t),(0,l.getOnesDigit)(n),O),...D(y.current,C.current,(0,l.getTensDigit)(t),(0,l.getTensDigit)(n),O)].filter(u.default);(0,l.syncAnimations)(o)}),[]),v=(0,n.useRef)(0),S=(0,n.useRef)(0),[I,M]=(0,n.useState)(null);(0,n.useEffect)((()=>{w&&(S.current=(0,l.getCounterValue)(c,t,f),T(S.current,S.current),f<c/t||(v.current=(0,l.getIterations)(c,f),M(new Date(Date.now()+(0,l.getTimeUntilNextStep)(c,t,f)))))}),[c,f,w,t,T]);const b=(0,n.useCallback)((()=>{const n=S.current;S.current=0===S.current?t-1:S.current-1,T(n,S.current),v.current=0===S.current?v.current-1:v.current,v.current>0&&M(new Date(Date.now()+c/t))}),[c,t,T]);return(0,o.default)(I,b),R};var n=r(d[1]),u=t(r(d[2])),o=t(r(d[3])),l=r(d[4]),s=r(d[5]),c=r(d[6]),f=r(d[7]);const D=(t,n,u,o,l)=>{if(!t)return[];const s=l?null:t.animate((0,c.getContainerWidthStyle)(o),{duration:(0,c.containerWidthChangeDuration)(),fill:'forwards',easing:'linear'});return[...n.flatMap(((t,n)=>n===o&&o===u?t?.animate({...(0,f.getVisibleStyle)(n),opacity:1},{duration:0,fill:'forwards'})??null:n===o?[t?.animate((0,f.moveInTransformFrames)(n),{duration:(0,f.transformDuration)(),fill:'forwards'})??null,t?.animate(f.MOVE_IN_OPACITY_FRAMES,{duration:(0,f.moveInOpacityDuration)(),fill:'forwards'})??null]:n===u?[t?.animate((0,f.moveOutTransformFrames)(n),{duration:(0,f.transformDuration)(),fill:'forwards'})??null,t?.animate(f.MOVE_OUT_OPACITY_FRAMES,{duration:(0,f.moveOutOpacityDuration)(),fill:'forwards'})??null]:t?.animate({...(0,f.getBelowStyle)(n),opacity:0},{duration:0,fill:'forwards'})??null)),s]}}),"37ec6c",["ba7a76","07aa1f","f30bc0","3958dd","9faabf","7bc0de","2d0bc2","396162"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,o){const{scheduler:l}=(0,s.usePostTaskScheduler)({priority:'user-visible'}),f=(0,u.useRef)(!1),[h,v]=(0,u.useState)(0);(0,n.default)('visibilitychange',(()=>{document.hidden||f.current||(0,u.startTransition)((()=>{v((t=>t+1))}))})),(0,u.useEffect)((()=>{f.current=!1}),[t]),(0,u.useEffect)((()=>{if(null==t)return;let u;const n=()=>{const s=t.getTime()-Date.now();if(s<=0&&!f.current)o(),f.current=!0;else{const t=Math.min(s,c);u=l.setTimeout(n,t)}};return n(),()=>clearTimeout(u)}),[t,h])};var u=r(d[1]),n=t(r(d[2])),s=r(d[3]);const c=6e5}),"3958dd",["ba7a76","07aa1f","5aa0ce","53bb4a"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.moveOutTransformFrames=e.moveOutOpacityDuration=e.moveInTransformFrames=e.moveInOpacityDuration=e.getVisibleStyle=e.getBelowStyle=e.MOVE_OUT_OPACITY_FRAMES=e.MOVE_IN_OPACITY_FRAMES=void 0,e.preCalcOpacityFrames=function(t,o,s,n){const f=[];t!==n(o-1)&&f.push({offset:0,opacity:0});let c=o;for(;c>=0;){const u=M(t,c,o,n);if('in'===u){const t=v(l(),s,c,o);f.push(...h(O,t))}else if('out'===u){const t=v(y(),s,c,o);f.push(...h(_,t))}c-=1}0!==t&&f.push({offset:1,opacity:0});return f},e.preCalcTransformFrames=function(t,o,n,f){const l=[];t!==f(o-1)&&l.push({offset:0,...s(t)});let O=o;for(;O>=0;){const s=M(t,O,o,f),y=v(c(),n,O,o);'in'===s?l.push(...h(u(t),y)):'out'===s&&l.push(...h(p(t),y)),O-=1}0!==t&&l.push({offset:1,...s(t)});return l},e.transformDuration=void 0;var t=r(d[0]);const o='cubic-bezier(.1,.55,.37,.96)',s=t=>({transform:`translateY(${1-t-.43}em) scale(0.75)`});e.getBelowStyle=s;const n=t=>({transform:`translateY(${-t}em) scale(1)`});e.getVisibleStyle=n;const f=t=>({transform:`translateY(${-t-1+.43}em) scale(0.75)`}),c=()=>(0,t.timingWithMotionPref)(350);e.transformDuration=c;const u=t=>[{offset:0,easing:o,...s(t)},{offset:1,...n(t)}];e.moveInTransformFrames=u;const p=t=>[{offset:0,easing:o,...n(t)},{offset:.99,...f(t)},{offset:1,...s(t)}];e.moveOutTransformFrames=p;const l=()=>(0,t.timingWithMotionPref)(600);e.moveInOpacityDuration=l;const O=e.MOVE_IN_OPACITY_FRAMES=[{offset:0,opacity:0,easing:'ease-out'},{offset:1,opacity:1}],y=()=>(0,t.timingWithMotionPref)(150);e.moveOutOpacityDuration=y;const _=e.MOVE_OUT_OPACITY_FRAMES=[{offset:0,opacity:1,easing:'ease-out'},{offset:1,opacity:0}];function h(t,{start:o,end:s}){const n=t[t.length-1].offset-t[0].offset,f=s-o;return t.map((s=>{const c=(s.offset-t[0].offset)/n*f;return{...s,offset:c+o}}))}function M(t,o,s,n){const f=o-1,c=n(f),u=n(Math.min(f+1,s-1)),p=c===t,l=o!==s&&u===t;return p&&!l?'in':!l||p||0===o&&0===t?void 0:'out'}function v(t,o,s,n){const f=1-s/n,c=t/o;return{start:Math.max(f,0),end:Math.min(f+c,1)}}}),"396162",["9faabf"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.deliverFreeCancellationHighlightExperiment=function(){n.default.findTreatment(l,{log:!0})};var n=t(r(d[1]));const l='pricing_search_free_cancellation_highlight_v1'}),"4d0940",["ba7a76","dcc72a"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default,s=r(d[1]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({availabilityDescription:t,avgRatingA11yLabel:s,avgRatingLocalized:B,className:R,contextualPictures:T,contextualPicturesPageInfo:q,formattedBadges:H,id:D,imageFetchPriority:z,imageLoading:C,inViewThreshold:S,initialInView:W,isWishlisted:F=!1,lazyLoadPrimaryImage:M=!1,listingLinkRel:O="noopener noreferrer nofollow",listingLinkTarget:G="_self",listingObjType:A,listingUrl:U,name:V,onBlur:E,onFocus:J,onImageChange:K,onPress:Q,onWishlistButtonPress:X,onShareButtonPress:Y,confettiAnimationRef:Z,primaryHostPassport:$,roomTypeCategory:ee,roomTypeId:te,shareButton:ae,showWishlistButton:ie=!0,structuredContent:se,structuredStayDisplayPrice:le,title:ne,titleElement:oe,titleLocale:re,uniqueId:me,loggingID:de,eventData:ue,eventDataSchema:ce,structuredPrimaryLineOverride:ge}){const fe=(0,n.useCx)(),{contextualPictures:_e,loadPictures:pe,onScrollerMounted:ye}=(0,f.default)({contextualPictures:T??null,contextualPicturesPageInfo:q,id:D??null,listingObjType:A,roomTypeCategory:ee,roomTypeId:te}),he=(0,u.default)(_e),je=(0,l.useMemo)((()=>(0,k.jsx)(j.default,{name:V,nameLocale:re})),[V,re]),xe=(0,l.useMemo)((()=>se?.distance?.map(((t,s)=>(0,k.jsx)(I.default,{item:t,itemIndex:s},t?.body)))),[se?.distance]),Ie=(0,l.useMemo)((()=>ge??se?.primaryLine?.map(((t,s)=>(0,k.jsx)(I.default,{item:t,itemIndex:s},t?.body)))),[se?.primaryLine,ge]),Pe=(0,l.useMemo)((()=>se?.secondaryLine?.map(((t,s)=>(0,k.jsx)(I.default,{item:t,itemIndex:s},t?.body)))),[se?.secondaryLine]),{methodsWithLogging:ve,ImpressionTarget:we}=(0,o.default)('ListingCard',{loggingID:de,eventData:ue,eventDataSchema:ce,threshold:.5,methods:{onImageChange:[2,K],onPress:[2,Q],onWishlistButtonPress:[13,X]},target:'manual'}),{isFocused:Le,ref:be}=(0,c.default)({onBlur:E,onFocus:J});return(0,k.jsx)(p.default,{className:fe(R),containerRef:be,listingLinkRel:O,listingLinkTarget:G,listingUrl:U,onBlur:E,onFocus:J,onPress:ve.onPress,uniqueId:me||D||'',children:(0,k.jsx)(y.default,{className:fe(N.layout),content:(0,k.jsxs)(_.default,{className:fe(N.grid),children:[(0,k.jsx)(v.default,{title:ne??'',titleElement:oe,uniqueId:me??D??void 0}),(0,k.jsx)(P.default,{className:fe(_.classNames.fullRow),subtitle:xe,textOverflow:se?.distance?.[0]?.type?.includes('HIGHLIGHT')?'clip-item':void 0}),V&&(0,k.jsx)(P.default,{className:fe(_.classNames.fullRow),subtitle:je}),(0,k.jsx)(P.default,{className:fe(_.classNames.fullRow),subtitle:Ie,textOverflow:se?.primaryLine?.[0]?.type?.includes('HIGHLIGHT')?'clip-item':void 0}),(0,k.jsx)(P.default,{className:fe(_.classNames.fullRow),subtitle:Pe,textOverflow:se?.secondaryLine?.[0]?.type?.includes('HIGHLIGHT')?'clip-item':void 0}),(0,k.jsx)(w.default,{reviewSnippet:se?.reviewSnippet}),(0,k.jsx)(L.default,{className:fe(N.price),structuredDisplayPrice:le,availabilityDescription:t,listingId:D}),(0,k.jsxs)("div",{className:fe(_.classNames.topRight),children:[(0,k.jsx)(x.default,{avgRatingA11yLabel:s,avgRatingLocalized:B}),(0,k.jsx)(we,{})]})]}),media:(0,k.jsxs)("div",{className:fe(N.media),children:[(0,k.jsx)(h.default,{formattedBadge:H?.[0],imageFetchPriority:z,imageLoading:C,images:he,inViewThreshold:S,initialInView:W,isFocused:Le,isWishlisted:F,lazyLoadPrimaryImage:M,listingId:D||'',listingLinkRel:O,listingLinkTarget:G,listingUrl:U,onImageChange:ve.onImageChange,onImagePress:ve.onPress,onScrollerMounted:ye,onShareButtonPress:Y,onUserInteracted:pe,onWishlistButtonPress:ve.onWishlistButtonPress,primaryHostPassport:$,shareButton:ae,showWishlistButton:ie,title:ne}),(0,k.jsx)(b.default,{confettiAnimationRef:Z})]})})})};var l=s(r(d[2])),n=(r(d[3]),r(d[4])),o=(r(d[5]),r(d[6]),t(r(d[7]))),u=t(r(d[8])),c=t(r(d[9])),f=t(r(d[10])),_=(r(d[11]),r(d[12]),s(r(d[13]))),p=t(r(d[14])),y=s(r(d[15])),h=t(r(d[16])),j=t(r(d[17])),x=t(r(d[18])),I=t(r(d[19])),P=t(r(d[20])),v=t(r(d[21])),w=t(r(d[22])),L=t(r(d[23])),b=t(r(d[24])),k=r(d[25]);const N={layout:"l1tup9az atm_1p4glcj_1bp4okc",grid:"g1qv1ctd atm_u80d3j_1li1fea atm_c8_o7aogt atm_g3_8jkm7i",link:"lz543g6 atm_9s_1ulexfb atm_mk_stnw88 atm_tk_idpfg4 atm_fq_idpfg4 atm_n3_idpfg4 atm_6i_idpfg4 atm_5j_kitwna atm_kd_glywfm atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_uc_aaiy6o_1w3cfyq atm_70_1b8lkes_1w3cfyq atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_1b8lkes_pfnrn2_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam",media:"m1v28t5c atm_gq_1gibeiw atm_72g4pb_llf7ib atm_1mz0ff6_1lk22r2 atm_1p5rjfj_h2mmj6",price:"pquyp1l atm_da_cbdd7d"}}),"539f79",["ba7a76","45f788","07aa1f","ea4b89","4786a8","aabdb1","87ad17","b7564f","8715a9","cf2253","1308e9","d2ca1d","6d0528","79bd2c","8c12b8","f93990","ed9673","f93484","f036d7","4d62c6","dd70c2","0e4b97","82f0ad","10724f","700e2b","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]);t.variableName,t.variableName}),"5912e1",["027757"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=t(r(d[1])),l=t(r(d[2])),o=t(r(d[3]));e.default=(0,u.default)(l.default,{PopperTooltipComponent:o.default})}),"6607fa",["ba7a76","e8606c","0a7ca2","a4fdba"]);
__d((function(g,r,i,a,m,e,d){"use strict";var o=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.TwentyFourHoursCountdown=e.SecondsCountdown=e.MinutesCountdown=e.HundredHoursCountdown=e.DaysCountdown=void 0;o(r(d[1]));var n=o(r(d[2])),t=r(d[3]),s=r(d[4]),u=r(d[5]);e.DaysCountdown=o=>(0,u.jsx)(s.CountdownWithLabel,{...o,duration:t.HUNDRED_DAYS_IN_MS,steps:100,label:(0,u.jsx)(n.default,{k:"only_on_stays.countdown_badge_days_char"})});e.HundredHoursCountdown=o=>(0,u.jsx)(s.CountdownWithLabel,{...o,duration:t.HUNDRED_HOURS_IN_MS,steps:100,label:(0,u.jsx)(n.default,{k:"only_on_stays.countdown_badge_hours_char"})});e.TwentyFourHoursCountdown=o=>(0,u.jsx)(s.CountdownWithLabel,{...o,duration:t.DAY_IN_MS,steps:24,label:(0,u.jsx)(n.default,{k:"only_on_stays.countdown_badge_hours_char"})});e.MinutesCountdown=o=>(0,u.jsx)(s.CountdownWithLabel,{...o,duration:t.HOUR_IN_MS,steps:60,label:(0,u.jsx)(n.default,{k:"only_on_stays.countdown_badge_minutes_char"})});e.SecondsCountdown=o=>(0,u.jsx)(s.CountdownWithLabel,{...o,duration:t.MIN_IN_MS,steps:60,label:(0,u.jsx)(n.default,{k:"only_on_stays.countdown_badge_seconds_char"}),monospaced:!0})}),"6de3f7",["ba7a76","07aa1f","030c51","fb3a91","aa00bc","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({confettiAnimationRef:t}){const c=(0,l.useCx)(),x=(0,o.useOnlyOnContext)();return x.isOnlyOn?(0,_.jsxs)(n.default,{className:c(u.container),children:[(0,_.jsx)(s.default,{onlyOnContext:x,impressionRef:t}),(0,_.jsx)(f.default,{onlyOnContext:x})]}):null};t(r(d[1])),r(d[2]);var n=t(r(d[3])),l=r(d[4]),s=t(r(d[5])),f=t(r(d[6])),o=r(d[7]),_=r(d[8]);const u={container:"chivy0l atm_mj_glywfm atm_mk_stnw88 atm_tk_idpfg4 atm_fq_idpfg4 atm_n3_idpfg4 atm_wq_kb7nvz"}}),"700e2b",["ba7a76","07aa1f","ea4b89","87ad17","4786a8","2c2045","a0be01","91d2dc","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default,s=r(d[1]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.useRenderDigits=function(t=!1){const s=(0,n.useRef)(null),l=(0,n.useRef)([]),f=(0,n.useRef)(null),h=(0,n.useRef)([]);return{renderedDigits:(0,n.useMemo)((()=>(0,o.jsx)(c.default,{direction:"ltr",children:n=>(0,o.jsxs)("div",{className:n(_.container),children:[(0,o.jsx)("div",{className:n(_.digits,t&&_.tensDigit_monospaced),ref:f,children:Array.from({length:10},((s,n)=>(0,o.jsx)("span",{ref:t=>{h.current[n]=t},style:{width:t?`${u.RELATIVE_WIDTHS[n]}ch`:'auto'},children:n},n)))}),(0,o.jsx)("div",{className:n(_.digits),ref:s,children:Array.from({length:10},((t,s)=>(0,o.jsx)("span",{ref:t=>{l.current[s]=t},children:s},s)))})]})})),[]),onesContainerRef:s,onesDigitRefs:l,tensContainerRef:f,tensDigitRefs:h}};var n=s(r(d[2])),c=(r(d[3]),t(r(d[4]))),u=r(d[5]),o=r(d[6]);const _={container:"ceygkt3 atm_9s_1txwivl atm_ar_vrvcex atm_g3_1x4eueo",digits:"d3njrc9 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_vy_1c9mzni atm_e2_1x4eueo",tensDigit_monospaced:"tutjc7f atm_h_esu3gu"}}),"7bc0de",["ba7a76","45f788","07aa1f","ea4b89","f38b41","2d0bc2","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({className:t,style:l,reviewSnippet:h}){const v=(0,_.useCx)(),o=h?.[0];if(!o)return null;const[u,f]=c();return(0,s.jsxs)("div",{className:v(t,n.row),"data-testid":"listing-card-review-snippet",style:l,"aria-label":o.bodyA11yLabel||void 0,children:[(0,s.jsx)("div",{className:v(n.headline),children:o.headline&&`${o.headline}  `}),(0,s.jsx)("div",{className:v(n.quotaStart),children:u}),(0,s.jsx)("div",{className:v(n.highlight),children:o.body}),(0,s.jsx)("div",{className:v(n.quotaEnd),children:f})]})};t(r(d[1])),r(d[2]);var l=t(r(d[3])),_=r(d[4]),s=r(d[5]);const n={row:"r1ltz7jg atm_7l_1he744i atm_9s_1txwivl atm_ar_vrvcex atm_da_1yr5943",headline:"hvbkb5i atm_am_glywfm atm_vv_1jtmq4",quotaStart:"q4vx4za atm_am_glywfm atm_7l_jt7fhx",quotaEnd:"qik2mo2 atm_am_glywfm atm_7l_jt7fhx atm_h0_1tcgj5g",highlight:"h1l39j1w atm_am_1pywi5l atm_7l_jt7fhx atm_ks_15vqwwr atm_sq_1l2sidv atm_vv_1q9ccgz"};function c(){const t=l.default.locale();return'zh'===t?['\u201c','\u201d']:'zh-TW'===t||'zh-HK'===t?['\u300c','\u300d']:['\u201c','\u201d']}}),"82f0ad",["ba7a76","07aa1f","ea4b89","862e50","4786a8","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default,n=r(d[1]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({onlyOnContext:{availableAt:t,showSeconds:n}}){const _=(0,u.default)(),[c,N]=(0,o.useState)(t?t.getTime()-Date.now():0),{scheduler:S}=(0,l.usePostTaskScheduler)({priority:'background'});(0,o.useEffect)((()=>{c<=0||S.setTimeout((()=>{(0,o.startTransition)((()=>{N(c-y.MIN_IN_MS)}))}),Math.min(c-y.MIN_IN_MS,y.MIN_IN_MS))}),[S,c]);const I=(0,o.useMemo)((()=>M(c,_??'ltr',n)),[_,n,c]);return(0,f.jsx)(s.default,{children:I})};var _=n(r(d[2])),o=t(r(d[3])),u=n(r(d[4])),s=n(r(d[5])),l=r(d[6]),c=r(d[7]),y=r(d[8]),f=r(d[9]);const M=(t,n,o)=>{if(null===t||t<=0)return _.default.t('only_on_stays.live_countdown_badge');if(t<=y.MIN_IN_MS)return _.default.t('only_on_stays.countdown_badge_below_minute_a11y_description');const u=(0,c.getCounterValue)(y.HUNDRED_DAYS_IN_MS,100,t),s=_.default.t('only_on_stays.countdown_badge_days_a11y_description',{smart_count:u}),l=o?(0,c.getCounterValue)(y.HUNDRED_HOURS_IN_MS,100,t):(0,c.getCounterValue)(y.DAY_IN_MS,24,t),f=_.default.t('only_on_stays.countdown_badge_hours_a11y_description',{smart_count:l}),M=(0,c.getCounterValue)(y.HOUR_IN_MS,60,t),N=_.default.t('only_on_stays.countdown_badge_minutes_a11y_description',{smart_count:M}),S=o?[f,N]:[s,f,N];return'rtl'===n&&S.reverse(),S.join(' ')}}),"931e2e",["45f788","ba7a76","a9f4b1","07aa1f","dbfcd8","a5b4f5","53bb4a","9faabf","fb3a91","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.timingWithMotionPref=e.syncAnimations=e.logger=e.getTimeUntilNextStep=e.getTensDigit=e.getOnesDigit=e.getIterations=e.getDelay=e.getCounterValue=void 0;var t=r(d[0]),n=r(d[1]);e.logger=(0,t.createLogger)('Countdown');e.getOnesDigit=t=>t%10;e.getTensDigit=t=>Math.floor(t/10)%10;e.getDelay=(t,n)=>n%t==0?0:-Math.abs(t-n%t);e.getIterations=(t,n)=>Math.max(Math.ceil(n/t),0);e.getCounterValue=(t,n,o)=>{const s=t/n;return Math.trunc(o/s%n)};e.getTimeUntilNextStep=(t,n,o)=>{const s=t/n;return(Math.floor((t-o)/s)+1)*s-(t-o)};e.timingWithMotionPref=t=>'motion'===n.motionPreference.user.value?t:1e-4;e.syncAnimations=async t=>{0!==t.length&&(await t[0].ready,t.forEach((n=>{n.startTime=t[0].startTime})))}}),"9faabf",["102445","daa5d1"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default,_=r(d[1]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({onlyOnContext:t}){const _=(0,o.useCx)(),{availableAt:x,state:O,showSeconds:p,showLargeBadge:z}=t,{dhmCountdownRef:q,hmsCountdownRef:C,liveLabelRef:S,contentWidth:N,widthStyle:F,hasMeasuredContent:L}=(0,f.default)(t),{containerRef:D,scaleStyle:B}=(0,b.default)(t,N),R=O===u.OnlyOnListingState.COUNTDOWN&&!1===p,E=O===u.OnlyOnListingState.COUNTDOWN&&!0===p,I=O===u.OnlyOnListingState.LIVE,M=R||E||I,H=x&&(0,y.jsxs)(c.FadeInOut,{className:_(k.countdown),shouldShow:R,ref:q,unmountOnExited:!1,children:[(0,y.jsx)(v.DaysCountdown,{targetDate:x,enabled:R}),(0,y.jsx)("div",{className:_(k.divider)}),(0,y.jsx)(v.TwentyFourHoursCountdown,{targetDate:x,enabled:R}),(0,y.jsx)("div",{className:_(k.divider)}),(0,y.jsx)(v.MinutesCountdown,{targetDate:x,className:_(k.minutePulse),enabled:R})]}),P=x&&(0,y.jsxs)(c.FadeInOut,{className:_(k.countdown),shouldShow:E,ref:C,unmountOnExited:!1,children:[(0,y.jsx)(v.HundredHoursCountdown,{targetDate:x,enabled:E}),(0,y.jsx)("div",{className:_(k.divider)}),(0,y.jsx)(v.MinutesCountdown,{targetDate:x,enabled:E}),(0,y.jsx)("div",{className:_(k.divider)}),(0,y.jsx)(v.SecondsCountdown,{targetDate:x,enabled:E})]}),T=(0,y.jsx)(c.FadeInOut,{shouldShow:I,ref:S,className:_(k.liveLabel),unmountOnExited:!1,children:(0,y.jsx)(s.default,{k:"only_on_stays.live_countdown_badge"})}),U=(0,n.useRef)(null),W='en'===l.default.language(),A=(0,n.useMemo)((()=>({...B,...F})),[B,F]);return(0,y.jsxs)(c.FadeInOut,{shouldShow:M&&L,className:_(k.positioner,I&&k.liveLabelFontSizeOverride,W&&k.englishOnlyCountdownBadgeFontSize,W&&I&&k.englishOnlyLiveBadgeFontSize),ref:D,unmountOnExited:!M,children:[(0,y.jsxs)("div",{className:_(k.badge,z&&k.badge_large,(0,w.shouldUseFallbackBackground)()&&k.badge_fallback_background,L&&k.containment),style:A,ref:U,children:[(0,y.jsx)(h.default,{onlyOnContext:t}),(0,y.jsxs)("div",{className:_(k.content),"aria-hidden":!0,children:[H,P,T]})]}),(0,y.jsx)(j.default,{anchorRef:U,onlyOnContext:t})]})};r(d[2]);var n=_(r(d[3])),s=t(r(d[4])),l=t(r(d[5])),o=r(d[6]),u=(r(d[7]),r(d[8]),r(d[9])),c=r(d[10]),v=r(d[11]),f=t(r(d[12])),h=t(r(d[13])),j=t(r(d[14])),b=(r(d[15]),r(d[16]),t(r(d[17]))),w=r(d[18]),y=r(d[19]);const k={positioner:"p9plp6 atm_mk_stnw88 atm_tk_idpfg4 atm_n3_idpfg4 atm_fq_idpfg4 atm_6i_idpfg4 atm_mj_glywfm atm_c8_tqsoe9 atm_c8_trv746__oggzyc",liveLabelFontSizeOverride:"l17gvtm1 atm_c8_1eu9n0n atm_c8_5qlfkt__oggzyc",englishOnlyCountdownBadgeFontSize:"eeied1p atm_c8_o65d89",englishOnlyLiveBadgeFontSize:"e4u8228 atm_c8_1fy5qh",badge:"bhkg36v atm_c8_44jvio atm_5j_1keiz8v atm_26_hnb3id atm_70_1si461l atm_20_112yz0h atm_mk_stnw88 atm_tk_1fwxnve atm_fq_1fwxnve atm_e2_5r7uja atm_ks_15vqwwr atm_7l_gfe2qv atm_cs_1gtsjja atm_cp_1ts48j8 atm_tw_5d6396 atm_ui_10cczyf atm_uv_1n7bvdq atm_mk_stnw88_vmtskl atm_tk_grho7r_vmtskl atm_fq_idpfg4_vmtskl atm_n3_idpfg4_vmtskl atm_6i_idpfg4_vmtskl atm_5j_1keiz8v_vmtskl atm_3f_1bvcbpk_vmtskl atm_26_119y5nj_vmtskl atm_hr_7lhu8g_vmtskl atm_i8_kvto3w_vmtskl atm_i8_1p67fjf_vmtskl atm_92_1yyfdc7_vmtskl atm_ks_zryt35__1rgatj2 atm_169avb6_1yyajtb__1igb08s atm_nnjh8o_4820cc__1igb08s",badge_large:"b1gtwu6d atm_20_112yz0h atm_70_bdljwj atm_26_1w3hk1i atm_e2_jnrbcw atm_3f_ak9srf_vmtskl",badge_fallback_background:"b18rc3vk atm_26_18dd3gy",content:"c128qpk5 atm_e2_1osqo2v atm_vy_1osqo2v atm_9s_1txwivl atm_h_1h6ojuz atm_fc_1h6ojuz",containment:"c2ulppm atm_8w_1bu657g",countdown:"c1dyetap atm_9s_1txwivl atm_ar_vrvcex atm_h_1h6ojuz atm_cx_1syoqtq atm_mk_stnw88",liveLabel:"lyt696j atm_vy_1ns9ob4 atm_ti_1q9ccgz",divider:"d114h4nq atm_vy_m4kh24 atm_e2_10w5rdi atm_2d_vr7c5y atm_9s_1o8liyq atm_j_1h6ojuz",minutePulse:"mlz3rbd atm_p_1yj2az4__1igb08s"}}),"a0be01",["ba7a76","45f788","ea4b89","07aa1f","030c51","862e50","4786a8","84e2ec","aabdb1","91d2dc","18e5b7","6de3f7","32f848","931e2e","a7d84e","5912e1","fb3a91","b1ffc6","8462c4","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default,l=r(d[1]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,c.jsx)(u.default,{loader:o,renderPlaceholder:u.renderNull,...t})};var n=l(r(d[0])),u=(l(r(d[2])),t(r(d[3]))),f=r(d[4]),c=r(d[5]);const o=Object.assign((0,f.normalizeLoader)((()=>r(d[7])(d[6]).then(n.default))),{prefetch:()=>r(d[7]).prefetch(d[6])})}),"a4fdba",["45f788","ba7a76","07aa1f","018c3b","09d809","b8c07d","71b681","057569"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default,n=r(d[1]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({onlyOnContext:{state:t,showSeconds:n,showLargeBadge:x,availableAt:D},anchorRef:w}){const I=(0,_.useCx)(),L=(0,s.useRef)(null),T='en'===l.default.language(),S=A(L),h=(0,c.default)()===c.FORM_FACTOR.COMPACT,j=N({isEnglish:T,isCompact:h,isLive:t===E.OnlyOnListingState.LIVE}),M=null!=S&&S>j,{value:y,setTrue:F,setFalse:p}=(0,O.default)(!1);w.current?.addEventListener('transitionstart',F),w.current?.addEventListener('transitionend',p);const b=t===E.OnlyOnListingState.COUNTDOWN,B=t===E.OnlyOnListingState.LIVE,G=M&&!y&&!x&&(b||B);return D?(0,f.jsx)("div",{className:I(v.container),ref:L,children:(0,f.jsx)(u.default,{anchorRef:w,enabled:G,visible:G,placement:"bottom",showArrow:!0,showCloseButton:!1,children:(0,f.jsxs)("div",{className:I(v.contents),children:[b&&(0,f.jsxs)(f.Fragment,{children:[!n&&(0,f.jsx)(C.DaysCountdown,{targetDate:D}),n?(0,f.jsx)(C.HundredHoursCountdown,{targetDate:D}):(0,f.jsx)(C.TwentyFourHoursCountdown,{targetDate:D}),(0,f.jsx)(C.MinutesCountdown,{targetDate:D}),n&&(0,f.jsx)(C.SecondsCountdown,{targetDate:D})]}),B&&(0,f.jsx)(o.default,{k:"only_on_stays.live_countdown_badge"})]})})}):null};var s=n(r(d[2])),o=(r(d[3]),t(r(d[4]))),l=t(r(d[5])),u=t(r(d[6])),_=r(d[7]),c=n(r(d[8])),O=t(r(d[9])),E=r(d[10]),C=r(d[11]),x=r(d[12]),f=r(d[13]);const v={container:"c1gzmgk7 atm_c8_dlk8xv",contents:"c1qxxxva atm_9s_1txwivl atm_ar_vrvcex atm_cx_ftgil2"};function N({isEnglish:t,isCompact:n,isLive:s}){return t?x.MAX_ENGLISH_LIVE_BADGE_FONT_SIZE:s?n?x.MAX_COMPACT_LIVE_BADGE_FONT_SIZE:x.MAX_WIDE_LIVE_BADGE_FONT_SIZE:n?x.MAX_COMPACT_COUNTDOWN_BADGE_FONT_SIZE:x.MAX_WIDE_COUNTDOWN_BADGE_FONT_SIZE}const A=t=>{if(!t.current)return null;const n=window.getComputedStyle(t.current).fontSize.split('px')[0],s=parseInt(n,10);return Number.isNaN(s)?null:s}}),"a7d84e",["ba7a76","45f788","07aa1f","ea4b89","030c51","862e50","6607fa","4786a8","e0b071","329215","91d2dc","6de3f7","fb3a91","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.CountdownWithLabel=void 0;t(r(d[1])),r(d[2]);var c=r(d[3]),s=r(d[4]),l=t(r(d[5])),_=r(d[6]);const o="c1scdbqf atm_9s_1txwivl atm_ar_vrvcex atm_fc_1h6ojuz atm_cx_hgvujj atm_e2_1x4eueo",n="l19rjwvn atm_ti_1q9ccgz atm_g3_1x4eueo",u="cjuw5sq atm_cx_idpfg4";e.CountdownWithLabel=({label:t,className:h,style:x,...v})=>{const f=(0,c.useCx)(),{ref:j,width:w}=(0,s.useElementSize)({monitor:'width'});return(0,_.jsxs)("div",{className:f(h,o,v.monospaced&&u),style:{...x,width:w?`calc(2ch + ${Math.ceil(w)}px`:'auto'},children:[(0,_.jsx)(l.default,{...v}),(0,_.jsx)("span",{ref:j,className:f(n),children:t})]})}}),"aa00bc",["ba7a76","07aa1f","ea4b89","4786a8","c376e0","fb99ed","b8c07d"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default,n=r(d[1]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({showLargeBadge:t,state:n},T){const h=(0,o.default)()??A,C=(0,_.default)()===_.FORM_FACTOR.COMPACT?c.BADGE_SCALE_TO_COMPACT:c.BADGE_SCALE_TO_WIDE,[G,I]=(0,l.useState)(),B=(0,u.default)(T),{ref:M,width:v,height:N}=(0,s.useElementSize)({skip:!t,threshold:3}),{value:P,setTrue:p,setFalse:S}=(0,f.default)(!1);(0,E.useValuesOnChange)([t],((t,n)=>{null!==n?.[0]&&p()})),(0,E.useValuesOnChange)([v,N],((t,n)=>{null!==n?.[0]&&null!==n?.[1]&&S()})),(0,l.useEffect)((()=>{if(!t)return void I(D);const l=t&&n===O.OnlyOnListingState.COUNTDOWN,s=B&&T&&T>B,u=t&&n===O.OnlyOnListingState.LIVE&&s;v&&T&&(l||u)&&I(C*v/L(T))}),[T,n,t,v,C,B]);const $=(0,l.useMemo)((()=>R(t,G,h,v,N,P)),[v,N,t,G,h,P]);return{containerRef:M,scaleStyle:$}};var l=r(d[2]),s=r(d[3]),u=n(r(d[4])),o=n(r(d[5])),_=t(r(d[6])),E=r(d[7]),f=n(r(d[8])),O=r(d[9]),c=r(d[10]);const A='ltr',D=1/c.BADGE_RENDER_MULTIPLIER,L=t=>t+2*c.BADGE_HORIZONTAL_PADDING*c.BADGE_RENDER_MULTIPLIER,R=(t,n,l,s,u,o)=>{const _=o?'transform, width':'width',E=n?`scale(${n})`:void 0,f=n&&t&&u?`translateY(calc(${u/2}px - ${50*n}% - ${c.BADGE_TOP_MARGIN}px))`:void 0,O='ltr'===l?1:-1;return{transform:[n&&t&&s?`translateX(calc(${s/2*O}px - ${50*n*O}% - ${c.BADGE_LEFT_MARGIN*O}px))`:void 0,f,E].filter(Boolean).join(' '),transitionProperty:_}}}),"b1ffc6",["45f788","ba7a76","07aa1f","c376e0","82dbdd","dbfcd8","e0b071","47f664","329215","91d2dc","fb3a91"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MIN_IN_MS=e.MAX_WIDE_LIVE_BADGE_FONT_SIZE=e.MAX_WIDE_COUNTDOWN_BADGE_FONT_SIZE=e.MAX_ENGLISH_LIVE_BADGE_FONT_SIZE=e.MAX_COMPACT_LIVE_BADGE_FONT_SIZE=e.MAX_COMPACT_COUNTDOWN_BADGE_FONT_SIZE=e.HUNDRED_HOURS_IN_MS=e.HUNDRED_DAYS_IN_MS=e.HOUR_IN_MS=e.DAY_IN_MS=e.BADGE_TOP_MARGIN=e.BADGE_SCALE_TO_WIDE=e.BADGE_SCALE_TO_COMPACT=e.BADGE_RENDER_MULTIPLIER=e.BADGE_LEFT_MARGIN=e.BADGE_HORIZONTAL_PADDING=e.BADGE_FONT_SIZE=void 0;e.MIN_IN_MS=6e4,e.HOUR_IN_MS=36e5,e.HUNDRED_HOURS_IN_MS=36e7,e.DAY_IN_MS=864e5,e.HUNDRED_DAYS_IN_MS=864e7,e.BADGE_RENDER_MULTIPLIER=2,e.BADGE_FONT_SIZE=14,e.MAX_COMPACT_COUNTDOWN_BADGE_FONT_SIZE=20,e.MAX_WIDE_COUNTDOWN_BADGE_FONT_SIZE=16,e.MAX_COMPACT_LIVE_BADGE_FONT_SIZE=24,e.MAX_WIDE_LIVE_BADGE_FONT_SIZE=21,e.MAX_ENGLISH_LIVE_BADGE_FONT_SIZE=28,e.BADGE_HORIZONTAL_PADDING=16,e.BADGE_SCALE_TO_COMPACT=.8,e.BADGE_SCALE_TO_WIDE=.82,e.BADGE_TOP_MARGIN=12,e.BADGE_LEFT_MARGIN=12}),"fb3a91",[]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default,n=r(d[1]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({duration:t,steps:n,targetDate:v,enabled:_,monospaced:j}){const y=(0,s.useMemo)((()=>v.getTime()-Date.now()),[v,_]);if(t%n!=0)return(0,f.logger)((()=>'Countdown skipped, duration is not evenly divisible by steps')),null;const T=!(0,o.isWebSafari)()||(0,o.isWebSafariOverVersion)(p),w=t<=b;if(T&&w)return(0,c.jsx)(l.default,{duration:t,steps:n,remainingTime:y,monospaced:j});return(0,c.jsx)(u.default,{duration:t,steps:n,remainingTime:y,monospaced:j})};var s=n(r(d[2])),o=r(d[3]),u=t(r(d[4])),l=t(r(d[5])),f=r(d[6]),c=r(d[7]);const p=16,b=864e5}),"fb99ed",["ba7a76","45f788","07aa1f","e9b7bf","37ec6c","1742fe","9faabf","b8c07d"]);
__r("a9f4b1").extend({"only_on_stays.listing_card_availability_coming_soon":"Coming soon","only_on_stays.listing_card_availability_coming_later_today":"Coming later today","only_on_stays.only_on_stays.listing_card_availability_coming_tomorrow":"Coming tomorrow","only_on_stays.listing_card_availability_coming_date":"Coming %{date}","only_on_stays.only_on_stays.only_on_stays.only_on_stays.listing_card_availability_coming_year_month":"Coming %{year_month}","only_on_stays.only_on_stays.listing_card_availability_coming_year":"Coming %{year}","only_on_stays.only_on_stays.only_on_stays.listing_card_availability_coming_month":"Coming %{month}","pdp_platform.elvis.book_it.booking_closed":"Booking closed","only_on_stays.sold_out":"Sold out","only_on_stays.countdown_badge_days_char":"d","only_on_stays.countdown_badge_hours_char":"h","only_on_stays.countdown_badge_minutes_char":"m","only_on_stays.countdown_badge_seconds_char":"s","only_on_stays.live_countdown_badge":"Live","only_on_stays.countdown_badge_below_minute_a11y_description":"Live in less than 1 minute","only_on_stays.countdown_badge_days_a11y_description":"%{smart_count} day||||%{smart_count} days","only_on_stays.countdown_badge_hours_a11y_description":"%{smart_count} hour||||%{smart_count} hours","only_on_stays.countdown_badge_minutes_a11y_description":"%{smart_count} minute||||%{smart_count} minutes"});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/1cbe.3525c493a3.js.map