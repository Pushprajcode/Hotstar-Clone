"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4114],{28941:function(e,t,r){r.d(t,{z:function(){return A}});var n,i,o,c=r(92809),a=r(52209),l=r(61565),s=r(26203),u=r(67814),d=r(94184),p=r.n(d),h=r(67294),f=r(2031),m=r(62372),x=r(48416),b=r(13159),g=r(87899),v=r(63142),y=r(45922),j=r(91164),w=r(77132),O=r(2825),P=r(47599),N=r(68346),k=r(85893);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z,L,T,C=function(e){var t=e.onSave,r=e.pattern,c=e.label,l=(0,f.$)().t,s=(0,N.U)("",(function(e){return e.trim()?null:l("lightbox-modal.error")})),u=s.showError,d=s.valid,h=s.value,m=s.props;return(0,k.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(h)},children:[(0,k.jsxs)("div",{className:p()("flex rounded hover:border-2 focus-within:p-0 focus-within:border-cyan focus-within:border-2 focus-within:text-cyan transition-colors",!u&&"border border-grey-border py-px hover:py-0 px-px hover:px-0 text-grey-deep",u&&"border-red border-2 text-red"),children:[(0,k.jsx)("div",{className:"flex flex-col flex-1 p-1",children:(0,k.jsxs)("label",{className:"w-full pl-3",children:[(0,k.jsx)("div",{className:"text-xs",children:c}),(0,k.jsx)("input",D({required:!0,type:"text",className:"flex w-full h-5 min-w-0 mt-1 text-base text-grey-black focus:outline-none",pattern:r.source},m))]})}),(0,k.jsx)("button",{disabled:!d,title:l(n||(n=(0,a.Z)(["lightbox-modal.save"]))),className:p()("h-10 px-3 my-1 text-lg border-l",d?"text-cyan hover:text-blue-deep focus:text-blue-deep focus:outline-none":"text-grey-mid cursor-default"),children:l(i||(i=(0,a.Z)(["lightbox-modal.save"])))})]}),u&&(0,k.jsx)("div",{className:"w-full pt-1 text-xs text-red",children:l(o||(o=(0,a.Z)(["lightbox-modal.error"])))})]})},E=/^[^*|":^~<>[\]{}`\\()';@$]+$/i,R=function(e){var t=e.product,r=e.closeModal,n=(0,f.$)().t,i=(0,b.e)(),o=i.lightboxes,c=i.addToLightbox,l=i.createNewLightboxWithProduct;return(0,k.jsxs)("div",{className:"flex items-start mt-4",children:[(0,k.jsx)("div",{className:"hidden w-full pr-6 border border-grey-border max-h-64 md:block md:w-1/2",children:(0,k.jsx)(P.l,{product:t,className:"max-h-64"})}),(0,k.jsxs)("div",{className:"w-full pl-0 md:pl-6 md:w-1/2",children:[(0,k.jsx)(C,{onSave:function(e){l(e,t).then(r).catch(y.S3)},pattern:E,label:n("lightbox-modal.create-new-lightbox")}),(0,k.jsx)("div",{className:"w-full px-4 mt-4 border rounded box-border",children:o.length>0?(0,k.jsx)("ul",{className:"divide-y",children:o.map((function(e){return(0,k.jsx)("li",{children:(0,k.jsx)("button",{className:"w-full py-2 text-left text-grey-black hover:text-cyan",onClick:function(){!function(e){c(e,t).then(r).catch(y.S3)}(e)},children:e.name})},e.id)}))}):(0,k.jsxs)("div",{className:"flex flex-col items-center justify-center h-72 ",children:[(0,k.jsx)(u.G,{icon:O.KtF,className:" mb-4 text-6xl text-grey-mid"}),(0,k.jsx)("p",{className:"text-xl text-grey-black",children:n(Z||(Z=(0,a.Z)(["lightbox-modal.create-a-lightbox"])))}),(0,k.jsx)("p",{className:"pl-4 text-center text-grey-deep ",children:n(L||(L=(0,a.Z)(["lightbox-modal.lightbox-list-message"])))})]})})]})]})},z=["product","onHide"];function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F,I,M,q,K,$=function(e){var t=e.product,r=e.onHide,n=(0,j.Z)(e,z),i=(0,f.$)().t,o=(0,g.w)();return(0,k.jsxs)(w.u_,V(V({transition:w.Lt.SlideDown,large:!0,className:p()(o&&"font-noto"),onHide:r},n),{},{"data-testid":"lightbox-modal",children:[(0,k.jsx)(w.r6,{ruled:!0,children:i(T||(T=(0,a.Z)(["lightbox-modal.title"])))}),(0,k.jsx)(R,{product:t,closeModal:r})]}))},B=r(26972);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=function(e){var t=e.product,r=e.children,n=e.containerRef,i=e.containerType,o=(0,f.$)().t,c=(0,g.w)(),d=(0,b.e)(),j=d.currentLightbox,w=d.addToLightbox,O=(0,h.useState)(!1),P=O[0],N=O[1],S=(0,m.XI)({delayEnter:300,delayLeave:300,hideOnScroll:!0}),D=(0,l.Z)(S,3),Z=D[0],L=D[1],T=D[2],C=function(){return N(!0)},E=function(){T(),i?(0,v.t3)(i,"lightbox"):(0,v.Wf)(v.aU.Add,v.D_.AddToLightbox),j?w(j,t).catch(y.S3):N(!0)},R=(0,h.useRef)(null),z=(0,m.sJ)({isOpen:Z,onOutsideClick:T,onDisappear:T,overflowContainer:Boolean(n),container:(null===n||void 0===n?void 0:n.current)||void 0,auto:!0,placement:"top-end",triggerOffset:3,containerOffset:16,arrowOffset:16,trigger:{getParent:function(){return R.current},getBounds:function(){var e;return null===(e=R.current)||void 0===e?void 0:e.getBoundingClientRect()}}}),_=z.renderLayer,V=z.layerProps,U=z.arrowProps;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("div",H(H({},L),{},{children:[(0,h.cloneElement)(r,{ref:R,onClick:E}),_((0,k.jsx)(x.ZP,{in:Z,timeout:{appear:300,exit:300},unmountOnExit:!0,children:function(e){return(0,k.jsxs)("div",H(H({},V),{},{className:p()("flex w-56 h-16 bg-white border shadow-md rounded-md duration-".concat(300),B.qV[B.yV.Fade].base,B.qV[B.yV.Fade][e]),children:[(0,k.jsxs)("button",{title:o(j?F||(F=(0,a.Z)(["image-actions.save-to-lightbox"])):I||(I=(0,a.Z)(["image-actions.create-new-lightbox"]))),className:p()("self-center w-2/3 mx-3 text-sm text-left",c&&"font-noto"),onClick:E,children:[(0,k.jsx)("p",{className:"font-bold",children:o(M||(M=(0,a.Z)(["image-actions.save-to-lightbox"])))}),(0,k.jsx)("div",{className:"text-cyan",children:j?j.name:o(q||(q=(0,a.Z)(["image-actions.create-new-lightbox"])))})]}),(0,k.jsx)("button",{title:o(K||(K=(0,a.Z)(["image-actions.more-options"]))),className:"self-center float-right border-l",onClick:C,children:(0,k.jsx)(u.G,{className:"mx-6 mt-2 text-2xl font-bold text-grey-deep",icon:s.gc2})}),(0,k.jsx)(m.Eh,H(H({},U),{},{borderColor:"rgba(27, 31, 35, 0.15)",borderWidth:1}))]}))}}))]})),(0,k.jsx)($,{product:t,show:P,onHide:function(){return N(!1)}})]})}},64114:function(e,t,r){r.d(t,{hJ:function(){return re},oB:function(){return b.oB}});var n=r(61565),i=r(86818),o=r(83109),c=r(94184),a=r.n(c),l=r(39066),s=r.n(l),u=r(45578),d=r.n(u),p=r(67294),h=r(17124),f=r(87302),m=r(23828),x=r(84541),b=r(25053),g=r(63181),v=r(42884),y=(r(66337),r(70131)),j=r(45922),w=r(85893),O=function(e){var t=e.mergeProducts,r=e.getImages,n=e.limit,i=e.productsLength,o=(0,p.useState)(2),c=o[0],a=o[1],l=(0,y.YD)({threshold:0}),s=l.ref,u=l.inView;return(0,p.useEffect)((function(){!function(e){var t=e.inView,r=e.limit,n=e.productsLength,i=e.pn,o=e.getImages,c=e.mergeProducts,a=e.setPn;t&&r>n&&o({pn:i,ps:h.sk}).then((function(e){e&&(c(e),a((function(e){return e+1})))})).catch(j.S3)}({inView:u,limit:n,productsLength:i,pn:c,getImages:r,mergeProducts:t,setPn:a})}),[u]),(0,w.jsx)("div",{ref:s})},P=r(52209),N=r(30266),k=r(809),S=r.n(k),D=r(2825),Z=r(41664),L=r(2031),T=r(72679),C=r(69245),E=r(25646),R=r(63142),z=r(58268),_=r(28941),V=r(64650),F=r(92809),I=r(91164),M=r(67814),q=["title","icon","onClick","className"];function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){(0,F.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B,U,H,A,W,G=(0,p.forwardRef)((function(e,t){var r=e.title,n=e.icon,i=e.onClick,o=e.className,c=(0,I.Z)(e,q);return(0,w.jsx)("button",$($({className:a()("px-3 py-2 text-base text-white bg-black border border-white hover:bg-white hover:text-black bg-opacity-60 rounded-md transition-colors duration-200 border-opacity-20",o),title:r,onClick:i,ref:t},c),{},{children:(0,w.jsx)(M.G,{icon:n})}),r)})),J=function(e){var t=e.product,r=e.rendition,i=void 0===r?"zoom_large":r,c=e.style,l=e.galleryType,s=e.isLazy,u=void 0===s||s,d=(0,L.$)(),h=(0,n.Z)(d,1)[0],f=t.altids.seq,x=(0,E.j)().addToCart,g=(0,C.b)().canPurchase,v=t.altids,y=t.uri,j=t.renditions,O=t.headline,k=j[i],F=(0,p.useRef)(null),I=k.height>k.width,M=function(){var e=(0,N.Z)(S().mark((function e(){return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,R.t3)(l,"cart"),e.abrupt("return",x({seq:f,type:o.AddToCartType.Unlicensed}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=(0,m.D)();return(0,w.jsxs)("div",{style:c,className:"absolute group",ref:F,children:[u&&!q?(0,w.jsx)(T.LazyLoadImage,{loading:"lazy",src:k.href,alt:O,height:k.height,className:"absolute object-cover w-full h-full bg-grey-light"}):(0,w.jsx)("img",{src:k.href,alt:O,height:k.height,className:"absolute object-cover w-full h-full bg-grey-light"}),(0,w.jsx)(Z.default,{href:(0,z.lw)(y),children:(0,w.jsx)("a",{className:"absolute top-0 left-0 w-full h-full  bg-black opacity-0 group-hover:opacity-100 bg-opacity-20 duration-200",title:O,onClick:function(){l===b.oB.SimilarImages&&(0,R.Wf)(R.aU.SimilarPhotosClick,R.D_.ViewIndividualPhoto)}})}),(0,w.jsx)("div",{className:"absolute top-0 left-0 w-full px-4 py-2 text-sm text-white opacity-0 group-hover:opacity-100",children:(0,w.jsxs)("div",{className:"overflow-hidden overflow-ellipsis whitespace-nowrap text-shadow space-x-1",children:[(0,w.jsx)(V.A,{product:t}),t.meta.picturetype===o.PictureType.ThreeSixty&&(0,w.jsx)("strong",{children:"360\xb0"}),(0,w.jsx)("strong",{children:v.ref}),(0,w.jsx)("span",{className:"select-none",children:"\u2013"}),(0,w.jsx)("span",{children:O})]})}),(0,w.jsxs)("div",{className:a()("absolute flex right-4 bottom-4 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-200",I?"flex-col space-y-2":"flex-row space-x-2"),children:[g&&(0,w.jsx)(G,{title:h(B||(B=(0,P.Z)(["search-tile.add-to-cart"]))),icon:D.sq$,onClick:M}),(0,w.jsx)(_.z,{product:t,containerRef:F,containerType:l,children:(0,w.jsx)(G,{title:h(U||(U=(0,P.Z)(["search-tile.save-to-lightbox"]))),icon:D.KtF})})]})]})},X=r(42586),Y=r(59184),Q=function(e){var t,r,n,i,o,c,a=e.video,l=e.rendition,s=e.thumbnailKey;return(0,w.jsxs)("div",{itemScope:!0,itemProp:"video",itemType:"http://schema.org/VideoObject",children:[(0,w.jsx)("meta",{itemProp:"url",content:a.uri}),(0,w.jsx)("meta",{itemProp:"name",content:a.headline}),(0,w.jsx)("meta",{itemProp:"license",content:X.Pk.en}),(0,w.jsx)("meta",{itemProp:"acquireLicensePage",content:a.uri}),(0,w.jsx)("meta",{itemProp:"thumbnailUrl",content:null===(t=a.renditions[s||l||"comp"])||void 0===t?void 0:t.href}),(0,w.jsx)("meta",{itemProp:"uploadDate",content:a.uploaddate}),(0,w.jsx)("meta",{itemProp:"description",content:a.description_text}),(null===(r=a.meta)||void 0===r?void 0:r.datedeleteexpiry)&&(0,w.jsx)("meta",{itemProp:"expires",content:null===(n=a.meta)||void 0===n?void 0:n.datedeleteexpiry}),(0,w.jsx)("meta",{itemProp:"contentUrl",content:null===(i=a.renditions.sample_video)||void 0===i?void 0:i.href}),(null===(o=a.renditions.sample_video)||void 0===o?void 0:o.duration)&&(0,w.jsx)("meta",{itemProp:"duration",content:(0,Y.ap)((null===(c=a.renditions.sample_video)||void 0===c?void 0:c.duration)||0)})]})},ee=function(e){var t,r=e.product,n=e.rendition,i=void 0===n?"zoom_large":n,o=e.style,c=e.galleryType,l=e.hasStructuredDataMarkup,s=void 0!==l&&l,u=e.isStockPages,d=e.thumbnailKey,h=(0,p.useRef)(null),f=(0,L.$)().t,x=(0,C.b)().canPurchase,b=(0,m.D)(),g=r.altids,v=r.uri,y=r.renditions,j=r.headline,O=y[i],N=(0,p.useRef)(null),k=O.height>O.width,S=b?y.comp:y["450v"],T=u?a()("absolute top-0 left-0 w-full px-3 py-2 text-sm text-white",{"opacity-1":b,"opacity-0 group-hover:opacity-100":!b}):"absolute top-0 left-0 w-full px-3 py-2 text-sm text-white opacity-0 group-hover:opacity-100",E=u?a()("absolute flex right-12 bottom-4 transform translate-y-2",k?"flex-col space-y-2":"flex-row space-x-2",{"opacity-1":b,"opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-200":!b}):a()("absolute flex right-12 bottom-4 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-200",k?"flex-col space-y-2":"flex-row space-x-2");return(0,w.jsxs)("div",{style:o,className:"absolute group",ref:N,children:[(0,w.jsx)("video",{muted:!0,ref:h,playsInline:!0,width:null===S||void 0===S?void 0:S.width,poster:null===S||void 0===S?void 0:S.href,height:null===S||void 0===S?void 0:S.height,className:"object-contain w-full h-full",preload:"none",children:(0,w.jsx)("source",{src:null===(t=y.sample_video)||void 0===t?void 0:t.href,type:"video/mp4"})}),(0,w.jsx)(Z.default,{href:(0,z.lw)(v),children:(0,w.jsx)("a",{className:"absolute top-0 left-0 w-full h-full  bg-black opacity-0 bg-opacity-20 duration-200",title:j,onMouseEnter:function(){h.current&&h.current.play()},onMouseLeave:function(){h.current&&h.current.pause()}})}),(0,w.jsx)("div",{className:T,children:(0,w.jsxs)("div",{className:"mx-6 mt-8 overflow-hidden overflow-ellipsis whitespace-nowrap text-shadow space-x-1 mb-2.5",children:[(0,w.jsx)("strong",{children:g.ref}),(0,w.jsx)("span",{className:"select-none",children:"\u2013"}),(0,w.jsx)("span",{children:j})]})}),(0,w.jsxs)("div",{className:E,children:[u&&(0,w.jsx)(G,{title:f(H||(H=(0,P.Z)(["search-tile.download"]))),icon:D.q7m,className:"mb-1.5"}),x&&(0,w.jsx)(G,{title:f(A||(A=(0,P.Z)(["search-tile.add-to-cart"]))),icon:D.sq$,className:u?"mb-1.5":""}),(0,w.jsx)(_.z,{product:r,containerRef:N,containerType:c,children:(0,w.jsx)(G,{title:f(W||(W=(0,P.Z)(["search-tile.save-to-lightbox"]))),icon:D.KtF,className:u?"mb-1.5":""})})]}),s&&(0,w.jsx)(Q,{video:r,thumbnailKey:d})]})},te={comp:90,"450v":20,zoom:20,zoom_large:20,thumb:0,sample_video:0,sample_image:0},re=function(e){var t=e.products,r=e.useComp,c=e.type,l=e.enableInfiniteScroll,u=e.getImages,y=e.limit,j=void 0===y?h.sk:y,P=e.filterWidth,N=void 0===P?0:P,k=e.wrapperClassName,S=e.isLimitForVideo,D=void 0===S||S,Z=e.typeOfStructuredData,L=void 0===Z?b.gP.Script:Z,T=e.isStockPages,C=e.thumbnailKey,E=(0,p.useState)(t),R=E[0],z=E[1],_=(0,x.b)(),V=(0,m.D)();(0,p.useEffect)((function(){z(t)}),[t]);R.map((function(e){return R.length>12&&e.type===o.ProductType.Video&&D?R=R.slice(0,12):R}));var F="zoom_large";V&&(F=r?"comp":"450v");var I=(0,f.Z)({width:320}),M=(0,n.Z)(I,2),q=M[0],K=M[1],$=s()(R.map((function(e){var t=e.renditions[F];return{width:t.width,height:t.height-te[F]}})),{containerWidth:K.width?K.width-N:K.width,targetRowHeight:300,targetRowHeightTolerance:.1,containerPadding:0}),B=L===b.gP.Markup;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{ref:q,className:a()("relative",k),style:{height:$.containerHeight},children:R.map((function(e,t){var r=$.boxes[t],n=r.width,i=r.height,a=r.top,l=r.left;return(0,w.jsxs)(p.Fragment,{children:[e.type===o.ProductType.Video?(0,w.jsx)(ee,{product:e,rendition:F,style:{width:n+16,height:i+20,top:a,left:l-20},galleryType:c,hasStructuredDataMarkup:B,isStockPages:T,thumbnailKey:C}):(0,w.jsx)(J,{product:e,rendition:F,style:{width:n,height:i,top:a,left:l},galleryType:c}),L===b.gP.Script&&(e.type===o.ProductType.Video?(0,w.jsx)(v.y,{rendition:F,thumbnailKey:C,video:e},e.altids.ref):(0,w.jsx)(g.v,{rendition:F,product:e,locale:_},e.altids.ref))]},e.altids.ref)}))}),!V&&l&&u&&(0,w.jsx)(O,{mergeProducts:function(e){return function(e){var t=e.products,r=e.items,n=e.setProducts,o=e.limit;n(d()([].concat((0,i.Z)(t),(0,i.Z)(r)),"altids.ref").slice(0,o))}({products:R,items:e,setProducts:z,limit:j})},getImages:u,limit:j,productsLength:R.length})]})}},64650:function(e,t,r){r.d(t,{A:function(){return u}});var n,i=r(92809),o=r(83109),c=r(94184),a=r.n(c),l=r(85893),s=(n={},(0,i.Z)(n,o.LicenceType.RM,{abbr:"RM",title:"Rights managed"}),(0,i.Z)(n,o.LicenceType.RF,{abbr:"RF",title:"Royalty free"}),n),u=function(e){var t=e.product.meta.licencetype===o.LicenceType.RF?s[o.LicenceType.RF]:s[o.LicenceType.RM],r=t.abbr,n=t.title;return(0,l.jsx)("abbr",{className:a()("select-none inline-flex items-center justify-center w-6 h-6 font-bold no-underline uppercase rounded-sm text-white bg-grey-deep text-2xs"),title:n,children:r})}},63181:function(e,t,r){r.d(t,{v:function(){return u}});var n=r(92809),i=r(9008),o=r(45363),c=r(42586),a=r(85893);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){var t=e.product,r=e.locale,n=e.rendition,l=void 0===n?"comp":n,u="subject"in t?t.subject:[],d="person"in t?t.person:[],p=u.filter((function(e){return"keyword"===e.profile})).map((function(e){return e.name}));return(0,a.jsxs)(i.default,{children:[(0,a.jsx)("script",s({},(0,o.h6)({"@context":"https://schema.org","@type":"ImageObject",name:t.headline,image:t.renditions[l].href,contentUrl:t.renditions[l].href,license:c.Pk[r],acquireLicensePage:t.uri,description:t.headline,keywords:p.sort((function(e,t){return e.localeCompare(t)})),creditText:"Alamy Stock Photo"}))),d.map((function(e){var t=e.name;return(0,a.jsx)("script",s({},(0,o.h6)({"@context":"https://schema.org","@type":"Person",name:t})),t)}))]})}},47599:function(e,t,r){r.d(t,{l:function(){return d}});var n=r(61565),i=r(94184),o=r.n(i),c=r(9008),a=r(23828),l=r(15564),s=r(85893),u=function(e){var t=e.url,r=e.alt,i=e.className,u=e.thumbSize,d=(0,n.Z)(e.naturalSize,2),p=d[0],h=d[1],f=e.bannerSize,m=void 0===f?l.GM:f,x=(0,l.jm)(p,h,u),b=(0,n.Z)(x,2),g=b[0],v=b[1],y=o()("object-contain overflow-hidden w-full h-full",i);return(0,a.D)()?(0,s.jsx)("div",{className:o()(y,i),children:(0,s.jsx)("img",{src:t,className:"object-contain w-full h-full",alt:r,width:p,height:h})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.default,{children:(0,s.jsx)("link",{rel:"preload",as:"image",href:t})}),(0,s.jsxs)("svg",{viewBox:"0 0 ".concat(g," ").concat(v),className:y,"aria-label":r,children:[(0,s.jsxs)("defs",{children:[(0,s.jsx)("rect",{id:"rect",x:"0",y:"0",width:g,height:v,fill:"black"}),(0,s.jsx)("clipPath",{id:"clip",children:(0,s.jsx)("use",{xlinkHref:"#rect"})})]}),(0,s.jsx)("image",{href:t,clipPath:"url(#clip)",width:g,height:v+m})]})]})},d=function(e){var t=e.product,r=e.className,n=e.bannerSize,i=e.thumbSize,o=t.renditions.comp;return(0,s.jsx)(u,{alt:t.meta.mediatitle,url:o.href,naturalSize:[o.width,o.height],className:r,bannerSize:n,thumbSize:i})}},42884:function(e,t,r){r.d(t,{y:function(){return d}});var n=r(92809),i=r(9008),o=r(45363),c=r(42586),a=r(59184),l=r(85893);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t,r,n,s,d=e.video,p=e.rendition,h=e.thumbnailKey,f="subject"in d?d.subject:[],m="person"in d?d.person:[],x=f.filter((function(e){return"keyword"===e.profile})).map((function(e){return e.name}));return(0,l.jsxs)(i.default,{children:[(0,l.jsx)("script",u({},(0,o.h6)({"@context":"https://schema.org","@type":"VideoObject",description:d.headline,name:d.headline,thumbnailUrl:null===(t=d.renditions[h||p||"comp"])||void 0===t?void 0:t.href,uploadDate:d.uploaddate,contentUrl:null===(r=d.renditions.sample_video)||void 0===r?void 0:r.href,duration:(0,a.ap)((null===(n=d.renditions.sample_video)||void 0===n?void 0:n.duration)||0),url:d.uri,keywords:x.sort((function(e,t){return e.localeCompare(t)})),license:c.Pk.en,acquireLicensePage:d.uri,expires:null===(s=d.meta)||void 0===s?void 0:s.datedeleteexpiry}))),m.map((function(e){var t=e.name;return(0,l.jsx)("script",u({},(0,o.h6)({"@context":"https://schema.org","@type":"Person",name:t})),t)}))]})}},69245:function(e,t,r){r.d(t,{b:function(){return i}});var n=r(86799),i=function(){var e=(0,n.a)();return{isSilo:Boolean((null===e||void 0===e?void 0:e.silo)&&e.silo>1),canPurchase:!e||e.canPurchase,canViewLicences:!e||e.canViewLicences}}},87302:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(67294),i=r(66791),o=function(e){var t=(0,n.useRef)(null),r=(0,n.useState)(e),o=r[0],c=r[1],a=function(){var e,r=null===(e=t.current)||void 0===e?void 0:e.getBoundingClientRect();r&&r.width>0&&c(r)};return(0,n.useEffect)((function(){a()}),[]),(0,i.Z)("resize",a),[t,o]}},15564:function(e,t,r){r.d(t,{GM:function(){return n},jm:function(){return i}});var n=90,i=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1300,n=e>t,i=n?e:t,o=n?t:e,c=o*r/i;return n?[r,c]:[c,r]}}}]);