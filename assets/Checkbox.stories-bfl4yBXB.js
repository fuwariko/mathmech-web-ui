import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r}from"./iframe-D3lb2UIJ.js";import{n as i,t as a}from"./Checkbox-DUZyStR2.js";var o,s,c,l,u,d,f,p;t((()=>{i(),o=e(n(),1),s=r(),c={title:`FILTERS/Checkbox`,component:a,parameters:{layout:`centered`},tags:[`autodocs`]},l={args:{name:`option`,value:`1`,id:`1`,label:`Вариант 1`}},u={render:()=>(0,s.jsx)(a,{name:`color`,value:`Синий`})},d={render:()=>(0,s.jsx)(`fieldset`,{role:`group`,style:{width:`120px`,border:`none`},children:[{id:`1`,value:`blue`,description:`Синий`},{id:`2`,value:`green`,description:`Зелёный`},{id:`3`,value:`red`,description:`Красный`}].map(e=>(0,s.jsx)(a,{id:e.id,name:`color`,value:e.value,label:e.description}))})},f={render:()=>{let[e,t]=(0,o.useState)([`blue`]),n=e=>{t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,s.jsxs)(`fieldset`,{role:`group`,style:{width:`120px`,border:`none`},children:[(0,s.jsxs)(`p`,{style:{marginBottom:`12px`,fontFamily:`'Montserrat', sans-serif`},children:[`Выбрано:`,(0,s.jsx)(`br`,{}),(0,s.jsx)(`strong`,{children:e.map(e=>`${e} `)})]}),[{id:`1`,value:`blue`,description:`Синий`},{id:`2`,value:`green`,description:`Зелёный`},{id:`3`,value:`red`,description:`Красный`}].map(t=>(0,s.jsx)(a,{id:t.id,name:`color`,value:t.value,label:t.description,checked:e.includes(t.value),onChange:()=>n(t.value)}))]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'option',
    value: '1',
    id: '1',
    label: 'Вариант 1'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Checkbox name="color" value="Синий" />;
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
    return <fieldset role="group" style={{
      width: "120px",
      border: "none"
    }}>
        {options.map(opt => <Checkbox id={opt.id} name="color" value={opt.value} label={opt.description} />)}
      </fieldset>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>(['blue']);
    const handleChange = (value: string) => {
      setSelected(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
    };
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
    return <fieldset role="group" style={{
      width: "120px",
      border: "none"
    }}>
        <p style={{
        marginBottom: '12px',
        fontFamily: "'Montserrat', sans-serif"
      }}>
          Выбрано:<br /><strong>{selected.map(sel => \`\${sel} \`)}</strong>
        </p>
        {options.map(opt => <Checkbox id={opt.id} name="color" value={opt.value} label={opt.description} checked={selected.includes(opt.value)} onChange={() => handleChange(opt.value)} />)}
      </fieldset>;
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`SimpleCheckbox`,`GroupCheckbox`,`GroupCheckboxWithState`]}))();export{l as Default,d as GroupCheckbox,f as GroupCheckboxWithState,u as SimpleCheckbox,p as __namedExportsOrder,c as default};