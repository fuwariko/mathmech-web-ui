import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-B6lWK8m9.js";import{n as i,t as a}from"./Textarea-qmwX93nG.js";var o,s,c,l,u,d,f,p,m,h;t((()=>{i(),o=e(n(),1),s=r(),c={title:`FORMS/Textarea`,component:a,parameters:{layout:`centered`},tags:[`autodocs`]},l={args:{name:`name`}},u={render:()=>(0,s.jsx)(`fieldset`,{role:`group`,style:{width:`360px`,border:`none`},children:(0,s.jsx)(a,{id:`1`,name:`review`,placeholder:`Чем бы вы хотели поделиться?`,label:`Отзыв`})})},d={render:()=>(0,s.jsx)(`fieldset`,{role:`group`,style:{width:`360px`,border:`none`},children:(0,s.jsx)(a,{id:`1`,name:`review`,placeholder:`Чем бы вы хотели поделиться?`,label:`Отзыв`,isError:!0,errorMassage:`Минимум 50 символов`})})},f={render:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`style`,{children:`
          .castom textarea {
            min-height: 140px;
            resize: none;
          }
        `}),(0,s.jsx)(`fieldset`,{role:`group`,style:{width:`360px`,border:`none`},children:(0,s.jsx)(a,{id:`1`,name:`review`,placeholder:`Чем бы вы хотели поделиться?`,label:`Отзыв`,className:`castom`})})]})},p={render:()=>(0,s.jsx)(`fieldset`,{role:`group`,style:{width:`360px`,border:`none`,display:`flex`,flexDirection:`column`,gap:`15px`},children:[{id:`1`,placeholder:`Ответьте на вопрос 1`,label:`Вопрос 1`},{id:`2`,placeholder:`Ответьте на вопрос 2`,label:`Вопрос 2`},{id:`3`,placeholder:`Ответьте на вопрос 3`,label:`Вопрос 3`}].map(e=>(0,s.jsx)(a,{id:e.id,name:`user-name`,placeholder:e.placeholder,label:e.label,required:e.id!=`3`}))})},m={render:()=>{let[e,t]=(0,o.useState)(`Потому`);return(0,s.jsxs)(`fieldset`,{role:`group`,style:{width:`240px`,border:`none`},children:[(0,s.jsxs)(`p`,{children:[`Введенный ответ: `,e]}),(0,s.jsx)(a,{id:`5`,name:`user`,placeholder:`Ответьте на вопрос`,label:`Почему?`,value:e,onChange:e=>t(e)})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'name'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <fieldset role="group" style={{
      width: "360px",
      border: "none"
    }}>
          <Textarea id={"1"} name="review" placeholder={"Чем бы вы хотели поделиться?"} label={"Отзыв"} />
      </fieldset>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <fieldset role="group" style={{
      width: "360px",
      border: "none"
    }}>
          <Textarea id={"1"} name="review" placeholder={"Чем бы вы хотели поделиться?"} label={"Отзыв"} isError={true} errorMassage="Минимум 50 символов" />
      </fieldset>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Default`,`SimpleTextarea`,`ErrorTextarea`,`TextareaWithClass`,`GroupTextarea`,`ControlledInputText`]}))();export{m as ControlledInputText,l as Default,d as ErrorTextarea,p as GroupTextarea,u as SimpleTextarea,f as TextareaWithClass,h as __namedExportsOrder,c as default};