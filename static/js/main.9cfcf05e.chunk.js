(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{28:function(e,t,a){e.exports=a(67)},38:function(e,t,a){e.exports=a.p+"static/media/logo.2810a88b.svg"},57:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},58:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},59:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},60:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},61:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},62:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},63:function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.78f971cb.png"},64:function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.12710b70.png"},65:function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.943f7539.png"},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var l=a(0),i=a.n(l),r=a(25),n=a.n(r),s=a(13),o=a(8),c=a(4),m=a(2),d=function(e){var t=e.component,a=e.layout,l=Object(m.a)(e,["component","layout"]);return a=void 0===a?function(e){return i.a.createElement(i.a.Fragment,null,e.children)}:a,i.a.createElement(c.a,Object.assign({},l,{render:function(e){return i.a.createElement(a,null,i.a.createElement(t,e))}}))},h=a(12),b=a(3),u=a.n(b),v=a(18),p=i.a.forwardRef((function(e,t){var a=Object(l.useState)(window.innerHeight),r=Object(h.a)(a,2),n=r[0],s=r[1],o=Object(l.useState)([]),c=Object(h.a)(o,2),m=c[0],d=c[1],b=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},u=function(){if(!b())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),l=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=n-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,l)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(l.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(l.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(b()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),u())}),[m]);var p=function(){b()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(v.throttle)((function(){p(),u()}),30),E=Object(v.throttle)((function(){s(window.innerHeight)}),30);return Object(l.useEffect)((function(){p(),u()}),[n]),i.a.createElement(i.a.Fragment,null,e.children())}));p.propTypes={children:u.a.func.isRequired};var f=p,E=a(15),g=a(1),N=a.n(g),w=function(e){var t=e.className,a=e.src,r=e.width,n=e.height,s=e.alt,o=Object(m.a)(e,["className","src","width","height","alt"]),c=Object(l.useState)(!1),d=Object(h.a)(c,2),b=d[0],u=d[1],v=Object(l.useRef)(null);Object(l.useEffect)((function(){p(v.current)}),[]);var p=function(e){var t,a,l=document.createElement("img");b||(e.style.display="none",e.before(l),l.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),l.width=e.getAttribute("width"),l.height=e.getAttribute("height"),l.style.opacity="0",e.className&&l.classList.add(e.className),l.remove(),e.style.display="")};return i.a.createElement("img",Object.assign({},o,{ref:v,className:t,src:a,width:r,height:n,alt:s,onLoad:function(){u(!0)}}))};w.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var O=w,y=function(e){var t=e.className,a=(e.navPosition,e.hideNav,e.hideSignin,e.bottomOuterDivider),r=(e.bottomDivider,Object(m.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"])),n=Object(l.useState)(!1),s=Object(h.a)(n,2),o=s[0],c=s[1],d=Object(l.useRef)(null),b=Object(l.useRef)(null);Object(l.useEffect)((function(){return o&&u(),document.addEventListener("keydown",p),document.addEventListener("click",f),function(){document.removeEventListener("keydown",p),document.removeEventListener("click",f),v()}}));var u=function(){document.body.classList.add("off-nav-is-active"),d.current.style.maxHeight=d.current.scrollHeight+"px",c(!0)},v=function(){document.body.classList.remove("off-nav-is-active"),d.current&&(d.current.style.maxHeight=null),c(!1)},p=function(e){o&&27===e.keyCode&&v()},f=function(e){d.current&&o&&!d.current.contains(e.target)&&e.target!==b.current&&v()},E=N()("site-header",a&&"has-bottom-divider",t);return i.a.createElement("header",Object.assign({},r,{className:E}),i.a.createElement("div",{className:"container"}))};y.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var D=y,j=function(e){var t=e.className,a=Object(m.a)(e,["className"]),l=N()("footer-nav",t);return i.a.createElement("nav",Object.assign({},a,{className:l}))},x=function(e){var t=e.className,a=e.topOuterDivider,l=e.topDivider,r=Object(m.a)(e,["className","topOuterDivider","topDivider"]),n=N()("site-footer center-content-mobile",a&&"has-top-divider",t);return i.a.createElement("footer",Object.assign({},r,{className:n}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:N()("site-footer-inner",l&&"has-top-divider")},i.a.createElement("div",{className:"footer-top space-between text-xxs"}),i.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},i.a.createElement(j,null),i.a.createElement("div",{className:"footer-copyright"},"Design and content: ",i.a.createElement("a",{href:"mailto:jh19bg@fsu.edu"},"Jon Hair")," | ",i.a.createElement("a",{href:"mailto:kag22f@fsu.edu"},"Kyle Gray")," | ",i.a.createElement("a",{href:"mailto:krw20bl@fsu.edu"},"Kate Wadlinger")," ")))))};x.defaultProps={topOuterDivider:!1,topDivider:!1};var k=x,C=function(e){Object.assign({},e);var t=Object(l.useState)(!0),a=Object(h.a)(t,2);a[0],a[1];return i.a.createElement(i.a.Fragment,null)},P=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(D,{navPosition:"right",className:"reveal-from-bottom"}),i.a.createElement("main",{className:"site-content"},t),i.a.createElement(C,null),i.a.createElement(k,null))},S=a(5),L={types:{topOuterDivider:u.a.bool,bottomOuterDivider:u.a.bool,topDivider:u.a.bool,bottomDivider:u.a.bool,hasBgColor:u.a.bool,invertColor:u.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},A={types:Object(S.a)({},L.types),defaults:Object(S.a)({},L.defaults)},F={types:Object(S.a)({},L.types,{invertMobile:u.a.bool,invertDesktop:u.a.bool,alignTop:u.a.bool,imageFill:u.a.bool}),defaults:Object(S.a)({},L.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},B={types:Object(S.a)({},L.types,{pushLeft:u.a.bool}),defaults:Object(S.a)({},L.defaults,{pushLeft:!1})},T=function(e){var t=e.className,a=e.tag,l=e.color,r=e.size,n=e.loading,s=e.wide,o=e.wideMobile,c=e.disabled,d=Object(m.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),h=N()("button",l&&"button-".concat(l),r&&"button-".concat(r),n&&"is-loading",s&&"button-block",o&&"button-wide-mobile",t),b=a;return i.a.createElement(b,Object.assign({},d,{className:h,disabled:c}))};T.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var H=function(e){var t=e.className,a=e.children,r=e.handleClose,n=e.show,s=e.closeHidden,o=e.video,c=e.videoTag,d=Object(m.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(l.useEffect)((function(){return document.addEventListener("keydown",b),document.addEventListener("click",u),function(){document.removeEventListener("keydown",b),document.removeEventListener("click",u)}})),Object(l.useEffect)((function(){h()}),[d.show]);var h=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},b=function(e){27===e.keyCode&&r(e)},u=function(e){e.stopPropagation()},v=N()("modal",n&&"is-active",o&&"modal-video",t);return i.a.createElement(i.a.Fragment,null,n&&i.a.createElement("div",Object.assign({},d,{className:v,onClick:r}),i.a.createElement("div",{className:"modal-inner",onClick:u},o?i.a.createElement("div",{className:"responsive-video"},"iframe"===c?i.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):i.a.createElement("video",{"v-else":!0,controls:!0,src:o})):i.a.createElement(i.a.Fragment,null,!s&&i.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:r}),i.a.createElement("div",{className:"modal-content"},a)))))};H.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var _=a(27),I=a.n(_),M=function(e){var t=e.className,a=e.data,l=e.children,r=e.tag,n=Object(m.a)(e,["className","data","children","tag"]),s=N()("section-header",t),o=r;return i.a.createElement(i.a.Fragment,null,(a.title||a.paragraph)&&i.a.createElement("div",Object.assign({},n,{className:s}),i.a.createElement("div",{className:"container-xs"},l,a.title&&i.a.createElement(o,{className:N()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&i.a.createElement("p",{className:"m-0"},a.paragraph))))};M.defaultProps={children:null,tag:"h2"};var W=M,z=Object(S.a)({},A.defaults),R=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,c=e.invertColor,d=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),b=Object(l.useState)(!1),u=Object(h.a)(b,2),v=(u[0],u[1],N()("hero section center-content",a&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",c&&"invert-color",t)),p=N()("hero-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider");return i.a.createElement("section",Object.assign({},d,{className:v}),i.a.createElement("div",{className:"container-sm"},i.a.createElement("div",{className:p},i.a.createElement("div",{className:"hero-content"},i.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Welcome to ",i.a.createElement("span",{className:"text-color-primary"},"Smart City")),i.a.createElement("div",{className:"container-xs-jon"},i.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("br",null),i.a.createElement("br",null),'"Smart cities put data and digital technology to work to make better decisions and improve the quality of life". -McKinsey Consulting Firm'),i.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("p",null,"Smart cities are cities that leverage technology to improve existing infrastructure (buildings, roads, power grids). Smart cities bring many benefits, including, but not limited to:"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("li",null," Public Safety (safer roads, policing crime more effectively)"),i.a.createElement("li",null," Public Health (reduction of chronic disease, pandemic management)"),i.a.createElement("li",null," Environment (air quality, energy/water use optimization)"),i.a.createElement("li",null," Connectedness (between people, neighborhoods and with local government)"),i.a.createElement("li",null," Cost of Living (micro transit, utility cost)"),i.a.createElement("li",null," Employment (smart cities will create related employment, gig economies)"))),i.a.createElement("br",null),i.a.createElement("br",null)),i.a.createElement("center",null,i.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Let's take a look at an awesome Smart City in action!")),i.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},i.a.createElement(I.a,{controls:!0,url:"https://youtu.be/E2MMwiXqlZg"}))))))};R.defaultProps=z;var K=R,q=Object(S.a)({},B.defaults),G=function(e){var t=e.className,l=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,c=e.invertColor,d=e.pushLeft,h=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),b=N()("features-tiles section",l&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",c&&"invert-color",t),u=N()("features-tiles-inner section-inner pt-0",n&&"has-top-divider",s&&"has-bottom-divider"),v=N()("tiles-wrap center-content",d&&"push-left");return i.a.createElement("section",Object.assign({},h,{className:b}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:u},i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(W,{data:{title:"How it Works",paragraph:"Smart city works by blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah."},className:"center-content"}),i.a.createElement("div",{className:v},i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:a(57),alt:"Features tile icon 01",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"1st Point"),i.a.createElement("p",{className:"m-0 text-sm"},"One example of how it works blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:a(58),alt:"Features tile icon 02",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"2nd Point"),i.a.createElement("p",{className:"m-0 text-sm"},"Another example of how it works blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:a(59),alt:"Features tile icon 03",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"3rd Point"),i.a.createElement("p",{className:"m-0 text-sm"},"Another example of how it works blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:a(60),alt:"Features tile icon 04",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"4th Point"),i.a.createElement("p",{className:"m-0 text-sm"},"Another example of how it works blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:a(61),alt:"Features tile icon 05",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"5th Point"),i.a.createElement("p",{className:"m-0 text-sm"},"Another example of how it works blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:a(62),alt:"Features tile icon 06",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"6th Point"),i.a.createElement("p",{className:"m-0 text-sm"},"Another example of how it works blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah."))))))))};G.defaultProps=q;var J=G,V=Object(S.a)({},F.defaults),Y=function(e){var t=e.className,l=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,c=e.invertColor,d=e.invertMobile,h=e.invertDesktop,b=e.alignTop,u=e.imageFill,v=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),p=N()("features-split section",l&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",c&&"invert-color",t),f=N()("features-split-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider"),E=N()("split-wrap",d&&"invert-mobile",h&&"invert-desktop",b&&"align-top");return i.a.createElement("section",Object.assign({},v,{className:p}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:f},i.a.createElement(W,{data:{title:"Throughts from our Team",paragraph:"We wanted to share some our own personal sentiments with regards to Smart Cities."},className:"center-content"}),i.a.createElement("div",{className:E},i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Enviromental Sustainability"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Kate Wadlinger"),i.a.createElement("p",{className:"m-0"},'"I would love to see more smart cities adopt Automated Vacuum Waste Collection (AVAC) systems like that if Walt Disney World\'s Magic Kingdom. AVAC systems involve a network of pneumatic tubes that suck garbage into underground utility corridors, where the trash is sorted, compacted, and removed."')),i.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",u&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(O,{src:a(63),alt:"Features split 01",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Public Transportation"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Kyle Gray"),i.a.createElement("p",{className:"m-0"},'"Living in the Big Apple, I see firsthand what works and what doesn\'t. The implementation of "OMNY" terminals allow you to pay for the Subway/Bus with Apple Pay or other contactless payment. Though the airport AirTram is part of the same system, there is no OMNY functionality. The PATH train, which connects NY and NJ, also does not yet use contactless payment.I would love to see all these options using the OMNY system."')),i.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",u&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(O,{src:a(64),alt:"Features split 02",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Social Services"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Jon Hair"),i.a.createElement("p",{className:"m-0"},'I would rather live in a "Dumb City" that would use Smart City funding to improve the community through investing in social services and community outreach. I feel that although many benefits exist in the Smart City, the amount of cost isn\'t pragmatic for most cities, and this money could be put back into the city in other ways that would also help improve its conditions.')),i.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",u&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(O,{src:a(65),alt:"Features split 03",width:528,height:396})))))))};Y.defaultProps=V;var U=Y,X=Object(S.a)({},B.defaults),Z=function(e){var t=e.className,a=e.topOuterDivider,l=e.bottomOuterDivider,r=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,c=e.pushLeft,d=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),h=N()("testimonial section",a&&"has-top-divider",l&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),b=N()("testimonial-inner section-inner",r&&"has-top-divider",n&&"has-bottom-divider"),u=N()("tiles-wrap",c&&"push-left");return i.a.createElement("section",Object.assign({},d,{className:h}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:b},i.a.createElement(W,{data:{title:"Impacts on Business/Process/Industry",paragraph:"Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah."},className:"center-content"}),i.a.createElement("div",{className:u}))))};Z.defaultProps=X;var $=Z,Q=function(e){var t=e.className,a=e.children,l=e.labelHidden,r=e.id,n=Object(m.a)(e,["className","children","labelHidden","id"]),s=N()("form-label",l&&"screen-reader",t);return i.a.createElement("label",Object.assign({},n,{className:s,htmlFor:r}),a)};Q.defaultProps={children:null,labelHidden:!1,id:null};var ee=Q,te=function(e){var t=e.children,a=e.className,l=e.status,r=Object(m.a)(e,["children","className","status"]),n=N()("form-hint",l&&"text-color-".concat(l),a);return i.a.createElement("div",Object.assign({},r,{className:n}),t)};te.defaultProps={children:null,status:!1};var ae=te,le=function(e){var t=e.className,a=e.children,l=e.label,r=e.labelHidden,n=e.type,s=e.name,o=e.status,c=e.disabled,d=e.value,h=e.formGroup,b=e.hasIcon,u=e.size,v=e.placeholder,p=e.rows,f=e.hint,E=Object(m.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),g=N()(h&&""!==h&&("desktop"===h?"form-group-desktop":"form-group"),b&&""!==b&&"has-icon-"+b),w=N()("form-input",u&&"form-input-".concat(u),o&&"form-".concat(o),t),O="textarea"===n?"textarea":"input";return i.a.createElement(i.a.Fragment,null,l&&i.a.createElement(ee,{labelHidden:r,id:E.id},l),i.a.createElement("div",{className:g},i.a.createElement(O,Object.assign({},E,{type:"textarea"!==n?n:null,className:w,name:s,disabled:c,value:d,placeholder:v,rows:"textarea"===n?p:null})),a),f&&i.a.createElement(ae,{status:o},f))};le.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var ie=Object(S.a)({},A.defaults,{split:!1}),re=function(e){var t=e.className,a=e.topOuterDivider,l=e.bottomOuterDivider,r=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,c=e.split,d=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),h=N()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",r&&"has-top-divider",l&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t);N()("cta-inner section-inner",r&&"has-top-divider",n&&"has-bottom-divider",c&&"cta-split");return i.a.createElement("section",Object.assign({},d,{className:h}),i.a.createElement("center",null,i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("h2",null,"References")),i.a.createElement("p",null,"- ",i.a.createElement("a",{href:"https://www.mckinsey.com/capabilities/operations/our-insights/smart-cities-digital-solutions-for-a-more-livable-future",target:"_blank"},"https://www.mckinsey.com/capabilities/operations/our-insights/smart-cities-digital-solutions-for-a-more-livable-future")),i.a.createElement("p",null,"- ",i.a.createElement("a",{href:"https://knowledge.wharton.upenn.edu/article/whats-behind-backlash-smart-cities/",target:"_blank"},"https://knowledge.wharton.upenn.edu/article/whats-behind-backlash-smart-cities/")),i.a.createElement("p",null,"- ",i.a.createElement("a",{href:"https://www.cnn.com/2019/07/17/tech/cities-ban-facial-recognition",target:"_blank"},"https://www.cnn.com/2019/07/17/tech/cities-ban-facial-recognition")),i.a.createElement("p",null,"- ",i.a.createElement("a",{href:"https://www.ttownmedia.com/press_banner/news/local-governments-push-back-on-fcc-for-5g-towers/article_aa298958-2e27-11e9-81d0-f735d70722d6.html",target:"_blank"},"https://www.ttownmedia.com/press_banner/news/local-governments-push-back-on-fcc-for-5g-towers/article_aa298958-2e27-11e9-81d0-f735d70722d6.html")),i.a.createElement("p",null,"- ",i.a.createElement("a",{href:"https://knowledge.wharton.upenn.edu/article/whats-behind-backlash-smart-cities/",target:"_blank"},"https://knowledge.wharton.upenn.edu/article/whats-behind-backlash-smart-cities/")),i.a.createElement("p",null,"- ",i.a.createElement("a",{href:"https://knowledge.wharton.upenn.edu/article/whats-behind-backlash-smart-cities/",target:"_blank"},"https://knowledge.wharton.upenn.edu/article/whats-behind-backlash-smart-cities/"))))};re.defaultProps=ie;var ne=re,se=Object(S.a)({},A.defaults,{split:!1}),oe=function(e){var t=e.className,a=e.topOuterDivider,l=e.bottomOuterDivider,r=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,c=e.split,d=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),h=N()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",r&&"has-top-divider",l&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t);N()("cta-inner section-inner",r&&"has-top-divider",n&&"has-bottom-divider",c&&"cta-split");return i.a.createElement("section",Object.assign({},d,{className:h}),i.a.createElement("center",null,i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("h2",null,"Case Studies")),i.a.createElement("p",null,"- Link to PDF Here -")),i.a.createElement("br",null))};oe.defaultProps=se;var ce=oe,me=Object(S.a)({},B.defaults),de=function(e){var t=e.className,a=e.topOuterDivider,l=e.bottomOuterDivider,r=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,c=e.pushLeft,d=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),h=N()("testimonial section",a&&"has-top-divider",l&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),b=N()("testimonial-inner section-inner",r&&"has-top-divider",n&&"has-bottom-divider"),u=N()("tiles-wrap",c&&"push-left");return i.a.createElement("section",Object.assign({},d,{className:h}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:b},i.a.createElement(W,{data:{title:"Legal/Ethical Issues",paragraph:"Even though Smart City technology is aimed at improving the quality of life, numerous concerns exist, such as:"},className:"center-content"}),i.a.createElement("div",{className:u},i.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Data Collection"),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"},"Privacy"))),i.a.createElement("p",{className:"text-sm mb-0"},i.a.createElement("br",null),"\u2014 Smart Cities collect massive amounts of data which leaves some citizens worried about exactly what is being collected and how this data is being used or sold to third-parties."))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"},"5G Technology"),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"},"Health"))),i.a.createElement("br",null),i.a.createElement("p",{className:"text-sm mb-0"},"\u2014 5G networks, which are built from multiple towers, are necessary for a Smart City to operate. The technology has not been studied long enough to know the hazardous effects, if any."))),i.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Facial Recognition"),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"},"Inclusion"))),i.a.createElement("br",null),i.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Concerns exist about potential abuse of profiling and tracking using this technology. Many AI systems develop biases, and the software also has the risk of misidentification.")))))))};de.defaultProps=me;var he=de,be=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(K,{className:"illustration-section-01"}),i.a.createElement(J,{topDivider:!0}),i.a.createElement(U,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),i.a.createElement($,{topDivider:!0}),i.a.createElement(he,{topDivider:!0}),i.a.createElement(ce,{topDivider:!0}),i.a.createElement(ne,{topDivider:!0}))};E.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/SmartCity",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var ue=function(){var e=Object(l.useRef)(),t=Object(c.f)();return Object(l.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){E.a.set({page:e}),E.a.pageview(e)}(a)}),[t]),i.a.createElement(s.a,null,i.a.createElement(f,{ref:e,children:function(){return i.a.createElement(c.c,null,i.a.createElement(d,{exact:!0,path:"/SmartCity",component:be,layout:P}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(66),Object(o.a)();n.a.render(i.a.createElement(s.a,null,i.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.9cfcf05e.chunk.js.map