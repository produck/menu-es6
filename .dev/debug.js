!function(t,e){t.getElementById("livereloadscript")||((e=t.createElement("script")).async=1,e.src="//"+(window.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",e.id="livereloadscript",t.getElementsByTagName("head")[0].appendChild(e))}(window.document),function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";!function(t,e){void 0===e&&(e={});var o=e.insertAt;if(t&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}(":root {\r\n\t--menu-function-item-height: 26px;\r\n\t--menu-function-item-whitespace: 26px;\r\n\r\n\t--menu-background-color: #999;\r\n\t--menu-frontground-color: #DDD;\r\n\t--menu-active-background-color: #66F;\r\n\t--menu-active-frontground-color: #fff;\r\n\t--menu-disabled-background-color: 'transparent';\r\n\t--menu-disabled-frontground-color: #999;\r\n\r\n\t--menu-outline-color: #000;\r\n\r\n\t--menu-spearator-color: #ccc;\r\n\t--menu-spearator-whitespace-x: 13px;\r\n\t--menu-spearator-whitespace-y: 5px;\r\n\t--menu-whitespace: 8px;\r\n}");const t=document;function e(t,e,o){t.addEventListener(e,o)}function o(e){return t.createElement(e)}function n(t,...e){for(const o of e)for(const e in o)t.style.setProperty(e,o[e])}function r(t,e){t.className=e}function s(t,e){t.appendChild(e)}function i(t,...e){t.classList.add(...e)}function c(t,e=null){const o=new Event(t,{bubbles:!0});return o.data=e,o}const a={display:"block",position:"static","box-sizing":"border-box","border-width":"1px","border-color":"transparent",cursor:"pointer"},l={position:"relative",display:"flex"};class d{constructor(){const t=o("li"),e=o("a");s(t,e),n(t,a),n(e,l),r(t,"menu-item"),this[0]=t,this[1]=e}}const u="function-item-height",p="function-item-whitespace",h="frontground-color",m="spearator-whitespace-x",f="spearator-whitespace-y";const b=(g="menu",function(t){return`var(--${g}-${t})`});var g;const x={position:"absolute",height:"100%",width:b(p)},w={color:b(h),"background-color":"transparent"},v={color:b("active-frontground-color"),"background-color":b("active-background-color")},y={color:b("disabled-frontground-color"),"background-color":"transparent"},k={height:b(u)},E={display:"none"},C={"flex-grow":"1",padding:`0 ${b(p)}`};class T extends d{constructor(){super();const t=this[1],i=o("span"),a=o("span");r(i,"menu-item-label"),r(a,"menu-item-icon"),n(i,C),n(t,k),n(a,E),s(t,a),s(t,i),this[3]=i,i.innerText="Text 4 test";const l=this[0];e(l,"mouseover",(()=>{l.dispatchEvent(c("-focus",this))})),this[5]()}5(){n(this[0],w),function(t,...e){t.classList.remove(...e)}(this[0],"focus")}4(){n(this[0],v),i(this[0],"focus")}6(){n(this[0],y)}}const B={top:0,left:0};class L extends T{constructor(t){super();const i=this[1],c=o("span"),a=o("span");r(c,"menu-item-accelerator"),r(a,"menu-item-checkbox"),n(c,C),n(a,x,B),s(i,c),s(i,a),e(this[0],"click",(()=>{}))}}const N={right:0,top:0};class $ extends T{constructor(){super();const t=o("span");n(t,x,N),i(t,"menu-item-expanding"),s(this[1],t)}}const D={display:"block","border-bottom-width":"1px","border-bottom-style":"solid","border-bottom-color":b("spearator-color"),"margin-left":b(m),"margin-right":b(m),"margin-top":b(f),"margin-bottom":b(f)};class z extends d{constructor(){super();const t=this[0];n(this[1],D),e(t,"mouseover",(()=>{t.dispatchEvent(c("-clear-focus",this))}))}}const P={display:"block",position:"fixed",margin:"0",padding:`${b("whitespace")} 0`,"font-size":"12px","white-space":"nowrap","border-width":"1px","border-style":"solid","line-height":b(u),"border-color":"transparent","background-color":b("background-color"),color:b(h),"user-select":"none"},S="a";class j{constructor(){const t=o("ul"),s=[];function i(){s.filter((t=>!(t instanceof z))).forEach((t=>t[5]()))}n(t,P),r(t,"menu"),this.l=s,this.e=t,e(t,"-focus",(t=>{t.stopPropagation(),i(),t.data[4]()})),e(t,"mouseleave",i),e(t,"-clear-focus",i)}s(){s(t.body,this.e)}c(){var e,o;e=t.body,o=this.e,e.removeChild(o)}[S](t){this.l.push(t),s(this.e,t[0])}n(t=null){}p(t=null){}}window.addEventListener("load",(function(){const t=new j,e=new L,o=new $,n=new z;t.a(e),t.a(o),t.a(n),t.e.style.minWidth="200px",t.s()}))}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVidWcuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi9saWIvZG9tLmpzIiwiLi4vc3JjL0NvbXBvbmVudC9NZW51SXRlbS5qcyIsIi4uL3NyYy9Db21wb25lbnQvdmFycy5qcyIsIi4uL3NyYy9Db21wb25lbnQvdXRpbHMuanMiLCIuLi9zcmMvQ29tcG9uZW50L2Nzcy5qcyIsIi4uL3NyYy9Db21wb25lbnQvRnVuY3Rpb25NZW51SXRlbS5qcyIsIi4uL3NyYy9Db21wb25lbnQvQ2xpY2thYmxlTWVudUl0ZW0uanMiLCIuLi9zcmMvQ29tcG9uZW50L1N1Ym1lbnVNZW51SXRlbS5qcyIsIi4uL3NyYy9Db21wb25lbnQvU3BlYXJhdG9yTWVudUl0ZW0uanMiLCIuLi9zcmMvQ29tcG9uZW50L01lbnUuanMiLCIuLi9leGFtcGxlL2RlYnVnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVJbmplY3Q7XG4iLCJleHBvcnQgY29uc3QgRE9DVU1FTlQgPSBkb2N1bWVudCwgV0lORE9XID0gd2luZG93O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxyXG4gKiBAcGFyYW0ge0V2ZW50TGlzdGVuZXJ9IGxpc3RlbmVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbGVtZW50LCBldmVudFR5cGUsIGxpc3RlbmVyKSB7XHJcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbGlzdGVuZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihlbGVtZW50LCBldmVudFR5cGUsIGxpc3RlbmVyKSB7XHJcblx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbGlzdGVuZXIpO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkKGVsZW1lbnQpIHtcclxuXHRyZXR1cm4gQXJyYXlcclxuXHRcdC5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pXHJcblx0XHQubWFwKGNoaWxkRWxlbWVudCA9PiByZW1vdmVDaGlsZChlbGVtZW50LCBjaGlsZEVsZW1lbnQpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGcm9tUGFyZW50KGVsZW1lbnQpIHtcclxuXHRyZXR1cm4gcmVtb3ZlQ2hpbGQoZWxlbWVudC5wYXJlbnRFbGVtZW50LCBlbGVtZW50KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lXHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZ05hbWUpIHtcclxuXHRyZXR1cm4gRE9DVU1FTlQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICogQHBhcmFtIHtvYmplY3R9IHJ1bGVPYmplY3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50LCAuLi5ydWxlT2JqZWN0TGlzdCkge1xyXG5cdGZvciAoY29uc3QgcnVsZU9iamVjdCBvZiBydWxlT2JqZWN0TGlzdCkge1xyXG5cdFx0Zm9yIChjb25zdCBwcm9wZXJ0eSBpbiBydWxlT2JqZWN0KSB7XHJcblx0XHRcdGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHJ1bGVPYmplY3RbcHJvcGVydHldKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2xhc3NOYW1lKGVsZW1lbnQsIG5hbWUpIHtcclxuXHRlbGVtZW50LmNsYXNzTmFtZSA9IG5hbWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRFbGVtZW50XHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDaGlsZChwYXJlbnRFbGVtZW50LCBlbGVtZW50KSB7XHJcblx0cGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudEVsZW1lbnRcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNoaWxkKHBhcmVudEVsZW1lbnQsIGVsZW1lbnQpIHtcclxuXHRwYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gKiBAcGFyYW0gIHsuLi5zdHJpbmd9IHRva2Vuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIC4uLnRva2Vucykge1xyXG5cdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi50b2tlbnMpO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gKiBAcGFyYW0gIHsuLi5zdHJpbmd9IHRva2Vuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIC4uLnRva2Vucykge1xyXG5cdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi50b2tlbnMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXZlbnQoZXZlbnRUeXBlLCBkYXRhID0gbnVsbCkge1xyXG5cdGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50VHlwZSwgeyBidWJibGVzOiB0cnVlIH0pO1xyXG5cclxuXHRldmVudC5kYXRhID0gZGF0YTtcclxuXHJcblx0cmV0dXJuIGV2ZW50O1xyXG59IiwiaW1wb3J0ICogYXMgRG9tIGZyb20gJ2RvbSc7XHJcblxyXG5leHBvcnQgY29uc3QgUk9XX0VMRU1FTlQgPSAweDAwLCBURVhUX0VMRU1FTlQgPSAweDAxO1xyXG5cclxuY29uc3QgTUVOVV9JVEVNX1JPV19TVFlMRSA9IHtcclxuXHRkaXNwbGF5OiAnYmxvY2snLFxyXG5cdHBvc2l0aW9uOiAnc3RhdGljJyxcclxuXHQnYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcclxuXHQnYm9yZGVyLXdpZHRoJzogJzFweCcsXHJcblx0J2JvcmRlci1jb2xvcic6ICd0cmFuc3BhcmVudCcsXHJcblx0J2N1cnNvcic6ICdwb2ludGVyJ1xyXG59O1xyXG5cclxuY29uc3QgTUVOVV9JVEVNX1RFWFRfU1RZTEUgPSB7XHJcblx0cG9zaXRpb246ICdyZWxhdGl2ZScsXHJcblx0ZGlzcGxheTogJ2ZsZXgnXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudUl0ZW0ge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Y29uc3Qgcm93RWxlbWVudCA9IERvbS5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cdFx0Y29uc3QgdGV4dEVsZW1lbnQgPSBEb20uY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuXHRcdERvbS5hcHBlbmRDaGlsZChyb3dFbGVtZW50LCB0ZXh0RWxlbWVudCk7XHJcblx0XHREb20uc2V0U3R5bGUocm93RWxlbWVudCwgTUVOVV9JVEVNX1JPV19TVFlMRSk7XHJcblx0XHREb20uc2V0U3R5bGUodGV4dEVsZW1lbnQsIE1FTlVfSVRFTV9URVhUX1NUWUxFKTtcclxuXHRcdERvbS5zZXRDbGFzc05hbWUocm93RWxlbWVudCwgJ21lbnUtaXRlbScpO1xyXG5cclxuXHRcdHRoaXNbUk9XX0VMRU1FTlRdID0gcm93RWxlbWVudDtcclxuXHRcdHRoaXNbVEVYVF9FTEVNRU5UXSA9IHRleHRFbGVtZW50O1xyXG5cdH1cclxufVxyXG4iLCJjb25zdFxyXG5cdElURU0gPSAnaXRlbScsXHJcblx0Q09MT1IgPSAnY29sb3InLFxyXG5cdEFDVElWRSA9ICdhY3RpdmUnLFxyXG5cdERJU0FCTEVEID0gJ2Rpc2FibGVkJyxcclxuXHRGVU5DVElPTiA9ICdmdW5jdGlvbicsXHJcblx0U1BFQVJBVE9SID0gJ3NwZWFyYXRvcicsXHJcblx0V0hJVEVTUEFDRSA9ICd3aGl0ZXNwYWNlJyxcclxuXHRCQUNLR1JPVU5EID0gJ2JhY2tncm91bmQnLFxyXG5cdEZST05UR1JPVU5EID0gJ2Zyb250Z3JvdW5kJztcclxuXHJcbmV4cG9ydCBjb25zdFxyXG5cdEZVTkNUSU9OX0lURU1fSEVJR0hUID0gYCR7RlVOQ1RJT059LSR7SVRFTX0taGVpZ2h0YCxcclxuXHRGVU5DVElPTl9JVEVNX1dISVRFU1BBQ0UgPSBgJHtGVU5DVElPTn0tJHtJVEVNfS0ke1dISVRFU1BBQ0V9YCxcclxuXHRESVNBQkxFRF9CQUNLR1JPVU5EX0NPTE9SID0gYCR7RElTQUJMRUR9LSR7QkFDS0dST1VORH0tJHtDT0xPUn1gLFxyXG5cdERJU0FCTEVEX0ZST05UR1JPVU5EX0NPTE9SID0gYCR7RElTQUJMRUR9LSR7RlJPTlRHUk9VTkR9LSR7Q09MT1J9YCxcclxuXHRBQ1RJVkVfQkFDS0dST1VORF9DT0xPUiA9IGAke0FDVElWRX0tJHtCQUNLR1JPVU5EfS0ke0NPTE9SfWAsXHJcblx0QUNUSVZFX0ZST05UR1JPVU5EX0NPTE9SID0gYCR7QUNUSVZFfS0ke0ZST05UR1JPVU5EfS0ke0NPTE9SfWAsXHJcblx0QkFDS0dST1VORF9DT0xPUiA9IGAke0JBQ0tHUk9VTkR9LSR7Q09MT1J9YCxcclxuXHRGUk9OVEdST1VORF9DT0xPUiA9IGAke0ZST05UR1JPVU5EfS0ke0NPTE9SfWAsXHJcblx0T1VUTElORV9DT0xPUiA9IGBvdXRsaW5lLSR7Q09MT1J9YCxcclxuXHRTUEVBUkFUT1JfQ09MT1IgPSBgJHtTUEVBUkFUT1J9LSR7Q09MT1J9YCxcclxuXHRTUEVBUkFUT1JfV0hJVEVTUEFDRV9YID0gYCR7U1BFQVJBVE9SfS0ke1dISVRFU1BBQ0V9LXhgLFxyXG5cdFNQRUFSQVRPUl9XSElURVNQQUNFX1kgPSBgJHtTUEVBUkFUT1J9LSR7V0hJVEVTUEFDRX0teWAsXHJcblx0TUVOVV9XSElURVNQQUNFID0gV0hJVEVTUEFDRTsiLCJpbXBvcnQgeyBDU1NWYXJHZW5lcmF0b3IgfSBmcm9tICcuL2Nzcyc7XHJcbmltcG9ydCAqIGFzIFZBUiBmcm9tICcuL3ZhcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFZhciA9IENTU1ZhckdlbmVyYXRvcignbWVudScpO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1FTlVfSVRFTV9JQ09OX0JPWF9TVFlMRSA9IHtcclxuXHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuXHRoZWlnaHQ6ICcxMDAlJyxcclxuXHR3aWR0aDogVmFyKFZBUi5GVU5DVElPTl9JVEVNX1dISVRFU1BBQ0UpXHJcbn07XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBDU1NWYXJHZW5lcmF0b3IobmFtZXNwYWNlKSB7XHJcblx0cmV0dXJuIGZ1bmN0aW9uIGdlbmVyYXRlVmFyTmFtZShuYW1lKSB7XHJcblx0XHRyZXR1cm4gYHZhcigtLSR7bmFtZXNwYWNlfS0ke25hbWV9KWA7XHJcblx0fTtcclxufSIsImltcG9ydCAqIGFzIERvbSBmcm9tICdkb20nO1xyXG5pbXBvcnQgeyBNZW51SXRlbSwgUk9XX0VMRU1FTlQsIFRFWFRfRUxFTUVOVCB9IGZyb20gJy4vTWVudUl0ZW0nO1xyXG5pbXBvcnQgKiBhcyBWQVIgZnJvbSAnLi92YXJzJztcclxuaW1wb3J0IHsgTUVOVV9JVEVNX0lDT05fQk9YX1NUWUxFLCBWYXIgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0NVUyA9IDB4MDQsIFJFU0VUID0gMHgwNSwgRElTQUJMRSA9IDB4MDYsIExBQkVMX1NQQU4gPSAweDAzO1xyXG5cclxuY29uc3QgTUVOVV9JVEVNX1JPV19TVFlMRV9ERUZBVUxUID0ge1xyXG5cdGNvbG9yOiBWYXIoVkFSLkZST05UR1JPVU5EX0NPTE9SKSxcclxuXHQnYmFja2dyb3VuZC1jb2xvcic6ICd0cmFuc3BhcmVudCdcclxufTtcclxuXHJcbmNvbnN0IE1FTlVfSVRFTV9ST1dfU1RZTEVfT05fRk9DVVMgPSB7XHJcblx0Y29sb3I6IFZhcihWQVIuQUNUSVZFX0ZST05UR1JPVU5EX0NPTE9SKSxcclxuXHQnYmFja2dyb3VuZC1jb2xvcic6IFZhcihWQVIuQUNUSVZFX0JBQ0tHUk9VTkRfQ09MT1IpXHJcbn07XHJcblxyXG5jb25zdCBNRU5VX0lURU1fUk9XX1NUWUxFX09OX0RJU0FCTEVEID0ge1xyXG5cdGNvbG9yOiBWYXIoVkFSLkRJU0FCTEVEX0ZST05UR1JPVU5EX0NPTE9SKSxcclxuXHQnYmFja2dyb3VuZC1jb2xvcic6ICd0cmFuc3BhcmVudCdcclxufTtcclxuXHJcbmNvbnN0IE1FTlVfSVRFTV9URVhUX1NUWUxFID0ge1xyXG5cdCdoZWlnaHQnOiBWYXIoVkFSLkZVTkNUSU9OX0lURU1fSEVJR0hUKVxyXG59O1xyXG5cclxuY29uc3QgSUNPTl9TUEFOX1NUWUxFID0ge1xyXG5cdGRpc3BsYXk6ICdub25lJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1FTlVfSVRFTV9MQUJFTF9TUEFOX1NUWUxFID0ge1xyXG5cdCdmbGV4LWdyb3cnOiAnMScsXHJcblx0J3BhZGRpbmcnOiBgMCAke1ZhcihWQVIuRlVOQ1RJT05fSVRFTV9XSElURVNQQUNFKX1gLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uTWVudUl0ZW0gZXh0ZW5kcyBNZW51SXRlbSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdGNvbnN0IHRleHRFbGVtZW50ID0gdGhpc1tURVhUX0VMRU1FTlRdO1xyXG5cdFx0Y29uc3QgbGFiZWxTcGFuID0gRG9tLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRcdGNvbnN0IGljb25TcGFuID0gRG9tLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcblx0XHREb20uc2V0Q2xhc3NOYW1lKGxhYmVsU3BhbiwgJ21lbnUtaXRlbS1sYWJlbCcpO1xyXG5cdFx0RG9tLnNldENsYXNzTmFtZShpY29uU3BhbiwgJ21lbnUtaXRlbS1pY29uJyk7XHJcblx0XHREb20uc2V0U3R5bGUobGFiZWxTcGFuLCBNRU5VX0lURU1fTEFCRUxfU1BBTl9TVFlMRSk7XHJcblx0XHREb20uc2V0U3R5bGUodGV4dEVsZW1lbnQsIE1FTlVfSVRFTV9URVhUX1NUWUxFKTtcclxuXHRcdERvbS5zZXRTdHlsZShpY29uU3BhbiwgSUNPTl9TUEFOX1NUWUxFKTtcclxuXHJcblx0XHREb20uYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQsIGljb25TcGFuKTtcclxuXHRcdERvbS5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCwgbGFiZWxTcGFuKTtcclxuXHJcblx0XHR0aGlzW0xBQkVMX1NQQU5dID0gbGFiZWxTcGFuO1xyXG5cdFx0bGFiZWxTcGFuLmlubmVyVGV4dCA9ICdUZXh0IDQgdGVzdCc7XHJcblxyXG5cdFx0Y29uc3Qgcm93RWxlbWVudCA9IHRoaXNbUk9XX0VMRU1FTlRdO1xyXG5cclxuXHRcdERvbS5hZGRFdmVudExpc3RlbmVyKHJvd0VsZW1lbnQsICdtb3VzZW92ZXInLCAoKSA9PiB7XHJcblx0XHRcdHJvd0VsZW1lbnQuZGlzcGF0Y2hFdmVudChEb20uY3JlYXRlRXZlbnQoJy1mb2N1cycsIHRoaXMpKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXNbUkVTRVRdKCk7XHJcblx0fVxyXG5cclxuXHRbUkVTRVRdKCkge1xyXG5cdFx0RG9tLnNldFN0eWxlKHRoaXNbUk9XX0VMRU1FTlRdLCBNRU5VX0lURU1fUk9XX1NUWUxFX0RFRkFVTFQpO1xyXG5cdFx0RG9tLnJlbW92ZUNsYXNzKHRoaXNbUk9XX0VMRU1FTlRdLCAnZm9jdXMnKTtcclxuXHR9XHJcblxyXG5cdFtGT0NVU10oKSB7XHJcblx0XHREb20uc2V0U3R5bGUodGhpc1tST1dfRUxFTUVOVF0sIE1FTlVfSVRFTV9ST1dfU1RZTEVfT05fRk9DVVMpO1xyXG5cdFx0RG9tLmFkZENsYXNzKHRoaXNbUk9XX0VMRU1FTlRdLCAnZm9jdXMnKTtcclxuXHR9XHJcblxyXG5cdFtESVNBQkxFXSgpIHtcclxuXHRcdERvbS5zZXRTdHlsZSh0aGlzW1JPV19FTEVNRU5UXSwgTUVOVV9JVEVNX1JPV19TVFlMRV9PTl9ESVNBQkxFRCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCAqIGFzIERvbSBmcm9tICdkb20nO1xyXG5pbXBvcnQgeyBGdW5jdGlvbk1lbnVJdGVtLCBNRU5VX0lURU1fTEFCRUxfU1BBTl9TVFlMRSB9IGZyb20gJy4vRnVuY3Rpb25NZW51SXRlbSc7XHJcbmltcG9ydCB7IFJPV19FTEVNRU5ULCBURVhUX0VMRU1FTlQgfSBmcm9tICcuL01lbnVJdGVtJztcclxuaW1wb3J0IHsgTUVOVV9JVEVNX0lDT05fQk9YX1NUWUxFLCBWYXIgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0ICogYXMgVkFSIGZyb20gJy4vdmFycyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0xJQ0sgPSAweDAyO1xyXG5cclxuY29uc3QgQ0hFQ0tJTkdfUE9TSVRJT05fU1RZTEUgPSB7XHJcblx0dG9wOiAwLFxyXG5cdGxlZnQ6IDBcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDbGlja2FibGVNZW51SXRlbSBleHRlbmRzIEZ1bmN0aW9uTWVudUl0ZW0ge1xyXG5cdGNvbnN0cnVjdG9yKG1lbnVJdGVtKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdGNvbnN0IHRleHRFbGVtZW50ID0gdGhpc1tURVhUX0VMRU1FTlRdO1xyXG5cdFx0Y29uc3QgYWNjZWxlcmF0b3JTcGFuID0gRG9tLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRcdGNvbnN0IGNoZWNrYm94U3BhbiA9IERvbS5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG5cdFx0RG9tLnNldENsYXNzTmFtZShhY2NlbGVyYXRvclNwYW4sICdtZW51LWl0ZW0tYWNjZWxlcmF0b3InKTtcclxuXHRcdERvbS5zZXRDbGFzc05hbWUoY2hlY2tib3hTcGFuLCAnbWVudS1pdGVtLWNoZWNrYm94Jyk7XHJcblx0XHREb20uc2V0U3R5bGUoYWNjZWxlcmF0b3JTcGFuLCBNRU5VX0lURU1fTEFCRUxfU1BBTl9TVFlMRSk7XHJcblx0XHREb20uc2V0U3R5bGUoY2hlY2tib3hTcGFuLCBNRU5VX0lURU1fSUNPTl9CT1hfU1RZTEUsIENIRUNLSU5HX1BPU0lUSU9OX1NUWUxFKTtcclxuXHRcdERvbS5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCwgYWNjZWxlcmF0b3JTcGFuKTtcclxuXHRcdERvbS5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCwgY2hlY2tib3hTcGFuKTtcclxuXHJcblx0XHREb20uYWRkRXZlbnRMaXN0ZW5lcih0aGlzW1JPV19FTEVNRU5UXSwgJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgYXBwZW5kQ2hpbGQsIGNyZWF0ZUVsZW1lbnQsIHNldFN0eWxlIH0gZnJvbSAnZG9tJztcclxuaW1wb3J0IHsgRnVuY3Rpb25NZW51SXRlbSwgRk9DVVMgfSBmcm9tICcuL0Z1bmN0aW9uTWVudUl0ZW0nO1xyXG5pbXBvcnQgeyBURVhUX0VMRU1FTlQgfSBmcm9tICcuL01lbnVJdGVtJztcclxuaW1wb3J0IHsgTUVOVV9JVEVNX0lDT05fQk9YX1NUWUxFIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IFZhciB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBWQVIgZnJvbSAnLi92YXJzJztcclxuXHJcbmNvbnN0IElDT05fUE9TSVRJT05fU1RZTEUgPSB7XHJcblx0cmlnaHQ6IDAsXHJcblx0dG9wOiAwXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgU3VibWVudU1lbnVJdGVtIGV4dGVuZHMgRnVuY3Rpb25NZW51SXRlbSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdGNvbnN0IGV4cGFuZGluZ1NwYW4gPSBjcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG5cdFx0c2V0U3R5bGUoZXhwYW5kaW5nU3BhbiwgTUVOVV9JVEVNX0lDT05fQk9YX1NUWUxFLCBJQ09OX1BPU0lUSU9OX1NUWUxFKTtcclxuXHRcdGFkZENsYXNzKGV4cGFuZGluZ1NwYW4sICdtZW51LWl0ZW0tZXhwYW5kaW5nJyk7XHJcblx0XHRhcHBlbmRDaGlsZCh0aGlzW1RFWFRfRUxFTUVOVF0sIGV4cGFuZGluZ1NwYW4pO1xyXG5cclxuXHJcblx0fVxyXG59XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBEb20gZnJvbSAnZG9tJztcclxuaW1wb3J0IHsgTWVudUl0ZW0sIFRFWFRfRUxFTUVOVCwgUk9XX0VMRU1FTlQgfSBmcm9tICcuL01lbnVJdGVtJztcclxuaW1wb3J0IHsgVmFyIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCAqIGFzIFZBUiBmcm9tICcuL3ZhcnMnO1xyXG5cclxuY29uc3QgU1BFQVJBVE9SX01FTlVfSVRFTV9TVFlMRSA9IHtcclxuXHRkaXNwbGF5OiAnYmxvY2snLFxyXG5cdCdib3JkZXItYm90dG9tLXdpZHRoJzogJzFweCcsXHJcblx0J2JvcmRlci1ib3R0b20tc3R5bGUnOiAnc29saWQnLFxyXG5cdCdib3JkZXItYm90dG9tLWNvbG9yJzogVmFyKFZBUi5TUEVBUkFUT1JfQ09MT1IpLFxyXG5cdCdtYXJnaW4tbGVmdCc6IFZhcihWQVIuU1BFQVJBVE9SX1dISVRFU1BBQ0VfWCksXHJcblx0J21hcmdpbi1yaWdodCc6IFZhcihWQVIuU1BFQVJBVE9SX1dISVRFU1BBQ0VfWCksXHJcblx0J21hcmdpbi10b3AnOiBWYXIoVkFSLlNQRUFSQVRPUl9XSElURVNQQUNFX1kpLFxyXG5cdCdtYXJnaW4tYm90dG9tJzogVmFyKFZBUi5TUEVBUkFUT1JfV0hJVEVTUEFDRV9ZKVxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwZWFyYXRvck1lbnVJdGVtIGV4dGVuZHMgTWVudUl0ZW0ge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRjb25zdCByb3dFbGVtZW50ID0gdGhpc1tST1dfRUxFTUVOVF07XHJcblxyXG5cdFx0RG9tLnNldFN0eWxlKHRoaXNbVEVYVF9FTEVNRU5UXSwgU1BFQVJBVE9SX01FTlVfSVRFTV9TVFlMRSk7XHJcblx0XHREb20uYWRkRXZlbnRMaXN0ZW5lcihyb3dFbGVtZW50LCAnbW91c2VvdmVyJywgKCkgPT4ge1xyXG5cdFx0XHRyb3dFbGVtZW50LmRpc3BhdGNoRXZlbnQoRG9tLmNyZWF0ZUV2ZW50KCctY2xlYXItZm9jdXMnLCB0aGlzKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgKiBhcyBEb20gZnJvbSAnZG9tJztcclxuaW1wb3J0ICogYXMgVkFSIGZyb20gJy4vdmFycyc7XHJcbmltcG9ydCB7IFZhciB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBST1dfRUxFTUVOVCB9IGZyb20gJy4vTWVudUl0ZW0nO1xyXG5pbXBvcnQgeyBGT0NVUywgUkVTRVQgfSBmcm9tICcuL0Z1bmN0aW9uTWVudUl0ZW0nO1xyXG5pbXBvcnQgeyBTcGVhcmF0b3JNZW51SXRlbSB9IGZyb20gJy4vU3BlYXJhdG9yTWVudUl0ZW0nO1xyXG5cclxuY29uc3QgTUVOVV9TVFlMRSA9IHtcclxuXHRkaXNwbGF5OiAnYmxvY2snLFxyXG5cdHBvc2l0aW9uOiAnZml4ZWQnLFxyXG5cdG1hcmdpbjogJzAnLFxyXG5cdHBhZGRpbmc6IGAke1ZhcihWQVIuTUVOVV9XSElURVNQQUNFKX0gMGAsXHJcblx0J2ZvbnQtc2l6ZSc6ICcxMnB4JyxcclxuXHQnd2hpdGUtc3BhY2UnOiAnbm93cmFwJyxcclxuXHQnYm9yZGVyLXdpZHRoJzogJzFweCcsXHJcblx0J2JvcmRlci1zdHlsZSc6ICdzb2xpZCcsXHJcblx0J2xpbmUtaGVpZ2h0JzogVmFyKFZBUi5GVU5DVElPTl9JVEVNX0hFSUdIVCksXHJcblx0J2JvcmRlci1jb2xvcic6ICd0cmFuc3BhcmVudCcsXHJcblx0J2JhY2tncm91bmQtY29sb3InOiBWYXIoVkFSLkJBQ0tHUk9VTkRfQ09MT1IpLFxyXG5cdCdjb2xvcic6IFZhcihWQVIuRlJPTlRHUk9VTkRfQ09MT1IpLFxyXG5cdCd1c2VyLXNlbGVjdCc6ICdub25lJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0XHJcblx0TUVOVV9FTEVNRU5UID0gJ2UnLFxyXG5cdElURU1fQ09NUE9ORU5UX0xJU1QgPSAnbCcsXHJcblx0U0hPVyA9ICdzJyxcclxuXHRDTE9TRSA9ICdjJyxcclxuXHRBUFBFTkQgPSAnYScsXHJcblx0Rk9DVVNfTkVYVCA9ICduJyxcclxuXHRGT0NVU19QUkVWSU9VUyA9ICdwJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdGNvbnN0IG1lbnVFbGVtZW50ID0gRG9tLmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblx0XHRjb25zdCBpdGVtQ29tcG9uZW50TGlzdCA9IFtdO1xyXG5cclxuXHRcdERvbS5zZXRTdHlsZShtZW51RWxlbWVudCwgTUVOVV9TVFlMRSk7XHJcblx0XHREb20uc2V0Q2xhc3NOYW1lKG1lbnVFbGVtZW50LCAnbWVudScpO1xyXG5cclxuXHRcdHRoaXNbSVRFTV9DT01QT05FTlRfTElTVF0gPSBpdGVtQ29tcG9uZW50TGlzdDtcclxuXHRcdHRoaXNbTUVOVV9FTEVNRU5UXSA9IG1lbnVFbGVtZW50O1xyXG5cclxuXHRcdGZ1bmN0aW9uIGNsZWFyRm9jdXMoKSB7XHJcblx0XHRcdGl0ZW1Db21wb25lbnRMaXN0XHJcblx0XHRcdFx0LmZpbHRlcihpdGVtQ29tcG9uZW50ID0+ICEoaXRlbUNvbXBvbmVudCBpbnN0YW5jZW9mIFNwZWFyYXRvck1lbnVJdGVtKSlcclxuXHRcdFx0XHQuZm9yRWFjaChpdGVtQ29tcG9uZW50ID0+IGl0ZW1Db21wb25lbnRbUkVTRVRdKCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdERvbS5hZGRFdmVudExpc3RlbmVyKG1lbnVFbGVtZW50LCAnLWZvY3VzJywgZXZlbnQgPT4ge1xyXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0Y2xlYXJGb2N1cygpO1xyXG5cdFx0XHRldmVudC5kYXRhW0ZPQ1VTXSgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0RG9tLmFkZEV2ZW50TGlzdGVuZXIobWVudUVsZW1lbnQsICdtb3VzZWxlYXZlJywgY2xlYXJGb2N1cyk7XHJcblx0XHREb20uYWRkRXZlbnRMaXN0ZW5lcihtZW51RWxlbWVudCwgJy1jbGVhci1mb2N1cycsIGNsZWFyRm9jdXMpO1xyXG5cdH1cclxuXHJcblx0W1NIT1ddKCkge1xyXG5cdFx0RG9tLmFwcGVuZENoaWxkKERvbS5ET0NVTUVOVC5ib2R5LCB0aGlzW01FTlVfRUxFTUVOVF0pO1xyXG5cdH1cclxuXHJcblx0W0NMT1NFXSgpIHtcclxuXHRcdERvbS5yZW1vdmVDaGlsZChEb20uRE9DVU1FTlQuYm9keSwgdGhpc1tNRU5VX0VMRU1FTlRdKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7aW1wb3J0KCcuL01lbnVJdGVtJykuTWVudUl0ZW19IGl0ZW1Db21wb25lbnRcclxuXHQgKi9cclxuXHRbQVBQRU5EXShpdGVtQ29tcG9uZW50KSB7XHJcblx0XHR0aGlzW0lURU1fQ09NUE9ORU5UX0xJU1RdLnB1c2goaXRlbUNvbXBvbmVudCk7XHJcblx0XHREb20uYXBwZW5kQ2hpbGQodGhpc1tNRU5VX0VMRU1FTlRdLCBpdGVtQ29tcG9uZW50W1JPV19FTEVNRU5UXSk7XHJcblx0fVxyXG5cclxuXHRbRk9DVVNfTkVYVF0oZmxhZyA9IG51bGwpIHtcclxuXHJcblx0fVxyXG5cclxuXHRbRk9DVVNfUFJFVklPVVNdKGZsYWcgPSBudWxsKSB7XHJcblxyXG5cdH1cclxufSIsImltcG9ydCAnLi4vdGhlbWUvZGVmYXVsdC5jc3MnO1xyXG5cclxuaW1wb3J0IHsgTWVudSwgQ2xpY2thYmxlTWVudUl0ZW0sIFN1Ym1lbnVNZW51SXRlbSwgU3BlYXJhdG9yTWVudUl0ZW0sIFNIT1csIEFQUEVORCwgTUVOVV9FTEVNRU5UIH0gZnJvbSAnLi4vc3JjL0NvbXBvbmVudC9pbmRleCc7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBtZW51ID0gbmV3IE1lbnUoKTtcclxuXHJcblx0Y29uc3QgY2xpY2sgPSBuZXcgQ2xpY2thYmxlTWVudUl0ZW0oKTtcclxuXHRjb25zdCBzdWIgPSBuZXcgU3VibWVudU1lbnVJdGVtKCk7XHJcblx0Y29uc3Qgc3BsaXQgPSBuZXcgU3BlYXJhdG9yTWVudUl0ZW0oKTtcclxuXHJcblx0bWVudVtBUFBFTkRdKGNsaWNrKTtcclxuXHRtZW51W0FQUEVORF0oc3ViKTtcclxuXHRtZW51W0FQUEVORF0oc3BsaXQpO1xyXG5cclxuXHRtZW51W01FTlVfRUxFTUVOVF0uc3R5bGUubWluV2lkdGggPSAnMjAwcHgnO1xyXG5cclxuXHRtZW51W1NIT1ddKCk7XHJcbn0pOyJdLCJuYW1lcyI6WyJjc3MiLCJyZWYiLCJpbnNlcnRBdCIsImRvY3VtZW50IiwiaGVhZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJET0NVTUVOVCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbGVtZW50IiwiZXZlbnRUeXBlIiwibGlzdGVuZXIiLCJ0YWdOYW1lIiwic2V0U3R5bGUiLCJydWxlT2JqZWN0TGlzdCIsInJ1bGVPYmplY3QiLCJwcm9wZXJ0eSIsInNldFByb3BlcnR5Iiwic2V0Q2xhc3NOYW1lIiwibmFtZSIsImNsYXNzTmFtZSIsInBhcmVudEVsZW1lbnQiLCJhZGRDbGFzcyIsInRva2VucyIsImNsYXNzTGlzdCIsImFkZCIsImNyZWF0ZUV2ZW50IiwiZGF0YSIsImV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiTUVOVV9JVEVNX1JPV19TVFlMRSIsImRpc3BsYXkiLCJwb3NpdGlvbiIsImJveC1zaXppbmciLCJib3JkZXItd2lkdGgiLCJib3JkZXItY29sb3IiLCJjdXJzb3IiLCJNRU5VX0lURU1fVEVYVF9TVFlMRSIsIk1lbnVJdGVtIiwiW29iamVjdCBPYmplY3RdIiwicm93RWxlbWVudCIsIkRvbS5jcmVhdGVFbGVtZW50IiwidGV4dEVsZW1lbnQiLCJEb20uYXBwZW5kQ2hpbGQiLCJEb20uc2V0U3R5bGUiLCJEb20uc2V0Q2xhc3NOYW1lIiwidGhpcyIsIkZVTkNUSU9OX0lURU1fSEVJR0hUIiwiRlVOQ1RJT05fSVRFTV9XSElURVNQQUNFIiwiRlJPTlRHUk9VTkRfQ09MT1IiLCJTUEVBUkFUT1JfV0hJVEVTUEFDRV9YIiwiU1BFQVJBVE9SX1dISVRFU1BBQ0VfWSIsIlZhciIsIm5hbWVzcGFjZSIsIk1FTlVfSVRFTV9JQ09OX0JPWF9TVFlMRSIsImhlaWdodCIsIndpZHRoIiwiVkFSLkZVTkNUSU9OX0lURU1fV0hJVEVTUEFDRSIsIk1FTlVfSVRFTV9ST1dfU1RZTEVfREVGQVVMVCIsImNvbG9yIiwiVkFSLkZST05UR1JPVU5EX0NPTE9SIiwiYmFja2dyb3VuZC1jb2xvciIsIk1FTlVfSVRFTV9ST1dfU1RZTEVfT05fRk9DVVMiLCJNRU5VX0lURU1fUk9XX1NUWUxFX09OX0RJU0FCTEVEIiwiVkFSLkZVTkNUSU9OX0lURU1fSEVJR0hUIiwiSUNPTl9TUEFOX1NUWUxFIiwiTUVOVV9JVEVNX0xBQkVMX1NQQU5fU1RZTEUiLCJmbGV4LWdyb3ciLCJwYWRkaW5nIiwiRnVuY3Rpb25NZW51SXRlbSIsInN1cGVyIiwibGFiZWxTcGFuIiwiaWNvblNwYW4iLCJpbm5lclRleHQiLCJEb20uYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BhdGNoRXZlbnQiLCJEb20uY3JlYXRlRXZlbnQiLCJyZW1vdmUiLCJEb20ucmVtb3ZlQ2xhc3MiLCJEb20uYWRkQ2xhc3MiLCJDSEVDS0lOR19QT1NJVElPTl9TVFlMRSIsInRvcCIsImxlZnQiLCJDbGlja2FibGVNZW51SXRlbSIsIm1lbnVJdGVtIiwiYWNjZWxlcmF0b3JTcGFuIiwiY2hlY2tib3hTcGFuIiwiSUNPTl9QT1NJVElPTl9TVFlMRSIsInJpZ2h0IiwiU3VibWVudU1lbnVJdGVtIiwiZXhwYW5kaW5nU3BhbiIsIlNQRUFSQVRPUl9NRU5VX0lURU1fU1RZTEUiLCJib3JkZXItYm90dG9tLXdpZHRoIiwiYm9yZGVyLWJvdHRvbS1zdHlsZSIsImJvcmRlci1ib3R0b20tY29sb3IiLCJtYXJnaW4tbGVmdCIsIlZBUi5TUEVBUkFUT1JfV0hJVEVTUEFDRV9YIiwibWFyZ2luLXJpZ2h0IiwibWFyZ2luLXRvcCIsIlZBUi5TUEVBUkFUT1JfV0hJVEVTUEFDRV9ZIiwibWFyZ2luLWJvdHRvbSIsIlNwZWFyYXRvck1lbnVJdGVtIiwiTUVOVV9TVFlMRSIsIm1hcmdpbiIsIldISVRFU1BBQ0UiLCJmb250LXNpemUiLCJ3aGl0ZS1zcGFjZSIsImJvcmRlci1zdHlsZSIsImxpbmUtaGVpZ2h0IiwidXNlci1zZWxlY3QiLCJBUFBFTkQiLCJNZW51IiwibWVudUVsZW1lbnQiLCJpdGVtQ29tcG9uZW50TGlzdCIsImNsZWFyRm9jdXMiLCJmaWx0ZXIiLCJpdGVtQ29tcG9uZW50IiwiZm9yRWFjaCIsInN0b3BQcm9wYWdhdGlvbiIsIkRvbS5ET0NVTUVOVCIsImJvZHkiLCJyZW1vdmVDaGlsZCIsInB1c2giLCJmbGFnIiwid2luZG93IiwibWVudSIsImNsaWNrIiwic3ViIiwic3BsaXQiLCJtaW5XaWR0aCJdLCJtYXBwaW5ncyI6ImlYQUFBLFNBQXFCQSxFQUFLQyxRQUNYLElBQVJBLElBQWlCQSxFQUFNLElBQzVCLElBQUlDLEVBQVdELEVBQUlDLFNBRW5CLEdBQUtGLEdBQTJCLG9CQUFiRyxTQUFuQixDQUVBLElBQUlDLEVBQU9ELFNBQVNDLE1BQVFELFNBQVNFLHFCQUFxQixRQUFRLEdBQzlEQyxFQUFRSCxTQUFTSSxjQUFjLFNBQ25DRCxFQUFNRSxLQUFPLFdBRUksUUFBYk4sR0FDRUUsRUFBS0ssV0FDUEwsRUFBS00sYUFBYUos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
