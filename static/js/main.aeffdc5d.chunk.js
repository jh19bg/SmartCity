(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{28:function(e,a,t){e.exports=t(67)},38:function(e,a,t){e.exports=t.p+"static/media/logo.2810a88b.svg"},57:function(e,a,t){e.exports=t.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},58:function(e,a,t){e.exports=t.p+"static/media/feature-tile-icon-02.bd39f304.svg"},59:function(e,a,t){e.exports=t.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},60:function(e,a,t){e.exports=t.p+"static/media/feature-tile-icon-04.836acd10.svg"},61:function(e,a,t){e.exports=t.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},62:function(e,a,t){e.exports=t.p+"static/media/feature-tile-icon-06.6a177696.svg"},63:function(e,a,t){e.exports=t.p+"static/media/features-split-image-01.d9cb99ce.png"},64:function(e,a,t){e.exports=t.p+"static/media/features-split-image-02.3c569239.png"},65:function(e,a,t){e.exports=t.p+"static/media/features-split-image-03.87e4d053.png"},66:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var l=t(0),i=t.n(l),r=t(25),n=t.n(r),s=t(4),o=t(8),c=t(13),m=t(2),b=function(e){var a=e.component,t=e.layout,l=Object(m.a)(e,["component","layout"]);return t=void 0===t?function(e){return i.a.createElement(i.a.Fragment,null,e.children)}:t,i.a.createElement(s.a,Object.assign({},l,{render:function(e){return i.a.createElement(t,null,i.a.createElement(a,e))}}))},h=t(12),d=t(3),v=t.n(d),u=t(18),p=i.a.forwardRef((function(e,a){var t=Object(l.useState)(window.innerHeight),r=Object(h.a)(t,2),n=r[0],s=r[1],o=Object(l.useState)([]),c=Object(h.a)(o,2),m=c[0],b=c[1],d=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},v=function(){if(!d())for(var e=function(e){var a=m[e],t=a.getAttribute("data-reveal-delay"),l=a.getAttribute("data-reveal-offset")?a.getAttribute("data-reveal-offset"):"200";(function(e,a){return e.getBoundingClientRect().top<=n-a})(a.getAttribute("data-reveal-container")?a.closest(a.getAttribute("data-reveal-container")):a,l)&&!a.classList.contains("is-revealed")&&(t&&0!==t?setTimeout((function(){a.classList.add("is-revealed")}),t):a.classList.add("is-revealed"))},a=0;a<m.length;a++)e(a)};Object(l.useImperativeHandle)(a,(function(){return{init:function(){b(document.querySelectorAll("[class*=reveal-]"))}}})),Object(l.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(d()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),v())}),[m]);var p=function(){d()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(u.throttle)((function(){p(),v()}),30),E=Object(u.throttle)((function(){s(window.innerHeight)}),30);return Object(l.useEffect)((function(){p(),v()}),[n]),i.a.createElement(i.a.Fragment,null,e.children())}));p.propTypes={children:v.a.func.isRequired};var f=p,E=t(15),N=t(1),g=t.n(N),O=function(e){var a=e.className,t=e.src,r=e.width,n=e.height,s=e.alt,o=Object(m.a)(e,["className","src","width","height","alt"]),c=Object(l.useState)(!1),b=Object(h.a)(c,2),d=b[0],v=b[1],u=Object(l.useRef)(null);Object(l.useEffect)((function(){p(u.current)}),[]);var p=function(e){var a,t,l=document.createElement("img");d||(e.style.display="none",e.before(l),l.src=(a=e.getAttribute("width")||0,t=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(a," ").concat(t,'"%3E%3C/svg%3E')),l.width=e.getAttribute("width"),l.height=e.getAttribute("height"),l.style.opacity="0",e.className&&l.classList.add(e.className),l.remove(),e.style.display="")};return i.a.createElement("img",Object.assign({},o,{ref:u,className:a,src:t,width:r,height:n,alt:s,onLoad:function(){v(!0)}}))};O.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var D=O,w=function(e){var a=e.className,t=(e.navPosition,e.hideNav,e.hideSignin,e.bottomOuterDivider),r=(e.bottomDivider,Object(m.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"])),n=Object(l.useState)(!1),s=Object(h.a)(n,2),o=s[0],c=s[1],b=Object(l.useRef)(null),d=Object(l.useRef)(null);Object(l.useEffect)((function(){return o&&v(),document.addEventListener("keydown",p),document.addEventListener("click",f),function(){document.removeEventListener("keydown",p),document.removeEventListener("click",f),u()}}));var v=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",c(!0)},u=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),c(!1)},p=function(e){o&&27===e.keyCode&&u()},f=function(e){b.current&&o&&!b.current.contains(e.target)&&e.target!==d.current&&u()},E=g()("site-header",t&&"has-bottom-divider",a);return i.a.createElement("header",Object.assign({},r,{className:E}),i.a.createElement("div",{className:"container"}))};w.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var x=w,j=function(e){var a=e.className,t=Object(m.a)(e,["className"]),l=g()("footer-nav",a);return i.a.createElement("nav",Object.assign({},t,{className:l}))},y=function(e){var a=e.className,t=e.topOuterDivider,l=e.topDivider,r=Object(m.a)(e,["className","topOuterDivider","topDivider"]),n=g()("site-footer center-content-mobile",t&&"has-top-divider",a);return i.a.createElement("footer",Object.assign({},r,{className:n}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:g()("site-footer-inner",l&&"has-top-divider")},i.a.createElement("div",{className:"footer-top space-between text-xxs"}),i.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},i.a.createElement(j,null),i.a.createElement("div",{className:"footer-copyright"},"Made by ",i.a.createElement("a",{href:"mailto:jh19bg@fsu.edu"},"Jon Hair"),". ")))))};y.defaultProps={topOuterDivider:!1,topDivider:!1};var C=y,k=function(e){Object.assign({},e);var a=Object(l.useState)(!0),t=Object(h.a)(a,2);t[0],t[1];return i.a.createElement(i.a.Fragment,null)},P=function(e){var a=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(x,{navPosition:"right",className:"reveal-from-bottom"}),i.a.createElement("main",{className:"site-content"},a),i.a.createElement(k,null),i.a.createElement(C,null))},L=t(5),B={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},S={types:Object(L.a)({},B.types),defaults:Object(L.a)({},B.defaults)},F={types:Object(L.a)({},B.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(L.a)({},B.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},H={types:Object(L.a)({},B.types,{pushLeft:v.a.bool}),defaults:Object(L.a)({},B.defaults,{pushLeft:!1})},A=function(e){var a=e.className,t=e.tag,l=e.color,r=e.size,n=e.loading,s=e.wide,o=e.wideMobile,c=e.disabled,b=Object(m.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),h=g()("button",l&&"button-".concat(l),r&&"button-".concat(r),n&&"is-loading",s&&"button-block",o&&"button-wide-mobile",a),d=t;return i.a.createElement(d,Object.assign({},b,{className:h,disabled:c}))};A.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var T=function(e){var a=e.className,t=e.children,r=e.handleClose,n=e.show,s=e.closeHidden,o=e.video,c=e.videoTag,b=Object(m.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(l.useEffect)((function(){return document.addEventListener("keydown",d),document.addEventListener("click",v),function(){document.removeEventListener("keydown",d),document.removeEventListener("click",v)}})),Object(l.useEffect)((function(){h()}),[b.show]);var h=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},d=function(e){27===e.keyCode&&r(e)},v=function(e){e.stopPropagation()},u=g()("modal",n&&"is-active",o&&"modal-video",a);return i.a.createElement(i.a.Fragment,null,n&&i.a.createElement("div",Object.assign({},b,{className:u,onClick:r}),i.a.createElement("div",{className:"modal-inner",onClick:v},o?i.a.createElement("div",{className:"responsive-video"},"iframe"===c?i.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):i.a.createElement("video",{"v-else":!0,controls:!0,src:o})):i.a.createElement(i.a.Fragment,null,!s&&i.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:r}),i.a.createElement("div",{className:"modal-content"},t)))))};T.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var R=t(27),I=t.n(R),_=function(e){var a=e.className,t=e.data,l=e.children,r=e.tag,n=Object(m.a)(e,["className","data","children","tag"]),s=g()("section-header",a),o=r;return i.a.createElement(i.a.Fragment,null,(t.title||t.paragraph)&&i.a.createElement("div",Object.assign({},n,{className:s}),i.a.createElement("div",{className:"container-xs"},l,t.title&&i.a.createElement(o,{className:g()("mt-0",t.paragraph?"mb-16":"mb-0")},t.title),t.paragraph&&i.a.createElement("p",{className:"m-0"},t.paragraph))))};_.defaultProps={children:null,tag:"h2"};var z=_,M=Object(L.a)({},S.defaults),W=function(e){var a=e.className,t=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,c=e.invertColor,b=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),d=Object(l.useState)(!1),v=Object(h.a)(d,2),u=(v[0],v[1],g()("hero section center-content",t&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",c&&"invert-color",a)),p=g()("hero-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider");return i.a.createElement("section",Object.assign({},b,{className:u}),i.a.createElement("div",{className:"container-sm"},i.a.createElement("div",{className:p},i.a.createElement("div",{className:"hero-content"},i.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Welcome to ",i.a.createElement("span",{className:"text-color-primary"},"Smart City")),i.a.createElement("div",{className:"container-xs"},i.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Smart city is a brand new blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah."))),i.a.createElement("center",null,i.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},i.a.createElement(I.a,{controls:!0,url:"https://youtu.be/bANfnYDTzxE"}))))))};W.defaultProps=M;var q=W,G=Object(L.a)({},H.defaults),J=function(e){var a=e.className,l=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,c=e.invertColor,b=e.pushLeft,h=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),d=g()("features-tiles section",l&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",c&&"invert-color",a),v=g()("features-tiles-inner section-inner pt-0",n&&"has-top-divider",s&&"has-bottom-divider"),u=g()("tiles-wrap center-content",b&&"push-left");return i.a.createElement("section",Object.assign({},h,{className:d}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:v},i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(z,{data:{title:"How it Works",paragraph:"Smart city works by blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah."},className:"center-content"}),i.a.createElement("div",{className:u},i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(D,{src:t(57),alt:"Features tile icon 01",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"1st Point"),i.a.createElement("p",{className:"m-0 text-sm"},"One example of how it works blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(D,{src:t(58),alt:"Features tile icon 02",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"2nd Point"),i.a.createElement("p",{className:"m-0 text-sm"},"Another example of how it works blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(D,{src:t(59),alt:"Features tile icon 03",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"3rd Point"),i.a.createElement("p",{className:"m-0 text-sm"},"Another example of how it works blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(D,{src:t(60),alt:"Features tile icon 04",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"4th Point"),i.a.createElement("p",{className:"m-0 text-sm"},"Another example of how it works blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(D,{src:t(61),alt:"Features tile icon 05",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"5th Point"),i.a.createElement("p",{className:"m-0 text-sm"},"Another example of how it works blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(D,{src:t(62),alt:"Features tile icon 06",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"6th Point"),i.a.createElement("p",{className:"m-0 text-sm"},"Another example of how it works blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah."))))))))};J.defaultProps=G;var K=J,U=Object(L.a)({},F.defaults),V=function(e){var a=e.className,l=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,c=e.invertColor,b=e.invertMobile,h=e.invertDesktop,d=e.alignTop,v=e.imageFill,u=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),p=g()("features-split section",l&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",c&&"invert-color",a),f=g()("features-split-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider"),E=g()("split-wrap",b&&"invert-mobile",h&&"invert-desktop",d&&"align-top");return i.a.createElement("section",Object.assign({},u,{className:p}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:f},i.a.createElement(z,{data:{title:"Existing and Potential Usage of Technology",paragraph:"Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah."},className:"center-content"}),i.a.createElement("div",{className:E},i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Illustrative Example"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Explanation 1"),i.a.createElement("p",{className:"m-0"},"Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.")),i.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",v&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(D,{src:t(63),alt:"Features split 01",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Illustrative Example"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Explanation 2"),i.a.createElement("p",{className:"m-0"},"Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.")),i.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",v&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(D,{src:t(64),alt:"Features split 02",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Illustrative Example"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Explanation 3"),i.a.createElement("p",{className:"m-0"},"Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.")),i.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",v&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(D,{src:t(65),alt:"Features split 03",width:528,height:396})))))))};V.defaultProps=U;var Y=V,$=Object(L.a)({},H.defaults),Q=function(e){var a=e.className,t=e.topOuterDivider,l=e.bottomOuterDivider,r=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,c=e.pushLeft,b=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),h=g()("testimonial section",t&&"has-top-divider",l&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",a),d=g()("testimonial-inner section-inner",r&&"has-top-divider",n&&"has-bottom-divider"),v=g()("tiles-wrap",c&&"push-left");return i.a.createElement("section",Object.assign({},b,{className:h}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:d},i.a.createElement(z,{data:{title:"Impacts on Business/Process/Industry",paragraph:"Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah."},className:"center-content"}),i.a.createElement("div",{className:v}))))};Q.defaultProps=$;var X=Q,Z=function(e){var a=e.className,t=e.children,l=e.labelHidden,r=e.id,n=Object(m.a)(e,["className","children","labelHidden","id"]),s=g()("form-label",l&&"screen-reader",a);return i.a.createElement("label",Object.assign({},n,{className:s,htmlFor:r}),t)};Z.defaultProps={children:null,labelHidden:!1,id:null};var ee=Z,ae=function(e){var a=e.children,t=e.className,l=e.status,r=Object(m.a)(e,["children","className","status"]),n=g()("form-hint",l&&"text-color-".concat(l),t);return i.a.createElement("div",Object.assign({},r,{className:n}),a)};ae.defaultProps={children:null,status:!1};var te=ae,le=function(e){var a=e.className,t=e.children,l=e.label,r=e.labelHidden,n=e.type,s=e.name,o=e.status,c=e.disabled,b=e.value,h=e.formGroup,d=e.hasIcon,v=e.size,u=e.placeholder,p=e.rows,f=e.hint,E=Object(m.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=g()(h&&""!==h&&("desktop"===h?"form-group-desktop":"form-group"),d&&""!==d&&"has-icon-"+d),O=g()("form-input",v&&"form-input-".concat(v),o&&"form-".concat(o),a),D="textarea"===n?"textarea":"input";return i.a.createElement(i.a.Fragment,null,l&&i.a.createElement(ee,{labelHidden:r,id:E.id},l),i.a.createElement("div",{className:N},i.a.createElement(D,Object.assign({},E,{type:"textarea"!==n?n:null,className:O,name:s,disabled:c,value:b,placeholder:u,rows:"textarea"===n?p:null})),t),f&&i.a.createElement(te,{status:o},f))};le.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var ie=Object(L.a)({},S.defaults,{split:!1}),re=function(e){var a=e.className,t=e.topOuterDivider,l=e.bottomOuterDivider,r=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,c=e.split,b=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),h=g()("cta section center-content-mobile reveal-from-bottom",t&&"has-top-divider",r&&"has-top-divider",l&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",a);g()("cta-inner section-inner",r&&"has-top-divider",n&&"has-bottom-divider",c&&"cta-split");return i.a.createElement("section",Object.assign({},b,{className:h}),i.a.createElement("center",null,i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("h2",null,"References")),i.a.createElement("p",null,"- Reference goes here"),i.a.createElement("p",null,"- Reference goes here"),i.a.createElement("p",null,"- Reference goes here")))};re.defaultProps=ie;var ne=re,se=Object(L.a)({},S.defaults,{split:!1}),oe=function(e){var a=e.className,t=e.topOuterDivider,l=e.bottomOuterDivider,r=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,c=e.split,b=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),h=g()("cta section center-content-mobile reveal-from-bottom",t&&"has-top-divider",r&&"has-top-divider",l&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",a);g()("cta-inner section-inner",r&&"has-top-divider",n&&"has-bottom-divider",c&&"cta-split");return i.a.createElement("section",Object.assign({},b,{className:h}),i.a.createElement("center",null,i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("h2",null,"Case Studies")),i.a.createElement("p",null,"- Link to PDF Here -")),i.a.createElement("br",null))};oe.defaultProps=se;var ce=oe,me=Object(L.a)({},H.defaults),be=function(e){var a=e.className,t=e.topOuterDivider,l=e.bottomOuterDivider,r=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,c=e.pushLeft,b=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),h=g()("testimonial section",t&&"has-top-divider",l&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",a),d=g()("testimonial-inner section-inner",r&&"has-top-divider",n&&"has-bottom-divider"),v=g()("tiles-wrap",c&&"push-left");return i.a.createElement("section",Object.assign({},b,{className:h}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:d},i.a.createElement(z,{data:{title:"Legal/Ethical Issues",paragraph:"Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah."},className:"center-content"}),i.a.createElement("div",{className:v},i.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.")),i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Text Down Here"),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"},"Extra Stuff"))))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.")),i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Text Down Here"),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"},"Extra Stuff"))))),i.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.")),i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Text Down Here"),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"},"Extra Stuff")))))))))};be.defaultProps=me;var he=be,de=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(q,{className:"illustration-section-01"}),i.a.createElement(K,{topDivider:!0}),i.a.createElement(Y,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),i.a.createElement(X,{topDivider:!0}),i.a.createElement(he,{topDivider:!0}),i.a.createElement(ce,{topDivider:!0}),i.a.createElement(ne,{topDivider:!0}))};E.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/SmartCity",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var ve=function(){var e=Object(l.useRef)(),a=Object(s.f)();return Object(l.useEffect)((function(){var t=a.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){E.a.set({page:e}),E.a.pageview(e)}(t)}),[a]),i.a.createElement(c.a,null,i.a.createElement(f,{ref:e,children:function(){return i.a.createElement(s.c,null,i.a.createElement(b,{exact:!0,path:"/SmartCity",component:de,layout:P}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(66);var ue=Object(o.a)();n.a.render(i.a.createElement(s.b,{history:ue},i.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.aeffdc5d.chunk.js.map