import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-B6lWK8m9.js";import{n as i,t as a}from"./color-tokens-BPpBLVR4.js";import{n as o,t as s}from"./Button-DMviSlsf.js";import{n as c,t as l}from"./RadioStars-BQR58iDM.js";import{n as u,t as d}from"./InputText-DSfWkJMg.js";import{n as f,t as p}from"./Textarea-qmwX93nG.js";import{n as m,r as h,t as g}from"./styled-components.browser.esm-DC4SRGo-.js";var _,v=t((()=>{_=`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.944092 13.9443L7.44409 7.44434M7.44409 7.44434L13.9441 0.944336M7.44409 7.44434L13.9441 13.9443M7.44409 7.44434L0.944092 0.944336" stroke="#222222" stroke-opacity="0.7" stroke-width="1.88824" stroke-linecap="round"/>
</svg>
`})),y,b,x,S,C,w=t((()=>{h(),v(),i(),y=m.dialog`
  border: none;
  border-radius: 10px;
  background-color: #fff;
  width: min(100%, 560px);
  max-height: min(90vh, 720px);
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.22);
  padding: 40px 32px;
  overflow: visible;

  ${e=>e.$isMobile&&g`
      width: 85%;
      max-height: 85%;
      padding: 40px 16px;
    `}
`,b=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding-bottom: 20px;
  ${e=>e.$isMobile&&g`
      padding: 20px 0;
    `}
`,x=m.h1`
  margin: 0;
  text-align: center;

  ${e=>e.$isMobile&&g`
      font-size: 24px;
    `}
`,S=m.button`
  position: absolute; 
  top: 0;
  right: -60px;        
  border: 0;
  background: #fff;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.15);
  
  &:hover {
    background: #f1f5f9;
  }
  
  &:focus {
    outline: 2px solid ${a.mainNavy};
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
    background-image: url("data:image/svg+xml,${encodeURIComponent(_)}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

    ${e=>e.$isMobile&&g`
      top: 16px;
      right: 16px;   
      width: 30px;
      height: 30px;
    `}
`,C=m.div`
  height: 100%;
  width: 100%;
  padding: 2px;
  overflow-Y: auto;
  max-height: calc(
    min(90vh, 720px) -
    100px
  ); /* max-height Dialog - padding - Header padding-bottom */

  ${e=>e.$isMobile&&g`
    max-height: calc(
      min(90vh, 720px) -
      130px
    );
    `}
`})),T,E,D,O,k=t((()=>{T=e(n(),1),w(),E=r(),D=[`button:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`a[href]`,`[tabindex]:not([tabindex="-1"])`,`input:not([disabled]):not([type="radio"])`].join(`,`),O=({id:e,open:t,onClose:n,title:r,children:i,isMobile:a})=>{let o=(0,T.useRef)(null),s=(0,T.useRef)(null);(0,T.useEffect)(()=>{let e=o.current;e&&(t?(e.open||e.showModal(),requestAnimationFrame(()=>s.current?.focus())):e.open&&e.close())},[t]);let c=()=>{let e=o.current;if(!e)return[];let t=[],n=new Set,r=i=>{let a=Array.from(i.children);for(let i of a){let a=i;if(a.matches(`input[type="radio"]`)){let r=a.name||`__no-name__`;if(n.has(r))continue;let i=Array.from(e.querySelectorAll(`input[type="radio"][name="${CSS.escape(r)}"]`)).filter(e=>!e.disabled);if(n.add(r),i.length>0){let e=i.find(e=>e.checked)??i[0];t.push(e)}continue}a.matches(D)&&a.tabIndex!==-1&&!a.hasAttribute(`disabled`)&&t.push(a),a.children.length>0&&r(a)}};return r(e),t},l=e=>{let t=e.target;if(!t.matches(`input[type="radio"]`))return;let n=t,r=o.current;if(!r)return;let i=Array.from(r.querySelectorAll(`input[type="radio"][name="${CSS.escape(n.name)}"]`)).filter(e=>!e.disabled),a=i.indexOf(n);if(a!==-1&&(e.key===`ArrowRight`||e.key===`ArrowDown`||e.key===`ArrowLeft`||e.key===`ArrowUp`)){e.preventDefault();let t=i[e.key===`ArrowRight`||e.key===`ArrowDown`?(a+1)%i.length:(a-1+i.length)%i.length];t.click(),t.focus()}};return(0,E.jsxs)(y,{$isMobile:a,ref:o,role:`dialog`,onKeyDown:e=>{if(l(e),e.key!==`Tab`)return;let t=c();if(t.length===0)return;let n=document.activeElement,r=t.indexOf(n??t[0]);e.preventDefault(),t[e.shiftKey?r<=0?t.length-1:r-1:r===-1||r===t.length-1?0:r+1]?.focus()},"aria-labelledby":`dialog-title-${e}`,"aria-modal":`true`,onCancel:e=>{e.preventDefault(),n()},children:[(0,E.jsx)(S,{$isMobile:a,lang:`ru`,ref:s,type:`button`,onClick:n,"aria-label":`Закрыть модальное окно`}),(0,E.jsx)(b,{$isMobile:a,children:(0,E.jsx)(x,{$isMobile:a,id:`dialog-title-${e}`,children:r})}),(0,E.jsx)(C,{$isMobile:a,children:i})]})},O.__docgenInfo={description:``,methods:[],displayName:`Dialog`}})),A,j,M,N,P,F,I;t((()=>{o(),c(),u(),f(),A=e(n(),1),k(),j=r(),M={title:`UI/Dialog`,component:O,parameters:{layout:`centered`},tags:[`autodocs`]},N={render:e=>{let[t,n]=(0,A.useState)(e.open);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s,{lang:`ru`,color:`mainNavy`,onClick:()=>n(!0),children:`Открыть модальное окно`}),(0,j.jsx)(O,{...e,open:t,onClose:()=>n(!1)})]})},args:{id:`2`,open:!1,title:`Приветственное окно`,children:(0,j.jsx)(`p`,{children:`Привет, мир!`}),isMobile:!1}},P={render:e=>{let[t,n]=(0,A.useState)(!1),[r,i]=(0,A.useState)(0);return(0,j.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`},children:[(0,j.jsx)(s,{lang:`ru`,color:`mainNavy`,onClick:()=>n(!0),children:`Оставить отзыв`}),(0,j.jsx)(O,{...e,id:`1`,open:t,onClose:()=>n(!1),children:(0,j.jsxs)(`form`,{action:``,style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,j.jsx)(l,{rating:r,setRating:i}),(0,j.jsx)(d,{id:`1`,name:`review`,type:`text`,placeholder:`Аноним`,label:`Имя`}),(0,j.jsx)(d,{id:`2`,name:`review`,type:`text`,placeholder:`@Student`,label:`Телеграм`}),(0,j.jsx)(p,{id:`3`,name:`review`,placeholder:`Чем бы вы хотели поделиться?`,style:{height:`125px`,resize:`none`}}),(0,j.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`15px`},children:[(0,j.jsx)(s,{lang:`ru`,color:`lightGrey02`,textColor:`darkGrey01`,children:`Отмена`}),(0,j.jsx)(s,{lang:`ru`,color:`mainNavy`,children:`Отправить`})]})]})})]})},args:{title:`Форма обратной связи`}},F={render:e=>{let[t,n]=(0,A.useState)(!1),[r,i]=(0,A.useState)(0);return(0,j.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`},children:[(0,j.jsx)(s,{lang:`ru`,color:`mainNavy`,onClick:()=>n(!0),children:`Оставить отзыв`}),(0,j.jsx)(O,{...e,id:`1`,open:t,onClose:()=>n(!1),isMobile:!0,children:(0,j.jsxs)(`form`,{action:``,style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,j.jsx)(l,{rating:r,setRating:i,isMobile:!0}),(0,j.jsx)(d,{id:`1`,name:`review`,type:`text`,placeholder:`Аноним`,label:`Имя`}),(0,j.jsx)(d,{id:`2`,name:`review`,type:`text`,placeholder:`@Student`,label:`Телеграм`}),(0,j.jsx)(p,{id:`3`,name:`review`,placeholder:`Чем бы вы хотели поделиться?`,style:{height:`125px`,resize:`none`}}),(0,j.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`15px`},children:[(0,j.jsx)(s,{lang:`ru`,color:`lightGrey02`,textColor:`darkGrey01`,children:`Отмена`}),(0,j.jsx)(s,{lang:`ru`,color:`mainNavy`,children:`Отправить`})]})]})})]})},args:{title:`Форма обратной связи`}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(args.open);
    return <>
        <Button lang='ru' color='mainNavy' onClick={() => setIsOpen(true)}>
          Открыть модальное окно
        </Button>
        <Dialog {...args} open={isOpen} onClose={() => setIsOpen(false)} />
      </>;
  },
  args: {
    id: '2',
    open: false,
    title: 'Приветственное окно',
    children: <p>
        Привет, мир!
      </p>,
    isMobile: false
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    return <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
        <Button lang='ru' color='mainNavy' onClick={() => setOpen(true)}>
          Оставить отзыв
        </Button>
        <Dialog {...args} id='1' open={isOpen} onClose={() => setOpen(false)}> 
          <form action="" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <RadioStars rating={rating} setRating={setRating}></RadioStars>
            <InputText id={'1'} name='review' type='text' placeholder={'Аноним'} label={'Имя'} />
            <InputText id={'2'} name='review' type='text' placeholder={'@Student'} label={'Телеграм'} />
            <Textarea id={"3"} name="review" placeholder={"Чем бы вы хотели поделиться?"} style={{
            height: '125px',
            resize: 'none'
          }} />
            <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '15px'
          }}>
              <Button lang='ru' color='lightGrey02' textColor='darkGrey01'>
                Отмена
              </Button>
              <Button lang='ru' color='mainNavy'>
                Отправить
              </Button>
            </div>
          </form>
        </Dialog>
      </div>;
  },
  args: {
    title: 'Форма обратной связи'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    return <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
        <Button lang='ru' color='mainNavy' onClick={() => setOpen(true)}>
          Оставить отзыв
        </Button>
        <Dialog {...args} id='1' open={isOpen} onClose={() => setOpen(false)} isMobile> 
          <form action="" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <RadioStars rating={rating} setRating={setRating} isMobile></RadioStars>
            <InputText id={'1'} name='review' type='text' placeholder={'Аноним'} label={'Имя'} />
            <InputText id={'2'} name='review' type='text' placeholder={'@Student'} label={'Телеграм'} />
            <Textarea id={"3"} name="review" placeholder={"Чем бы вы хотели поделиться?"} style={{
            height: '125px',
            resize: 'none'
          }} />
            <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '15px'
          }}>
              <Button lang='ru' color='lightGrey02' textColor='darkGrey01'>
                Отмена
              </Button>
              <Button lang='ru' color='mainNavy'>
                Отправить
              </Button>
            </div>
          </form>
        </Dialog>
      </div>;
  },
  args: {
    title: 'Форма обратной связи'
  }
}`,...F.parameters?.docs?.source}}},I=[`Default`,`ReviewForm`,`MobileReviewForm`]}))();export{N as Default,F as MobileReviewForm,P as ReviewForm,I as __namedExportsOrder,M as default};