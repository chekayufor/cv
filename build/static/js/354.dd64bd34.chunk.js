"use strict";(globalThis.webpackChunknew||=[]).push([[354],{354(e,t,n){n.r(t);var a=n(43),r=n.n(a),o=n(588),l=n(589),i=n(670);const s="adminPassword",c=async(e,t={})=>{const n=await fetch(e,{...t,headers:{"x-admin-password":sessionStorage.getItem(s)||"",...t.headers||{}}});let a={};try{a=await n.json()}catch(r){}if(!n.ok){const e=new Error(a.error||`Server error (${n.status})`);throw e.status=n.status,e}return a},d=(e,t=1600,n=.85)=>new Promise((a,r)=>{const o=URL.createObjectURL(e),l=new Image;l.onload=()=>{const e=Math.min(1,t/Math.max(l.width,l.height)),i=document.createElement("canvas");i.width=Math.round(l.width*e),i.height=Math.round(l.height*e),i.getContext("2d").drawImage(l,0,0,i.width,i.height),URL.revokeObjectURL(o),i.toBlob(e=>e?a(e):r(new Error("Could not process the photo")),"image/jpeg",n)},l.onerror=()=>{URL.revokeObjectURL(o),r(new Error(`"${e.name}" is not a supported format (use JPG/PNG/WEBP)`))},l.src=o}),p=()=>{const[e,t]=(0,a.useState)(!1),[n,o]=(0,a.useState)(""),[p,N]=(0,a.useState)(null),[O,T]=(0,a.useState)(null),[F,I]=(0,a.useState)(null),[R,M]=(0,a.useState)(!1),[G,J]=(0,a.useState)(!1),W=(0,a.useRef)(null),B=(e,t="info")=>N({text:e,type:t}),V=async e=>{sessionStorage.setItem(s,e),J(!0);try{await c("/api/login",{method:"POST"}),t(!0),N(null);const e=await(0,l.y)();T(JSON.parse(JSON.stringify(e))),I(e[0]?e[0]._id:null)}catch(n){sessionStorage.removeItem(s),503===n.status?B("The admin password isn't set up yet. Add an ADMIN_PASSWORD environment variable in Netlify (Project configuration \u2192 Environment variables) and reload.","error"):401===n.status?B("Wrong password","error"):B("The admin only works on the deployed Netlify site (or via `netlify dev`). "+n.message,"error")}finally{J(!1)}};(0,a.useEffect)(()=>{const e=sessionStorage.getItem(s);e&&V(e)},[]),(0,a.useEffect)(()=>{const e=e=>{R&&(e.preventDefault(),e.returnValue="")};return window.addEventListener("beforeunload",e),()=>window.removeEventListener("beforeunload",e)},[R]);const Y=O&&O.find(e=>e._id===F),q=O?Array.from(new Set(O.map(e=>e.topic||"General"))).sort():[],H=e=>{T(t=>t.map(t=>t._id===F?{...t,...e}:t)),M(!0)},K=(e,t)=>{const n=[...Y.img],a=e+t;a<0||a>=n.length||([n[e],n[a]]=[n[a],n[e]],H({img:n}))},Q=async()=>{J(!0);try{const e=await c("/api/posts",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({posts:O})});T(e.posts),M(!1),B("Saved! The changes are already live on the site.","success")}catch(e){B("Not saved: "+e.message,"error")}finally{J(!1)}};return e?O?r().createElement(m,null,r().createElement(g,null,r().createElement("h4",null,"Admin"),r().createElement(h,null),R&&r().createElement(f,null,"Unsaved changes"),r().createElement(x,{onClick:Q,disabled:G||!R},"Save"),r().createElement(b,{onClick:()=>{R&&!window.confirm("You have unsaved changes. Log out anyway?")||(sessionStorage.removeItem(s),t(!1),T(null),M(!1))}},"Log out")),p&&r().createElement(v,{type:p.type},p.text),r().createElement(w,null,r().createElement(E,null,r().createElement(b,{onClick:()=>{const e={_id:`post-${Date.now()}`,topic:"General",title:"New post",date:(new Date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),excerpt:"",text:"",linkedinUrl:"",img:[]};T(t=>[e,...t]),I(e._id),M(!0)},style:{width:"100%"}},"+ New post"),q.map(e=>r().createElement("div",{key:e},r().createElement(k,null,e),O.filter(t=>(t.topic||"General")===e).map(e=>r().createElement($,{key:e._id,active:e._id===F,onClick:()=>I(e._id)},e.img&&e.img.length>0?r().createElement(S,{src:(0,i.c)(e.img[0]),alt:""}):r().createElement(A,null),r().createElement("span",null,e.title)))))),Y?r().createElement(C,null,r().createElement(P,null,r().createElement(z,{style:{flex:2}},r().createElement("label",{htmlFor:"f-title"},"Title"),r().createElement("input",{id:"f-title",value:Y.title||"",onChange:e=>H({title:e.target.value})})),r().createElement(z,{style:{flex:1}},r().createElement("label",{htmlFor:"f-topic"},"Topic"),r().createElement("input",{id:"f-topic",list:"topic-options",value:Y.topic||"",onChange:e=>H({topic:e.target.value})}),r().createElement("datalist",{id:"topic-options"},q.map(e=>r().createElement("option",{key:e,value:e})))),r().createElement(z,{style:{flex:1}},r().createElement("label",{htmlFor:"f-date"},"Date"),r().createElement("input",{id:"f-date",value:Y.date||"",onChange:e=>H({date:e.target.value})}))),r().createElement("h5",null,"Photos (",Y.img?Y.img.length:0,")"),r().createElement(D,null,(Y.img||[]).map((e,t)=>r().createElement(U,{key:e.path+t},r().createElement("img",{src:(0,i.c)(e),alt:""}),0===t&&r().createElement(j,null,"cover"),r().createElement(L,null,r().createElement("button",{type:"button",title:"Move left",onClick:()=>K(t,-1),disabled:0===t},"\u25c0"),r().createElement("button",{type:"button",title:"Remove",onClick:()=>{return e=t,H({img:Y.img.filter((t,n)=>n!==e)});var e}},"\u2715"),r().createElement("button",{type:"button",title:"Move right",onClick:()=>K(t,1),disabled:t===Y.img.length-1},"\u25b6")))),r().createElement(_,{type:"button",onClick:()=>W.current.click(),disabled:G},r().createElement("span",null,"+"),"Add photo"),r().createElement("input",{ref:W,type:"file",accept:"image/jpeg,image/png,image/webp",multiple:!0,hidden:!0,onChange:async e=>{const t=[...e.target.files];if(e.target.value="",!t.length)return;J(!0);const n=[];try{for(let e=0;e<t.length;e++){B(`Uploading photo ${e+1} of ${t.length}\u2026`);const a=await d(t[e]),{path:r}=await c("/api/images",{method:"POST",headers:{"content-type":"image/jpeg"},body:a});n.push({path:r,filename:t[e].name})}B(`Uploaded ${n.length} photo(s). Don't forget to press "Save".`,"success")}catch(a){B(a.message,"error")}finally{n.length&&H({img:[...Y.img,...n]}),J(!1)}}})),r().createElement(z,null,r().createElement("label",{htmlFor:"f-excerpt"},"Excerpt (shown in the list)"),r().createElement("textarea",{id:"f-excerpt",rows:3,value:Y.excerpt||"",onChange:e=>H({excerpt:e.target.value})})),r().createElement(z,null,r().createElement("label",{htmlFor:"f-text"},"Full text"),r().createElement("textarea",{id:"f-text",rows:10,value:Y.text||"",onChange:e=>H({text:e.target.value})})),r().createElement(z,null,r().createElement("label",{htmlFor:"f-linkedin"},"LinkedIn link (optional)"),r().createElement("input",{id:"f-linkedin",type:"url",placeholder:"https://www.linkedin.com/posts/...",value:Y.linkedinUrl||"",onChange:e=>H({linkedinUrl:e.target.value})})),r().createElement(P,{style:{marginTop:24}},r().createElement(x,{onClick:Q,disabled:G||!R},"Save"),r().createElement("a",{href:"/#/activity",target:"_blank",rel:"noopener noreferrer"},"Open on the site"),r().createElement(h,null),r().createElement(y,{onClick:()=>{if(!window.confirm(`Delete "${Y.title}"?`))return;const e=O.filter(e=>e._id!==F);T(e),I(e[0]?e[0]._id:null),M(!0)}},"Delete post"))):r().createElement(C,null,r().createElement("p",null,"Select a post on the left, or create a new one.")))):r().createElement(m,null,r().createElement(v,null,"Loading\u2026")):r().createElement(m,null,r().createElement(u,{onSubmit:e=>{e.preventDefault(),V(n)}},r().createElement("h4",null,"Admin sign in"),r().createElement("label",{htmlFor:"admin-pass"},"Password"),r().createElement("input",{id:"admin-pass",type:"password",autoComplete:"current-password",value:n,onChange:e=>o(e.target.value)}),r().createElement(x,{type:"submit",disabled:G||!n},G?"Checking\u2026":"Sign in"),p&&r().createElement(v,{type:p.type},p.text)))},m=o.Ay.div`
  padding: 32px 16px 40px;
  min-height: 100vh;
  background: ${({theme:e})=>e.colors.background};
  font-family: ${({theme:e})=>e.fonts.body};
  color: ${({theme:e})=>e.colors.ink};
  h4 {
    font-size: 1.4rem;
    margin: 0;
    font-weight: 700;
    color: ${({theme:e})=>e.colors.navy};
  }
  h5 {
    font-size: 1rem;
    margin: 22px 0 10px;
    color: ${({theme:e})=>e.colors.navy};
  }
  input:not([type="file"]),
  textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 8px;
    padding: 9px 11px;
    margin: 0;
    background: #fff;
    font-size: 0.95rem;
    font-family: inherit;
  }
  textarea {
    resize: vertical;
  }
  label {
    font-size: 0.8rem;
    color: ${({theme:e})=>e.colors.inkSoft};
    display: block;
    margin-bottom: 4px;
  }
`,u=o.Ay.form`
  max-width: 380px;
  margin: 60px auto;
  background: #fff;
  padding: 26px;
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: ${({theme:e})=>e.shadow.soft};
  display: flex;
  flex-direction: column;
  gap: 12px;
`,g=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  max-width: 1300px;
  margin: 0 auto 12px;
`,h=o.Ay.div`
  flex: 1;
`,f=o.Ay.span`
  color: ${({theme:e})=>e.colors.roseDeep};
  font-size: 0.85rem;
  font-weight: 600;
`,x=o.Ay.button`
  background: ${({theme:e})=>e.colors.gradient};
  color: #fff;
  border: none;
  border-radius: ${({theme:e})=>e.radii.pill};
  padding: 10px 18px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`,b=(0,o.Ay)(x)`
  background: #fff;
  color: ${({theme:e})=>e.colors.navy};
  border: 1px solid ${({theme:e})=>e.colors.border};
`,y=(0,o.Ay)(x)`
  background: #b23a3a;
`,v=o.Ay.div`
  max-width: 1300px;
  margin: 0 auto 12px;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.9rem;
  background: ${e=>"error"===e.type?"#fdecea":"success"===e.type?"#e8f5ea":"#eef1f7"};
  color: ${e=>"error"===e.type?"#9c3030":"success"===e.type?"#1e6b38":"#2a3350"};
`,w=o.Ay.div`
  display: grid;
  gap: 16px;
  max-width: 1300px;
  margin: 0 auto;
  @media (min-width: 900px) {
    grid-template-columns: 300px 1fr;
  }
`,E=o.Ay.div`
  background: #fff;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 12px;
  align-self: start;
  max-height: 80vh;
  overflow-y: auto;
  @media (max-width: 899px) {
    max-height: 320px;
  }
`,k=o.Ay.div`
  font-weight: 700;
  color: ${({theme:e})=>e.colors.inkFaint};
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 14px 6px 6px;
`,$=o.Ay.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  text-align: left;
  border: none;
  border-radius: 8px;
  padding: 7px 6px;
  cursor: pointer;
  background: ${e=>e.active?e.theme.colors.pinkPale:"transparent"};
  font-weight: ${e=>e.active?600:400};
  font-size: 0.9rem;
  color: ${({theme:e})=>e.colors.ink};
  &:hover {
    background: ${({theme:e})=>e.colors.pinkPale};
  }
`,S=o.Ay.img`
  width: 40px;
  height: 32px;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
`,A=o.Ay.div`
  width: 40px;
  height: 32px;
  border-radius: 4px;
  flex-shrink: 0;
  background: ${({theme:e})=>e.colors.pinkPale};
`,C=o.Ay.div`
  background: #fff;
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 16px;
  @media (min-width: 900px) {
    padding: 24px;
  }
`,P=o.Ay.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`,z=o.Ay.div`
  margin-top: 12px;
  min-width: 200px;
  flex: 1;
`,D=o.Ay.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
`,U=o.Ay.div`
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: 8px;
  overflow: hidden;
  background: ${({theme:e})=>e.colors.pinkPale};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,j=o.Ay.span`
  position: absolute;
  top: 6px;
  left: 6px;
  background: ${({theme:e})=>e.colors.roseDeep};
  color: #fff;
  font-size: 0.65rem;
  padding: 2px 6px;
  border-radius: 4px;
`,L=o.Ay.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background: rgba(20, 30, 54, 0.6);
  button {
    flex: 1;
    background: none;
    border: none;
    color: #fff;
    padding: 6px 0;
    cursor: pointer;
    font-size: 0.9rem;
    &:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.2);
    }
    &:disabled {
      opacity: 0.3;
      cursor: default;
    }
  }
`,_=o.Ay.button`
  aspect-ratio: 4 / 3;
  border: 2px dashed ${({theme:e})=>e.colors.pink};
  border-radius: 8px;
  background: ${({theme:e})=>e.colors.background};
  color: ${({theme:e})=>e.colors.roseDeep};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-size: 1.8rem;
    line-height: 1;
  }
  &:disabled {
    opacity: 0.5;
  }
`;n.d(t,["default",0,p])}}]);
//# sourceMappingURL=354.dd64bd34.chunk.js.map