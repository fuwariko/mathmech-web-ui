import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{g as i,v as a}from"./ComponentSkeletons-0oETlvfY.js";import{n as o,t as s}from"./Textarea-BaZAsp-n.js";var c,l,u,d,f,p,m,h,g,_,v;t((()=>{o(),c=e(n(),1),a(),l=r(),u={title:`FORMS/Textarea`,component:s,parameters:{layout:`centered`},tags:[`autodocs`]},d={args:{name:`name`}},f={render:()=>(0,l.jsx)(`fieldset`,{role:`group`,style:{width:`360px`,border:`none`},children:(0,l.jsx)(s,{id:`1`,name:`review`,placeholder:`Чем бы вы хотели поделиться?`,label:`Отзыв`})})},p={render:()=>(0,l.jsx)(`fieldset`,{role:`group`,style:{width:`360px`,border:`none`},children:(0,l.jsx)(s,{id:`1`,name:`review`,placeholder:`Чем бы вы хотели поделиться?`,label:`Отзыв`,isError:!0,errorMassage:`Минимум 50 символов`})})},m={render:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`style`,{children:`
          .castom textarea {
            min-height: 140px;
            resize: none;
          }
        `}),(0,l.jsx)(`fieldset`,{role:`group`,style:{width:`360px`,border:`none`},children:(0,l.jsx)(s,{id:`1`,name:`review`,placeholder:`Чем бы вы хотели поделиться?`,label:`Отзыв`,className:`castom`})})]})},h={render:()=>(0,l.jsx)(`fieldset`,{role:`group`,style:{width:`360px`,border:`none`,display:`flex`,flexDirection:`column`,gap:`15px`},children:[{id:`1`,placeholder:`Ответьте на вопрос 1`,label:`Вопрос 1`},{id:`2`,placeholder:`Ответьте на вопрос 2`,label:`Вопрос 2`},{id:`3`,placeholder:`Ответьте на вопрос 3`,label:`Вопрос 3`}].map(e=>(0,l.jsx)(s,{id:e.id,name:`user-name`,placeholder:e.placeholder,label:e.label,required:e.id!=`3`}))})},g={render:()=>{let[e,t]=(0,c.useState)(`Потому`);return(0,l.jsxs)(`fieldset`,{role:`group`,style:{width:`240px`,border:`none`},children:[(0,l.jsxs)(`p`,{children:[`Введенный ответ: `,e]}),(0,l.jsx)(s,{id:`5`,name:`user`,placeholder:`Ответьте на вопрос`,label:`Почему?`,value:e,onChange:e=>t(e)})]})}},_={render:()=>(0,l.jsx)(`div`,{style:{width:360},children:(0,l.jsx)(i,{})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'name'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <fieldset role="group" style={{
      width: "360px",
      border: "none"
    }}>
          <Textarea id={"1"} name="review" placeholder={"Чем бы вы хотели поделиться?"} label={"Отзыв"} />
      </fieldset>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <fieldset role="group" style={{
      width: "360px",
      border: "none"
    }}>
          <Textarea id={"1"} name="review" placeholder={"Чем бы вы хотели поделиться?"} label={"Отзыв"} isError={true} errorMassage="Минимум 50 символов" />
      </fieldset>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <style>{\`
          .castom textarea {
            min-height: 140px;
            resize: none;
          }
        \`}</style>
      <fieldset role="group" style={{
        width: "360px",
        border: "none"
      }}>
          <Textarea id={"1"} name="review" placeholder={"Чем бы вы хотели поделиться?"} label={"Отзыв"} className="castom" />
      </fieldset>
      </>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      id: '1',
      placeholder: 'Ответьте на вопрос 1',
      label: 'Вопрос 1'
    }, {
      id: '2',
      placeholder: 'Ответьте на вопрос 2',
      label: 'Вопрос 2'
    }, {
      id: '3',
      placeholder: 'Ответьте на вопрос 3',
      label: 'Вопрос 3'
    }];
    return <fieldset role="group" style={{
      width: "360px",
      border: "none",
      display: "flex",
      flexDirection: "column",
      gap: "15px"
    }}>
        {options.map(opt => <Textarea id={opt.id} name="user-name" placeholder={opt.placeholder} label={opt.label} required={opt.id == "3" ? false : true} />)}
      </fieldset>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string>("Потому");
    return <fieldset role="group" style={{
      width: "240px",
      border: "none"
    }}>
        <p>Введенный ответ: {value}</p>
          <Textarea id={"5"} name="user" placeholder={"Ответьте на вопрос"} label={"Почему?"} value={value} onChange={e => setValue(e)} />
      </fieldset>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360
  }}>
      <TextareaSkeleton />
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Default`,`SimpleTextarea`,`ErrorTextarea`,`TextareaWithClass`,`GroupTextarea`,`ControlledInputText`,`Skeleton`]}))();export{g as ControlledInputText,d as Default,p as ErrorTextarea,h as GroupTextarea,f as SimpleTextarea,_ as Skeleton,m as TextareaWithClass,v as __namedExportsOrder,u as default};