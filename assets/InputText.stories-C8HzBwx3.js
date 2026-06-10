import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{s as i,v as a}from"./ComponentSkeletons-0oETlvfY.js";import{n as o,t as s}from"./InputText-DmbvM_oJ.js";var c,l,u,d,f,p,m,h,g,_,v;t((()=>{o(),c=e(n(),1),a(),l=r(),u={title:`UI/InputText`,component:s,parameters:{layout:`centered`},tags:[`autodocs`]},d={args:{name:`name`}},f={render:()=>(0,l.jsx)(`fieldset`,{role:`group`,style:{width:`240px`,border:`none`},children:(0,l.jsx)(s,{id:`1`,name:`email`,type:`email`,placeholder:`example@mail.ru`,label:`Почта`,errorMassage:`Некорректный домен`})})},p={render:()=>(0,l.jsx)(`fieldset`,{role:`group`,style:{width:`240px`,border:`none`},children:(0,l.jsx)(s,{id:`0`,name:`country`,type:`country`,placeholder:`Страна`,label:`Страна`})})},m={render:()=>(0,l.jsx)(`fieldset`,{role:`group`,style:{width:`240px`,border:`none`},children:(0,l.jsx)(s,{id:`1`,name:`email`,type:`email`,placeholder:`example@mail.ru`,label:`Почта`,isError:!0,errorMassage:`Некорректный домен`})})},h={render:()=>(0,l.jsx)(`fieldset`,{role:`group`,style:{width:`240px`,border:`none`,display:`flex`,flexDirection:`column`,gap:`15px`},children:[{id:`1`,type:`name`,placeholder:`Иванов Иван`,description:`Имя Фамилия`},{id:`2`,type:`number`,placeholder:void 0,description:`Возраст`},{id:`3`,type:`date`,placeholder:void 0,description:`Дата рождения`},{id:`4`,type:`password`,placeholder:`Введите пароль`,description:`Пароль`}].map(e=>(0,l.jsx)(s,{id:e.id,name:e.type,type:e.type,placeholder:e.placeholder,label:e.description,required:e.id==`4`}))})},g={render:()=>{let[e,t]=(0,c.useState)(`example@mail.cim`);return(0,l.jsxs)(`fieldset`,{role:`group`,style:{width:`240px`,border:`none`},children:[(0,l.jsxs)(`p`,{children:[`Введенная почта: `,e]}),(0,l.jsx)(s,{value:e,onChange:e=>t(e)})]})},args:{id:`1`,name:`email`,type:`email`,placeholder:`example@mail.ru`,label:`Почта`,isError:!0,errorMassage:`Некорректный домен`}},_={render:()=>(0,l.jsx)(`div`,{style:{width:240},children:(0,l.jsx)(i,{})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'name'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <fieldset role="group" style={{
      width: "240px",
      border: "none"
    }}>
          <InputText id={"1"} name="email" type='email' placeholder={"example@mail.ru"} label={"Почта"} errorMassage='Некорректный домен' />
      </fieldset>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <fieldset role="group" style={{
      width: "240px",
      border: "none"
    }}>
          <InputText id={"0"} name="country" type='country' placeholder={"Страна"} label={"Страна"} />
      </fieldset>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <fieldset role="group" style={{
      width: "240px",
      border: "none"
    }}>
          <InputText id={"1"} name="email" type='email' placeholder={"example@mail.ru"} label={"Почта"} isError={true} errorMassage="Некорректный домен" />
      </fieldset>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 240
  }}>
      <InputTextSkeleton />
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Default`,`EmailInputText`,`CountryInputText`,`ErrorInputText`,`GroupInputText`,`ControlledInputText`,`Skeleton`]}))();export{g as ControlledInputText,p as CountryInputText,d as Default,f as EmailInputText,m as ErrorInputText,h as GroupInputText,_ as Skeleton,v as __namedExportsOrder,u as default};