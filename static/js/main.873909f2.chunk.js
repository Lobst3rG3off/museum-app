(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(46)},24:function(e,t,a){},25:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),s=a.n(c),l=(a(24),a(2)),u=a(3),o=a(5),i=a(4),h=a(6);a(25);var m=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Rijks Museum Database"))};var p=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"\xa92019 HackerYou"))},d=a(8),f=a.n(d),v=a(16),E=a(17),b=a.n(E),g="WQ3n1EuK",w=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(i.a)(t).call(this))).handleSubmit=function(t){t.preventDefault(),e.getSearchResults(e.state.searchInput)},e.handleChange=function(t){e.setState({searchInput:t.target.value})},console.log(g),e.state={searchInput:""},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getSearchResults",value:function(){var e=Object(v.a)(f.a.mark(function e(t){var a,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://www.rijksmuseum.nl/api/en/collection/",{params:{imgonly:!0,ps:20,q:t,key:g}});case 3:a=e.sent,console.log(a),n=a.data.artObjects,this.props.updateArt(n),this.props.updateCurrentSearch(this.state.searchInput),console.log(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",{htmlFor:"search"}," Find some Art "),r.a.createElement("input",{type:"search",name:"search",id:"search",value:this.state.searchInput,onChange:function(t){return e.handleChange(t)}}))}}]),t}(n.Component);var S=function(e){return r.a.createElement("div",{className:"displayArea"},e.art.length>0?r.a.createElement("div",{className:"showResults"},r.a.createElement("p",null,"Showing results for: ",e.currentSearch),r.a.createElement("div",{className:"artworks"},e.art.map(function(e){var t=e.id,a=e.title;return e.webImage,e.principalOfFirstMaker,r.a.createElement("div",{key:t,className:"art"},r.a.createElement("img",{src:"{webImage.url}",alt:""}),r.a.createElement("h2",null,a),r.a.createElement("h3",null,"Artist"))}))):r.a.createElement("div",{className:"noResults"},r.a.createElement("p",null,"Please enter a search term.")))},k=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(i.a)(t).call(this))).updateCurrentSearch=function(t){e.setState({currentSearch:t})},e.updateArt=function(t){e.setState({art:t})},e.state={currentSearch:"",art:[]},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement("main",null,r.a.createElement(w,{updateCurrentSearch:this.updateCurrentSearch,updateArt:this.updateArt}),r.a.createElement(S,{art:this.state.art,currentSearch:this.state.currentSearch})),r.a.createElement(p,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.873909f2.chunk.js.map