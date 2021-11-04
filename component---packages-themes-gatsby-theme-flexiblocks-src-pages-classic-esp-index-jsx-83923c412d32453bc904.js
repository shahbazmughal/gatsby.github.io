"use strict";(self.webpackChunk_elegantstack_gatsby_starter_flexiblocks=self.webpackChunk_elegantstack_gatsby_starter_flexiblocks||[]).push([[559],{2132:function(t,e,n){n.d(e,{Z:function(){return v}});var l=n(7223),o=n(7378),r=n(8945),i=n(6140),a=n(4332),s=n(5319),u=n(4392),c=n(1690),Z=n(1184),f=n(6495),p={horizontal:{".button-group-link":{py:3},"> * + a, > * + div, > * + button":{ml:[3,null,null,4],mt:[4,0]}},vertical:{display:"flex",flexDirection:"column",a:{mb:[3,2],px:[2,0]}},subButtonsParent:{display:[null,null,"inline-flex"],alignItems:"center",":hover":{"& > .container-level-1":{opacity:1,visibility:"inherit",transform:[null,null,"translate(-50%, 0)"]}},"& > svg":{size:"icon.xs",position:["absolute","static"],right:0,ml:"auto"}},subContainer:{"&.container-level-1":{position:["static",null,"absolute"],top:[null,null,"100%"],left:[null,null,"50%"],transform:[null,null,"translate(-50%, -20px)"],boxShadow:[null,null,"0 0 25px rgba(140,152,164,.355)"],visibility:[null,null,"hidden"],overflow:[null,null,"hidden"],opacity:[null,null,0],bg:["omegaLighter",null,"contentBg"],borderRadius:[null,null,"default"],display:"flex",flexDirection:"column",transition:"all 250ms ease",p:[3,null,0],mt:[3,null,0]},"&.container-level-1.no-collection":{p:[3,null,3],".button-group-link":{px:2,py:1,my:1}},"&.container-level-2":{flexBasis:"100%",mt:[0,0,2],".button-group-link":{display:"block",py:0,mt:2}}},subContainerCollection:{display:"flex",flexDirection:["column",null,"row"],p:[null,null,4],mt:[3,null,0],"& > .button-group-link":{flexBasis:"1/3",display:"flex",flexWrap:"wrap",alignItems:"flex-start",alignContent:"flex-start",minWidth:210,mb:[0,null,"inherit"],py:0}}},x=function(t){var e=t.content,n=t.children,a=t.styles,Z=void 0===a?{}:a,p=t.className,x=(0,o.useContext)(s.tC).setActiveModal,d=(0,o.useContext)(u.RL).setActiveTab,m=e.type,v=e.text,g=e.link,b=e.target,h=e.variant,k=e.width,y=e.bg,w=e.icon,C=(0,c.H)({content:{type:m,link:g,target:b,variant:h},setActiveModal:x,setActiveTab:d}),I=C.Component,W=C.linkProps;return(0,f.tZ)(I,(0,l.Z)({variant:h||"primary",sx:Object.assign({width:k,"::after":{bg:y,borderColor:y},position:"relative"},Z)},W,{className:[W.className,p].join(" ")}),(0,f.tZ)(r.xu,{sx:{display:"inline-block"}},v," ",(0,f.tZ)(i.Z,{content:w,size:"xx",mr:"0",p:"0",m:"0",ml:"1"})),n)},d=function t(e){var n=e.content,l=e.level,o=void 0===l?1:l,i=n.collection,s=n.buttons,u="level-"+o;if(!i&&!s)return(0,f.tZ)(x,{content:n,className:u});var c=function(e){return e.buttons.map((function(e,n){return(0,f.tZ)(t,{key:"item-"+n,level:o+1,content:e})}))};return(0,f.tZ)(x,{content:n,styles:p.subButtonsParent,className:u},1===o&&(0,f.tZ)(Z.OrA,null),(0,f.tZ)(r.xu,{sx:p.subContainer,className:"container-level-"+o+" "+(i?"":"no-collection")},i?i.map((function(t,e){var n=t.container,l=t.buttons;return(0,f.tZ)(a.Z,{key:"item-"+e,content:n,sx:p.subContainerCollection},(0,f.tZ)(c,{buttons:l}))})):(0,f.tZ)(c,{buttons:s})))},m=function(t){var e=t.content,n=t.variant,l=t.wrapperStyles;return e?(0,f.tZ)(o.Fragment,null,(0,f.tZ)(r.xu,{sx:Object.assign({},p[n],l)},null==e?void 0:e.map((function(t,e){return(0,f.tZ)(d,{key:"item-"+e,index:e,content:t})})))):null},v=m;m.defaultProps={variant:"horizontal"};n(5414),n(2757),n(3324),n(9718)},4415:function(t,e,n){n.d(e,{Z:function(){return i}});n(7378);var l=n(8945),o=n(2730),r=n(6495),i=function(t){var e=t.children,n=t.reverse;return(0,r.tZ)(l.xu,{sx:{flexBasis:"1/2",zIndex:[null,1],mx:[null,null,null,4]}},(0,r.tZ)(o.Z,{effect:n?"fadeInLeft":"fadeInRight"},e))}},5205:function(t,e,n){n.d(e,{Z:function(){return r}});n(7378);var l=n(8945),o=n(6495),r=function(t){var e,n=t.reverse,r=t.children;return(0,o.tZ)(l.xu,{sx:(e={flexBasis:[null,"2/3",null,"1/2"],mx:[null,null,null,4]},e[n?"ml":"mr"]=[null,function(t){return"-"+t.sizes["1/6"]},null],e[n?"mt":"mb"]=[4,0],e.position="relative",e)},r)}},6514:function(t,e,n){n.d(e,{Z:function(){return i}});n(7378);var l=n(8945),o=n(6495),r=function(t){var e=t.direction;return(0,o.tZ)(l.xu,{sx:{display:["none","block",null,"none"],position:"absolute",top:"-25%",left:"ltr"===e?"-50%":"0",zIndex:0,size:"150%",backgroundImage:function(t){return"radial-gradient(\n          circle,\n          "+t.colors.background+" 25%,\n          transparent 70%\n        )"}}})},i=r;r.defaultProps={direction:"ltr"}},3605:function(t,e,n){n(7378),n(6495)},6328:function(t,e,n){n.d(e,{Z:function(){return s}});var l=n(7378),o=n(8945),r=n(4886),i=n(1690),a=n(6495),s=function(t){var e,n,s=t.space,u=t.fields,c=t.buttons;return(null==u?void 0:u[0])&&(0,a.tZ)(l.Fragment,null,(0,a.tZ)(r.Z,{space:s}),(0,a.tZ)(o.xu,{variant:"cards.primary",sx:{display:"inline-flex",alignContent:"space-between",bg:"contentBg",borderRadius:"xl",minWidth:["auto",400],p:2}},(0,a.tZ)(o.II,{type:"text",name:u[0].identifier,placeholder:null===(e=u[0].placeholder)||void 0===e?void 0:e.text,sx:{bg:"transparent",px:3,py:0,"::placeholder":{color:(null===(n=u[0].placeholder)||void 0===n?void 0:n.color)||"omegaDark"}}}),(null==c?void 0:c[0])&&(0,a.tZ)(i.Z,{content:c,wrapperStyles:{minWidth:"auto"}})))}},3233:function(t,e,n){n.r(e),n.d(e,{default:function(){return T}});var l=n(7223),o=n(7378),r=n(8945),i=n(5976),a=n(8062),s=n(4886),u=n(5414),c=n(6267),Z=n(1025),f=n(2730),p=n(3924),x=n(9606),d=n(1690),m=n(4570),v=n(6495),g={wrapper:{position:"relative",zIndex:10,".nav-container":{bg:"headerBg",position:"fixed",transition:"all 250ms ease-in",py:3},".nav-sticky .nav-container":{bg:"headerActiveBg",boxShadow:"0 0 25px rgba(140,152,164,.25)",py:[3,null,2],".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}},".button-group-button":{minWidth:120,fontSize:1,px:3,py:1}},header:{justifyContent:"space-between",alignItems:"center"},logoContainer:{flexShrink:0,mr:[null,null,3,5]},desktopMenu:{display:["none",null,"block"],minWidth:"auto",flexGrow:1},mobileMenu:{display:["block",null,"none"]}},b=function(t){var e=t.content,n=e.images,l=e.collection,i=t.menuJustify;return(0,v.tZ)(o.Fragment,null,(0,v.tZ)(c.ZP,{enabled:"true",stickyClassName:"nav-sticky",css:(0,Z.i)(g.wrapper)},(0,v.tZ)(r.W2,{variant:"full",className:"nav-container"},(0,v.tZ)(r.W2,{px:"4"},(0,v.tZ)(r.kC,{sx:g.header},(0,v.tZ)(r.xu,{sx:g.logoContainer},(0,v.tZ)(u.rU,{to:"/"},(0,v.tZ)(x.Z,{content:{images:n},sx:g.image,imageEffect:"fadeIn"}))),l&&(0,v.tZ)(o.Fragment,null,(0,v.tZ)(r.xu,{sx:g.desktopMenu},(0,v.tZ)(f.Z,{effect:"fadeInDown"},(0,v.tZ)(r.kC,{sx:{alignItems:"center",justifyContent:i}},l.map((function(t,e){var n=t.buttons;return n&&(0,v.tZ)(r.xu,{key:"item-"+e,sx:{"& + &":{ml:4}}},(0,v.tZ)(d.Z,{content:n}))}))))),(0,v.tZ)(r.xu,{sx:g.mobileMenu},(0,v.tZ)(p.Z,{buttonStyle:{svg:{size:32}}},l.map((function(t,e){var n=t.buttons;return n&&(0,v.tZ)(r.xu,{key:"item-"+e,sx:{fontSize:3,".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}}},(0,v.tZ)(d.Z,{content:n,variant:"vertical"}))}))))))))))};b.defaultProps={menuJustify:"flex-end"};var h=(0,m.Z)(b),k=n(4392),y=n(3059),w=n(6328),C=(0,m.Z)((function(t){var e,n=t.content,i=n.text,a=void 0===i?[]:i,u=n.images,c=n.buttons,p=n.form,m=t.reverse;return(0,v.tZ)(r.W2,null,(0,v.tZ)(r.kC,{sx:{alignItems:[null,null,null,"center"],flexDirection:[m?"column-reverse":"column",null,null,m?"row-reverse":"row"]}},(0,v.tZ)(r.xu,{sx:(e={flexBasis:[null,null,null,"3/5"]},e[m?"ml":"mr"]=[null,null,null,5],e.position="relative",e.textAlign="center",e)},(0,v.tZ)(x.Z,{content:{images:u},loading:"eager",reverse:m,imagePosition:"center"})),(0,v.tZ)(r.xu,{sx:{flexBasis:"2/5",textAlign:["center",null,null,"left"]}},(0,v.tZ)(f.Z,{effect:"fadeInDown"},(0,v.tZ)(y.Z,{content:a})),c&&(0,v.tZ)(f.Z,{effect:"fadeInRight",delay:1,css:(0,Z.i)({mb:[4,null,null,0]})},c&&(0,v.tZ)(o.Fragment,null,(0,v.tZ)(s.Z,{space:3}),(0,v.tZ)(d.Z,{content:c}))),p&&(0,v.tZ)(f.Z,{effect:"fadeInRight",delay:1,css:(0,Z.i)({mb:[4,null,null,0]})},(0,v.tZ)(w.Z,(0,l.Z)({},p,{space:3}))))))})),I=n(2577),W=n(5205),z=n(4415),B=n(6514),A=(0,m.Z)((function(t){var e=t.content,n=e.text,i=e.images,a=e.collection,u=e.buttons,c=t.reverse;return(0,v.tZ)(r.W2,{sx:{position:"relative"}},(0,v.tZ)(r.kC,{sx:{alignItems:[null,"center"],flexDirection:[c?"column-reverse":"column",c?"row-reverse":"row"],mx:[null,null,null,-4]}},(0,v.tZ)(W.Z,{reverse:c},(0,v.tZ)(x.Z,{content:{images:i},reverse:c})),(0,v.tZ)(z.Z,{reverse:c},(0,v.tZ)(r.xu,{sx:{textAlign:["center","left"]}},(0,v.tZ)(y.Z,{content:n})),a&&(0,v.tZ)(o.Fragment,null,(0,v.tZ)(s.Z,{space:3}),(0,v.tZ)(r.kC,{sx:{flexWrap:"wrap",maxWidth:500,m:-2}},a.map((function(t,e){return(0,v.tZ)(f.Z,{key:"item-"+e,effect:"fadeInPop",delay:1+.2*(e+1),css:(0,Z.i)({flexBasis:["1","1/2"]})},(0,v.tZ)(r.Zb,{py:"3",m:"2"},(0,v.tZ)(I.Z,(0,l.Z)({},t,{compact:!0,middle:!0,p:"2"}))))})))),u&&(0,v.tZ)(r.xu,{sx:{textAlign:["center","left"]}},(0,v.tZ)(s.Z,{space:3}),(0,v.tZ)(d.Z,{content:u})))),(0,v.tZ)(B.Z,{direction:c?"ltr":"rtl"}))})),F={items:{flexWrap:"wrap",mx:[-2,-4],"& > div":{flex:1,px:[2,4],textAlign:["center","unset"]}}},P=(0,m.Z)((function(t){var e=t.content,n=e.text,l=e.images,i=e.collection,a=e.buttons,u=t.reverse;return(0,v.tZ)(r.W2,{sx:{position:"relative"}},(0,v.tZ)(r.kC,{sx:{alignItems:[null,"center"],flexDirection:[u?"column-reverse":"column",u?"row-reverse":"row"],mx:[null,null,null,-4]}},(0,v.tZ)(W.Z,{reverse:u},(0,v.tZ)(x.Z,{content:{images:l},reverse:u})),(0,v.tZ)(z.Z,{reverse:u},(0,v.tZ)(r.xu,{sx:{textAlign:["center","left"]}},(0,v.tZ)(y.Z,{content:n})),i&&(0,v.tZ)(o.Fragment,null,(0,v.tZ)(s.Z,{space:3}),(0,v.tZ)(r.kC,{sx:F.items},i.map((function(t,e){var n=t.text;return(0,v.tZ)(f.Z,{key:"item-"+e,effect:"fadeInPop",delay:.3*(e+1)},(0,v.tZ)(r.kC,{sx:{flexDirection:"column",height:"full"}},(0,v.tZ)(y.Z,{content:n,ml:0})))})))),a&&(0,v.tZ)(o.Fragment,null,(0,v.tZ)(s.Z,{space:3}),(0,v.tZ)(d.Z,{content:a})))),(0,v.tZ)(B.Z,{direction:u?"ltr":"rtl"}))})),S=(0,m.Z)((function(t){var e=t.content,n=e.text,i=e.images,a=e.collection,u=e.buttons,c=t.reverse;return(0,v.tZ)(r.W2,{sx:{position:"relative"}},(0,v.tZ)(r.kC,{sx:{alignItems:[null,"center"],flexDirection:[c?"column-reverse":"column",c?"row-reverse":"row"],mx:[null,null,null,-4]}},(0,v.tZ)(W.Z,{reverse:c},(0,v.tZ)(x.Z,{content:{images:i},reverse:c})),(0,v.tZ)(z.Z,{reverse:c},(0,v.tZ)(r.xu,{sx:{textAlign:["center","left"]}},(0,v.tZ)(y.Z,{content:n})),a&&(0,v.tZ)(o.Fragment,null,(0,v.tZ)(s.Z,{space:3}),(0,v.tZ)(f.Z,{effect:c?"fadeInRight":"fadeInLeft",duration:1.5},a.map((function(t,e){return(0,v.tZ)(o.Fragment,null,(0,v.tZ)(I.Z,(0,l.Z)({key:"item-"+e},t)),(0,v.tZ)(s.Z,{space:2}))})))),u&&(0,v.tZ)(o.Fragment,null,(0,v.tZ)(s.Z,{space:3}),(0,v.tZ)(d.Z,{content:u})))),(0,v.tZ)(B.Z,{direction:c?"ltr":"rtl"}))})),D=n(4332),R=n(6140),N=((0,m.Z)((function(t){var e=t.content,n=e.text,l=e.collection,i=e.buttons;return(0,v.tZ)(r.W2,{sx:{textAlign:"center"}},(0,v.tZ)(y.Z,{content:n}),(0,v.tZ)(f.Z,{effect:"fadeInUp"},l&&(0,v.tZ)(o.Fragment,null,(0,v.tZ)(s.Z,null),(0,v.tZ)(r.kC,{sx:{flexWrap:"wrap",m:-3}},null==l?void 0:l.map((function(t,e){var n=t.text,l=t.icon,i=t.buttons,a=t.container;return(0,v.tZ)(r.xu,{key:"item-"+e,sx:{flexBasis:["1",null,"1/2"],textAlign:"left",p:3}},(0,v.tZ)(D.Z,{content:a,variant:"cards.paper-lg"},(null==n?void 0:n[0])&&(0,v.tZ)(r.kC,{sx:{alignItems:"center",mb:4}},(0,v.tZ)(R.Z,{content:l,size:"sm",mr:"3"}),(0,v.tZ)(y.Z,{content:n[0],mb:"0"})),(0,v.tZ)(y.Z,{content:null==n?void 0:n[1]}),i&&(0,v.tZ)(o.Fragment,null,(0,v.tZ)(s.Z,{space:2}),(0,v.tZ)(d.Z,{content:i}))))})))),i&&(0,v.tZ)(o.Fragment,null,(0,v.tZ)(s.Z,{space:3}),(0,v.tZ)(d.Z,{content:i}))))})),n(3605),{wrapper:{position:"relative",bg:"footerBg"},footer:{flexDirection:["column-reverse","row"],justifyContent:"space-between",alignItems:["center","flex-start"],py:5},listBlk:{display:"block",overflowX:"hidden"}}),_=function(t){var e=t.content,n=e.text,l=e.images,o=e.collection;return(0,v.tZ)(r.xu,{sx:N.wrapper},(0,v.tZ)(r.W2,{px:"4"},(0,v.tZ)(r.kC,{sx:N.footer,xs:N.listBlk,className:"footerJoint"},(0,v.tZ)(r.xu,{sx:{minWidth:200}},(0,v.tZ)(r.xu,{pb:"1",mb:"2",mt:[4,0]},(0,v.tZ)(u.rU,{to:"/"},(0,v.tZ)(x.Z,{content:{images:l},imageEffect:"fadeIn"}))),(0,v.tZ)(r.xu,{pt:"2",mb:2},(0,v.tZ)(y.Z,{sx:{maxWidth:260},content:null==n?void 0:n[0]})),(0,v.tZ)(r.xu,{pt:"2",mb:[2,4]},"© ",(new Date).getFullYear(),", All Rights Reserved.")),null==o?void 0:o.map((function(t,e){var n=t.text,l=t.buttons;return l&&(0,v.tZ)(r.xu,{key:"item-"+e,mb:"3",xs:N.listBlk,className:"footer-links-block"},(0,v.tZ)(y.Z,{content:null==n?void 0:n[0],variant:"h5",sx:{display:["none","block"]}}),(0,v.tZ)(d.Z,{content:l,variant:"vertical",wrapperStyles:{flexDirection:[null,"column"]}}))})))))};_.defaultProps={menuJustify:"flex-end"};var M=(0,m.Z)(_),j=(0,m.Z)((function(t){var e=t.content,n=e.text,l=e.buttons;return(0,v.tZ)(r.W2,null,(0,v.tZ)(r.xu,{sx:{textAlign:"center"}},(0,v.tZ)(y.Z,{content:n})),l&&(0,v.tZ)(o.Fragment,null,(0,v.tZ)(s.Z,{space:3}),(0,v.tZ)(d.Z,{content:l})))})),E=n(2132),J={sheading:{fontSize:"1.1em"},listItem:{flex:"1 1 0",minWidth:300,p:3},itemDescription:{flexBasis:"3/5",flexGrow:1,order:[1,null,0],mb:3},icons:{padding:0,color:"#333",width:"16px",height:"16px",display:"inline-block",float:"left"}},L=(0,m.Z)((function(t){var e=t.content,n=e.text,l=e.collection;e.icon2;return(0,v.tZ)(r.W2,{as:f.Z},(0,v.tZ)(r.xu,{sx:{textAlign:"center"}},(0,v.tZ)(y.Z,{content:n})),l&&(0,v.tZ)(o.Fragment,null,(0,v.tZ)(s.Z,null),(0,v.tZ)(r.kC,{sx:{flexWrap:"wrap"},m:-3},l.map((function(t,e){var n=t.text,l=t.icon,i=(t.collection,t.buttons),a=t.container;return(0,v.tZ)(f.Z,{key:"item-"+e,effect:"fadeInGrow",delay:.15*(e+1),css:(0,Z.i)(J.listItem)},(0,v.tZ)(D.Z,{content:a,variant:"cards.paper",sx:{height:"full"}},(0,v.tZ)(R.Z,{content:l,size:"md",mr:"3",mb:"3"}),(0,v.tZ)(y.Z,{content:null==n?void 0:n[0],sx:J.sheading}),(0,v.tZ)(r.kC,{sx:{alignItems:"center",flexWrap:"wrap"}},(0,v.tZ)(y.Z,{content:null==n?void 0:n.slice(1),sx:J.itemDescription,mt:[3,null,0]})),i&&(0,v.tZ)(o.Fragment,null,(0,v.tZ)(s.Z,{space:0}),(0,v.tZ)(E.Z,{content:i,css:(0,Z.i)(J.icons)}))))})))))})),G=n(5541),O={colors:{background:"#fcfcff",headerBg:"transparent",footerBg:"#f1f3f8"}},U=n.p+"static/circle-ee421428e70c8c88bd28a12a5fc2c1c8.png",H={heroContainer:{position:"relative",pt:5,"::before":{content:'" "',width:"110%",height:"1000px",position:"absolute",top:"-200px",right:[0,null,null,"35%"],transform:["none",null,null,"skew(-23deg, 0deg) rotate(-10deg)"],zIndex:-1,borderRadius:"xl",background:function(t){return"radial-gradient(\n          circle,\n          "+t.colors.beta+" 0%,\n          "+t.colors.alpha+" 100%\n        )"},backgroundSize:"100%",backgroundPosition:"650px bottom"},"::after":{content:'" "',position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -45%)",zIndex:-1,size:"full",maxWidth:600,maxHeight:600,background:"url("+U+") no-repeat center center",backgroundSize:"contain",opacity:.1}},featuresContainer:{position:"relative",overflow:["hidden","unset"],"::before":{content:'" "',width:"100%",height:["80%",null,"140%"],position:"absolute",top:["5%",null,"-5%"],left:"60%",zIndex:-1,borderRadius:"xl",transform:"skew(23deg, 0deg) rotate(-10deg)",background:function(t){return"radial-gradient(\n          circle,\n          "+t.colors.beta+" 0%,\n          "+t.colors.alpha+" 100%\n        )"},backgroundSize:"100%",backgroundPosition:"650px bottom"},"::after":{display:["none","block"],content:'" "',position:"absolute",top:"-30%",left:"100%",transform:"translate(-50%, 0)",zIndex:-1,size:"600px",background:"url("+U+") no-repeat center center",backgroundSize:"cover",filter:"brightness(60%) sepia(100) saturate(100) hue-rotate(25deg)",opacity:.1}},socialProofContainer:{position:"relative","::before":{content:'" "',width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:-2,bg:"#F6F7FA"}}},T=function(t){var e=t.data.allBlockContent,n=(0,G.c)(null==e?void 0:e.nodes);return(0,v.tZ)(i.Z,(0,l.Z)({theme:O},t),(0,v.tZ)(a.Z,{title:"Software for Email Service Providers",description:"Email service providers can have the Mumara ESP installed on their webserver, can configure it with all required resources to offer email services to its clients."}),(0,v.tZ)(h,{content:n.header,menuJustify:"space-between"}),(0,v.tZ)(s.Z,{space:"5"}),(0,v.tZ)(r.W2,{variant:"full",sx:H.heroContainer},(0,v.tZ)(C,{content:n.hero,reverse:!0})),(0,v.tZ)(s.Z,{space:"5"}),(0,v.tZ)(s.Z,{space:"5"}),(0,v.tZ)(s.Z,{space:"5"}),(0,v.tZ)(s.Z,{space:"5"}),(0,v.tZ)(j,{content:n["why-choose-us"]}),(0,v.tZ)(s.Z,{space:"4"}),(0,v.tZ)(r.W2,{variant:"wide",sx:H.tabsContainer},(0,v.tZ)(k.ZP,{space:5},(0,v.tZ)(A,{content:n["tab-feature-one"]}),(0,v.tZ)(P,{content:n["tab-feature-two"]}),(0,v.tZ)(S,{content:n["tab-feature-three"]}))),(0,v.tZ)(s.Z,{space:"5"}),(0,v.tZ)(L,{content:n.services}),(0,v.tZ)(s.Z,{space:"5"}),(0,v.tZ)(M,{content:n.footer}))}}}]);
//# sourceMappingURL=component---packages-themes-gatsby-theme-flexiblocks-src-pages-classic-esp-index-jsx-83923c412d32453bc904.js.map