import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B6lWK8m9.js";import{r as n,t as r}from"./emotion-css.esm-nW0xTD3m.js";import{n as i,t as a}from"./color-tokens-BPpBLVR4.js";import{n as o,t as s}from"./hint-BD1OadsY.js";var c,l,u,d,f=e((()=>{n(),i(),o(),c=t(),l=({content:e,position:t=`top`,color:n=`darkGrey01`,icon:r=`info`,children:i,className:a})=>(0,c.jsx)(s,{content:e,position:t,backgroundColor:n,className:a,children:i??(0,c.jsx)(`div`,{className:d(n),children:u(r)})}),u=e=>{switch(e){case`warning`:return`!`;case`question`:return`?`;default:return`i`}},d=e=>r`
  width: 18px;
  height: 18px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  font-size: 12px;
  font-weight: 600;
  line-height: 1;

  color: #fff;
  background: ${a[e]};

  cursor: default;
  user-select: none;

  transition:
    transform 0.15s ease,
    opacity 0.15s ease;

  &:hover {
    transform: scale(1.08);
    opacity: 0.9;
  }
`,l.__docgenInfo={description:``,methods:[],displayName:`Tooltip`,props:{content:{required:!0,tsType:{name:`ReactNode`},description:`Контент тултипа`},position:{required:!1,tsType:{name:`union`,raw:`| 'top'
| 'bottom'
| 'left'
| 'right'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`Позиция`,defaultValue:{value:`'top'`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`keyof typeof allColors`,elements:[{name:`literal`,value:`darkNavy01`},{name:`literal`,value:`darkNavy02`},{name:`literal`,value:`mainNavy`},{name:`literal`,value:`lightNavy01`},{name:`literal`,value:`lightNavy02`},{name:`literal`,value:`darkOrange01`},{name:`literal`,value:`darkOrange02`},{name:`literal`,value:`mainOrange`},{name:`literal`,value:`lightOrange01`},{name:`literal`,value:`lightOrange02`},{name:`literal`,value:`darkGreen01`},{name:`literal`,value:`darkGreen02`},{name:`literal`,value:`mainGreen`},{name:`literal`,value:`lightGreen01`},{name:`literal`,value:`lightGreen02`},{name:`literal`,value:`darkRed01`},{name:`literal`,value:`darkRed02`},{name:`literal`,value:`mainRed`},{name:`literal`,value:`lightRed01`},{name:`literal`,value:`lightRed02`},{name:`literal`,value:`darkCrimson01`},{name:`literal`,value:`darkCrimson02`},{name:`literal`,value:`mainCrimson`},{name:`literal`,value:`lightCrimson01`},{name:`literal`,value:`lightCrimson02`},{name:`literal`,value:`darkBlue01`},{name:`literal`,value:`darkBlue02`},{name:`literal`,value:`mainBlue`},{name:`literal`,value:`lightBlue01`},{name:`literal`,value:`lightBlue02`},{name:`literal`,value:`darkPurple01`},{name:`literal`,value:`darkPurple02`},{name:`literal`,value:`mainPurple`},{name:`literal`,value:`lightPurple01`},{name:`literal`,value:`lightPurple02`},{name:`literal`,value:`darkGrey01`},{name:`literal`,value:`darkGrey02`},{name:`literal`,value:`mainGrey`},{name:`literal`,value:`lightGrey01`},{name:`literal`,value:`lightGrey02`}]},description:`Цвет`,defaultValue:{value:`'darkGrey01'`,computed:!1}},icon:{required:!1,tsType:{name:`union`,raw:`| 'info'
| 'warning'
| 'question'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'question'`}]},description:`Иконка`,defaultValue:{value:`'info'`,computed:!1}},children:{required:!1,tsType:{name:`ReactElement`},description:`Кастомный триггер`},className:{required:!1,tsType:{name:`string`},description:``}}}})),p,m,h,g,_,v,y,b,x,S;e((()=>{f(),p=t(),m={title:`UI/Tooltip`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],args:{position:`top`,color:`darkGrey01`,icon:`info`,content:(0,p.jsx)(`div`,{children:`Tooltip с описанием и дополнительным контентом.`})},argTypes:{position:{control:`radio`,options:[`top`,`bottom`,`left`,`right`]},color:{control:`select`,options:[`darkBlue01`,`darkBlue02`,`mainBlue`,`darkGrey01`,`darkCrimson02`]},icon:{control:`radio`,options:[`info`,`warning`,`question`]},children:{control:!1,description:`Custom trigger вместо иконки`}}},h={},g={args:{icon:`warning`}},_={args:{icon:`question`}},v={args:{position:`bottom`}},y={args:{position:`left`}},b={args:{position:`right`}},x={args:{children:(0,p.jsx)(`span`,{style:{padding:`6px 10px`,borderRadius:`8px`,background:`#eee`,cursor:`pointer`},children:`Hover me`})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source},description:{story:`дефолт — иконка info`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'warning'
  }
}`,...g.parameters?.docs?.source},description:{story:`warning вариант`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'question'
  }
}`,..._.parameters?.docs?.source},description:{story:`question вариант`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'bottom'
  }
}`,...v.parameters?.docs?.source},description:{story:`позиция снизу`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'left'
  }
}`,...y.parameters?.docs?.source},description:{story:`слева`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'right'
  }
}`,...b.parameters?.docs?.source},description:{story:`справа`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: <span style={{
      padding: '6px 10px',
      borderRadius: '8px',
      background: '#eee',
      cursor: 'pointer'
    }}>
        Hover me
      </span>
  }
}`,...x.parameters?.docs?.source},description:{story:`кастомный триггер`,...x.parameters?.docs?.description}}},S=[`Default`,`Warning`,`Question`,`Bottom`,`Left`,`Right`,`CustomTrigger`]}))();export{v as Bottom,x as CustomTrigger,h as Default,y as Left,_ as Question,b as Right,g as Warning,S as __namedExportsOrder,m as default};