__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=t(r(d[1])),o=r(d[2]),n=r(d[3]),l=r(d[4]),u=t(r(d[5])),p=t(r(d[6]));e.default=({location:t,match:c,loadQuery:f,previousLocation:h,previousPrepareProps:v,customPrepareNiobeData:_})=>{const{id:b}=c.params,{source_impression_id:y}=(0,u.default)(t.search),I=t.pathname.split(b)[0]===h?.pathname.split(b)[0];if(v&&I)return v;const P=Boolean(_.launchPdpUncaching),k=y||_.p3_impression_id||(0,l.generateId)();return{queryRef:f({query:s.default,variables:(0,o.getRequestVariables)({location:t,match:c,p3ImpressionId:k}),deferrable:P}),skeletonQueryRef:f({query:p.default,variables:{id:(0,n.createGlobalId)('StayListing',c.params.id)},skip:!P}),showDeferredSkeleton:P,isElvisListing:_.iconsSitarCheck===b,p3ImpressionId:k}}}),"1d2725",["ba7a76","7096f2","99b905","56afe0","eb5cb3","a7c4ef","31558b"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=t(r(d[1]));const f={document:void 0,getDocument:()=>r(d[3])(d[2]).then(u.default).then((t=>t.default)),name:'PdpEarlyFlushMetadataQueryV2',type:'query',operationId:'500d7049641722ac4b7942133db1868ba1e3df01fa8dc24fc019d1e62b5e3d69'};e.default=f}),"31558b",["ba7a76","45f788","576ad7","057569"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){const{amenities:n}=(0,u.default)(t.search);if(null==n||!Array.isArray(n))return null;return n.filter((t=>t)).map((t=>Number(t)))};var u=t(r(d[1]))}),"35872a",["ba7a76","a7c4ef"]);
__d((function(g,r,i,a,m,e,d){"use strict";function n(n){return window.btoa(n)}function t(n,t){return`${n}:${encodeURIComponent(t).replace(/%20/g,'+').replace(/\(/g,'%28').replace(/\)/g,'%29')}`}function o(n){const t=n.split(':'),[o,c]=t,l=c&&decodeURIComponent(c.replace(/\+/g,'%20').replace(/%28/g,'(').replace(/%29/g,')'));if(void 0===o||void 0===l)throw new Error('Failed to decode global ID');return{typename:o,internalId:l}}Object.defineProperty(e,"__esModule",{value:!0}),e.createGlobalId=function(o,c){return n(t(o,c))},e.getInternalId=function(n){const{internalId:t}=o((c=n,window.atob(c)));var c;return t},e.parseGlobalId=function(n){return n},e.stringifyGlobalId=function(n){return n}}),"56afe0",[]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.getTranslateUgcParam=function(t){return s(t.search)},e.setTranslateUgcParam=function(t){if(!g.window)return;if('function'!=typeof g.window.history.replaceState)return;if('UNDEFINED'===t)return;const s=(0,l.default)(),f='UNTRANSLATED'===t,h=(0,u.default)({...s,translate_ugc:String(f)},n.default),{hash:p,pathname:w,search:_}=window.location,y=(0,o.default)({params:h,pathname:w,search:_})+p;(0,c.getHistory)().replace(y)};var n=t(r(d[1])),u=t(r(d[2])),c=r(d[3]),l=t(r(d[4])),o=t(r(d[5]));function s(t){const{translate_ugc:n}=(0,l.default)(t);return n?'true'===n:null}}),"5dafcf",["ba7a76","88e3c5","c97d21","7934b6","a7c4ef","99d1d8"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=t(r(d[1]));const n={document:void 0,getDocument:()=>r(d[3])(d[2]).then(u.default).then((t=>t.default)),name:'StaysPdpSections',type:'query',operationId:'036017be486462ae7b1e9d9916e4dea14951cf33a75c242b92d267b468d97bfd'};e.default=n}),"7096f2",["ba7a76","45f788","0b8924","057569"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){const{display_extensions:u}=(0,n.default)(t.search);if(null==u||!Array.isArray(u))return null;return u.map((t=>'MONTHLY_STAYS'===t.toUpperCase()?'MONTHLY_STAYS':'LR_REDIRECT'===t.toUpperCase()?'LR_REDIRECT':'DATED_LTS'===t.toUpperCase()?'DATED_LTS':null))};var n=t(r(d[1]))}),"7692ad",["ba7a76","a7c4ef"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({id:t,queryParams:o}){const{confirmation_code:s,split_stays_uuid:n}=o;return{splitStaysId:n,stays:[{productId:t,confirmationCode:s}]}}}),"874bf3",[]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return c(t.search)};var u=t(r(d[1]));function c(t){const{pdp_type_override:c,tier_override:n}=(0,u.default)(t);if(n&&'0'===n)return'MARKETPLACE';switch(c){case'HOTEL':case'hotel':return'HOTEL';case'LUXE':case'luxe':return'LUXE';case'MARKETPLACE':case'marketplace':return'MARKETPLACE';default:return}}}),"8ceb28",["ba7a76","a7c4ef"]);
__d((function(g,r,i,a,m,e,d){"use strict";var t=r(d[0]).default;Object.defineProperty(e,"__esModule",{value:!0}),e.getRequestVariables=function({forSplitStays:t=!1,location:_,match:I,p3ImpressionId:y}){const h=(0,l.createGlobalId)('StayListing',I.params.id),f=(0,n.default)(_.search),{adults:k,bypass_targetings:S,cancellation_policy_id:b,category_tag:v,cause_id:N,check_in:P,check_out:T,children:O,disaster_id:B,discountedGuestFeeVersion:E=null,federatedSearchId:M=null,federated_search_id:U=null,force_boost_unc_priority_message_type:w,guests:A,infants:C,interactionType:G=null,mockId:R,omni_page_id:V,omni_version_id:q,original_check_in:x,original_check_out:D,pets:F,photoId:L=null,photo_id:W=null,preview:j,priceDropSource:z,private_booking:H,promotionUuid:J,rate_plan_id:K,relaxed_amenity_ids:Q,searchId:X=null,staysBookingMigrationEnabled:Y=null,useNewSectionWrapperApi:Z=null}=f,$={adults:k||A||'1',amenityFilters:(0,p.default)(_),bypassTargetings:'true'===S,categoryTag:v||null,causeId:N||null,children:O||null,disasterId:B||null,discountedGuestFeeVersion:Number(E)||null,displayExtensions:(0,u.default)(_),federatedSearchId:M||U,forceBoostPriorityMessageType:w||null,infants:C||null,interactionType:G,layouts:['SIDEBAR','SINGLE_COLUMN'],omniPageId:V,omniVersionId:q,pets:Number(F)||0,pdpTypeOverride:(0,s.default)(_)||null,photoId:L||W,preview:'true'===j,previousStateCheckIn:x||null,previousStateCheckOut:D||null,priceDropSource:z||null,privateBooking:'true'===H,promotionUuid:J||null,relaxedAmenityIds:Q||null,searchId:X,selectedCancellationPolicyId:Number(b)||null,selectedRatePlanId:Number(K)||null,splitStays:t?(0,c.default)({id:h,queryParams:f}):null,staysBookingMigrationEnabled:'true'===Y,translateUgc:(0,o.getTranslateUgcParam)(_),useNewSectionWrapperApi:'true'===Z,sectionIds:null,checkIn:null,checkOut:null,p3ImpressionId:y};P&&T&&($.checkIn=P,$.checkOut=T);return{id:h,pdpSectionsRequest:$,...R&&{mockIdentifier:R}}};var n=t(r(d[1])),l=r(d[2]),o=r(d[3]),s=t(r(d[4])),u=t(r(d[5])),c=t(r(d[6])),p=t(r(d[7]))}),"99b905",["ba7a76","a7c4ef","56afe0","5dafcf","8ceb28","7692ad","874bf3","35872a"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,u){return Object.entries(t).reduce(((t,[n,c])=>(u(c,n)&&(t[n]=c),t)),{})}}),"c97d21",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setImpressionId=e.resetImpressionId=e.generateId=e.default=void 0;var s=r(d[0]);let t;const n=()=>`p3_${(0,s.computeBev)('P3')}`;e.generateId=n;const o=()=>{t=n()};e.resetImpressionId=o;e.setImpressionId=s=>{t=s},o();e.default=()=>t}),"eb5cb3",["4304c2"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/gp-stays-pdp-route/routes/PdpPlatformRoute.prepare.df1264b20f.js.map