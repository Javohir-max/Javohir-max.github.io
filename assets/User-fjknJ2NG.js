import{a as r}from"./axios-DTyqpfTh.js";import{_ as a,c as l,a as e,f as n,t,o as c}from"./index-BVY05_Iy.js";const i={name:"user",props:["id"],data(){return{user:[]}},async mounted(){let o=await r.get("https://jsonplaceholder.typicode.com/users/"+this.id);this.user=await o.data}},u=e("h1",null,"User details component",-1),p={class:"green"},_={class:"green"},h={class:"green"},d={class:"green"},m={class:"green"},f={class:"green"};function g(o,x,N,w,s,y){return c(),l("div",null,[u,e("div",null,[e("h3",null,[n("Id: "),e("span",p,t(s.user.id),1)]),e("h3",null,[n("Name: "),e("span",_,t(s.user.name),1)]),e("h3",null,[n("UserName: "),e("span",h,t(s.user.username),1)]),e("h3",null,[n("Email: "),e("span",d,t(s.user.email),1)]),e("h3",null,[n("Phone: "),e("span",m,t(s.user.phone),1)]),e("h3",null,[n("Website: "),e("span",f,t(s.user.website),1)])])])}const b=a(i,[["render",g]]);export{b as default};