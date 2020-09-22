(this["webpackJsonpmessenger-react-firebase"]=this["webpackJsonpmessenger-react-firebase"]||[]).push([[0],{46:function(e,n,t){e.exports=t(65)},51:function(e,n,t){},65:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(19),i=t.n(o),c=(t(51),t(33)),s=t(15),l=t(13);function m(){var e=Object(s.a)(["\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    overflow-x: hidden;\n\n  }  \n  html, body{\n  font-size: 10px;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  //font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n  //  monospace;\n  }\n"]);return m=function(){return e},e}var u=Object(l.b)(m()),d={colors:{primary:"#0084FF",secondary:"#3E4042",white:"#E4E6EB",gray:"#8a8d91"},font:{size:{xs:"1rem",s:"1.2rem",m:"1.4rem",l:"1.5rem"}}},f=function(e){var n=e.children;return r.a.createElement(l.a,{theme:d},r.a.createElement(u,null),n)},g=t(85),p=t(84),h=t(83),b=t(82);function x(){var e=Object(s.a)(["\n  font-size: ",";\n  width: 100%;\n  overflow-y: hidden;\n  \n  .message__box{\n      margin: 0 10px 10px 10px;\n      padding: 10px;\n      width: fit-content;\n      height: fit-content;\n      max-width: 90%;\n      border: 1px solid lightgrey;\n      border-radius: 20px;\n      box-shadow: 0 .1em .5em lightgrey ;\n      background-color: ",";\n      color: ",";\n   }\n  & .message__text{ \n    background-color: ",";\n    color: white;\n    float: right;\n    text-align: right;\n  }\n  \n  .message__span{\n  padding: 0 25px;\n  width: 100%;\n  font-size: ",";\n  color: ",";\n  }\n  & .message__user{\n  display: none;\n  }\n"]);return x=function(){return e},e}var v=l.c.div(x(),(function(e){return e.theme.font.size.l}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.font.size.s}),(function(e){return e.theme.colors.gray})),y=function(e){var n=e.name,t=e.text,a=n===t.name;return r.a.createElement(v,null,r.a.createElement("div",{className:a?"message__user":"message__span"},t.name),r.a.createElement("div",{className:a?"message__box message__text":"message__box"},t.text))},w=t(31),E=t.n(w),j=E.a.initializeApp({apiKey:"AIzaSyDqauWWUw9VsCDHl-ooOgx9iTkm7UtxdAM",authDomain:"messenger-8c286.firebaseapp.com",databaseURL:"https://messenger-8c286.firebaseio.com",projectId:"messenger-8c286",storageBucket:"messenger-8c286.appspot.com",messagingSenderId:"395732823006",appId:"1:395732823006:web:3c831ba9a546c768ec4b4f",measurementId:"G-J9HWRZ3SWN"}).firestore();function _(){var e=Object(s.a)(["\nwidth: 500px;\nheight: auto;\nmargin: auto;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nflex-direction: column;\n"]);return _=function(){return e},e}function O(){var e=Object(s.a)(["\n  width: 100%;\n  height: 80px;\n  position: fixed;\n  background-color: white;\n  bottom: 0;\n display: flex;\n align-items: center;\n justify-content: center;\n \n .form{\n width: 500px;\n }\n \n"]);return O=function(){return e},e}function k(){var e=Object(s.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n//padding: 50px 50px 25px 50px;\n  background-color: white;\n h1, h2{\n  text-align: center;\n  margin-bottom: 20px;\n  }\n"]);return k=function(){return e},e}function S(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 100vw;\n  height: auto;\n  min-height: 100vh;\n  margin: auto;\n  \n \n"]);return S=function(){return e},e}var z=l.c.div(S()),I=l.c.div(k()),W=l.c.div(O()),B=l.c.div(_());var C=function(){var e=Object(a.useState)(""),n=Object(c.a)(e,2),t=n[0],o=n[1],i=Object(a.useState)("Adam"),s=Object(c.a)(i,2),l=s[0],m=(s[1],Object(a.useState)([])),u=Object(c.a)(m,2),d=u[0],x=u[1];return Object(a.useEffect)((function(){j.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){x(e.docs.map((function(e){return e.data()})))}))}),[]),Object(a.useEffect)((function(){}),[]),r.a.createElement(f,null,r.a.createElement(z,null,r.a.createElement(I,null,r.a.createElement("h1",null,"Messenger create by React and Firebase"),r.a.createElement("h2",null,"Welcome ",l)),r.a.createElement(B,null,d.map((function(e){return r.a.createElement(y,{name:l,text:e})}))),r.a.createElement(W,null,r.a.createElement(g.a,{className:"form"},r.a.createElement(p.a,null,"Enter a message"),r.a.createElement(h.a,{value:t,onChange:function(e){return o(e.target.value)}}),r.a.createElement(b.a,{disabled:!t,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),j.collection("messages").add({text:t,name:l,timestamp:E.a.firestore.FieldValue.serverTimestamp()}),o("")}},"Send")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.439cb21d.chunk.js.map