import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{u as i,v as a}from"./ComponentSkeletons-0oETlvfY.js";import{n as o,t as s}from"./Radio-vNcQznR8.js";var c,l,u,d,f,p,m,h,g;t((()=>{o(),c=e(n(),1),a(),l=r(),u={title:`FILTERS/Radio`,component:s,parameters:{layout:`centered`},tags:[`autodocs`]},d={args:{id:`1`,name:`option`,value:`1`,label:`Вариант 1`}},f={render:()=>(0,l.jsx)(s,{name:`color`,value:`Синий`})},p={render:()=>(0,l.jsx)(`fieldset`,{role:`radiogroup`,style:{width:`120px`,border:`none`},children:[{id:`1`,value:`blue`,description:`Синий`},{id:`2`,value:`green`,description:`Зелёный`},{id:`3`,value:`red`,description:`Красный`}].map(e=>(0,l.jsx)(s,{id:e.id,name:`color`,value:e.value,label:e.description}))})},m={render:()=>{let[e,t]=(0,c.useState)(`blue`);return(0,l.jsxs)(`fieldset`,{role:`radiogroup`,style:{width:`120px`,border:`none`},children:[(0,l.jsxs)(`p`,{style:{marginBottom:`12px`,fontFamily:`'Montserrat', sans-serif`},children:[`Выбрано: `,(0,l.jsx)(`strong`,{children:e})]}),[{id:`1`,value:`blue`,description:`Синий`},{id:`2`,value:`green`,description:`Зелёный`},{id:`3`,value:`red`,description:`Красный`}].map(n=>(0,l.jsx)(s,{id:n.id,name:`colors`,value:n.value,label:n.description,checked:n.value===e,onChange:()=>t(n.value)}))]})}},h={render:()=>(0,l.jsx)(i,{})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: '1',
    name: 'option',
    value: '1',
    label: 'Вариант 1'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Radio name="color" value="Синий" />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      id: '1',
      value: 'blue',
      description: 'Синий'
    }, {
      id: '2',
      value: 'green',
      description: 'Зелёный'
    }, {
      id: '3',
      value: 'red',
      description: 'Красный'
    }];
    return <fieldset role="radiogroup" style={{
      width: "120px",
      border: "none"
    }}>
        {options.map(opt => <Radio id={opt.id} name="color" value={opt.value} label={opt.description} />)}
      </fieldset>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>('blue');
    const options = [{
      id: '1',
      value: 'blue',
      description: 'Синий'
    }, {
      id: '2',
      value: 'green',
      description: 'Зелёный'
    }, {
      id: '3',
      value: 'red',
      description: 'Красный'
    }];
    return <fieldset role="radiogroup" style={{
      width: "120px",
      border: "none"
    }}>
        <p style={{
        marginBottom: '12px',
        fontFamily: "'Montserrat', sans-serif"
      }}>
          Выбрано: <strong>{selectedValue}</strong>
        </p>
        {options.map(opt => <Radio id={opt.id} name="colors" value={opt.value} label={opt.description} checked={opt.value === selectedValue} onChange={() => setSelectedValue(opt.value)} />)}
      </fieldset>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <RadioSkeleton />
}`,...h.parameters?.docs?.source}}},g=[`Default`,`SimpleRadio`,`GroupRadio`,`GroupRadioWithState`,`Skeleton`]}))();export{d as Default,p as GroupRadio,m as GroupRadioWithState,f as SimpleRadio,h as Skeleton,g as __namedExportsOrder,u as default};