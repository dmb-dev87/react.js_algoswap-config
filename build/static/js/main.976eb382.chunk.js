(this["webpackJsonpalgopay-config"]=this["webpackJsonpalgopay-config"]||[]).push([[0],{41:function(e,t,s){},42:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),l=s(17),i=s.n(l),n=s(11),r=s(6),o=s.n(r),d=s(12),h=s(18),j=s(19),p=s(30),b=s(29),g=(s.p,s(14)),x=(s(41),s(42),s(0)),m="algoswap-btn",u={assetid:0,assetid2:137594422,pool:"F5YT2BPHPNCLHR44ZKWJOE6Z7RMVAZSX4KIWMEBYSKGBFEF7KJJ742QYT4",input:!1},O="",f=function(e){Object(p.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(h.a)(this,s),(a=t.call(this,e)).generate=Object(d.a)(o.a.mark((function e(){var t,s,c,l,i,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O="",t=document.getElementById("mbcolor").value,s=document.getElementById("mbwidth").value,c=document.getElementById("mbtextcolor").value,""!==t&&(O+='document.getElementById("'+m+'").style.backgroundColor = "'+t+'";'),""!==s&&(O+='document.getElementById("'+m+'").style.width = "'+s+'";'),""!==c&&(O+='document.getElementById("'+m+'").style.color = "'+c+'";'),l=""!==O?"<script>"+O+"<\/script>":"",i="<noscript>AlgoSwap</noscript><script>window.swapDetails = "+JSON.stringify(u)+'<\/script><link href="https://unpkg.com/algoswap@1.1.0/dist/index.css" rel="stylesheet"><div id="swap-root"></div><script src="https://unpkg.com/algoswap@1.1.0/dist/src.a2b27638.js"><\/script>'+l,a.setState({code:i}),(n=document.getElementById("preview").contentWindow.document).open(),n.write(i),n.close();case 14:case"end":return e.stop()}}),e)}))),a.handleChange=function(e){var t=e.target.id,s=e.target.value;switch(t){case"at":u.amount=s*a.state.factor;break;case"nt":u.pool=s;break;case"indx":a.setState({index:parseInt(s)}),u.assetid=parseInt(s),a.getZeros(parseInt(s),"assetName");break;case"indx2":a.setState({index2:parseInt(s)}),u.assetid2=parseInt(s),a.getZeros(parseInt(s),"assetName2");break;case"rec":u.recipient=s;break;case"customize":u.input=document.getElementById(t).checked}},a.getZeros=function(){var e=Object(d.a)(o.a.mark((function e(t,s){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0!=t?(c="https://algoexplorerapi.io/idx2/v2/assets/"+t,console.log(c),fetch(c).then((function(e){return e.json()})).then((function(e){var t;console.log(e);for(var c=e.asset.params.decimals,l=1,i=0;i<c;i++)l+="0";a.setState((t={},Object(n.a)(t,s,e.asset.params["unit-name"]),Object(n.a)(t,"factor",parseInt(l)),t)),console.log(a.state)})).catch((function(){console.log("Error occured  "+c)}))):a.setState({assetName:"Algo",factor:1e6});case 1:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),a.state={assetName:"Algo",assetName2:"HDL",factor:1e6,code:"",index:0},a}return Object(j.a)(s,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("header",{className:"App-header",children:Object(x.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(x.jsxs)("div",{class:"container-fluid",children:[Object(x.jsxs)("a",{class:"navbar-brand",href:".",children:[Object(x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"53",height:"32",class:"d-block my-1",viewBox:"0 0 52 20",role:"img",children:[Object(x.jsx)("title",{children:"AlgoSwap"}),Object(x.jsx)("path",{class:"cls-1",d:"M185.6,94l-8.8-14.8c0-.1-.1-.1-.2-.2l-.3-.3h0a1.3,1.3,0,0,0-1.7.6s-10.1,19.3-11.2,21.6a.6.6,0,0,0,0,.6,1,1,0,0,0,1,.7h2.5a.9.9,0,0,0,1-.5l7-13.5.2-.2.3-.3a.9.9,0,0,1,1.1.2h.1l4.4,7.4a1.1,1.1,0,0,0,.9.5h2.6a1.6,1.6,0,0,0,1-.5c.3-.4.3-.5.3-.6A2.4,2.4,0,0,0,185.6,94Z",transform:"translate(-163.3 -78.6)",fill:"#1c1ce1"}),Object(x.jsx)("path",{class:"cls-2",d:"M199.2,90.3a6.9,6.9,0,0,0-4.9-2.1h-2.6a2.7,2.7,0,0,1-2.7-2,2.3,2.3,0,0,1,.5-2.1,2.4,2.4,0,0,1,1.9-1h7.1a1.1,1.1,0,0,0,1.1-.6l1-2a1,1,0,0,0-.1-1.2.9.9,0,0,0-1-.7h-9.4a4.6,4.6,0,0,0-3.8,2c-3,3.8-2,7.9.2,10.1a7.1,7.1,0,0,0,4.9,2.1h2.7a2.6,2.6,0,0,1,2.7,2,2.4,2.4,0,0,1-.6,2,2.6,2.6,0,0,1-1.9,1H180.2c-.2.1-.4-.1-.5-.2l-2.6-4.5a1.2,1.2,0,0,0-2.2,0l-3.7,7.4a1.5,1.5,0,0,0,0,1.3,1.1,1.1,0,0,0,1.1.5h23.3a5.8,5.8,0,0,0,3.9-1.9C202.5,96.5,201.4,92.5,199.2,90.3Z",transform:"translate(-163.3 -78.6)",fill:"#5e5ee6"})]}),Object(x.jsxs)("span",{class:"fs-2",children:[Object(x.jsx)("strong",{children:"Algo"}),"Swap"]})]}),Object(x.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarText",children:[Object(x.jsxs)("ul",{class:"navbar-nav me-auto btn-sm",children:[Object(x.jsx)("li",{class:"nav-item",children:Object(x.jsx)("a",{class:"nav-link active","aria-current":"page",href:".",children:"Home"})}),Object(x.jsx)("li",{class:"nav-item",children:Object(x.jsx)("a",{class:"nav-link",href:"#generator",children:" Code Generator"})}),Object(x.jsx)("li",{class:"nav-item",children:Object(x.jsx)("a",{class:"nav-link",href:"https://www.headline-inc.com/",children:"About HDL"})})]}),Object(x.jsx)("span",{class:"navbar-text-2",children:" v1.0 (alpha)"})]})]})})}),Object(x.jsx)("header",{class:"py-5 border-bottom",children:Object(x.jsx)("div",{class:"jumbotron",children:Object(x.jsxs)("div",{class:"container",children:[Object(x.jsx)("h1",{class:"display-3",children:"Try AlgoSwap!"}),Object(x.jsx)("p",{children:"The AlgoSwap token-swapping snippet generator is your gateway to FutureFi. Simply fill in the required fields and a custom embeddable AlgoSwap snippet will be generated for you. The AlgoSwap token-swapping solution is compatible with all major web hosts and website-building platforms."}),Object(x.jsx)("p",{children:Object(x.jsx)("a",{class:"btn btn-secondary btn-lg",href:"#launch",role:"button",children:"Learn more \xbb"})})]})})}),Object(x.jsxs)("div",{class:"card text-center",children:[Object(x.jsx)("div",{class:"card-header",children:Object(x.jsxs)("ul",{class:"nav nav-tabs card-header-tabs",children:[Object(x.jsx)("li",{class:"nav-item",children:Object(x.jsx)("a",{class:"nav-link active","aria-current":"true",href:"#",children:"AlgoSwap"})}),Object(x.jsx)("li",{class:"nav-item",children:Object(x.jsx)("a",{class:"nav-link",href:"https://algopay.finance/",children:"AlgoPay"})}),Object(x.jsx)("li",{class:"nav-item",children:Object(x.jsx)("a",{class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Terminal-VX51"})})]})}),Object(x.jsxs)("div",{class:"card-body",children:[Object(x.jsx)("br",{}),Object(x.jsx)("h5",{class:"card-title",children:"Step 1: Prepare your AlgoSwap credentials"}),Object(x.jsx)("p",{id:"launch",class:"card-text",children:"Before launching AlgoSwap, please take a moment to prepare your ASA ID, Algorand address, and swapping details/index. "}),Object(x.jsx)("a",{href:"https://algoexplorer.io",class:"btn btn-md btn-outline-secondary",children:"AlgoExplorer"})]}),Object(x.jsxs)("div",{class:"card-2",children:[Object(x.jsx)("div",{class:"card-header-2",background:"transparent",children:"Code generator"}),Object(x.jsxs)("div",{class:"card-body-2",children:[Object(x.jsx)("div",{class:"form-group row"}),Object(x.jsx)("div",{id:"generator",class:"form-group row",children:Object(x.jsxs)("header",{class:"SnippetCardHeader github",children:[Object(x.jsx)("div",{class:"tooltip-wrapper","data-tooltipped":"","aria-describedby":"tippy-tooltip-16",display:"inline"}),Object(x.jsx)("h5",{class:"card-title",children:"Step 2: Generate your code"})]})}),Object(x.jsxs)("form",{id:"calcform1",name:"calcform1",autocomplete:"off",children:[Object(x.jsxs)("div",{class:"form-group row",children:[Object(x.jsx)("label",{for:"a",class:"col-sm-3 col-form-label",children:"ASA-1"}),Object(x.jsx)("div",{class:"col-sm-9",children:Object(x.jsxs)("div",{class:"input-group",children:[Object(x.jsx)("input",{id:"indx",onChange:this.handleChange,type:"number",placeHolder:"0",class:"form-control",placeholder:"Asset"}),Object(x.jsx)("div",{class:"input-group-text",children:" "+this.state.assetName})]})})]}),Object(x.jsxs)("div",{class:"form-group row",children:[Object(x.jsx)("label",{for:"a",class:"col-sm-3 col-form-label",children:"ASA-2"}),Object(x.jsx)("div",{class:"col-sm-9",children:Object(x.jsxs)("div",{class:"input-group",children:[Object(x.jsx)("input",{id:"indx2",onChange:this.handleChange,type:"number",placeHolder:"0",class:"form-control",placeholder:"Asset"}),Object(x.jsx)("div",{class:"input-group-text",children:" "+this.state.assetName2})]})})]}),Object(x.jsxs)("div",{class:"form-group row",children:[Object(x.jsx)("label",{for:"c",class:"col-sm-3 col-form-label",children:"Liquidity Pool"}),Object(x.jsx)("div",{class:"col-sm-9",children:Object(x.jsx)("input",{class:"form-control",id:"nt",onChange:this.handleChange,type:"text",placeHolder:"Optional label"})})]}),Object(x.jsx)("div",{class:"form-group row"}),Object(x.jsx)("div",{class:"form-group row",children:Object(x.jsxs)("header",{class:"SnippetCardHeader github",children:[Object(x.jsx)("div",{class:"tooltip-wrapper","data-tooltipped":"","aria-describedby":"tippy-tooltip-16",display:"inline"}),Object(x.jsx)("h6",{class:"card-title",children:"Step 2.5: Style your AlgoSwap button"})]})}),Object(x.jsxs)("div",{class:"snoopy-css",children:[Object(x.jsxs)("div",{class:"form-group row",children:[Object(x.jsx)("label",{for:"anglea",class:"col-sm-3 col-form-label",children:"Background Color"}),Object(x.jsx)("div",{class:"col-sm-9",children:Object(x.jsx)("input",{class:"form-control",id:"mbcolor",onChange:this.handleChange,type:"text",placeHolder:"black, #000"})})]}),Object(x.jsxs)("div",{class:"form-group row",children:[Object(x.jsx)("label",{for:"anglea",class:"col-sm-3 col-form-label",children:"Button Width"}),Object(x.jsx)("div",{class:"col-sm-9",children:Object(x.jsx)("input",{class:"form-control",id:"mbwidth",onChange:this.handleChange,type:"text",placeHolder:"large, 50%"})})]}),Object(x.jsxs)("div",{class:"form-group row",children:[Object(x.jsx)("label",{for:"anglea",class:"col-sm-3 col-form-label",children:"Button Text Color"}),Object(x.jsx)("div",{class:"col-sm-9",children:Object(x.jsx)("input",{class:"form-control",id:"mbtextcolor",onChange:this.handleChange,type:"text",placeHolder:"white, #fff"})})]})]}),Object(x.jsx)("a",{class:"btn btn-primary btn-lg",onClick:function(){return e.generate()},children:"Generate My Code"}),Object(x.jsx)("br",{})]}),Object(x.jsxs)("div",{class:"form-group row",children:[Object(x.jsxs)("header",{class:"SnippetCardHeader github",children:[Object(x.jsx)("div",{class:"tooltip-wrapper","data-tooltipped":"","aria-describedby":"tippy-tooltip-16",display:"inline",children:Object(x.jsxs)("div",{class:"source",children:[Object(x.jsxs)("a",{target:"_blank",href:"https://github.com/headline-design",rel:"nofollow",class:"origin underlined",children:[Object(x.jsx)("div",{className:"marge",children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",class:"navbar-nav-svg d-inline-block align-text-top",viewBox:"0 0 512 499.36",role:"img",children:Object(x.jsx)("path",{fill:"currentColor","fill-rule":"evenodd",d:"M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"})})}),Object(x.jsx)("i",{children:"origin: "}),Object(x.jsx)("b",{children:"headline-design"})]}),Object(x.jsx)("div",{className:"BGImg source-icon BGImg-loaded",children:Object(x.jsx)("div",{class:"BGImg-image",children:Object(x.jsx)("div",{class:"BGImg source-icon BGImg-loaded",children:Object(x.jsx)("div",{class:"BGImg-image",children:Object(x.jsx)("a",{class:"nav-link p-2",href:"https://github.com/headline-design",target:"_blank",rel:"noopener",children:Object(x.jsx)("small",{class:"d-md-none ms-2"})})})})})})]})}),Object(x.jsx)("h5",{class:"label",children:"github.com/headline-design"})]}),Object(x.jsx)("div",{class:"SnippetCode",children:Object(x.jsx)("div",{class:"SnippetCode-wrapper",align:"left",children:Object(x.jsx)(g.a,{text:this.state.code.replaceAll("><",">\n<"),language:"html",showLineNumbers:!0,wrapLines:!0,theme:g.b,codeBlock:!0,customStyle:{height:"auto",overflow:"auto",align:"left",borderStyle:"solid",borderColor:"#e1e1e1",borderWidth:"1px"}})})})]}),Object(x.jsx)("p",{class:"card-text",children:"Note: MyAlgo and WalletConnect are fully functional in the preview, but AlgoSigner will not work until you embed the code snippet on your site"}),Object(x.jsx)("iframe",{id:"preview",title:"Preview",width:"100%",height:"600px"}),Object(x.jsx)("div",{id:"preview2"}),Object(x.jsx)("div",{class:"form-group"})]})]})]}),"Accordion Item #3 Copy",Object(x.jsxs)("div",{class:"accordion accordion-flush",id:"accordionFlushExample",children:[Object(x.jsxs)("div",{class:"accordion-item",children:[Object(x.jsx)("h2",{class:"accordion-header",id:"flush-headingOne",children:Object(x.jsx)("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne",children:"Accordion Item #1"})}),Object(x.jsx)("div",{id:"flush-collapseOne",class:"accordion-collapse collapse","aria-labelledby":"flush-headingOne","data-bs-parent":"#accordionFlushExample",children:Object(x.jsxs)("div",{class:"accordion-body",children:["Placeholder content for this accordion, which is intended to demonstrate the ",Object(x.jsx)("code",{children:".accordion-flush"})," class. This is the first item's accordion body."]})})]}),Object(x.jsxs)("div",{class:"accordion-item",children:[Object(x.jsx)("h2",{class:"accordion-header",id:"flush-headingTwo",children:Object(x.jsx)("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseTwo","aria-expanded":"false","aria-controls":"flush-collapseTwo",children:"Accordion Item #2"})}),Object(x.jsx)("div",{id:"flush-collapseTwo",class:"accordion-collapse collapse","aria-labelledby":"flush-headingTwo","data-bs-parent":"#accordionFlushExample",children:Object(x.jsxs)("div",{class:"accordion-body",children:["Placeholder content for this accordion, which is intended to demonstrate the ",Object(x.jsx)("code",{children:".accordion-flush"})," class. This is the second item's accordion body. Let's imagine this being filled with some actual content."]})})]}),Object(x.jsxs)("div",{class:"accordion-item",children:[Object(x.jsx)("h2",{class:"accordion-header",id:"flush-headingThree",children:Object(x.jsx)("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseThree","aria-expanded":"false","aria-controls":"flush-collapseThree",children:"Accordion Item #3"})}),Object(x.jsx)("div",{id:"flush-collapseThree",class:"accordion-collapse collapse","aria-labelledby":"flush-headingThree","data-bs-parent":"#accordionFlushExample",children:Object(x.jsxs)("div",{class:"accordion-body",children:["Placeholder content for this accordion, which is intended to demonstrate the ",Object(x.jsx)("code",{children:".accordion-flush"})," class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application."]})})]})]}),Object(x.jsx)("div",{class:"container",children:Object(x.jsxs)("div",{"data-bs-spy":"scroll","data-bs-target":"#navbar-example2","data-bs-offset":"0",class:"scrollspy-example",tabindex:"0",children:[Object(x.jsx)("h4",{id:"scrollspyHeading1",children:"What is AlgoSwap?"}),Object(x.jsx)("p",{children:"This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting."}),Object(x.jsx)("h4",{id:"scrollspyHeading2",children:"What isn't AlgoSwap?"}),Object(x.jsx)("p",{children:"This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting."}),Object(x.jsx)("h4",{id:"scrollspyHeading2",children:"Why did HEADLINE make AlgoSwap?"}),Object(x.jsx)("p",{children:"This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting."})]})}),Object(x.jsxs)("footer",{class:"d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top",children:[Object(x.jsxs)("div",{class:"col-md-4 d-flex align-items-center",children:[Object(x.jsx)("a",{href:"https://www.headline-inc.com",class:"mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1",children:Object(x.jsxs)("svg",{class:"bi",width:"30",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 20",role:"img",children:[Object(x.jsx)("title",{children:"AlgoSwap"}),Object(x.jsx)("path",{class:"cls-1",d:"M185.6,94l-8.8-14.8c0-.1-.1-.1-.2-.2l-.3-.3h0a1.3,1.3,0,0,0-1.7.6s-10.1,19.3-11.2,21.6a.6.6,0,0,0,0,.6,1,1,0,0,0,1,.7h2.5a.9.9,0,0,0,1-.5l7-13.5.2-.2.3-.3a.9.9,0,0,1,1.1.2h.1l4.4,7.4a1.1,1.1,0,0,0,.9.5h2.6a1.6,1.6,0,0,0,1-.5c.3-.4.3-.5.3-.6A2.4,2.4,0,0,0,185.6,94Z",transform:"translate(-163.3 -78.6)"}),Object(x.jsx)("path",{class:"cls-2",d:"M199.2,90.3a6.9,6.9,0,0,0-4.9-2.1h-2.6a2.7,2.7,0,0,1-2.7-2,2.3,2.3,0,0,1,.5-2.1,2.4,2.4,0,0,1,1.9-1h7.1a1.1,1.1,0,0,0,1.1-.6l1-2a1,1,0,0,0-.1-1.2.9.9,0,0,0-1-.7h-9.4a4.6,4.6,0,0,0-3.8,2c-3,3.8-2,7.9.2,10.1a7.1,7.1,0,0,0,4.9,2.1h2.7a2.6,2.6,0,0,1,2.7,2,2.4,2.4,0,0,1-.6,2,2.6,2.6,0,0,1-1.9,1H180.2c-.2.1-.4-.1-.5-.2l-2.6-4.5a1.2,1.2,0,0,0-2.2,0l-3.7,7.4a1.5,1.5,0,0,0,0,1.3,1.1,1.1,0,0,0,1.1.5h23.3a5.8,5.8,0,0,0,3.9-1.9C202.5,96.5,201.4,92.5,199.2,90.3Z",transform:"translate(-163.3 -78.6)"})]})}),Object(x.jsx)("span",{class:"text-muted",children:"\xa9 2021 HEADLINE INC"})]}),Object(x.jsxs)("ul",{class:"nav col-md-4 justify-content-end list-unstyled d-flex",children:[Object(x.jsx)("li",{class:"ms-3",children:Object(x.jsx)("a",{class:"text-muted",href:"https://twitter.com/headline_crypto",children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-twitter",viewBox:"0 0 16 16",children:Object(x.jsx)("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"})})})}),Object(x.jsx)("li",{class:"ms-3",children:Object(x.jsx)("a",{class:"text-muted",href:"https://www.reddit.com/r/HEADLINECrypto",children:Object(x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-reddit",viewBox:"0 0 16 16",children:[Object(x.jsx)("path",{d:"M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z"}),Object(x.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z"})]})})}),Object(x.jsx)("li",{class:"ms-3",children:Object(x.jsx)("a",{class:"text-muted",href:"https://t.me/headliners",children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-telegram",viewBox:"0 0 16 16",children:Object(x.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"})})})})]})]})]})}}]),s}(a.Component),v=f,w=function(e){e&&e instanceof Function&&s.e(155).then(s.bind(null,232)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),l(e),i(e)}))};s(44);i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(v,{})}),document.getElementById("rootmain")),w()}},[[45,152,153]]]);
//# sourceMappingURL=main.976eb382.chunk.js.map