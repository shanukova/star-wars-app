(this["webpackJsonpstar-wars-app"]=this["webpackJsonpstar-wars-app"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(8),c=a.n(n),s=a(7),h=a.n(s),i=a(2),o=a(3),u=a(5),l=a(4),p=a(9),j=(a(15),a(0)),b=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={showMe:!1,plusSign:!0},r}return Object(o.a)(a,[{key:"operation",value:function(){this.setState({showMe:!this.state.showMe,plusSign:!this.state.plusSign})}},{key:"render",value:function(){var e=this,t=this.props.character.name,a="Gender: ".concat(this.props.character.gender,", Height: ").concat(this.props.character.height,",\n                     Mass: ").concat(this.props.character.mass,", Birth year: ").concat(this.props.character.birth_year);return Object(j.jsxs)("li",{className:"character p-1",onClick:function(){return e.operation()},children:[Object(j.jsxs)("div",{className:"character-name",children:[" ",this.state.plusSign?Object(j.jsx)("span",{children:"\u2795"}):Object(j.jsx)("span",{children:"\u2796"}),"  ",t]}),this.state.showMe?Object(j.jsx)("div",{className:"character-details mt-2",children:a}):null]})}}]),a}(r.Component);a(17);function d(){return(d=Object(p.a)(h.a.mark((function e(){var t,a,r,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="https://swapi.dev/api/people",a=[];case 2:return e.prev=2,e.next=5,fetch(t);case 5:return r=e.sent,e.next=8,r.json();case 8:(n=e.sent).results.forEach((function(e){var t=e.name,r=e.height,n=e.mass,c=e.birth_year,s=e.gender;a.push({name:t,height:r,mass:n,birth_year:c,gender:s})})),t=n.next,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.error("Oeps, something is wrong ".concat(e.t0));case 16:if(null!==t){e.next=2;break}case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}var m=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleSearch=function(e){r.setState({search:e.target.value,characters:r.state.allCharacters.filter((function(t){return new RegExp(e.target.value,"i").exec(t.name)}))})},r.state={characters:[],allCharacters:[],search:""},r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(){return d.apply(this,arguments)})().then((function(t){return e.setState({characters:t,allCharacters:t})}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("h1",{className:"text-center mt-5",children:"Star Wars Characters"}),Object(j.jsx)("div",{className:"search",children:Object(j.jsx)("input",{type:"text",placeholder:"\ud83d\udd0e",value:this.state.search,onChange:this.handleSearch})}),Object(j.jsx)("ul",{className:"characters mt-5",children:this.state.characters.map((function(e){return Object(j.jsx)(b,{character:e},"".concat(e.name))}))})]})}}]),a}(r.Component);c.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.d1e06dac.chunk.js.map