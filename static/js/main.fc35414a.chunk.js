(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(6),r=a.n(o),s=(a(12),a(4)),u=a(1),l=function(e){return e.dots.map((function(e,t){return c.a.createElement("div",{className:"snake-dot",key:t,style:{left:"".concat(e[0],"%"),top:"".concat(e[1],"%")}})}))},i=function(e){var t=e.food,a={left:"".concat(t[0],"%"),top:"".concat(t[1],"%")};return c.a.createElement("div",{className:"snake-food",style:a})},f=function(){return[2*Math.floor((98*Math.random()+1)/2),2*Math.floor((98*Math.random()+1)/2)]};var d=function(){var e=Object(n.useState)([[0,0],[2,0]]),t=Object(u.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(f()),d=Object(u.a)(r,2),b=d[0],h=d[1],m=Object(n.useState)("right"),v=Object(u.a)(m,2),k=v[0],j=v[1],p=Object(n.useState)(200),O=Object(u.a)(p,2),g=O[0],E=(O[1],Object(n.useState)(0)),w=Object(u.a)(E,2),y=w[0],S=w[1];Object(n.useEffect)((function(){document.onkeydown=M;var e=setInterval((function(){N(),C(),x(),J()}),g);return function(){return clearInterval(e)}}),[a]);var M=function(e){switch(e=e||window.event,console.log(e.keyCode),e.keyCode){case 38:j("up");break;case 40:j("down");break;case 37:j("left");break;case 39:j("right")}},N=function(){var e=Object(s.a)(a),t=e[e.length-1];switch(k){case"right":t=[t[0]+2,t[1]];break;case"left":t=[t[0]-2,t[1]];break;case"down":t=[t[0],t[1]+2];break;case"up":t=[t[0],t[1]-2]}e.push(t),e.shift(),o(e)},I=function(){alert("Game over. The you score is ".concat(y,".")),o([[0,0],[2,0]]),j("right"),h(f()),S(0)},C=function(){var e=a[a.length-1];(e[0]>=100||e[1]>=100||e[0]<0||e[1]<0)&&I()},J=function(){var e=Object(s.a)(a),t=e[e.length-1];e.pop(),e.forEach((function(e){t[0]===e[0]&&t[1]===e[1]&&I()}))},x=function(){var e=a[a.length-1];e[0]===b[0]&&e[1]===b[1]&&(h(f()),S(y+1),B())},B=function(){var e=Object(s.a)(a);e.unshift([]),o(e)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"score"},"Score: ",y),c.a.createElement("div",{className:"game-area"},c.a.createElement(l,{dots:a}),c.a.createElement(i,{food:b})))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.fc35414a.chunk.js.map