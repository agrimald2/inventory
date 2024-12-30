import{e as d,a as e,i as u,l as r,s as a,F as m,h as f,x as g,o as i,t as p}from"./app-8SJXMQXs.js";import{_ as c}from"./_plugin-vue_export-helper-DlAUqK2U.js";const y={data(){return{form:{type:"",code:"",quantity:0},products:[]}},methods:{submitForm(){axios.post("/inventory/store",this.form).then(s=>{console.log(s)}).catch(s=>{console.error(s)})},closeModal(){const s=document.getElementById("modal-add-inventory-movement");s&&(s.style.display="none")},getProducts(){axios.get("/products/getProducts").then(s=>{this.products=s.data}).catch(s=>{console.error(s)})}},mounted(){this.getProducts()}},x={class:"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full",id:"modal-add-inventory-movement"},v={class:"relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"},b={class:"flex justify-end"},w={class:"mt-3 text-center"},h={class:"mt-2 px-7 py-3"},M={class:"mb-4"},k={class:"mb-4"},q=["value"],B={class:"mb-4"};function F(s,t,L,C,l,n){return i(),d("div",x,[e("div",v,[e("div",b,[e("button",{onClick:t[0]||(t[0]=(...o)=>n.closeModal&&n.closeModal(...o)),class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-toggle":"my-modal"},t[5]||(t[5]=[e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7.707 7.707a1 1 0 011.414-1.414L10 8.586l1.293-1.293a1 1 0 111.414 1.414L11.414 10l1.293 1.293a1 1 0 01-1.414 1.414L10 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 10 7.293 8.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1)]))]),e("div",w,[t[11]||(t[11]=e("div",{class:"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"},[e("i",{class:"fas fa-exchange-alt text-green-600"})],-1)),t[12]||(t[12]=e("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"Añadir Movimiento",-1)),e("div",h,[e("form",{onSubmit:t[4]||(t[4]=u((...o)=>n.submitForm&&n.submitForm(...o),["prevent"]))},[e("div",M,[t[7]||(t[7]=e("label",{for:"type",class:"block text-gray-700 text-sm font-bold mb-2"},"Tipo de movimiento:",-1)),r(e("select",{"onUpdate:modelValue":t[1]||(t[1]=o=>l.form.type=o),id:"type",class:"shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"},t[6]||(t[6]=[e("option",{value:"in"},"Entrada",-1),e("option",{value:"out"},"Salida",-1)]),512),[[a,l.form.type]])]),e("div",k,[t[8]||(t[8]=e("label",{for:"product_code",class:"block text-gray-700 text-sm font-bold mb-2"},"Código:",-1)),r(e("select",{"onUpdate:modelValue":t[2]||(t[2]=o=>l.form.code=o),id:"code",class:"shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"},[(i(!0),d(m,null,f(l.products,o=>(i(),d("option",{value:o.code,key:o.code},p(o.code),9,q))),128))],512),[[a,l.form.code]])]),e("div",B,[t[9]||(t[9]=e("label",{for:"quantity",class:"block text-gray-700 text-sm font-bold mb-2"},"Cantidad:",-1)),r(e("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>l.form.quantity=o),type:"number",id:"quantity",class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:""},null,512),[[g,l.form.quantity,void 0,{number:!0}]])]),t[10]||(t[10]=e("div",{class:"items-center px-4 py-3"},[e("button",{type:"submit",class:"px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"}," Añadir ")],-1))],32)])])])])}const A=c(y,[["render",F]]);export{A as default};