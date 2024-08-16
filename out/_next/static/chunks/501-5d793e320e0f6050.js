"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[501],{8173:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Image",{enumerable:!0,get:function(){return v}});let i=n(9920),s=n(1452),r=n(7437),o=s._(n(2265)),a=i._(n(4887)),u=i._(n(8321)),l=n(497),c=n(7103),p=n(3938);n(2301);let d=n(291),f=i._(n(1241)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(t,e,n,i,s,r,o){let a=null==t?void 0:t.src;t&&t["data-loaded-src"]!==a&&(t["data-loaded-src"]=a,("decode"in t?t.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(t.parentElement&&t.isConnected){if("empty"!==e&&s(!0),null==n?void 0:n.current){let e=new Event("load");Object.defineProperty(e,"target",{writable:!1,value:t});let i=!1,s=!1;n.current({...e,nativeEvent:e,currentTarget:t,target:t,isDefaultPrevented:()=>i,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{i=!0,e.preventDefault()},stopPropagation:()=>{s=!0,e.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(t)}}))}function m(t){let[e,n]=o.version.split(".",2),i=parseInt(e,10),s=parseInt(n,10);return i>18||18===i&&s>=3?{fetchPriority:t}:{fetchpriority:t}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,o.forwardRef)((t,e)=>{let{src:n,srcSet:i,sizes:s,height:a,width:u,decoding:l,className:c,style:p,fetchPriority:d,placeholder:f,loading:h,unoptimized:y,fill:b,onLoadRef:v,onLoadingCompleteRef:C,setBlurComplete:w,setShowAltText:S,sizesInput:P,onLoad:k,onError:_,...O}=t;return(0,r.jsx)("img",{...O,...m(d),loading:h,width:u,height:a,decoding:l,"data-nimg":b?"fill":"1",className:c,style:p,sizes:s,srcSet:i,src:n,ref:(0,o.useCallback)(t=>{e&&("function"==typeof e?e(t):"object"==typeof e&&(e.current=t)),t&&(_&&(t.src=t.src),t.complete&&g(t,f,v,C,w,y,P))},[n,f,v,C,w,_,y,P,e]),onLoad:t=>{g(t.currentTarget,f,v,C,w,y,P)},onError:t=>{S(!0),"empty"!==f&&w(!0),_&&_(t)}})});function b(t){let{isAppRouter:e,imgAttributes:n}=t,i={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...m(n.fetchPriority)};return e&&a.default.preload?(a.default.preload(n.src,i),null):(0,r.jsx)(u.default,{children:(0,r.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...i},"__nimg-"+n.src+n.srcSet+n.sizes)})}let v=(0,o.forwardRef)((t,e)=>{let n=(0,o.useContext)(d.RouterContext),i=(0,o.useContext)(p.ImageConfigContext),s=(0,o.useMemo)(()=>{let t=h||i||c.imageConfigDefault,e=[...t.deviceSizes,...t.imageSizes].sort((t,e)=>t-e),n=t.deviceSizes.sort((t,e)=>t-e);return{...t,allSizes:e,deviceSizes:n}},[i]),{onLoad:a,onLoadingComplete:u}=t,g=(0,o.useRef)(a);(0,o.useEffect)(()=>{g.current=a},[a]);let m=(0,o.useRef)(u);(0,o.useEffect)(()=>{m.current=u},[u]);let[v,C]=(0,o.useState)(!1),[w,S]=(0,o.useState)(!1),{props:P,meta:k}=(0,l.getImgProps)(t,{defaultLoader:f.default,imgConf:s,blurComplete:v,showAltText:w});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y,{...P,unoptimized:k.unoptimized,placeholder:k.placeholder,fill:k.fill,onLoadRef:g,onLoadingCompleteRef:m,setBlurComplete:C,setShowAltText:S,sizesInput:t.sizes,ref:e}),k.priority?(0,r.jsx)(b,{isAppRouter:!n,imgAttributes:P}):null]})});("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},2901:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"AmpStateContext",{enumerable:!0,get:function(){return i}});let i=n(9920)._(n(2265)).default.createContext({})},687:function(t,e){function n(t){let{ampFirst:e=!1,hybrid:n=!1,hasQuery:i=!1}=void 0===t?{}:t;return e||n&&i}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"isInAmpMode",{enumerable:!0,get:function(){return n}})},497:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImgProps",{enumerable:!0,get:function(){return a}}),n(2301);let i=n(1564),s=n(7103);function r(t){return void 0!==t.default}function o(t){return void 0===t?t:"number"==typeof t?Number.isFinite(t)?t:NaN:"string"==typeof t&&/^[0-9]+$/.test(t)?parseInt(t,10):NaN}function a(t,e){var n;let a,u,l,{src:c,sizes:p,unoptimized:d=!1,priority:f=!1,loading:h,className:g,quality:m,width:y,height:b,fill:v=!1,style:C,overrideSrc:w,onLoad:S,onLoadingComplete:P,placeholder:k="empty",blurDataURL:_,fetchPriority:O,layout:x,objectFit:j,objectPosition:E,lazyBoundary:T,lazyRoot:I,...M}=t,{imgConf:A,showAltText:z,blurComplete:B,defaultLoader:L}=e,D=A||s.imageConfigDefault;if("allSizes"in D)a=D;else{let t=[...D.deviceSizes,...D.imageSizes].sort((t,e)=>t-e),e=D.deviceSizes.sort((t,e)=>t-e);a={...D,allSizes:t,deviceSizes:e}}if(void 0===L)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let N=M.loader||L;delete M.loader,delete M.srcSet;let R="__next_img_default"in N;if(R){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let t=N;N=e=>{let{config:n,...i}=e;return t(i)}}if(x){"fill"===x&&(v=!0);let t={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[x];t&&(C={...C,...t});let e={responsive:"100vw",fill:"100vw"}[x];e&&!p&&(p=e)}let F="",q=o(y),H=o(b);if("object"==typeof(n=c)&&(r(n)||void 0!==n.src)){let t=r(c)?c.default:c;if(!t.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(t));if(!t.height||!t.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(t));if(u=t.blurWidth,l=t.blurHeight,_=_||t.blurDataURL,F=t.src,!v){if(q||H){if(q&&!H){let e=q/t.width;H=Math.round(t.height*e)}else if(!q&&H){let e=H/t.height;q=Math.round(t.width*e)}}else q=t.width,H=t.height}}let U=!f&&("lazy"===h||void 0===h);(!(c="string"==typeof c?c:F)||c.startsWith("data:")||c.startsWith("blob:"))&&(d=!0,U=!1),a.unoptimized&&(d=!0),R&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(d=!0),f&&(O="high");let G=o(m),W=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:j,objectPosition:E}:{},z?{}:{color:"transparent"},C),V=B||"empty"===k?null:"blur"===k?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:q,heightInt:H,blurWidth:u,blurHeight:l,blurDataURL:_||"",objectFit:W.objectFit})+'")':'url("'+k+'")',Y=V?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},$=function(t){let{config:e,src:n,unoptimized:i,width:s,quality:r,sizes:o,loader:a}=t;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:l}=function(t,e,n){let{deviceSizes:i,allSizes:s}=t;if(n){let t=/(^|\s)(1?\d?\d)vw/g,e=[];for(let i;i=t.exec(n);i)e.push(parseInt(i[2]));if(e.length){let t=.01*Math.min(...e);return{widths:s.filter(e=>e>=i[0]*t),kind:"w"}}return{widths:s,kind:"w"}}return"number"!=typeof e?{widths:i,kind:"w"}:{widths:[...new Set([e,2*e].map(t=>s.find(e=>e>=t)||s[s.length-1]))],kind:"x"}}(e,s,o),c=u.length-1;return{sizes:o||"w"!==l?o:"100vw",srcSet:u.map((t,i)=>a({config:e,src:n,quality:r,width:t})+" "+("w"===l?t:i+1)+l).join(", "),src:a({config:e,src:n,quality:r,width:u[c]})}}({config:a,src:c,unoptimized:d,width:q,quality:G,sizes:p,loader:N});return{props:{...M,loading:U?"lazy":h,fetchPriority:O,width:q,height:H,decoding:"async",className:g,style:{...W,...Y},sizes:$.sizes,srcSet:$.srcSet,src:w||$.src},meta:{unoptimized:d,priority:f,placeholder:k,fill:v}}}},8321:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{default:function(){return g},defaultHead:function(){return p}});let i=n(9920),s=n(1452),r=n(7437),o=s._(n(2265)),a=i._(n(5960)),u=n(2901),l=n(6590),c=n(687);function p(t){void 0===t&&(t=!1);let e=[(0,r.jsx)("meta",{charSet:"utf-8"})];return t||e.push((0,r.jsx)("meta",{name:"viewport",content:"width=device-width"})),e}function d(t,e){return"string"==typeof e||"number"==typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((t,e)=>"string"==typeof e||"number"==typeof e?t:t.concat(e),[])):t.concat(e)}n(2301);let f=["name","httpEquiv","charSet","itemProp"];function h(t,e){let{inAmpMode:n}=e;return t.reduce(d,[]).reverse().concat(p(n).reverse()).filter(function(){let t=new Set,e=new Set,n=new Set,i={};return s=>{let r=!0,o=!1;if(s.key&&"number"!=typeof s.key&&s.key.indexOf("$")>0){o=!0;let e=s.key.slice(s.key.indexOf("$")+1);t.has(e)?r=!1:t.add(e)}switch(s.type){case"title":case"base":e.has(s.type)?r=!1:e.add(s.type);break;case"meta":for(let t=0,e=f.length;t<e;t++){let e=f[t];if(s.props.hasOwnProperty(e)){if("charSet"===e)n.has(e)?r=!1:n.add(e);else{let t=s.props[e],n=i[e]||new Set;("name"!==e||!o)&&n.has(t)?r=!1:(n.add(t),i[e]=n)}}}}return r}}()).reverse().map((t,e)=>{let i=t.key||e;if(!n&&"link"===t.type&&t.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(e=>t.props.href.startsWith(e))){let e={...t.props||{}};return e["data-href"]=e.href,e.href=void 0,e["data-optimized-fonts"]=!0,o.default.cloneElement(t,e)}return o.default.cloneElement(t,{key:i})})}let g=function(t){let{children:e}=t,n=(0,o.useContext)(u.AmpStateContext),i=(0,o.useContext)(l.HeadManagerContext);return(0,r.jsx)(a.default,{reduceComponentsToState:h,headManager:i,inAmpMode:(0,c.isInAmpMode)(n),children:e})};("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},1564:function(t,e){function n(t){let{widthInt:e,heightInt:n,blurWidth:i,blurHeight:s,blurDataURL:r,objectFit:o}=t,a=i?40*i:e,u=s?40*s:n,l=a&&u?"viewBox='0 0 "+a+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+l+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(l?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+r+"'/%3E%3C/svg%3E"}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},3938:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"ImageConfigContext",{enumerable:!0,get:function(){return r}});let i=n(9920)._(n(2265)),s=n(7103),r=i.default.createContext(s.imageConfigDefault)},7103:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return i}});let n=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},1241:function(t,e){function n(t){let{config:e,src:n,width:i,quality:s}=t;return e.path+"?url="+encodeURIComponent(n)+"&w="+i+"&q="+(s||75)}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i}}),n.__next_img_default=!0;let i=n},291:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"RouterContext",{enumerable:!0,get:function(){return i}});let i=n(9920)._(n(2265)).default.createContext(null)},5960:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a}});let i=n(2265),s="undefined"==typeof window,r=s?()=>{}:i.useLayoutEffect,o=s?()=>{}:i.useEffect;function a(t){let{headManager:e,reduceComponentsToState:n}=t;function a(){if(e&&e.mountedInstances){let s=i.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));e.updateHead(n(s,t))}}if(s){var u;null==e||null==(u=e.mountedInstances)||u.add(t.children),a()}return r(()=>{var n;return null==e||null==(n=e.mountedInstances)||n.add(t.children),()=>{var n;null==e||null==(n=e.mountedInstances)||n.delete(t.children)}}),r(()=>(e&&(e._pendingUpdate=a),()=>{e&&(e._pendingUpdate=a)})),o(()=>(e&&e._pendingUpdate&&(e._pendingUpdate(),e._pendingUpdate=null),()=>{e&&e._pendingUpdate&&(e._pendingUpdate(),e._pendingUpdate=null)})),null}},279:function(t,e,n){function i(){return(i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return a}});var s={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},r=new(function(){function t(){}var e=t.prototype;return e.load=function(t,e,n){if(t.el="string"==typeof n?document.querySelector(n):n,t.options=i({},s,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),t.stringsElement="string"==typeof t.options.stringsElement?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var r=Array.prototype.slice.apply(t.stringsElement.children),o=r.length;if(o)for(var a=0;a<o;a+=1)t.strings.push(r[a].innerHTML.trim())}for(var u in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[u]=u;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(n)}},e.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(n)}},t}()),o=new(function(){function t(){}var e=t.prototype;return e.typeHtmlChars=function(t,e,n){if("html"!==n.contentType)return e;var i,s=t.substring(e).charAt(0);if("<"===s||"&"===s){for(i="<"===s?">":";";t.substring(e+1).charAt(0)!==i&&!(1+ ++e>t.length););e++}return e},e.backSpaceHtmlChars=function(t,e,n){if("html"!==n.contentType)return e;var i,s=t.substring(e).charAt(0);if(">"===s||";"===s){for(i=">"===s?"<":"&";t.substring(e-1).charAt(0)!==i&&!(--e<0););e--}return e},t}()),a=function(){function t(t,e){r.load(this,e,t),this.begin()}var e=t.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var i=this.humanizer(this.typeSpeed),s=1;!0!==this.pause.status?this.timeout=setTimeout(function(){e=o.typeHtmlChars(t,e,n);var i,r=0,a=t.substring(e);if("^"===a.charAt(0)&&/^\^\d+/.test(a)&&(i=1+(a=/\d+/.exec(a)[0]).length,r=parseInt(a),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+i),n.toggleBlinking(!0)),"`"===a.charAt(0)){for(;"`"!==t.substring(e+s).charAt(0)&&(s++,!(e+s>t.length)););var u=t.substring(0,e),l=t.substring(u.length+1,e+s);t=u+l+t.substring(e+s+1),s--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,s),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},r)},i):this.setPauseStatus(t,e,!0)},e.keepTyping=function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var i=t.substring(0,e+=n);this.replaceText(i),this.typewrite(t,e)},e.doneTyping=function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){n.backspace(t,e)},this.backDelay))},e.backspace=function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var i=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=o.backSpaceHtmlChars(t,e,n);var i=t.substring(0,e);if(n.replaceText(i),n.smartBackspace){var s=n.strings[n.arrayPos+1];n.stopNum=s&&i===s.substring(0,e)?e:0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))},i)}else this.setPauseStatus(t,e,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&0!==t.el.value.length||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}()}}]);