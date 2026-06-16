import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r}from"./iframe-D3lb2UIJ.js";import{n as i,t as a}from"./Multiselect-B8-WQz1m.js";var o,s,c,l,u,d,f,p,m,h;t((()=>{o=e(n(),1),i(),s=r(),c={title:`FILTERS/MultiSelect`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{id:`skills`,name:`skills`,label:`Навыки`,options:[{value:`react`,label:`React`},{value:`ts`,label:`TypeScript`},{value:`storybook`,label:`Storybook`},{value:`a11y`,label:`Accessibility`},{value:`css`,label:`CSS`}]},argTypes:{onChange:{action:`change`}}},l={},u={args:{defaultValue:[`react`,`storybook`],name:`skills2`}},d={args:{defaultValue:[`react`,`ts`],disabled:!0,name:`skills3`}},f={args:{defaultValue:[`react`],isError:!0,errorMessage:`Нужно выбрать минимум два навыка`,name:`skills4`}},p={render:e=>{let[t,n]=(0,o.useState)([`react`,`storybook`]);return(0,s.jsx)(a,{...e,value:t,onChange:(t,r)=>{n(t),e.onChange?.(t,r)}})},args:{label:`Интерактивный мультиселект`,placeholder:`Выбери один или более навыков`,name:`skills5`}},m={render:e=>{let[t,n]=(0,o.useState)([`react`,`ts`]);return(0,s.jsxs)(`div`,{style:{display:`grid`,gap:16,width:240},children:[(0,s.jsx)(a,{...e,value:t,onChange:(t,r)=>{n(t),e.onChange?.(t,r)}}),(0,s.jsxs)(`div`,{style:{fontFamily:`sans-serif`,fontSize:14,lineHeight:1.5},children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`strong`,{children:`Selected values:`}),` `,t.length?t.join(`, `):`none`]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`strong`,{children:`How to test:`}),` open the dropdown, click an option to add it, click it again to remove it, or remove tags directly in the control.`]})]})]})},args:{label:`Add and remove demo`,placeholder:`Choose technologies`,name:`skills6`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ['react', 'storybook'],
    name: 'skills2'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ['react', 'ts'],
    disabled: true,
    name: 'skills3'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ['react'],
    isError: true,
    errorMessage: 'Нужно выбрать минимум два навыка',
    name: 'skills4'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>(['react', 'storybook']);
    return <MultiSelect {...args} value={value} onChange={(nextValue, selectedOptions) => {
      setValue(nextValue);
      args.onChange?.(nextValue, selectedOptions);
    }} />;
  },
  args: {
    label: 'Интерактивный мультиселект',
    placeholder: 'Выбери один или более навыков',
    name: 'skills5'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>(['react', 'ts']);
    return <div style={{
      display: 'grid',
      gap: 16,
      width: 240
    }}>
        <MultiSelect {...args} value={value} onChange={(nextValue, selectedOptions) => {
        setValue(nextValue);
        args.onChange?.(nextValue, selectedOptions);
      }} />

        <div style={{
        fontFamily: 'sans-serif',
        fontSize: 14,
        lineHeight: 1.5
      }}>
          <div><strong>Selected values:</strong> {value.length ? value.join(', ') : 'none'}</div>
          <div>
            <strong>How to test:</strong> open the dropdown, click an option to add it,
            click it again to remove it, or remove tags directly in the control.
          </div>
        </div>
      </div>;
  },
  args: {
    label: 'Add and remove demo',
    placeholder: 'Choose technologies',
    name: 'skills6'
  }
}`,...m.parameters?.docs?.source}}},h=[`Empty`,`Preselected`,`Disabled`,`ErrorState`,`Interactive`,`AddAndRemoveDemo`]}))();export{m as AddAndRemoveDemo,d as Disabled,l as Empty,f as ErrorState,p as Interactive,u as Preselected,h as __namedExportsOrder,c as default};