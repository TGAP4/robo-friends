(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),s=(a(13),a(3)),i=a(4),l=a(6),m=a(5),h=a(7),u=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},d=function(e){var t=e.robots;return t.map((function(e,a){return t[a].name.toLowerCase().startsWith("mr. ")||t[a].name.toLowerCase().startsWith("ms. ")?t[a].name=t[a].name.slice(4):t[a].name.toLowerCase().startsWith("mrs. ")&&(t[a].name=t[a].name.slice(5)),t})),r.a.createElement("div",{className:"tc"},t.sort((function(e,t){return e.name>t.name?1:-1})).map((function(e,a){return r.a.createElement(u,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})})))},f=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"tc pa2 ma4"},r.a.createElement("input",{className:"tc pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t}))},b=(a(14),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid white",padding:"30px",height:"500px"}},e.children)}),p=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement("div",{classname:"tc"},r.a.createElement("h1",{className:"tc f1"},"RoboFriends"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(d,{robots:n}))):r.a.createElement("h1",{className:"tc"},"Loading...")}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15);c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.5ac84c7b.chunk.js.map