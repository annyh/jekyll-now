(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1GPU":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return s}));a("gu/5"),a("eoYm");var n=a("q1tI"),r=a.n(n),l=a("9Dj+"),i=a("Wbzz"),o=a("YmTy");t.default=function(e){var t=e.data,a=t.allMarkdownRemark,s=a.group,c=a.edges,u=t.site.siteMetadata.title,f=e.location,m=c,d=Object(n.useState)(""),g=d[0],p=d[1],y=g?c.filter((function(e){return e.node.frontmatter.tags.includes(g)})):m;return r.a.createElement(l.a,{location:f,title:u},r.a.createElement(o.a,{group:s,clickHandler:function(e){e.target&&e.target.textContent||console.log("nothing selected");var t=e.target.textContent,a=t.substr(0,t.indexOf(" ("));p(a)}}),y.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return r.a.createElement("article",{key:t.fields.slug},r.a.createElement("header",null,r.a.createElement("h3",{style:{margin:0,fontFamily:"sans-serif",fontSize:"1.2rem",display:"flex",justifyContent:"space-between"}},r.a.createElement(i.a,{style:{fontWeight:400,marginTop:2,marginBottom:2,boxShadow:"none"},to:t.fields.slug},a),r.a.createElement("small",{style:{fontWeight:500,fontStyle:"italic"}},t.frontmatter.date))))})))};var s="2494118698"},YmTy:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("vOnD"),i=l.default.button.withConfig({displayName:"DisplayTag__Pill",componentId:"wrh0c1-0"})(["background:gray;color:white;margin:0 4px;border-radius:12px;font-family:sans-serif;"]),o=l.default.h4.withConfig({displayName:"DisplayTag__TitleBar",componentId:"wrh0c1-1"})(["font-family:sans-serif;letter-spacing:normal;"]);t.a=function(e){var t=e.group,a=e.clickHandler;return r.a.createElement("div",{className:"tags"},r.a.createElement(o,null,"Tags",t.map((function(e){return r.a.createElement(i,{onClick:a,key:e.fieldValue},e.fieldValue," (",e.totalCount,")")}))))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-525c8136b056cf4f7aee.js.map