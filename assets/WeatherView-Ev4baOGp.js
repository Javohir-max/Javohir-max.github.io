import{a as r}from"./axios-DTyqpfTh.js";import{_ as c,c as h,a as e,t as o,o as i,p as d,e as p}from"./index-BVY05_Iy.js";const _={data(){return{weather:[],temp:null,weatherImg:"",main:""}},async mounted(){let s=(await r.get("https://api.openweathermap.org/data/2.5/weather?id=1512440&appid=4e4e9dfd554d3675f1539c40d511bfee")).data;this.weather=s,this.main=s.weather[0].main,this.temp=Math.round(s.main.temp-273),this.weatherImg=`https://openweathermap.org/img/wn/${s.weather[0].icon}@2x.png`}},n=t=>(d("data-v-4b05a1d8"),t=t(),p(),t),l={class:""},m=n(()=>e("h1",{class:"green text-center"},"Weather",-1)),w={class:"weather"},u={class:"green text-center"},g=n(()=>e("hr",{class:"m-0"},null,-1)),f={class:"text-center mt-4"},x={class:"text-center"},I=n(()=>e("hr",null,null,-1)),v={class:"text-center"},S=["src"];function b(t,s,B,k,a,y){return i(),h("div",l,[m,e("div",w,[e("h3",u,o(a.weather.name),1),g,e("h1",f,o(a.temp)+"°",1),e("h3",x,o(a.main),1),I,e("div",v,[e("img",{src:a.weatherImg,alt:""},null,8,S)])])])}const D=c(_,[["render",b],["__scopeId","data-v-4b05a1d8"]]);export{D as default};