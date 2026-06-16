import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r}from"./iframe-D3lb2UIJ.js";import{n as i,r as a,t as o}from"./styled-components.browser.esm-attkugRX.js";var s,c=t((()=>{s=`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.944092 13.9443L7.44409 7.44434M7.44409 7.44434L13.9441 0.944336M7.44409 7.44434L13.9441 13.9443M7.44409 7.44434L0.944092 0.944336" stroke="#222222" stroke-opacity="0.7" stroke-width="1.88824" stroke-linecap="round"/>
</svg>
`})),l,u,d,f,p,m=t((()=>{a(),c(),l=i.dialog`
  border: none;
  border-radius: 10px;
  background-color: var(--mm-backgroundPrimary, #fff);
  color: var(--mm-textPrimary, #1B1E22);
  width: min(100%, 560px);
  max-height: min(90vh, 720px);
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.22);
  padding: 40px 32px;
  overflow: visible;

  ${e=>e.$isMobile&&o`
      width: 85%;
      max-height: 85%;
      padding: 40px 16px;
    `}
`,u=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding-bottom: 20px;
  ${e=>e.$isMobile&&o`
      padding: 20px 0;
    `}
`,d=i.h1`
  margin: 0;
  text-align: center;

  ${e=>e.$isMobile&&o`
      font-size: 24px;
    `}
`,f=i.button`
  position: absolute; 
  top: 0;
  right: -60px;        
  border: 0;
  background: var(--mm-backgroundPrimary, #fff);
  color: var(--mm-textPrimary, #1B1E22);
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.15);
  
  &:hover {
    background: var(--mm-backgroundSecondary, #f1f5f9);
  }
  
  &:focus {
    outline: 2px solid var(--mm-globalBlue, #1E4391);
    outline-offset: 2px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 13px;
    height: 13px;
    background-image: url("data:image/svg+xml,${encodeURIComponent(s)}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

    ${e=>e.$isMobile&&o`
      top: 16px;
      right: 16px;   
      width: 30px;
      height: 30px;
    `}
`,p=i.div`
  height: 100%;
  width: 100%;
  padding: 2px;
  overflow-Y: auto;
  max-height: calc(
    min(90vh, 720px) -
    100px
  ); /* max-height Dialog - padding - Header padding-bottom */

  ${e=>e.$isMobile&&o`
    max-height: calc(
      min(90vh, 720px) -
      130px
    );
    `}
`})),h,g,_,v,y=t((()=>{h=e(n(),1),m(),g=r(),_=[`button:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`a[href]`,`[tabindex]:not([tabindex="-1"])`,`input:not([disabled]):not([type="radio"])`].join(`,`),v=({id:e,open:t,onClose:n,title:r,children:i,isMobile:a})=>{let o=(0,h.useRef)(null),s=(0,h.useRef)(null);(0,h.useEffect)(()=>{let e=o.current;e&&(t?(e.open||e.showModal(),requestAnimationFrame(()=>s.current?.focus())):e.open&&e.close())},[t]);let c=()=>{let e=o.current;if(!e)return[];let t=[],n=new Set,r=i=>{let a=Array.from(i.children);for(let i of a){let a=i;if(a.matches(`input[type="radio"]`)){let r=a.name||`__no-name__`;if(n.has(r))continue;let i=Array.from(e.querySelectorAll(`input[type="radio"][name="${CSS.escape(r)}"]`)).filter(e=>!e.disabled);if(n.add(r),i.length>0){let e=i.find(e=>e.checked)??i[0];t.push(e)}continue}a.matches(_)&&a.tabIndex!==-1&&!a.hasAttribute(`disabled`)&&t.push(a),a.children.length>0&&r(a)}};return r(e),t},m=e=>{let t=e.target;if(!t.matches(`input[type="radio"]`))return;let n=t,r=o.current;if(!r)return;let i=Array.from(r.querySelectorAll(`input[type="radio"][name="${CSS.escape(n.name)}"]`)).filter(e=>!e.disabled),a=i.indexOf(n);if(a!==-1&&(e.key===`ArrowRight`||e.key===`ArrowDown`||e.key===`ArrowLeft`||e.key===`ArrowUp`)){e.preventDefault();let t=i[e.key===`ArrowRight`||e.key===`ArrowDown`?(a+1)%i.length:(a-1+i.length)%i.length];t.click(),t.focus()}};return(0,g.jsxs)(l,{$isMobile:a,ref:o,role:`dialog`,onKeyDown:e=>{if(m(e),e.key!==`Tab`)return;let t=c();if(t.length===0)return;let n=document.activeElement,r=t.indexOf(n??t[0]);e.preventDefault(),t[e.shiftKey?r<=0?t.length-1:r-1:r===-1||r===t.length-1?0:r+1]?.focus()},"aria-labelledby":`dialog-title-${e}`,"aria-modal":`true`,onCancel:e=>{e.preventDefault(),n()},children:[(0,g.jsx)(f,{$isMobile:a,lang:`ru`,ref:s,type:`button`,onClick:n,"aria-label":`Закрыть модальное окно`}),(0,g.jsx)(u,{$isMobile:a,children:(0,g.jsx)(d,{$isMobile:a,id:`dialog-title-${e}`,children:r})}),(0,g.jsx)(p,{$isMobile:a,children:i})]})},v.__docgenInfo={description:``,methods:[],displayName:`Dialog`}}));export{y as n,v as t};