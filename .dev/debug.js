!function(t,e){t.getElementById("livereloadscript")||((e=t.createElement("script")).async=1,e.src="//"+(window.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",e.id="livereloadscript",t.getElementsByTagName("head")[0].appendChild(e))}(window.document),function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===n&&o.firstChild?o.insertBefore(s,o.firstChild):o.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}(":root {\r\n\t--menu-function-item-height: 26px;\r\n\t--menu-function-item-whitespace: 26px;\r\n\r\n\t--menu-background-color: #999;\r\n\t--menu-frontground-color: #DDD;\r\n\t--menu-active-background-color: #66F;\r\n\t--menu-active-frontground-color: #fff;\r\n\t--menu-disabled-background-color: 'transparent';\r\n\t--menu-disabled-frontground-color: #999;\r\n\r\n\t--menu-outline-color: #000;\r\n\r\n\t--menu-spearator-color: #ccc;\r\n\t--menu-spearator-whitespace-x: 13px;\r\n\t--menu-whitespace-y: 5px;\r\n}\r\n\r\nspan.menu-item-expanding::before {\r\n\tcontent: '>';\r\n}");const t=document,e=window;function n(t,e,n){t.addEventListener(e,n)}function o(e){return t.createElement(e)}function s(t,...e){for(const n of e)for(const e in n)t.style.setProperty(e,n[e])}function i(t,e){t.appendChild(e)}function r(t,...e){t.classList.add(...e)}function c(t,e=null){const n=new Event(t,{bubbles:!0});return n.data=e,n}function a(t,e){t.dispatchEvent(e)}const l={display:"block",position:"static","box-sizing":"border-box","border-width":"1px","border-color":"transparent"},d={position:"relative",display:"flex"};class u{constructor(){const t=o("li"),e=o("a");i(t,e),s(t,l),s(e,d),r(t,"menu-item"),this.e=t,this.t=e}}const h="function-item-height",p="function-item-whitespace",m="frontground-color",f="whitespace-y";const g=(b="menu",function(t){return`var(--${b}-${t})`});var b;const w={position:"absolute",height:"100%",width:g(p)},x="f",y="r",v={cursor:"pointer",color:g(m),"background-color":"transparent"},k={color:g("active-frontground-color"),"background-color":g("active-background-color")},E={color:g("disabled-frontground-color"),"background-color":"transparent"},F={height:g(h)},C={display:"none"},L={"flex-grow":"1",padding:`0 ${g(p)}`};class T extends u{constructor(t,e){super();const l=this.t,d=o("span"),u=o("span");r(d,"menu-item-label"),r(u,"menu-item-icon"),s(d,L),s(l,F),s(u,C),i(l,u),i(l,d),this.l=d,this.F=!1,d.innerText="Text 4 test";const h=this.e;s(h,v),n(h,"mouseover",(()=>{a(h,c("-focus",this))}))}[y](){s(this.e,v),function(t,...e){t.classList.remove(...e)}(this.e,"focus"),this.F=!1}[x](){console.log("focusing",this.F),this.F||(s(this.e,k),r(this.e,"focus"),this.F=!0)}d(){s(this.e,E)}}const $={top:0,left:0};class B extends T{constructor(t){super();const l=this.t,d=o("span"),u=o("span");r(d,"menu-item-accelerator"),r(u,"menu-item-checkbox"),s(d,L),s(u,w,$),i(l,d),i(l,u),n(this.e,"click",(()=>{a(e,c("menu::-close"))}))}}const D={display:"block","border-bottom-width":"1px","border-bottom-style":"solid","border-bottom-color":g("spearator-color"),margin:`${g(f)} ${g("spearator-whitespace-x")}`};class N extends u{constructor(){super();const t=this.e;s(this.t,D),n(t,"mouseover",(()=>{a(t,c("-clear-focus",this))}))}static is(t){return t instanceof this}}const z={display:"block",position:"fixed",margin:"0",padding:`${g(f)} 0`,"font-size":"12px","white-space":"nowrap","border-width":"1px","border-style":"solid","line-height":g(h),"border-color":"transparent","background-color":g("background-color"),color:g(m),"user-select":"none",opacity:0,"transition-property":"opacity","transition-duration":"0.3s"},A="a",P="cF";class S{constructor(){const t=this,e=o("ul");s(e,z),r(e,"menu"),this.l=[],this.e=e,this.k=!1,this.C=()=>this.c(),n(e,"-focus",(e=>{e.stopPropagation(),t.k=!1,this.cF(e.data),e.data.f()})),n(e,"mouseleave",(()=>this.cF())),n(e,"-clear-focus",(()=>this.cF())),n(e,"-keeping",(()=>this.k=!0))}[P](t=null){this.k||this.l.filter((e=>!N.is(e)&&e!==t)).forEach((t=>t.r()))}s(){i(t.body,this.e),requestAnimationFrame((()=>s(this.e,{opacity:1}))),n(e,"menu::-close",this.C)}c(){var n,o;this.k=!1,n=t.body,o=this.e,n.removeChild(o),s(this.e,{opacity:0}),function(t,e,n){t.removeEventListener(e,n)}(e,"menu::-close",this.C),this.cF()}[A](t){this.l.push(t),i(this.e,t.e)}n(t=null){}p(t=null){}}const j={right:0,top:0};class q extends T{constructor(t){super(),console.log(this);const e=o("span");s(e,w,j),r(e,"menu-item-expanding"),i(this.t,e),this.sm=t,this.p=!1}[x](){super.f(),console.log(this.p),this.p||(this.p=!0,this.sm.s(),a(this.e,c("-keeping",this)))}[y](){super.r(),console.log(this.p),this.p&&(this.sm.c(),this.p=!1)}}window.addEventListener("load",(function(){const t=new S,e=new S,n=new B,o=new N,s=new B;e.a(n),e.a(o),e.a(s);const i=new B,r=new q(e),c=new B,a=new N;t.a(i),t.a(r),t.a(a),t.a(c),t.e.style.minWidth="200px",window.addEventListener("contextmenu",(e=>{e.preventDefault(),t.s(),console.log(t)}))}))}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVidWcuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi9saWIvZG9tLmpzIiwiLi4vc3JjL0NvbXBvbmVudC9NZW51SXRlbS9CYXNlLmpzIiwiLi4vc3JjL0NvbXBvbmVudC92YXJzLmpzIiwiLi4vc3JjL0NvbXBvbmVudC91dGlscy5qcyIsIi4uL3NyYy9Db21wb25lbnQvY3NzLmpzIiwiLi4vc3JjL0NvbXBvbmVudC9NZW51SXRlbS9GdW5jdGlvbi5qcyIsIi4uL3NyYy9Db21wb25lbnQvTWVudUl0ZW0vQ2xpY2thYmxlLmpzIiwiLi4vc3JjL0NvbXBvbmVudC9NZW51SXRlbS9TcGVhcmF0b3IuanMiLCIuLi9zcmMvQ29tcG9uZW50L01lbnUuanMiLCIuLi9zcmMvQ29tcG9uZW50L01lbnVJdGVtL1N1Ym1lbnUuanMiLCIuLi9leGFtcGxlL2RlYnVnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVJbmplY3Q7XG4iLCJleHBvcnQgY29uc3QgRE9DVU1FTlQgPSBkb2N1bWVudCwgV0lORE9XID0gd2luZG93O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxyXG4gKiBAcGFyYW0ge0V2ZW50TGlzdGVuZXJ9IGxpc3RlbmVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbGVtZW50LCBldmVudFR5cGUsIGxpc3RlbmVyKSB7XHJcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbGlzdGVuZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihlbGVtZW50LCBldmVudFR5cGUsIGxpc3RlbmVyKSB7XHJcblx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbGlzdGVuZXIpO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkKGVsZW1lbnQpIHtcclxuXHRyZXR1cm4gQXJyYXlcclxuXHRcdC5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pXHJcblx0XHQubWFwKGNoaWxkRWxlbWVudCA9PiByZW1vdmVDaGlsZChlbGVtZW50LCBjaGlsZEVsZW1lbnQpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGcm9tUGFyZW50KGVsZW1lbnQpIHtcclxuXHRyZXR1cm4gcmVtb3ZlQ2hpbGQoZWxlbWVudC5wYXJlbnRFbGVtZW50LCBlbGVtZW50KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lXHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZ05hbWUpIHtcclxuXHRyZXR1cm4gRE9DVU1FTlQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICogQHBhcmFtIHtvYmplY3R9IHJ1bGVPYmplY3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50LCAuLi5ydWxlT2JqZWN0TGlzdCkge1xyXG5cdGZvciAoY29uc3QgcnVsZU9iamVjdCBvZiBydWxlT2JqZWN0TGlzdCkge1xyXG5cdFx0Zm9yIChjb25zdCBwcm9wZXJ0eSBpbiBydWxlT2JqZWN0KSB7XHJcblx0XHRcdGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHJ1bGVPYmplY3RbcHJvcGVydHldKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2xhc3NOYW1lKGVsZW1lbnQsIG5hbWUpIHtcclxuXHRlbGVtZW50LmNsYXNzTmFtZSA9IG5hbWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRFbGVtZW50XHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDaGlsZChwYXJlbnRFbGVtZW50LCBlbGVtZW50KSB7XHJcblx0cGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudEVsZW1lbnRcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNoaWxkKHBhcmVudEVsZW1lbnQsIGVsZW1lbnQpIHtcclxuXHRwYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gKiBAcGFyYW0gIHsuLi5zdHJpbmd9IHRva2Vuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIC4uLnRva2Vucykge1xyXG5cdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi50b2tlbnMpO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gKiBAcGFyYW0gIHsuLi5zdHJpbmd9IHRva2Vuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIC4uLnRva2Vucykge1xyXG5cdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi50b2tlbnMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXZlbnQoZXZlbnRUeXBlLCBkYXRhID0gbnVsbCkge1xyXG5cdGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50VHlwZSwgeyBidWJibGVzOiB0cnVlIH0pO1xyXG5cclxuXHRldmVudC5kYXRhID0gZGF0YTtcclxuXHJcblx0cmV0dXJuIGV2ZW50O1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZWxlbWVudCwgZXZlbnQpIHtcclxuXHRlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG59IiwiaW1wb3J0ICogYXMgRG9tIGZyb20gJ2RvbSc7XHJcblxyXG5leHBvcnQgY29uc3QgUk9XX0VMRU1FTlQgPSAnZScsIFRFWFRfRUxFTUVOVCA9ICd0JztcclxuXHJcbmNvbnN0IE1FTlVfSVRFTV9ST1dfU1RZTEUgPSB7XHJcblx0ZGlzcGxheTogJ2Jsb2NrJyxcclxuXHRwb3NpdGlvbjogJ3N0YXRpYycsXHJcblx0J2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXHJcblx0J2JvcmRlci13aWR0aCc6ICcxcHgnLFxyXG5cdCdib3JkZXItY29sb3InOiAndHJhbnNwYXJlbnQnXHJcbn07XHJcblxyXG5jb25zdCBNRU5VX0lURU1fVEVYVF9TVFlMRSA9IHtcclxuXHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuXHRkaXNwbGF5OiAnZmxleCdcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlTWVudUl0ZW0ge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Y29uc3Qgcm93RWxlbWVudCA9IERvbS5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cdFx0Y29uc3QgdGV4dEVsZW1lbnQgPSBEb20uY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuXHRcdERvbS5hcHBlbmRDaGlsZChyb3dFbGVtZW50LCB0ZXh0RWxlbWVudCk7XHJcblx0XHREb20uc2V0U3R5bGUocm93RWxlbWVudCwgTUVOVV9JVEVNX1JPV19TVFlMRSk7XHJcblx0XHREb20uc2V0U3R5bGUodGV4dEVsZW1lbnQsIE1FTlVfSVRFTV9URVhUX1NUWUxFKTtcclxuXHRcdERvbS5hZGRDbGFzcyhyb3dFbGVtZW50LCAnbWVudS1pdGVtJyk7XHJcblxyXG5cdFx0dGhpc1tST1dfRUxFTUVOVF0gPSByb3dFbGVtZW50O1xyXG5cdFx0dGhpc1tURVhUX0VMRU1FTlRdID0gdGV4dEVsZW1lbnQ7XHJcblx0fVxyXG59XHJcbiIsImNvbnN0XHJcblx0SVRFTSA9ICdpdGVtJyxcclxuXHRDT0xPUiA9ICdjb2xvcicsXHJcblx0QUNUSVZFID0gJ2FjdGl2ZScsXHJcblx0RElTQUJMRUQgPSAnZGlzYWJsZWQnLFxyXG5cdEZVTkNUSU9OID0gJ2Z1bmN0aW9uJyxcclxuXHRTUEVBUkFUT1IgPSAnc3BlYXJhdG9yJyxcclxuXHRXSElURVNQQUNFID0gJ3doaXRlc3BhY2UnLFxyXG5cdEJBQ0tHUk9VTkQgPSAnYmFja2dyb3VuZCcsXHJcblx0RlJPTlRHUk9VTkQgPSAnZnJvbnRncm91bmQnO1xyXG5cclxuZXhwb3J0IGNvbnN0XHJcblx0RlVOQ1RJT05fSVRFTV9IRUlHSFQgPSBgJHtGVU5DVElPTn0tJHtJVEVNfS1oZWlnaHRgLFxyXG5cdEZVTkNUSU9OX0lURU1fV0hJVEVTUEFDRSA9IGAke0ZVTkNUSU9OfS0ke0lURU19LSR7V0hJVEVTUEFDRX1gLFxyXG5cdERJU0FCTEVEX0JBQ0tHUk9VTkRfQ09MT1IgPSBgJHtESVNBQkxFRH0tJHtCQUNLR1JPVU5EfS0ke0NPTE9SfWAsXHJcblx0RElTQUJMRURfRlJPTlRHUk9VTkRfQ09MT1IgPSBgJHtESVNBQkxFRH0tJHtGUk9OVEdST1VORH0tJHtDT0xPUn1gLFxyXG5cdEFDVElWRV9CQUNLR1JPVU5EX0NPTE9SID0gYCR7QUNUSVZFfS0ke0JBQ0tHUk9VTkR9LSR7Q09MT1J9YCxcclxuXHRBQ1RJVkVfRlJPTlRHUk9VTkRfQ09MT1IgPSBgJHtBQ1RJVkV9LSR7RlJPTlRHUk9VTkR9LSR7Q09MT1J9YCxcclxuXHRCQUNLR1JPVU5EX0NPTE9SID0gYCR7QkFDS0dST1VORH0tJHtDT0xPUn1gLFxyXG5cdEZST05UR1JPVU5EX0NPTE9SID0gYCR7RlJPTlRHUk9VTkR9LSR7Q09MT1J9YCxcclxuXHRPVVRMSU5FX0NPTE9SID0gYG91dGxpbmUtJHtDT0xPUn1gLFxyXG5cdFNQRUFSQVRPUl9DT0xPUiA9IGAke1NQRUFSQVRPUn0tJHtDT0xPUn1gLFxyXG5cdFNQRUFSQVRPUl9XSElURVNQQUNFX1ggPSBgJHtTUEVBUkFUT1J9LSR7V0hJVEVTUEFDRX0teGAsXHJcblx0V0hJVEVTUEFDRV9ZID0gYCR7V0hJVEVTUEFDRX0teWA7IiwiaW1wb3J0IHsgQ1NTVmFyR2VuZXJhdG9yIH0gZnJvbSAnLi9jc3MnO1xyXG5pbXBvcnQgKiBhcyBWQVIgZnJvbSAnLi92YXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBWYXIgPSBDU1NWYXJHZW5lcmF0b3IoJ21lbnUnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBNRU5VX0lURU1fSUNPTl9CT1hfU1RZTEUgPSB7XHJcblx0cG9zaXRpb246ICdhYnNvbHV0ZScsXHJcblx0aGVpZ2h0OiAnMTAwJScsXHJcblx0d2lkdGg6IFZhcihWQVIuRlVOQ1RJT05fSVRFTV9XSElURVNQQUNFKVxyXG59O1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gQ1NTVmFyR2VuZXJhdG9yKG5hbWVzcGFjZSkge1xyXG5cdHJldHVybiBmdW5jdGlvbiBnZW5lcmF0ZVZhck5hbWUobmFtZSkge1xyXG5cdFx0cmV0dXJuIGB2YXIoLS0ke25hbWVzcGFjZX0tJHtuYW1lfSlgO1xyXG5cdH07XHJcbn0iLCJpbXBvcnQgKiBhcyBEb20gZnJvbSAnZG9tJztcclxuaW1wb3J0IHsgQmFzZU1lbnVJdGVtLCBST1dfRUxFTUVOVCwgVEVYVF9FTEVNRU5UIH0gZnJvbSAnLi9CYXNlJztcclxuaW1wb3J0ICogYXMgVkFSIGZyb20gJy4uL3ZhcnMnO1xyXG5pbXBvcnQgeyBWYXIgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgY29uc3RcclxuXHRGT0NVUyA9ICdmJyxcclxuXHRSRVNFVCA9ICdyJyxcclxuXHRESVNBQkxFID0gJ2QnLFxyXG5cdExBQkVMX1NQQU4gPSAnbCcsXHJcblx0Rk9DVVNJTkcgPSAnRic7XHJcblxyXG5jb25zdCBNRU5VX0lURU1fUk9XX1NUWUxFX0RFRkFVTFQgPSB7XHJcblx0J2N1cnNvcic6ICdwb2ludGVyJyxcclxuXHRjb2xvcjogVmFyKFZBUi5GUk9OVEdST1VORF9DT0xPUiksXHJcblx0J2JhY2tncm91bmQtY29sb3InOiAndHJhbnNwYXJlbnQnXHJcbn07XHJcblxyXG5jb25zdCBNRU5VX0lURU1fUk9XX1NUWUxFX09OX0ZPQ1VTID0ge1xyXG5cdGNvbG9yOiBWYXIoVkFSLkFDVElWRV9GUk9OVEdST1VORF9DT0xPUiksXHJcblx0J2JhY2tncm91bmQtY29sb3InOiBWYXIoVkFSLkFDVElWRV9CQUNLR1JPVU5EX0NPTE9SKVxyXG59O1xyXG5cclxuY29uc3QgTUVOVV9JVEVNX1JPV19TVFlMRV9PTl9ESVNBQkxFRCA9IHtcclxuXHRjb2xvcjogVmFyKFZBUi5ESVNBQkxFRF9GUk9OVEdST1VORF9DT0xPUiksXHJcblx0J2JhY2tncm91bmQtY29sb3InOiAndHJhbnNwYXJlbnQnXHJcbn07XHJcblxyXG5jb25zdCBNRU5VX0lURU1fVEVYVF9TVFlMRSA9IHtcclxuXHQnaGVpZ2h0JzogVmFyKFZBUi5GVU5DVElPTl9JVEVNX0hFSUdIVClcclxufTtcclxuXHJcbmNvbnN0IElDT05fU1BBTl9TVFlMRSA9IHtcclxuXHRkaXNwbGF5OiAnbm9uZSdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNRU5VX0lURU1fTEFCRUxfU1BBTl9TVFlMRSA9IHtcclxuXHQnZmxleC1ncm93JzogJzEnLFxyXG5cdCdwYWRkaW5nJzogYDAgJHtWYXIoVkFSLkZVTkNUSU9OX0lURU1fV0hJVEVTUEFDRSl9YCxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBGdW5jdGlvbk1lbnVJdGVtIGV4dGVuZHMgQmFzZU1lbnVJdGVtIHtcclxuXHRjb25zdHJ1Y3RvcihsYWJlbCwgaWNvbikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRjb25zdCB0ZXh0RWxlbWVudCA9IHRoaXNbVEVYVF9FTEVNRU5UXTtcclxuXHRcdGNvbnN0IGxhYmVsU3BhbiA9IERvbS5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblx0XHRjb25zdCBpY29uU3BhbiA9IERvbS5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG5cdFx0RG9tLmFkZENsYXNzKGxhYmVsU3BhbiwgJ21lbnUtaXRlbS1sYWJlbCcpO1xyXG5cdFx0RG9tLmFkZENsYXNzKGljb25TcGFuLCAnbWVudS1pdGVtLWljb24nKTtcclxuXHRcdERvbS5zZXRTdHlsZShsYWJlbFNwYW4sIE1FTlVfSVRFTV9MQUJFTF9TUEFOX1NUWUxFKTtcclxuXHRcdERvbS5zZXRTdHlsZSh0ZXh0RWxlbWVudCwgTUVOVV9JVEVNX1RFWFRfU1RZTEUpO1xyXG5cdFx0RG9tLnNldFN0eWxlKGljb25TcGFuLCBJQ09OX1NQQU5fU1RZTEUpO1xyXG5cclxuXHRcdERvbS5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCwgaWNvblNwYW4pO1xyXG5cdFx0RG9tLmFwcGVuZENoaWxkKHRleHRFbGVtZW50LCBsYWJlbFNwYW4pO1xyXG5cclxuXHRcdHRoaXNbTEFCRUxfU1BBTl0gPSBsYWJlbFNwYW47XHJcblx0XHR0aGlzW0ZPQ1VTSU5HXSA9IGZhbHNlO1xyXG5cclxuXHRcdGxhYmVsU3Bhbi5pbm5lclRleHQgPSAnVGV4dCA0IHRlc3QnO1xyXG5cclxuXHRcdGNvbnN0IHJvd0VsZW1lbnQgPSB0aGlzW1JPV19FTEVNRU5UXTtcclxuXHJcblx0XHREb20uc2V0U3R5bGUocm93RWxlbWVudCwgTUVOVV9JVEVNX1JPV19TVFlMRV9ERUZBVUxUKTtcclxuXHRcdERvbS5hZGRFdmVudExpc3RlbmVyKHJvd0VsZW1lbnQsICdtb3VzZW92ZXInLCAoKSA9PiB7XHJcblx0XHRcdERvbS5kaXNwYXRjaEV2ZW50KHJvd0VsZW1lbnQsIERvbS5jcmVhdGVFdmVudCgnLWZvY3VzJywgdGhpcykpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRbUkVTRVRdKCkge1xyXG5cdFx0RG9tLnNldFN0eWxlKHRoaXNbUk9XX0VMRU1FTlRdLCBNRU5VX0lURU1fUk9XX1NUWUxFX0RFRkFVTFQpO1xyXG5cdFx0RG9tLnJlbW92ZUNsYXNzKHRoaXNbUk9XX0VMRU1FTlRdLCAnZm9jdXMnKTtcclxuXHRcdHRoaXNbRk9DVVNJTkddID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRbRk9DVVNdKCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ2ZvY3VzaW5nJywgdGhpc1tGT0NVU0lOR10pO1xyXG5cclxuXHRcdGlmICh0aGlzW0ZPQ1VTSU5HXSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0RG9tLnNldFN0eWxlKHRoaXNbUk9XX0VMRU1FTlRdLCBNRU5VX0lURU1fUk9XX1NUWUxFX09OX0ZPQ1VTKTtcclxuXHRcdERvbS5hZGRDbGFzcyh0aGlzW1JPV19FTEVNRU5UXSwgJ2ZvY3VzJyk7XHJcblx0XHR0aGlzW0ZPQ1VTSU5HXSA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRbRElTQUJMRV0oKSB7XHJcblx0XHREb20uc2V0U3R5bGUodGhpc1tST1dfRUxFTUVOVF0sIE1FTlVfSVRFTV9ST1dfU1RZTEVfT05fRElTQUJMRUQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBEb20gZnJvbSAnZG9tJztcclxuaW1wb3J0IHsgRnVuY3Rpb25NZW51SXRlbSwgTUVOVV9JVEVNX0xBQkVMX1NQQU5fU1RZTEUgfSBmcm9tICcuL0Z1bmN0aW9uJztcclxuaW1wb3J0IHsgUk9XX0VMRU1FTlQsIFRFWFRfRUxFTUVOVCB9IGZyb20gJy4vQmFzZSc7XHJcbmltcG9ydCB7IE1FTlVfSVRFTV9JQ09OX0JPWF9TVFlMRSwgVmFyIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBWQVIgZnJvbSAnLi4vdmFycyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0xJQ0sgPSAnYyc7XHJcblxyXG5jb25zdCBDSEVDS0lOR19QT1NJVElPTl9TVFlMRSA9IHtcclxuXHR0b3A6IDAsXHJcblx0bGVmdDogMFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIENsaWNrYWJsZU1lbnVJdGVtIGV4dGVuZHMgRnVuY3Rpb25NZW51SXRlbSB7XHJcblx0Y29uc3RydWN0b3IobWVudUl0ZW0pIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0Y29uc3QgdGV4dEVsZW1lbnQgPSB0aGlzW1RFWFRfRUxFTUVOVF07XHJcblx0XHRjb25zdCBhY2NlbGVyYXRvclNwYW4gPSBEb20uY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdFx0Y29uc3QgY2hlY2tib3hTcGFuID0gRG9tLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcblx0XHREb20uYWRkQ2xhc3MoYWNjZWxlcmF0b3JTcGFuLCAnbWVudS1pdGVtLWFjY2VsZXJhdG9yJyk7XHJcblx0XHREb20uYWRkQ2xhc3MoY2hlY2tib3hTcGFuLCAnbWVudS1pdGVtLWNoZWNrYm94Jyk7XHJcblx0XHREb20uc2V0U3R5bGUoYWNjZWxlcmF0b3JTcGFuLCBNRU5VX0lURU1fTEFCRUxfU1BBTl9TVFlMRSk7XHJcblx0XHREb20uc2V0U3R5bGUoY2hlY2tib3hTcGFuLCBNRU5VX0lURU1fSUNPTl9CT1hfU1RZTEUsIENIRUNLSU5HX1BPU0lUSU9OX1NUWUxFKTtcclxuXHRcdERvbS5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCwgYWNjZWxlcmF0b3JTcGFuKTtcclxuXHRcdERvbS5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCwgY2hlY2tib3hTcGFuKTtcclxuXHJcblx0XHREb20uYWRkRXZlbnRMaXN0ZW5lcih0aGlzW1JPV19FTEVNRU5UXSwgJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHREb20uZGlzcGF0Y2hFdmVudChEb20uV0lORE9XLCBEb20uY3JlYXRlRXZlbnQoJ21lbnU6Oi1jbG9zZScpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBEb20gZnJvbSAnZG9tJztcclxuaW1wb3J0IHsgQmFzZU1lbnVJdGVtLCBURVhUX0VMRU1FTlQsIFJPV19FTEVNRU5UIH0gZnJvbSAnLi9CYXNlJztcclxuaW1wb3J0IHsgVmFyIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBWQVIgZnJvbSAnLi4vdmFycyc7XHJcblxyXG5jb25zdCBTUEVBUkFUT1JfTUVOVV9JVEVNX1NUWUxFID0ge1xyXG5cdGRpc3BsYXk6ICdibG9jaycsXHJcblx0J2JvcmRlci1ib3R0b20td2lkdGgnOiAnMXB4JyxcclxuXHQnYm9yZGVyLWJvdHRvbS1zdHlsZSc6ICdzb2xpZCcsXHJcblx0J2JvcmRlci1ib3R0b20tY29sb3InOiBWYXIoVkFSLlNQRUFSQVRPUl9DT0xPUiksXHJcblx0J21hcmdpbic6IGAke1ZhcihWQVIuV0hJVEVTUEFDRV9ZKX0gJHtWYXIoVkFSLlNQRUFSQVRPUl9XSElURVNQQUNFX1gpfWAsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgU3BlYXJhdG9yTWVudUl0ZW0gZXh0ZW5kcyBCYXNlTWVudUl0ZW0ge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRjb25zdCByb3dFbGVtZW50ID0gdGhpc1tST1dfRUxFTUVOVF07XHJcblxyXG5cdFx0RG9tLnNldFN0eWxlKHRoaXNbVEVYVF9FTEVNRU5UXSwgU1BFQVJBVE9SX01FTlVfSVRFTV9TVFlMRSk7XHJcblx0XHREb20uYWRkRXZlbnRMaXN0ZW5lcihyb3dFbGVtZW50LCAnbW91c2VvdmVyJywgKCkgPT4ge1xyXG5cdFx0XHREb20uZGlzcGF0Y2hFdmVudChyb3dFbGVtZW50LCBEb20uY3JlYXRlRXZlbnQoJy1jbGVhci1mb2N1cycsIHRoaXMpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGlzKGFueSkge1xyXG5cdFx0cmV0dXJuIGFueSBpbnN0YW5jZW9mIHRoaXM7XHJcblx0fVxyXG59IiwiaW1wb3J0ICogYXMgRG9tIGZyb20gJ2RvbSc7XHJcbmltcG9ydCAqIGFzIFZBUiBmcm9tICcuL3ZhcnMnO1xyXG5pbXBvcnQgeyBWYXIgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgUk9XX0VMRU1FTlQgfSBmcm9tICcuL01lbnVJdGVtL0Jhc2UnO1xyXG5pbXBvcnQgeyBGT0NVUywgUkVTRVQgfSBmcm9tICcuL01lbnVJdGVtL0Z1bmN0aW9uJztcclxuaW1wb3J0IHsgU3BlYXJhdG9yTWVudUl0ZW0gfSBmcm9tICcuL01lbnVJdGVtL1NwZWFyYXRvcic7XHJcblxyXG5jb25zdCBNRU5VX1NUWUxFID0ge1xyXG5cdGRpc3BsYXk6ICdibG9jaycsXHJcblx0cG9zaXRpb246ICdmaXhlZCcsXHJcblx0bWFyZ2luOiAnMCcsXHJcblx0cGFkZGluZzogYCR7VmFyKFZBUi5XSElURVNQQUNFX1kpfSAwYCxcclxuXHQnZm9udC1zaXplJzogJzEycHgnLFxyXG5cdCd3aGl0ZS1zcGFjZSc6ICdub3dyYXAnLFxyXG5cdCdib3JkZXItd2lkdGgnOiAnMXB4JyxcclxuXHQnYm9yZGVyLXN0eWxlJzogJ3NvbGlkJyxcclxuXHQnbGluZS1oZWlnaHQnOiBWYXIoVkFSLkZVTkNUSU9OX0lURU1fSEVJR0hUKSxcclxuXHQnYm9yZGVyLWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcclxuXHQnYmFja2dyb3VuZC1jb2xvcic6IFZhcihWQVIuQkFDS0dST1VORF9DT0xPUiksXHJcblx0J2NvbG9yJzogVmFyKFZBUi5GUk9OVEdST1VORF9DT0xPUiksXHJcblx0J3VzZXItc2VsZWN0JzogJ25vbmUnLFxyXG5cdCdvcGFjaXR5JzogMCxcclxuXHQndHJhbnNpdGlvbi1wcm9wZXJ0eSc6ICdvcGFjaXR5JyxcclxuXHQndHJhbnNpdGlvbi1kdXJhdGlvbic6ICcwLjNzJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0XHJcblx0TUVOVV9FTEVNRU5UID0gJ2UnLFxyXG5cdElURU1fQ09NUE9ORU5UX0xJU1QgPSAnbCcsXHJcblx0T1BFTiA9ICdzJyxcclxuXHRDTE9TRSA9ICdjJyxcclxuXHRDTE9TSU5HX0xJU1RFTkVSID0gJ0MnLFxyXG5cdEFQUEVORCA9ICdhJyxcclxuXHRGT0NVU19ORVhUID0gJ24nLFxyXG5cdEZPQ1VTX1BSRVZJT1VTID0gJ3AnLFxyXG5cdEtFRVBJTkcgPSAnaycsXHJcblx0Q0xFQVJfRk9DVVMgPSAnY0YnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnUge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Y29uc3QgbWVudSA9IHRoaXM7XHJcblx0XHRjb25zdCBtZW51RWxlbWVudCA9IERvbS5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cdFx0Y29uc3QgaXRlbUNvbXBvbmVudExpc3QgPSBbXTtcclxuXHJcblx0XHREb20uc2V0U3R5bGUobWVudUVsZW1lbnQsIE1FTlVfU1RZTEUpO1xyXG5cdFx0RG9tLmFkZENsYXNzKG1lbnVFbGVtZW50LCAnbWVudScpO1xyXG5cclxuXHRcdHRoaXNbSVRFTV9DT01QT05FTlRfTElTVF0gPSBpdGVtQ29tcG9uZW50TGlzdDtcclxuXHRcdHRoaXNbTUVOVV9FTEVNRU5UXSA9IG1lbnVFbGVtZW50O1xyXG5cdFx0dGhpc1tLRUVQSU5HXSA9IGZhbHNlO1xyXG5cdFx0dGhpc1tDTE9TSU5HX0xJU1RFTkVSXSA9ICgpID0+IHRoaXNbQ0xPU0VdKCk7XHJcblxyXG5cdFx0RG9tLmFkZEV2ZW50TGlzdGVuZXIobWVudUVsZW1lbnQsICctZm9jdXMnLCBldmVudCA9PiB7XHJcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRtZW51W0tFRVBJTkddID0gZmFsc2U7XHJcblx0XHRcdHRoaXNbQ0xFQVJfRk9DVVNdKGV2ZW50LmRhdGEpO1xyXG5cdFx0XHRldmVudC5kYXRhW0ZPQ1VTXSgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0RG9tLmFkZEV2ZW50TGlzdGVuZXIobWVudUVsZW1lbnQsICdtb3VzZWxlYXZlJywgKCkgPT4gdGhpc1tDTEVBUl9GT0NVU10oKSk7XHJcblx0XHREb20uYWRkRXZlbnRMaXN0ZW5lcihtZW51RWxlbWVudCwgJy1jbGVhci1mb2N1cycsICgpID0+IHRoaXNbQ0xFQVJfRk9DVVNdKCkpO1xyXG5cdFx0RG9tLmFkZEV2ZW50TGlzdGVuZXIobWVudUVsZW1lbnQsICcta2VlcGluZycsICgpID0+IHRoaXNbS0VFUElOR10gPSB0cnVlKTtcclxuXHR9XHJcblxyXG5cdFtDTEVBUl9GT0NVU10oZXhjbHVkZSA9IG51bGwpIHtcclxuXHRcdGlmICh0aGlzW0tFRVBJTkddKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzW0lURU1fQ09NUE9ORU5UX0xJU1RdXHJcblx0XHRcdC5maWx0ZXIoaXRlbSA9PiAhU3BlYXJhdG9yTWVudUl0ZW0uaXMoaXRlbSkgJiYgaXRlbSAhPT0gZXhjbHVkZSlcclxuXHRcdFx0LmZvckVhY2goaXRlbUNvbXBvbmVudCA9PiBpdGVtQ29tcG9uZW50W1JFU0VUXSgpKTtcclxuXHR9XHJcblxyXG5cdFtPUEVOXSgpIHtcclxuXHRcdERvbS5hcHBlbmRDaGlsZChEb20uRE9DVU1FTlQuYm9keSwgdGhpc1tNRU5VX0VMRU1FTlRdKTtcclxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBEb20uc2V0U3R5bGUodGhpc1tNRU5VX0VMRU1FTlRdLCB7IG9wYWNpdHk6IDEgfSkpO1xyXG5cdFx0RG9tLmFkZEV2ZW50TGlzdGVuZXIoRG9tLldJTkRPVywgJ21lbnU6Oi1jbG9zZScsIHRoaXNbQ0xPU0lOR19MSVNURU5FUl0pO1xyXG5cdH1cclxuXHJcblx0W0NMT1NFXSgpIHtcclxuXHRcdHRoaXNbS0VFUElOR10gPSBmYWxzZTtcclxuXHRcdERvbS5yZW1vdmVDaGlsZChEb20uRE9DVU1FTlQuYm9keSwgdGhpc1tNRU5VX0VMRU1FTlRdKTtcclxuXHRcdERvbS5zZXRTdHlsZSh0aGlzW01FTlVfRUxFTUVOVF0sIHsgb3BhY2l0eTogMCB9KTtcclxuXHRcdERvbS5yZW1vdmVFdmVudExpc3RlbmVyKERvbS5XSU5ET1csICdtZW51OjotY2xvc2UnLCB0aGlzW0NMT1NJTkdfTElTVEVORVJdKTtcclxuXHRcdHRoaXNbQ0xFQVJfRk9DVVNdKCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge2ltcG9ydCgnLi9NZW51SXRlbScpLk1lbnVJdGVtfSBpdGVtQ29tcG9uZW50XHJcblx0ICovXHJcblx0W0FQUEVORF0oaXRlbUNvbXBvbmVudCkge1xyXG5cdFx0dGhpc1tJVEVNX0NPTVBPTkVOVF9MSVNUXS5wdXNoKGl0ZW1Db21wb25lbnQpO1xyXG5cdFx0RG9tLmFwcGVuZENoaWxkKHRoaXNbTUVOVV9FTEVNRU5UXSwgaXRlbUNvbXBvbmVudFtST1dfRUxFTUVOVF0pO1xyXG5cdH1cclxuXHJcblx0W0ZPQ1VTX05FWFRdKGZsYWcgPSBudWxsKSB7XHJcblxyXG5cdH1cclxuXHJcblx0W0ZPQ1VTX1BSRVZJT1VTXShmbGFnID0gbnVsbCkge1xyXG5cclxuXHR9XHJcbn0iLCJpbXBvcnQgKiBhcyBEb20gZnJvbSAnZG9tJztcclxuaW1wb3J0IHsgRnVuY3Rpb25NZW51SXRlbSwgRk9DVVMsIFJFU0VUIH0gZnJvbSAnLi9GdW5jdGlvbic7XHJcbmltcG9ydCB7IFJPV19FTEVNRU5ULCBURVhUX0VMRU1FTlQgfSBmcm9tICcuL0Jhc2UnO1xyXG5pbXBvcnQgeyBNRU5VX0lURU1fSUNPTl9CT1hfU1RZTEUgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IENMT1NFLCBPUEVOIH0gZnJvbSAnLi4vTWVudSc7XHJcblxyXG5jb25zdCBJQ09OX1BPU0lUSU9OX1NUWUxFID0ge1xyXG5cdHJpZ2h0OiAwLFxyXG5cdHRvcDogMFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNVQl9NRU5VID0gJ3NtJywgSVNfRVhQQU5ESU5HID0gJ3AnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN1Ym1lbnVNZW51SXRlbSBleHRlbmRzIEZ1bmN0aW9uTWVudUl0ZW0ge1xyXG5cdGNvbnN0cnVjdG9yKG1lbnUpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzKTtcclxuXHJcblx0XHRjb25zdCBleHBhbmRpbmdTcGFuID0gRG9tLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcblx0XHREb20uc2V0U3R5bGUoZXhwYW5kaW5nU3BhbiwgTUVOVV9JVEVNX0lDT05fQk9YX1NUWUxFLCBJQ09OX1BPU0lUSU9OX1NUWUxFKTtcclxuXHRcdERvbS5hZGRDbGFzcyhleHBhbmRpbmdTcGFuLCAnbWVudS1pdGVtLWV4cGFuZGluZycpO1xyXG5cdFx0RG9tLmFwcGVuZENoaWxkKHRoaXNbVEVYVF9FTEVNRU5UXSwgZXhwYW5kaW5nU3Bhbik7XHJcblxyXG5cdFx0dGhpc1tTVUJfTUVOVV0gPSBtZW51O1xyXG5cdFx0dGhpc1tJU19FWFBBTkRJTkddID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRbRk9DVVNdKCkge1xyXG5cdFx0c3VwZXJbRk9DVVNdKCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2codGhpc1tJU19FWFBBTkRJTkddKTtcclxuXHJcblx0XHRpZiAodGhpc1tJU19FWFBBTkRJTkddKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzW0lTX0VYUEFORElOR10gPSB0cnVlO1xyXG5cdFx0dGhpc1tTVUJfTUVOVV1bT1BFTl0oKTtcclxuXHRcdERvbS5kaXNwYXRjaEV2ZW50KHRoaXNbUk9XX0VMRU1FTlRdLCBEb20uY3JlYXRlRXZlbnQoJy1rZWVwaW5nJywgdGhpcykpO1xyXG5cdH1cclxuXHJcblx0W1JFU0VUXSgpIHtcclxuXHRcdHN1cGVyW1JFU0VUXSgpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKHRoaXNbSVNfRVhQQU5ESU5HXSk7XHJcblxyXG5cdFx0aWYgKHRoaXNbSVNfRVhQQU5ESU5HXSkge1xyXG5cdFx0XHR0aGlzW1NVQl9NRU5VXVtDTE9TRV0oKTtcclxuXHRcdFx0dGhpc1tJU19FWFBBTkRJTkddID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4iLCJpbXBvcnQgJy4uL3RoZW1lL2RlZmF1bHQuY3NzJztcclxuXHJcbmltcG9ydCB7IE1lbnUsIENsaWNrYWJsZU1lbnVJdGVtLCBTdWJtZW51TWVudUl0ZW0sIFNwZWFyYXRvck1lbnVJdGVtLCBTSE9XLCBBUFBFTkQsIE1FTlVfRUxFTUVOVCB9IGZyb20gJy4uL3NyYy9Db21wb25lbnQvaW5kZXgnO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgbWVudSA9IG5ldyBNZW51KCk7XHJcblx0Y29uc3QgbWVudTIgPSBuZXcgTWVudSgpO1xyXG5cclxuXHQvKipcclxuXHQgKiBsZXZlbCAxXHJcblx0ICovXHJcblx0Y29uc3QgY2xpY2szID0gbmV3IENsaWNrYWJsZU1lbnVJdGVtKCk7XHJcblx0Y29uc3Qgc3BsaXQxID0gbmV3IFNwZWFyYXRvck1lbnVJdGVtKCk7XHJcblx0Y29uc3QgY2xpY2s0ID0gbmV3IENsaWNrYWJsZU1lbnVJdGVtKCk7XHJcblxyXG5cdG1lbnUyW0FQUEVORF0oY2xpY2szKTtcclxuXHRtZW51MltBUFBFTkRdKHNwbGl0MSk7XHJcblx0bWVudTJbQVBQRU5EXShjbGljazQpO1xyXG5cclxuXHQvKipcclxuXHQgKiBsZXZlbCByb290XHJcblx0ICovXHJcblx0Y29uc3QgY2xpY2sgPSBuZXcgQ2xpY2thYmxlTWVudUl0ZW0oKTtcclxuXHRjb25zdCBzdWIgPSBuZXcgU3VibWVudU1lbnVJdGVtKG1lbnUyKTtcclxuXHRjb25zdCBjbGljazIgPSBuZXcgQ2xpY2thYmxlTWVudUl0ZW0oKTtcclxuXHRjb25zdCBzcGxpdCA9IG5ldyBTcGVhcmF0b3JNZW51SXRlbSgpO1xyXG5cclxuXHRtZW51W0FQUEVORF0oY2xpY2spO1xyXG5cdG1lbnVbQVBQRU5EXShzdWIpO1xyXG5cdG1lbnVbQVBQRU5EXShzcGxpdCk7XHJcblx0bWVudVtBUFBFTkRdKGNsaWNrMik7XHJcblxyXG5cdG1lbnVbTUVOVV9FTEVNRU5UXS5zdHlsZS5taW5XaWR0aCA9ICcyMDBweCc7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIGV2ZW50ID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRtZW51W1NIT1ddKCk7XHJcblx0XHRjb25zb2xlLmxvZyhtZW51KTtcclxuXHR9KTtcclxufSk7Il0sIm5hbWVzIjpbImNzcyIsInJlZiIsImluc2VydEF0IiwiZG9jdW1lbnQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjcmVhdGVUZXh0Tm9kZSIsIkRPQ1VNRU5UIiwiV0lORE9XIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImVsZW1lbnQiLCJldmVudFR5cGUiLCJsaXN0ZW5lciIsInRhZ05hbWUiLCJzZXRTdHlsZSIsInJ1bGVPYmplY3RMaXN0IiwicnVsZU9iamVjdCIsInByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJwYXJlbnRFbGVtZW50IiwiYWRkQ2xhc3MiLCJ0b2tlbnMiLCJjbGFzc0xpc3QiLCJhZGQiLCJjcmVhdGVFdmVudCIsImRhdGEiLCJldmVudCIsIkV2ZW50IiwiYnViYmxlcyIsImRpc3BhdGNoRXZlbnQiLCJNRU5VX0lURU1fUk9XX1NUWUxFIiwiZGlzcGxheSIsInBvc2l0aW9uIiwiYm94LXNpemluZyIsImJvcmRlci13aWR0aCIsImJvcmRlci1jb2xvciIsIk1FTlVfSVRFTV9URVhUX1NUWUxFIiwiQmFzZU1lbnVJdGVtIiwiW29iamVjdCBPYmplY3RdIiwicm93RWxlbWVudCIsIkRvbS5jcmVhdGVFbGVtZW50IiwidGV4dEVsZW1lbnQiLCJEb20uYXBwZW5kQ2hpbGQiLCJEb20uc2V0U3R5bGUiLCJEb20uYWRkQ2xhc3MiLCJ0aGlzIiwiRlVOQ1RJT05fSVRFTV9IRUlHSFQiLCJGVU5DVElPTl9JVEVNX1dISVRFU1BBQ0UiLCJGUk9OVEdST1VORF9DT0xPUiIsIldISVRFU1BBQ0VfWSIsIlZhciIsIm5hbWVzcGFjZSIsIm5hbWUiLCJNRU5VX0lURU1fSUNPTl9CT1hfU1RZTEUiLCJoZWlnaHQiLCJ3aWR0aCIsIlZBUi5GVU5DVElPTl9JVEVNX1dISVRFU1BBQ0UiLCJGT0NVUyIsIlJFU0VUIiwiTUVOVV9JVEVNX1JPV19TVFlMRV9ERUZBVUxUIiwiY3Vyc29yIiwiY29sb3IiLCJWQVIuRlJPTlRHUk9VTkRfQ09MT1IiLCJiYWNrZ3JvdW5kLWNvbG9yIiwiTUVOVV9JVEVNX1JPV19TVFlMRV9PTl9GT0NVUyIsIk1FTlVfSVRFTV9ST1dfU1RZTEVfT05fRElTQUJMRUQiLCJWQVIuRlVOQ1RJT05fSVRFTV9IRUlHSFQiLCJJQ09OX1NQQU5fU1RZTEUiLCJNRU5VX0lURU1fTEFCRUxfU1BBTl9TVFlMRSIsImZsZXgtZ3JvdyIsInBhZGRpbmciLCJGdW5jdGlvbk1lbnVJdGVtIiwibGFiZWwiLCJpY29uIiwic3VwZXIiLCJsYWJlbFNwYW4iLCJpY29uU3BhbiIsImlubmVyVGV4dCIsIkRvbS5hZGRFdmVudExpc3RlbmVyIiwiRG9tLmRpc3BhdGNoRXZlbnQiLCJEb20uY3JlYXRlRXZlbnQiLCJyZW1vdmUiLCJEb20ucmVtb3ZlQ2xhc3MiLCJjb25zb2xlIiwibG9nIiwiQ0hFQ0tJTkdfUE9TSVRJT05fU1RZTEUiLCJ0b3AiLCJsZWZ0IiwiQ2xpY2thYmxlTWVudUl0ZW0iLCJtZW51SXRlbSIsImFjY2VsZXJhdG9yU3BhbiIsImNoZWNrYm94U3BhbiIsIkRvbS5XSU5ET1ciLCJTUEVBUkFUT1JfTUVOVV9JVEVNX1NUWUxFIiwiYm9yZGVyLWJvdHRvbS13aWR0aCIsImJvcmRlci1ib3R0b20tc3R5bGUiLCJib3JkZXItYm90dG9tLWNvbG9yIiwibWFyZ2luIiwiVkFSLldISVRFU1BBQ0VfWSIsIlNwZWFyYXRvck1lbnVJdGVtIiwiYW55IiwiTUVOVV9TVFlMRSIsImZvbnQtc2l6ZSIsIndoaXRlLXNwYWNlIiwiYm9yZGVyLXN0eWxlIiwibGluZS1oZWlnaHQiLCJ1c2VyLXNlbGVjdCIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uLXByb3BlcnR5IiwidHJhbnNpdGlvbi1kdXJhdGlvbiIsIkFQUEVORCIsIkNMRUFSX0ZPQ1VTIiwiTWVudSIsIm1lbnUiLCJtZW51RWxlbWVudCIsInN0b3BQcm9wYWdhdGlvbiIsImV4Y2x1ZGUiLCJmaWx0ZXIiLCJpdGVtIiwiaXMiLCJmb3JFYWNoIiwiaXRlbUNvbXBvbmVudCIsIkRvbS5ET0NVTUVOVCIsImJvZHkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJEb20ucmVtb3ZlRXZlbnRMaXN0ZW5lciIsInB1c2giLCJmbGFnIiwiSUNPTl9QT1NJVElPTl9TVFlMRSIsInJpZ2h0IiwiU3VibWVudU1lbnVJdGVtIiwiZXhwYW5kaW5nU3BhbiIsIm1lbnUyIiwiY2xpY2szIiwic3BsaXQxIiwiY2xpY2s0IiwiY2xpY2siLCJzdWIiLCJjbGljazIiLCJzcGxpdCIsIm1pbldpZHRoIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiJpWEFBQSxTQUFxQkEsRUFBS0MsUUFDWCxJQUFSQSxJQUFpQkEsRUFBTSxJQUM1QixJQUFJQyxFQUFXRCxFQUFJQyxTQUVuQixHQUFLRixHQUEyQixvQkFBYkcsU0FBbkIsQ0FFQSxJQUFJQyxFQUFPRCxTQUFTQyxNQUFRRCxTQUFTRSxxQkFBcUIsUUFBUSxHQUM5REMsRUFBUUgsU0FBU0ksY0FBYyxTQUNuQ0QsRUFBTUUsS0FBTyxXQUVJLFFBQWJOLEdBQ0VFLEVBQUtLLFdBQ1BMLEVBQUtNLGFBQWFKLEVBQU9GLEVBQUtLLFlBS2hDTCxFQUFLTyxZQUFZTCxHQUdmQSxFQUFNTSxXQUNSTixFQUFNTSxXQUFXQyxRQUFVYixFQUUzQk0sRUFBTUssWUFBWVIsU0FBU1csZUFBZWQseWtCQ3ZCdkMsTUFBTWUsRUFBV1osU0FBVWEsRUFBU0MsT0FPcEMsU0FBU0MsRUFBaUJDLEVBQVNDLEVBQVdDLEdBQ3BERixFQUFRRCxpQkFBaUJFLEVBQVdDLEdBMkI5QixTQUFT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
