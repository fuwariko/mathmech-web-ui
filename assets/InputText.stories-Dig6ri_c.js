import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-B6lWK8m9.js";import{n as i,t as a}from"./InputText-DSfWkJMg.js";var o,s,c,l,u,d,f,p,m,h;t((()=>{i(),o=e(n(),1),s=r(),c={title:`UI/InputText`,component:a,parameters:{layout:`centered`},tags:[`autodocs`]},l={args:{name:`name`}},u={render:()=>(0,s.jsx)(`fieldset`,{role:`group`,style:{width:`240px`,border:`none`},children:(0,s.jsx)(a,{id:`1`,name:`email`,type:`email`,placeholder:`example@mail.ru`,label:`Почта`,errorMassage:`Некорректный домен`})})},d={render:()=>(0,s.jsx)(`fieldset`,{role:`group`,style:{width:`240px`,border:`none`},children:(0,s.jsx)(a,{id:`0`,name:`country`,type:`country`,placeholder:`Страна`,label:`Страна`})})},f={render:()=>(0,s.jsx)(`fieldset`,{role:`group`,style:{width:`240px`,border:`none`},children:(0,s.jsx)(a,{id:`1`,name:`email`,type:`email`,placeholder:`example@mail.ru`,label:`Почта`,isError:!0,errorMassage:`Некорректный домен`})})},p={render:()=>(0,s.jsx)(`fieldset`,{role:`group`,style:{width:`240px`,border:`none`,display:`flex`,flexDirection:`column`,gap:`15px`},children:[{id:`1`,type:`name`,placeholder:`Иванов Иван`,description:`Имя Фамилия`},{id:`2`,type:`number`,placeholder:void 0,description:`Возраст`},{id:`3`,type:`date`,placeholder:void 0,description:`Дата рождения`},{id:`4`,type:`password`,placeholder:`Введите пароль`,description:`Пароль`}].map(e=>(0,s.jsx)(a,{id:e.id,name:e.type,type:e.type,placeholder:e.placeholder,label:e.description,required:e.id==`4`}))})},m={render:()=>{let[e,t]=(0,o.useState)(`example@mail.cim`);return(0,s.jsxs)(`fieldset`,{role:`group`,style:{width:`240px`,border:`none`},children:[(0,s.jsxs)(`p`,{children:[`Введенная почта: `,e]}),(0,s.jsx)(a,{value:e,onChange:e=>t(e)})]})},args:{id:`1`,name:`email`,type:`email`,placeholder:`example@mail.ru`,label:`Почта`,isError:!0,errorMassage:`Некорректный домен`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'name'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <fieldset role="group" style={{
      width: "240px",
      border: "none"
    }}>
          <InputText id={"1"} name="email" type='email' placeholder={"example@mail.ru"} label={"Почта"} errorMassage='Некорректный домен' />
      </fieldset>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <fieldset role="group" style={{
      width: "240px",
      border: "none"
    }}>
          <InputText id={"0"} name="country" type='country' placeholder={"Страна"} label={"Страна"} />
      </fieldset>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <fieldset role="group" style={{
      width: "240px",
      border: "none"
    }}>
          <InputText id={"1"} name="email" type='email' placeholder={"example@mail.ru"} label={"Почта"} isError={true} errorMassage="Некорректный домен" />
      </fieldset>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options: {
      id: string;
      type: string;
      placeholder: string | undefined;
      description: string;
    }[] = [{
      id: '1',
      type: 'name',
      placeholder: 'Иванов Иван',
      description: 'Имя Фамилия'
    }, {
      id: '2',
      type: 'number',
      placeholder: undefined,
      description: 'Возраст'
    }, {
      id: '3',
      type: 'date',
      placeholder: undefined,
      description: 'Дата рождения'
    }, {
      id: '4',
      type: 'password',
      placeholder: 'Введите пароль',
      description: 'Пароль'
    }];
    return <fieldset role="group" style={{
      width: "240px",
      border: "none",
      display: "flex",
      flexDirection: "column",
      gap: "15px"
    }}>
        {options.map(opt => <InputText id={opt.id} name={opt.type} type={opt.type} placeholder={opt.placeholder} label={opt.description} required={opt.id == "4" ? true : false} />)}
      </fieldset>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string>("example@mail.cim");
    return <fieldset role="group" style={{
      width: "240px",
      border: "none"
    }}>
        <p>Введенная почта: {value}</p>
          <InputText value={value} onChange={e => setValue(e)} />
      </fieldset>;
  },
  args: {
    id: '1',
    name: 'email',
    type: 'email',
    placeholder: 'example@mail.ru',
    label: 'Почта',
    isError: true,
    errorMassage: 'Некорректный домен'
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`EmailInputText`,`CountryInputText`,`ErrorInputText`,`GroupInputText`,`ControlledInputText`]}))();export{m as ControlledInputText,d as CountryInputText,l as Default,u as EmailInputText,f as ErrorInputText,p as GroupInputText,h as __namedExportsOrder,c as default};