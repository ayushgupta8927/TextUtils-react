(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),o=a(14),n=a.n(o),l=(a(22),a(7)),r=(a(23),a(0));function i(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark mode"})]})]})]})})}function d(e){var t=function(e){return(e=(e=(e=e.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[ ]{2,}/gi," ")).replace(/\n /,"\n")).split(" ").filter((function(e){return""!==e})).length},a=Object(c.useState)(""),s=Object(l.a)(a,2),o=s[0],n=s[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#343a40"},children:[Object(r.jsx)("h1",{children:e.heading}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",value:o,id:"mybox",onChange:function(e){n(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#343a40":"white",color:"dark"===e.mode?"white":"#343a40"},rows:"10"})}),Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(){var t=o.toUpperCase();n(t),e.showalert("Converted to Upper case ","success")},children:"Convert to Uppercase"}),Object(r.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=o.toLowerCase();n(t),e.showalert("Converted to lower case ","success")},children:"Convert to lowercase"}),Object(r.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){n(""),e.showalert("Text cleared ","success")},children:"Clear Text"}),Object(r.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){navigator.clipboard.writeText(o),e.showalert("Text copied to clipboard","success")},children:"Copy Text"}),Object(r.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=o.split(/[ ]+/);n(t.join(" ")),e.showalert("Extra Space Removed ","success")},children:"Remove Extra Spaces"})]}),Object(r.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#343a40"},children:[Object(r.jsx)("h1",{children:"Paragraph Summary"}),Object(r.jsxs)("p",{children:[t(o)," words and ",o.length," characters"]}),Object(r.jsxs)("p",{children:[.008*t(o)," minutes read"]}),Object(r.jsx)("h3",{children:"Preview"}),Object(r.jsx)("p",{children:o.length>0?o:"Enter something in the above Textbox to preview it here"})]})]})}function h(){var e=Object(c.useState)("Dark mode"),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)({color:"black",backgroundColor:"whitw"}),n=Object(l.a)(o,2),i=n[0],d=n[1];return Object(r.jsxs)("div",{className:"container my-5",style:i,children:[Object(r.jsx)("h2",{className:"my-3",children:"About Us"}),Object(r.jsxs)("div",{className:"accordion my-3",id:"accordionExample",children:[Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(r.jsx)("button",{className:"accordion-button",type:"button",style:i,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(r.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:i,children:[Object(r.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(r.jsx)("button",{className:"accordion-button collapsed",style:i,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(r.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:i,children:[Object(r.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(r.jsx)("button",{className:"accordion-button collapsed",style:i,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(r.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:i,children:[Object(r.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsx)("button",{onClick:function(){"#343a40"===i.color?(d({color:"white",backgroundColor:"#343a40"}),s("Light Mode")):(d({color:"#343a40",backgroundColor:"white"}),s("Dark Mode"))},type:"button",className:"btn btn-dark",children:a})})]})}i.defaultProps={title:"Set Title Here",aboutText:"About"};var b=function(e){return e.alert&&Object(r.jsxs)("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),":",e.alert.msg]})},j=a(15),u=a(2);var m=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)(null),n=Object(l.a)(o,2),m=n[0],p=n[1],x=function(e,t){p({msg:e,type:t}),setTimeout((function(){p(null)}),2e3)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(j.a,{children:[Object(r.jsx)(i,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="#343a40",x("Dark mode has been enabled ","success"),document.title="TextUtils - Dark mode"):(s("light"),document.body.style.backgroundColor="white",x("light mode has been enabled ","success"))}}),Object(r.jsx)(b,{alert:m}),Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{exact:!0,path:"/about",children:Object(r.jsx)(h,{})}),Object(r.jsx)(u.a,{exact:!0,path:"/",children:Object(r.jsx)(d,{showalert:x,heading:"Enter the text to Analyze",mode:a})})]})})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),o(e),n(e)}))};n.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.bb42346e.chunk.js.map