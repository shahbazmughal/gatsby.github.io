"use strict";(self.webpackChunk_elegantstack_gatsby_starter_flexiblocks=self.webpackChunk_elegantstack_gatsby_starter_flexiblocks||[]).push([[32],{2132:function(t,e,n){n.d(e,{Z:function(){return x}});var a=n(7223),i=n(7378),o=n(8945),r=n(6140),l=n(4332),s=n(5319),c=n(4392),p=n(1690),m=n(1184),u=n(6495),Z={horizontal:{".button-group-link":{py:3},"> * + a, > * + div, > * + button":{ml:[3,null,null,4],mt:[4,0]}},vertical:{display:"flex",flexDirection:"column",a:{mb:[3,2],px:[2,0]}},subButtonsParent:{display:[null,null,"inline-flex"],alignItems:"center",":hover":{"& > .container-level-1":{opacity:1,visibility:"inherit",transform:[null,null,"translate(-50%, 0)"]}},"& > svg":{size:"icon.xs",position:["absolute","static"],right:0,ml:"auto"}},subContainer:{"&.container-level-1":{position:["static",null,"absolute"],top:[null,null,"100%"],left:[null,null,"50%"],transform:[null,null,"translate(-50%, -20px)"],boxShadow:[null,null,"0 0 25px rgba(140,152,164,.355)"],visibility:[null,null,"hidden"],overflow:[null,null,"hidden"],opacity:[null,null,0],bg:["omegaLighter",null,"contentBg"],borderRadius:[null,null,"default"],display:"flex",flexDirection:"column",transition:"all 250ms ease",p:[3,null,0],mt:[3,null,0]},"&.container-level-1.no-collection":{p:[3,null,3],".button-group-link":{px:2,py:1,my:1}},"&.container-level-2":{flexBasis:"100%",mt:[0,0,2],".button-group-link":{display:"block",py:0,mt:2}}},subContainerCollection:{display:"flex",flexDirection:["column",null,"row"],p:[null,null,4],mt:[3,null,0],"& > .button-group-link":{flexBasis:"1/3",display:"flex",flexWrap:"wrap",alignItems:"flex-start",alignContent:"flex-start",minWidth:210,mb:[0,null,"inherit"],py:0}}},g=function(t){var e=t.content,n=t.children,l=t.styles,m=void 0===l?{}:l,Z=t.className,g=(0,i.useContext)(s.tC).setActiveModal,d=(0,i.useContext)(c.RL).setActiveTab,f=e.type,x=e.text,h=e.link,v=e.target,y=e.variant,b=e.width,w=e.bg,k=e.icon,C=(0,p.H)({content:{type:f,link:h,target:v,variant:y},setActiveModal:g,setActiveTab:d}),I=C.Component,W=C.linkProps;return(0,u.tZ)(I,(0,a.Z)({variant:y||"primary",sx:Object.assign({width:b,"::after":{bg:w,borderColor:w},position:"relative"},m)},W,{className:[W.className,Z].join(" ")}),(0,u.tZ)(o.xu,{sx:{display:"inline-block"}},x," ",(0,u.tZ)(r.Z,{content:k,size:"xx",mr:"0",p:"0",m:"0",ml:"1"})),n)},d=function t(e){var n=e.content,a=e.level,i=void 0===a?1:a,r=n.collection,s=n.buttons,c="level-"+i;if(!r&&!s)return(0,u.tZ)(g,{content:n,className:c});var p=function(e){return e.buttons.map((function(e,n){return(0,u.tZ)(t,{key:"item-"+n,level:i+1,content:e})}))};return(0,u.tZ)(g,{content:n,styles:Z.subButtonsParent,className:c},1===i&&(0,u.tZ)(m.OrA,null),(0,u.tZ)(o.xu,{sx:Z.subContainer,className:"container-level-"+i+" "+(r?"":"no-collection")},r?r.map((function(t,e){var n=t.container,a=t.buttons;return(0,u.tZ)(l.Z,{key:"item-"+e,content:n,sx:Z.subContainerCollection},(0,u.tZ)(p,{buttons:a}))})):(0,u.tZ)(p,{buttons:s})))},f=function(t){var e=t.content,n=t.variant,a=t.wrapperStyles;return e?(0,u.tZ)(i.Fragment,null,(0,u.tZ)(o.xu,{sx:Object.assign({},Z[n],a)},null==e?void 0:e.map((function(t,e){return(0,u.tZ)(d,{key:"item-"+e,index:e,content:t})})))):null},x=f;f.defaultProps={variant:"horizontal"};n(5414),n(2757),n(3324),n(9718)},4415:function(t,e,n){n.d(e,{Z:function(){return r}});n(7378);var a=n(8945),i=n(2730),o=n(6495),r=function(t){var e=t.children,n=t.reverse;return(0,o.tZ)(a.xu,{sx:{flexBasis:"1/2",zIndex:[null,1],mx:[null,null,null,4]}},(0,o.tZ)(i.Z,{effect:n?"fadeInLeft":"fadeInRight"},e))}},5205:function(t,e,n){n.d(e,{Z:function(){return o}});n(7378);var a=n(8945),i=n(6495),o=function(t){var e,n=t.reverse,o=t.children;return(0,i.tZ)(a.xu,{sx:(e={flexBasis:[null,"2/3",null,"1/2"],mx:[null,null,null,4]},e[n?"ml":"mr"]=[null,function(t){return"-"+t.sizes["1/6"]},null],e[n?"mt":"mb"]=[4,0],e.position="relative",e)},o)}},6514:function(t,e,n){n.d(e,{Z:function(){return r}});n(7378);var a=n(8945),i=n(6495),o=function(t){var e=t.direction;return(0,i.tZ)(a.xu,{sx:{display:["none","block",null,"none"],position:"absolute",top:"-25%",left:"ltr"===e?"-50%":"0",zIndex:0,size:"150%",backgroundImage:function(t){return"radial-gradient(\n          circle,\n          "+t.colors.background+" 25%,\n          transparent 70%\n        )"}}})},r=o;o.defaultProps={direction:"ltr"}},3605:function(t,e,n){n(7378),n(6495)},6328:function(t,e,n){n.d(e,{Z:function(){return s}});var a=n(7378),i=n(8945),o=n(4886),r=n(1690),l=n(6495),s=function(t){var e,n,s=t.space,c=t.fields,p=t.buttons;return(null==c?void 0:c[0])&&(0,l.tZ)(a.Fragment,null,(0,l.tZ)(o.Z,{space:s}),(0,l.tZ)(i.xu,{variant:"cards.primary",sx:{display:"inline-flex",alignContent:"space-between",bg:"contentBg",borderRadius:"xl",minWidth:["auto",400],p:2}},(0,l.tZ)(i.II,{type:"text",name:c[0].identifier,placeholder:null===(e=c[0].placeholder)||void 0===e?void 0:e.text,sx:{bg:"transparent",px:3,py:0,"::placeholder":{color:(null===(n=c[0].placeholder)||void 0===n?void 0:n.color)||"omegaDark"}}}),(null==p?void 0:p[0])&&(0,l.tZ)(r.Z,{content:p,wrapperStyles:{minWidth:"auto"}})))}},283:function(t,e,n){n.r(e),n.d(e,{default:function(){return et}});var a=n(7223),i=n(7378),o=n(8945),r=n(5976),l=n(8062),s=n(4886),c=n(5414),p=n(6267),m=n(1025),u=n(2730),Z=n(3924),g=n(9606),d=n(1690),f=n(4570),x=n(6495),h={wrapper:{position:"relative",zIndex:10,".nav-container":{bg:"headerBg",position:"fixed",transition:"all 250ms ease-in",py:3},".nav-sticky .nav-container":{bg:"headerActiveBg",boxShadow:"0 0 25px rgba(140,152,164,.25)",py:[3,null,2],".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}},".button-group-button":{minWidth:120,fontSize:1,px:3,py:1}},header:{justifyContent:"space-between",alignItems:"center"},logoContainer:{flexShrink:0,mr:[null,null,3,5]},desktopMenu:{display:["none",null,"block"],minWidth:"auto",flexGrow:1},mobileMenu:{display:["block",null,"none"]}},v=function(t){var e=t.content,n=e.images,a=e.collection,r=t.menuJustify;return(0,x.tZ)(i.Fragment,null,(0,x.tZ)(p.ZP,{enabled:"true",stickyClassName:"nav-sticky",css:(0,m.i)(h.wrapper)},(0,x.tZ)(o.W2,{variant:"full",className:"nav-container"},(0,x.tZ)(o.W2,{px:"4"},(0,x.tZ)(o.kC,{sx:h.header},(0,x.tZ)(o.xu,{sx:h.logoContainer},(0,x.tZ)(c.rU,{to:"/"},(0,x.tZ)(g.Z,{content:{images:n},sx:h.image,imageEffect:"fadeIn"}))),a&&(0,x.tZ)(i.Fragment,null,(0,x.tZ)(o.xu,{sx:h.desktopMenu},(0,x.tZ)(u.Z,{effect:"fadeInDown"},(0,x.tZ)(o.kC,{sx:{alignItems:"center",justifyContent:r}},a.map((function(t,e){var n=t.buttons;return n&&(0,x.tZ)(o.xu,{key:"item-"+e,sx:{"& + &":{ml:4}}},(0,x.tZ)(d.Z,{content:n}))}))))),(0,x.tZ)(o.xu,{sx:h.mobileMenu},(0,x.tZ)(Z.Z,{buttonStyle:{svg:{size:32}}},a.map((function(t,e){var n=t.buttons;return n&&(0,x.tZ)(o.xu,{key:"item-"+e,sx:{fontSize:3,".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}}},(0,x.tZ)(d.Z,{content:n,variant:"vertical"}))}))))))))))};v.defaultProps={menuJustify:"flex-end"};var y=(0,f.Z)(v),b=n(3059),w=n(6328),k=(0,f.Z)((function(t){var e=t.content,n=e.text,r=e.buttons,l=e.form,c=e.images;return(0,x.tZ)(o.W2,{sx:{textAlign:"center"}},(0,x.tZ)(u.Z,{effect:"fadeInDown"},(0,x.tZ)(b.Z,{content:n})),r&&(0,x.tZ)(i.Fragment,null,(0,x.tZ)(s.Z,{space:3}),(0,x.tZ)(u.Z,{effect:"fadeInUp",duration:.7},(0,x.tZ)(d.Z,{content:r}))),l&&(0,x.tZ)(i.Fragment,null,(0,x.tZ)(s.Z,{space:4}),(0,x.tZ)(u.Z,{effect:"fadeInRight",delay:.7},(0,x.tZ)(w.Z,(0,a.Z)({},l,{space:3})))),c&&(0,x.tZ)(i.Fragment,null,(0,x.tZ)(s.Z,{space:4}),(0,x.tZ)(o.xu,{sx:{position:"relative"}},(0,x.tZ)(g.Z,{content:{images:c},loading:"eager",imagePosition:"center",imageEffect:"fadeInUp"}))))})),C=n(6030),I={width:[210,180],height:[70,60]},W=(0,f.Z)((function(t){var e=t.content,n=e.text,a=e.collection,r=e.buttons;e.images;return(0,x.tZ)(o.W2,{sx:{textAlign:"center"}},(0,x.tZ)(b.Z,{content:n}),n&&a&&(0,x.tZ)(s.Z,null),(0,x.tZ)(o.kC,{sx:{flexWrap:"wrap",m:-3}},null==a?void 0:a.map((function(t,e){var n,a=t.text,i=t.icon,r=t.images;return(0,x.tZ)(o.xu,{key:"item-"+e,sx:{flexBasis:["1","1/2",null,"1/5"],p:3}},(0,x.tZ)(u.Z,{effect:"fadeInGrow",delay:.2*(e+2),title:null==a||null===(n=a[0])||void 0===n?void 0:n.text},(0,x.tZ)(g.Z,{content:{images:r},loading:"eager",imagePosition:"center"}),null!=i&&i.src?(0,x.tZ)(C.Z,{src:i.src,css:(0,m.i)(I)}):(0,x.tZ)(b.Z,{content:a})),(0,x.tZ)(b.Z,{content:a}))}))),r&&(0,x.tZ)(i.Fragment,null,(0,x.tZ)(s.Z,{space:3}),(0,x.tZ)(d.Z,{content:r})))})),M=n(4332),A=n(6140),z=n(2132),P={sheading:{fontSize:"1.1em"},listItem:{flex:"1 1 0",minWidth:300,p:3},itemDescription:{flexBasis:"3/5",flexGrow:1,order:[1,null,0],mb:3},icons:{padding:0,color:"#333",width:"16px",height:"16px",display:"inline-block",float:"left"}},S=(0,f.Z)((function(t){var e=t.content,n=e.text,a=e.collection;e.icon2;return(0,x.tZ)(o.W2,{as:u.Z},(0,x.tZ)(o.xu,{sx:{textAlign:"center"}},(0,x.tZ)(b.Z,{content:n})),a&&(0,x.tZ)(i.Fragment,null,(0,x.tZ)(s.Z,null),(0,x.tZ)(o.kC,{sx:{flexWrap:"wrap"},m:-3},a.map((function(t,e){var n=t.text,a=t.icon,r=(t.collection,t.buttons),l=t.container;return(0,x.tZ)(u.Z,{key:"item-"+e,effect:"fadeInGrow",delay:.15*(e+1),css:(0,m.i)(P.listItem)},(0,x.tZ)(M.Z,{content:l,variant:"cards.paper",sx:{height:"full"}},(0,x.tZ)(A.Z,{content:a,size:"md",mr:"3",mb:"3"}),(0,x.tZ)(b.Z,{content:null==n?void 0:n[0],sx:P.sheading}),(0,x.tZ)(o.kC,{sx:{alignItems:"center",flexWrap:"wrap"}},(0,x.tZ)(b.Z,{content:null==n?void 0:n.slice(1),sx:P.itemDescription,mt:[3,null,0]})),r&&(0,x.tZ)(i.Fragment,null,(0,x.tZ)(s.Z,{space:0}),(0,x.tZ)(z.Z,{content:r,css:(0,m.i)(P.icons)}))))})))))})),j=n(2577),R=n(5205),B=n(4415),L=n(6514),D=(0,f.Z)((function(t){var e=t.content,n=e.text,r=e.images,l=e.collection,c=e.buttons,p=t.reverse;return(0,x.tZ)(o.W2,{sx:{position:"relative"}},(0,x.tZ)(o.kC,{sx:{alignItems:[null,"center"],flexDirection:[p?"column-reverse":"column",p?"row-reverse":"row"],mx:[null,null,null,-4]}},(0,x.tZ)(B.Z,{reverse:p},(0,x.tZ)(o.xu,{sx:{textAlign:["center","left"]}},(0,x.tZ)(b.Z,{content:n})),l&&(0,x.tZ)(i.Fragment,null,(0,x.tZ)(s.Z,{space:3}),(0,x.tZ)(u.Z,{effect:p?"fadeInRight":"fadeInLeft",duration:1.5},l.map((function(t,e){return(0,x.tZ)(i.Fragment,null,(0,x.tZ)(j.Z,(0,a.Z)({key:"item-"+e},t)),(0,x.tZ)(s.Z,{space:2}))})))),c&&(0,x.tZ)(i.Fragment,null,(0,x.tZ)(z.Z,{content:c}))),(0,x.tZ)(R.Z,{reverse:p},(0,x.tZ)(g.Z,{content:{images:r},reverse:p}))),(0,x.tZ)(L.Z,{direction:p?"ltr":"rtl"}))})),U=function(t){var e,n=t.icon,i=t.iconProps,r=(t.text,t.description),l=t.compact,s=t.buttons,c=t.vertical,p=t.center,m=t.middle;return(0,x.tZ)(o.kC,{sx:{flexDirection:c?"column":"row",alignItems:p?"center":"flex-start",textAlign:p&&c?"center":"unset",justifyContent:m?"center":"unset","& + &":{mt:r?l?3:4:2}}},(null==n?void 0:n.src)&&(0,x.tZ)(o.xu,{sx:(e={display:"inline-flex",flexShrink:0},e[c?"mb":"mr"]=l?2:3,e)},(0,x.tZ)(A.Z,(0,a.Z)({content:n,size:"sm",p:l?1:void 0},i))),(0,x.tZ)(o.xu,{sx:{alignSelf:c?"auto":"center"}},(0,x.tZ)(d.Z,{content:s})))};U.defaultProps={iconProps:{}};var E=U,F={flexBasis:["100%","1/2",null,"1/3"],alignItems:"center",justifyContent:"left",p:2},q=(0,f.Z)((function(t){var e=t.content,n=e.text,r=e.collection,l=e.buttons;return(0,x.tZ)(o.W2,{as:u.Z},(0,x.tZ)(o.xu,{sx:{textAlign:"center"}},(0,x.tZ)(b.Z,{content:n})),r&&(0,x.tZ)(i.Fragment,null,(0,x.tZ)(o.kC,{sx:{flexWrap:"wrap",mx:-3}},null==r?void 0:r.map((function(t,e,n){return(0,x.tZ)(i.Fragment,null,(0,x.tZ)(u.Z,{effect:"fadeInGrow",delay:.15*(e+1),css:(0,m.i)(F),key:"k-"+e},(0,x.tZ)(E,(0,a.Z)({},t,{key:e,iconProps:{size:"sm"},center:!0}))))})))),l&&(0,x.tZ)(u.Z,{effect:"fadeInGrow",delay:1,css:(0,m.i)({mb:[4,null,null,0]}),key:"b-"+index},l&&(0,x.tZ)(i.Fragment,null,(0,x.tZ)(s.Z,{space:3}),(0,x.tZ)(d.Z,{content:l,sx:{textAlign:"center"}}))))})),N=(0,f.Z)((function(t){var e=t.content,n=e.text,r=e.images,l=e.collection,c=e.buttons,p=t.reverse;return(0,x.tZ)(o.W2,{sx:{position:"relative"}},(0,x.tZ)(o.kC,{sx:{alignItems:[null,"center"],flexDirection:[p?"column-reverse":"column",p?"row-reverse":"row"],mx:[null,null,null,-4]}},(0,x.tZ)(R.Z,{reverse:p},(0,x.tZ)(g.Z,{content:{images:r},reverse:p})),(0,x.tZ)(B.Z,{reverse:p},(0,x.tZ)(o.xu,{sx:{textAlign:["center","left"]}},(0,x.tZ)(b.Z,{content:n})),l&&(0,x.tZ)(i.Fragment,null,(0,x.tZ)(s.Z,{space:3}),(0,x.tZ)(o.kC,{sx:{flexWrap:"wrap",maxWidth:500,m:-2}},l.map((function(t,e){return(0,x.tZ)(u.Z,{key:"item-"+e,effect:"fadeInPop",delay:1+.2*(e+1),css:(0,m.i)({flexBasis:["1","1/2"]})},(0,x.tZ)(o.Zb,{py:"3",m:"2"},(0,x.tZ)(j.Z,(0,a.Z)({},t,{compact:!0,middle:!0,p:"2"}))))})))),c&&(0,x.tZ)(o.xu,{sx:{textAlign:["center","left"]}},(0,x.tZ)(z.Z,{content:c})))),(0,x.tZ)(L.Z,{direction:p?"ltr":"rtl"}))})),T={logo:{width:"100%",height:"auto"}},_=(0,f.Z)((function(t){var e=t.content,n=e.text,a=e.container,i=e.images;e.icon;return(0,x.tZ)(o.W2,{sx:{textAlign:"center"}},(0,x.tZ)(M.Z,{content:a,variant:"cards.paper-lg"},(0,x.tZ)(s.Z,{space:1}),(0,x.tZ)(b.Z,{content:n}),(0,x.tZ)(s.Z,{space:3}),(0,x.tZ)(o.xu,{sx:T.logo},(0,x.tZ)(g.Z,{content:{images:i},loading:"eager",sx:T.logo,imagePosition:"center"}))))})),O=(n(3605),{wrapper:{position:"relative",bg:"footerBg"},footer:{flexDirection:["column-reverse","row"],justifyContent:"space-between",alignItems:["center","flex-start"],py:5},listBlk:{display:"block",overflowX:"hidden"}}),H=function(t){var e=t.content,n=e.text,a=e.images,i=e.collection;return(0,x.tZ)(o.xu,{sx:O.wrapper},(0,x.tZ)(o.W2,{px:"4"},(0,x.tZ)(o.kC,{sx:O.footer,xs:O.listBlk,className:"footerJoint"},(0,x.tZ)(o.xu,{sx:{minWidth:200}},(0,x.tZ)(o.xu,{pb:"1",mb:"2",mt:[4,0]},(0,x.tZ)(c.rU,{to:"/"},(0,x.tZ)(g.Z,{content:{images:a},imageEffect:"fadeIn"}))),(0,x.tZ)(o.xu,{pt:"2",mb:2},(0,x.tZ)(b.Z,{sx:{maxWidth:260},content:null==n?void 0:n[0]})),(0,x.tZ)(o.xu,{pt:"2",mb:[2,4]},"© ",(new Date).getFullYear(),", All Rights Reserved.")),null==i?void 0:i.map((function(t,e){var n=t.text,a=t.buttons;return a&&(0,x.tZ)(o.xu,{key:"item-"+e,mb:"3",xs:O.listBlk,className:"footer-links-block"},(0,x.tZ)(b.Z,{content:null==n?void 0:n[0],variant:"h5",sx:{display:["none","block"]}}),(0,x.tZ)(d.Z,{content:a,variant:"vertical",wrapperStyles:{flexDirection:[null,"column"]}}))})))))};H.defaultProps={menuJustify:"flex-end"};var V=(0,f.Z)(H),G=n(315),J={minH:{minHeight:400},subTitle:{maxWidth:750},smallTitle:{maxWidth:1e3},containerMain:{textAlign:"center",position:"relative",minHeight:400,borderRadius:0,paddingTop:50},content:{flexDirection:"column",size:"full",alignItems:"center",justifyContent:"center",py:4},overlay:{size:"full",bg:"omegaDarker",opacity:.75,position:"absolute",borderRadius:0,top:0,zIndex:-1},image:{size:"full",position:"absolute",top:0,borderRadius:0,zIndex:-2}},X=(0,f.Z)((function(t){var e,n,i=t.content,r=i.container,l=i.text,s=i.buttons,c=i.form,p=i.images;return(0,x.tZ)(o.W2,{variant:"full",sx:J.containerMain},(0,x.tZ)(o.kC,{sx:Object.assign({},J.content,{minHeight:null!==400&&null!==(e=400[0])&&void 0!==e&&e.src?null===(n=(0,G.d)(p[0].src))||void 0===n?void 0:n.height:void 0})},(0,x.tZ)(u.Z,{effect:"fadeInDown"},(0,x.tZ)(b.Z,{content:null==l?void 0:l[0],sx:{bg:"omegaDarker",display:"inline-block",maxWidth:"100%",padding:"10px 25px"},px:"0",mb:"3"}),(0,x.tZ)(b.Z,{content:null==l?void 0:l[1],mb:"4",sx:J.smallTitle,mx:"auto"}),(0,x.tZ)(b.Z,{content:null==l?void 0:l.slice(2),mx:"auto"})),(0,x.tZ)(o.xu,null,s&&(0,x.tZ)(u.Z,{effect:"fadeInUp",duration:.7},(0,x.tZ)(d.Z,{content:s})),c&&(0,x.tZ)(u.Z,{effect:"fadeInRight",delay:1},(0,x.tZ)(w.Z,(0,a.Z)({},c,{space:4}))))),(0,x.tZ)(M.Z,{content:r,sx:J.overlay,className:"block-overlay"}),(0,x.tZ)(o.xu,{sx:J.image},(0,x.tZ)(g.Z,{loading:"eager",content:{images:p},sx:{size:"full",borderRadius:0},imageEffect:"fadeIn"})))})),Q=n(5541),Y=n(7326),K={colors:{background:"#fbfbfb",headerBg:"transparent",footerBg:"#f1f3f8"}},$=n.p+"static/contour-pattern-31b9121b55c7a157c438084d7a7bab57.svg",tt={html:{overflowX:"hidden"},body:{overflowX:"hidden"},heroContainer:{"::before":{content:'" "',size:"full",position:"absolute",top:"-10%",left:0,zIndex:-1,background:function(t){return"url("+$+") no-repeat center 0, linear-gradient(\n          180deg,\n          "+t.colors.alphaLighter+" 0%,\n          "+t.colors.background+" 100%\n        )"},backgroundSize:"100%",bg:"omegaLighter",borderRadius:"xl",passing:"10px"}},strategiesContainer:{position:"relative","::before":{content:'" "',width:"full",height:"150%",position:"absolute",top:0,left:0,zIndex:-1,background:function(t){return"url("+$+") no-repeat center 0, linear-gradient(\n          180deg,\n          "+t.colors.alphaLighter+" 0%,\n          "+t.colors.background+" 100%\n        )"},backgroundSize:"100%"}},whyChooseUsContainer:{bg:"omegaLighter",borderRadius:"xl",py:5,px:[4,0]},footer:{display:"block",overflowX:"hidden"}},et=function(t){var e=t.data.allBlockContent,n=(0,Q.c)(null==e?void 0:e.nodes);return(0,x.tZ)(r.Z,(0,a.Z)({theme:K},t,{xs:tt.body}),(0,x.tZ)(l.Z,{title:"Email Marketing & Automation | Mumara Campaigns",description:"Intelligently crafted features to ensure higher level of email engagement, Mumara Campaigns is available as Cloud and Self-Hosted platform."}),(0,x.tZ)(y,{content:n.header}),(0,x.tZ)(s.Z,{space:"5"}),(0,x.tZ)(s.Z,{space:"5"}),(0,x.tZ)(o.W2,{variant:"full",sx:tt.heroContainer},(0,x.tZ)(k,{content:n.hero})),(0,x.tZ)(s.Z,{space:"3"}),(0,x.tZ)(W,{content:n.companies}),(0,x.tZ)(s.Z,{space:"5"}),(0,x.tZ)(s.Z,{space:"5"}),(0,x.tZ)(S,{content:n.services}),(0,x.tZ)(S,{content:n.services2}),(0,x.tZ)(s.Z,{space:"5"}),(0,x.tZ)(s.Z,{space:"5"}),(0,x.tZ)(D,{content:n["feature-one"]}),(0,x.tZ)(s.Z,{space:"5"}),(0,x.tZ)(s.Z,{space:"5"}),(0,x.tZ)(N,{content:n["feature-two"]}),(0,x.tZ)(s.Z,{space:"6"}),(0,x.tZ)(s.Z,{space:"6"}),(0,x.tZ)(o.W2,{variant:"full",sx:tt.strategiesContainer},(0,x.tZ)(s.Z,{space:-6}),(0,x.tZ)(_,{content:n.strategies})),(0,x.tZ)(s.Z,{space:"5"}),(0,x.tZ)(o.W2,{variant:"wide",sx:tt.whyChooseUsContainer},(0,x.tZ)(q,{content:n["why-choose-us"]})),(0,x.tZ)(s.Z,{space:"5"}),(0,x.tZ)(X,{content:n.team}),(0,x.tZ)(V,{content:n.footer}),(0,x.tZ)(Y.q,null,(0,x.tZ)("script",{type:"application/ld+json"},'\n            {\n              "@context": "http://schema.org/", \n              "@type": "BreadcrumbList", \n              "itemListElement": [\n                { \n                  "@type": "ListItem", \n                  "position": "1", \n                  "item": { \n                    "@id": "https://www.mumara.com", \n                    "name": "Mumara",\n                    "image": "https://mumara-new.netlify.app/assets/img/logo-dark.png" \n                  } \n                },{ \n                  "@type": "ListItem", \n                  "position": "2", \n                  "item": { \n                    "@id": "https://www.mumara.com/campaignsplus/", \n                    "name": "Campaigns+"\n                  } \n                }\n              ]\n            }\n          '),(0,x.tZ)("script",{type:"application/ld+json"},'\n            {\n              "@context": "http://schema.org/",\n              "@type": "Product",\n              "name": "Campaign+",\n              "sku": "0446310786",\n              "mpn": "925872",\n              "image": [\n                "https://mumara-new.netlify.app/assets/img/logo-dark.png"\n              ],\n              "description": "Intelligently crafted features to ensure higher level of email engagement, CampaignsPlus centrally hosted SaaS edition of MumaraEmail.",\n              "brand": {\n                "@type": "Thing",\n                "name": "Mumara"\n              },\n              "review": {\n                "@type": "Review",\n                "reviewRating": {\n                  "@type": "Rating",\n                  "ratingValue": "4.7",\n                  "bestRating": "5"\n                },\n                "author": {\n                  "@type": "Person",\n                  "name": "Campaigns"\n                }\n              },\n              "aggregateRating": {\n                "@type": "AggregateRating",\n                "ratingValue": "5.0",\n                "reviewCount": "1247"\n              },\n              "offers": {\n                "@type": "Offer",\n                "url": "https://www.mumara.com/campaigns/",\n                "priceCurrency": "USD",\n                "price": "47",\n                "priceValidUntil": "2020-11-20",\n                "itemCondition": "https://schema.org/UsedCondition",\n                "availability": "https://schema.org/InStock",\n                "seller": {\n                  "@type": "Organization",\n                  "name": "Hostings House"\n                }\n              }\n            }\n          '),(0,x.tZ)("script",{type:"application/ld+json"},'\n            {\n              "@context": "https://schema.org",\n              "@type": "Organization",\n              "name": "Mumara",\n              "alternateName": "Marketing Automation &amp; Customer Engagement Tools | Mumara",\n              "url": "https://www.mumara.com",\n              "logo": "https://mumara-new.netlify.app/assets/img/logo-dark.png",\n              "contactPoint": {\n                "@type": "ContactPoint",\n                "telephone": "+1 (844) 686 – 2721",\n                "contactType": "customer service"\n              },\n              "sameAs": [\n                "https://www.facebook.com/MumaraApps",\n                "https://twitter.com/MumaraApps",\n                "https://plus.google.com/+MumaraEmailMarketer",\n                "https://www.youtube.com/channel/UC1k6voQOVss0_PWg7CfJTdw",\n                "https://www.linkedin.com/company/mumara"\n              ]\n            }\n          '),(0,x.tZ)("script",{type:"application/ld+json"},'\n            {\n              "@context":"https://schema.org",\n              "@type":"ItemList",\n              "itemListElement":[\n                {\n                  "@type":"ListItem",\n                  "position":1,\n                  "url":"https://www.mumara.com/campaigns/"\n                },\n                {\n                  "@type":"ListItem",\n                  "position":2,\n                  "url":"https://www.mumara.com/one/"\n                },\n                {\n                  "@type":"ListItem",\n                  "position":3,\n                  "url":"https://www.mumara.com/sms/"\n                },\n                {\n                  "@type":"ListItem",\n                  "position":4,\n                  "url":"https://www.mumara.com/smsplus/"\n                },\n                {\n                  "@type":"ListItem",\n                  "position":5,\n                  "url":"https://www.mumara.com/classic/"\n                }\n              ]\n            }\n          '),(0,x.tZ)("script",{type:"application/ld+json"},'\n            {\n              "@context": "https://schema.org",\n              "@type": "Person",\n              "name": "Mumara",\n              "url": "https://www.mumara.com",\n              "sameAs": [\n                "https://www.facebook.com/MumaraApps",\n                "https://twitter.com/MumaraApps",\n                "https://plus.google.com/+MumaraEmailMarketer",\n                "https://www.youtube.com/channel/UC1k6voQOVss0_PWg7CfJTdw",\n                "https://www.linkedin.com/company/mumara"\n              ]\n            }\n          '),(0,x.tZ)("script",{type:"application/ld+json"},'\n            {\n              "@context": "https://schema.org/",\n              "@type": "WebSite",\n              "name": "Mumara",\n              "url": "https://www.mumara.com/",\n              "potentialAction": {\n                "@type": "SearchAction",\n                "target": "https://www.mumara.com/?s={s}",\n                "query-input": "required name=s"\n              }\n            }\n          '),(0,x.tZ)("script",{src:"https://code.jquery.com/jquery-3.6.0.min.js",integrity:"sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=",crossorigin:"anonymous"}),(0,x.tZ)("script",{"data-ad-client":"ca-pub-7570269198350551",async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}),(0,x.tZ)("script",{id:"sbinit",src:"https://dashboard.mumara.com/js/init.js"}),(0,x.tZ)("script",null,"\n            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;\n            ga('create', 'UA-63566119-1', 'auto');\n            ga('send', 'pageview');\n          "),(0,x.tZ)("script",{async:!0,src:"https://www.google-analytics.com/analytics.js"}),(0,x.tZ)("script",null,"\n            !function(f,b,e,v,n,t,s)\n            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n            n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n            n.queue=[];t=b.createElement(e);t.async=!0;\n            t.src=v;s=b.getElementsByTagName(e)[0];\n            s.parentNode.insertBefore(t,s)}(window, document,'script',\n            'https://connect.facebook.net/en_US/fbevents.js');\n            fbq('init', '329504770823436');\n            fbq('track', 'Mumara PageView');\n          "),(0,x.tZ)("noscript",null,'<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=329504770823436&ev=ViewContent&noscript=1" />')),(0,x.tZ)("ol",{itemscope:!0,itemtype:"http://schema.org/BreadcrumbList",style:{display:"none"}},(0,x.tZ)("li",{itemprop:"itemListElement",itemscope:!0,itemtype:"http://schema.org/ListItem"},(0,x.tZ)("a",{itemscope:!0,itemtype:"http://schema.org/Thing",itemprop:"item",href:"https://www.mumara.com",id:"https://www.mumara.com"},(0,x.tZ)("span",{itemprop:"name"},"Mumara"),(0,x.tZ)("img",{itemprop:"image",src:"https://mumara-new.netlify.app/assets/img/logo-dark.png",alt:"Mumara"})),(0,x.tZ)("meta",{itemprop:"position",content:"1"})),"›",(0,x.tZ)("li",{itemprop:"itemListElement",itemscope:!0,itemtype:"http://schema.org/ListItem"},(0,x.tZ)("a",{itemscope:!0,itemtype:"http://schema.org/Thing",itemprop:"item",href:"https://www.mumara.com/campaignsplus/",id:"https://www.mumara.com/campaignsplus/"},(0,x.tZ)("span",{itemprop:"name"},"Campaigns+"),(0,x.tZ)("img",{itemprop:"image",src:"https://mumara-new.netlify.app/assets/img/logo-dark.png",alt:"Campaigns+ | Mumara"})),(0,x.tZ)("meta",{itemprop:"position",content:"2"}))),(0,x.tZ)("div",{class:"schemaproduct",itemscope:!0,itemtype:"http://schema.org/Product",style:{display:"none"}},(0,x.tZ)("meta",{itemprop:"mpn",content:"925872"}),(0,x.tZ)("span",{itemprop:"brand"},"Mumara"),(0,x.tZ)("span",{itemprop:"name"},"Campaign+"),(0,x.tZ)("img",{itemprop:"image",src:"https://mumara-new.netlify.app/assets/img/logo-dark.png",alt:"Campaign+"}),(0,x.tZ)("span",{itemprop:"description"},"Intelligently crafted features to ensure higher level of email engagement, CampaignsPlus centrally hosted SaaS edition of MumaraEmail."),"Product #: ",(0,x.tZ)("span",{itemprop:"mpn"},"1"),(0,x.tZ)("span",{itemprop:"aggregateRating",itemscope:!0,itemtype:"http://schema.org/AggregateRating"},(0,x.tZ)("span",{itemprop:"ratingValue"},"5.0")," stars, based on ",(0,x.tZ)("span",{itemprop:"reviewCount"},"1247")," reviews"),(0,x.tZ)("span",{itemprop:"offers",itemscope:!0,itemtype:"http://schema.org/Offer"},(0,x.tZ)("span",{itemprop:"seller",itemscope:!0,itemtype:"http://schema.org/Organization"},(0,x.tZ)("span",{itemprop:"name"},"Hostings House")),(0,x.tZ)("link",{itemprop:"url",href:"https://www.mumara.com/campaigns/"}),(0,x.tZ)("meta",{itemprop:"availability",content:"https://schema.org/InStock"}),(0,x.tZ)("meta",{itemprop:"priceCurrency",content:"USD"}),(0,x.tZ)("meta",{itemprop:"itemCondition",content:"https://schema.org/UsedCondition"}),(0,x.tZ)("meta",{itemprop:"price",content:"47"}),(0,x.tZ)("meta",{itemprop:"priceValidUntil",content:"2021-11-20"})),(0,x.tZ)("meta",{itemprop:"sku",content:"0446310786"}),(0,x.tZ)("div",{itemprop:"review",itemtype:"http://schema.org/Review",itemscope:!0},(0,x.tZ)("div",{itemprop:"author",itemtype:"http://schema.org/Person",itemscope:!0},(0,x.tZ)("meta",{itemprop:"name",content:"Wasif Ahmed"})),(0,x.tZ)("div",{itemprop:"reviewRating",itemtype:"http://schema.org/Rating",itemscope:!0},(0,x.tZ)("meta",{itemprop:"ratingValue",content:"5.0"}),(0,x.tZ)("meta",{itemprop:"bestRating",content:"5"})))))}}}]);
//# sourceMappingURL=component---packages-themes-gatsby-theme-flexiblocks-src-pages-campaigns-index-jsx-ec71141b75168fcdec72.js.map