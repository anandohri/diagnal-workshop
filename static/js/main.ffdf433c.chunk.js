(this["webpackJsonpdiagnal-workshop"]=this["webpackJsonpdiagnal-workshop"]||[]).push([[0],{23:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var c=a(3),s=a(2),n=a(17),r=a.n(n),i=(a(23),a(8)),o=a(18),j=a.n(o);var l=function(e,t){var a=Object(s.useState)(!0),n=Object(c.a)(a,2),r=n[0],o=n[1],l=Object(s.useState)(!1),b=Object(c.a)(l,2),u=b[0],m=b[1],O=Object(s.useState)([]),d=Object(c.a)(O,2),g=d[0],h=d[1],p=Object(s.useState)(!1),v=Object(c.a)(p,2),f=v[0],N=v[1];return Object(s.useEffect)((function(){o(!0),m(!1),j()({method:"GET",url:"./API/CONTENTLISTINGPAGE-PAGE"+t+".json"}).then((function(e){h((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e.data.page["content-items"].content))})),N((function(){return e.data.page["page-size-requested"]===e.data.page["page-size-returned"]})),o(!1)})).catch((function(e){m(!0)}))}),[t]),{loading:r,error:u,hasMore:f,movies:g}},b=a(0);function u(){var e=Object(s.useState)(""),t=Object(c.a)(e,2),a=t[0],n=(t[1],Object(s.useState)(1)),r=Object(c.a)(n,2),i=r[0],o=r[1];var j=l(a,i),u=j.movies,m=j.hasMore,O=j.error,d=j.loading,g=Object(s.useRef)(),h=Object(s.useCallback)((function(e){d||(g.current&&g.current.disconnect(),g.current=new IntersectionObserver((function(e){e[0].isIntersecting&&m&&o((function(e){return e+1}))})),e&&g.current.observe(e))}),[d,m]);return Object(b.jsxs)("div",{className:"Home",children:[Object(b.jsxs)("div",{className:"NavBar",children:[Object(b.jsx)("img",{className:"Back",src:"./images/Back.png",alt:"back.png"}),Object(b.jsx)("text",{className:"Filter",children:"ROMANTIC MOVIES"}),Object(b.jsx)("img",{className:"Search",src:"./images/search.png",alt:"search.png"})]}),Object(b.jsxs)("div",{className:"allMovies",children:[u.map((function(e,t){var a="posterthatismissing.jpg"===e["poster-image"]?"./images/placeholder_for_missing_posters.png":"./images/"+e["poster-image"];return t+4===u.length?Object(b.jsxs)("div",{className:"Movie",ref:h,children:[Object(b.jsx)("img",{className:"Poster",src:a,alt:e.name,width:"100%"}),Object(b.jsx)("figcaption",{className:"Caption",children:e.name})]},t):Object(b.jsxs)("div",{className:"Movie",children:[Object(b.jsx)("img",{className:"Poster",src:a,alt:e.name,width:"100%"}),Object(b.jsx)("figcaption",{className:"Caption",children:e.name})]},t)})),Object(b.jsx)("div",{children:d&&"Loading..."}),Object(b.jsx)("div",{children:O&&"Error"})]})]})}r.a.render(Object(b.jsx)(u,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ffdf433c.chunk.js.map