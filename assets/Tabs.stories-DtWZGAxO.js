import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Bn1Ys6_W.js";import{m as n,v as r}from"./ComponentSkeletons-0oETlvfY.js";import{n as i,t as a}from"./tabs-BGa1d4sH.js";var o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{i(),r(),o=t(),s=`darkNavy01.darkNavy02.mainNavy.lightNavy01.lightNavy02.darkOrange01.darkOrange02.mainOrange.lightOrange01.lightOrange02.darkGreen01.darkGreen02.mainGreen.lightGreen01.lightGreen02.darkRed01.darkRed02.mainRed.lightRed01.lightRed02.darkCrimson01.darkCrimson02.mainCrimson.lightCrimson01.lightCrimson02.darkBlue01.darkBlue02.mainBlue.lightBlue01.lightBlue02.darkPurple01.darkPurple02.mainPurple.lightPurple01.lightPurple02.darkGrey01.darkGrey02.mainGrey.lightGrey01.lightGrey02`.split(`.`),c=[{id:`home`,label:`Главная`,content:(0,o.jsx)(`div`,{style:{padding:16},children:`Контент главной страницы`})},{id:`profile`,label:`Профиль`,content:(0,o.jsx)(`div`,{style:{padding:16},children:`Контент профиля`})},{id:`settings`,label:`Настройки`,content:(0,o.jsx)(`div`,{style:{padding:16},children:`Контент настроек`})}],l={title:`UI/Tabs`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{tabs:c,vertical:!1,withScrollButtons:!1,variant:`filled`,activeColor:`mainBlue`,backgroundColor:`lightGrey01`},argTypes:{vertical:{control:`boolean`},withScrollButtons:{control:`boolean`},variant:{control:`radio`,options:[`filled`,`underline`]},activeColor:{control:`select`,options:s},backgroundColor:{control:`select`,options:s}}},u={},d={args:{variant:`underline`}},f={args:{vertical:!0}},p={args:{vertical:!0,variant:`underline`}},m={args:{withScrollButtons:!0,variant:`underline`,tabs:Array.from({length:10},(e,t)=>({id:`${t}`,label:`Tab ${t+1}`,content:(0,o.jsxs)(`div`,{style:{padding:16},children:[`Контент таба `,t+1]})}))}},h={args:{tabs:[c[0],{id:`disabled`,label:`Disabled`,disabled:!0,content:(0,o.jsx)(`div`,{style:{padding:16},children:`Disabled tab`})},c[2]]}},g={render:()=>(0,o.jsx)(n,{})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    withScrollButtons: true,
    variant: 'underline',
    tabs: Array.from({
      length: 10
    }, (_, index) => ({
      id: \`\${index}\`,
      label: \`Tab \${index + 1}\`,
      content: <div style={{
        padding: 16
      }}>
            Контент таба {index + 1}
          </div>
    }))
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <TabsSkeleton />
}`,...g.parameters?.docs?.source}}},_=[`Filled`,`Underline`,`Vertical`,`VerticalUnderline`,`WithScrollButtons`,`DisabledTab`,`Skeleton`]}))();export{h as DisabledTab,u as Filled,g as Skeleton,d as Underline,f as Vertical,p as VerticalUnderline,m as WithScrollButtons,_ as __namedExportsOrder,l as default};