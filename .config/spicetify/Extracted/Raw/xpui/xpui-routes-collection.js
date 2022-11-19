"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[6309],{40771:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67892),a=n(85893);const s=({href:e,children:t,...n})=>(0,a.jsx)(r.Z,{to:e,...n,children:t})},56170:(e,t,n)=>{n.d(t,{P:()=>l});var r=n(67294),a=n(36590),s=n(8498),i=n(85893);const l=(0,r.memo)((function({index:e}){return(0,i.jsx)(a.C,{index:e,headerText:"",uri:"",renderCardImage:()=>(0,i.jsx)(s.x,{images:[]}),featureIdentifier:"unknown"})}))},22578:(e,t,n)=>{n.d(t,{$:()=>h});var r=n(64593),a=n(96206),s=n(69691),i=n(8341),l=n(89952),o=n(67294),c=n(51615),u=n(24183);var d=n(85893);function m(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const h=({children:e,usePlayingItem:t})=>{let n=m(e);(e=>{const{mainLandmarkRef:t}=(0,u.Oh)(),n=(0,c.k6)(),r=n.location?.state?.preventMoveFocus,a=(0,o.useRef)(n.length<2);a.current=n.length<2,(0,o.useEffect)((()=>{const n=t.current;!r&&!a.current&&n&&e&&(n.setAttribute("aria-label",e),n.focus())}),[e,t,r])})(e);const{isPlaying:h}=(0,s.IK)(),p=(0,i.Y)((e=>e?.item));return p&&(h||t)&&((0,l.G_)(p)?n=[p.name,p.artists.map((e=>e.name)).join(a.ag.getSeparator())].join(" • "):(0,l.iw)(p)?n=[p.name,p.show.name].join(" • "):(0,l.k6)(p)&&(n=m(a.ag.get("ad-formats.advertisement")))),(0,d.jsx)(r.q,{defaultTitle:"Spotify",defer:!1,children:(0,d.jsx)("title",{children:n})})}},70369:(e,t,n)=>{n.d(t,{$:()=>r.$});var r=n(22578)},30731:(e,t,n)=>{n.d(t,{u:()=>A});var r=n(67294),a=n(94184),s=n.n(a),i=n(32667),l=n(34011),o=n(6330),c=n(40771);const u="FvfvGU3jvHRskUU9v9_8",d="Q9AlbZn2EGzy3MTWXa8X",m="mxmxS0y8LiwSs5nueKPT",h="GXxVAveNFStY3pBI_NO4",p="eHcXC2s97InYP7rMNT0H";var g=n(85893);const A=(0,r.memo)((function(e){const{children:t,message:n,title:r,linkTitle:a,linkTo:A,onClick:f,renderInline:x=!1}=e,{isXSOnly:E,isSMOnly:C}=(0,o.e)(),j=E||C;return(0,g.jsxs)("section",{className:s()(u,{[d]:x}),children:[t,(0,g.jsx)(i.D,{as:"h1",variant:j?"cello":"alto",className:h,children:r}),(0,g.jsx)(i.D,{variant:j?"mesto":"ballad",className:p,children:n}),a&&(A||f)&&(0,g.jsx)(l.D,{colorSet:"invertedLight",className:m,href:A,onClick:f,component:c.Z,children:a})]})}))},76119:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(94184),a=n.n(r),s=n(34142),i=n(47921),l=n(32667),o=n(21965),c=n(20246),u=n(71379),d=n(78267),m=n(30005),h=n(36652),p=n(21691),g=n(63766),A=n(85893);const f=({heading:e,selected:t,onSelect:n,options:r,sortOrder:a})=>{let s;a&&(a===g.kn.ASC||a===g.kn.SECONDARY_ASC?s=u.C:a!==g.kn.DESC&&a!==g.kn.SECONDARY_DESC||(s=d.B));return(0,A.jsxs)(m.v,{getInitialFocusElement:e=>e?.querySelector('[aria-checked="true"]'),children:[e?(0,A.jsx)(h.F,{children:e}):null,r.map((({key:e,value:r})=>(0,A.jsx)(p.s,{role:"menuitemradio","aria-checked":e===t.key,CheckedIcon:s,onClick:()=>n(e),children:r},e)))]})},x="x-sortBox-sortDropdown",E="tPeL3BRKFCF4z2ibZpU7";const C=({isOpen:e})=>e?(0,A.jsx)(s.U,{iconSize:16,"aria-hidden":"true"}):(0,A.jsx)(i.i,{iconSize:16,"aria-hidden":"true"}),j=({heading:e,options:t,selected:n,onSelect:r,sortOrder:s,variant:i="mesto",semanticColor:u,disabled:d,onClick:m,useSortIcon:h})=>{const[p]=t;return n||(n=p),(0,A.jsx)(c.y,{menu:(0,A.jsx)(f,{selected:n,options:t,onSelect:r,sortOrder:s,heading:e}),children:(e,t,r)=>(0,A.jsxs)("button",{className:a()(x,{[E]:h}),onClick:e=>{d||(m?.(e),t(e))},ref:r,type:"button",children:[(0,A.jsx)(l.D,{semanticColor:u,variant:i,children:n.value}),h?(0,A.jsx)(o.w,{iconSize:16,"aria-hidden":"true"}):(0,A.jsx)(C,{isOpen:e})]})})}},69376:(e,t,n)=>{n.d(t,{n:()=>D});n(57658);var r=n(67294),a=n(94184),s=n.n(a),i=n(51615),l=n(32667),o=n(34142),c=n(47921),u=n(96206),d=n(24697),m=n(32648),h=n(85951);var p=n(32626),g=n(43031),A=n(30005),f=n(21691);const x="main-topBar-contentArea",E="muYk5XIwKmqR9iNibk_f",C="queue-tabBar-headerItem",j="queue-tabBar-moreButton",y="queue-tabBar-moreButtonActive",b="yxf_6IsQEmHjijEBUMTP",L="queue-tabBar-active",S="queue-tabBar-headerItemLink",T="queue-tabBar-header",R="queue-tabBar-chevron";var v=n(85893);const I=({items:e,activeItemId:t})=>(0,v.jsx)(A.v,{children:e.map((e=>e.disabled?(0,v.jsx)(f.s,{disabled:!0,role:"menuitemradio",className:b,onClick:e.handleClick,children:e.title},e.uri):(0,v.jsx)(f.s,{role:"menuitemradio",to:e.to,exact:!0,"aria-checked":e.itemId===t,className:b,activeClassName:L,onClick:e.handleClick,children:e.title},e.uri)))}),D=(0,r.memo)((function({isCentered:e,links:t,landmarkLabel:n,className:a}){const A=(0,r.useRef)(null),[f,b]=(0,r.useState)([]),[D,k]=(0,r.useState)(0),[_,O]=(0,r.useState)([]),w=function(){const[e,t]=(0,r.useState)(window.innerWidth),{scrollNodeChildRef:n}=(0,r.useContext)(m.VX),a=(0,d.y1)((e=>{e?.width&&t(e.width)}),250);return(0,h.y)({refOrElement:n,observeOnly:"width",onResize:a}),e}()??1/0,{pathname:N}=(0,i.TH)(),B=t.find((e=>e.to===N));return(0,r.useEffect)((()=>{A.current&&k(A.current.clientWidth)}),[w]),(0,r.useEffect)((()=>{if(!A.current)return;const e=Array.from(A.current.children).map((e=>e.clientWidth));b(e)}),[t]),(0,r.useEffect)((()=>{if(!A.current)return;if(f.slice(0,-1).reduce(((e,t)=>e+t),0)<=D)return void O([]);const e=f.reduce(((e,t)=>e>t?e:t),0),t=[];let n=e;f.forEach(((e,r)=>{D>=n+e?n+=e:t.push(r)})),O(t)}),[D,f]),(0,v.jsx)("nav",{className:s()(a,x),"aria-label":n,children:(0,v.jsxs)("ul",{className:e?E:T,ref:A,children:[t.filter(((e,t)=>!_.includes(t))).map((e=>(e?.render??(e=>e))((0,v.jsx)("li",{className:C,children:e.disabled?(0,v.jsx)("div",{className:S,children:(0,v.jsx)(l.D,{variant:"mestoBold",children:e.title})}):(0,v.jsx)(g.O,{exact:!0,className:S,activeClassName:L,to:e.to,onClick:e.handleClick,children:(0,v.jsx)(l.D,{variant:"mestoBold",children:e.title})})},e.to)))),_.length||0===f.length?(0,v.jsx)("li",{className:C,children:(0,v.jsx)(p.xV,{renderInline:!0,menu:(0,v.jsx)(I,{items:t.filter(((e,t)=>_.includes(t))),activeItemId:B?.itemId}),children:(e,t,n)=>(0,v.jsxs)("button",{className:s()(j,{[y]:B}),type:"button",onClick:t,ref:n,children:[(0,v.jsx)(l.D,{variant:"mestoBold",children:B?B.title:u.ag.get("more")}),e?(0,v.jsx)(o.U,{iconSize:16,className:R,"aria-hidden":"true"}):(0,v.jsx)(c.i,{iconSize:16,className:R,"aria-hidden":"true"})]})})}):null]})})}))},1834:(e,t,n)=>{n.d(t,{$:()=>o,Q:()=>l});var r=n(67294),a=n(22583),s=n(97641),i=n(85893);const l=(0,r.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:s.oT.ADDED_AT}),o=r.memo((function({uri:e,children:t,defaultSortOption:n}){return(0,i.jsx)(a.r,{uri:e,defaultState:n,sortContext:l,children:t})}))},97641:(e,t,n)=>{n.d(t,{Aq:()=>d,Bf:()=>R,EY:()=>f,G5:()=>C,JV:()=>v,MY:()=>o,Ru:()=>c,ZP:()=>x,a6:()=>g,aY:()=>L,e3:()=>p,ei:()=>l,o$:()=>m,oT:()=>i,pT:()=>b,rJ:()=>T,u3:()=>S,w0:()=>j});var r=n(96206),a=n(74483),s=n(9659);let i;!function(e){e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER"}(i||(i={}));const l={"show-alphabetical":i.SHOW_ALPHABETICAL,"book-alphabetical":i.BOOK_ALPHABETICAL,"episode-alphabetical":i.EPISODE_ALPHABETICAL,"playlist-alphabetical":i.PLAYLIST_ALPHABETICAL,"album-alphabetical":i.ALBUM_ALPHABETICAL,"recently-added":i.ADDED_AT,"creator-name":i.CREATOR_NAME,"creator-name-alphabetical":i.CREATOR_NAME_ALPHABETICAL,"album-creator-name":i.ALBUM_CREATOR_NAME,"recently-played":i.RECENTLY_PLAYED,"playlist-most-relevant":i.MOST_RELEVANT,"playlist-custom-order":i.CUSTOM_ORDER},o={[i.RECENTLY_PLAYED]:{key:"recently-played",get value(){return r.ag.get("collection.sort.recently-played")}},[i.ADDED_AT]:{key:"recently-added",get value(){return r.ag.get("collection.sort.recently-added")}},[i.SHOW_ALPHABETICAL]:{key:"show-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[i.BOOK_ALPHABETICAL]:{key:"book-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[i.EPISODE_ALPHABETICAL]:{key:"episode-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[i.PLAYLIST_ALPHABETICAL]:{key:"playlist-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[i.ALBUM_CREATOR_NAME]:{key:"album-creator-name",get value(){return r.ag.get("collection.sort.creator")}},[i.CREATOR_NAME]:{key:"creator-name",get value(){return r.ag.get("collection.sort.creator")}},[i.CREATOR_NAME_ALPHABETICAL]:{key:"creator-name-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[i.ALBUM_ALPHABETICAL]:{key:"album-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[i.MOST_RELEVANT]:{key:"playlist-most-relevant",get value(){return r.ag.get("collection.sort.most-relevant")}},[i.CUSTOM_ORDER]:{key:"playlist-custom-order",get value(){return r.ag.get("collection.sort.custom-order")}}},c=[i.ADDED_AT,i.ALBUM_ALPHABETICAL,i.CREATOR_NAME],u={[i.ADDED_AT]:{field:a.lY.ADDED_AT,order:a.As.DESC},[i.ALBUM_ALPHABETICAL]:{field:a.lY.NAME,order:a.As.ASC},[i.CREATOR_NAME]:{field:a.lY.ARTIST_NAME,order:a.As.ASC}},d=e=>{if(c.includes(e))return u[e]},m=[i.ADDED_AT,i.CREATOR_NAME_ALPHABETICAL],h={[i.ADDED_AT]:{field:a.hx.ADDED_AT,order:a.As.DESC},[i.CREATOR_NAME_ALPHABETICAL]:{field:a.hx.NAME,order:a.As.ASC}},p=e=>{if(m.includes(e))return h[e]},g=[i.ADDED_AT,i.SHOW_ALPHABETICAL],A={[i.ADDED_AT]:{field:a.hx.ADDED_AT,order:a.As.DESC},[i.SHOW_ALPHABETICAL]:{field:a.aW.NAME,order:a.As.ASC}},f=e=>{if(g.includes(e))return A[e]},x=[i.ADDED_AT,i.BOOK_ALPHABETICAL],E={[i.ADDED_AT]:a.VN.ADDED_AT,[i.BOOK_ALPHABETICAL]:a.VN.NAME},C=e=>{if(x.includes(e))return E[e]},j=[i.MOST_RELEVANT,i.RECENTLY_PLAYED,i.ADDED_AT,i.PLAYLIST_ALPHABETICAL,i.CUSTOM_ORDER],y={[i.ADDED_AT]:{field:s.bD.ADDED_AT,order:s.As.DESC},[i.RECENTLY_PLAYED]:{field:s.bD.RECENTLY_PLAYED,order:s.As.ASC},[i.PLAYLIST_ALPHABETICAL]:{field:s.bD.NAME,order:s.As.ASC},[i.MOST_RELEVANT]:{field:s.bD.RELEVANCE,order:s.As.DESC},[i.CUSTOM_ORDER]:void 0},b=e=>{if(j.includes(e))return y[e]},L=i.ADDED_AT,S=i.ADDED_AT,T=i.ADDED_AT,R=i.MOST_RELEVANT,v=i.ADDED_AT},64971:(e,t,n)=>{n.d(t,{h:()=>h});var r=n(67294),a=n(98816),s=n(98562),i=n(15852),l=n(76119),o=n(1834),c=n(97641),u=n(85893);const d=r.memo((function({sortOptions:e,onSort:t}){const{sortState:n,setSortState:a}=(0,r.useContext)(o.Q),s=(0,r.useCallback)((e=>{const n=c.ei[e];t?.(n),a(n)}),[t,a]),i=e.map((e=>c.MY[e])),d=c.MY[n];return(0,u.jsx)(l.A,{options:i,onSelect:s,selected:d})})),m="collection-searchBar-searchBar",h=r.memo((function({canSort:e,canFilter:t,filterPlaceholder:n,sortOptions:l}){const{spec:o,logger:c}=(0,i.fU)(a.createDesktopSearchBarEventFactory,{}),h=(0,r.useCallback)((()=>{c.logInteraction(o.filterFieldFactory().keyStrokeFilter())}),[c,o]),p=(0,r.useCallback)((()=>{c.logInteraction(o.filterFieldFactory().hitClearFilter())}),[c,o]),g=(0,r.useCallback)((()=>{c.logInteraction(o.sortButtonFactory().hitSort())}),[c,o]);return(0,u.jsxs)("div",{className:m,children:[t?(0,u.jsx)(r.Suspense,{fallback:null,children:(0,u.jsx)(s.K,{placeholder:n,onFilter:h,onClear:p})}):null,e?(0,u.jsx)(d,{sortOptions:l,onSort:g}):null]})}))},47032:(e,t,n)=>{n.d(t,{$:()=>r.$,Q:()=>r.Q});var r=n(1834)},38911:(e,t,n)=>{n.d(t,{Aq:()=>r.Aq,Bf:()=>r.Bf,EY:()=>r.EY,G5:()=>r.G5,JV:()=>r.JV,Ru:()=>r.Ru,ZP:()=>r.ZP,a6:()=>r.a6,aY:()=>r.aY,e3:()=>r.e3,o$:()=>r.o$,oT:()=>r.oT,pT:()=>r.pT,rJ:()=>r.rJ,u3:()=>r.u3,w0:()=>r.w0});var r=n(97641)},11102:(e,t,n)=>{n.r(t),n.d(t,{default:()=>it});var r=n(67294),a=n(86706),s=n(51615),i=n(19981),l=n(87577),o=n(73305),c=n(96206),u=n(70369),d=n(13983),m=n(49207),h=n(98773),p=n(12164),g=n(32667),A=n(72803),f=n(3634),x=n(94184),E=n.n(x),C=n(48817),j=n(85893);const y=({span:e,onInView:t,marginBottom:n,marginTop:a})=>{const s=(0,r.useRef)(null);return(0,r.useEffect)((()=>{if(!window.IntersectionObserver)return()=>{};const e=new window.IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&t()}))}));return s.current&&e.observe(s.current),()=>{e.disconnect()}}),[t]),e<=0?null:(0,j.jsx)("div",{style:{gridColumn:"1/-1",gridRow:`span ${e}`,marginBottom:n,marginTop:a},ref:s,"data-type":"sentinel"},"topSentinel")},b=({renderItems:e,nrItems:t,estimatedItemMaxHeight:n,scrollNodeRef:a,nrRowsOverscan:s=5,initalNrRows:i=5})=>{const[l,o]=(0,r.useState)({firstRowToRender:0,nrRows:i+s}),c=(0,r.useRef)(0),u=(0,r.useRef)(null),d=(0,r.useRef)(n),m=(0,r.useCallback)((()=>{const e=a.current;if(!e)return;const t=u.current?.querySelector(':scope > *:not([data-type="sentinel"])');d.current=t?t.getBoundingClientRect().height+C.w:d.current;const n=Math.floor((e.scrollTop-c.current)/d.current),r=Math.max(n-s,0),i=Math.ceil(e.offsetHeight/d.current)+2*s;r===l.firstRowToRender&&i===l.nrRows||o({firstRowToRender:r,nrRows:i})}),[s,l,a]),h=(0,r.useCallback)((({columnCount:n})=>{if(n<=0)return[null];const r=Math.ceil(t/n),a=l.firstRowToRender*n,i=l.firstRowToRender+l.nrRows-1,o=Math.min(t-1,(i+1)*n-1),c=d.current*(s-2);return[(0,j.jsx)(y,{span:l.firstRowToRender,onInView:m,marginBottom:`-${c}px`},`topSentinel-${l.firstRowToRender}`),e(a,o,n),(0,j.jsx)(y,{span:r-i,onInView:m,marginTop:`-${c}px`},"bottomSentinel-"+(r-i))]}),[t,s,m,e,l.firstRowToRender,l.nrRows]);return(0,r.useEffect)((()=>{const e=u.current,t=a.current;e&&t&&(c.current=e.getBoundingClientRect().top-t.getBoundingClientRect().top+t.scrollTop)}),[a]),(0,j.jsx)(C.T,{useUniformRowHeight:!0,ref:u,render:h})};var L=n(32648),S=n(53003),T=n(56170);const R="lA3jnNwnLc3CoYKT06Vz";function v({renderCard:e,nrCards:t,fetchData:n,limit:a=50,cardGridApiRef:s}){const{scrollNodeRef:i}=(0,r.useContext)(L.VX),{getItems:l,nrValidItems:o,invalidateCache:c,hasItems:u}=(0,S.Q)({nrItems:t,fetch:n,limit:a});(0,r.useImperativeHandle)(s,(()=>({update:()=>c()})));return(0,j.jsx)("div",{className:E()({[R]:!u}),children:(0,j.jsx)(b,{renderItems:(t,n,r)=>l(t,n).map(((n,a)=>(n?e(n,t+a,r):null)??(0,j.jsx)(T.P,{index:a},t+a))),scrollNodeRef:i,nrItems:o,estimatedItemMaxHeight:250})})}var I=n(30731),D=n(6158),k=n(22423),_=n(49343),O=n(42922),w=n(45342),N=n(15852),B=n(64971),P=n(47032),M=n(38911),Y=n(6489),H=n(76391);const U={offset:0,limit:1},F=()=>{const e=(0,r.useContext)(w.H);return(e=>{const[t,n]=(0,r.useState)(null),a=(0,r.useCallback)((async()=>{if(!e)return;const t=await e();n(t?.totalLength||0)}),[e]);return(0,r.useEffect)((()=>{null===t&&a()}),[t,a]),{total:t}})((0,r.useCallback)((()=>e?e?.getShows(U):Promise.resolve({totalLength:0})),[e]))};var V=n(47975);const Z=r.memo((function({nrAlbums:e}){const t=(0,r.useContext)(w.H),{filter:n}=(0,r.useContext)(k.fo),{sortState:a}=(0,r.useContext)(P.Q),s=(0,r.useRef)(null),{spec:i,UBIFragment:l}=(0,N.fU)(A.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:albums",identifier:o.Wg.YOURLIBRARY_ALBUMS}}),u=(0,r.useMemo)((()=>i.headerFactory()),[i]),d=(0,r.useCallback)((async(e,r)=>{const s=await t.getAlbums({offset:e,limit:r,filter:n,sort:(0,M.Aq)(a)});return{items:s.items,totalLength:s.totalLength}}),[t,n,a]),m=(0,r.useCallback)(((e,t)=>(0,j.jsx)(O.ZP,{value:"card",index:t,children:(0,j.jsx)(f.r,{index:t,uri:e.uri,name:e.name,images:e.images,artists:e.artists,sharingInfo:e.sharingInfo})},e.uri)),[]);return(0,j.jsxs)(l,{spec:i,children:[(0,j.jsx)(l,{spec:u,children:(0,j.jsxs)("div",{className:V.Z.header,children:[(0,j.jsx)(g.D,{as:"h1",variant:"canon",children:c.ag.get("albums")}),(0,j.jsx)(r.Suspense,{fallback:null,children:(0,j.jsx)(B.h,{canSort:t.getCapabilities().canSort,canFilter:t.getCapabilities().canFilter,filterPlaceholder:c.ag.get("collection.filter.albums"),sortOptions:M.Ru})})]})}),(0,j.jsx)(v,{nrCards:e,renderCard:m,fetchData:d,cardGridApiRef:s})]})})),W=r.memo((function(){const{total:e}=(()=>{const e=(0,r.useContext)(w.H),[t,n]=(0,r.useState)(null),a=(0,r.useCallback)((async()=>{if(!e)return;const t=await(e?.getAlbums(U));n(t?.totalLength||0)}),[e]);return(0,r.useEffect)((()=>{null===t&&a()}),[t,a]),(0,H.b)(Y.EW.UPDATE,a),{total:t}})();return null===e?(0,j.jsx)(D.h,{hasError:!1,errorMessage:c.ag.get("error.request-collection-albums-failure")}):e?(0,j.jsx)(Z,{nrAlbums:e}):(0,j.jsx)(I.u,{linkTo:"/search",linkTitle:c.ag.get("collection.empty-page.albums-cta"),message:c.ag.get("collection.empty-page.albums-subtitle"),title:c.ag.get("collection.empty-page.albums-title"),children:(0,j.jsx)(_.t,{type:"album"})})})),G=r.memo((function(){return(0,j.jsx)(P.$,{uri:"collection/albums",defaultSortOption:M.aY,children:(0,j.jsx)(k.hz,{uri:"collection/albums",children:(0,j.jsx)(W,{})})})}));var K=n(89477);const z=r.memo((function({nrArtists:e}){const t=(0,r.useContext)(w.H),{filter:n}=(0,r.useContext)(k.fo),{sortState:a}=(0,r.useContext)(P.Q),s=(0,r.useRef)(null),{spec:i,UBIFragment:l}=(0,N.fU)(A.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:artists",identifier:o.Wg.YOURLIBRARY_ARTISTS}}),u=(0,r.useMemo)((()=>i.headerFactory()),[i]),d=(0,r.useCallback)((async(e,r)=>{const s=await t.getArtists({offset:e,limit:r,filter:n,sort:(0,M.e3)(a)});return{items:s.items,totalLength:s.totalLength}}),[t,n,a]),m=(0,r.useCallback)(((e,t)=>(0,j.jsx)(O.ZP,{value:"card",index:t,children:(0,j.jsx)(K.I,{index:t,name:e.name,uri:e.uri,images:e.images})},e.uri)),[]);return(0,r.useEffect)((()=>{s.current&&s.current.update()}),[a,n,e]),(0,j.jsxs)(l,{spec:i,children:[(0,j.jsx)(l,{spec:u,children:(0,j.jsxs)("div",{className:V.Z.header,children:[(0,j.jsx)(g.D,{as:"h1",variant:"canon",children:c.ag.get("artists")}),(0,j.jsx)(r.Suspense,{fallback:null,children:(0,j.jsx)(B.h,{canSort:t.getCapabilities().canSort,canFilter:t.getCapabilities().canFilter,filterPlaceholder:c.ag.get("collection.filter.artists"),sortOptions:M.o$})})]})}),(0,j.jsx)(v,{nrCards:e,renderCard:m,fetchData:d,cardGridApiRef:s})]})})),$=r.memo((function(){const{total:e}=(()=>{const e=(0,r.useContext)(w.H),[t,n]=(0,r.useState)(null),a=(0,r.useCallback)((async()=>{if(!e)return;const t=await(e?.getArtists(U));n(t?.totalLength||0)}),[e]);return(0,r.useEffect)((()=>{null===t&&a()}),[t,a]),(0,H.b)(Y.EW.UPDATE,a),{total:t}})();return null===e?(0,j.jsx)(D.h,{hasError:!1,errorMessage:c.ag.get("error.request-collection-artists-failure")}):e>0?(0,j.jsx)(z,{nrArtists:e}):(0,j.jsx)(I.u,{message:c.ag.get("collection.empty-page.artists-subtitle"),title:c.ag.get("collection.empty-page.artists-title"),linkTo:"/search",linkTitle:c.ag.get("collection.empty-page.artists-cta"),children:(0,j.jsx)(_.t,{type:"artist"})})})),q=r.memo((function(){return(0,j.jsx)(P.$,{uri:"collection/artists",defaultSortOption:M.u3,children:(0,j.jsx)(k.hz,{uri:"collection/artists",children:(0,j.jsx)($,{})})})}));var X=n(51216);const Q=r.memo((function({nrBooks:e}){const t=(0,r.useContext)(w.H),{filter:n}=(0,r.useContext)(k.fo),{sortState:a}=(0,r.useContext)(P.Q),{spec:s,UBIFragment:i}=(0,N.fU)(A.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:audiobooks",identifier:o.Wg.YOURLIBRARY_AUDIOBOOKS}}),l=(0,r.useMemo)((()=>s.headerFactory()),[s]),u=(0,r.useRef)(null),d=(0,r.useCallback)((async(e,r)=>{const s=await t.getBooks({offset:e,limit:r,filter:n,sort:(0,M.G5)(a)});return{items:s.items.map((e=>(e=>""===e.authorName&&""===e.name)(e)?null:e)),totalLength:s.totalLength}}),[t,n,a]),m=(0,r.useCallback)(((e,t)=>(0,j.jsx)(O.ZP,{value:"card",index:t,children:(0,j.jsx)(X.c,{index:t,uri:e.uri,name:e.name,images:e.images,authorName:e.authorName,isLocked:e.isLocked})},e.uri)),[]);return(0,j.jsxs)(i,{spec:s,children:[(0,j.jsx)(i,{spec:l,children:(0,j.jsxs)("div",{className:V.Z.header,children:[(0,j.jsx)(g.D,{as:"h1",variant:"canon",children:c.ag.get("search.title.audiobooks")}),(0,j.jsx)(B.h,{canSort:t.getCapabilities().canSort,canFilter:t.getCapabilities().canFilter,filterPlaceholder:"Search in Audiobooks",sortOptions:M.ZP})]})}),(0,j.jsx)(v,{nrCards:e,renderCard:m,fetchData:d,cardGridApiRef:u})]})})),J=r.memo((function(){const{total:e}=(()=>{const e=(0,r.useContext)(w.H),[t,n]=(0,r.useState)(null),a=(0,r.useCallback)((async()=>{if(!e)return;const t=await(e?.getBooks(U));n(t?.totalLength||0)}),[e]);return(0,r.useEffect)((()=>{null===t&&a()}),[t,a]),(0,H.b)(Y.EW.UPDATE,a),{total:t}})();return null===e?(0,j.jsx)(D.h,{hasError:!1,errorMessage:c.ag.get("error.request-collection-albums-failure")}):e>0?(0,j.jsx)(Q,{nrBooks:e}):(0,j.jsx)(I.u,{linkTo:"/search",linkTitle:c.ag.get("collection.empty-page.books-cta"),message:c.ag.get("collection.empty-page.books-subtitle"),title:c.ag.get("collection.empty-page.books-title"),children:(0,j.jsx)(_.t,{type:"book"})})})),ee=r.memo((function(){return(0,j.jsx)(P.$,{uri:"collection/books",defaultSortOption:M.JV,children:(0,j.jsx)(k.hz,{uri:"collection/books",children:(0,j.jsx)(J,{})})})}));n(57658);var te=n(46309),ne=n(74895),re=n(24697),ae=n(36590),se=n(8498),ie=n(98620),le=n(13947),oe=n(72131),ce=n(45788),ue=n(66393),de=n(91389),me=n(84242),he=n(69691),pe=n(74589);const ge=function({uri:e,name:t,images:n,index:a}){const s=(0,ce.u)(),i=(0,r.useRef)(null),l=(0,r.useRef)(!0),o=(0,r.useContext)(ue.t),{isPlaying:u}=(0,he.cR)(oe.b),{togglePlay:d}=(0,me.n)({uri:oe.b,pages:[{items:i.current?.map((e=>({...e,provider:null})))||[]}]},{featureIdentifier:"local_files"});(0,r.useEffect)((()=>(l.current=!0,()=>{l.current=!1})),[]);const m=(0,de.I)(),h=(0,re.y1)((async(e,t)=>{if(!i.current){const e=await o.getTracks();i.current=e}l&&d({loggingParams:t},{uri:oe.b,pages:[{items:i.current?.map((e=>({...e,provider:null})))||[]}]})}),le.s_,{leading:!0,trailing:!1});return s.canFetchAllTracks&&m?(0,j.jsx)(ae.Z,{index:a,delegatePlayback:!0,delegateLogging:!0,isPlaying:u,onPlay:h,headerText:t,featureIdentifier:"local_files",uri:e,renderCardImage:()=>(0,j.jsx)(se.x,{images:n,FallbackComponent:pe.S}),renderSubHeaderContent:()=>(0,j.jsx)("span",{children:c.ag.get("local-files.description")})}):null},Ae=({index:e})=>{const t=(0,ie.gB)();return(0,j.jsx)(r.Suspense,{fallback:null,children:(0,j.jsx)(ge,{index:e,name:t.name,uri:t.uri,images:t.images})})};var fe=n(49068),xe=n(64269),Ee=n(42624),Ce=n(29255),je=n(72138),ye=n(42781),be=n(38470),Le=n(21610),Se=n(39561),Te=n(22247);const Re="collection-collectionEntityHeroCard-likedSongs",ve="collection-collectionEntityHeroCard-container",Ie="kST1INfbHSxzydJffBq_",De="collection-collectionEntityHeroCard-headerContainer",ke="collection-collectionEntityHeroCard-tracksContainer",_e="lBs1v3T3HAPrOxfyWemr",Oe="collection-collectionEntityHeroCard-descriptionContainer",we="d8ifuAZX8mK644AwlRZK";function Ne(e,t){return Array.from(new Array(e).keys()).map((e=>(0,j.jsx)(Te.C,{as:"div",className:_e,charCount:t,isLoading:!0},e)))}const Be=({index:e,onClick:t})=>{const n=(0,Se.MY)({limit:7}),{user:r}=(0,a.v9)(Ce.Gg),s=(0,ie.I2)(r?.id);return s?(0,j.jsx)(Le.Z,{index:e,className:E()(Re,ve),onClick:t,headerText:s.name,featureIdentifier:"your_library",uri:s.uri,ariaPlayLabel:c.ag.get("playlist.a11y.play",s.name),ariaPauseLabel:c.ag.get("playlist.a11y.pause",s.name),renderCardImage:()=>{return(0,j.jsx)("div",{className:De,children:(0,j.jsx)("div",{className:ke,children:n?(e=n,e.items.map((({uri:e,name:t,artists:[n]},r)=>(0,j.jsxs)("span",{children:[(0,j.jsx)("span",{className:we,children:r?" • ":""}),(0,j.jsx)("span",{dir:"auto",children:n.name}),(0,j.jsx)("span",{dir:"auto",className:we,children:t})]},e)))):Ne(3)})});var e},renderSubHeaderContent:()=>(0,j.jsx)("div",{className:Oe,children:n?`${n.totalLength} ${s.name}`:Ne(1,s.name.length)})}):null},Pe=(e,t,n)=>(0,j.jsx)(O.ZP,{value:"card",index:t,children:n},`${e.uri}`??0),Me=(e,t,n)=>{switch(e.type){case ye.p.LIKED_SONGS:return Pe(e,t,n>1?(0,j.jsx)(Be,{index:t},e.uri):(0,j.jsx)(ne.p,{index:t},e.uri));case ye.p.YOUR_EPISODES:return Pe(e,t,(0,j.jsx)(xe.T,{index:t},e.uri));case ye.p.LOCAL_FILES:return Pe(e,t,(0,j.jsx)(Ae,{index:t},e.uri));case ye.p.PLAYLIST:return Pe(e,t,(0,j.jsx)(te.Z,{index:t,name:e.name,uri:e.uri,images:e.images,description:e.description,authorName:e.owner?.displayName,isPlayable:e.totalLength>0},e.uri));case"placeholder":return Pe(e,t,(0,j.jsx)(te.Z,{index:t,uri:e.uri,name:"",images:[],description:"",authorName:""},e.uri));case"empty":return(0,j.jsx)(r.Fragment,{},t);case"folder":return null;default:return(0,be._)(e),null}},Ye=r.memo((function({nrPlaylists:e,showYourEpisodesCard:t,showLocalFilesCard:n}){const{filter:s}=(0,r.useContext)(k.fo),{sortState:i}=(0,r.useContext)(P.Q),l=(0,r.useContext)(je.BS),u=(0,r.useRef)(null),d=(0,a.v9)(Ce.Gg).user,{spec:m,UBIFragment:h}=(0,N.fU)(A.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:playlists",identifier:o.Wg.YOURLIBRARY_PLAYLISTS}}),p=(0,r.useMemo)((()=>m.headerFactory()),[m]),f=(0,r.useMemo)((()=>{const e=[];if(s)return e;const r=(0,ie.I2)(d?.id);r&&(e.push(r),e.push({uri:"",type:"empty"}));const a=t?(0,ie.bl)(d?.id):null;a&&e.push(a);const i=n?(0,ie.gB)():null;return i&&e.push(i),e}),[s,n,t,d]),x=(0,r.useCallback)((()=>{u?.current&&u.current.update()}),[u]);(0,je.iu)(x);const E=(0,r.useCallback)((async(e,t)=>{const n=f.slice(e),r=e-(f.length-n.length),a=await l.getContents({offset:r,limit:t,filter:s,sort:(0,M.pT)(i),flatten:!0,decorateImagesAndOwner:!0}),o=a.items.map((e=>"placeholder"===e.type?null:e));return{items:[...n,...o],totalLength:a.totalItemCount+f.length}}),[f,l,s,i]);return(0,j.jsxs)(h,{spec:m,children:[(0,j.jsx)(h,{spec:p,children:(0,j.jsxs)("div",{className:V.Z.header,children:[(0,j.jsx)(g.D,{as:"h1",variant:"canon",children:c.ag.get("playlists")}),(0,j.jsx)(r.Suspense,{fallback:null,children:(0,j.jsx)(B.h,{canSort:l.getCapabilities().canSort,canFilter:l.getCapabilities().canFilter,filterPlaceholder:c.ag.get("collection.filter.playlists"),sortOptions:M.w0})})]})}),(0,j.jsx)(v,{nrCards:e+f.length,renderCard:Me,fetchData:E,cardGridApiRef:u})]})})),He=r.memo((function(){const e=(0,je.Rt)(),t=(0,fe.x)(),n=(0,ce.u)(),{createPlaylist:a}=(0,Ee.K)(),s=(0,de.I)(),i=(0,r.useCallback)((()=>{a()}),[a]);return null===e||null===t?(0,j.jsx)(D.h,{hasError:!1,errorMessage:c.ag.get("error.request-collection-albums-failure")}):e?.playlistCount?(0,j.jsx)(Ye,{nrPlaylists:e.playlistCount,showYourEpisodesCard:t.totalLength>0,showLocalFilesCard:n.canFetchAllTracks&&s}):(0,j.jsx)(I.u,{linkTitle:c.ag.get("collection.empty-page.playlists-cta"),onClick:i,title:c.ag.get("collection.empty-page.playlists-title"),message:c.ag.get("collection.empty-page.playlists-subtitle"),children:(0,j.jsx)(_.t,{type:"playlist"})})})),Ue=r.memo((function(){return(0,j.jsx)(P.$,{uri:"collection/playlists",defaultSortOption:M.Bf,children:(0,j.jsx)(k.hz,{uri:"collection/playlists",children:(0,j.jsx)(He,{})})})}));var Fe=n(95332),Ve=n(49552),Ze=n(21794),We=n(143),Ge=n(19480);const Ke=()=>{const e="ginger-audio-shows-top-20-web",{view:t}=(0,Ve.P)(e);if(!t)return null;const{content:n,name:r}=t,{total:a=0,items:s}=n;return(0,j.jsx)(Ge.P,{title:r,total:a,seeAllUri:(0,Ze.p)(e),children:s.filter((e=>"show"===e.type)).map(((e,t)=>(0,j.jsx)(Fe._,{name:e.name,uri:e.uri,images:e.images,publisher:e.publisher,mediaType:{audio:We.E.AUDIO,video:We.E.VIDEO,mixed:We.E.MIXED}[e.media_type]??We.E.AUDIO,sharingInfo:null,index:t},e.uri)))})};var ze=n(70937),$e=n(66257);function qe(e,t){return Array.from(new Array(e).keys()).map((e=>(0,j.jsx)(Te.C,{as:"div",className:_e,charCount:t,isLoading:!0},e)))}const Xe=({index:e})=>{const t=(0,Se.j$)({limit:7}),{user:n}=(0,a.v9)(Ce.Gg),r=(0,ie.bl)(n?.id);return r?(0,j.jsx)(Le.Z,{index:e,className:E()(Re,Ie),headerText:r.name,featureIdentifier:"your_library",uri:r.uri,ariaPlayLabel:c.ag.get("playlist.a11y.play",r.name),ariaPauseLabel:c.ag.get("playlist.a11y.pause",r.name),renderCardImage:()=>{return(0,j.jsx)("div",{className:De,children:(0,j.jsx)("div",{className:ke,children:t?(e=t,e.items.map((({uri:e,name:t,show:n},r)=>(0,j.jsxs)("span",{children:[(0,j.jsx)("span",{className:we,children:r?" • ":""}),(0,j.jsx)("span",{dir:"auto",children:t}),(0,j.jsx)("span",{dir:"auto",className:we,children:n.name})]},e)))):qe(3)})});var e},renderSubHeaderContent:()=>(0,j.jsx)("div",{className:Oe,children:t?c.ag.get("tracklist-header.episodes-counter",t.totalLength):qe(1,r.name.length)})}):null},Qe=r.memo((function({nrShows:e}){const t=(0,r.useContext)(w.H),{filter:n}=(0,r.useContext)(k.fo),{sortState:s}=(0,r.useContext)(P.Q),i=(0,r.useRef)(!1),l=(0,r.useRef)({entities:[],total:e}),[u,d]=(0,r.useState)(0),{user:m}=(0,a.v9)(Ce.Gg),{spec:h,UBIFragment:p}=(0,N.fU)(A.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:podcasts",identifier:o.Wg.YOURLIBRARY_SHOWS}}),f=(0,r.useMemo)((()=>h.headerFactory()),[h]),x=(0,r.useCallback)((async(e,r,a=!1)=>{if(!i.current){i.current=!a;const o=await t.getShows({offset:e,limit:r,filter:n,sort:(0,M.EY)(s)});l.current=function(e,t,n){const r={...n};return r.entities=t?e.items||[]:r.entities.concat(e.items||[]),r.total=e.totalLength,r}(o,a,l.current),i.current=!1,d((e=>e+1))}}),[t,n,s,l]),E=(0,r.useCallback)((e=>{l.current=function(e,t){const n={...t},r=t.entities.filter((t=>t.uri!==e));return n.total=(t.total||0)-(t.entities.length-r.length),n.entities=r,n}(e,l.current),d((e=>e+1))}),[]);(0,r.useEffect)((()=>{x(0,50,!!u)}),[n,s]);const y=(0,r.useCallback)((()=>{l.current.entities.length!==l.current.total&&x(l.current.entities.length,50)}),[x,l]);return(0,j.jsx)(p,{spec:h,children:(0,j.jsxs)(ze.C,{onReachBottom:y,children:[(0,j.jsx)(p,{spec:f,children:(0,j.jsxs)("div",{className:V.Z.header,children:[(0,j.jsx)(g.D,{as:"h1",variant:"canon",children:c.ag.get("podcasts")}),(0,j.jsx)(r.Suspense,{fallback:null,children:(0,j.jsx)(B.h,{canSort:t.getCapabilities().canSort,canFilter:t.getCapabilities().canFilter,filterPlaceholder:c.ag.get("collection.filter.podcasts"),sortOptions:M.a6})})]})}),(0,j.jsx)($e.r,{onLibraryItemRemove:E,children:(0,j.jsx)(O.ZP,{value:"EntitiesGrid",children:(0,j.jsx)(C.T,{render:()=>{const e=(0,ie.bl)(m?.id),t=n||!e||0===l.current.entities.length?[]:[(0,j.jsx)(r.Suspense,{fallback:null,children:(0,j.jsx)(Xe,{index:0})},"your-episodes-card")],a=t.length>0;return t.concat(l.current.entities.map(((e,t)=>{const n=a?t+1:t;return(0,j.jsx)(O.ZP,{value:"card",index:n,children:(0,j.jsx)(Fe._,{index:n,name:e.name,uri:e.uri,images:e.images,publisher:e.publisher,sharingInfo:null})},e.uri)})))}})})})]})})})),Je=r.memo((function(){const{total:e}=F(),{productState:t}=(0,a.v9)(Ce.Gg),n=!!t&&parseInt(t.ads,10)>0;return null===e?(0,j.jsx)(D.h,{hasError:!1,errorMessage:c.ag.get("error.request-collection-shows-failure")}):e?(0,j.jsx)(Qe,{nrShows:e}):(0,j.jsxs)("div",{className:E()(V.Z.emptyStateContainer,{[V.Z.adBarEnabled]:n}),children:[(0,j.jsx)(I.u,{linkTo:"/genre/podcasts-web",linkTitle:c.ag.get("collection.empty-page.shows-cta"),message:c.ag.get("collection.empty-page.shows-subtitle"),title:c.ag.get("collection.empty-page.shows-title"),renderInline:!0,children:(0,j.jsx)(_.t,{type:"show"})}),(0,j.jsx)(Ke,{})]})})),et=r.memo((function(){return(0,j.jsx)(P.$,{uri:"collection/podcasts",defaultSortOption:M.rJ,children:(0,j.jsx)(k.hz,{uri:"collection/podcasts",children:(0,j.jsx)(Je,{})})})}));var tt=n(48414),nt=n(69376),rt=n(28638);const at=({isAudiobooksEnabled:e})=>{const t=(0,a.v9)(h.rH),{spec:n,logger:s}=(0,N.fU)(tt.createDesktopLibraryTopbarEventFactory,{}),i=(0,r.useMemo)((()=>[{title:c.ag.get("playlists"),itemId:"collection.tab-playlists",to:"/collection/playlists",uri:"spotify:app:collection:playlists"},...t?[{title:c.ag.get("podcasts"),itemId:"collection.tab-podcasts",to:"/collection/podcasts",uri:"spotify:app:collection:podcasts"}]:[],...e?[{title:c.ag.get("search.title.audiobooks"),itemId:"collection.tab-audiobooks",to:"/collection/audiobooks",uri:"spotify:app:collection:audiobooks"}]:[],{title:c.ag.get("artists"),itemId:"collection.tab-artists",to:"/collection/artists",uri:"spotify:app:collection:artists"},{title:c.ag.get("albums"),itemId:"collection.tab-albums",to:"/collection/albums",uri:"spotify:app:collection:albums"}].map(((e,t)=>{const r=e.uri;return{...e,handleClick:()=>{const e=n.linkFactory({position:t,uri:r}).hitUiNavigate({destination:r});s.logInteraction(e)}}}))),[t,e,s,n]);return(0,j.jsx)(rt.w,{children:(0,j.jsx)(nt.n,{className:V.Z.tabBar,links:i})})},st=r.lazy((async()=>await n.e(4246).then(n.bind(n,33377)))),it=()=>{const e=(0,a.v9)(h.rH),t=(0,l.W6)(m.uB);return(0,d.z)("your_library"),(0,j.jsxs)("section",{className:"contentSpacing",children:[(0,j.jsx)(u.$,{children:c.ag.get("collection.page-title")}),(0,j.jsxs)(s.rs,{children:[(0,j.jsx)(i.lt,{path:"/collection/artists",children:(0,j.jsx)(p.K,{pageId:o.Wg.YOURLIBRARY_ARTISTS,children:(0,j.jsx)(q,{})})}),(0,j.jsx)(i.lt,{path:"/collection/albums",children:(0,j.jsx)(p.K,{pageId:o.Wg.YOURLIBRARY_ALBUMS,children:(0,j.jsx)(G,{})})}),(0,j.jsx)(i.lt,{path:"/collection/playlists",children:(0,j.jsx)(p.K,{pageId:o.Wg.YOURLIBRARY_PLAYLISTS,children:(0,j.jsx)(Ue,{})})}),e&&(0,j.jsx)(i.lt,{path:"/collection/podcasts",children:(0,j.jsx)(p.K,{pageId:o.Wg.YOURLIBRARY_SHOWS,children:(0,j.jsx)(et,{})})}),t&&(0,j.jsx)(i.lt,{path:"/collection/audiobooks",children:(0,j.jsx)(p.K,{pageId:o.Wg.YOURLIBRARY_AUDIOBOOKS,children:(0,j.jsx)(ee,{})})}),(0,j.jsx)(i.lt,{path:"/collection/music-downloads",children:(0,j.jsx)(p.K,{pageId:o.Wg.YOURLIBRARY_DOWNLOADS,children:(0,j.jsx)(st,{})})})]}),(0,j.jsx)(at,{isAudiobooksEnabled:t})]})}},74589:(e,t,n)=>{n.d(t,{S:()=>i});var r=n(92100);const a="fRZRXRIV2YBCFLYgwDAr";var s=n(85893);const i=({iconSize:e=64,...t})=>(0,s.jsx)("div",{className:a,children:(0,s.jsx)(r._,{iconSize:e,...t,semanticColor:"textBrightAccent","aria-hidden":!0})})},6330:(e,t,n)=>{n.d(t,{e:()=>h});var r=n(62142);const a="(min-width: 0px)",s="(min-width: 0px) and (max-width: 767px)",i="(min-width: 768px)",l="(min-width: 768px) and (max-width: 1023px)",o="(min-width: 1024px)",c="(min-width: 1024px) and (max-width: 1279px)",u="(min-width: 1280px)",d="(min-width: 1280px) and (max-width: 1919px)",m="(min-width: 1920px)",h=()=>({isXS:(0,r.a)(a),isXSOnly:(0,r.a)(s),isSM:(0,r.a)(i),isSMOnly:(0,r.a)(l),isMD:(0,r.a)(o),isMDOnly:(0,r.a)(c),isLG:(0,r.a)(u),isLGOnly:(0,r.a)(d),isXL:(0,r.a)(m)})},49552:(e,t,n)=>{n.d(t,{P:()=>m});var r=n(67294),a=n(88767),s=n(87961),i=n(71518),l=(n(57658),n(86706)),o=n(87577),c=n(94321),u=n(29255),d=n(8247);const m=(e,t)=>{const n=(()=>{const e=(0,o.W6)(d.Xf),t=(0,l.v9)(c.rZ),{locale:n,overrides:a}=(0,l.v9)(u.Gg),s=a?.country||t,i=a?.locale||n;return(0,r.useMemo)((()=>{const t=["album","playlist","artist","show","station","episode","merch","artist_concerts"];return e&&t.push("uri_link"),{country:s,locale:i,types:t.join(",")}}),[s,e,i])})(),{data:m,fetchNextPage:h}=(0,a.useInfiniteQuery)(["useView",e,n],(async({pageParam:t})=>void 0===t?async function(e,t){const{body:n}=await i.kO.getView(s.b.getInstance(),e,t);return n}(e,n):async function(e){const{body:t}=await i.TV.getGeneric(s.b.getInstance(),e);return t}(t)),{cacheTime:t?.cacheTime??18e5,staleTime:t?.staleTime??3e5,getNextPageParam:e=>e.content.next??void 0,getPreviousPageParam:e=>e.content.previous??void 0});return{view:(0,r.useMemo)((()=>m?.pages.reduce(((e,t)=>({...e,content:{...e.content,href:t.content.href,next:t.content.next,offset:t.content.offset,previous:t.content.previous,total:t.content.total,items:e.content.items.concat(t.content.items)}})))),[m?.pages]),getNextPage:h}}},70937:(e,t,n)=>{n.d(t,{C:()=>u});var r=n(67294),a=n(97650),s=n(94184),i=n.n(s);const l="eqw9lvuoZHrkWMTdyTpY",o="lb08f71wES9AQnKx6e0R";var c=n(85893);const u=r.memo((function(e){const{triggerOnInitialLoad:t=!1,onReachBottom:n,showScrollbar:s=!0,horizontalScroll:u=!1,className:d}=e,{ref:m,inView:h}=(0,a.YD)({initialInView:t});return(0,r.useEffect)((()=>{h&&n&&n()}),[h,n]),(0,c.jsxs)("div",{className:i()({[o]:!s,[l]:u},d),"data-testid":"infinite-scroll-list",children:[e.children,(0,c.jsx)("div",{ref:m})]})}))},91389:(e,t,n)=>{n.d(t,{I:()=>a});var r=n(30302);function a(){return(0,r.S)()[0]}},47975:(e,t,n)=>{n.d(t,{Z:()=>r});const r={header:"collection-collection-header",tabBar:"collection-collection-tabBar",AddToPlaylistIcon:"collection-collection-AddToPlaylistIcon",emptyStateContainer:"collection-collection-emptyStateContainer",adBarEnabled:"collection-collection-adBarEnabled"}}}]);
//# sourceMappingURL=xpui-routes-collection.js.map