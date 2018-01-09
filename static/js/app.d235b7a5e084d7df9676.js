webpackJsonp([1,0],[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var s=n(5),a=r(s),i=n(17),u=r(i),c=n(61),o=r(c);new a.default({el:"#app",template:"<App/>",store:o.default,components:{App:u.default}})},,,,,,,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.CREATE_DB="CREATE_DB",e.ADD_DB="ADD_DB",e.REDUCE_DB="REDUCE_DB",e.DELETE_DB="DELETE_DB",e.UPDATE_CUR_SHOP_STATUS="UPDATE_CUR_SHOP_STATUS",e.CHECK_DB="CHECK_DB",e.UPDATE_LOCAL="UPDATE_LOCAL",e.CLEAR_LOCAL="CLEAR_LOCAL"},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){n(12);var r=n(1)(n(44),n(23),null,null);t.exports=r.exports},function(t,e,n){n(14);var r=n(1)(n(45),n(25),"data-v-5dae2ad0",null);t.exports=r.exports},function(t,e,n){n(11);var r=n(1)(n(46),n(22),"data-v-0436c1e0",null);t.exports=r.exports},function(t,e,n){n(13);var r=n(1)(n(47),n(24),"data-v-495e2aa0",null);t.exports=r.exports},function(t,e,n){n(15);var r=n(1)(n(48),n(26),"data-v-edd5bec0",null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shop-list"},[n("h4",[t._v("购物车信息")]),t._v(" "),n("table",{staticClass:"table table-hover table-shop"},[t._m(0),t._v(" "),n("tbody",t._l(t.cartList,function(e,r){return n("tr",[n("td",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.price))]),t._v(" "),n("td",[t._v(t._s(e.num))]),t._v(" "),n("td",[t._v(t._s(e.price*e.num))]),t._v(" "),n("td",[n("div",{staticClass:"btn btn-info",on:{click:function(e){t.action_cart(r,"add_db")}}},[t._v("+")]),t._v(" "),n("div",{staticClass:"btn btn-warning",on:{click:function(e){t.action_cart(r,"reduce_db")}}},[t._v("-")]),t._v(" "),n("div",{staticClass:"btn btn-danger",attrs:{title:"删除"},on:{click:function(e){t.action_cart(r,"delete_db")}}},[t._v("x")])])])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("id")]),t._v(" "),n("th",[t._v("名称")]),t._v(" "),n("th",[t._v("价格")]),t._v(" "),n("th",[t._v("数量")]),t._v(" "),n("th",[t._v("总价")]),t._v(" "),n("th",[t._v("Actions")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h3",[t._v("购物车demo")]),t._v(" "),n("shop-list"),t._v(" "),n("shop-cart"),t._v(" "),n("shop-info")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cart-info"},[n("div",[n("div",{staticClass:"item"},[t._v("总数："),n("strong",[t._v(t._s(t.cartInfos.total_nums))])]),t._v(" "),n("div",{staticClass:"item"},[t._v("总价："),n("strong",[t._v(t._s(t.cartInfos.total_price))])]),t._v(" "),n("div",{staticClass:"item pull-right btn btn-danger",on:{click:t.clear_db}},[t._v("清空购物车")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shop-list"},[n("h4",[t._v("商品信息")]),t._v(" "),n("table",{staticClass:"table table-hover table-bordered table-shop"},[t._m(0),t._v(" "),n("tbody",t._l(t.shop_list,function(e,r){return n("tr",[n("td",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.price))]),t._v(" "),n("td",[t._v(t._s(e.num||""))]),t._v(" "),n("td",[n("div",{staticClass:"btn btn-info",on:{click:function(n){t.add_db(e)}}},[t._v(t._s(e.num?"+":"加入购物车"))]),t._v(" "),e.num&&e.num>0?n("div",{staticClass:"btn btn-warning",on:{click:function(n){t.reduce_db(e)}}},[t._v("-")]):t._e()])])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("id")]),t._v(" "),n("th",[t._v("名称")]),t._v(" "),n("th",[t._v("价格")]),t._v(" "),n("th",[t._v("数量")]),t._v(" "),n("th",[t._v("Actions")])])])}]}},,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(18),a=(r(s),n(55));e.default={name:"app",components:{ShopList:a.List,ShopInfo:a.Info,ShopCart:a.Cart}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(49),a=r(s);e.default=a.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(51),a=r(s);e.default=a.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(53),a=r(s);e.default=a.default},function(t,e){"use strict";t.exports={name:"cart-list",computed:{cartList:function(){return this.$store.getters.getCartList}},methods:{action_cart:function(t,e){this.$store.dispatch("update_cur_shop_status",{index:t}),this.$store.dispatch(e)}},mounted:function(){}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var s=n(19),a=r(s);t.exports=a.default},function(t,e){"use strict";t.exports={name:"shop-info",computed:{cartInfos:function(){return this.$store.getters.getInfos}},methods:{clear_db:function(){this.$store.dispatch("clear_local")}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var s=n(20),a=r(s);t.exports=a.default},function(t,e){"use strict";t.exports={name:"shop-list",data:function(){return{shop_list:[{id:1,name:"商品1",price:12},{id:2,name:"商品2",price:14},{id:3,name:"商品3",price:10},{id:4,name:"商品4",price:2}]}},mounted:function(){for(var t=this.$store.state.cart.cartList,e=0;e<this.shop_list.length;e++)for(var n=0;n<t.length;n++)if(t[n].id==this.shop_list[e].id){this.$set(this.shop_list,e,t[n]);break}},methods:{add_db:function(t){var e=t.id;this.$store.dispatch("check_db",{id:e}),this.$store.state.cart.curIndex!=-1?(console.log("add_db"),this.$store.dispatch("add_db")):(console.log("create_db"),this.$set(t,"num",1),this.$store.dispatch("create_db",{shop:t}))},reduce_db:function(t){var e=t.id;this.$store.dispatch("check_db",{id:e}),t.num=parseInt(t.num),this.$store.dispatch("reduce_db")}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var s=n(21),a=r(s);t.exports=a.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var s=n(52),a=r(s),i=n(54),u=r(i),c=n(50),o=r(c);t.exports={Info:a.default,List:u.default,Cart:o.default}},function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}var s=n(9),a=r(s);t.exports={clear_local:function(t){var e=t.commit;e(a.CLEAR_LOCAL)},update_local:function(t){var e=t.commit;e(a.UPDATE_LOCAL)},update_cur_shop_status:function(t,e){var n=t.commit;n(a.UPDATE_CUR_SHOP_STATUS,e)},delete_db:function(t){var e=t.commit;e(a.DELETE_DB),e(a.UPDATE_LOCAL)},create_db:function(t,e){var n=t.commit,r=e.shop;n(a.CREATE_DB,r),n(a.UPDATE_LOCAL)},add_db:function(t){var e=t.commit;e(a.ADD_DB),e(a.UPDATE_LOCAL)},reduce_db:function(t){var e=t.commit;e(a.REDUCE_DB),e(a.UPDATE_LOCAL)},check_db:function(t,e){var n=t.commit;n(a.CHECK_DB,e)}}},function(t,e){"use strict";t.exports={getInfos:function(t){t.cartInfos.total_price=0,t.cartInfos.total_nums=0;for(var e=t.cartList,n=0;n<e.length;n++){var r=parseInt(e[n].price),s=parseInt(e[n].num);t.cartInfos.total_price+=r*s,t.cartInfos.total_nums+=s}return t.cartInfos},getCartList:function(t){return t.cartList}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var s=n(60),a=r(s),i=n(59),u=r(i),c=n(57),o=r(c),_=n(56),l=r(_);t.exports={state:a.default,mutations:u.default,getters:o.default,actions:l.default}},function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function s(t){return t&&t.__esModule?t:{default:t}}var a,i=n(43),u=s(i),c=n(41),o=s(c),_=n(9),l=r(_);t.exports=(a={},(0,u.default)(a,l.CLEAR_LOCAL,function(t){t.cartList.forEach(function(t){t.num=0}),t.cartList=[],localStorage.removeItem("vuex_cart")}),(0,u.default)(a,l.UPDATE_LOCAL,function(t){localStorage.setItem("vuex_cart",(0,o.default)(t.cartList))}),(0,u.default)(a,l.UPDATE_CUR_SHOP_STATUS,function(t,e){var n=e.index,r=void 0===n?-1:n;t.curIndex=r}),(0,u.default)(a,l.DELETE_DB,function(t){t.curIndex>=0&&(t.cartList[t.curIndex].num=0,t.cartList.splice(t.curIndex,1))}),(0,u.default)(a,l.CREATE_DB,function(t,e){t.cartList.push(e)}),(0,u.default)(a,l.ADD_DB,function(t){t.cartList[t.curIndex].num=parseInt(t.cartList[t.curIndex].num),t.cartList[t.curIndex].num++}),(0,u.default)(a,l.REDUCE_DB,function(t){t.cartList[t.curIndex].num=parseInt(t.cartList[t.curIndex].num),t.cartList[t.curIndex].num--,0==t.cartList[t.curIndex].num&&t.cartList.splice(t.curIndex,1)}),(0,u.default)(a,l.CHECK_DB,function(t,e){var n=e.id;t.curIndex=-1;var r=t.cartList;if(r.length)for(var s=0;s<r.length;s++)if(r[s].id==n){t.curIndex=s;break}}),a)},function(t,e){"use strict";t.exports={cartList:localStorage.getItem("vuex_cart")?JSON.parse(localStorage.getItem("vuex_cart")):[],cartInfos:{total_price:0,total_nums:0},curIndex:-1}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var s=n(5),a=r(s),i=n(28),u=r(i),c=n(58),o=r(c);a.default.use(u.default),t.exports=new u.default.Store({modules:{cart:o.default}})}]);
//# sourceMappingURL=app.d235b7a5e084d7df9676.js.map