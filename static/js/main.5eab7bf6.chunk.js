(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{107:function(e,t,s){},108:function(e,t,s){},114:function(e,t,s){},115:function(e,t,s){},116:function(e,t,s){},117:function(e,t,s){},118:function(e,t,s){},119:function(e,t,s){},120:function(e,t,s){},123:function(e,t,s){},124:function(e,t,s){},125:function(e,t,s){},126:function(e,t,s){},128:function(e,t,s){"use strict";s.r(t);var c=s(1),r=s.n(c),n=s(73),a=s.n(n),i=s(15),o=s(3),l=(s(83),s(21)),j=s(0);function h(){return Object(j.jsxs)("div",{className:"movieScraper",children:[Object(j.jsx)(i.b,{to:"/",className:"homeButton",children:"Home"}),Object(j.jsxs)("div",{className:"center",children:[Object(j.jsx)("h1",{className:"title",children:"Movie Finder"}),Object(j.jsxs)("div",{className:"description",children:[Object(j.jsx)("h1",{children:"Project Description"}),Object(j.jsx)("p",{children:"The Movie Finder web application creates a portal for users to view all available movies with streaming capability hosted on top media streaming services (Netflix, HBO, Hulu, etc.) If users don't know what a streaming platform offers before signing up for pricy subscriptions they can use Movie Finder to look at available streaming capabilities from each platform before making a decision."}),Object(j.jsx)("h1",{children:"How does it work?"}),Object(j.jsx)("p",{children:"Movie Finder pulls current movie and tv-show data using python webscraping and compiles the data into a platform easy for users to use. Selecting a movie or tv-show will connect the user directly to the associated host streaming platform."}),Object(j.jsx)("h1",{children:"How was it built?"}),Object(j.jsx)("p",{children:"Movie Finder web application utilizes Node.js, React, HTML, and SCSS for the front end components. The back end of Movie Finder application is created using postgreSQL. All webscraping is done by the back end using python beautiful soup and Selenium web driver."})]}),Object(j.jsxs)("div",{className:"movieWrapper",children:[Object(j.jsx)("h1",{children:"Below is a short clip of Movie Finder"}),Object(j.jsx)(l.Player,{className:"movie",src:"assets/MovieScraper.mp4",children:Object(j.jsx)(l.BigPlayButton,{position:"center"})})]})]})]})}var m=s(7),d=(s(107),s(108),s(137)),b=s(138),p=s(139),O=s(74),x=s.n(O);function u(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(j.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)("a",{href:"#intro",className:"logo",children:"Jared Nelson"}),Object(j.jsxs)(i.b,{className:"itemContainer",to:"files/JaredNelsonResume.pdf",target:"_blank",download:!0,children:[Object(j.jsx)(x.a,{className:"icon"}),Object(j.jsx)("span",{className:"resume",children:"Download My Resume!"})]}),Object(j.jsxs)("div",{className:"itemContainer",children:[Object(j.jsx)(d.a,{className:"icon"}),Object(j.jsx)("span",{children:"+1 (775) 741 - 8450"})]}),Object(j.jsxs)("div",{className:"itemContainer",children:[Object(j.jsx)(b.a,{className:"icon"}),Object(j.jsx)("span",{className:"email",onClick:function(){navigator.clipboard.writeText("jaredlnelson1@gmail.com")},children:"jaredlnelson1@gmail.com"}),Object(j.jsx)(p.a,{className:"copy"})]})]}),Object(j.jsx)("div",{className:"right",children:Object(j.jsxs)("div",{className:"hamburger",onClick:function(){return s(!t)},children:[Object(j.jsx)("span",{className:"line1"}),Object(j.jsx)("span",{className:"line2"}),Object(j.jsx)("span",{className:"line3"})]})})]})})}s(114);var f=s(77);function g(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){Object(f.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Developer","Designer","Engineer"]})}),[]),Object(j.jsxs)("div",{className:"intro",id:"intro",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsx)("div",{className:"imgContainer",children:Object(j.jsx)("img",{src:"assets/man.png",alt:""})})}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("h2",{children:"Hi There, I'm"}),Object(j.jsx)("h1",{children:"Jared Nelson"}),Object(j.jsxs)("h3",{children:["Software ",Object(j.jsx)("span",{ref:e})]})]}),Object(j.jsx)("a",{href:"#about",children:Object(j.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}s(115),s(116);function v(e){var t=e.title,s=e.active,c=e.setSelected,r=e.id;return Object(j.jsx)("li",{className:s?"portfolioList active":"portfolioList",onClick:function(){return c(r)},children:t})}function N(){var e=Object(c.useState)("featured"),t=Object(m.a)(e,2),s=t[0],r=t[1];return Object(j.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(j.jsx)("h1",{children:"Portfolio"}),Object(j.jsx)("ul",{children:[{id:"featured",title:"Featured"},{id:"web",title:"Web App"},{id:"school",title:"School Projects"},{id:"hackathon",title:"Hackathon"}].map((function(e){return Object(j.jsx)(v,{title:e.title,active:s===e.id,setSelected:r,id:e.id})}))}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)(i.b,{to:"/MovieScraper",className:"featured"===s||"web"===s?"itemSelected":"itemNotSelected",children:[Object(j.jsx)("img",{src:"assets/WebScraperPic.png",alt:""}),Object(j.jsx)("h3",{children:"Movie Finder"})]}),Object(j.jsxs)(i.b,{to:"/Hackathon",className:"featured"===s||"hackathon"===s?"itemSelected":"itemNotSelected",children:[Object(j.jsx)("img",{src:"assets/HackathonPic.png",alt:""}),Object(j.jsx)("h3",{children:"Hackathon"})]}),Object(j.jsxs)(i.b,{to:"/NetworkMonitor",className:"featured"===s||"school"===s?"itemSelected":"itemNotSelected",children:[Object(j.jsx)("img",{src:"assets/globe.png",alt:""}),Object(j.jsx)("h3",{children:"Network Monitoring"})]}),Object(j.jsxs)("div",{className:"featured"===s||"hackathon"===s?"itemSelected":"itemNotSelected",children:[Object(j.jsx)("img",{src:"assets/globe.png",alt:""}),Object(j.jsx)("h3",{children:"Application"})]})]})]})}s(117);function C(){return Object(j.jsxs)("div",{className:"skills",id:"skills",children:[Object(j.jsx)("h1",{children:"Technical Skills"}),Object(j.jsx)("span",{className:"span1",children:"Below are some of my skills and I'm always striving for more!"}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"left section",children:[Object(j.jsxs)("h1",{children:["Web Development",Object(j.jsx)("span",{className:"webSpan"})]}),Object(j.jsxs)("div",{className:"itemWrapper",children:[Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("img",{src:"assets/react.png",alt:""}),Object(j.jsx)("h3",{children:"React.js"})]}),Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("img",{src:"assets/html.png",alt:""}),Object(j.jsx)("h3",{children:"HTML"})]}),Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("img",{src:"assets/css.png",alt:""}),Object(j.jsx)("h3",{children:"CSS"})]}),Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("img",{src:"assets/sql.png",alt:""}),Object(j.jsx)("h3",{children:"MySQL"})]})]})]}),Object(j.jsxs)("div",{className:"middle section",children:[Object(j.jsxs)("h1",{children:["Main Languages",Object(j.jsx)("span",{className:"webSpan"})]}),Object(j.jsxs)("div",{className:"itemWrapper",children:[Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("img",{src:"assets/python2.png",alt:""}),Object(j.jsx)("h3",{children:"Python"})]}),Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("img",{src:"assets/c++.png",alt:""}),Object(j.jsx)("h3",{children:"C++"})]}),Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("img",{src:"assets/javascript.png",alt:""}),Object(j.jsx)("h3",{className:"js",children:"JavaScript"})]}),Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("img",{src:"assets/c++.png",alt:""}),Object(j.jsx)("h3",{children:"C++"})]})]})]}),Object(j.jsxs)("div",{className:"right section",children:[Object(j.jsxs)("h1",{children:["Fundamental Skills",Object(j.jsx)("span",{className:"webSpan"})]}),Object(j.jsxs)("div",{className:"itemWrapper",children:[Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("img",{src:"assets/github.png",alt:""}),Object(j.jsx)("h3",{children:"Git"})]}),Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("img",{src:"assets/office.png",alt:""}),Object(j.jsx)("h3",{children:"Office"})]}),Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("h2",{children:"OOP"}),Object(j.jsx)("h3",{className:"oop",children:"Object Oriented Programming"})]}),Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("h2",{children:"DP/DS"}),Object(j.jsx)("h3",{className:"oop",children:"Design Patterns and Data Structures"})]})]})]})]})]})}var P=s(16),y=s(17),w=(s(118),s(42));function k(){var e=Object(c.useRef)(),t=Object(c.useState)({name:"",email:"",message:""}),s=Object(m.a)(t,2),r=s[0],n=s[1],a=function(e){n(Object(y.a)(Object(y.a)({},r),{},Object(P.a)({},e.target.name,e.target.value)))},i=function(){n({name:"",email:"",message:""})},o=Object(c.useState)(!1),l=Object(m.a)(o,2),h=l[0],d=l[1];var b=function(t){console.log(e.current),w.a.sendForm("mygmail","recieve_template",e.current,"user_FPHoEtpHVXAxEgNia64ri").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),w.a.sendForm("mygmail","send_template",e.current,"user_FPHoEtpHVXAxEgNia64ri").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),i(),d(!1)};return Object(j.jsxs)("div",{className:"contact",id:"contact",children:[h?Object(j.jsxs)("div",{className:"confirmation",children:[Object(j.jsx)("h1",{className:"messageDetials",children:"Your message to me!"}),Object(j.jsxs)("div",{className:"details",children:[Object(j.jsxs)("div",{className:"emailName",children:["Your name:",Object(j.jsx)("br",{})," ",r.name]}),Object(j.jsxs)("div",{className:"emailAddress",children:["Your email address: ",Object(j.jsx)("br",{}),r.email]}),Object(j.jsx)("div",{className:"emailMessageTitle",children:"Your message:"}),Object(j.jsx)("div",{className:"emailMessage",children:r.message})]}),Object(j.jsx)("span",{children:"Are you ready to send?"}),Object(j.jsxs)("div",{className:"buttonWrapper",children:[Object(j.jsx)("button",{onClick:function(){return b()},children:"Yes"}),Object(j.jsx)("button",{onClick:function(){return d(!1)},children:"Not yet"})]})]}):Object(j.jsx)(j.Fragment,{}),Object(j.jsxs)("form",{className:"emailWrapper",ref:e,onSubmit:function(e){e.preventDefault(),d(!0)},children:[Object(j.jsx)("div",{className:"sendMe",children:"Send Me a Message!"}),Object(j.jsx)("label",{children:"Name:"}),Object(j.jsx)("input",{className:"info",placeholder:"Enter Your Name",type:"text",name:"name",value:r.name,onChange:a,required:!0}),Object(j.jsx)("label",{children:"Email:"}),Object(j.jsx)("input",{className:"info",placeholder:"Enter Your Email address",type:"email",name:"email",value:r.email,onChange:a,required:!0}),Object(j.jsx)("label",{children:"Message:"}),Object(j.jsx)("textarea",{id:"textArea",placeholder:"Empty Message",name:"message",value:r.message,onChange:a,required:!0}),h?Object(j.jsx)(j.Fragment,{}):Object(j.jsxs)("div",{className:"submitButtons",children:[Object(j.jsx)("input",{type:"button",value:"Clear",onClick:i}),Object(j.jsx)("input",{type:"submit",value:"Send"})]})]})]})}s(119);function S(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(j.jsx)("div",{className:"menu "+(t&&"active"),children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{onClick:function(){return s(!t)},children:Object(j.jsx)("a",{href:"#intro",children:"Home"})}),Object(j.jsx)("li",{onClick:function(){return s(!t)},children:Object(j.jsx)("a",{href:"#about",children:"About"})}),Object(j.jsx)("li",{onClick:function(){return s(!t)},children:Object(j.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(j.jsx)("li",{onClick:function(){return s(!t)},children:Object(j.jsx)("a",{href:"#skills",children:"Skills"})}),Object(j.jsx)("li",{onClick:function(){return s(!t)},children:Object(j.jsx)("a",{href:"#contact",children:"Contact"})})]})})}s(120);var M=s(32);s(123);function _(e){var t=e.setTerminalActive;function s(e){var t=(new Option).style;return t.color=e,t.color===e}var r=Object(j.jsxs)("span",{children:["Want to know more about me? Start by typing help! ",Object(j.jsx)("br",{})]}),n={themeBGColor:"#151515",themeToolbarColor:"#424242",themeColor:"#ffffff",themePromptColor:"#42a5f5"},a=Object(c.useState)({themeBGColor:"#151515",themeToolbarColor:"#424242",themeColor:"#ffffff",themePromptColor:"#42a5f5"}),o=Object(m.a)(a,2),l=o[0],h=o[1],d=Object(c.useState)(),b=Object(m.a)(d,2),p=b[0],O=b[1],x={help:Object(j.jsxs)("span",{children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">>"})," ",'Any value such as "__color__" requires your input replacing "__color__"']}),Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","help : Display commands"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","clear : Clear terminal"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","resume : Download my resume!"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","about : Some info about me!"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","projects : Check out my projects!"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","skills : Check out my skills!"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","contact : Send me an email!"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","LinkedIn : Connect with me!"]}),Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","themes : Display all premade themes"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","change-theme __theme__ : Try a premade theme!"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","change-background-color __color__ : Change terminal background color"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","change-text-color __color__ : Change terminal text color"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","change-arrow-color __color__ : Change terminal line arrow color"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","change-topbar-color __color__ : Change terminal topbar color"]})]}),resume:Object(j.jsx)("span",{children:Object(j.jsx)(i.b,{className:"itemContainer",to:"/public/files/JaredNelsonResume.pdf",target:"_blank",download:!0,children:"resume.pdf"})}),about:function(){return t(!1)},projects:function(){return Object(j.jsx)("span",{children:Object(j.jsx)("a",{href:"#portfolio",children:"Cool Projects!"})})},skills:function(){return Object(j.jsx)("span",{children:Object(j.jsx)("a",{href:"#skills",children:"Nice skills!"})})},contact:function(){return Object(j.jsx)("span",{children:Object(j.jsx)("a",{href:"#contact",children:"How to contact me!"})})},LinkedIn:function(){return Object(j.jsx)("span",{children:Object(j.jsx)("a",{href:"https://www.linkedin.com/in/jared-nelson-31231419a/",target:"_blank",children:"Connect with me!"})})},themes:Object(j.jsxs)("span",{children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","light"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","dark"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","material-light"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","material-dark"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","material-ocean"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","matrix"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{style:{color:l.themePromptColor?l.themePromptColor:n.themePromptColor},children:">"})," ","dracula"]})]}),"change-theme":function(e){if("default"===e)O(),h(n);else if("light"===e)O("light");else if("dark"===e)O("dark");else if("material-light"===e)O("material-light");else if("material-dark"===e)O("material-dark");else if("material-ocean"===e)O("material-ocean");else if("matrix"===e)O("matrix");else{if("dracula"!==e)return Object(j.jsx)("span",{children:"Sorry I don't know that theme!"});O("dracula")}},"change-background-color":function(e){if(!s(e))return Object(j.jsx)("span",{children:"I couldn't find the color you entered!"});h(Object(y.a)(Object(y.a)({},l),{},{themeBGColor:e}))},"change-text-color":function(e){if(!s(e))return Object(j.jsx)("span",{children:"I couldn't find the color you entered!"});h(Object(y.a)(Object(y.a)({},l),{},{themeColor:e}))},"change-arrow-color":function(e){if(!s(e))return Object(j.jsx)("span",{children:"I couldn't find the color you entered!"});h(Object(y.a)(Object(y.a)({},l),{},{themePromptColor:e}))},"change-topbar-color":function(e){if(!s(e))return Object(j.jsx)("span",{children:"I couldn't find the color you entered!"});h(Object(y.a)(Object(y.a)({},l),{},{themeToolbarColor:e}))}};return Object(j.jsx)("div",{className:"terminal",children:Object(j.jsx)(M.a,{welcomeMessage:r,commands:x,errorMessage:"Try another command or enter 'help' for list of all commands",themes:{custom:l},theme:void 0!==p?p:"custom"})})}function A(){var e=Object(c.useState)(!0),t=Object(m.a)(e,2),s=t[0],r=t[1];return Object(j.jsx)("div",{className:"about",id:"about",children:s?Object(j.jsx)("div",{className:"terminal",children:Object(j.jsx)(_,{setTerminalActive:r})}):Object(j.jsxs)("div",{className:"about",children:[Object(j.jsxs)("div",{className:"topWrapper",children:[Object(j.jsx)("h1",{children:"About Me"}),Object(j.jsx)("span",{className:"line"}),Object(j.jsx)("span",{className:"line2"})]}),Object(j.jsxs)("div",{className:"bottomWrapper",children:[Object(j.jsx)("p",{children:"I am currently in my final semester at the University of Nevada Reno studying Computer Science and Engineering."}),Object(j.jsx)("p",{children:"I have a strong passion for software development, machine learning, full stack web development, and application development. I am constantly learning and working on projects to strengthen my coding potential."}),Object(j.jsx)("h2",{children:"Learn more about my:"}),Object(j.jsxs)("div",{className:"linkClicker",children:[Object(j.jsx)("a",{className:"portfolio",href:"#portfolio",children:"Projects"}),Object(j.jsx)("a",{className:"skills",href:"#skills",children:"Skills"})]})]}),Object(j.jsx)("div",{className:"goBack",onClick:function(){return r(!0)},children:"We have to go back!!!"})]})})}function H(){var e=Object(c.useState)(!1),t=Object(m.a)(e,2),s=t[0],r=t[1];return Object(j.jsxs)("div",{className:"mainPage",children:[Object(j.jsx)(u,{menuOpen:s,setMenuOpen:r}),Object(j.jsx)(S,{menuOpen:s,setMenuOpen:r}),Object(j.jsxs)("div",{className:"sections",children:[Object(j.jsx)(g,{}),Object(j.jsx)(A,{}),Object(j.jsx)(N,{}),Object(j.jsx)(C,{}),Object(j.jsx)(k,{})]})]})}s(124);function R(){return Object(j.jsxs)("div",{className:"hackathon",children:[Object(j.jsx)(i.b,{to:"/",className:"homeButton",children:"Home"}),Object(j.jsxs)("div",{className:"center",children:[Object(j.jsx)("h1",{className:"title",children:"Live Video Upscaling Using SRGANs"}),Object(j.jsxs)("div",{className:"description",children:[Object(j.jsx)("h1",{children:"University of Nevada Reno Hackathon 2020"}),Object(j.jsx)("p",{children:"Sponsored coding competition hosted at the University of Nevada Reno. Teams compete for a chance to win cash prizes split between three categories including Applications, Games, and Machine Learning / Artificial Intelligence. Each team had 24 hours to complete their project before final presentations."}),Object(j.jsx)("h1",{children:"Project Description"}),Object(j.jsx)("p",{children:"The category my team took part in was Machine Learning / Artificial Intelligence. Our project goal was to create an image and live video software that would grant users with low internet bandwidth the ability to stream live video to another user while reducing amount of bandwidth used. Our solution to this problem was, reduce the resolution of outgoing live video on the sending side of the application and on the recieving side of the application utilize a SRGAN to then upscale this video feed. My team won first place in the Machine Learning / Artificial Intelligence category for this competition."}),Object(j.jsx)("h1",{children:"What is a SRGAN?"}),Object(j.jsx)("p",{children:"SRGAN stands for Super Resolution Generative Adversarial Network. The idea behind SRGANs is to take a low resolution image and upscale the image into a high resolution image. The end goal is achieving super resolution images from the lowest quality images."}),Object(j.jsx)("h1",{children:"How did we implement a SRGAN?"}),Object(j.jsx)("p",{children:"SRGANs are meant to be used with single images to upscale a low resolution image to high resolution. Utilizing OpenCV python image processing and GPU computations, we were able to split a video file frame by frame (60 fps) and individualy process the frames using the SRGAN. Applying this concept to captured live video, we were able to successfully scale our low resolution live video feed to high resolution."})]}),Object(j.jsxs)("div",{className:"movieWrapper",children:[Object(j.jsx)("h1",{children:"Original video resolution"}),Object(j.jsx)("h2",{children:"384 width x 216 height"}),Object(j.jsx)(l.Player,{className:"movie",src:"assets/crop.mp4",children:Object(j.jsx)(l.BigPlayButton,{position:"center"})})]}),Object(j.jsxs)("div",{className:"movieWrapper",children:[Object(j.jsx)("h1",{children:"Video resolution after SRGAN conversion"}),Object(j.jsx)("h2",{children:"1536 width x 864 height"}),Object(j.jsx)(l.Player,{className:"movie",src:"assets/upscale.mp4",children:Object(j.jsx)(l.BigPlayButton,{position:"center"})})]})]})]})}s(125);function T(){return Object(j.jsxs)("div",{className:"networkMonitor",children:[Object(j.jsx)(i.b,{to:"/",className:"homeButton",children:"Home"}),Object(j.jsx)("h1",{children:"Network Monitoring"}),Object(j.jsx)(i.b,{className:"download",to:"/public/files/researchpaper_Nelson_Jared.pdf",target:"_blank",download:!0,children:"Download the research paper!"}),Object(j.jsx)("div",{className:"pdf",children:Object(j.jsx)("iframe",{className:"pdfFile",src:"/public/files/researchpaper_Nelson_Jared.pdf#toolbar=0",frameborder:"0"})})]})}s(126);var B=function(){return Object(j.jsx)("div",{className:"app",children:Object(j.jsx)(i.a,{basename:"/website/",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{index:!0,path:"/",element:Object(j.jsx)(H,{})}),Object(j.jsx)(o.a,{path:"/MovieScraper",element:Object(j.jsx)(h,{})}),Object(j.jsx)(o.a,{path:"/Hackathon",element:Object(j.jsx)(R,{})}),Object(j.jsx)(o.a,{path:"/NetworkMonitor",element:Object(j.jsx)(T,{})})]})})})};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(M.b,{children:Object(j.jsx)(B,{})})}),document.getElementById("root"))},83:function(e,t,s){}},[[128,1,2]]]);
//# sourceMappingURL=main.5eab7bf6.chunk.js.map