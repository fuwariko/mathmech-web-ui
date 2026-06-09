import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-B6lWK8m9.js";import{n as i,t as a}from"./color-tokens-BPpBLVR4.js";import{n as o,t as s}from"./emotion-styled.browser.esm-CJX6AVeg.js";var c,l,u,d=t((()=>{s(),i(),c=o.label`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;

  &:has(input:disabled) {
    cursor: not-allowed;
  }
`,l=o.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  overflow: hidden;

  &:checked + span {
    background-color: ${e=>a[e.color]};
    border-color: ${e=>a[e.color]};
  }

  & + span::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${e=>a[e.color]};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all .2s ease-in-out;
  }

  &:checked + span::after {
    transform: translateX(26px);
    background-color: #fff;
  }

  &:focus-visible + span {
    box-shadow: 0 0 0 2px ${e=>a[e.color]+`80`};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled + span {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,u=o.span`
  display: inline-flex;
  position: relative;
  margin: 2px 0;
  width: 54px;
  height: 26px;
  border-radius: 16px;
  border: 1px solid ${e=>a[e.color]};
  background-color: transparent;
  cursor: pointer;
  transition: all .2s ease-in-out;
`})),f,p,m=t((()=>{e(n(),1),d(),f=r(),p=({id:e,name:t,value:n,label:r,color:i=`mainNavy`,onChange:a,checked:o,reverse:s,disabled:d,required:p})=>{let m=e=>{a?.(e.target.value)};return(0,f.jsxs)(c,{title:r===void 0?`Переключатель`:r,children:[s&&(0,f.jsx)(`span`,{id:`label-id-${e}`,children:r}),(0,f.jsx)(l,{type:`checkbox`,id:e,color:i,name:t,role:`switch`,checked:o,"aria-labelledby":`label-id-${e}`,value:n,onChange:m,disabled:d,required:p}),(0,f.jsx)(u,{color:i}),!s&&(0,f.jsx)(`span`,{id:`label-id-${e}`,children:r})]})},p.__docgenInfo={description:``,methods:[],displayName:`Toggle`,props:{id:{required:!1,tsType:{name:`string`},description:`Идентификатор для связи с другими элементами`},name:{required:!1,tsType:{name:`string`},description:`Поле для идентификации и группировки элементов в форме`},value:{required:!1,tsType:{name:`string`},description:`Значение тоггла, уходящее на сервер`},label:{required:!1,tsType:{name:`string`},description:`Текст тоггла`},color:{required:!1,tsType:{name:`union`,raw:`keyof typeof allColors`,elements:[{name:`literal`,value:`darkNavy01`},{name:`literal`,value:`darkNavy02`},{name:`literal`,value:`mainNavy`},{name:`literal`,value:`lightNavy01`},{name:`literal`,value:`lightNavy02`},{name:`literal`,value:`darkOrange01`},{name:`literal`,value:`darkOrange02`},{name:`literal`,value:`mainOrange`},{name:`literal`,value:`lightOrange01`},{name:`literal`,value:`lightOrange02`},{name:`literal`,value:`darkGreen01`},{name:`literal`,value:`darkGreen02`},{name:`literal`,value:`mainGreen`},{name:`literal`,value:`lightGreen01`},{name:`literal`,value:`lightGreen02`},{name:`literal`,value:`darkRed01`},{name:`literal`,value:`darkRed02`},{name:`literal`,value:`mainRed`},{name:`literal`,value:`lightRed01`},{name:`literal`,value:`lightRed02`},{name:`literal`,value:`darkCrimson01`},{name:`literal`,value:`darkCrimson02`},{name:`literal`,value:`mainCrimson`},{name:`literal`,value:`lightCrimson01`},{name:`literal`,value:`lightCrimson02`},{name:`literal`,value:`darkBlue01`},{name:`literal`,value:`darkBlue02`},{name:`literal`,value:`mainBlue`},{name:`literal`,value:`lightBlue01`},{name:`literal`,value:`lightBlue02`},{name:`literal`,value:`darkPurple01`},{name:`literal`,value:`darkPurple02`},{name:`literal`,value:`mainPurple`},{name:`literal`,value:`lightPurple01`},{name:`literal`,value:`lightPurple02`},{name:`literal`,value:`darkGrey01`},{name:`literal`,value:`darkGrey02`},{name:`literal`,value:`mainGrey`},{name:`literal`,value:`lightGrey01`},{name:`literal`,value:`lightGrey02`}]},description:`Цвет тоггла`,defaultValue:{value:`'mainNavy'`,computed:!1}},checked:{required:!1,tsType:{name:`boolean`},description:`Состояние "Выбрано"/"Не выбрано"`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Отслеживание изменения состояния`},reverse:{required:!1,tsType:{name:`boolean`},description:`Положение текста, отосительно тоггла`},disabled:{required:!1,tsType:{name:`boolean`},description:`Заблокированное состояние`},required:{required:!1,tsType:{name:`boolean`},description:`Обязательность заполнения`}}}})),h,g,_,v,y,b,x,S;t((()=>{m(),h=e(n(),1),g=r(),_={title:`FILTERS/Toggle`,component:p,parameters:{layout:`centered`},tags:[`autodocs`]},v={args:{name:`toggle`,label:`Опция`}},y={render:()=>(0,g.jsx)(p,{id:`1`,name:`name`})},b={render:()=>(0,g.jsx)(`fieldset`,{role:`group`,style:{width:`120px`,border:`none`},children:[{id:`1`,name:`speed`,description:`Скорость`},{id:`2`,name:`price`,description:`Цена`},{id:`3`,name:`quality`,description:`Качество`}].map(e=>(0,g.jsx)(p,{id:e.id,name:e.name,label:e.description}))})},x={render:()=>{let[e,t]=(0,h.useState)([]),n=e=>{t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,g.jsxs)(`fieldset`,{role:`group`,style:{width:`120px`,border:`none`},children:[(0,g.jsxs)(`p`,{style:{marginBottom:`12px`},children:[`Выбрано:`,(0,g.jsx)(`br`,{}),(0,g.jsx)(`strong`,{children:e.map(e=>`${e} `)})]}),[{id:`1`,value:`Speed`,label:`Скорость`},{id:`2`,value:`Price`,label:`Цена`},{id:`3`,value:`Quality`,label:`Качество`}].map(t=>(0,g.jsx)(p,{id:t.id,value:t.value,name:`settings`,label:t.label,checked:e.includes(t.value),onChange:()=>n(t.value)}))]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'toggle',
    label: 'Опция'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Toggle id="1" name="name" />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<String[]>([]);
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
}`,...x.parameters?.docs?.source}}},S=[`Default`,`SimpleToggle`,`GroupToggle`,`GroupToggleWithState`]}))();export{v as Default,b as GroupToggle,x as GroupToggleWithState,y as SimpleToggle,S as __namedExportsOrder,_ as default};