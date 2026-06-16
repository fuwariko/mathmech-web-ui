import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r}from"./iframe-D3lb2UIJ.js";import{n as i,t as a}from"./Toggle-j45rnNvb.js";var o,s,c,l,u,d,f,p;t((()=>{o=e(n(),1),i(),s=r(),c={title:`FILTERS/Toggle`,component:a,parameters:{layout:`centered`},tags:[`autodocs`]},l={args:{name:`toggle`,label:`Опция`}},u={render:()=>(0,s.jsx)(a,{id:`1`,name:`name`})},d={render:()=>(0,s.jsx)(`fieldset`,{role:`group`,style:{width:`120px`,border:`none`},children:[{id:`1`,name:`speed`,description:`Скорость`},{id:`2`,name:`price`,description:`Цена`},{id:`3`,name:`quality`,description:`Качество`}].map(e=>(0,s.jsx)(a,{id:e.id,name:e.name,label:e.description}))})},f={render:()=>{let[e,t]=(0,o.useState)([]),n=e=>{t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,s.jsxs)(`fieldset`,{role:`group`,style:{width:`120px`,border:`none`},children:[(0,s.jsxs)(`p`,{style:{marginBottom:`12px`},children:[`Выбрано:`,(0,s.jsx)(`br`,{}),(0,s.jsx)(`strong`,{children:e.map(e=>`${e} `)})]}),[{id:`1`,value:`Speed`,label:`Скорость`},{id:`2`,value:`Price`,label:`Цена`},{id:`3`,value:`Quality`,label:`Качество`}].map(t=>(0,s.jsx)(a,{id:t.id,value:t.value,name:`settings`,label:t.label,checked:e.includes(t.value),onChange:()=>n(t.value)}))]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'toggle',
    label: 'Опция'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Toggle id="1" name="name" />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      id: '1',
      name: 'speed',
      description: 'Скорость'
    }, {
      id: '2',
      name: 'price',
      description: 'Цена'
    }, {
      id: '3',
      name: 'quality',
      description: 'Качество'
    }];
    return <fieldset role="group" style={{
      width: "120px",
      border: "none"
    }}>
        {options.map(opt => <Toggle id={opt.id} name={opt.name} label={opt.description} />)}
      </fieldset>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    const handleChange = (value: string) => {
      setSelected(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
    };
    const options = [{
      id: '1',
      value: 'Speed',
      label: 'Скорость'
    }, {
      id: '2',
      value: 'Price',
      label: 'Цена'
    }, {
      id: '3',
      value: 'Quality',
      label: 'Качество'
    }];
    return <fieldset role="group" style={{
      width: "120px",
      border: "none"
    }}>
        <p style={{
        marginBottom: '12px'
      }}>
          Выбрано:<br /><strong>{selected.map(sel => \`\${sel} \`)}</strong>
        </p>
        {options.map(opt => <Toggle id={opt.id} value={opt.value} name="settings" label={opt.label} checked={selected.includes(opt.value)} onChange={() => handleChange(opt.value)} />)}
      </fieldset>;
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`SimpleToggle`,`GroupToggle`,`GroupToggleWithState`]}))();export{l as Default,d as GroupToggle,f as GroupToggleWithState,u as SimpleToggle,p as __namedExportsOrder,c as default};