(this.webpackJsonpjouzu=this.webpackJsonpjouzu||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){},18:function(e,n,t){},19:function(e,n,t){"use strict";t.r(n);var r=t(1),s=t.n(r),c=t(7),o=t.n(c),a=t(2),i=(t(14),t(15),t(20)),u=(t(16),t(0)),d=function(e){var n=e.switchToGame;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"flex-grow-1 mode mode1 d-grid p-2",children:Object(u.jsx)(i.a,{variant:"outline-dark",onClick:n,active:!0,children:"Kanjis"})}),Object(u.jsx)("div",{className:"flex-grow-1 mode mode2 d-grid p-2",children:Object(u.jsxs)(i.a,{variant:"outline-dark",disabled:!0,children:["Forma \u3066",Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"(Pr\xf3ximamente)"})]})})]})},l=function(e){return Object(u.jsx)(d,{switchToGame:function(){return e.switchToGameMode("game")}})},j=function(e){var n=e.className?e.className+" d-grid p-2 ans":"d-grip p-2 ans",t=e.text;return Object(u.jsx)("div",{className:n,children:Object(u.jsx)(i.a,{variant:"outline-dark",onClick:function(){return e.submitAnswer(t)},active:!0,children:t})})},w=function(e){var n=e.correct?e.correct:0,t=e.incorrect?e.incorrect:0,r=e.resetGame,s=e.returnToMenu;return Object(u.jsxs)("div",{className:"menu d-flex",children:[Object(u.jsx)("div",{className:"flex-grow-1 flex-basis-0 px-2",children:Object(u.jsxs)(i.a,{variant:"outline-dark",onClick:s,active:!0,children:["\u2190",Object(u.jsx)("br",{}),"Volver"]})}),Object(u.jsxs)("div",{className:"d-flex flex-grow-1",children:[Object(u.jsx)("div",{className:"flex-grow-1 px-1",children:Object(u.jsxs)("div",{className:"alert alert-success text-center",children:["Bien",Object(u.jsx)("br",{}),n]})}),Object(u.jsx)("div",{className:"flex-grow-1 px-1",children:Object(u.jsxs)("div",{className:"alert alert-danger text-center",children:["Mal",Object(u.jsx)("br",{}),t]})})]}),Object(u.jsx)("div",{className:"flex-grow-1 d-flex justify-content-end align-items-start flex-basis-0 px-2",children:Object(u.jsxs)(i.a,{variant:"outline-dark",onClick:r,active:!0,children:["\u27f2",Object(u.jsx)("br",{}),"Reset"]})})]})},f=(t(18),function(e){var n=e.question?e.question:"",t=[{id:1,text:e.ans1?e.ans1:"",className:"ans1"},{id:2,text:e.ans2?e.ans2:"",className:"ans2"},{id:3,text:e.ans3?e.ans3:"",className:"ans3"},{id:4,text:e.ans4?e.ans4:"",className:"ans4"}],r=e.correct,s=e.incorrect,c=e.submitAnswer,o=e.resetGame,a=e.returnToMenu;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(w,{correct:r,incorrect:s,resetGame:o,returnToMenu:a}),Object(u.jsx)("div",{className:"question",children:n}),t.map((function(e){return Object(u.jsx)(j,{text:e.text,className:e.className,submitAnswer:c},e.id)}))]})}),h=t(9),b=function(e){return{getQuestions:function(){return function(e){return e.map((function(e){return{id:e.id,question:e.question}}))||[]}(e)},getPossibleAnswers:function(n){return function(e,n){var t=e.find((function(e){return e.id===n}));if(t&&t.correct_answer)return{correct:t.correct_answer,incorrect:t.other_answers?t.other_answers:[]}}(e,n)}}}(h),m={getRandomInt:function(e,n){return Math.floor(Math.random()*(n-e)+e)}},x=function(e,n,t){for(var r=[],s=0,c=0;c<4;c++)c===e?r.push(n):(r.push(t[s]),s+=1);return r},g={startNewGame:function(){return{questions:b.getQuestions()}},getNextQuestion:function(e){var n=e[m.getRandomInt(0,e.length)],t=b.getPossibleAnswers(n.id),r=function(e,n){n.length<e&&(e=n.length);for(var t=[],r=new Set;r.size<e;){var s=n[m.getRandomInt(0,n.length)];r.has(s)||(t.push(s),r.add(s))}return t}(4,t.incorrect),s=m.getRandomInt(0,4);return{id:n.id,question:n.question,answers:x(s,t.correct,r)}},checkIfCorrectAnswer:function(e,n){return n===b.getPossibleAnswers(e).correct}},v=function(e){var n=Object(r.useRef)({}),t=Object(r.useState)(0),s=Object(a.a)(t,2),c=s[0],o=s[1],i=Object(r.useState)(0),d=Object(a.a)(i,2),l=d[0],j=d[1],w=Object(r.useState)(""),h=Object(a.a)(w,2),b=h[0],m=h[1],x=Object(r.useState)(""),v=Object(a.a)(x,2),O=v[0],_=v[1],p=Object(r.useState)(""),q=Object(a.a)(p,2),N=q[0],k=q[1],S=Object(r.useState)(""),T=Object(a.a)(S,2),A=T[0],M=T[1],C=Object(r.useState)(""),G=Object(a.a)(C,2),I=G[0],P=G[1],W=Object(r.useState)(""),F=Object(a.a)(W,2),R=F[0],y=F[1],z=e.returnToMenu,B=function(){var e=g.getNextQuestion(n.current.questions);m(e.id),_(e.question),k(e.answers[0]),M(e.answers[1]),P(e.answers[2]),y(e.answers[3])};return Object(r.useEffect)((function(){n.current=g.startNewGame(),B()}),[]),Object(u.jsx)(f,{correct:c,incorrect:l,question:O,ans1:N,ans2:A,ans3:I,ans4:R,submitAnswer:function(e){g.checkIfCorrectAnswer(b,e)?o(c+1):j(l+1),B()},resetGame:function(){o(0),j(0)},returnToMenu:z})},O=function(e){var n={main_menu:{className:"main-menu-interface",controller:l},game:{className:"game-interface",controller:v}},t=Object(r.useState)("main_menu"),s=Object(a.a)(t,2),c=s[0],o=s[1],i="interface "+n[c].className,d=n[c].controller;return Object(u.jsx)("div",{className:i,children:Object(u.jsx)(d,{returnToMenu:function(){o("main_menu")},switchToGameMode:function(e){o(e)}})})},_=function(){return Object(u.jsx)(O,{})},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(n){var t=n.getCLS,r=n.getFID,s=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),s(e),c(e),o(e)}))};o.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/jouzu",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/jouzu","/service-worker.js");p?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):q(n,e)}))}}(),N()},9:function(e){e.exports=JSON.parse('[{"id":"0","question":"\u9b5a","correct_answer":"\u3055\u304b\u306a","other_answers":["\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"id":"1","question":"\u8089","correct_answer":"\u306b\u304f","other_answers":["\u3055\u304b\u306a","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"id":"2","question":"\u5375","correct_answer":"\u305f\u307e\u3054","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"id":"3","question":"\u6c34","correct_answer":"\u307f\u305a","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"id":"4","question":"\u98df","correct_answer":"\u305f(\u3079\u307e\u3059)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"id":"5","question":"\u98f2","correct_answer":"\u306e(\u307f\u307e\u3059)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"id":"6","question":"\u5927","correct_answer":"\u304a\u304a(\u304d\u3044)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"id":"7","question":"\u5c0f","correct_answer":"\u3061\u3044(\u3055\u3044)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"id":"8","question":"\u65b0","correct_answer":"\u3042\u305f\u3089(\u3057\u3044)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"id":"9","question":"\u53e4","correct_answer":"\u3075\u308b(\u3044)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"id":"10","question":"\u6642","correct_answer":"\u3058","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"id":"11","question":"\u5206","correct_answer":"\u3075\u3093\u30fb\u3077\u3093","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"id":"12","question":"\u534a","correct_answer":"\u306f\u3093","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"id":"13","question":"\u6708","correct_answer":"\u3052\u3064(\u3088\u3046\u3073)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"id":"14","question":"\u706b","correct_answer":"\u304b(\u3088\u3046\u3073)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"id":"15","question":"\u6c34","correct_answer":"\u3059\u3044(\u3088\u3046\u3073)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"id":"16","question":"\u6728","correct_answer":"\u3082\u304f(\u3088\u3046\u3073)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"id":"17","question":"\u91d1","correct_answer":"\u304d\u3093(\u3088\u3046\u3073)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"id":"18","question":"\u571f","correct_answer":"\u3069(\u3088\u3046\u3073)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"id":"19","question":"\u65e5","correct_answer":"\u306b\u3061(\u3088\u3046\u3073)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)"]}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.3fe0da98.chunk.js.map