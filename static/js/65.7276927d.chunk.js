"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[65],{26:function(n,t,e){e.d(t,{IQ:function(){return h},Jh:function(){return m},TP:function(){return l},XT:function(){return p},a2:function(){return u}});var r=e(861),a=e(757),o=e.n(a),i=e(44);i.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var c="80be64ceb12333e0a159440079e36cd3";function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/trending/movie/day?api_key=".concat(c));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/search/movie?api_key=".concat(c,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(t,"?api_key=").concat(c));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(t,"/credits?api_key=").concat(c));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},245:function(n,t,e){e.d(t,{a:function(){return u}});var r,a=e(168),o=e(444).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n  font-size: 20px;\n  font-weight: bold;\n  gap: 10px;\n  > svg {\n    animation-name: animate360;\n    animation-duration: 2s;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n  }\n    @keyframes animate360 {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n}\n"]))),i=e(828),c=e(184),u=function(){return(0,c.jsxs)(o,{children:["\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c",(0,c.jsx)(i.Nbw,{})]})}},65:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,a,o,i,c,u=e(861),s=e(885),p=e(757),f=e.n(p),l=e(26),d=e(245),h=e(791),x=e(731),m=e(470),v=e(168),b=e(444),g=(0,b.ZP)(x.OL)(r||(r=(0,v.Z)(["\n     cursor: pointer;\n    text-decoration: none;\n    color: black;\n     transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n    :hover, :focus{\n        color: rgb(24, 140, 232);\n    }\n"]))),Z=b.ZP.li(a||(a=(0,v.Z)(["\n     margin-bottom: 10px;\n"]))),y=b.ZP.ul(o||(o=(0,v.Z)(["\n    list-style: none;\n    padding: 0;\n    padding-left: 20px;\n    margin: 0;\n    margin-top: 20px;\n"]))),w=b.ZP.button(i||(i=(0,v.Z)(["\n    padding: 10px 32px;\n    border-radius: 4px;\n    box-shadow: rgb(0 0 0 / 15%) 0px 4px 4px;\n    border-radius: 4px;\n    cursor: pointer;\n    text-decoration: none;\n    color: black;\n    font-weight: 500;\n    margin-left: 10px;\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n     :hover, :focus{\n        color: white;\n        background-color: rgb(24, 140, 232);\n    }\n"]))),k=b.ZP.input(c||(c=(0,v.Z)(["\n    width: 300px;\n    height: 29px;\n    border: 1px solid;\n    border-radius: 4px;\n    font-weight: 500;\n    :hover, :focus{\n        border: 1px solid #188ce8;\n        box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);\n    }\n"]))),P=e(184),j=function(){var n,t=(0,h.useState)([]),e=(0,s.Z)(t,2),r=e[0],a=e[1],o=(0,h.useState)(!1),i=(0,s.Z)(o,2),c=i[0],p=i[1],v=(0,x.lr)(),b=(0,s.Z)(v,2),j=b[0],_=b[1],S=(0,h.useState)(null),T=(0,s.Z)(S,2),q=T[0],z=T[1],C=null!==(n=j.get("query"))&&void 0!==n?n:"",L=(0,m.TH)();(0,h.useEffect)((function(){function n(){return(n=(0,u.Z)(f().mark((function n(){var t,e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!0),n.next=4,(0,l.XT)(C);case 4:t=n.sent,e=t.results,a(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),z("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(C));case 12:return n.prev=12,p(!1),n.finish(12);case 15:case 16:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}""!==C&&function(){n.apply(this,arguments)}()}),[C]);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.currentTarget.elements.serch.value;_(""!==t?{query:t}:{})},children:[(0,P.jsx)(k,{type:"text",name:"serch",autoComplete:"off",placeholder:"Search movies"}),(0,P.jsx)(w,{type:"submit",children:"Search"})]}),q&&(0,P.jsx)("div",{children:q}),c&&(0,P.jsx)(d.a,{}),(0,P.jsx)(y,{children:r.map((function(n){var t=n.id,e=n.title;return(0,P.jsx)(Z,{children:(0,P.jsx)(g,{to:"".concat(t),state:{from:L},children:e})},t)}))})]})}}}]);
//# sourceMappingURL=65.7276927d.chunk.js.map