(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(20),r=a.n(s),i=(a(28),a(8)),l=a(9),o=a(11),j=a(10),b=(a(29),a(5)),d=a(0),h=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"navbar fixed-top navbar-expand-lg navbar-light bg-light position: fixed",style:{height:"40px"},children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(b.b,{className:"navbar-brand hover active",to:"/General",children:"React News"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(b.b,{className:"nav-link ","aria-current":"page",to:"/General",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(b.b,{className:"nav-link ","aria-current":"page",to:"/Business",children:"Business"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(b.b,{className:"nav-link ","aria-current":"page",to:"/Entertainment",children:"Entertainment"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(b.b,{className:"nav-link ","aria-current":"page",to:"/Health",children:"Health"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(b.b,{className:"nav-link ","aria-current":"page",to:"/Science",children:"Science"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(b.b,{className:"nav-link ","aria-current":"page",to:"/Sports",children:"Sports"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(b.b,{className:"nav-link ","aria-current":"page",to:"/Technology",children:"Technology"})})]}),Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:" Search "})]})]})]})})})}}]),a}(c.Component),p=a(14),u=a.n(p),x=a(18),m=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,c=e.imageUrl,n=e.newsUrl,s=e.author,r=e.date,i=e.source;return Object(d.jsx)("div",{className:"my-3",children:Object(d.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(d.jsx)("img",{src:c,className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("h5",{className:"card-title",children:[t," ",Object(d.jsx)("br",{})," ",Object(d.jsx)("span",{class:"badge bg-danger my-2",children:i})]}),Object(d.jsx)("p",{className:"card-text",children:a}),Object(d.jsx)("p",{class:"card-text",children:Object(d.jsxs)("small",{class:"text-muted",children:["By ",s||"Unknown"," on ",new Date(r).toGMTString().replace("GMT","")]})}),Object(d.jsx)(b.b,{target:"_blank",to:n,className:"btn btm-sm btn-primary",children:"Read More...."})]})]})})}}]),a}(c.Component),O=a.p+"static/media/loader.451e9daf.gif",g=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"container text-center",children:Object(d.jsx)("img",{src:O,alt:"fasdf"})})}}]),a}(c.Component),v=a(23),y=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).fetchMoreData=Object(x.a)(u.a.mark((function t(){var a,c,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({page:e.state.page+1}),a="https://newsapi.org/v2/top-headlines?country=".concat(e.props.country,"&apiKey=e3ab2aa59b534e6486ad431ff0a99f9b&page=1&pageSize=21&category=").concat(e.props.category),e.setState({loading:!0}),t.next=5,fetch(a);case 5:return c=t.sent,t.next=8,c.json();case 8:n=t.sent,console.log(n),e.setState({articles:e.state.articles.concat(n.articles),totalResults:n.totalResults,loading:!1});case 11:case"end":return t.stop()}}),t)}))),e.state={articles:[],page:1,loading:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(x.a)(u.a.mark((function e(){var t,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://newsapi.org/v2/top-headlines?country=".concat(this.props.country,"&apiKey=9e5d9fb1fd25499bb883f58d8f592137&page=1&pageSize=21&category=").concat(this.props.category),this.setState({loading:!0}),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,console.log(c),this.setState({articles:c.articles,totalResults:c.totalResults,loading:!1});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h4",{className:"text-center",style:{marginTop:"65px"},children:"Made with \u2764\ufe0f and </code> by Pankaj Chaudhary"}),Object(d.jsx)("h2",{className:"text-center",children:"TOP HEADLINES"}),this.state.loading&&Object(d.jsx)(g,{}),Object(d.jsx)(v.a,{dataLength:this.state.articles.length,next:this.fetchMoreData,hasMore:!0,loader:Object(d.jsx)("spinner",{}),children:Object(d.jsx)("div",{className:"row mx-2",children:this.state.articles.map((function(e){return Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)(m,{title:e.title,description:e.description,imageUrl:e.urlToImage,newsUrl:e.url,author:e.author,date:e.publishedAt,source:e.source.name})},e.url)}))})})]})}}]),a}(c.Component);y.defaultProps={country:"in",category:"general"};var f=y,N=a(2),S=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(b.a,{basename:"/ReactNews",children:[Object(d.jsx)(h,{}),Object(d.jsxs)(N.c,{children:[Object(d.jsxs)(N.a,{exact:!0,path:"/",children:[" ",Object(d.jsx)(f,{title:"mytitle",category:"general"},"general")]}),Object(d.jsxs)(N.a,{exact:!0,path:"/Business",children:[" ",Object(d.jsx)(f,{title:"mytitle",category:"business"},"business")]}),Object(d.jsxs)(N.a,{exact:!0,path:"/entertainment",children:[" ",Object(d.jsx)(f,{title:"mytitle",category:"entertainment"},"entertainment")]}),Object(d.jsxs)(N.a,{exact:!0,path:"/health",children:[" ",Object(d.jsx)(f,{title:"mytitle",category:"health"},"health")]}),Object(d.jsxs)(N.a,{exact:!0,path:"/science",children:[" ",Object(d.jsx)(f,{title:"mytitle",category:"science"},"science")]}),Object(d.jsxs)(N.a,{exact:!0,path:"/sports",children:[" ",Object(d.jsx)(f,{title:"mytitle",category:"sports"},"sports")]}),Object(d.jsxs)(N.a,{exact:!0,path:"/technology",children:[" ",Object(d.jsx)(f,{title:"mytitle",category:"technology"},"technology")]}),Object(d.jsxs)(N.a,{exact:!0,path:"/science",children:[" ",Object(d.jsx)(f,{title:"mytitle",category:"science"},"science")]})]})]})})}}]),a}(c.Component),k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),k()}},[[37,1,2]]]);
//# sourceMappingURL=main.b8eb7e0a.chunk.js.map