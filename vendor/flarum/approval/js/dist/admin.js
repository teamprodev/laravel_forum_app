module.exports=function(r){var e={};function t(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return r[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=r,t.c=e,t.d=function(r,e,o){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:o})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)t.d(o,n,function(e){return r[e]}.bind(null,n));return o},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="",t(t.s=11)}({0:function(r,e){r.exports=flarum.core.compat.app},1:function(r,e){r.exports=flarum.core.compat.extend},11:function(r,e,t){"use strict";t.r(e);var o=t(1),n=t(0),a=t.n(n);a.a.initializers.add("flarum-approval",(function(){Object(o.extend)(a.a,"getRequiredPermissions",(function(r,e){"discussion.startWithoutApproval"===e&&r.push("startDiscussion"),"discussion.replyWithoutApproval"===e&&r.push("discussion.reply")})),a.a.extensionData.for("flarum-approval").registerPermission({icon:"fas fa-check",label:a.a.translator.trans("flarum-approval.admin.permissions.start_discussions_without_approval_label"),permission:"discussion.startWithoutApproval"},"start",95).registerPermission({icon:"fas fa-check",label:a.a.translator.trans("flarum-approval.admin.permissions.reply_without_approval_label"),permission:"discussion.replyWithoutApproval"},"reply",95).registerPermission({icon:"fas fa-check",label:a.a.translator.trans("flarum-approval.admin.permissions.approve_posts_label"),permission:"discussion.approvePosts"},"moderate",65)}))}});
//# sourceMappingURL=admin.js.map