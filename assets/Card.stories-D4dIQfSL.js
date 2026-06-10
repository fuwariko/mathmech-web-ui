import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Bn1Ys6_W.js";import{h as n,v as r}from"./ComponentSkeletons-0oETlvfY.js";import{f as i,m as a,n as o,o as s,p as c,t as l}from"./Icons-Dz2YVI0X.js";import{n as u,t as d}from"./Badge-BqigAoHk.js";import{i as f,n as p,r as m,t as h}from"./CardSkeleton-Du9bRi6H.js";var g,_,v,y,b,x,S,C,w,T,E;e((()=>{u(),f(),a(),p(),r(),g=t(),_={none:void 0,badges:(0,g.jsxs)(`div`,{style:{display:`flex`,gap:4,flexWrap:`wrap`},children:[(0,g.jsx)(d,{lable:`New`,color:`darkBlue01`,borderColor:`darkGreen01`}),(0,g.jsx)(d,{lable:`Active`,color:`lightGreen01`})]}),boardIcon:(0,g.jsx)(o,{size:24}),usersScale:(0,g.jsx)(c,{size:24}),usersGroup:(0,g.jsx)(i,{size:24}),arrow:(0,g.jsx)(l,{size:24}),filter:(0,g.jsx)(s,{size:24}),text:(0,g.jsx)(`div`,{style:{fontWeight:600},children:`Header text`}),skeleton:(0,g.jsx)(n,{lines:1})},v={default:(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,maxWidth:420},children:[(0,g.jsx)(`div`,{style:{fontSize:18,fontWeight:600},children:`Большой текст контента`}),(0,g.jsx)(`div`,{style:{fontSize:14,opacity:.7},children:`Маленький текст контента (описание, пояснение или сабтекст)`})]}),short:(0,g.jsx)(`div`,{style:{fontSize:16},children:`Короткий контент`}),icon:(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,g.jsx)(o,{size:24}),(0,g.jsx)(`span`,{children:`Контент с иконкой`})]}),image:(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,g.jsx)(`img`,{src:`https://images.unsplash.com/photo-1521737604893-d14cc237f11d`,alt:`Команда за рабочим столом`,style:{width:`100%`,borderRadius:12}}),(0,g.jsx)(`div`,{style:{fontSize:14,opacity:.7},children:`Контент с изображением`})]}),skeleton:(0,g.jsx)(n,{lines:3})},y={none:void 0,text:(0,g.jsx)(`div`,{style:{fontSize:13,opacity:.8},children:`Нижний текст карточки`}),badge:(0,g.jsx)(d,{lable:`3зе`,color:`mainPurple`}),skeleton:(0,g.jsx)(n,{lines:1}),mixed:(0,g.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,width:`100%`},children:[(0,g.jsx)(`div`,{style:{fontSize:13,opacity:.8},children:`Нижний текст карточки`}),(0,g.jsx)(d,{lable:`3зе`,color:`mainPurple`})]})},b={title:`UI/Card`,component:m,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{direction:{control:`radio`,options:[`vertical`,`horizontal`]},borderRadius:{control:{type:`number`}},header:{control:`select`,options:Object.keys(_),mapping:_},content:{control:`select`,options:Object.keys(v),mapping:v},footer:{control:`select`,options:Object.keys(y),mapping:y}},args:{direction:`vertical`,borderRadius:15,header:_.badges,content:v.default,footer:y.text}},x={},S={args:{content:v.image}},C={args:{direction:`horizontal`}},w={render:e=>(0,g.jsx)(h,{direction:e.direction,borderRadius:e.borderRadius})},T={args:{header:(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,g.jsx)(o,{size:32,color:`#6C5CE7`,strokeWidth:2.2}),(0,g.jsx)(`div`,{style:{fontWeight:600},children:`Card with custom icon`})]}),content:(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,g.jsx)(i,{size:24,color:`#2D3436`,strokeWidth:1.5}),(0,g.jsx)(`div`,{style:{fontSize:14,opacity:.7},children:`Иконка с кастомным размером и цветом прямо в карточке`})]}),footer:(0,g.jsx)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:(0,g.jsx)(l,{size:16,color:`#0984E3`})})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    content: contentOptions.image
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <CardSkeleton direction={args.direction} borderRadius={args.borderRadius} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    header: <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
        <BoardIcon size={32} color="#6C5CE7" strokeWidth={2.2} />
        <div style={{
        fontWeight: 600
      }}>Card with custom icon</div>
      </div>,
    content: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <UsersGroupIcon size={24} color="#2D3436" strokeWidth={1.5} />
        <div style={{
        fontSize: 14,
        opacity: 0.7
      }}>
          Иконка с кастомным размером и цветом прямо в карточке
        </div>
      </div>,
    footer: <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
        <ArrowUpRightIcon size={16} color="#0984E3" />
      </div>
  }
}`,...T.parameters?.docs?.source}}},E=[`Playground`,`WithImage`,`Horizontal`,`Skeleton`,`WithCustomIcon`]}))();export{C as Horizontal,x as Playground,w as Skeleton,T as WithCustomIcon,S as WithImage,E as __namedExportsOrder,b as default};