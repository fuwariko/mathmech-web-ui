import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r}from"./iframe-D3lb2UIJ.js";import{n as i,t as a}from"./Select-qDnUi4qr.js";var o,s,c,l,u,d,f,p,m,h,g,_;t((()=>{o=e(n(),1),i(),s=r(),c={title:`FILTERS/Select`,component:a,parameters:{layout:`centered`},tags:[`autodocs`]},l=[{value:`ekb`,label:`Екатеринбург`},{value:`msk`,label:`Москва`},{value:`spb`,label:`Санкт-Петербург`},{value:`nnv`,label:`Нижний Новгород`},{value:`kzn`,label:`Казань`}],u={args:{id:`city`,name:`city`,label:`Город`,placeholder:`Выберите город`,options:l,onChange:e=>console.log(e)}},d={args:{id:`city-default`,name:`city-default`,label:`Город`,placeholder:`Выберите город`,options:l,defaultValue:`msk`,onChange:e=>console.log(e)}},f={render:e=>{let[t,n]=(0,o.useState)(`spb`);return(0,s.jsx)(`form`,{style:{width:`400px`},children:(0,s.jsx)(a,{...e,value:t,onChange:(t,r)=>{n(t),e.onChange?.(t,r)}})})},args:{id:`city-controlled`,name:`city-controlled`,label:`Город`,placeholder:`Выберите город`,options:l}},p={render:e=>{let[t,n]=(0,o.useState)(``);return(0,s.jsx)(a,{...e,value:t,onChange:(t,r)=>{n(t),e.onChange?.(t,r)}})},args:{id:`city-empty`,name:`city-empty`,label:`Город`,placeholder:`Выберите город`,options:l}},m={render:e=>(0,s.jsx)(`fieldset`,{role:`group`,style:{width:`256px`,border:`none`},children:(0,s.jsx)(a,{...e})}),args:{id:`city-error`,name:`city-error`,label:`Город`,placeholder:`Выберите город`,options:l,isError:!0,errorMessage:`Поле обязательно для заполнения`,onChange:e=>console.log(e)}},h={args:{id:`city-disabled`,name:`city-disabled`,label:`Город`,placeholder:`Выберите город`,options:l,disabled:!0,defaultValue:`ekb`,onChange:e=>console.log(e)}},g={args:{id:`city-required`,name:`city-required`,label:`Город`,placeholder:`Выберите город`,options:l,required:!0,onChange:e=>console.log(e)}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'city',
    name: 'city',
    label: 'Город',
    placeholder: 'Выберите город',
    options,
    onChange: value => console.log(value)
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'city-default',
    name: 'city-default',
    label: 'Город',
    placeholder: 'Выберите город',
    options,
    defaultValue: 'msk',
    onChange: value => console.log(value)
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('spb');
    return <form style={{
      width: "400px"
    }}>
      <Select {...args} value={value} onChange={(nextValue, option) => {
        setValue(nextValue);
        args.onChange?.(nextValue, option);
      }} />
      </form>;
  },
  args: {
    id: 'city-controlled',
    name: 'city-controlled',
    label: 'Город',
    placeholder: 'Выберите город',
    options
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <Select {...args} value={value} onChange={(nextValue, option) => {
      setValue(nextValue);
      args.onChange?.(nextValue, option);
    }} />;
  },
  args: {
    id: 'city-empty',
    name: 'city-empty',
    label: 'Город',
    placeholder: 'Выберите город',
    options
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <fieldset role="group" style={{
      width: "256px",
      border: "none"
    }}>
        <Select {...args} />
      </fieldset>;
  },
  args: {
    id: 'city-error',
    name: 'city-error',
    label: 'Город',
    placeholder: 'Выберите город',
    options,
    isError: true,
    errorMessage: 'Поле обязательно для заполнения',
    onChange: value => console.log(value)
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'city-disabled',
    name: 'city-disabled',
    label: 'Город',
    placeholder: 'Выберите город',
    options,
    disabled: true,
    defaultValue: 'ekb',
    onChange: value => console.log(value)
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'city-required',
    name: 'city-required',
    label: 'Город',
    placeholder: 'Выберите город',
    options,
    required: true,
    onChange: value => console.log(value)
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`UncontrolledWithDefaultValue`,`Controlled`,`ControlledEmpty`,`WithError`,`Disabled`,`Required`]}))();export{f as Controlled,p as ControlledEmpty,u as Default,h as Disabled,g as Required,d as UncontrolledWithDefaultValue,m as WithError,_ as __namedExportsOrder,c as default};