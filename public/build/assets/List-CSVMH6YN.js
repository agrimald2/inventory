import{_ as d}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{e as r,a as s,F as n,h as i,o,n as u,t as l}from"./app-8SJXMQXs.js";const y={props:{movements:{type:Array,required:!0}},methods:{movementClass(e){return e.type=="entrada"?"bg-green-100":e.type=="salida"?"bg-red-100":e.type=="errores"?"bg-gray-100":""}},components:{}},x={class:"overflow-x-auto"},_={class:"w-full text-sm text-left text-gray-500"},f={class:"px-6 py-4"},g={class:"px-6 py-4"},b={class:"px-6 py-4"};function h(e,a,p,m,C,c){return o(),r("div",x,[s("table",_,[a[1]||(a[1]=s("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50"},[s("tr",null,[s("th",{scope:"col",class:"px-6 py-3"},"Código"),s("th",{scope:"col",class:"px-6 py-3"},"Cantidad"),s("th",{scope:"col",class:"px-6 py-3"},"Fecha"),s("th",{scope:"col",class:"px-6 py-3"},"Acción")])],-1)),s("tbody",null,[(o(!0),r(n,null,i(p.movements,t=>(o(),r("tr",{class:u(["border-b",c.movementClass(t)]),key:t.id},[s("td",f,l(t.cod_producto),1),s("td",g,l(t.quantity),1),s("td",b,l(t.date),1),a[0]||(a[0]=s("td",{class:"px-6 py-4"},[s("button",{class:"bg-blue-500 text-white px-4 py-2 rounded-md"},[s("i",{class:"fa-sharp fa-solid fa-code-pull-request"})])],-1))],2))),128))])])])}const w=d(y,[["render",h],["__scopeId","data-v-b6e87542"]]);export{w as default};
