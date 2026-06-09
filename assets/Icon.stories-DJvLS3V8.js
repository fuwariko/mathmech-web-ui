import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B6lWK8m9.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./Icons-B9j9ZF3b.js";var m,h,g,_,v;e((()=>{a(),m=t(),h={board:c,usersGroup:p,usersScale:i,arrow:f,filter:n,list:d,grid:l,star:s,circle:o,circleWithTic:u,starFilledIcon:r},g={title:`UI/Icons`,parameters:{layout:`centered`},argTypes:{icon:{control:`select`,options:Object.keys(h),mapping:h},size:{control:`radio`,options:[16,24,32,48,64]},color:{control:`color`},strokeWidth:{control:`radio`,options:[1,2]}},args:{icon:h.board,size:24,color:`currentColor`,strokeWidth:1.8}},_={render:e=>{let t=e.icon;return(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:12},children:[(0,m.jsx)(t,{size:e.size,color:e.color,strokeWidth:e.strokeWidth}),(0,m.jsxs)(`div`,{style:{fontSize:12,opacity:.6},children:[`size: `,e.size,`px | stroke: `,e.strokeWidth]})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const Icon = args.icon;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }}>
        <Icon size={args.size} color={args.color} strokeWidth={args.strokeWidth} />

        <div style={{
        fontSize: 12,
        opacity: 0.6
      }}>
          size: {args.size}px | stroke: {args.strokeWidth}
        </div>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,g as default};