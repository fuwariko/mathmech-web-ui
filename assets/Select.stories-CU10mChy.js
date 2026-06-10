import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{p as i,v as a}from"./ComponentSkeletons-0oETlvfY.js";import{n as o,t as s}from"./Select-CZ_i0eAP.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;t((()=>{o(),c=e(n(),1),a(),l=r(),u={title:`FILTERS/Select`,component:s,parameters:{layout:`centered`},tags:[`autodocs`]},d=[{value:`ekb`,label:`Екатеринбург`},{value:`msk`,label:`Москва`},{value:`spb`,label:`Санкт-Петербург`},{value:`nnv`,label:`Нижний Новгород`},{value:`kzn`,label:`Казань`}],f={args:{id:`city`,name:`city`,label:`Город`,placeholder:`Выберите город`,options:d,onChange:e=>console.log(e)}},p={args:{id:`city-default`,name:`city-default`,label:`Город`,placeholder:`Выберите город`,options:d,defaultValue:`msk`,onChange:e=>console.log(e)}},m={render:e=>{let[t,n]=(0,c.useState)(`spb`);return(0,l.jsx)(`form`,{style:{width:`400px`},children:(0,l.jsx)(s,{...e,value:t,onChange:(t,r)=>{n(t),e.onChange?.(t,r)}})})},args:{id:`city-controlled`,name:`city-controlled`,label:`Город`,placeholder:`Выберите город`,options:d}},h={render:e=>{let[t,n]=(0,c.useState)(``);return(0,l.jsx)(s,{...e,value:t,onChange:(t,r)=>{n(t),e.onChange?.(t,r)}})},args:{id:`city-empty`,name:`city-empty`,label:`Город`,placeholder:`Выберите город`,options:d}},g={render:e=>(0,l.jsx)(`fieldset`,{role:`group`,style:{width:`256px`,border:`none`},children:(0,l.jsx)(s,{...e})}),args:{id:`city-error`,name:`city-error`,label:`Город`,placeholder:`Выберите город`,options:d,isError:!0,errorMessage:`Поле обязательно для заполнения`,onChange:e=>console.log(e)}},_={args:{id:`city-disabled`,name:`city-disabled`,label:`Город`,placeholder:`Выберите город`,options:d,disabled:!0,defaultValue:`ekb`,onChange:e=>console.log(e)}},v={args:{id:`city-required`,name:`city-required`,label:`Город`,placeholder:`Выберите город`,options:d,required:!0,onChange:e=>console.log(e)}},y={render:()=>(0,l.jsx)(`div`,{style:{width:256},children:(0,l.jsx)(i,{})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'city',
    name: 'city',
    label: 'Город',
    placeholder: 'Выберите город',
    options,
    onChange: value => console.log(value)
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'city-default',
    name: 'city-default',
    label: 'Город',
    placeholder: 'Выберите город',
    options,
    defaultValue: 'msk',
    onChange: value => console.log(value)
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'city-required',
    name: 'city-required',
    label: 'Город',
    placeholder: 'Выберите город',
    options,
    required: true,
    onChange: value => console.log(value)
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 256
  }}>
      <SelectSkeleton />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`UncontrolledWithDefaultValue`,`Controlled`,`ControlledEmpty`,`WithError`,`Disabled`,`Required`,`Skeleton`]}))();export{m as Controlled,h as ControlledEmpty,f as Default,_ as Disabled,v as Required,y as Skeleton,p as UncontrolledWithDefaultValue,g as WithError,b as __namedExportsOrder,u as default};