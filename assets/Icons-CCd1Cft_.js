import{n as e}from"./chunk-BneVvdWh.js";import{a as t}from"./iframe-D3lb2UIJ.js";import{r as n}from"./react-BJiLO_QU.js";import{a as r,o as i}from"./blocks-2hjc2tJL.js";import{t as a}from"./mdx-react-shim-CiNtGoyv.js";import{a as o,c as s,d as c,f as l,i as u,l as d,m as f,n as p,o as m,p as h,r as g,s as _,t as v,u as y}from"./Icons-Psn06UNK.js";function b(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,...n(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(r,{title:`Иконки`}),`
`,`
`,(0,S.jsx)(t.h1,{id:`иконки`,children:`Иконки`}),`
`,(0,S.jsx)(t.p,{children:`Все иконки экспортируются из пакета и принимают одинаковые props.`}),`
`,(0,S.jsx)(t.pre,{children:(0,S.jsx)(t.code,{className:`language-tsx`,children:`import { FilterIcon } from 'mathmech-ui-kit';

<FilterIcon size={24} color="currentColor" strokeWidth={2} />
`})}),`
`,(0,S.jsxs)(`div`,{className:`icon-props`,children:[(0,S.jsx)(`span`,{children:`size: 16 | 24 | 32 | 48 | 64`}),(0,S.jsx)(`span`,{children:`color: CSS color string`}),(0,S.jsx)(`span`,{children:`strokeWidth: 1 | 2`})]}),`
`,(0,S.jsx)(`div`,{className:`icons-grid`,children:C.map(({name:e,component:t})=>(0,S.jsxs)(`div`,{className:`icon-card`,children:[(0,S.jsx)(`div`,{className:`icon-preview`,children:(0,S.jsx)(t,{size:32,color:`currentColor`,strokeWidth:2})}),(0,S.jsx)(`code`,{children:e})]},e))}),`
`,(0,S.jsx)(`style`,{children:`
  .icon-props {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 16px 0 24px;
  }

  .icon-props span {
    padding: 6px 10px;
    border-radius: 999px;
    background: #F2EFFD;
    color: #545454;
    font-size: 12px;
    line-height: 1.2;
  }

  .icons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: 12px;
    margin-top: 16px;
  }

  .icon-card {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    padding: 14px;
    border: 1px solid #C6C1DA;
    border-radius: 8px;
    background: #FFFFFF;
  }

  .icon-preview {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    flex: 0 0 auto;
    border-radius: 8px;
    color: #1E4391;
    background: #F2EFFD;
  }

  .icon-card code {
    overflow-wrap: anywhere;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.3;
  }
`})]})}function x(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S,C;e((()=>{S=t(),a(),i(),f(),C=[{name:`ArrowUpRightIcon`,component:v},{name:`BoardIcon`,component:p},{name:`CheckCircleIcon`,component:g},{name:`CheckIcon`,component:u},{name:`CircleIcon`,component:o},{name:`FilterIcon`,component:m},{name:`GridIcon`,component:_},{name:`ListIcon`,component:s},{name:`MonitorIcon`,component:d},{name:`StarFilledIcon`,component:y},{name:`StarIcon`,component:c},{name:`UsersGroupIcon`,component:l},{name:`UsersIcon`,component:h}]}))();export{x as default,C as icons};