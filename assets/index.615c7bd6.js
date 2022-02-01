import{r as E,u as B,j as e,a as u,L as s,F as h,I as A,b as m,B as c,l as f,c as x,d as g,e as C,f as b,R as N,g as r,h as v,T as w,A as k,i as y,k as S}from"./vendor.b402a957.js";const j=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const F of t.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&o(F)}).observe(document,{childList:!0,subtree:!0});function i(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerpolicy&&(t.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?t.credentials="include":n.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(n){if(n.ep)return;n.ep=!0;const t=i(n);fetch(n.href,t)}};j();const P=[{link:"/",name:"\u9996\u9801"},{link:"about",name:"\u95DC\u65BC\u6211\u5011"},{link:"news",name:"\u6700\u65B0\u6D88\u606F"},{link:"product",name:"\u7522\u54C1\u4ECB\u7D39"},{link:"service",name:"\u92B7\u552E\u670D\u52D9"},{link:"store",name:"\u670D\u52D9\u64DA\u9EDE"}];function R(){const[a,l]=E.exports.useState(!0),i=B();return E.exports.useEffect(()=>{window.onscroll=()=>{l(window.pageYOffset<100)}},[]),e("div",{className:`fixed z-50 w-screen 2xl:bg-transparent items-center flex h-14 2xl:pt-3 mt-0 2xl:h-20 bg-gray-100 transition-all duration-700${a?"":" shadow-md"}`,style:{backgroundColor:a?"":"rgb(243, 244, 246)"},children:[u("div",{className:"flex-1 h-full-10px pl-9",children:u("a",{href:"/",className:"inline-block h-full text-black",children:u("img",{src:"/logo-rmbg.png",alt:"logo",className:"h-full overflow-hidden rounded-md"})})}),u("div",{className:"flex justify-end opacity-0 sm:opacity-100 w-5/6 text-white pr-20 hover:text-white h-full items-center notosans",children:P.map(o=>u(s,{to:o.link,className:"w-50 transition-all justify-center h-10 ml-10 flex items-center duration-300"+(i.pathname===`/${o.link}`?"border-b-2 border-blue-600 border-opacity-60":""),children:o.name},o.link))})]})}function I(){return e("div",{className:"w-full h-40 bg-gray-400",children:[e("div",{className:"flex",children:[u("div",{className:"w-min text-5xl ml-4",children:u("a",{href:"https://www.facebook.com/cfdhd/",children:u(h,{twoToneColor:"#eb2f96",className:"hover:-translate-y-1 transition-all transform"})})}),u("div",{className:"w-min text-5xl ml-2",children:u("a",{href:"https://www.instagram.com/cfdhd/",children:u(A,{twoToneColor:"#8a3ab9",className:"hover:-translate-y-1 transition-all transform"})})})]}),u("p",{className:"text-right m-0 mb-1 mr-5 text-sm text-gray-900",children:"Copyright \xA9 DHD all right reserved."}),u("p",{className:"text-right m-0 mr-5 text-xs text-gray-900",children:"WEB DESIGN BY XYZ STUDIO"})]})}function p({src:a,href:l}){return e(s,{className:"group overflow-hidden relative inline-block rounded-sm",to:l,children:[u("img",{src:a,alt:"",className:"min-w-60 max-w-80 transform group-hover:scale-110 transition-all duration-700 block"}),u("span",{className:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all text-white z-20 text-lg font-bold",children:"\u66F4\u591A\u8CC7\u8A0A"}),u("div",{className:"backdrop-filter group-hover:backdrop-blur-sm group-hover:bg-opacity-20 h-full w-full absolute top-0 left-0 z-10 bg-opacity-0 transition-all duration-700"})]})}function O(){return e("div",{className:"pt-14 2xl:pt-0 mb-10",children:["\u4EE5\u91D1\u5C6C\u57FA\u672C\u8ABF\u6027\uFF0C\u5C55\u73FE\u55AE\u7D14\u91CF\u9AD4\u9020\u578B~ ",u("br",{}),"\u5275\u9020\u5C6C\u65BC\u500B\u4EBA\u7684\u5167\u6582\u98A8\u683C"]})}function $(){return e("div",{className:"pt-14 2xl:pt-0 mb-10",children:["~\u86FB\u8B8A~",u("br",{}),"\u6771\u65B9\u7F8E\u5B78\u98A8\u683C"]})}function L(){return u("div",{className:"pt-14 2xl:pt-0 mb-10",children:"\u5929\u7136\u6728\u7684\u7D0B\u7406\u8207\u8CEA\u611F"})}function M(){return u("div",{className:"pt-14 2xl:pt-0 mb-10",children:"\u65B0\u73FE\u4EE3\u98A8\u683C~\u771F\u3001\u5584\u3001\u7F8E"})}function T(){return u("div",{className:"pt-14 2xl:pt-0 mb-10",children:"\u5DE5\u85DD\u7F8E\u5B78\uFF0C\u6975\u81F4\u6F14\u7E79"})}function z(){return u("div",{className:"pt-14 2xl:pt-0 mb-10",children:"\u7A7A\u9593\u65B0\u5370\u8C61~\u9AD8\u5EA6\u958B\u653E\u611F"})}const U=[{name:"IS\u7CFB\u5217\u5BA4\u5167\u9580",link:"/catalog/2021-0506-\u4E39\u9802\u9DB4IS\u7CFB\u5217DM(O)",image:"/main/IS.jpg",info:u(O,{})},{name:"BS\u7CFB\u5217\u7384\u95DC\u9580",link:"/catalog/2021-\u4E39\u9802\u9DB4BS\u7CFB\u5217\u578B\u9304",image:"/main/BS.jpg",info:u($,{})},{name:"MF\u901A\u98A8\u9580",link:"/catalog/2021-0506-\u4E39\u9802\u9DB4MF\u7CFB\u5217DM(O)",image:"/main/MF.jpg",info:u(L,{})},{name:"RE\u7CFB\u5217\u7384\u95DC\u9580",link:"/catalog/2021-\u4E39\u9802\u9DB4RE\u7CFB\u5217\u578B\u9304",image:"/main/RE.jpg",info:u(M,{})},{name:"FD\u6298\u758A\u9580",link:"/catalog/\u96FB\u5B50\u578B\u9304_FD",image:"/main/FD.jpg",info:u(z,{})},{name:"PR\u7CFB\u5217\u7384\u95DC\u9580",link:"/catalog/2021-\u4E39\u9802\u9DB4PR\u7CFB\u5217\u578B\u9304",image:"/main/PR.jpg",info:u(T,{})}];function d(){return e("div",{className:"pt-14 4xl:pt-0 m-auto max-w-4xl mb-10",children:[u("h1",{className:"text-4xl text-center pt-14",children:"PRODUCT"}),U.map((a,l)=>e("div",{className:"my-20 flex justify-center flex-wrap lg:justify-between "+(l%2==0?"flex-row-reverse":""),children:[u(p,{src:a.image,href:a.link}),e("div",{className:"notosans text-xl mt-7 px-100",children:[u("h2",{className:"text-center",children:a.name}),u("p",{className:"",children:a.info})]})]}))]})}const Y=["/main/mainPage1.jpg","/main/mainPage2.jpg","/main/mainPage3.jpg"];function H(){return e("div",{className:"pt-14 2xl:pt-0 pb-20",children:[u(m.exports.Slide,{easing:"ease",prevArrow:u("div",{}),nextArrow:u("div",{}),children:Y.map(a=>u("div",{className:"each-slide",children:u("div",{className:"xl:h-screen sm:h-80 lg:h-screen/1.5 h-48 md:h-96",style:{backgroundImage:`url(${a})`,backgroundPositionX:"center",backgroundPositionY:"center",backgroundSize:"100% auto",backgroundRepeat:"no-repeat"}})},a))}),e("div",{className:"px-6 m-auto mt-20 max-w-4xl",children:[u("h2",{className:"text-3xl text-center",children:"ABOUT"}),u("p",{className:"notosans m-auto text-xl",children:"\u6211\u5011\u662F\u5F9E\u8A2D\u8A08\u8CA9\u8CE3\u5230\u5B89\u88DD\u7684\u92C1\u5408\u91D1\u9580\u7A97\u516C\u53F8\uFF0C\u516C\u53F8\u76EE\u524D\u751F\u7522\u92C1\u5408\u91D1\u9580\u7A97\u6709\u65B7\u71B1\u92C1\u7BC0\u80FD\u7A97\u3001\u647A\u758A\u9580\u3001\u7384\u95DC\u9580\u8207\u5BA4\u5167\u6D74\u5EC1\u9580\u7B49\uFF0C\u76EE\u524D\u5728\u53F0\u5317\u8207\u53F0\u5357\u6709\u5C55\u793A\u4E2D\u5FC3\uFF0C\u6B61\u8FCE\u5404\u4F4D\u849E\u81E8\u3002"}),u("br",{}),u("p",{className:"notosans text-xl",children:"\u5F9E\u8A2D\u8A08\u8CA9\u8CE3\u5230\u5B89\u88DD\u7684\u92C1\u5408\u91D1\u9580\u7A97\u516C\u53F8\uFF0C \u76EE\u524D\u751F\u7522\u92C1\u5408\u91D1\u9580\u7A97\u6709\u6298\u758A\u9580\u3001\u7384\u95DC\u9580\u3001\u5BA4\u5167\u6D74\u5EC1\u9580\u3001\u4E09\u5408\u4E00\u901A\u98A8\u9580\u7B49 \u53F0\u5317\u5C55\u793A\u4E2D\u5FC3\uFF1A\u53F0\u5317\u5E02\u4FE1\u7FA9\u5340\u57FA\u9686\u8DEF\u4E00\u6BB5376\u865F \u96FB\u8A71\uFF1A02-27200996 \u53F0\u5357\u5C55\u793A\u4E2D\u5FC3\uFF1A\u53F0\u5357\u5E02\u4EC1\u5FB7\u5340\u4E2D\u6B63\u8DEF\u4E09\u6BB5521-1\u865F \u96FB\u8A71\uFF1A06-2716333 \u6B61\u8FCE\u5404\u4F4D\u849E\u81E8\u53C3\u89C0\u3002"}),u("div",{className:"text-center text-xl",children:u("a",{href:"./about",children:u(c,{className:"m-auto h-24 w-36 mt-10",children:"view more"})})})]}),u(d,{}),e("div",{className:"px-6 m-auto mt-20 max-w-100",children:[u("h2",{className:"text-3xl text-center",children:"CONTACT"}),e("p",{className:"flex flex-wrap justify-between",children:[u(c,{type:"dashed",size:"large",href:"emailto:i97732@gmail.com",className:"m-auto mt-4",children:"i97732@gmail.com"}),u(c,{type:"dashed",size:"large",href:"tel:06-271-6333",className:"m-auto mt-4",children:"06-271-6333"})]})]})]})}const G=["/main/news1.jpg","/main/news2.jpg","/main/news3.jpg","/main/news4.jpg"];function X(){return e("div",{className:"pt-14 2xl:pt-0 mb-10",children:[u(m.exports.Slide,{easing:"ease",prevArrow:u("div",{}),nextArrow:u("div",{}),children:G.map(a=>u("div",{className:"each-slide",children:u("div",{className:"2xl:h-screen sm:h-80 lg:h-screen/1.5 h-48 md:h-96",style:{backgroundImage:`url(${a})`,backgroundPositionX:"center",backgroundPositionY:"center",backgroundSize:"100% auto",backgroundRepeat:"no-repeat"}})},a))}),u("h1",{className:"text-4xl text-center pt-14",children:"NEWS"}),u("div",{className:"px-6 m-auto mt-20 max-w-4xl",children:u("p",{className:"notosans m-auto text-xl",children:"2020\u5E74\u65B0\u7522\u54C1\u767C\u8868~\u6298\u758A\u9580~\u591A\u7247\u62C9+1\u958B"})})]})}function W({url:a}){const l=f.exports.defaultLayoutPlugin(),i=x.exports.fullScreenPlugin(),o=g.exports.thumbnailPlugin();return u(C.exports.Worker,{workerUrl:"https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js",children:a?e("div",{className:"top-0 pt-10 w-full h-screen fixed bg-black bg-opacity-8 0 z-50",children:[u(C.exports.Viewer,{fileUrl:`${a}.pdf`,plugins:[l,i,o]}),e(s,{className:"flex justify-center items-center befor w-6 h-6 top-2 absolute right-2",to:"/catalog",children:[u("div",{className:"bg-white w-full h-1 absolute transform rotate-45"}),u("div",{className:"bg-white w-full h-1 absolute transform -rotate-45"})]})]}):null})}const _=[{name:"IS\u7CFB\u5217",link:"/catalog/2021-0506-\u4E39\u9802\u9DB4IS\u7CFB\u5217DM(O)",image:"/main/IS.jpg"},{name:"BS\u7CFB\u5217",link:"/catalog/2021-\u4E39\u9802\u9DB4BS\u7CFB\u5217\u578B\u9304",image:"/main/BS.jpg"},{name:"MF\u7CFB\u5217",link:"/catalog/2021-0506-\u4E39\u9802\u9DB4MF\u7CFB\u5217DM(O)",image:"/main/MF.jpg"},{name:"RE\u7CFB\u5217",link:"/catalog/2021-\u4E39\u9802\u9DB4RE\u7CFB\u5217\u578B\u9304",image:"/main/RE.jpg"},{name:"FD\u7CFB\u5217",link:"/catalog/\u96FB\u5B50\u578B\u9304_FD",image:"/main/FD.jpg"},{name:"PR\u7CFB\u5217",link:"/catalog/2021-\u4E39\u9802\u9DB4PR\u7CFB\u5217\u578B\u9304",image:"/main/PR.jpg"}];function D(){const a=b().url;return console.log(a),e("div",{className:"notosans pt-14 4xl:pt-0 mb-10",children:[u("h1",{className:"text-4xl text-center pt-14",children:"CATALOG"}),u("div",{className:"flex flex-wrap justify-center items-center",children:_.map(l=>e(s,{className:"m-20 group",to:l.link,children:[u(p,{src:l.image,href:l.link}),u("h4",{className:"text-2xl text-center mt-2 group-hover:text-blue-400 transition-all",children:l.name})]},l.name))}),u(W,{url:a})]})}var V="/main/about16x9.jpg";function q(){return e("div",{className:"pt-14 2xl:pt-0 mb-10",children:[u("img",{src:V,alt:"img about",className:"w-full h-auto"}),u("h1",{className:"text-4xl text-center pt-14",children:"ABOUT"}),e("div",{className:"px-6 m-auto mt-20 max-w-4xl",children:[u("p",{className:"notosans m-auto text-xl",children:"\u4E39\u9802\u9DB4\u92C1\u9580\u7A97\u54C1\u724C\u5275\u7ACB\u65BC 2002\u5E74\uFF0C\u81F4\u529B\u7814\u767C\u529F\u80FD\u8207\u7F8E\u611F\u517C\u5177\u7684\u9580\u7A97\u3002\u54C1\u724C\u5275\u7ACB\u521D\u671F\uFF0C\u5373\u4EE5\u7384\u95DC\u9580\u3001\u5BA4\u5167\u9580\u5960\u5B9A\u57FA\u77F3\uFF0C\u7522\u54C1\u4E0D\u50C5\u92B7\u552E\u904D\u53CA\u5168\u53F0\uFF0C\u66F4\u6DF1\u5F97\u9867\u5BA2\u4FE1\u8CF4\u3002\u5728\u92C1\u696D\u7684\u50B3\u7D71\u5DE5\u85DD\u57FA\u790E\u4E0A\uFF0C\u4E39\u9802\u9DB4\u6301\u7E8C\u6295\u5165\u7522\u54C1\u958B\u767C\u8207\u914D\u4EF6\u6539\u826F\uFF0C\u63A8\u51FA\u6298\u758A\u9580\u3001\u901A\u98A8\u9580\u3001\u6C23\u5BC6\u9580\u7B49\u7522\u54C1\uFF0C\u591A\u9805\u8A2D\u8A08\u7372\u5F97\u92C1\u696D\u754C\u80AF\u5B9A\u3002\u900F\u904E\u5B8C\u6574\u751F\u7522\u7DDA\u8207\u5C08\u696D\u65BD\u5DE5\u5718\u968A\uFF0C\u4E39\u9802\u9DB4\u5F9E\u7522\u54C1\u88FD\u9020\u5230\u5DE5\u7A0B\u65BD\u4F5C\uFF0C\u63D0\u4F9B\u9867\u5BA2\u4E00\u689D\u9F8D\u670D\u52D9\u3002\u672A\u4F86\u671F\u5F85\u672C\u65BC\u8077\u4EBA\u7CBE\u795E\uFF0C\u6301\u7E8C\u70BA\u6BCF\u4E00\u4F4D\u4F7F\u7528\u8005\u63D0\u4F9B\u512A\u8CEA\u7522\u54C1\u548C\u66F4\u52A0\u8212\u9069\u7684\u751F\u6D3B\u9AD4\u9A57\u3002"}),u("br",{}),e("p",{className:"notosans text-xl",children:["\u53F0\u5317\u5C55\u793A\u4E2D\u5FC3\uFF1A\u53F0\u5317\u5E02\u4FE1\u7FA9\u5340\u57FA\u9686\u8DEF\u4E00\u6BB5376\u865F",u("br",{}),"\u96FB\u8A71\uFF1A02-27200996",u("br",{}),u("br",{}),"\u53F0\u5357\u5C55\u793A\u4E2D\u5FC3\uFF1A\u53F0\u5357\u5E02\u4EC1\u5FB7\u5340\u4E2D\u6B63\u8DEF\u4E09\u6BB5521-1\u865F",u("br",{}),"\u96FB\u8A71\uFF1A06-2716333",u("br",{}),u("br",{})]})]})]})}function K(){return e("div",{className:"pt-14 2xl:pt-0 mb-10",children:[u("h1",{className:"text-8xl text-center pt-24 notosans",children:"404 Not Found"}),u("h6",{className:"text-2xl text-center pt-10 notosans",children:"\u5F88\u62B1\u6B49\uFF0C\u6211\u5011\u7FFB\u4F86\u8986\u53BB\u4F9D\u820A\u7121\u6CD5\u627E\u5230\u9801\u9762\uFF0C\u4F46\u6211\u5011\u53EF\u4EE5\u5E36\u4F60\u56DE\u9996\u9801\u3002"}),u("h6",{className:"text-2xl text-center notosans pb-14",children:"Sorry, the page is not found. Click the button to go back home."}),u("a",{href:"/",children:u("div",{className:"text-4xl notosans border-2 w-60 h-32 text-center p-10",children:"\u56DE\u9996\u9801"})})]})}const Z=[{area:"\u5357\u90E8",place:"",name:"\u660C\u61CB",fullname:"\u660C\u61CB\u92C1\u9580\u7A97\u4E94\u91D1\u884C",postalCode:"91144",location:"\u5C4F\u6771\u7E23\u7AF9\u7530\u9109\u6C34\u6E90\u8DEF2-16\u865F",phone:"08-7711820"},{area:"\u5357\u90E8",place:"",name:"\u66C6\u9F0E",fullname:"\u66C6\u9F0E\u92FC\u92C1\u6709\u9650\u516C\u53F8",postalCode:"70959",location:"\u53F0\u5357\u5E02\u5B89\u5357\u5340\u5317\u5B89\u8DEF\u56DB\u6BB5623\u865F",phone:"(06)355-8778"},{area:"\u5357\u90E8",place:"",name:"\u6C38\u65B0",fullname:"\u6C38\u65B0\u935B\u9020\u92C1\u9580\u7A97\u884C",postalCode:"70953",location:"\u53F0\u5357\u5E02\u5B89\u5357\u5340\u5B89\u4E2D\u8DEF\u4E8C\u6BB532\u865F",phone:"06-2556758"},{area:"\u6771\u90E8",place:"",name:"\u4E9E\u5747",fullname:"\u4E9E\u5747\u885B\u6D74\u7CBE\u54C1\u5EFA\u6750",postalCode:"97348",location:"\u82B1\u84EE\u7E23\u5409\u5B89\u9109\u5EFA\u570B\u8DEF\u4E00\u6BB5218\u865F",phone:"03-8562351"},{area:"\u4E2D\u90E8",place:"",name:"\u9806\u7F8E",fullname:"\u9806\u7F8E\u7CBE\u54C1\u5EFA\u6750\u6709\u9650\u516C\u53F8",postalCode:"51641",location:"\u5F70\u5316\u7E23\u57D4\u9E7D\u9109\u5F70\u6C34\u8DEF\u4E8C\u6BB5192\u5DF776\u865F",phone:"04-8658209"},{area:"\u5357\u90E8",place:"",name:"\u5CB1\u5C71",fullname:"\u5CB1\u5C71\u92C1\u696D\u6709\u9650\u516C\u53F8",postalCode:"83348",location:"\u9AD8\u96C4\u7E23\u9CE5\u677E\u9109\u4E2D\u6B63\u8DEF46\u5DF71\u5F045\u865F",phone:"07-7337177"},{area:"\u5357\u90E8",place:"",name:"\u65E5\u5927",fullname:"\u65E5\u5927\u91D1\u5C6C\u5DE5\u696D\u6709\u9650\u516C\u53F8",postalCode:"90088",location:"\u5C4F\u6771\u5E02\u6E05\u9032\u5DF7162\u4E4B32\u865F",phone:"08-7553071"},{area:"\u5357\u90E8",place:"",name:"\u5320\u67CF",fullname:"\u5320\u67CF\u4F01\u696D\u6709\u9650\u516C\u53F8",postalCode:"71143",location:"\u53F0\u5357\u5E02\u6B78\u4EC1\u5340\u4E03\u7532\u91CC\u5357\u6F6D\u4E09\u885721\u865F",phone:"06-2732488"},{area:"\u5357\u90E8",place:"",name:"\u9686\u6210",fullname:"\u9686\u6210\u5BE6\u696D\u884C",postalCode:"84044",location:"\u9AD8\u96C4\u5E02\u5927\u6A39\u5340\u5B89\u548C\u885769\u5DF762\u865F",phone:"07-7326138"},{area:"\u5357\u90E8",place:"",name:"\u5929\u4E00",fullname:"\u5929\u4E00\u92C1\u9580\u7A97\u6709\u9650\u516C\u53F8",postalCode:"71247",location:"\u53F0\u5357\u5E02\u65B0\u5316\u5340\u5927\u5FB7\u8DEF161\u5DF746\u865F",phone:""},{area:"\u5357\u90E8",place:"",name:"\u5927\u897F\u6D0B",fullname:"\u5B8F\u9038\u92FC\u92C1\u6709\u9650\u516C\u53F8",postalCode:"90061",location:"\u5C4F\u6771\u5E02\u6D77\u8C50\u885795\u5DF742\u865F",phone:"08-7364226"},{area:"\u5357\u90E8",place:"",name:"\u92C1\u548C",fullname:"\u92C1\u548C\u4F01\u696D\u884C",postalCode:"80252",location:"\u9AD8\u96C4\u5E02\u82D3\u96C5\u5340\u4E94\u798F\u4E00\u8DEF137\u865F",phone:"07-2242876"},{area:"\u5357\u90E8",place:"",name:"\u5927\u5CB3",fullname:"\u5927\u5CB3\u570B\u969B\u6709\u9650\u516C\u53F8",postalCode:"81361",location:"\u9AD8\u96C4\u5E02\u5DE6\u71DF\u5340\u6587\u5B78\u8DEF459\u865F",phone:"07-3496559"},{area:"\u5357\u90E8",place:"",name:"\u8302\u8343",fullname:"\u8302\u8343\u85DD\u8853\u9580\u7A97\u6709\u9650\u516C\u53F8",postalCode:"81273",location:"\u9AD8\u96C4\u5E02\u5C0F\u6E2F\u5340\u5B54\u9CF3\u8DEF222\u865F",phone:"07-7913528"},{area:"\u5357\u90E8",place:"",name:"\u9CF3\u51F0",fullname:"\u9CF3\u51F0\u92C1\u6750\u884C",postalCode:"71062",location:"\u53F0\u5357\u5E02\u6C38\u5EB7\u5340\u5927\u7063\u8DEF942\u5DF7371\u5F04115\u865F",phone:"06-2722108"},{area:"\u5357\u90E8",place:"",name:"\u5275\u6607",fullname:"\u5275\u6607\u9580\u7A97\u884C",postalCode:"63648",location:"\u96F2\u6797\u7E23\u53F0\u897F\u9109\u6D77\u5357\u6751\u6C11\u65CF\u8DEF42\u4E4B3\u865F",phone:"05-6986808"},{area:"\u6771\u90E8",place:"",name:"\u666E\u60A0\u746A",fullname:"\u666E\u60A0\u746A\u4F01\u696D\u6709\u9650\u516C\u53F8",postalCode:"95045",location:"\u53F0\u6771\u5E02\u8C50\u6A02\u5DE5\u696D\u5340\u5927\u9053\u8DEF5\u865F",phone:"08-9329578"},{area:"\u4E2D\u90E8",place:"",name:"\u9032\u6210",fullname:"\u9032\u6210\u92C1\u9580\u7A97\u52A0\u5DE5\u5EE0",postalCode:"43749",location:"\u53F0\u4E2D\u5E02\u5927\u7532\u5340\u80B2\u82F1\u8DEF50\u865F",phone:"04-26877820"},{area:"\u5357\u90E8",place:"",name:"\u65FA\u5FB7",fullname:"\u65FA\u5FB7\u6709\u9650\u516C\u53F8",postalCode:"71248",location:"\u53F0\u5357\u5E02\u65B0\u5316\u5340\u5927\u667A\u8DEF237\u865F",phone:"06-5989988"},{area:"\u5357\u90E8",place:"",name:"\u96E8\u6210",fullname:"\u96E8\u6210\u5EFA\u6750",postalCode:"72441",location:"\u53F0\u5357\u5E02\u4E03\u80A1\u5340\u5927\u57D5\u91CC28-15\u865F",phone:"06-2618070"},{area:"\u4E2D\u90E8",place:"",name:"\u7531\u7530",fullname:"\u7531\u7530\u91D1\u5C6C\u5DE5\u7A0B\u6709\u9650\u516C\u53F8",postalCode:"407006",location:"\u53F0\u4E2D\u5E02\u897F\u5C6F\u5340\u897F\u5C6F\u8DEF\u4E09\u6BB5171\u865F",phone:"04-24636666"},{area:"\u5357\u90E8",place:"",name:"\u9293\u6649\u884C",fullname:"\u9293\u6649\u884C",postalCode:"600",location:"\u5609\u7FA9\u5E02\u4E16\u8CE2\u8DEF\u4E8C\u6BB5642\u865F",phone:"05-2359772"},{area:"\u5357\u90E8",place:"",name:"\u9752\u6FA4",fullname:"\u9752\u6FA4\u7DA0\u5EFA\u6750\u5DE5\u85DD\u9580\u7A97",postalCode:"81152",location:"\u9AD8\u96C4\u5E02\u6960\u6893\u5340\u5F8C\u660C\u8DEF1081\u865F",phone:"07-3652806"},{area:"\u5357\u90E8",place:"",name:"\u529B\u660C\u884C",fullname:"\u529B\u660C\u884C\u92C1\u696D\u6709\u9650\u516C\u53F8",postalCode:"84045",location:"\u9AD8\u96C4\u5E02\u5927\u6A39\u5340\u74E6\u539D\u885776\u5DF72-19\u865F",phone:"07-6528390"},{area:"\u5357\u90E8",place:"",name:"\u5357\u5149",fullname:"\u5357\u5149\u92C1\u6750\u4E94\u91D1\u884C",postalCode:"84045",location:"\u9AD8\u96C4\u5E02\u5927\u6A39\u5340\u74E6\u539D\u885776\u5DF72-19\u865F",phone:"07-6528390"},{area:"\u5357\u90E8",place:"",name:"\u4E2D\u53CB",fullname:"\u4E2D\u53CB\u7CBE\u54C1\u9580\u7A97\u6709\u9650\u516C\u53F8",postalCode:"60665",location:"\u5609\u7FA9\u7E23\u4E2D\u57D4\u9109\u91D1\u862D\u6751\u7530\u5BEE7-30\u865F",phone:"05-2530319"},{area:"\u5357\u90E8",place:"",name:"\u8C50\u9806\u8208",fullname:"\u8C50\u9806\u8208\u9580\u7A97\u4F01\u696D\u6709\u9650\u516C\u53F8",postalCode:"63256",location:"\u96F2\u6797\u7E23\u864E\u5C3E\u93AE\u4E2D\u535734-9\u865F",phone:"05-6363333"},{area:"\u5357\u90E8",place:"",name:"\u4E45\u7F8E",fullname:"\u4E45\u7F8E\u4F01\u696D\u6709\u9650\u516C\u53F8",postalCode:"71145",location:"\u53F0\u5357\u5E02\u6B78\u4EC1\u5340\u5927\u5EDF\u4E94\u8857179\u5DF731\u865F",phone:"06-2710272"},{area:"\u5357\u90E8",place:"",name:"\u9AD8\u9CF3",fullname:"\u9AD8\u9CF3\u4F01\u696D\u6709\u9650\u516C\u53F8",postalCode:"83067",location:"\u9AD8\u96C4\u5E02\u9CF3\u5C71\u5340\u5E9C\u524D\u8DEF32\u865F",phone:"07-7414847"},{area:"\u4E2D\u90E8",place:"",name:"\u6B3D\u767C",fullname:"\u6B3D\u767C\u92C1\u7A97\u4E94\u91D1\u884C",postalCode:"54260",location:"\u5357\u6295\u7E23\u8349\u5C6F\u93AE\u78A7\u6D32\u91CC\u8349\u6EAA\u8DEF47-9\u865F",phone:"04-92390427"},{area:"\u5357\u90E8",place:"",name:"\u5229\u6E90",fullname:"\u5229\u6E90\u4E0D\u92B9\u92FC\u92C1\u9580\u7A97\u884C(\u9060\u5927)",postalCode:"73052",location:"\u53F0\u5357\u5E02\u65B0\u71DF\u5340\u592A\u5B50\u8DEF360\u865F\u4E4B3",phone:"06-656 4799"},{area:"\u5357\u90E8",place:"",name:"\u5BCC\u666F",fullname:"\u5BCC\u666F\u92C1\u9580\u7A97",postalCode:"74160",location:"\u53F0\u5357\u5E02\u5584\u5316\u5340\u6587\u6B63\u91CC\u8208\u8FB2\u8DEF18\u865F",phone:"06-5817194"},{area:"\u5357\u90E8",place:"",name:"\u767E\u6D32",fullname:"\u767E\u6D32\u7CBE\u54C1\u9580\u7A97",postalCode:"730",location:"\u53F0\u5357\u5E02\u65B0\u71DF\u5340\u958B\u5143\u8DEF94\u865F",phone:"06-6326261"},{area:"\u5357\u90E8",place:"",name:"\u512A\u5885\u5BB6",fullname:"\u512A\u5885\u5BB6\u80A1\u4EFD\u6709\u9650\u516C\u53F8",postalCode:"72143",location:"\u53F0\u5357\u5E02\u9EBB\u8C46\u5340\u65B0\u751F\u5357\u8DEF218\u5DF762\u865F",phone:"06-5710325"},{area:"\u5357\u90E8",place:"",name:"\u7FBD\u76DB",fullname:"\u7FBD\u76DB\u8208\u696D\u6709\u9650\u516C\u53F8",postalCode:"71089",location:"\u53F0\u5357\u5E02\u6C38\u5EB7\u5340\u6C38\u83EF\u8DEF580\u865F10\u6A13-2",phone:"0922-413573"},{area:"\u5357\u90E8",place:"",name:"\u5DE8\u5927",fullname:"\u5DE8\u5927\u9580\u7A97\u884C",postalCode:"63052",location:"\u96F2\u6797\u7E23\u6597\u5357\u93AE\u5EF6\u5E73\u8DEF\u4E8C\u6BB5333\u865F",phone:"05-5973198"},{area:"\u4E2D\u90E8",place:"",name:"\u91D1\u5143\u8208",fullname:"\u91D1\u5143\u8208\u92FC\u92C1\u9580\u7A97",postalCode:"50086",location:"\u5F70\u5316\u5E02\u4E2D\u83EF\u897F\u8DEF568\u865F",phone:"04-7613736"},{area:"\u5357\u90E8",place:"",name:"\u85DD\u5885\u5BB6",fullname:"\u85DD\u5885\u5BB6\u5BE6\u696D\u6709\u9650\u516C\u53F8",postalCode:"70451",location:"\u53F0\u5357\u5E02\u5317\u5340\u548C\u7DEF\u8DEF\u4E09\u6BB5308\u865F",phone:"06-3585808"},{area:"\u5357\u90E8",place:"",name:"\u5357\u4EC1",fullname:"\u5357\u4EC1\u92C1\u696D\u6709\u9650\u516C\u53F8",postalCode:"71752",location:"\u53F0\u5357\u5E02\u4EC1\u5FB7\u5340\u7FA9\u6797\u8DEF145\u5DF710\u865F",phone:"06-2701485"},{area:"\u4E2D\u90E8",place:"",name:"\u5BCC\u5B89",fullname:"\u5BCC\u5B89\u92FC\u92C1\u6709\u9650\u516C\u53F8",postalCode:"41152",location:"\u53F0\u4E2D\u5E02\u592A\u5E73\u5340\u5927\u8208\u91CC\u5927\u8208\u5341\u516D\u885769\u865F1\u6A13",phone:"04-2393 7267"},{area:"\u5317\u90E8",place:"",name:"\u7687\u50A2",fullname:"\u7687\u50A2\u79D1\u6280\u9580\u7A97",postalCode:"23154",location:"\u65B0\u5317\u5E02\u65B0\u5E97\u5340\u5B89\u5EB7\u8DEF\u4E8C\u6BB5440\u865F",phone:"02-2212 1398"},{area:"\u5357\u90E8",place:"",name:"\u6642\u4EE3",fullname:"\u6642\u4EE3\u92C1\u696D\u6709\u9650\u516C\u53F8",postalCode:"831132",location:"\u9AD8\u96C4\u5E02\u5927\u5BEE\u5340\u4E0A\u767C\u4E00\u8DEF11\u865F",phone:"07-788 9519"},{area:"\u4E2D\u90E8",place:"",name:"\u67CF\u5049",fullname:"\u67CF\u5049\u570B\u969B\u6709\u9650\u516C\u53F8",postalCode:"50242",location:"\u5F70\u5316\u7E23\u82AC\u5712\u9109\u8304\u8356\u6751\u5149\u83EF\u8DEF346\u5DF7490\u865F",phone:"04-92527379"},{area:"\u5357\u90E8",place:"",name:"\u767D\u967D\u901A",fullname:"\u9686\u6CF0\u4E0D\u92B9\u92FC\u884C",postalCode:"709028",location:"\u53F0\u5357\u5E02\u5B89\u5357\u5340\u5E03\u888B\u4E94\u885728\u865F",phone:"06-256 8897"},{area:"\u5357\u90E8",place:"",name:"\u5DE8\u660C",fullname:"\u5DE8\u660C\u92C1\u6750\u884C",postalCode:"709013",location:"\u53F0\u5357\u5E02\u5B89\u5357\u5340\u6D77\u4E2D\u8857101\u5DF7117-11\u865F",phone:"06-246 6638"}],J=["\u4E2D\u90E8","\u5357\u90E8","\u6771\u90E8","\u5317\u90E8"];function Q(){return e("div",{className:"pt-14 4xl:pt-0 mb-10",children:[u("h1",{className:"text-4xl text-center pt-14",children:"STORES"}),J.map(a=>e("div",{className:"notosans pt-4 w-screen flex flex-wrap",children:[u("h2",{className:"text-2xl w-screen m-10",children:a}),Z.map(l=>{if(l.area==a)return u("div",{className:"m-auto justify-center mb-10 w-80 border-2 h-48",children:e("div",{className:"text-xl mt-7 px-10",children:[e("h4",{children:[l.place," ",l.fullname]}),u("p",{children:l.location}),u("p",{className:"text-right",children:l.phone})]})})})]}))]})}const uu=["/main/service1.png","/main/service2.png"];function eu(){return e("div",{children:[u(m.exports.Slide,{easing:"ease",prevArrow:u("div",{}),nextArrow:u("div",{}),children:uu.map(a=>u("div",{className:"each-slide",children:u("div",{className:"2xl:h-screen sm:h-80 lg:h-screen/1.5 h-48 md:h-96",style:{backgroundImage:`url(${a})`,backgroundPositionX:"center",backgroundPositionY:"center",backgroundSize:"100% auto",backgroundRepeat:"no-repeat"}})},a))}),u("h1",{className:"text-4xl text-center pt-24",children:"Service"}),e("div",{className:"px-6 m-auto mt-20 max-w-4xl",children:[u("h2",{className:"notosans m-auto text-xl",children:"\u7522\u54C1"}),u("br",{}),e("p",{className:"notosans text-xl",children:["\u7384\u95DC\u9580\u3001\u5BA4\u5167\u9580\u3001\u6298\u758A\u9580\u3001\u901A\u98A8\u9580\u3001\u6C23\u5BC6\u9580\u3002",u("br",{})]}),u("h2",{className:"notosans m-auto text-xl",children:"\u5C08\u696D\u65BD\u5DE5"}),e("p",{className:"notosans text-xl",children:["\u5C08\u5C6C\u7684\u5C08\u696D\u65BD\u5DE5\u5718\u968A\uFF0C\u63D0\u4F9B\u826F\u597D\u7684\u65BD\u5DE5\u54C1\u8CEA\u3002",u("br",{})]})]})]})}function au(){return e("div",{className:"flex flex-grow h-full flex-col",children:[u(R,{}),u("div",{className:"flex-grow",children:e(N,{children:[u(r,{path:"/",element:u(H,{})}),u(r,{path:"catalog",element:u(D,{}),children:u(r,{path:":url",element:u(D,{})})}),u(r,{path:"about",element:u(q,{})}),u(r,{path:"news",element:u(X,{})}),u(r,{path:"store",element:u(Q,{})}),u(r,{path:"product",element:u(d,{})}),u(r,{path:"Service",element:u(eu,{})}),u(r,{path:"*",element:u(K,{})})]})}),u(I,{}),u(v,{visibilityHeight:50,children:u(w,{title:"Back Up",children:u(c,{type:"primary",shape:"circle",size:"large",icon:u(k,{})})})})]})}y.render(u(S,{children:u(au,{})}),document.getElementById("root"));
