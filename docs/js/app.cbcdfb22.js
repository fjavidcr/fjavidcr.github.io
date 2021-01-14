(function(t){function e(e){for(var r,s,i=e[0],u=e[1],c=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"557b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,o,a,s=n("a026"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navigation"),n("div",{staticClass:"main-container"},[n("router-view")],1)],1)},u=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("navbar",{staticClass:"navigation row"},[r("div",{staticClass:"col-auto"},[r("router-link",{staticClass:"brand",attrs:{to:"/"}},[r("img",{staticClass:"border-0",attrs:{src:n("cf05"),width:"60px"}})])],1),r("div",{staticClass:"col"},[t.isAuthenticated?r("div",{staticClass:"d-flex justify-content-end",on:{click:t.logout}},[t.isProfileLoaded?r("router-link",{staticClass:"my-auto px-4 profile",attrs:{to:"/account"}},[t._v(t._s(t.name))]):t._e(),r("span",{staticClass:"logout paper-btn btn-primary"},[t._v("Logout")])],1):t._e(),t.isAuthenticated||t.authLoading?t._e():r("div",{staticClass:"d-flex justify-content-end"},[r("router-link",{staticClass:"paper-btn btn-success",attrs:{to:"/login"}},[t._v("Login")])],1)])])],1)},l=[],d=(n("99af"),n("b0c0"),n("5530")),p=n("2f62"),f="AUTH_REQUEST",m="AUTH_SUCCESS",h="AUTH_ERROR",g="AUTH_LOGOUT",v={name:"Navigation",methods:{logout:function(){var t=this;this.$store.dispatch(g).then((function(){return t.$router.push("/login")}))}},computed:Object(d["a"])(Object(d["a"])({},Object(p["b"])(["getProfile","isAuthenticated","isProfileLoaded"])),Object(p["c"])({authLoading:function(t){return"loading"===t.auth.status},name:function(t){return"".concat(t.user.profile.title," ").concat(t.user.profile.name)}}))},b=v,_=n("2877"),O=Object(_["a"])(b,c,l,!1,null,null,null),w=O.exports,j="USER_REQUEST",y="USER_SUCCESS",S="USER_ERROR",k={name:"App",components:{Navigation:w},data:function(){return{}},created:function(){this.$store.getters.isAuthenticated&&this.$store.dispatch(j)}},E=k,R=Object(_["a"])(E,i,u,!1,null,null,null),x=R.exports,P=(n("7b17"),n("ab8b"),n("64e5"),n("557b"),n("bb6f")),C=n.n(P),A=n("8c4f"),q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t.loading?r("loading"):t._e(),t.isAuthenticated?r("div",[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("QrGenerator",{attrs:{url:t.url}}),r("pre",[t._v("Secret Key: "+t._s(t.key))]),r("pre",[t._v("params: "+t._s(this.$route.query))])],1):t._e(),t.isAuthenticated||"loading"===t.authStatus?t._e():r("div",[r("h1",[t._v("Welcome to the game !")]),r("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac tempor felis, non tempus nisi. Donec aliquam dui dolor, quis. ")]),r("login")],1)],1)},L=[],T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("img",{attrs:{id:"qrImage",alt:"",srcset:""}})])}],$=(n("96cf"),n("1da1")),Q=n("d055"),D=n.n(Q),G={name:"QrGenerator",props:{url:String},watch:{url:function(t){this.generateQR(t,"qrImage")}},mounted:function(){this.generateQR(this.url,"qrImage")},methods:{generateQR:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e,n){var r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={errorCorrectionLevel:"H",type:"image/png",quality:.5,margin:3,color:{dark:"#010599FF",light:"#FFBF60FF"}},t.prev=1,t.next=4,D.a.toDataURL(e,r);case 4:return o=t.sent,console.log("qrURI"),console.log(o),n&&(document.getElementById(n).src=o),t.abrupt("return",o);case 11:t.prev=11,t.t0=t["catch"](1),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));function e(e,n){return t.apply(this,arguments)}return e}()}},I=G,F=Object(_["a"])(I,T,U,!1,null,null,null),H=F.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("form",{staticClass:"login",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("h1",[t._v("Sign in")]),n("h4",[t._v("User name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{required:"",type:"text",placeholder:"Snoopy"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("h4",[t._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{required:"",type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("hr"),n("button",{attrs:{type:"submit"}},[t._v("Login")])])])},N=[],B={name:"Login",data:function(){return{username:"",password:""}},methods:{login:function(){var t=this,e=this.username,n=this.password;this.$store.dispatch(f,{username:e,password:n}).then((function(){t.$router.push("/")}))}}},J=B,z=Object(_["a"])(J,M,N,!1,null,null,null),K=z.exports,V={name:"App",components:{Login:K,QrGenerator:H},data:function(){return{key:"6o9OGt3oy7",url:"code=phqljrwebgwebñg"}},computed:Object(d["a"])(Object(d["a"])({},Object(p["b"])(["isAuthenticated","authStatus"])),{},{loading:function(){return"loading"===this.authStatus&&!this.isAuthenticated}}),mounted:function(){console.log(this.$route.query)},methods:{}},W=V,X=Object(_["a"])(W,q,L,!1,null,null,null),Y=X.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("qrcode-stream",{on:{decode:t.onDecode}}),n("pre",[t._v(t._s(t.decodedData))])],1)},tt=[],et={name:"ReadQR",data:function(){return{decodedData:null}},methods:{onDecode:function(t){console.log("Decoded QR: ".concat(t)),this.decodedData=t}}},nt=et,rt=Object(_["a"])(nt,Z,tt,!1,null,null,null),ot=rt.exports,at=[{path:"/",name:"Home",component:Y},{path:"/readqr",name:"ReadQR",meta:{requiresAuth:!0},component:ot},{path:"/login",name:"Login",component:K}],st=n("ade3"),it=(n("d3b7"),{auth:{POST:{token:"This-is-a-mocked-token"}},"user/me":{GET:{name:"doggo",title:"sir"}}}),ut=function(t){var e=t.url,n=t.method;return new Promise((function(t,r){setTimeout((function(){try{t(it[e][n||"GET"]),console.log("Mocked '".concat(e,"' - ").concat(n||"GET")),console.log("response: ",it[e][n||"GET"])}catch(o){r(new Error(o))}}),1e3)}))},ct=ut,lt={status:"",profile:{}},dt={getProfile:function(t){return t.profile},isProfileLoaded:function(t){return!!t.profile.name}},pt=Object(st["a"])({},j,(function(t){var e=t.commit,n=t.dispatch;e(j),ct({url:"user/me"}).then((function(t){e(y,t)})).catch((function(){e(S),n(g)}))})),ft=(r={},Object(st["a"])(r,j,(function(t){t.status="loading"})),Object(st["a"])(r,y,(function(t,e){t.status="success",s["a"].set(t,"profile",e)})),Object(st["a"])(r,S,(function(t){t.status="error"})),Object(st["a"])(r,g,(function(t){t.profile={}})),r),mt={state:lt,getters:dt,actions:pt,mutations:ft},ht=n("bc3a"),gt=n.n(ht),vt={token:localStorage.getItem("user-token")||"",status:"",hasLoadedOnce:!1},bt={isAuthenticated:function(t){return!!t.token},authStatus:function(t){return t.status}},_t=(o={},Object(st["a"])(o,f,(function(t,e){var n=t.commit,r=t.dispatch;return new Promise((function(t,o){n(f),ct({url:"auth",data:e,method:"POST"}).then((function(e){localStorage.setItem("user-token",e.token),gt.a.defaults.headers.common["Authorization"]=e.token,n(m,e),r(j),t(e)})).catch((function(t){n(h,t),localStorage.removeItem("user-token"),o(t)}))}))})),Object(st["a"])(o,g,(function(t){var e=t.commit;return new Promise((function(t){e(g),localStorage.removeItem("user-token"),t()}))})),o),Ot=(a={},Object(st["a"])(a,f,(function(t){t.status="loading"})),Object(st["a"])(a,m,(function(t,e){t.status="success",t.token=e.token,t.hasLoadedOnce=!0})),Object(st["a"])(a,h,(function(t){t.status="error",t.hasLoadedOnce=!0})),Object(st["a"])(a,g,(function(t){t.token=""})),a),wt={state:vt,getters:bt,actions:_t,mutations:Ot};s["a"].use(p["a"]);var jt=new p["a"].Store({modules:{user:mt,auth:wt}});s["a"].use(A["a"]);var yt=new A["a"]({routes:at});yt.beforeEach((function(t,e,n){"requiresAuth"in t.meta?t.meta.requiresAuth&&jt.getters.isAuthenticated?n():n({path:"/login",query:{redirect:t.fullPath}}):n()}));var St=yt,kt=n("2106"),Et=n.n(kt);s["a"].use(C.a),s["a"].use(A["a"]),s["a"].use(Et.a,gt.a),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(x)},router:St,store:jt}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.cbcdfb22.js.map