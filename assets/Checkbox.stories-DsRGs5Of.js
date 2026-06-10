import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{i,v as a}from"./ComponentSkeletons-0oETlvfY.js";import{n as o,t as s}from"./Checkbox-BS0ML0qO.js";var c,l,u,d,f,p,m,h,g;t((()=>{o(),c=e(n(),1),a(),l=r(),u={title:`FILTERS/Checkbox`,component:s,parameters:{layout:`centered`},tags:[`autodocs`]},d={args:{name:`option`,value:`1`,id:`1`,label:`Вариант 1`}},f={render:()=>(0,l.jsx)(s,{name:`color`,value:`Синий`})},p={render:()=>(0,l.jsx)(`fieldset`,{role:`group`,style:{width:`120px`,border:`none`},children:[{id:`1`,value:`blue`,description:`Синий`},{id:`2`,value:`green`,description:`Зелёный`},{id:`3`,value:`red`,description:`Красный`}].map(e=>(0,l.jsx)(s,{id:e.id,name:`color`,value:e.value,label:e.description}))})},m={render:()=>{let[e,t]=(0,c.useState)([`blue`]),n=e=>{t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,l.jsxs)(`fieldset`,{role:`group`,style:{width:`120px`,border:`none`},children:[(0,l.jsxs)(`p`,{style:{marginBottom:`12px`,fontFamily:`'Montserrat', sans-serif`},children:[`Выбрано:`,(0,l.jsx)(`br`,{}),(0,l.jsx)(`strong`,{children:e.map(e=>`${e} `)})]}),[{id:`1`,value:`blue`,description:`Синий`},{id:`2`,value:`green`,description:`Зелёный`},{id:`3`,value:`red`,description:`Красный`}].map(t=>(0,l.jsx)(s,{id:t.id,name:`color`,value:t.value,label:t.description,checked:e.includes(t.value),onChange:()=>n(t.value)}))]})}},h={render:()=>(0,l.jsx)(i,{})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'option',
    value: '1',
    id: '1',
    label: 'Вариант 1'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Checkbox name="color" value="Синий" />;
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
    return <fieldset role="group" style={{
      width: "120px",
      border: "none"
    }}>
        {options.map(opt => <Checkbox id={opt.id} name="color" value={opt.value} label={opt.description} />)}
      </fieldset>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxSkeleton />
}`,...h.parameters?.docs?.source}}},g=[`Default`,`SimpleCheckbox`,`GroupCheckbox`,`GroupCheckboxWithState`,`Skeleton`]}))();export{d as Default,p as GroupCheckbox,m as GroupCheckboxWithState,f as SimpleCheckbox,h as Skeleton,g as __namedExportsOrder,u as default};