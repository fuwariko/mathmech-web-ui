import{n as e}from"./chunk-BneVvdWh.js";import{a as t,r as n,t as r}from"./iframe-D3lb2UIJ.js";import{r as i}from"./react-BJiLO_QU.js";import{a,o}from"./blocks-2hjc2tJL.js";import{t as s}from"./mdx-react-shim-CiNtGoyv.js";function c(e){let t={h1:`h1`,p:`p`,...i(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{title:`Цвета`}),`
`,`
`,`
`,`
`,(0,u.jsx)(t.h1,{id:`цвета`,children:`Цвета`}),`
`,(0,u.jsx)(t.p,{children:`Все уникальные цвета: понятное название, токен, значение, область использования и сам цвет.`}),`
`,(0,u.jsxs)(`table`,{className:`token-table`,children:[(0,u.jsx)(`thead`,{children:(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`th`,{children:`Название`}),(0,u.jsx)(`th`,{children:`Токен`}),(0,u.jsx)(`th`,{children:`Цвет`}),(0,u.jsx)(`th`,{children:`Где использовать`}),(0,u.jsx)(`th`,{children:`Пример`})]})}),(0,u.jsx)(`tbody`,{children:p.map(({names:e,value:t,meta:n})=>(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{children:n?.title??e[0]}),(0,u.jsx)(`td`,{children:(0,u.jsx)(`div`,{className:`token-name-list`,children:e.map(e=>(0,u.jsx)(`code`,{children:e},e))})}),(0,u.jsx)(`td`,{children:(0,u.jsx)(`code`,{children:t})}),(0,u.jsx)(`td`,{children:n?.usage??`Базовый цвет интерфейса.`}),(0,u.jsx)(`td`,{children:(0,u.jsx)(`span`,{className:`token-swatch`,style:{backgroundColor:t},title:`${e.join(`, `)}: ${t}`})})]},t))})]}),`
`,(0,u.jsx)(`style`,{children:`
  .token-table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0 40px;
    font-size: 14px;
  }

  .token-table th,
  .token-table td {
    padding: 10px 12px;
    border-bottom: 1px solid #E2D9FF;
    text-align: left;
    vertical-align: middle;
  }

  .token-table th {
    color: #1E4391;
    font-weight: 600;
  }

  .token-name-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .token-swatch {
    display: inline-block;
    width: 32px;
    height: 32px;
    border: 1px solid #C6C1DA;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
  }
`})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u,d,f,p;e((()=>{u=t(),s(),o(),n(),d=e=>/^#[0-9A-F]{3,8}$/i.test(e),f={black:{title:`Черный`,usage:`Базовый темный цвет для иконок, текста и контрастных деталей.`},white:{title:`Белый`,usage:`Фон, текст на темных плашках и светлые иконки.`},darkNavy01:{title:`Приглушенный темно-синий`,usage:`Второстепенные navy-акценты и спокойные темные элементы.`},darkNavy02:{title:`Глубокий темно-синий`,usage:`Сильные акценты, темные состояния и контрастные детали.`},mainNavy:{title:`Основной синий бренда`,usage:`Главный брендовый цвет: заголовки, активные элементы, основные CTA.`},lightNavy01:{title:`Яркий светло-синий`,usage:`Активные состояния, подсветки и второстепенные CTA.`},lightNavy02:{title:`Нежный светло-синий`,usage:`Фоны бейджей, мягкие заливки и информационные плашки.`},darkOrange01:{title:`Темный оранжевый`,usage:`Насыщенные теплые акценты и контрастный текст на светло-оранжевом фоне.`},darkOrange02:{title:`Глубокий оранжевый`,usage:`Темный текст и иконки для предупреждений или тестовых бейджей.`},mainOrange:{title:`Основной оранжевый`,usage:`Теплый акцент, статусы, кнопки и выделение важных действий.`},lightOrange01:{title:`Мягкий оранжевый`,usage:`Второстепенные теплые акценты, иконки и hover-состояния.`},lightOrange02:{title:`Светлый оранжевый фон`,usage:`Фоны предупреждающих бейджей и мягкие теплые плашки.`},darkGreen01:{title:`Темный зеленый`,usage:`Контрастный текст, иконки и границы для успешных состояний.`},darkGreen02:{title:`Глубокий зеленый`,usage:`Темный success-текст и устойчивые зеленые акценты.`},mainGreen:{title:`Основной зеленый`,usage:`Успешные состояния, подтверждения и позитивные статусы.`},lightGreen01:{title:`Яркий зеленый`,usage:`Активные success-состояния и заметные положительные акценты.`},lightGreen02:{title:`Светлый зеленый фон`,usage:`Фоны успешных бейджей и спокойные позитивные плашки.`},darkRed01:{title:`Приглушенный красный`,usage:`Второстепенные error-акценты и темные красные элементы.`},darkRed02:{title:`Глубокий красный`,usage:`Контрастный текст на красных/розовых фонах и критичные статусы.`},mainRed:{title:`Основной красный`,usage:`Ошибки, опасные действия и критичные состояния.`},lightRed01:{title:`Мягкий красный`,usage:`Hover-состояния ошибок и второстепенные красные акценты.`},lightRed02:{title:`Светлый красный фон`,usage:`Фоны error-бейджей и мягкие предупреждающие плашки.`},darkCrimson01:{title:`Темный малиновый`,usage:`Глубокие малиновые акценты и темные декоративные элементы.`},darkCrimson02:{title:`Насыщенный малиновый`,usage:`Контрастный малиновый акцент и текст на светлых малиновых фонах.`},mainCrimson:{title:`Основной малиновый`,usage:`Главный малиновый акцент, статусы и заметные элементы интерфейса.`},lightCrimson01:{title:`Яркий малиновый`,usage:`Hover-состояния, акцентные иконки и второстепенные элементы.`},lightCrimson02:{title:`Светлый малиновый`,usage:`Декоративные плашки и мягкие акцентные фоны.`},darkBlue01:{title:`Темный ярко-синий`,usage:`Темные синие акценты и контрастные элементы.`},darkBlue02:{title:`Насыщенный ярко-синий`,usage:`Активные состояния и сильные синие акценты.`},mainBlue:{title:`Основной ярко-синий`,usage:`Главные кнопки, ссылки и активные элементы.`},lightBlue01:{title:`Фиолетово-синий акцент`,usage:`Переходный сине-фиолетовый акцент, подсветки и декоративные элементы.`},lightBlue02:{title:`Светлый голубой фон`,usage:`Информационные фоны, бейджи и мягкие выделения.`},darkPurple01:{title:`Темный фиолетовый`,usage:`Глубокие декоративные элементы и темные purple-акценты.`},darkPurple02:{title:`Насыщенный фиолетовый`,usage:`Контрастные фиолетовые элементы и hover-состояния.`},mainPurple:{title:`Основной фиолетовый`,usage:`Фиолетовые бейджи, акцентные кнопки и выделения.`},lightPurple01:{title:`Мягкий фиолетовый`,usage:`Второстепенные purple-акценты и спокойные иконки.`},lightPurple02:{title:`Светлый фиолетовый фон`,usage:`Фоны фиолетовых плашек, бейджей и мягких выделений.`},darkGrey01:{title:`Темный серо-фиолетовый`,usage:`Вторичный текст, muted-иконки и спокойные служебные элементы.`},darkGrey02:{title:`Средний серо-фиолетовый`,usage:`Границы, разделители и неактивные элементы.`},mainGrey:{title:`Основной серо-фиолетовый`,usage:`Бордеры, скелетоны, нейтральные плашки и второстепенные фоны.`},lightGrey01:{title:`Светлый лавандовый фон`,usage:`Светлые секции, hover-фоны и мягкие нейтральные заливки.`},lightGrey02:{title:`Почти белый лавандовый`,usage:`Очень светлый фон страниц, карточек и нейтральных поверхностей.`}},p=Array.from(Object.entries(r).filter(([,e])=>d(e)).reduce((e,[t,n])=>{let r=n.toUpperCase(),i=e.get(r);return i?(i.names.push(t),e):(e.set(r,{value:n,names:[t],meta:f[t]}),e)},new Map).values())}))();export{f as colorMeta,p as colors,l as default,d as isColor};