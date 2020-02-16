(this.webpackJsonpfilmeditor=this.webpackJsonpfilmeditor||[]).push([[0],{20:function(e,a){e.exports={APIKey:"cbc99f6e"}},33:function(e,a,t){e.exports={ul:"header_ul__35quP"}},35:function(e,a,t){e.exports=t.p+"static/media/Spinner-1s-200px.579e532e.svg"},39:function(e,a,t){e.exports=t(69)},44:function(e,a,t){},45:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(14),l=t.n(c),o=(t(44),t(45),t(33)),i=t.n(o);function m(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"MovieSeriesInfo"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},r.a.createElement("ul",{className:"navbar-nav ".concat(i.a.ul)},r.a.createElement("li",{className:"nav-item active display-4 "},r.a.createElement("i",{className:"fab fa-imdb"})))))}t(46);function s(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"footer p-3 mt-4 text-center bg-dark text-light"},"Developer by :",r.a.createElement("span",{className:"text-warning  font-weight-normal"},"Dmitriy"),", using ",r.a.createElement("i",{className:"fab fa-react"})," ReactJs &Redux JS integrated with external movies data API",r.a.createElement("a",{href:"http://www.omdbapi.com/",target:"_blank"},"  omdbapi"))))}function u(e){return onsubmit=function(a){a.preventDefault(),e.fetchdata(e.searchState.text)},r.a.createElement("div",{className:"jumbotron jumbotron-fluid mt-5 text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4 mb-3"},r.a.createElement("i",{className:"fa fa-search"}),"Search for a Movie, TV series.."),r.a.createElement("form",null,r.a.createElement("input",{className:"form-control",onChange:function(a){return e.Search_Movie(a.target.value)},value:e.searchState.text,type:"text",name:"seatchText",placeholder:"Search for a Movie, TV series.."}),r.a.createElement("button",{className:"btn btn-primary mt-3"},"Search"))))}var d=t(12),v=t(16),h=t(19),p=t.n(h),E=t(20),f={text:"",movies:[],loading:!1,movie:[]},b=t(35);function g(){return r.a.createElement("div",null,r.a.createElement("img",{alt:" ...loading",src:b.spinner,style:{width:"20rem",margin:"auto",display:"block"}}))}var N=t(11);function y(e){return r.a.createElement("div",{className:"col-3 mb-5"},r.a.createElement("div",{className:" card card-body bg-dark text-center h-100"},r.a.createElement("img",{src:e.movies.Poster,className:"w-100 mb-2",alt:"..."}),r.a.createElement("h5",{className:"card-title text-light"},e.movies.Title),r.a.createElement("p",{className:"card-text text-light"}," ",e.movies.Year),r.a.createElement(N.b,{className:"btn btn-primary",to:"/movie/".concat(e.movies.imdbID)},r.a.createElement("i",{className:"fas fa-chevron-right"}))))}function w(e){return r.a.createElement("div",{className:"row"},e.searchState.movies?e.searchState.movies.map((function(e,a){return r.a.createElement(y,{key:a,movies:e})})):void 0)}var x=Object(d.b)((function(e){return{searchState:e.movies}}),{Search_Movie:function(e){return{type:"Search_Movie",payload:e}},fetchdata:function(e){return function(a){p.a.get("http://www.omdbapi.com/?apikey=".concat(E.APIKey,"&s=").concat(e)).then((function(e){return a({type:"fetchdata",payload:e.data.Search})})).catch((function(e){console.log(e)}))}}})((function(e){return r.a.createElement("div",{className:"container"},r.a.createElement(u,{fetchdata:e.fetchdata,Search_Movie:e.Search_Movie,searchState:e.searchState}),e.searchState.loading?r.a.createElement(g,null):r.a.createElement(w,{searchState:e.searchState}))})),S=t(10),k=t(37),M=t(38),j=[k.a],T=Object(S.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"Search_Movie":return Object(v.a)({},e,{text:a.payload,loading:!1});case"fetchdata":return Object(v.a)({},e,{movies:a.payload});case"fetchMovie":return Object(v.a)({},e,{movie:a.payload});default:return e}}}),_=Object(S.createStore)(T,Object(M.composeWithDevTools)(S.applyMiddleware.apply(void 0,j))),D=_;window.store=_;var O=t(9);var A=Object(d.b)((function(e){return{movie:e.movies.movie}}),{fetchMovie:function(e){return function(a){p.a.get("http://www.omdbapi.com/?apikey=".concat(E.APIKey,"&i=").concat(e)).then((function(e){return a({type:"fetchMovie",payload:e.data})})).catch((function(e){console.log(e)}))}}})((function(e){return Object(n.useEffect)((function(){e.fetchMovie(e.match.params.id)}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-4 card card-body"},r.a.createElement("img",{src:e.movie.Poster,alt:"poster"})),r.a.createElement("div",{className:"col-8"},r.a.createElement("ul",{className:"list-group align-items-start"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Title: "),e.movie.Title),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Genre: "),e.movie.Genre),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Title: "),e.movie.Title),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Year: "),e.movie.Year),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Type: "),e.movie.Type),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Director: "),e.movie.Director),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Actors: "),e.movie.Actors),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"imdbRating: "),e.movie.imdbRating))),r.a.createElement("div",{className:"card card-body container bg-dark text-light"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null," About"),e.movie.Plot,r.a.createElement("hr",null),r.a.createElement("a",{className:"btn btn-primary",target:"_blank",href:"https://www.imdb.com/title/".concat(e.match.params.id)},"Read more at IMDB"),r.a.createElement(N.b,{to:"/"}," get back to search")))))}));var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{store:D},r.a.createElement(N.a,null,r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(O.a,{exact:!0,path:"/",component:x}),r.a.createElement(O.a,{exact:!0,path:"/movie/:id",component:A}),r.a.createElement(s,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.d77d93cc.chunk.js.map