(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{101:function(e,a,t){},351:function(e,a,t){},352:function(e,a,t){},353:function(e,a,t){},355:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),i=t(45),l=t.n(i),s=(t(101),t(89)),c=t(90),o=t(95),m=t(94),u=t(91),p=t.n(u),g=t(46),d=t.n(g),h=(t(351),function(e){var a=e.onRouteChange;return e.isSignedIn?r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return a("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign out")):r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return a("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),r.a.createElement("p",{onClick:function(){return a("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))}),b=function(e){var a=e.onRouteChange;return r.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:function(){return a("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("p",{onClick:function(){return a("register")},className:"f6 link dim black db pointer"},"Register")))))},E=function(e){var a=e.onRouteChange;return r.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:function(){return a("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))},v=function(e){return r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{className:"absolute mt2"}),r.a.createElement("img",{id:"inputimage",alt:"",src:e,width:"500px",height:"auto"}))},w=t(92),f=t.n(w),A=(t(352),t(93)),I=t.n(A),N=function(){return r.a.createElement("div",{className:"ma4 mt0"},r.a.createElement(f.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},r.a.createElement("div",{className:"Tilt-inner pa3"},r.a.createElement("img",{style:{paddingTop:"5px"},alt:"logo",src:I.a}))))},R=(t(353),function(e){var a=e.onInputChange,t=e.onButtonSubmit;return r.a.createElement("div",null,r.a.createElement("p",{className:"f3"},"This Magic Brain will detect faces in your pictures. Give it a try !"),r.a.createElement("div",null,r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"form center pa4 br3 shadow-5"},r.a.createElement("input",{className:"f4 pa2 w-70",type:"tex",onChange:a}),r.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:t},"Detect")))))}),y=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"white f3"}),r.a.createElement("div",{className:"white f1"}))},C=new d.a.App({apiKey:"a6e23fb078d2413a8c23a1ead0e25da2"}),x={particles:{number:{value:200,desity:{enable:!0,value_area:800}}}},Q=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).calculateFaceLocation=function(e){e.response.output[0].data.regions[0].region_info.boundingbox;var a=document.getElementById("inputimage"),t=Number(a.width),n=Number(a.height);console.log(t,n)},e.onInputChange=function(a){e.setState({input:a.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),C.models.predict(d.a.FACE_DETECT_MODEL,e.state.input).then((function(a){return e.calculateFaceLocation(a)})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(a){"signout"===a?e.setState({isSignedIn:!1}):"home"===a&&e.setState({isSignedIn:!0}),e.setState({route:a})},e.state={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this.state,a=e.isSignedIn,t=e.imageUrl,n=e.route;return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{className:"particles",params:x}),r.a.createElement(h,{isSignedIn:a,onRouteChange:this.onRouteChange}),"home"===n?r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(y,null),r.a.createElement(R,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),r.a.createElement(v,{imageUrl:t})):"signin"===n?r.a.createElement(b,{onRouteChange:this.onRouteChange}):r.a.createElement(E,{onRouteChange:this.onRouteChange}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(354);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,a){e.exports="data:image/png;base64,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"},96:function(e,a,t){e.exports=t(355)}},[[96,1,2]]]);
//# sourceMappingURL=main.3e45c95c.chunk.js.map