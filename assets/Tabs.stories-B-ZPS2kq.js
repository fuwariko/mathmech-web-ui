import{n as e}from"./chunk-BneVvdWh.js";import{a as t,n,r}from"./iframe-D3lb2UIJ.js";import{n as i,t as a}from"./tabs-E3RHvjaI.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{r(),i(),o=t(),s=n,c=[{id:`home`,label:`Главная`,content:(0,o.jsx)(`div`,{style:{padding:16},children:`Контент главной страницы`})},{id:`profile`,label:`Профиль`,content:(0,o.jsx)(`div`,{style:{padding:16},children:`Контент профиля`})},{id:`settings`,label:`Настройки`,content:(0,o.jsx)(`div`,{style:{padding:16},children:`Контент настроек`})}],l={title:`UI/Tabs`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{tabs:c,vertical:!1,withScrollButtons:!1,variant:`filled`,activeColor:`mainBlue`,backgroundColor:`lightGrey01`},argTypes:{vertical:{control:`boolean`},withScrollButtons:{control:`boolean`},variant:{control:`radio`,options:[`filled`,`underline`]},activeColor:{control:`select`,options:s},backgroundColor:{control:`select`,options:s}}},u={},d={args:{variant:`underline`}},f={args:{vertical:!0}},p={args:{vertical:!0,variant:`underline`}},m={args:{tabs:[c[0],{id:`disabled`,label:`Disabled`,disabled:!0,content:(0,o.jsx)(`div`,{style:{padding:16},children:`Disabled tab`})},c[2]]}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'underline'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    vertical: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    vertical: true,
    variant: 'underline'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [tabs[0], {
      id: 'disabled',
      label: 'Disabled',
      disabled: true,
      content: <div style={{
        padding: 16
      }}>
            Disabled tab
          </div>
    }, tabs[2]]
  }
}`,...m.parameters?.docs?.source}}},h=[`Filled`,`Underline`,`Vertical`,`VerticalUnderline`,`DisabledTab`]}))();export{m as DisabledTab,u as Filled,d as Underline,f as Vertical,p as VerticalUnderline,h as __namedExportsOrder,l as default};