"use strict";(self.webpackChunk_elegantstack_gatsby_starter_flexiblocks=self.webpackChunk_elegantstack_gatsby_starter_flexiblocks||[]).push([[706],{615:function(t,e,n){n.d(e,{Z:function(){return g}});var i=n(7378),a=n(8945),o=n(2730),r=n(4886),s=n(3059),l=n(1690),c=n(4570),p=n(9606),m=n(6495),u={logo:{width:"353px",height:"80px"},heading:{fontSize:16},textsize:{fontSize:12}},g=(0,c.Z)((function(t){var e=t.content,n=e.text,c=e.collection,g=e.buttons;e.images;return(0,m.tZ)(a.W2,{sx:{textAlign:"center"}},n&&c&&(0,m.tZ)(r.Z,{space:3}),(0,m.tZ)(a.kC,{sx:{flexWrap:"wrap",m:-3,textAlign:"center"}},(0,m.tZ)(s.Z,{content:n,sx:{textAlign:"center",display:"block",width:"100%",fontWeight:"600"}}),(0,m.tZ)(r.Z,{space:3}),null==c?void 0:c.map((function(t,e){var n,i=t.text,r=(t.icon,t.images);return(0,m.tZ)(a.xu,{key:"item-"+e,sx:{flexBasis:["1","1/2",null,"1/3"],p:0},imagePosition:"center"},(0,m.tZ)(o.Z,{effect:"fadeInGrow",delay:.2*(e+2),title:null==i||null===(n=i[0])||void 0===n?void 0:n.text,sx:{textAlign:"center"}},(0,m.tZ)(p.Z,{content:{images:r},loading:"eager",imagePosition:"center",sx:u.logo})))}))),g&&(0,m.tZ)(i.Fragment,null,(0,m.tZ)(r.Z,{space:3}),(0,m.tZ)(l.Z,{content:g})))}))},2132:function(t,e,n){n.d(e,{Z:function(){return h}});var i=n(7223),a=n(7378),o=n(8945),r=n(6140),s=n(4332),l=n(5319),c=n(4392),p=n(1690),m=n(1184),u=n(6495),g={horizontal:{".button-group-link":{py:3},"> * + a, > * + div, > * + button":{ml:[3,null,null,4],mt:[4,0]}},vertical:{display:"flex",flexDirection:"column",a:{mb:[3,2],px:[2,0]}},subButtonsParent:{display:[null,null,"inline-flex"],alignItems:"center",":hover":{"& > .container-level-1":{opacity:1,visibility:"inherit",transform:[null,null,"translate(-50%, 0)"]}},"& > svg":{size:"icon.xs",position:["absolute","static"],right:0,ml:"auto"}},subContainer:{"&.container-level-1":{position:["static",null,"absolute"],top:[null,null,"100%"],left:[null,null,"50%"],transform:[null,null,"translate(-50%, -20px)"],boxShadow:[null,null,"0 0 25px rgba(140,152,164,.355)"],visibility:[null,null,"hidden"],overflow:[null,null,"hidden"],opacity:[null,null,0],bg:["omegaLighter",null,"contentBg"],borderRadius:[null,null,"default"],display:"flex",flexDirection:"column",transition:"all 250ms ease",p:[3,null,0],mt:[3,null,0]},"&.container-level-1.no-collection":{p:[3,null,3],".button-group-link":{px:2,py:1,my:1}},"&.container-level-2":{flexBasis:"100%",mt:[0,0,2],".button-group-link":{display:"block",py:0,mt:2}}},subContainerCollection:{display:"flex",flexDirection:["column",null,"row"],p:[null,null,4],mt:[3,null,0],"& > .button-group-link":{flexBasis:"1/3",display:"flex",flexWrap:"wrap",alignItems:"flex-start",alignContent:"flex-start",minWidth:210,mb:[0,null,"inherit"],py:0}}},d=function(t){var e=t.content,n=t.children,s=t.styles,m=void 0===s?{}:s,g=t.className,d=(0,a.useContext)(l.tC).setActiveModal,Z=(0,a.useContext)(c.RL).setActiveTab,f=e.type,h=e.text,x=e.link,b=e.target,w=e.variant,y=e.width,v=e.bg,k=e.icon,C=(0,p.H)({content:{type:f,link:x,target:b,variant:w},setActiveModal:d,setActiveTab:Z}),I=C.Component,A=C.linkProps;return(0,u.tZ)(I,(0,i.Z)({variant:w||"primary",sx:Object.assign({width:y,"::after":{bg:v,borderColor:v},position:"relative"},m)},A,{className:[A.className,g].join(" ")}),(0,u.tZ)(o.xu,{sx:{display:"inline-block"}},h," ",(0,u.tZ)(r.Z,{content:k,size:"xx",mr:"0",p:"0",m:"0",ml:"1"})),n)},Z=function t(e){var n=e.content,i=e.level,a=void 0===i?1:i,r=n.collection,l=n.buttons,c="level-"+a;if(!r&&!l)return(0,u.tZ)(d,{content:n,className:c});var p=function(e){return e.buttons.map((function(e,n){return(0,u.tZ)(t,{key:"item-"+n,level:a+1,content:e})}))};return(0,u.tZ)(d,{content:n,styles:g.subButtonsParent,className:c},1===a&&(0,u.tZ)(m.OrA,null),(0,u.tZ)(o.xu,{sx:g.subContainer,className:"container-level-"+a+" "+(r?"":"no-collection")},r?r.map((function(t,e){var n=t.container,i=t.buttons;return(0,u.tZ)(s.Z,{key:"item-"+e,content:n,sx:g.subContainerCollection},(0,u.tZ)(p,{buttons:i}))})):(0,u.tZ)(p,{buttons:l})))},f=function(t){var e=t.content,n=t.variant,i=t.wrapperStyles;return e?(0,u.tZ)(a.Fragment,null,(0,u.tZ)(o.xu,{sx:Object.assign({},g[n],i)},null==e?void 0:e.map((function(t,e){return(0,u.tZ)(Z,{key:"item-"+e,index:e,content:t})})))):null},h=f;f.defaultProps={variant:"horizontal"};n(5414),n(2757),n(3324),n(9718)},4415:function(t,e,n){n.d(e,{Z:function(){return r}});n(7378);var i=n(8945),a=n(2730),o=n(6495),r=function(t){var e=t.children,n=t.reverse;return(0,o.tZ)(i.xu,{sx:{flexBasis:"1/2",zIndex:[null,1],mx:[null,null,null,4]}},(0,o.tZ)(a.Z,{effect:n?"fadeInLeft":"fadeInRight"},e))}},5205:function(t,e,n){n.d(e,{Z:function(){return o}});n(7378);var i=n(8945),a=n(6495),o=function(t){var e,n=t.reverse,o=t.children;return(0,a.tZ)(i.xu,{sx:(e={flexBasis:[null,"2/3",null,"1/2"],mx:[null,null,null,4]},e[n?"ml":"mr"]=[null,function(t){return"-"+t.sizes["1/6"]},null],e[n?"mt":"mb"]=[4,0],e.position="relative",e)},o)}},6514:function(t,e,n){n.d(e,{Z:function(){return r}});n(7378);var i=n(8945),a=n(6495),o=function(t){var e=t.direction;return(0,a.tZ)(i.xu,{sx:{display:["none","block",null,"none"],position:"absolute",top:"-25%",left:"ltr"===e?"-50%":"0",zIndex:0,size:"150%",backgroundImage:function(t){return"radial-gradient(\n          circle,\n          "+t.colors.background+" 25%,\n          transparent 70%\n        )"}}})},r=o;o.defaultProps={direction:"ltr"}},3605:function(t,e,n){n(7378),n(6495)},6328:function(t,e,n){n.d(e,{Z:function(){return l}});var i=n(7378),a=n(8945),o=n(4886),r=n(1690),s=n(6495),l=function(t){var e,n,l=t.space,c=t.fields,p=t.buttons;return(null==c?void 0:c[0])&&(0,s.tZ)(i.Fragment,null,(0,s.tZ)(o.Z,{space:l}),(0,s.tZ)(a.xu,{variant:"cards.primary",sx:{display:"inline-flex",alignContent:"space-between",bg:"contentBg",borderRadius:"xl",minWidth:["auto",400],p:2}},(0,s.tZ)(a.II,{type:"text",name:c[0].identifier,placeholder:null===(e=c[0].placeholder)||void 0===e?void 0:e.text,sx:{bg:"transparent",px:3,py:0,"::placeholder":{color:(null===(n=c[0].placeholder)||void 0===n?void 0:n.color)||"omegaDark"}}}),(null==p?void 0:p[0])&&(0,s.tZ)(r.Z,{content:p,wrapperStyles:{minWidth:"auto"}})))}},4242:function(t,e,n){n.r(e),n.d(e,{default:function(){return X}});var i=n(7223),a=n(7378),o=n(8945),r=n(5976),s=n(8062),l=n(4886),c=n(5414),p=n(6267),m=n(1025),u=n(2730),g=n(3924),d=n(9606),Z=n(1690),f=n(4570),h=n(6495),x={wrapper:{position:"relative",zIndex:10,".nav-container":{bg:"headerBg",position:"fixed",transition:"all 250ms ease-in",py:3},".nav-sticky .nav-container":{bg:"headerActiveBg",boxShadow:"0 0 25px rgba(140,152,164,.25)",py:[3,null,2],".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}},".button-group-button":{minWidth:120,fontSize:1,px:3,py:1}},header:{justifyContent:"space-between",alignItems:"center"},logoContainer:{flexShrink:0,mr:[null,null,3,5]},desktopMenu:{display:["none",null,"block"],minWidth:"auto",flexGrow:1},mobileMenu:{display:["block",null,"none"]}},b=function(t){var e=t.content,n=e.images,i=e.collection,r=t.menuJustify;return(0,h.tZ)(a.Fragment,null,(0,h.tZ)(p.ZP,{enabled:"true",stickyClassName:"nav-sticky",css:(0,m.i)(x.wrapper)},(0,h.tZ)(o.W2,{variant:"full",className:"nav-container"},(0,h.tZ)(o.W2,{px:"4"},(0,h.tZ)(o.kC,{sx:x.header},(0,h.tZ)(o.xu,{sx:x.logoContainer},(0,h.tZ)(c.rU,{to:"/"},(0,h.tZ)(d.Z,{content:{images:n},sx:x.image,imageEffect:"fadeIn"}))),i&&(0,h.tZ)(a.Fragment,null,(0,h.tZ)(o.xu,{sx:x.desktopMenu},(0,h.tZ)(u.Z,{effect:"fadeInDown"},(0,h.tZ)(o.kC,{sx:{alignItems:"center",justifyContent:r}},i.map((function(t,e){var n=t.buttons;return n&&(0,h.tZ)(o.xu,{key:"item-"+e,sx:{"& + &":{ml:4}}},(0,h.tZ)(Z.Z,{content:n}))}))))),(0,h.tZ)(o.xu,{sx:x.mobileMenu},(0,h.tZ)(g.Z,{buttonStyle:{svg:{size:32}}},i.map((function(t,e){var n=t.buttons;return n&&(0,h.tZ)(o.xu,{key:"item-"+e,sx:{fontSize:3,".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}}},(0,h.tZ)(Z.Z,{content:n,variant:"vertical"}))}))))))))))};b.defaultProps={menuJustify:"flex-end"};var w=(0,f.Z)(b),y=n(3059),v=n(7077),k=n(315),C=["image","sx"],I=function(t){var e=t.image,n=t.sx,a=(0,v.Z)(t,C);if(null==e||!e.src)return null;if("svg"===e.src.extension)return(0,h.tZ)("img",(0,i.Z)({src:e.src.publicURL,style:{width:e.width||"100%",maxWidth:e.maxWidth||"none"}},a));var o=(0,k.d)(e.src);return o?(0,h.tZ)(k.G,(0,i.Z)({image:o,alt:e.alt,css:(0,m.i)(Object.assign({verticalAlign:"middle",borderStyle:e.border?"solid":"none",borderWidth:e.border||0,borderColor:"white",boxShadow:e.shadow||"unset",borderRadius:e.radius||"unset"},n))},a)):null},A=function(t){var e,n=t.content.images,i=t.reverse,o=t.imagePosition,r=t.objectPosition,s=t.imageFit,l=t.imageEffect,c=t.loading,p=t.sx;return n?(0,h.tZ)(a.Fragment,null,(0,h.tZ)(u.Z,{effect:l||(i?"fadeInRight":"fadeInLeft"),css:(0,m.i)({textAlign:"center"===o?"center":i?"right":void 0})},(0,h.tZ)(I,{image:n[0],loading:c,objectFit:s,objectPosition:r,sx:p})),null==n||null===(e=n.slice(1))||void 0===e?void 0:e.map((function(t,e){return t.src&&(0,h.tZ)(u.Z,{key:"item-"+e,effect:t.effects[0]||void 0,delay:.5,css:(0,m.i)(Object.assign({},t.position,{position:"absolute",display:["none","block"]}))},(0,h.tZ)(u.Z,{effect:t.effects[1]||void 0,style:{backfaceVisibility:"hidden"}},(0,h.tZ)(I,{image:t,loading:c})))}))):null};A.defaultProps={loading:"lazy"};var M=A,S=n(6328),W=(0,f.Z)((function(t){var e=t.content,n=e.text,r=e.buttons,s=e.form,c=e.images;return(0,h.tZ)(o.W2,{sx:{textAlign:"center"}},(0,h.tZ)(u.Z,{effect:"fadeInDown"},(0,h.tZ)(y.Z,{content:n})),r&&(0,h.tZ)(a.Fragment,null,(0,h.tZ)(l.Z,{space:3}),(0,h.tZ)(u.Z,{effect:"fadeInUp",duration:.7},(0,h.tZ)(Z.Z,{content:r}))),s&&(0,h.tZ)(a.Fragment,null,(0,h.tZ)(l.Z,{space:4}),(0,h.tZ)(u.Z,{effect:"fadeInRight",delay:.7},(0,h.tZ)(S.Z,(0,i.Z)({},s,{space:3})))),c&&(0,h.tZ)(a.Fragment,null,(0,h.tZ)(l.Z,{space:4}),(0,h.tZ)(o.xu,{sx:{position:"relative"}},(0,h.tZ)(M,{content:{images:c},loading:"eager",imagePosition:"center",imageEffect:"fadeInUp"}))))})),j=n(615),z=n(4332),P=n(6140),R=n(2132),L={sheading:{fontSize:"1.1em"},listItem:{flex:"1 1 0",minWidth:300,p:3},itemDescription:{flexBasis:"3/5",flexGrow:1,order:[1,null,0],mb:3},icons:{padding:0,color:"#333",width:"16px",height:"16px",display:"inline-block",float:"left"}},B=(0,f.Z)((function(t){var e=t.content,n=e.text,i=e.collection;e.icon2;return(0,h.tZ)(o.W2,{as:u.Z},(0,h.tZ)(o.xu,{sx:{textAlign:"center"}},(0,h.tZ)(y.Z,{content:n})),i&&(0,h.tZ)(a.Fragment,null,(0,h.tZ)(l.Z,null),(0,h.tZ)(o.kC,{sx:{flexWrap:"wrap"},m:-3},i.map((function(t,e){var n=t.text,i=t.icon,r=(t.collection,t.buttons),s=t.container;return(0,h.tZ)(u.Z,{key:"item-"+e,effect:"fadeInGrow",delay:.15*(e+1),css:(0,m.i)(L.listItem)},(0,h.tZ)(z.Z,{content:s,variant:"cards.paper",sx:{height:"full"}},(0,h.tZ)(P.Z,{content:i,size:"md",mr:"3",mb:"3"}),(0,h.tZ)(y.Z,{content:null==n?void 0:n[0],sx:L.sheading}),(0,h.tZ)(o.kC,{sx:{alignItems:"center",flexWrap:"wrap"}},(0,h.tZ)(y.Z,{content:null==n?void 0:n.slice(1),sx:L.itemDescription,mt:[3,null,0]})),r&&(0,h.tZ)(a.Fragment,null,(0,h.tZ)(l.Z,{space:0}),(0,h.tZ)(R.Z,{content:r,css:(0,m.i)(L.icons)}))))})))))})),U=n(2577),F=n(5205),q=n(4415),D=n(6514),E=(0,f.Z)((function(t){var e=t.content,n=e.text,r=e.images,s=e.collection,c=e.buttons,p=t.reverse;return(0,h.tZ)(o.W2,{sx:{position:"relative"}},(0,h.tZ)(o.kC,{sx:{alignItems:[null,"center"],flexDirection:[p?"column-reverse":"column",p?"row-reverse":"row"],mx:[null,null,null,-4]}},(0,h.tZ)(q.Z,{reverse:p},(0,h.tZ)(o.xu,{sx:{textAlign:["center","left"]}},(0,h.tZ)(y.Z,{content:n})),s&&(0,h.tZ)(a.Fragment,null,(0,h.tZ)(l.Z,{space:3}),(0,h.tZ)(u.Z,{effect:p?"fadeInRight":"fadeInLeft",duration:1.5},s.map((function(t,e){return(0,h.tZ)(a.Fragment,null,(0,h.tZ)(U.Z,(0,i.Z)({key:"item-"+e},t)),(0,h.tZ)(l.Z,{space:2}))})))),c&&(0,h.tZ)(a.Fragment,null,(0,h.tZ)(R.Z,{content:c}))),(0,h.tZ)(F.Z,{reverse:p},(0,h.tZ)(d.Z,{content:{images:r},reverse:p}))),(0,h.tZ)(D.Z,{direction:p?"ltr":"rtl"}))})),N=(n(3605),{wrapper:{position:"relative",bg:"footerBg"},footer:{flexDirection:["column-reverse","row"],justifyContent:"space-between",alignItems:["center","flex-start"],py:5},listBlk:{display:"block",overflowX:"hidden"}}),O=function(t){var e=t.content,n=e.text,i=e.images,a=e.collection;return(0,h.tZ)(o.xu,{sx:N.wrapper},(0,h.tZ)(o.W2,{px:"4"},(0,h.tZ)(o.kC,{sx:N.footer,xs:N.listBlk,className:"footerJoint"},(0,h.tZ)(o.xu,{sx:{minWidth:200}},(0,h.tZ)(o.xu,{pb:"1",mb:"2",mt:[4,0]},(0,h.tZ)(c.rU,{to:"/"},(0,h.tZ)(d.Z,{content:{images:i},imageEffect:"fadeIn"}))),(0,h.tZ)(o.xu,{pt:"2",mb:2},(0,h.tZ)(y.Z,{sx:{maxWidth:260},content:null==n?void 0:n[0]})),(0,h.tZ)(o.xu,{pt:"2",mb:[2,4]},"© ",(new Date).getFullYear(),", All Rights Reserved.")),null==a?void 0:a.map((function(t,e){var n=t.text,i=t.buttons;return i&&(0,h.tZ)(o.xu,{key:"item-"+e,mb:"3",xs:N.listBlk,className:"footer-links-block"},(0,h.tZ)(y.Z,{content:null==n?void 0:n[0],variant:"h5",sx:{display:["none","block"]}}),(0,h.tZ)(Z.Z,{content:i,variant:"vertical",wrapperStyles:{flexDirection:[null,"column"]}}))})))))};O.defaultProps={menuJustify:"flex-end"};var _=(0,f.Z)(O),T=n(5541),V=n(7326),G={colors:{background:"#fbfbfb",headerBg:"transparent",footerBg:"#f1f3f8"}},J=n.p+"static/contour-pattern-31b9121b55c7a157c438084d7a7bab57.svg",H={html:{overflowX:"hidden"},body:{overflowX:"hidden"},heroContainer:{"::before":{content:'" "',size:"full",position:"absolute",top:"-10%",left:0,zIndex:-1,background:function(t){return"url("+J+") no-repeat center 0, linear-gradient(\n          180deg,\n          "+t.colors.alphaLighter+" 0%,\n          "+t.colors.background+" 100%\n        )"},backgroundSize:"100%"}},strategiesContainer:{position:"relative","::before":{content:'" "',width:"full",height:"150%",position:"absolute",top:0,left:0,zIndex:-1,background:function(t){return"url("+J+") no-repeat center 0, linear-gradient(\n          180deg,\n          "+t.colors.alphaLighter+" 0%,\n          "+t.colors.background+" 100%\n        )"},backgroundSize:"100%"}},whyChooseUsContainer:{bg:"omegaLighter",borderRadius:"xl",py:5,px:[4,0]},footer:{display:"block",overflowX:"hidden"}},X=function(t){var e=t.data.allBlockContent,n=(0,T.c)(null==e?void 0:e.nodes);return(0,h.tZ)(r.Z,(0,i.Z)({theme:G},t,{xs:H.body}),(0,h.tZ)(s.Z,{title:"Self-Hosted Email Marketing | MumaraClassic",description:"Start sending sizeable amount of emails speedily right in the target inbox with MumaraClassic. Reliable self-hosted email marketing software."}),(0,h.tZ)(w,{content:n.header}),(0,h.tZ)(l.Z,{space:"5"}),(0,h.tZ)(l.Z,{space:"5"}),(0,h.tZ)(o.W2,{variant:"full",sx:H.heroContainer},(0,h.tZ)(W,{content:n.hero})),(0,h.tZ)(l.Z,{space:"3"}),(0,h.tZ)(j.Z,{content:n.companies}),(0,h.tZ)(l.Z,{space:"5"}),(0,h.tZ)(l.Z,{space:"5"}),(0,h.tZ)(E,{content:n["feature-one"]}),(0,h.tZ)(l.Z,{space:"5"}),(0,h.tZ)(B,{content:n.services}),(0,h.tZ)(B,{content:n.services2}),(0,h.tZ)(l.Z,{space:"5"}),(0,h.tZ)(l.Z,{space:"5"}),(0,h.tZ)(_,{content:n.footer}),(0,h.tZ)(V.q,null,(0,h.tZ)("script",{type:"application/ld+json"},'\n            {\n              "@context": "http://schema.org/", \n              "@type": "BreadcrumbList", \n              "itemListElement": [\n                { \n                  "@type": "ListItem", \n                  "position": "1", \n                  "item": { \n                    "@id": "https://www.mumara.com", \n                    "name": "Mumara",\n                    "image": "https://mumara-new.netlify.app/assets/img/logo-dark.png" \n                  } \n                },{ \n                  "@type": "ListItem", \n                  "position": "2", \n                  "item": { \n                    "@id": "https://www.mumara.com/classic/", \n                    "name": "Classic"\n                  } \n                }\n              ]\n            }\n          '),(0,h.tZ)("script",{type:"application/ld+json"},'\n            {\n              "@context": "http://schema.org/",\n              "@type": "Product",\n              "name": "MumaraClassic",\n              "sku": "0445430786",\n              "mpn": "925876",\n              "image": [\n                "https://mumara-new.netlify.app/assets/img/logo-dark.png"\n              ],\n              "description": "Start sending sizeable amount of emails speedily right in the target inbox with MumaraClassic. Reliable self-hosted email marketing software.",\n              "brand": {\n                "@type": "Thing",\n                "name": "Mumara"\n              },\n              "review": {\n                    "@type": "Review",\n                    "reviewRating": {\n                      "@type": "Rating",\n                      "ratingValue": "4",\n                      "bestRating": "5"\n                    },\n                    "author": {\n                      "@type": "Person",\n                      "name": "Wasif Ahmed"\n                    }\n              },\n              "aggregateRating": {\n                "@type": "AggregateRating",\n                "ratingValue": "5.0",\n                "reviewCount": "1797"\n              },\n              "offers": {\n                    "@type": "Offer",\n                    "url": "https://example.com/anvil",\n                    "priceCurrency": "USD",\n                    "price": "47",\n                    "priceValidUntil": "2021-11-20",\n                    "itemCondition": "https://schema.org/UsedCondition",\n                    "availability": "https://schema.org/InStock",\n                    "seller": {\n                      "@type": "Organization",\n                      "name": "Hostings House"\n                    }\n              }\n            }\n          '),(0,h.tZ)("script",{type:"application/ld+json"},'\n            {\n              "@context": "https://schema.org",\n              "@type": "Organization",\n              "name": "Mumara",\n              "alternateName": "Marketing Automation &amp; Customer Engagement Tools | Mumara",\n              "url": "https://www.mumara.com",\n              "logo": "https://mumara-new.netlify.app/assets/img/logo-dark.png",\n              "contactPoint": {\n                "@type": "ContactPoint",\n                "telephone": "+1 (844) 686 – 2721",\n                "contactType": "customer service"\n              },\n              "sameAs": [\n                "https://www.facebook.com/MumaraApps",\n                "https://twitter.com/MumaraApps",\n                "https://plus.google.com/+MumaraEmailMarketer",\n                "https://www.youtube.com/channel/UC1k6voQOVss0_PWg7CfJTdw",\n                "https://www.linkedin.com/company/mumara"\n              ]\n            }\n          '),(0,h.tZ)("script",{type:"application/ld+json"},'\n            {\n              "@context":"https://schema.org",\n              "@type":"ItemList",\n              "itemListElement":[\n                {\n                  "@type":"ListItem",\n                  "position":1,\n                  "url":"https://www.mumara.com/campaigns/"\n                },\n                {\n                  "@type":"ListItem",\n                  "position":2,\n                  "url":"https://www.mumara.com/one/"\n                },\n                {\n                  "@type":"ListItem",\n                  "position":3,\n                  "url":"https://www.mumara.com/sms/"\n                },\n                {\n                  "@type":"ListItem",\n                  "position":4,\n                  "url":"https://www.mumara.com/smsplus/"\n                },\n                {\n                  "@type":"ListItem",\n                  "position":5,\n                  "url":"https://www.mumara.com/classic/"\n                }\n              ]\n            }\n          '),(0,h.tZ)("script",{type:"application/ld+json"},'\n            {\n              "@context": "https://schema.org",\n              "@type": "Person",\n              "name": "Mumara",\n              "url": "https://www.mumara.com",\n              "sameAs": [\n                "https://www.facebook.com/MumaraApps",\n                "https://twitter.com/MumaraApps",\n                "https://plus.google.com/+MumaraEmailMarketer",\n                "https://www.youtube.com/channel/UC1k6voQOVss0_PWg7CfJTdw",\n                "https://www.linkedin.com/company/mumara"\n              ]\n            }\n          '),(0,h.tZ)("script",{type:"application/ld+json"},'\n            {\n              "@context": "https://schema.org/",\n              "@type": "WebSite",\n              "name": "Mumara",\n              "url": "https://www.mumara.com/",\n              "potentialAction": {\n                "@type": "SearchAction",\n                "target": "https://www.mumara.com/?s={s}",\n                "query-input": "required name=s"\n              }\n            }\n          '),(0,h.tZ)("script",{src:"https://code.jquery.com/jquery-3.6.0.min.js",integrity:"sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=",crossorigin:"anonymous"}),(0,h.tZ)("script",{"data-ad-client":"ca-pub-7570269198350551",async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}),(0,h.tZ)("script",{id:"sbinit",src:"https://dashboard.mumara.com/js/init.js"}),(0,h.tZ)("script",null,"\n            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;\n            ga('create', 'UA-63566119-1', 'auto');\n            ga('send', 'pageview');\n          "),(0,h.tZ)("script",{async:!0,src:"https://www.google-analytics.com/analytics.js"}),(0,h.tZ)("script",null,"\n            !function(f,b,e,v,n,t,s)\n            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n            n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n            n.queue=[];t=b.createElement(e);t.async=!0;\n            t.src=v;s=b.getElementsByTagName(e)[0];\n            s.parentNode.insertBefore(t,s)}(window, document,'script',\n            'https://connect.facebook.net/en_US/fbevents.js');\n            fbq('init', '329504770823436');\n            fbq('track', 'Mumara PageView');\n          "),(0,h.tZ)("noscript",null,'<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=329504770823436&ev=ViewContent&noscript=1" />')),(0,h.tZ)("div",{className:"sitesearch",itemscope:!0,itemtype:"https://schema.org/WebSite",style:{display:"none"}},(0,h.tZ)("meta",{itemprop:"url",content:"https://www.mumara.com/"}),(0,h.tZ)("form",{itemprop:"potentialAction",itemscope:!0,itemtype:"https://schema.org/SearchAction"},(0,h.tZ)("meta",{itemprop:"target",content:"https://www.mumara.com/?s={s}"}),(0,h.tZ)("input",{itemprop:"query-input",type:"text",name:"s",required:!0}),(0,h.tZ)("input",{type:"submit"}))),(0,h.tZ)("span",{className:"socialorg",itemscope:!0,itemtype:"https://schema.org/Organization",style:{display:"none"}},(0,h.tZ)("link",{itemprop:"url",href:"https://www.mumara.com"}),(0,h.tZ)("a",{itemprop:"sameAs",href:"https://www.facebook.com/MumaraApps"},"FB"),(0,h.tZ)("a",{itemprop:"sameAs",href:"https://twitter.com/MumaraApps"},"Twitter"),(0,h.tZ)("a",{itemprop:"sameAs",href:"https://plus.google.com/+MumaraEmailMarketer"},"Google+"),(0,h.tZ)("a",{itemprop:"sameAs",href:"https://www.youtube.com/channel/UC1k6voQOVss0_PWg7CfJTdw"},"Youtube"),(0,h.tZ)("a",{itemprop:"sameAs",href:"https://www.linkedin.com/company/mumara"},"Linkedin")),(0,h.tZ)("ol",{itemscope:!0,itemtype:"http://schema.org/BreadcrumbList",style:{display:"none"}},(0,h.tZ)("li",{itemprop:"itemListElement",itemscope:!0,itemtype:"http://schema.org/ListItem"},(0,h.tZ)("a",{itemscope:!0,itemtype:"http://schema.org/Thing",itemprop:"item",href:"https://www.mumara.com",id:"https://www.mumara.com"},(0,h.tZ)("span",{itemprop:"name"},"Mumara"),(0,h.tZ)("img",{itemprop:"image",src:"https://mumara-new.netlify.app/assets/img/logo-dark.png",alt:"Mumara"})),(0,h.tZ)("meta",{itemprop:"position",content:"1"})),"›",(0,h.tZ)("li",{itemprop:"itemListElement",itemscope:!0,itemtype:"http://schema.org/ListItem"},(0,h.tZ)("a",{itemscope:!0,itemtype:"http://schema.org/Thing",itemprop:"item",href:"https://www.mumara.com/classic/",id:"https://www.mumara.com/classic/"},(0,h.tZ)("span",{itemprop:"name"},"MumaraClassic"),(0,h.tZ)("img",{itemprop:"image",src:"https://mumara-new.netlify.app/assets/img/logo-dark.png",alt:"Classic | Mumara"})),(0,h.tZ)("meta",{itemprop:"position",content:"2"}))),(0,h.tZ)("div",{class:"schemaproduct",itemscope:!0,itemtype:"http://schema.org/Product",style:{display:"none"}},(0,h.tZ)("meta",{itemprop:"mpn",content:"925876"}),(0,h.tZ)("span",{itemprop:"brand"},"Mumara"),(0,h.tZ)("span",{itemprop:"name"},"MumaraClassic"),(0,h.tZ)("script",{src:"https://ajax.cloudflare.com/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js","data-cf-settings":"a69688c148936313d2074b15-|49"}),(0,h.tZ)("img",{itemprop:"image",src:"https://mumara-new.netlify.app/assets/img/logo-dark.png",alt:"MumaraClassic","data-pagespeed-url-hash":"3376842629",onload:"pagespeed.CriticalImages.checkImageForCriticality(this);"}),(0,h.tZ)("span",{itemprop:"description"},"Start sending sizeable amount of emails speedily right in the target inbox with MumaraClassic. Reliable self-hosted email marketing software."),"Product #: ",(0,h.tZ)("span",{itemprop:"mpn"},"1"),(0,h.tZ)("span",{itemprop:"aggregateRating",itemscope:!0,itemtype:"http://schema.org/AggregateRating"},(0,h.tZ)("span",{itemprop:"ratingValue"},"5.0")," stars, based on ",(0,h.tZ)("span",{itemprop:"reviewCount"},"1797")," reviews"),(0,h.tZ)("span",{itemprop:"offers",itemscope:!0,itemtype:"http://schema.org/Offer"},"Regular price: $47",(0,h.tZ)("meta",{itemprop:"priceCurrency",content:"USD"}),"$",(0,h.tZ)("span",{itemprop:"price"},"47"),"Available from: ",(0,h.tZ)("span",{itemprop:"seller",itemscope:!0,itemtype:"http://schema.org/Organization"},(0,h.tZ)("span",{itemprop:"name"},"Hostings House")),(0,h.tZ)("link",{itemprop:"url",href:"https://www.mumara.com/campaigns/"}),(0,h.tZ)("meta",{itemprop:"availability",content:"https://schema.org/InStock"}),(0,h.tZ)("meta",{itemprop:"priceCurrency",content:"USD"}),(0,h.tZ)("meta",{itemprop:"itemCondition",content:"https://schema.org/UsedCondition"}),(0,h.tZ)("meta",{itemprop:"price",content:"47"}),(0,h.tZ)("meta",{itemprop:"priceValidUntil",content:"2021-11-20"})),(0,h.tZ)("meta",{itemprop:"sku",content:"0445430786"}),(0,h.tZ)("div",{itemprop:"review",itemtype:"http://schema.org/Review",itemscope:!0},(0,h.tZ)("div",{itemprop:"author",itemtype:"http://schema.org/Person",itemscope:!0},(0,h.tZ)("meta",{itemprop:"name",content:"Wasif Ahmed"})),(0,h.tZ)("div",{itemprop:"reviewRating",itemtype:"http://schema.org/Rating",itemscope:!0},(0,h.tZ)("meta",{itemprop:"ratingValue",content:"5.0"}),(0,h.tZ)("meta",{itemprop:"bestRating",content:"5"})))))}}}]);
//# sourceMappingURL=component---packages-themes-gatsby-theme-flexiblocks-src-pages-classic-index-jsx-8b43c015a4f956e86dac.js.map