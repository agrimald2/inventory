import{_ as i}from"./AppLayout-T8BoiaAO.js";import f from"./List-DfWpLzwZ.js";import v from"./Header-BzEEoWMs.js";import g from"./AddInventoryMovement-D-VzRn71.js";import{p as a,e as c,b as m,a as o,l as d,q as y,s as l,F as x,o as M}from"./app-CGocpM-2.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AddMistakeModal-14ewx2IA.js";const k={components:{AppLayout:i,List:f,Header:v,AddInventoryMovement:g},data(){return{movements:[],startDate:"",endDate:"",type:""}},watch:{startDate:"getMovements",endDate:"getMovements",type:"getMovements"},methods:{getMovements(){axios.get("/inventory/getMovements",{params:{start_date:this.startDate,end_date:this.endDate,type:this.type}}).then(r=>{this.movements=r.data})},markAsMistake(r){axios.post("/inventory/markAsMistake",{movement_id:r}).then(e=>{this.getMovements()})}},mounted(){this.getMovements()},layout:i},_={class:"flex flex-col md:flex-row md:items-center md:justify-between mb-6"},h={class:"flex flex-row mb-4 md:mb-0"},D={class:"flex flex-row"};function A(r,e,I,V,n,s){const p=a("Header"),u=a("List"),b=a("AddInventoryMovement");return M(),c(x,null,[m(p),o("div",_,[o("div",h,[d(o("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>n.type=t),onChange:e[1]||(e[1]=(...t)=>s.getMovements&&s.getMovements(...t)),class:"form-select block w-full md:w-48 px-3 py-2 mb-2 md:mb-0 md:mr-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","aria-label":"Tipo de movimiento"},e[6]||(e[6]=[o("option",{value:""},"Tipo de movimiento",-1),o("option",{value:"in"},"Entrada",-1),o("option",{value:"out"},"Salida",-1),o("option",{value:"mistake"},"Errores",-1)]),544),[[y,n.type]])]),o("div",D,[d(o("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>n.startDate=t),onChange:e[3]||(e[3]=(...t)=>s.getMovements&&s.getMovements(...t)),type:"date",class:"form-input block w-full md:w-44 px-3 py-2 mb-2 md:mb-0 md:mr-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Desde"},null,544),[[l,n.startDate]]),d(o("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>n.endDate=t),onChange:e[5]||(e[5]=(...t)=>s.getMovements&&s.getMovements(...t)),type:"date",class:"form-input block w-full md:w-44 px-3 py-2 mb-2 md:mb-0 md:mr-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Hasta"},null,544),[[l,n.endDate]])])]),m(u,{movements:n.movements,onMarkAsMistake:s.markAsMistake},null,8,["movements","onMarkAsMistake"]),m(b)],64)}const F=w(k,[["render",A],["__scopeId","data-v-3c0fad14"]]);export{F as default};