webpackJsonp([25],{"58D0":function(t,e,s){var v,a,_;!function(s,l){a=[t,e],v=l,void 0!==(_="function"==typeof v?v.apply(e,a):v)&&(t.exports=_)}(0,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{labelStyle:{color:"red",fontSize:"24px"}}}},t.exports=e.default})},RRef:function(t,e,s){t.exports=s("wnOs")},iruA:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[[s("h1",[t._v("Label Overlay")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Instance Properties")]),t._v(" "),t._m(1),t._v(" "),s("h2",[t._v("Events")]),t._v(" "),t._m(2),t._v(" "),s("h2",[t._v("Examples")]),t._v(" "),s("h3",[t._v("Add a label on the map.")]),t._v(" "),s("h4",[t._v("Code")]),t._v(" "),t._m(3),t._v(" "),s("h4",[t._v("Preview")]),t._v(" "),s("doc-preview",[s("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15}},[s("bm-label",{attrs:{content:"Tiananmen",position:{lng:116.404,lat:39.915},labelStyle:t.labelStyle,title:"Hover me"}})],1)],1)]],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("BmLabel")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("default")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("content")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Contents of the label.")])]),t._v(" "),s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Title of the label.")])]),t._v(" "),s("tr",[s("td",[t._v("labelStyle")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Style of the label.")])]),t._v(" "),s("tr",[s("td",[t._v("offset")]),t._v(" "),s("td",[t._v("Size")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Offset of the label.")])]),t._v(" "),s("tr",[s("td",[t._v("position")]),t._v(" "),s("td",[t._v("Point")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Position of the label.")])]),t._v(" "),s("tr",[s("td",[t._v("zIndex")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Z-index of the label.")])]),t._v(" "),s("tr",[s("td",[t._v("massClear")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("Whether remove this overlay or not when "),s("code",[t._v("map.clearOverlays")]),t._v(" is called.")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",[t._v("parameter")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("click")]),t._v(" "),s("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),s("td",[t._v("Triggers when click on the label.")])]),t._v(" "),s("tr",[s("td",[t._v("dblclick")]),t._v(" "),s("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),s("td",[t._v("Triggers when double click on the label.")])]),t._v(" "),s("tr",[s("td",[t._v("mousedown")]),t._v(" "),s("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),s("td",[t._v("Triggers when the mouse is pressed down on the label.")])]),t._v(" "),s("tr",[s("td",[t._v("mouseup")]),t._v(" "),s("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),s("td",[t._v("Triggers when the mouse is released on the label.")])]),t._v(" "),s("tr",[s("td",[t._v("mouseout")]),t._v(" "),s("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),s("td",[t._v("Triggers when the mouse leaves the label.")])]),t._v(" "),s("tr",[s("td",[t._v("mouseover")]),t._v(" "),s("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),s("td",[t._v("Triggers when the mouse enters the label.")])]),t._v(" "),s("tr",[s("td",[t._v("remove")]),t._v(" "),s("td",[t._v("event{type, target}")]),t._v(" "),s("td",[t._v("Triggers when the label is removed.")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-label")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("content")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"Tiananmen"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":position")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":labelStyle")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v("\"{color: 'red', fontSize : '24px'}\"")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"Hover me"')]),t._v("/>")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])}]}},wnOs:function(t,e,s){var v=s("VU/8")(s("58D0"),s("iruA"),null,null);t.exports=v.exports}});