import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{l as i,v as a}from"./ComponentSkeletons-0oETlvfY.js";import{n as o,t as s}from"./Multiselect-BN4MYVhW.js";var c,l,u,d,f,p,m,h,g,_,v;t((()=>{o(),c=e(n(),1),a(),l=r(),u={title:`FILTERS/MultiSelect`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],args:{id:`skills`,name:`skills`,label:`Навыки`,options:[{value:`react`,label:`React`},{value:`ts`,label:`TypeScript`},{value:`storybook`,label:`Storybook`},{value:`a11y`,label:`Accessibility`},{value:`css`,label:`CSS`}]},argTypes:{onChange:{action:`change`}}},d={},f={args:{defaultValue:[`react`,`storybook`],name:`skills2`}},p={args:{defaultValue:[`react`,`ts`],disabled:!0,name:`skills3`}},m={args:{defaultValue:[`react`],isError:!0,errorMessage:`Нужно выбрать минимум два навыка`,name:`skills4`}},h={render:e=>{let[t,n]=(0,c.useState)([`react`,`storybook`]);return(0,l.jsx)(s,{...e,value:t,onChange:(t,r)=>{n(t),e.onChange?.(t,r)}})},args:{label:`Интерактивный мультиселект`,placeholder:`Выбери один или более навыков`,name:`skills5`}},g={render:e=>{let[t,n]=(0,c.useState)([`react`,`ts`]);return(0,l.jsxs)(`div`,{style:{display:`grid`,gap:16,width:240},children:[(0,l.jsx)(s,{...e,value:t,onChange:(t,r)=>{n(t),e.onChange?.(t,r)}}),(0,l.jsxs)(`div`,{style:{fontFamily:`sans-serif`,fontSize:14,lineHeight:1.5},children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:`Selected values:`}),` `,t.length?t.join(`, `):`none`]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:`How to test:`}),` open the dropdown, click an option to add it, click it again to remove it, or remove tags directly in the control.`]})]})]})},args:{label:`Add and remove demo`,placeholder:`Choose technologies`,name:`skills6`}},_={render:()=>(0,l.jsx)(`div`,{style:{width:256},children:(0,l.jsx)(i,{})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ['react', 'storybook'],
    name: 'skills2'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ['react', 'ts'],
    disabled: true,
    name: 'skills3'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ['react'],
    isError: true,
    errorMessage: 'Нужно выбрать минимум два навыка',
    name: 'skills4'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 256
  }}>
      <MultiselectSkeleton />
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Empty`,`Preselected`,`Disabled`,`ErrorState`,`Interactive`,`AddAndRemoveDemo`,`Skeleton`]}))();export{g as AddAndRemoveDemo,p as Disabled,d as Empty,m as ErrorState,h as Interactive,f as Preselected,_ as Skeleton,v as __namedExportsOrder,u as default};