import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{a as i,h as a,v as o}from"./ComponentSkeletons-0oETlvfY.js";import{n as s,t as c}from"./Button-PGcF0EV6.js";import{n as l,t as u}from"./RadioStars-1gclqQ8U.js";import{n as d,t as f}from"./InputText-DmbvM_oJ.js";import{n as p,t as m}from"./Textarea-BaZAsp-n.js";import{n as h,t as g}from"./Dialog-DnC7OG0V.js";var _,v,y,b,x,S,C,w,T;t((()=>{s(),l(),d(),p(),_=e(n(),1),h(),o(),v=r(),y={text:(0,v.jsx)(`p`,{children:`Привет, мир!`}),formIntro:(0,v.jsx)(a,{lines:3}),skeleton:(0,v.jsx)(i,{})},b={title:`UI/Dialog`,component:g,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{children:{control:`select`,options:Object.keys(y),mapping:y}}},x={render:e=>{let[t,n]=(0,_.useState)(e.open);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c,{lang:`ru`,color:`mainNavy`,onClick:()=>n(!0),children:`Открыть модальное окно`}),(0,v.jsx)(g,{...e,open:t,onClose:()=>n(!1)})]})},args:{id:`2`,open:!1,title:`Приветственное окно`,children:y.text,isMobile:!1}},S={render:e=>{let[t,n]=(0,_.useState)(!1),[r,i]=(0,_.useState)(0);return(0,v.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`},children:[(0,v.jsx)(c,{lang:`ru`,color:`mainNavy`,onClick:()=>n(!0),children:`Оставить отзыв`}),(0,v.jsx)(g,{...e,id:`1`,open:t,onClose:()=>n(!1),children:(0,v.jsxs)(`form`,{action:``,style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,v.jsx)(u,{rating:r,setRating:i}),(0,v.jsx)(f,{id:`1`,name:`review`,type:`text`,placeholder:`Аноним`,label:`Имя`}),(0,v.jsx)(f,{id:`2`,name:`review`,type:`text`,placeholder:`@Student`,label:`Телеграм`}),(0,v.jsx)(m,{id:`3`,name:`review`,placeholder:`Чем бы вы хотели поделиться?`,style:{height:`125px`,resize:`none`}}),(0,v.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`15px`},children:[(0,v.jsx)(c,{lang:`ru`,color:`lightGrey02`,textColor:`darkGrey01`,children:`Отмена`}),(0,v.jsx)(c,{lang:`ru`,color:`mainNavy`,children:`Отправить`})]})]})})]})},args:{title:`Форма обратной связи`}},C={render:e=>{let[t,n]=(0,_.useState)(!1),[r,i]=(0,_.useState)(0);return(0,v.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`},children:[(0,v.jsx)(c,{lang:`ru`,color:`mainNavy`,onClick:()=>n(!0),children:`Оставить отзыв`}),(0,v.jsx)(g,{...e,id:`1`,open:t,onClose:()=>n(!1),isMobile:!0,children:(0,v.jsxs)(`form`,{action:``,style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,v.jsx)(u,{rating:r,setRating:i,isMobile:!0}),(0,v.jsx)(f,{id:`1`,name:`review`,type:`text`,placeholder:`Аноним`,label:`Имя`}),(0,v.jsx)(f,{id:`2`,name:`review`,type:`text`,placeholder:`@Student`,label:`Телеграм`}),(0,v.jsx)(m,{id:`3`,name:`review`,placeholder:`Чем бы вы хотели поделиться?`,style:{height:`125px`,resize:`none`}}),(0,v.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`15px`},children:[(0,v.jsx)(c,{lang:`ru`,color:`lightGrey02`,textColor:`darkGrey01`,children:`Отмена`}),(0,v.jsx)(c,{lang:`ru`,color:`mainNavy`,children:`Отправить`})]})]})})]})},args:{title:`Форма обратной связи`}},w={render:()=>(0,v.jsx)(i,{})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    children: dialogContentOptions.text,
    isMobile: false
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <DialogSkeleton />
}`,...w.parameters?.docs?.source}}},T=[`Default`,`ReviewForm`,`MobileReviewForm`,`Skeleton`]}))();export{x as Default,C as MobileReviewForm,S as ReviewForm,w as Skeleton,T as __namedExportsOrder,b as default};