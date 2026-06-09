import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-B6lWK8m9.js";import{n as i,t as a}from"./color-tokens-BPpBLVR4.js";import{n as o,t as s}from"./emotion-styled.browser.esm-CJX6AVeg.js";var c,l,u,d=t((()=>{s(),i(),c=o.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + span {
    border-color: ${e=>a[e.color]};
    background-color: #fff;
  }
  &:checked + span::before {
    content: '';
    width: 9px;
    height: 9px;
    background-color: ${e=>a[e.color]};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:focus + span {
    box-shadow: 0 0 0 2px ${e=>a[e.color]+`80`};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled + span {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,l=o.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  gap: 6px;

  &:has(input:disabled) {
    cursor: not-allowed;
  }
`,u=o.span`
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border: 1px solid #d3d3d3;
  border-radius: 50%;
  position: relative;
  transition: all 0.2s;
  margin: 0;
`})),f,p,m=t((()=>{e(n(),1),d(),f=r(),p=({id:e,name:t,value:n,label:r,color:i=`mainNavy`,reverse:a,checked:o,disabled:s,onChange:d,required:p,...m})=>(0,f.jsxs)(l,{title:n,children:[(0,f.jsx)(c,{id:e,type:`radio`,name:t,value:n,color:i,checked:o,disabled:s,onChange:e=>{d?.(e.target.value)},required:p,...m}),!a&&(0,f.jsx)(u,{}),r,a&&(0,f.jsx)(u,{})]}),p.__docgenInfo={description:``,methods:[],displayName:`Radio`,props:{name:{required:!0,tsType:{name:`string`},description:`Поле для идентификации и группировки элементов в форме`},value:{required:!0,tsType:{name:`string`},description:`Значение радио-кнопки`},id:{required:!1,tsType:{name:`string`},description:`Идентификатор для связи с другими элементами`},label:{required:!1,tsType:{name:`string`},description:`Текст радио-кнопки`},color:{required:!1,tsType:{name:`union`,raw:`keyof typeof allColors`,elements:[{name:`literal`,value:`darkNavy01`},{name:`literal`,value:`darkNavy02`},{name:`literal`,value:`mainNavy`},{name:`literal`,value:`lightNavy01`},{name:`literal`,value:`lightNavy02`},{name:`literal`,value:`darkOrange01`},{name:`literal`,value:`darkOrange02`},{name:`literal`,value:`mainOrange`},{name:`literal`,value:`lightOrange01`},{name:`literal`,value:`lightOrange02`},{name:`literal`,value:`darkGreen01`},{name:`literal`,value:`darkGreen02`},{name:`literal`,value:`mainGreen`},{name:`literal`,value:`lightGreen01`},{name:`literal`,value:`lightGreen02`},{name:`literal`,value:`darkRed01`},{name:`literal`,value:`darkRed02`},{name:`literal`,value:`mainRed`},{name:`literal`,value:`lightRed01`},{name:`literal`,value:`lightRed02`},{name:`literal`,value:`darkCrimson01`},{name:`literal`,value:`darkCrimson02`},{name:`literal`,value:`mainCrimson`},{name:`literal`,value:`lightCrimson01`},{name:`literal`,value:`lightCrimson02`},{name:`literal`,value:`darkBlue01`},{name:`literal`,value:`darkBlue02`},{name:`literal`,value:`mainBlue`},{name:`literal`,value:`lightBlue01`},{name:`literal`,value:`lightBlue02`},{name:`literal`,value:`darkPurple01`},{name:`literal`,value:`darkPurple02`},{name:`literal`,value:`mainPurple`},{name:`literal`,value:`lightPurple01`},{name:`literal`,value:`lightPurple02`},{name:`literal`,value:`darkGrey01`},{name:`literal`,value:`darkGrey02`},{name:`literal`,value:`mainGrey`},{name:`literal`,value:`lightGrey01`},{name:`literal`,value:`lightGrey02`}]},description:`Цвет радио-кнопки`,defaultValue:{value:`'mainNavy'`,computed:!1}},reverse:{required:!1,tsType:{name:`boolean`},description:`Положение текста, относительно радио-кнопки`},checked:{required:!1,tsType:{name:`boolean`},description:`Состояние "Выбрано"/"Не выбрано"`},disabled:{required:!1,tsType:{name:`boolean`},description:`Заблокированное состояние`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Отслеживание изменения состояния`},required:{required:!1,tsType:{name:`boolean`},description:`Обязательность заполнения`}},composes:[`Omit`]}})),h,g,_,v,y,b,x,S;t((()=>{m(),h=e(n(),1),g=r(),_={title:`FILTERS/Radio`,component:p,parameters:{layout:`centered`},tags:[`autodocs`]},v={args:{id:`1`,name:`option`,value:`1`,label:`Вариант 1`}},y={render:()=>(0,g.jsx)(p,{name:`color`,value:`Синий`})},b={render:()=>(0,g.jsx)(`fieldset`,{role:`radiogroup`,style:{width:`120px`,border:`none`},children:[{id:`1`,value:`blue`,description:`Синий`},{id:`2`,value:`green`,description:`Зелёный`},{id:`3`,value:`red`,description:`Красный`}].map(e=>(0,g.jsx)(p,{id:e.id,name:`color`,value:e.value,label:e.description}))})},x={render:()=>{let[e,t]=(0,h.useState)(`blue`);return(0,g.jsxs)(`fieldset`,{role:`radiogroup`,style:{width:`120px`,border:`none`},children:[(0,g.jsxs)(`p`,{style:{marginBottom:`12px`,fontFamily:`'Montserrat', sans-serif`},children:[`Выбрано: `,(0,g.jsx)(`strong`,{children:e})]}),[{id:`1`,value:`blue`,description:`Синий`},{id:`2`,value:`green`,description:`Зелёный`},{id:`3`,value:`red`,description:`Красный`}].map(n=>(0,g.jsx)(p,{id:n.id,name:`colors`,value:n.value,label:n.description,checked:n.value===e,onChange:()=>t(n.value)}))]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: '1',
    name: 'option',
    value: '1',
    label: 'Вариант 1'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Radio name="color" value="Синий" />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    return <fieldset role="radiogroup" style={{
      width: "120px",
      border: "none"
    }}>
        {options.map(opt => <Radio id={opt.id} name="color" value={opt.value} label={opt.description} />)}
      </fieldset>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>('blue');
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
    return <fieldset role="radiogroup" style={{
      width: "120px",
      border: "none"
    }}>
        <p style={{
        marginBottom: '12px',
        fontFamily: "'Montserrat', sans-serif"
      }}>
          Выбрано: <strong>{selectedValue}</strong>
        </p>
        {options.map(opt => <Radio id={opt.id} name="colors" value={opt.value} label={opt.description} checked={opt.value === selectedValue} onChange={() => setSelectedValue(opt.value)} />)}
      </fieldset>;
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`SimpleRadio`,`GroupRadio`,`GroupRadioWithState`]}))();export{v as Default,b as GroupRadio,x as GroupRadioWithState,y as SimpleRadio,S as __namedExportsOrder,_ as default};