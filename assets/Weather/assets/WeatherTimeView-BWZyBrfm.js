import{r as p,o as _,a as s,c as a,u as n,F as x,b as u,d as t,e as b,t as c,f}from"./index-BDOQEWds.js";const g=t("h1",{class:"text-center text-3xl pb-4 font-medium"},"WeatherTime",-1),w={key:0,class:"flex flex-wrap gap-4 justify-center"},k={class:"text-center text-black py-4 px-4 text-xl"},m=t("hr",{class:"bg-black"},null,-1),y={class:"text-center text-white py-3 text-3xl"},v={class:"text-center text-[20px] text-black pb-2"},B=t("hr",{class:"bg-black"},null,-1),D={class:""},T=t("p",{class:"text-center text-[20px] text-black pt-1"},"Cloudy",-1),V={class:"text-center text-blue-600 text-xl py-3"},W=t("i",{class:"bi bi-droplet"},null,-1),j=t("hr",{class:"bg-black"},null,-1),E={class:"flex justify-center"},F=["src"],L={key:1},M=t("p",{class:"text-center"},"Loading...",-1),N=[M],S={__name:"WeatherTimeView",props:["id"],setup(d){let i=d,o=p(null);return _(async()=>{try{let l=(await b.get(`https://api.openweathermap.org/data/2.5/forecast?id=${i.id}&appid=4e4e9dfd554d3675f1539c40d511bfee`)).data;o.value=l,console.log(o.value)}catch(r){console.error("Error fetching weather data:",r)}}),(r,l)=>(s(),a("div",null,[g,n(o)?(s(),a("div",w,[(s(!0),a(x,null,u(n(o).list,(e,h)=>(s(),a("div",{class:"w-[200px] bg-[#0000ff15] border-0 shadow-[0_0_10px] p-[5px] rounded-[20px] backdrop-blur-[12px] phone:w-[180px]",key:h},[t("h3",k,c(e.dt_txt.substring(0,e.dt_txt.length-3)),1),m,t("h2",y,c(Math.round(e.main.temp-273.15))+"°c",1),t("p",v,c(e.weather[0].main),1),B,t("div",D,[T,t("h2",V,[W,f(" "+c(e.clouds.all)+"%",1)])]),j,t("div",E,[t("img",{src:`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,alt:"Weather icon"},null,8,F)])]))),128))])):(s(),a("div",L,N))]))}};export{S as default};