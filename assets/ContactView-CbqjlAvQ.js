import{_ as c,c as n,a as s,o as r,p as d,e as i}from"./index-DI5-y41e.js";const p={methods:{home(){this.$router.push({name:"home"})},next(){this.$router.go(1)},back(){this.$router.go(-1)}}},u=a=>(d("data-v-541294ce"),a=a(),i(),a),_={class:"contact"},h=u(()=>s("h1",null,"This is an contact page",-1)),l={class:"buttons"};function m(a,t,k,b,x,e){return r(),n("div",_,[h,s("div",l,[s("button",{onClick:t[0]||(t[0]=(...o)=>e.home&&e.home(...o))},"Go back to main page"),s("button",{onClick:t[1]||(t[1]=(...o)=>e.next&&e.next(...o))},"Next page"),s("button",{onClick:t[2]||(t[2]=(...o)=>e.back&&e.back(...o))},"Previous page")])])}const g=c(p,[["render",m],["__scopeId","data-v-541294ce"]]);export{g as default};