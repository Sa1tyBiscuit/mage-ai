(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9015],{59739:function(e,t,n){"use strict";var r=n(56669);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,u){if(u!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},47329:function(e,t,n){e.exports=n(59739)()},56669:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},44152:function(e,t,n){"use strict";n.d(t,{r:function(){return s}});var r=n(82684);const o=e=>{let t;const n=new Set,r=(e,r)=>{const o="function"===typeof e?e(t):e;if(o!==t){const e=t;t=r?o:Object.assign({},t,o),n.forEach((n=>n(t,e)))}},o=()=>t,i={setState:r,getState:o,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>n.clear()};return t=e(r,o,i),i};var i=n(81550);const{useSyncExternalStoreWithSelector:u}=i;const c=e=>{const t="function"===typeof e?(e=>e?o(e):o)(e):e,n=(e,n)=>function(e,t=e.getState,n){const o=u(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return(0,r.useDebugValue)(o),o}(t,e,n);return Object.assign(n,t),n};var a=e=>e?c(e):c;const s=e=>{const t=a((()=>e)),n=(Object.keys(e),(e,n)=>{t.setState((t=>{return{[e]:(r=t[e],o=n,"function"==typeof o?o(r):o)};var r,o}))});return{useGlobalState:e=>{const o=(0,r.useCallback)((t=>t[e]),[e]);return[t(o),(0,r.useCallback)((t=>n(e,t)),[e])]},getGlobalState:e=>t.getState()[e],setGlobalState:n,subscribe:(e,n)=>{t.subscribe(((t,r)=>{t[e]!==r[e]&&n(t[e])}))}}}},1589:function(e,t,n){"use strict";var r=n(82684);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},i=r.useState,u=r.useEffect,c=r.useLayoutEffect,a=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(r){return!0}}var l="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,l=r[1];return c((function(){o.value=n,o.getSnapshot=t,s(o)&&l({inst:o})}),[e,n,t]),u((function(){return s(o)&&l({inst:o}),e((function(){s(o)&&l({inst:o})}))}),[e]),a(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},73847:function(e,t,n){"use strict";var r=n(82684),o=n(48216);var i="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},u=o.useSyncExternalStore,c=r.useRef,a=r.useEffect,s=r.useMemo,l=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var f=c(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;f=s((function(){function e(e){if(!a){if(a=!0,u=e,e=r(e),void 0!==o&&d.hasValue){var t=d.value;if(o(t,e))return c=t}return c=e}if(t=c,i(u,e))return t;var n=r(e);return void 0!==o&&o(t,n)?t:(u=e,c=n)}var u,c,a=!1,s=void 0===n?null:n;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]}),[t,n,r,o]);var p=u(e,f[0],f[1]);return a((function(){d.hasValue=!0,d.value=p}),[p]),l(p),p}},48216:function(e,t,n){"use strict";e.exports=n(1589)},81550:function(e,t,n){"use strict";e.exports=n(73847)},94629:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(82394),o=n(21831),i=n(82684),u=n(50724),c=n(82555),a=n(97618),s=n(70613),l=n(79626),f=n(68899),d=n(28598);function p(e,t){var n=e.children,r=e.noPadding;return(0,d.jsx)(f.HS,{noPadding:r,ref:t,children:n})}var h=i.forwardRef(p),b=n(62547),g=n(82571),S=n(98464),v=n(77417),m=n(46684),O=n(70515),y=n(53808),E=n(19183);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){e.addProjectBreadcrumbToCustomBreadcrumbs;var n=e.after,r=e.afterHeader,p=e.afterHidden,T=e.afterWidth,A=e.afterWidthOverride,x=e.appendBreadcrumbs,Z=e.before,j=e.beforeWidth,w=e.breadcrumbs,I=e.children,_=e.errors,R=e.headerMenuItems,N=e.headerOffset,k=e.hideAfterCompletely,C=e.mainContainerHeader,L=e.navigationItems,H=e.setAfterHidden,M=e.setErrors,Y=e.subheaderChildren,D=e.subheaderNoPadding,B=e.title,W=e.uuid,G=(0,E.i)().width,V="dashboard_after_width_".concat(W),K="dashboard_before_width_".concat(W),F=(0,i.useRef)(null),U=(0,i.useState)(A?T:(0,y.U2)(V,T)),Q=U[0],X=U[1],J=(0,i.useState)(!1),q=J[0],$=J[1],z=(0,i.useState)(Z?Math.max((0,y.U2)(K,j),13*O.iI):null),ee=z[0],te=z[1],ne=(0,i.useState)(!1),re=ne[0],oe=ne[1],ie=(0,i.useState)(null)[1],ue=(0,v.Z)().project,ce=[];w&&ce.push.apply(ce,(0,o.Z)(w)),null!==w&&void 0!==w&&w.length&&!x||!ue||null!==w&&void 0!==w&&w.length||ce.unshift({bold:!x,label:function(){return B}}),(0,i.useEffect)((function(){null===F||void 0===F||!F.current||q||re||null===ie||void 0===ie||ie(F.current.getBoundingClientRect().width)}),[q,Q,re,ee,F,ie,G]),(0,i.useEffect)((function(){q||(0,y.t8)(V,Q)}),[p,q,Q,V]),(0,i.useEffect)((function(){re||(0,y.t8)(K,ee)}),[re,ee,K]);var ae=(0,S.Z)(T);return(0,i.useEffect)((function(){A&&ae!==T&&X(T)}),[A,T,ae]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.Z,{title:B}),(0,d.jsx)(l.Z,{breadcrumbs:ce,menuItems:R}),(0,d.jsxs)(f.Nk,{ref:t,children:[0!==(null===L||void 0===L?void 0:L.length)&&(0,d.jsx)(f.lm,{showMore:!0,children:(0,d.jsx)(g.Z,{navigationItems:L,showMore:!0})}),(0,d.jsx)(a.Z,{flex:1,flexDirection:"column",children:(0,d.jsxs)(b.Z,{after:n,afterHeader:r,afterHeightOffset:m.Mz,afterHidden:p,afterMousedownActive:q,afterWidth:Q,before:Z,beforeHeightOffset:m.Mz,beforeMousedownActive:re,beforeWidth:f.k1+(Z?ee:0),headerOffset:N,hideAfterCompletely:!H||k,leftOffset:Z?f.k1:null,mainContainerHeader:C,mainContainerRef:F,setAfterHidden:H,setAfterMousedownActive:$,setAfterWidth:X,setBeforeMousedownActive:oe,setBeforeWidth:te,children:[Y&&(0,d.jsx)(h,{noPadding:D,children:Y}),I]})})]}),_&&(0,d.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===M||void 0===M?void 0:M(null)},children:(0,d.jsx)(c.Z,P(P({},_),{},{onClose:function(){return null===M||void 0===M?void 0:M(null)}}))})]})}var x=i.forwardRef(A)},85385:function(e,t,n){"use strict";n.d(t,{Qq:function(){return h},Z7:function(){return b},cH:function(){return o},du:function(){return d},fp:function(){return f},j5:function(){return p},uM:function(){return l}});var r,o,i=n(82394),u=n(57653),c=n(82359),a=n(72473),s=n(86735),l="sideview",f=90;!function(e){e.ADDON_BLOCKS="addon_blocks",e.BLOCK_SETTINGS="block_settings",e.CALLBACKS="callbacks",e.CHARTS="charts",e.DATA="data",e.EXTENSIONS="power_ups",e.FILE_VERSIONS="file_versions",e.GRAPHS="graphs",e.INTERACTIONS="interactions",e.REPORTS="reports",e.SECRETS="secrets",e.SETTINGS="settings",e.TERMINAL="terminal",e.TREE="tree",e.VARIABLES="variables"}(o||(o={}));o.BLOCK_SETTINGS,o.CALLBACKS,o.CHARTS,o.DATA,o.EXTENSIONS,o.TREE;var d=[o.DATA];function p(e){var t,n,r,i=[{key:o.TREE,label:"Tree"},{buildLabel:function(e){var t=(e.pipeline||{}).widgets,n=void 0===t?[]:t;return(null===n||void 0===n?void 0:n.length)>=1?"Charts (".concat(n.length,")"):"Charts"},key:o.CHARTS},{buildLabel:function(e){var t=e.variables;return(null===t||void 0===t?void 0:t.length)>=1?"Variables (".concat(t.length,")"):"Variables"},key:o.VARIABLES},{buildLabel:function(e){var t=e.secrets;return(null===t||void 0===t?void 0:t.length)>=1?"Secrets (".concat(t.length,")"):"Secrets"},key:o.SECRETS}];return u.qL.PYSPARK!==(null===e||void 0===e||null===(t=e.pipeline)||void 0===t?void 0:t.type)&&i.push.apply(i,[{buildLabel:function(e){e.pipeline;return"Add-on blocks"},key:o.ADDON_BLOCKS},{buildLabel:function(e){var t=(e.pipeline||{}).extensions,n=void 0===t?{}:t,r=0;return Object.values(n).forEach((function(e){var t=e.blocks;r+=(null===t||void 0===t?void 0:t.length)||0})),r>=1?"Power ups (".concat(r,")"):"Power ups"},key:o.EXTENSIONS}]),i.push.apply(i,[{key:o.DATA,label:"Data"},{key:o.TERMINAL,label:"Terminal"},{key:o.BLOCK_SETTINGS,label:"Block settings"}]),null!==e&&void 0!==e&&null!==(n=e.project)&&void 0!==n&&null!==(r=n.features)&&void 0!==r&&r[c.d.INTERACTIONS]&&i.push({key:o.INTERACTIONS,label:"Interactions"}),i}function h(e){return(0,s.HK)(p(e),(function(e){return e.key}))}var b=(r={},(0,i.Z)(r,o.ADDON_BLOCKS,a.EJ),(0,i.Z)(r,o.BLOCK_SETTINGS,a.JG),(0,i.Z)(r,o.CALLBACKS,a.AQ),(0,i.Z)(r,o.CHARTS,a.GQ),(0,i.Z)(r,o.DATA,a.iA),(0,i.Z)(r,o.EXTENSIONS,a.Bf),(0,i.Z)(r,o.INTERACTIONS,a.yd),(0,i.Z)(r,o.SECRETS,a.Yo),(0,i.Z)(r,o.SETTINGS,a.Zr),(0,i.Z)(r,o.TERMINAL,a.oI),(0,i.Z)(r,o.TREE,a.mp),(0,i.Z)(r,o.VARIABLES,a.LO),r)},75083:function(e,t,n){"use strict";n.d(t,{HF:function(){return i},L6:function(){return r}});var r,o=n(72473);function i(e,t,n){var i=e.owner,u=(e.roles,[{Icon:o.Vz,id:r.WORKSPACES,isSelected:function(){return r.WORKSPACES===n},label:function(){return"Workspaces"},linkProps:{href:"/manage"}}]);return i&&u.push({Icon:o.NO,id:r.USERS,isSelected:function(){return r.USERS===n},label:function(){return"Users"},linkProps:{href:"/manage/users"}}),u.push.apply(u,[{Icon:o.Zr,id:r.SETTINGS,isSelected:function(){return r.SETTINGS===n},label:function(){return"Settings"},linkProps:{href:"/manage/settings"}},{Icon:o.$B,id:r.FILE_BROWSER,isSelected:function(){return r.FILE_BROWSER===n},label:function(){return"File browser"},linkProps:{href:"/manage/files"}}]),u}!function(e){e.WORKSPACES="workspaces",e.USERS="users",e.SETTINGS="settings",e.FILE_BROWSER="file_browser"}(r||(r={}))},59533:function(e,t,n){"use strict";var r=n(82684),o=n(94629),i=n(35686),u=n(70515),c=n(75083),a=n(50178),s=n(28598);t.Z=function(e){var t=e.before,n=e.breadcrumbs,l=void 0===n?[]:n,f=e.children,d=e.errors,p=e.headerOffset,h=e.mainContainerHeader,b=e.pageName,g=e.setErrors,S=e.subheaderChildren,v=i.ZP.statuses.list().data,m=(0,r.useMemo)((function(){var e,t;return null===v||void 0===v||null===(e=v.statuses)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.project_type}),[v]),O=(0,a.PR)()||{};return(0,s.jsx)(o.Z,{before:t,beforeWidth:t?50*u.iI:0,breadcrumbs:l,errors:d,headerOffset:p,mainContainerHeader:h,navigationItems:(0,c.HF)(O,m,b),setErrors:g,subheaderChildren:S,title:"Workspaces",uuid:"workspaces/index",children:f})}},89706:function(e,t,n){"use strict";n.d(t,{JD:function(){return g},Lu:function(){return u},PF:function(){return p},aZ:function(){return i},dT:function(){return c},n6:function(){return l},nB:function(){return b},oy:function(){return h},xF:function(){return d}});var r,o,i,u,c,a=n(82394),s=n(44425);!function(e){e.DBT="dbt"}(i||(i={})),function(e){e.CSV="csv",e.JSON="json",e.MD="md",e.PY="py",e.R="r",e.SH="sh",e.SQL="sql",e.TXT="txt",e.YAML="yaml",e.YML="yml"}(u||(u={})),function(e){e.INIT_PY="__init__.py",e.METADATA_YAML="metadata.yaml",e.REQS_TXT="requirements.txt"}(c||(c={}));var l=[u.PY,u.SQL],f=[u.JSON,u.MD,u.PY,u.R,u.SH,u.SQL,u.TXT,u.YAML,u.YML],d=new RegExp(f.map((function(e){return".".concat(e,"$")})).join("|")),p=(new RegExp(f.map((function(e){return".".concat(e,"$")})).join("|")),"charts"),h="pipelines",b=(r={},(0,a.Z)(r,u.MD,s.t6.MARKDOWN),(0,a.Z)(r,u.JSON,u.JSON),(0,a.Z)(r,u.PY,s.t6.PYTHON),(0,a.Z)(r,u.R,s.t6.R),(0,a.Z)(r,u.SQL,s.t6.SQL),(0,a.Z)(r,u.TXT,"text"),(0,a.Z)(r,u.YAML,s.t6.YAML),(0,a.Z)(r,u.YML,s.t6.YAML),r),g=(o={},(0,a.Z)(o,s.t6.MARKDOWN,u.MD),(0,a.Z)(o,s.t6.PYTHON,u.PY),(0,a.Z)(o,s.t6.R,u.R),(0,a.Z)(o,s.t6.SQL,u.SQL),(0,a.Z)(o,s.t6.YAML,u.YAML),(0,a.Z)(o,"text",u.TXT),o)},72098:function(e,t,n){"use strict";var r;n.d(t,{U:function(){return r}}),function(e){e.PYSPARK="pysparkkernel",e.PYTHON3="python3"}(r||(r={}))},57653:function(e,t,n){"use strict";n.d(t,{$1:function(){return b},G7:function(){return v},LM:function(){return m},Mj:function(){return O},QK:function(){return h},RH:function(){return S},a_:function(){return E},fj:function(){return T},kA:function(){return y},qL:function(){return c},r0:function(){return g}});var r,o,i,u,c,a=n(75582),s=n(82394),l=n(72473),f=n(72098);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}!function(e){e.INTEGRATION="integration",e.PYTHON="python",e.PYSPARK="pyspark",e.STREAMING="streaming"}(c||(c={}));var h,b,g,S=(r={},(0,s.Z)(r,c.INTEGRATION,"Integration"),(0,s.Z)(r,c.PYTHON,"Python"),(0,s.Z)(r,c.PYSPARK,"PySpark"),(0,s.Z)(r,c.STREAMING,"Streaming"),r),v=(o={},(0,s.Z)(o,c.INTEGRATION,"Integration"),(0,s.Z)(o,c.PYTHON,"Standard"),(0,s.Z)(o,c.PYSPARK,"PySpark"),(0,s.Z)(o,c.STREAMING,"Streaming"),o),m="all",O=(c.PYTHON,c.INTEGRATION,c.STREAMING,i={},(0,s.Z)(i,m,l.ie),(0,s.Z)(i,c.INTEGRATION,l.YC),(0,s.Z)(i,c.PYTHON,l.El),(0,s.Z)(i,c.STREAMING,l.dB),i);!function(e){e.ACTIVE="active",e.INACTIVE="inactive",e.NO_SCHEDULES="no_schedules",e.RETRY="retry",e.RETRY_INCOMPLETE_BLOCK_RUNS="retry_incomplete_block_runs"}(h||(h={})),function(e){e.GROUP="group_by",e.HISTORY_DAYS="from_history_days",e.NO_TAGS="no_tags",e.SEARCH="search",e.STATUS="status[]",e.TAG="tag[]",e.TYPE="type[]"}(b||(b={})),function(e){e.STATUS="status",e.TAG="tag",e.TYPE="type"}(g||(g={}));var y=[h.ACTIVE,h.INACTIVE,h.NO_SCHEDULES],E=(u={},(0,s.Z)(u,c.PYTHON,f.U.PYTHON3),(0,s.Z)(u,c.PYSPARK,f.U.PYSPARK),u),T=Object.entries(E).reduce((function(e,t){var n=(0,a.Z)(t,2),r=n[0],o=n[1];return p(p({},e),{},(0,s.Z)({},o,r))}),{})},65956:function(e,t,n){"use strict";var r=n(38626),o=n(55485),i=n(38276),u=n(30160),c=n(44897),a=n(42631),s=n(47041),l=n(70515),f=n(28598),d=(0,r.css)(["padding:","px;padding-bottom:","px;padding-top:","px;"],2*l.iI,1.5*l.iI,1.5*l.iI),p=r.default.div.withConfig({displayName:"Panel__PanelStyle",componentId:"sc-1ct8cgl-0"})(["border-radius:","px;overflow:hidden;"," "," "," "," "," "," "," "," "," "," "," ",""],a.n_,(function(e){return e.fullWidth&&"\n    width: 100%;\n  "}),(function(e){return!e.borderless&&"\n    border: 1px solid ".concat((e.theme.interactive||c.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.success&&"\n    background-color: ".concat((e.theme.background||c.Z.background).successLight,";\n  ")}),(function(e){return e.success&&!e.borderless&&"\n    border: 1px solid ".concat((e.theme.background||c.Z.background).success,";\n  ")}),(function(e){return!e.dark&&!e.success&&"\n    background-color: ".concat((e.theme.background||c.Z.background).panel,";\n  ")}),(function(e){return e.dark&&"\n    background-color: ".concat((e.theme.background||c.Z.background).content,";\n  ")}),(function(e){return!e.fullHeight&&"\n    height: fit-content;\n  "}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,"px;\n  ")}),(function(e){return e.minWidth&&"\n    min-width: ".concat(e.minWidth,"px;\n\n    @media (max-width: ").concat(e.minWidth,"px) {\n      min-width: 0;\n    }\n  ")}),(function(e){return e.borderless&&"\n    border: none;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),h=r.default.div.withConfig({displayName:"Panel__HeaderStyle",componentId:"sc-1ct8cgl-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;"," "," "," ",""],a.n_,a.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||c.Z.background).chartBlock,";\n    border-bottom: 1px solid ").concat((e.theme.interactive||c.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),d,(function(e){return e.headerPaddingVertical&&"\n    padding-bottom: ".concat(e.headerPaddingVertical,"px;\n    padding-top: ").concat(e.headerPaddingVertical,"px;\n  ")})),b=r.default.div.withConfig({displayName:"Panel__ContentStyle",componentId:"sc-1ct8cgl-2"})(["overflow-y:auto;padding:","px;height:100%;"," "," "," "," ",""],1.75*l.iI,s.w5,(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: calc(".concat(e.maxHeight," - ").concat(15*l.iI,"px);\n  ")}),(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),g=r.default.div.withConfig({displayName:"Panel__FooterStyle",componentId:"sc-1ct8cgl-3"})(["border-style:",";border-top-width:","px;padding:","px;"],a.M8,a.YF,1.75*l.iI);t.Z=function(e){var t=e.borderless,n=e.children,r=e.containerRef,c=e.contentContainerRef,a=e.dark,s=e.footer,l=e.fullHeight,d=void 0===l||l,S=e.fullWidth,v=void 0===S||S,m=e.header,O=e.headerHeight,y=e.headerIcon,E=e.headerPaddingVertical,T=e.headerTitle,P=e.maxHeight,A=e.maxWidth,x=e.minWidth,Z=e.noPadding,j=e.overflowVisible,w=e.subtitle,I=e.success;return(0,f.jsxs)(p,{borderless:t,dark:a,fullHeight:d,fullWidth:v,maxHeight:P,maxWidth:A,minWidth:x,overflowVisible:j,ref:r,success:I,children:[(m||T)&&(0,f.jsxs)(h,{headerPaddingVertical:E,height:O,children:[m&&m,T&&(0,f.jsx)(o.ZP,{alignItems:"center",justifyContent:"space-between",children:(0,f.jsxs)(o.ZP,{alignItems:"center",children:[y&&y,(0,f.jsx)(i.Z,{ml:y?1:0,children:(0,f.jsx)(u.ZP,{bold:!0,default:!0,children:T})})]})})]}),(0,f.jsxs)(b,{maxHeight:P,noPadding:Z,overflowVisible:j,ref:c,children:[w&&"string"===typeof w&&(0,f.jsx)(i.Z,{mb:2,children:(0,f.jsx)(u.ZP,{default:!0,children:w})}),w&&"string"!==typeof w&&w,n]}),s&&(0,f.jsx)(g,{children:s})]})}},35185:function(e,t,n){"use strict";var r=n(82394),o=n(91835),i=(n(82684),n(38626)),u=n(44897),c=n(42631),a=n(70515),s=n(28598);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=i.default.div.withConfig({displayName:"ProgressBar__ProgressBarContainerStyle",componentId:"sc-10x9ojc-0"})(["border-radius:","px;height:","px;overflow:hidden;position:relative;width:100%;",""],c.BG,.75*a.iI,(function(e){return"\n    background-color: ".concat((e.theme.monotone||u.Z.monotone).grey200,";\n  ")})),p=i.default.div.withConfig({displayName:"ProgressBar__ProgressBarStyle",componentId:"sc-10x9ojc-1"})(["height:inherit;position:absolute;"," "," "," ",""],(function(e){return!e.danger&&"\n    background-color: ".concat((e.theme.progress||u.Z.progress).positive,";\n  ")}),(function(e){return e.progress&&"\n    width: ".concat(e.progress,"%;\n  ")}),(function(e){return e.danger&&"\n    background-color: ".concat((e.theme.progress||u.Z.progress).negative,";\n  ")}),(function(e){return e.animateProgress&&"\n    animation: animate-progress ".concat(e.animateProgress.duration,"ms linear forwards;\n\n    @keyframes animate-progress {\n      0% {\n        width: ").concat(e.animateProgress.start,"%;\n      }\n\n      100% {\n        width: ").concat(e.animateProgress.end,"%;\n      }\n    }\n  ")}));t.Z=function(e){var t=(0,o.Z)({},e);return(0,s.jsx)(d,f(f({},t),{},{children:(0,s.jsx)(p,f({},t))}))}},83087:function(e,t,n){"use strict";n.r(t);var r=n(77837),o=n(38860),i=n.n(o),u=n(82684),c=n(65557),a=n(10553),s=n(29618),l=n(90758),f=n(93808),d=n(38276),p=n(59533),h=n(35686),b=n(86735),g=n(15610),S=n(69419),v=n(97133),m=n(75083),O=n(28598);function y(){var e=(0,u.useState)(null),t=e[0],n=e[1],r=(0,S.iV)(),o=r.file_path,i=(0,u.useMemo)((function(){var e=r["file_paths[]"]||[];return Array.isArray(e)||(e=[e]),e}),[r]),f=(0,u.useCallback)((function(e){var t=encodeURIComponent(e),n=(0,S.iV)()["file_paths[]"]||[];Array.isArray(n)||(n=[n]),n.includes(t)||n.push(t),(0,g.u)({file_path:t,"file_paths[]":n})}),[]),y=h.ZP.files.list(),E=y.data,T=y.mutate,P=(0,u.useMemo)((function(){return(null===E||void 0===E?void 0:E.files)||[]}),[E]),A=(0,u.useRef)(null),x=(0,u.useState)(null),Z=x[0],j=x[1],w=(0,u.useState)([]),I=w[0],_=w[1],R=(0,u.useState)({}),N=R[0],k=R[1],C=(0,u.useMemo)((function(){return(0,O.jsx)(d.Z,{ml:1,mt:1,children:(0,O.jsx)(a.Z,{fetchFileTree:T,files:P,openFile:f,ref:A,setErrors:n})})}),[T,P,f,n]);return(0,u.useEffect)((function(){j(o)}),[o]),(0,u.useEffect)((function(){(0,b.fS)(i,I)||_(i)}),[i,I]),(0,O.jsx)(p.Z,{before:C,breadcrumbs:[{label:function(){return"Workspaces"},linkProps:{as:"/manage",href:"/manage"}},{bold:!0,label:function(){return"File browser"}}],errors:t,mainContainerHeader:(0,O.jsx)(v.rK,{secondary:!0,children:(0,O.jsx)(l.Z,{filePaths:I,filesTouched:N,selectedFilePath:Z})}),pageName:m.L6.FILE_BROWSER,children:null===i||void 0===i?void 0:i.map((function(e){return(0,O.jsx)("div",{style:{display:Z===e?null:"none"},children:(0,O.jsx)(c.Z,{uuid:"manage/FileEditor/".concat(decodeURIComponent(e)),children:(0,O.jsx)(s.Z,{active:Z===e,filePath:e,selectedFilePath:Z,setErrors:n,setFilesTouched:k})})},e)}))})}y.getInitialProps=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),t.default=(0,f.Z)(y)},90205:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/files",function(){return n(83087)}])},80022:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},15544:function(e,t,n){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n.d(t,{Z:function(){return r}})},13692:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(61049);function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,r.Z)(e,t)}},93189:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(12539),o=n(80022);function i(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}},61049:function(e,t,n){"use strict";function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[2678,1154,844,6639,7011,4267,9266,9626,8264,7858,5499,5283,5810,553,1125,9774,2888,179],(function(){return t=90205,e(e.s=t);var t}));var t=e.O();_N_E=t}]);