import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{_ as i,v as a}from"./ComponentSkeletons-0oETlvfY.js";import{n as o,t as s}from"./Toggle-DSPOVn8D.js";var c,l,u,d,f,p,m,h,g;t((()=>{o(),c=e(n(),1),a(),l=r(),u={title:`FILTERS/Toggle`,component:s,parameters:{layout:`centered`},tags:[`autodocs`]},d={args:{name:`toggle`,label:`Опция`}},f={render:()=>(0,l.jsx)(s,{id:`1`,name:`name`})},p={render:()=>(0,l.jsx)(`fieldset`,{role:`group`,style:{width:`120px`,border:`none`},children:[{id:`1`,name:`speed`,description:`Скорость`},{id:`2`,name:`price`,description:`Цена`},{id:`3`,name:`quality`,description:`Качество`}].map(e=>(0,l.jsx)(s,{id:e.id,name:e.name,label:e.description}))})},m={render:()=>{let[e,t]=(0,c.useState)([]),n=e=>{t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,l.jsxs)(`fieldset`,{role:`group`,style:{width:`120px`,border:`none`},children:[(0,l.jsxs)(`p`,{style:{marginBottom:`12px`},children:[`Выбрано:`,(0,l.jsx)(`br`,{}),(0,l.jsx)(`strong`,{children:e.map(e=>`${e} `)})]}),[{id:`1`,value:`Speed`,label:`Скорость`},{id:`2`,value:`Price`,label:`Цена`},{id:`3`,value:`Quality`,label:`Качество`}].map(t=>(0,l.jsx)(s,{id:t.id,value:t.value,name:`settings`,label:t.label,checked:e.includes(t.value),onChange:()=>n(t.value)}))]})}},h={render:()=>(0,l.jsx)(i,{})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'toggle',
    label: 'Опция'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Toggle id="1" name="name" />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleSkeleton />
}`,...h.parameters?.docs?.source}}},g=[`Default`,`SimpleToggle`,`GroupToggle`,`GroupToggleWithState`,`Skeleton`]}))();export{d as Default,p as GroupToggle,m as GroupToggleWithState,f as SimpleToggle,h as Skeleton,g as __namedExportsOrder,u as default};