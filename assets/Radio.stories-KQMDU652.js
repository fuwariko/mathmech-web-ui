import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r}from"./iframe-D3lb2UIJ.js";import{n as i,t as a}from"./Radio-CSrvKjGE.js";var o,s,c,l,u,d,f,p;t((()=>{o=e(n(),1),i(),s=r(),c={title:`FILTERS/Radio`,component:a,parameters:{layout:`centered`},tags:[`autodocs`]},l={args:{id:`1`,name:`option`,value:`1`,label:`Вариант 1`}},u={render:()=>(0,s.jsx)(a,{name:`color`,value:`Синий`})},d={render:()=>(0,s.jsx)(`fieldset`,{role:`radiogroup`,style:{width:`120px`,border:`none`},children:[{id:`1`,value:`blue`,description:`Синий`},{id:`2`,value:`green`,description:`Зелёный`},{id:`3`,value:`red`,description:`Красный`}].map(e=>(0,s.jsx)(a,{id:e.id,name:`color`,value:e.value,label:e.description}))})},f={render:()=>{let[e,t]=(0,o.useState)(`blue`);return(0,s.jsxs)(`fieldset`,{role:`radiogroup`,style:{width:`120px`,border:`none`},children:[(0,s.jsxs)(`p`,{style:{marginBottom:`12px`,fontFamily:`'Montserrat', sans-serif`},children:[`Выбрано: `,(0,s.jsx)(`strong`,{children:e})]}),[{id:`1`,value:`blue`,description:`Синий`},{id:`2`,value:`green`,description:`Зелёный`},{id:`3`,value:`red`,description:`Красный`}].map(n=>(0,s.jsx)(a,{id:n.id,name:`colors`,value:n.value,label:n.description,checked:n.value===e,onChange:()=>t(n.value)}))]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: '1',
    name: 'option',
    value: '1',
    label: 'Вариант 1'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Radio name="color" value="Синий" />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Default`,`SimpleRadio`,`GroupRadio`,`GroupRadioWithState`]}))();export{l as Default,d as GroupRadio,f as GroupRadioWithState,u as SimpleRadio,p as __namedExportsOrder,c as default};