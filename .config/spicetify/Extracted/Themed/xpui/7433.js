"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7433],{43683:(e,n,a)=>{a.d(n,{q:()=>T,o:()=>_});var t=a(67294),i=a(94184),l=a.n(i),r=a(59440),s=a(97081),d=a(96206),o=a(51674),c=a(79896),u=a(26482),m=a(21663),k=a(88387),N=a(75012),g=a(40080),v=a(14130);const b="l_MW0G9qeeCKlVJwBykT",p="x-downloadButton-DownloadButton",f="x-downloadButton-button",S="_APVWqivXc4YqgsnpFkP",I="VmwiDoU6RpqyzK_n7XRO",y="rEx3EYgBzS8SoY7dmC6x";var h=a(85893);let T;!function(e){e[e.xs=16]="xs",e[e.sm=24]="sm",e[e.md=32]="md"}(T||(T={}));const x=e=>{const{currentTarget:n,detail:a}=e;a>0&&n&&n.blur()},_=({uri:e,isFollowing:n,canDownload:a=!0,onFollow:i,size:_=T.sm,className:D,onClick:P=(()=>{}),showUpsell:R=!0})=>{const w={"--size":`${_}px`},[A,C]=(0,t.useState)(!1),{capability:O,availability:L,addDownload:j,removeDownload:F}=(0,m._)(e),E=(0,k.A)(e);((e,n)=>{const a=(0,v.r)(),i=(0,t.useRef)(!1);(0,t.useEffect)((()=>{e===u.Om.DOWNLOADING&&!1===i.current&&(i.current=!0,a.say(d.ag.get("download.downloading",n.totalItems)))}),[a,e,n]);const l=(0,g.D)(e);(0,t.useEffect)((()=>{l===u.Om.DOWNLOADING&&e===u.Om.YES&&(i.current=!1,a.say(d.ag.get("download.complete")))}),[a,l,e])})(L,E);const U=(0,t.useCallback)((e=>{e.preventDefault(),O===u.PQ.NO_PERMISSION?P(e,u.mc.NO_PERMISSION):(!1===n?(i(),C(!0)):j(),P(e,u.mc.ADD)),x(e)}),[j,O,n,P,i]),V=(0,t.useCallback)((e=>{e.preventDefault(),F(),x(e),P(e,u.mc.REMOVE)}),[F,P]);(0,t.useEffect)((()=>{!0===A&&!0===n&&(j(),C(!1))}),[n,A,j]);const M=L===u.Om.YES;return O===u.PQ.NO_CAPABILITY||O===u.PQ.NO_PERMISSION_HIDE?null:(a||M)&&(O!==u.PQ.NO_PERMISSION||R)?O===u.PQ.NO_PERMISSION?(0,h.jsx)("div",{className:p,children:(0,h.jsx)(c.Nt,{offset:[-2,20],action:"toggle",trigger:"click",content:(0,h.jsx)(c.yv,{children:(0,h.jsx)("span",{children:d.ag.get("download.upsell")})}),renderInline:!1,children:(0,h.jsx)("div",{children:(0,h.jsx)(o._,{label:d.ag.get("download.download"),children:(0,h.jsx)("button",{className:l()(f,D),role:"switch",onClick:U,"aria-label":d.ag.get("download.download"),"aria-checked":!1,children:(0,h.jsx)(r.D,{iconSize:_})})})})})}):M?(0,h.jsx)(o._,{label:d.ag.get("download.remove"),children:(0,h.jsx)("button",{className:l()(f,D,S),role:"switch",onClick:V,"aria-label":d.ag.get("download.remove"),"aria-checked":!0,children:(0,h.jsx)(s.E,{iconSize:_})})}):L===u.Om.NO?(0,h.jsx)(o._,{label:d.ag.get("download.download"),children:(0,h.jsx)("button",{className:l()(f,D),role:"switch",onClick:U,"aria-label":d.ag.get("download.download"),"aria-checked":!1,children:(0,h.jsx)(r.D,{iconSize:_})})}):(0,h.jsxs)("div",{className:l()(I,D),role:"switch","aria-checked":!0,children:[(0,h.jsx)(o._,{label:d.ag.get("download.cancel"),children:(0,h.jsx)("button",{style:w,className:l()(f,b,D),onClick:V,"aria-label":d.ag.get("download.cancel")})}),(0,h.jsx)("span",{style:w,className:l()(y,b),children:(0,h.jsx)(N.e,{"aria-valuetext":d.ag.get("progress.downloading-tracks"),percentage:E.percentage,size:_})})]}):null}},13768:(e,n,a)=>{a.d(n,{i:()=>m});var t=a(67294),i=a(96206),l=a(18261),r=a(48528),s=a(4232),d=a(36590),o=a(8498),c=a(15368),u=a(85893);const m=t.memo((function(e){const{images:n,name:a,uri:t,type:m,year:k,sharingInfo:N,latest:g,showType:v,onClick:b,delegatePlayback:p=!1,isPlaying:f,onPlay:S,index:I,navigationUrl:y}=e,h=g?i.ag.get("artist.latest-release"):k;return(0,u.jsx)(l._,{menu:(0,u.jsx)(s.Y,{uri:t,sharingInfo:N}),children:(0,u.jsx)(d.C,{onClick:b,featureIdentifier:"album",headerText:a,uri:t,index:I,delegatePlayback:p,isPlaying:f,onPlay:S,navigationUrl:y,renderCardImage:()=>(0,u.jsx)(o.x,{images:n}),renderSubHeaderContent:()=>(0,u.jsxs)(u.Fragment,{children:[h&&(0,u.jsx)("time",{dateTime:(k||"").toString(),children:h}),v&&(0,u.jsx)("span",{className:c.Z.type,children:(0,r.R)(m)})]})})})}))},22578:(e,n,a)=>{a.d(n,{$:()=>k});var t=a(64593),i=a(96206),l=a(69691),r=a(8341),s=a(89952),d=a(67294),o=a(51615),c=a(24183);var u=a(85893);function m(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const k=({children:e,usePlayingItem:n})=>{let a=m(e);(e=>{const{mainLandmarkRef:n}=(0,c.Oh)(),a=(0,o.k6)(),t=a.location?.state?.preventMoveFocus,i=(0,d.useRef)(a.length<2);i.current=a.length<2,(0,d.useEffect)((()=>{const a=n.current;!t&&!i.current&&a&&e&&(a.setAttribute("aria-label",e),a.focus())}),[e,n,t])})(e);const{isPlaying:k}=(0,l.IK)(),N=(0,r.Y)((e=>e?.item));return N&&(k||n)&&((0,s.G_)(N)?a=[N.name,N.artists.map((e=>e.name)).join(i.ag.getSeparator())].join(" • "):(0,s.iw)(N)?a=[N.name,N.show.name].join(" • "):(0,s.k6)(N)&&(a=m(i.ag.get("ad-formats.advertisement")))),(0,u.jsx)(t.q,{defaultTitle:"Spotify",defer:!1,children:(0,u.jsx)("title",{children:a})})}},70369:(e,n,a)=>{a.d(n,{$:()=>t.$});var t=a(22578)},39119:(e,n,a)=>{a.d(n,{k:()=>b});var t=a(67294),i=a(86706),l=a(51615),r=a(32667),s=a(96206),d=a(63766),o=a(42922),c=a(55773),u=a(16526),m=a(91797),k=a(87093),N=a(61946);const g="artist-popularTrackList-seeMore";var v=a(85893);const b=({nrTracks:e,initialTracks:n,usePlayContextItem:a,parentEntityId:b})=>{const[p,f]=(0,t.useState)(!1),S=(0,t.useCallback)((()=>{f(!p)}),[p]),I=(0,l.TH)(),y=(0,c.vI)(u.k.InternalTrackLinks,I),h=(0,k.E)(),T=(0,i.v9)(N._5),x=(0,m.NY)(T,b||""),_=h&&(x||y),D=(0,t.useCallback)((({uri:e,contextUri:n,totalMilliseconds:t,name:i,artists:l,contentRating:r,isPlayable:s,playcount:o,imageUrl:c,albumUri:u},m)=>(0,v.jsx)(d.l0,{index:m,uri:e,contextUri:n,totalMilliseconds:t,name:i,artists:l,isPlayable:s,contentRating:r,playcount:o||0,imageUrl:c,albumUri:u,usePlayContextItem:a,showInternalTrackLinks:_},e)),[a,_]),P=(0,t.useCallback)((e=>e.uri),[]),R=(0,t.useMemo)((()=>[d.QD.INDEX,d.QD.TITLE,d.QD.PLAYS,d.QD.DURATION]),[]);return(0,v.jsxs)(o.ZP,{value:"artist-popular-tracks-list",children:[(0,v.jsx)(d.Pv,{ariaLabel:s.ag.get("tracklist.popular-tracks"),renderRow:D,nrTracks:Math.min(e,p?10:5),tracks:n,resolveUri:P,columns:R}),e>5?(0,v.jsx)("button",{"aria-expanded":p,className:g,onClick:S,children:(0,v.jsx)(r.D,{as:"div",variant:"minuetBold",children:p?s.ag.get("artist-page.tracks.showless"):s.ag.get("artist-page.tracks.seemore")})}):null]})}},3702:(e,n,a)=>{a.d(n,{L:()=>f});a(57658);var t=a(67294),i=a(86706),l=a(51615),r=a(63766),s=a(47094),d=a(63767),o=a(42922),c=a(3775),u=a(55773),m=a(16526),k=a(91797),N=a(87093),g=a(61946);a(98984);const v={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"queryAlbumTracks"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"offset"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"albumUnion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"tracks"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"Variable",name:{kind:"Name",value:"offset"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albumTracklistTrack"}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumTracklistTrack"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ContextTrack"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uid"}},{kind:"Field",name:{kind:"Name",value:"track"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"saved"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"playcount"}},{kind:"Field",name:{kind:"Name",value:"discNumber"}},{kind:"Field",name:{kind:"Name",value:"trackNumber"}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}},{kind:"Field",name:{kind:"Name",value:"relinkingInformation"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"linkedTrack"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"artists"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"20"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}}]}}]}}]};var b=a(85893);function p(e){return e.total_count>=2&&e.total_count<=10}const f=t.memo((function({ariaLabel:e,nrTracks:n,discs:a,albumUri:f,highlightUri:S,scrollToIndex:I,usePlayContextItem:y,hasHeaderRow:h=!0,parentEntityId:T}){const x=(0,s.ZO)()===d.W.Web,{request:_}=(0,t.useContext)(c.Ax),D=(0,t.useRef)(null),P=(0,t.useRef)(!1),[R,w]=(0,t.useState)(null),A=(0,l.TH)(),C=(0,u.vI)(m.k.InternalTrackLinks,A),O=(0,N.E)(),L=(0,i.v9)(g._5),j=(0,k.NY)(L,T||""),F=O&&(j||C);(0,t.useEffect)((()=>{D.current&&(R?D.current.scrollToIndex(R):I&&D.current.scrollToIndex(I))}),[R,I]);const E=(0,t.useMemo)((()=>function(e){return p(e)?e.items.reduce(((e,n)=>(e.push(n.number-1),e.concat(Array(n.total_tracks).fill(n.number)))),[]):null}(a)),[a]),U=(0,t.useCallback)(((e,t)=>_(v,{uri:f,offset:null!==E?e-E[e]:e,limit:t}).then((e=>{if("Album"!==e?.data.albumUnion?.__typename)return{items:[],totalLength:n};if(S&&!R){const n=e?.data?.albumUnion?.tracks.items?.findIndex((e=>e.track.uri===S));w(n||-1)}const t=((e,n)=>{if(!p(n)||!e)return e;let a=0;return e.reduce(((e,n)=>((n.track.trackNumber<a||1===n.track.trackNumber)&&e.push({discNumber:n.track.discNumber}),e.push(n),a=n.track.trackNumber,e)),[])})(e?.data?.albumUnion?.tracks.items,a)||[];return{items:t,totalLength:p(a)?a.total_count+n:n}}))),[_,f,E,S,R,a,n]),V=(0,t.useCallback)(((e,n)=>{if("discNumber"in e)return(0,b.jsx)(r.UT,{discNumber:e.discNumber},n+e.discNumber);const{uid:a,track:t}=e;let i;i=t.relinkingInformation&&"Track"===t.relinkingInformation.linkedTrack.__typename?t.relinkingInformation.linkedTrack.uri:t.uri;const l=t.playcount?parseInt(t.playcount,10):0,s=!(P.current||!S||S!==t.uri&&S!==i);return s&&(P.current=!0),(0,b.jsx)(r.Ym,{index:n,trackNumber:t.trackNumber,contextUri:f,uri:i,uid:a,duration_ms:t.duration.totalMilliseconds,name:t.name,isPlayable:t.playability.playable,artists:t.artists.items,contentRating:t.contentRating?.label,playcount:l,shouldRenderPlayCount:!x,shouldHighLight:s,usePlayContextItem:y,showInternalTrackLinks:F},n+t.uri)}),[S,f,x,y,F]),M=(0,t.useMemo)((()=>(e=>e?[r.QD.INDEX,r.QD.TITLE,r.QD.DURATION]:[r.QD.INDEX,r.QD.TITLE,r.QD.PLAYS,r.QD.DURATION])(x)),[x]),H=(0,t.useCallback)((e=>"track"in e?e.track.uri:""),[]);return(0,b.jsx)(o.ZP,{value:"album-tracklist",children:(0,b.jsx)(r.Pv,{ariaLabel:e,hasHeaderRow:h,rowPlaceholder:r.uD,columns:M,renderRow:V,resolveUri:H,nrTracks:p(a)?a.total_count+n:n,fetchTracks:U,limit:300,outerRef:D},f)})}))},61946:(e,n,a)=>{a.d(n,{Hw:()=>r,_5:()=>s});var t=a(20573),i=a(42781);const l=e=>e.seoExperiment,r=((0,t.P1)(l,(e=>e?.track)),(0,t.P1)(l,(e=>e?.track)),(0,t.P1)(l,(e=>e?.album))),s=(0,t.P1)(l,(e=>e&&void 0!==e[i.p.ARTIST]?e?.artist:e?.track))},40080:(e,n,a)=>{a.d(n,{D:()=>i});var t=a(67294);function i(e){const n=(0,t.useRef)();return(0,t.useEffect)((()=>{n.current=e}),[e]),n.current}},55773:(e,n,a)=>{a.d(n,{vI:()=>t});const t=(e,n)=>"1"===(n?new URLSearchParams(n.search):void 0)?.get(e)},16526:(e,n,a)=>{let t;a.d(n,{k:()=>t}),function(e){e.UnauthLyrics="ulotw",e.InternalTrackLinks="itl",e.RichAlbumPage="ralph",e.PathfinderAlbumPage="pfap",e.I18nSEO="i18nSEO",e.LanguageSelection="ls"}(t||(t={}))},34722:(e,n,a)=>{a.d(n,{B$:()=>r,GJ:()=>i,Hr:()=>t,qo:()=>l});a(57658);const t=e=>e?e.reduce(((e,n)=>(e.push(n.releases.items[0]),e)),[]):[],i=e=>`spotify:app:artist:${e}`,l=e=>`spotify:artist:${e}`,r=(e,n,a)=>({artists:[{uri:n,name:a}],images:e.coverArt?.sources||[],name:e.name,uri:e.uri,year:e.date?.year,type:e.type,sharingInfo:e.sharingInfo})},48528:(e,n,a)=>{a.d(n,{R:()=>l});var t=a(96206),i=a(15066);function l(e){switch(e){case i.n.SINGLE:return t.ag.get("single");case i.n.EP:return t.ag.get("ep");case i.n.COMPILATION:return t.ag.get("compilation");case i.n.ALBUM:default:return t.ag.get("album")}}},91797:(e,n,a)=>{let t,i,l;a.d(n,{NY:()=>d,FJ:()=>s}),function(e){e.UNAUTH_LYRICS="track-lyrics-unauth-1.0",e.RTP_AND_LYRICS_HOLDOUT="rtp-and-lyrics-holdout",e.RALPH_AND_ITL="ralph-itl-seo-test-1.0",e.ITL_ARTIST_AND_TRACK="artist-track-itl"}(t||(t={})),function(e){e.CONTROL="0",e.UNAUTH_LYRICS="1",e.RTP_HOLDOUT="2"}(i||(i={})),function(e){e.CONTROL="0",e.VARIANT="1"}(l||(l={}));const r=({treatment:e,entityId:n,experimentId:a,treatmentVariation:t})=>{if(e&&e[n]){const i=e[n];return i.experimentId===a&&i.treatment===t}return!1},s=(e,n)=>r({treatment:e,entityId:n,experimentId:t.RALPH_AND_ITL,treatmentVariation:l.VARIANT}),d=(e,n)=>r({treatment:e,entityId:n,experimentId:t.ITL_ARTIST_AND_TRACK,treatmentVariation:l.VARIANT})}}]);
//# sourceMappingURL=7433.js.map