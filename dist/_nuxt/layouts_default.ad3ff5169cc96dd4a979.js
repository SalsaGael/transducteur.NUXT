webpackJsonp([4],{"0Bfw":function(t,e,s){"use strict";e.a={data:function(){return{timer:!1}},methods:{toggleMenu:function(){menu.classList.toggle("show"),menubtn.classList.toggle("active")},showMenu:function(){var t=this;this.timer?(menu.classList.add("show"),menubtn.classList.add("active")):(this.timer=!0,menu.classList.add("show"),menubtn.classList.add("active"),setTimeout(function(){t.timer=!1,menu.classList.remove("show"),menubtn.classList.remove("active")},1e4))},hideMenu:function(){menu.classList.remove("show"),menubtn.classList.remove("active")},burgerClick:function(){this.timer?this.toggleMenu():this.showMenu()},isShare:function(){if(navigator.share)return!0},share:function(){navigator.share({title:"Transducteur",text:"Une calculette pratique pour les capteurs de mesure",url:window.location.href}).then(function(){console.log("Thanks for sharing!")}).catch(function(t){console.log("Couldn't share because of",t.message)})},changeValue:function(t,e){this.$store.commit("CHANGE_VALUE",{path:[t],value:e})},changeEntryEvent:function(t,e){this.$store.commit("CHANGE_ENTRY",{path:[t],value:e.target.value})}}}},"6Qtu":function(t,e,s){"use strict";var a=s("0Bfw"),n=s("zsyO"),i=!1;var r=function(t){i||s("JOpC")},o=s("VU/8")(a.a,n.a,!1,r,null,null);o.options.__file="components/footerapp.vue",e.a=o.exports},"6TDh":function(t,e,s){var a=s("7zXQ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("29717930",a,!1,{sourceMap:!1})},"7zXQ":function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,"nav{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--main-bg-color);border-bottom:1px solid #000;border-top:1px solid #000;color:#000;min-height:68px;height:68px;z-index:5}",""])},DLCH:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("menu"),s("div",{directives:[{name:"touch",rawName:"v-touch",value:{left:function(){return t.hideMenu()},right:function(){return t.showMenu()}},expression:"{\n      left: () => hideMenu(),\n      right: () => showMenu()\n    }"}],staticClass:"div-body",on:{click:function(e){e.stopPropagation(),t.hideMenu()}}},[s("headernav"),s("nuxt"),s("footerapp")],1)])};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},JOpC:function(t,e,s){var a=s("lsT5");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("05e5fdcf",a,!1,{sourceMap:!1})},Ma2J:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("UEPk"),n=s("DLCH"),i=!1;var r=function(t){i||s("ZOPi")},o=s("VU/8")(a.a,n.a,!1,r,null,null);o.options.__file="layouts/default.vue",e.default=o.exports},UEPk:function(t,e,s){"use strict";var a=s("zAF9"),n=s("6Qtu");e.a={layout:"default",components:{headernav:a.default,footerapp:n.a},methods:{showMenu:function(){menu.classList.add("show"),menubtn.classList.add("active")},hideMenu:function(){menu.classList.remove("show"),menubtn.classList.remove("active")}}}},ZOPi:function(t,e,s){var a=s("xn7s");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("6cc43a23",a,!1,{sourceMap:!1})},lsT5:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,"#footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:hsla(0,0%,94%,.95);border-top:1px solid #000;width:100%;height:48px;min-height:48px;bottom:48px;z-index:5}",""])},qSgO:function(t,e,s){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar navbar-light justify-content-between w-100",attrs:{id:"nav"}},[e("span",{staticClass:"navbar-brand"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"d-inline-block align-middle",attrs:{src:"favicon.ico",alt:"Logo App",height:"45"}})])],1),this._m(0),this._m(1),this._m(2),e("span",{staticClass:"btn-group"},[e("nuxt-link",{attrs:{to:"/pa"}},[e("button",{staticClass:"btn btn btn-dark btn-origin mr-2",attrs:{type:"button",id:"tabCalcPuisAct"}},[this._v("\r\n                   Puissance active\r\n\t\t\t    ")])]),e("nuxt-link",{attrs:{to:"/pr"}},[e("button",{staticClass:"btn btn btn-dark btn-origin mr-2",attrs:{type:"button",id:"tabCalcPuisReact"}},[this._v("\r\n\t\t\t\t    Puissance réactive\r\n\t\t\t    ")])]),e("nuxt-link",{attrs:{to:"/tens"}},[e("button",{staticClass:"btn btn btn-dark btn-origin mr-2",attrs:{type:"button",id:"tabCalcTens"}},[this._v("\r\n\t\t\t\t    Tension\r\n\t\t\t    ")])])],1)])};a._withStripped=!0;var n={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{attrs:{id:"titleAppShort"}},[e("a",{staticClass:"h5"},[this._v("Calculette pour capteur")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"mr-auto",attrs:{id:"titleAppMedium"}},[e("a",{staticClass:"h4"},[this._v("Calculette pour capteur")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"mr-auto",attrs:{id:"titleApp"}},[e("a",{staticClass:"h4"},[this._v("Calculette pour transducteur de mesure")])])}]};e.a=n},sux3:function(t,e){},xn7s:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,"",""])},zAF9:function(t,e,s){"use strict";var a=s("sux3"),n=s.n(a),i=s("qSgO"),r=!1;var o=function(t){r||s("6TDh")},c=s("VU/8")(n.a,i.a,!1,o,null,null);c.options.__file="components/headernav.vue",e.default=c.exports},zsyO:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"menu",attrs:{id:"menu"},on:{click:function(t){t.stopPropagation()}}},[s("ul",{attrs:{id:"menulist"}},[t._m(0),s("li",{staticClass:"m-4",attrs:{id:""}},[s("div",{staticClass:"input-group"},[t._m(1),s("select",{staticClass:"custom-select theme-select",attrs:{id:"theme"},domProps:{value:this.$store.state.theme},on:{change:function(e){t.changeEntryEvent("theme",e)}}},[s("option",{attrs:{value:"default"}},[t._v("Clair")]),s("option",{attrs:{value:"defaultDark"}},[t._v("Sombre")]),s("option",{attrs:{value:"orange"}},[t._v("Orange")])])])]),t._m(2),t._m(3),t._m(4),t.isShare()?s("no-ssr",[s("li",{staticClass:"m-4",attrs:{id:""}},[s("button",{staticClass:"btn btn-dark theme-icon",on:{click:function(e){t.share()}}},[s("i",{staticClass:"fa fa-share",attrs:{"aria-hidden":"true"}})]),s("a",[t._v(" Partager")])])]):t._e()],1)]),s("div",{staticClass:"nav justify-content-left py-1 footer",attrs:{id:"footer"}},[s("button",{staticClass:"btn btn-dark ml-2 mr-auto",attrs:{type:"button",id:"menubtn"},on:{click:function(e){e.stopPropagation(),t.burgerClick()}}},[t._m(5)]),s("nuxt-link",{attrs:{to:"/pa"}},[s("button",{staticClass:"btn btn-dark btn-reduct ml-auto mr-2",attrs:{type:"button",id:"tabCalcPuisActReduct"}},[t._v("\r\n\t\t\tP\r\n\t\t")])]),s("nuxt-link",{attrs:{to:"/pr"}},[s("button",{staticClass:"btn btn-dark btn-reduct mr-2",attrs:{type:"button",id:"tabCalcPuisReactReduct"}},[t._v("\r\n\t\t\tQ\r\n    \t")])]),s("nuxt-link",{attrs:{to:"/tens"}},[s("button",{staticClass:"btn btn-dark btn-reduct mr-2",attrs:{type:"button",id:"tabCalcTensReduct"}},[t._v("\r\n\t\t\tU\r\n\t\t")])])],1)])};a._withStripped=!0;var n={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"m-4 ml-5",attrs:{id:"burger"}},[e("i",{staticClass:"fa fa-user-circle-o",attrs:{"aria-hidden":"true"}}),e("a",[this._v(" Gaël Piconcely")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("label",{staticClass:"input-group-text bg-dark text-light theme-select",attrs:{for:"theme"}},[this._v("Thème")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"m-4",attrs:{id:""}},[e("button",{staticClass:"btn btn-dark theme-icon",attrs:{onClick:"location.href='mailto:gael.piconcely@free.fr?subject=Retour utilisateur'"}},[e("i",{staticClass:"fa fa-envelope-open",attrs:{"aria-hidden":"true"}})]),e("a",[this._v(" Me contacter")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"m-4",attrs:{id:""}},[e("button",{staticClass:"btn btn-dark theme-icon",attrs:{onClick:"location.href='https://twitter.com/salsagael'"}},[e("i",{staticClass:"fa fa-twitter",attrs:{"aria-hidden":"true"}})]),e("a",[this._v(" Me suivre")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"m-4",attrs:{id:""}},[e("button",{staticClass:"btn btn-dark theme-icon",attrs:{onClick:"location.href='https://paypal.me/PICONCELY/1.5'"}},[e("i",{staticClass:"fa fa-paypal",attrs:{"aria-hidden":"true"}})]),e("a",[this._v(" Me payer un café")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",[e("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})])}]};e.a=n}});