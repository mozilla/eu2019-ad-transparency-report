!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=d3},function(e,t,n){var a=n(2);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(a,o);a.locals&&(e.exports=a.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,'/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors Less Variables v3.3.2 */\nhtml,\nbody,\ndiv,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  border: 0;\n  padding: 0;\n  margin: 0;\n}\nbody {\n  width: 1000px;\n  margin: 2em auto;\n  font-family: "Open Sans", sans-serif;\n  font-weight: 300;\n  font-size: 12pt;\n  line-height: 1.45;\n  color: #333;\n}\nh1 {\n  font-family: "Zilla Slab", sans-serif;\n  font-weight: 700;\n  font-size: 24pt;\n  color: #000;\n  background: #959595;\n  padding: 32px 16px 32px 16px;\n  margin: 0;\n}\nh3 {\n  font-family: "Zilla Slab", sans-serif;\n  font-weight: 700;\n  font-size: 16pt;\n  color: #000;\n  background: #e7e5e2;\n  padding: 16px 16px 16px 16px;\n  margin: 32px 0 0 0;\n}\nh5 {\n  font-family: "Zilla Slab", sans-serif;\n  font-weight: 600;\n  font-size: 14pt;\n  color: #000;\n  padding: 0 16px 0 16px;\n  margin: 16px 0 0 0;\n}\na {\n  color: #003eaa;\n}\na:visited {\n  color: #003eaa;\n}\nselect {\n  font-family: "Zilla Slab", sans-serif;\n  font-weight: 600;\n  font-size: 14pt;\n  padding: 0 0.25em;\n}\ndiv.warnings {\n  padding: 8px 16px 16px 16px;\n}\ndiv.warnings div.warning {\n  font-size: 10pt;\n  line-height: 12pt;\n  color: #a4000f;\n  padding: 0 0 8px 0;\n}\ndiv.p {\n  padding: 16px 16px 0 16px;\n}\ndiv.download {\n  padding: 4px 16px 24px 16px;\n  font-size: 9pt;\n}\ndiv.download a {\n  text-decoration: none;\n}\ndiv.download a:hover {\n  text-decoration: underline;\n  text-decoration-style: dotted;\n}\ndiv.download i {\n  font-size: 10px;\n}\ndiv.download span.download_label {\n  font-family: "Open Sans", sans-serif;\n  font-weight: 400;\n}\ndiv.report {\n  padding: 8px 16px 0 16px;\n  font-family: "Fira Mono", fixed;\n  font-weight: 400;\n  font-size: 9pt;\n  padding-top: 12px;\n  border-top: 1px solid #333;\n  margin-top: 12px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #333;\n  margin-bottom: 4px;\n}\ndiv.report b {\n  font-family: "Fira Mono", fixed;\n  font-weight: 700;\n}\ndiv.table {\n  padding: 8px 16px 0 16px;\n  font-family: "Fira Mono", fixed;\n  font-weight: 400;\n  font-size: 9pt;\n}\ndiv.table div.table_header {\n  padding-bottom: 2px;\n  border-bottom: 1px solid #333;\n  margin-bottom: 2px;\n}\ndiv.table div.table_body {\n  padding-bottom: 2px;\n  border-bottom: 1px solid #333;\n  margin-bottom: 2px;\n}\ndiv.table div.row.header,\ndiv.table div.row.body {\n  padding-left: 2em;\n}\ndiv.table div.row.header:nth-child(5n):not(:last-child),\ndiv.table div.row.body:nth-child(5n):not(:last-child) {\n  padding-bottom: 2px;\n  border-bottom: 1px dotted #ccc;\n  margin-bottom: 2px;\n}\ndiv.table span.cell.header,\ndiv.table span.cell.body {\n  display: inline-block;\n  vertical-align: top;\n  padding-top: 0.3em;\n  padding-bottom: 0.3em;\n  line-height: 1em;\n}\ndiv.table span.cell.header.dimension,\ndiv.table span.cell.body.dimension {\n  width: 22em;\n}\ndiv.table span.cell.header.ad_count,\ndiv.table span.cell.body.ad_count {\n  width: 10em;\n  text-align: right;\n}\ndiv.table span.cell.header.platform,\ndiv.table span.cell.body.platform {\n  width: 1.5em;\n}\ndiv.table span.cell.header.platform i,\ndiv.table span.cell.body.platform i {\n  font-size: 10px;\n  color: #666;\n}\ndiv.table span.cell.header.advertiser,\ndiv.table span.cell.body.advertiser {\n  width: 30.5em;\n}\ndiv.table span.cell.header.advertiser_count,\ndiv.table span.cell.body.advertiser_count {\n  width: 10em;\n  text-align: right;\n}\ndiv.table span.cell.header.impressions,\ndiv.table span.cell.body.impressions {\n  width: 14em;\n  text-align: right;\n}\ndiv.table span.cell.header.spend,\ndiv.table span.cell.body.spend {\n  width: 12em;\n  text-align: right;\n}\n',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var o=(i=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),r=a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"});return[n].concat(r).concat([o]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(a[r]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&a[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var a,o,r={},i=(a=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=a.apply(this,arguments)),o}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var a=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}}(),l=null,d=0,c=[],p=n(5);function b(e,t){for(var n=0;n<e.length;n++){var a=e[n],o=r[a.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](a.parts[i]);for(;i<a.parts.length;i++)o.parts.push(y(a.parts[i],t))}else{var s=[];for(i=0;i<a.parts.length;i++)s.push(y(a.parts[i],t));r[a.id]={id:a.id,refs:1,parts:s}}}}function f(e,t){for(var n=[],a={},o=0;o<e.length;o++){var r=e[o],i=t.base?r[0]+t.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};a[i]?a[i].parts.push(s):n.push(a[i]={id:i,parts:[s]})}return n}function u(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=c[c.length-1];if("top"===e.insertAt)a?a.nextSibling?n.insertBefore(t,a.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,n);n.insertBefore(t,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var a=function(){0;return n.nc}();a&&(e.attrs.nonce=a)}return m(t,e.attrs),u(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,a,o,r;if(t.transform&&e.css){if(!(r="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=r}if(t.singleton){var i=d++;n=l||(l=v(t)),a=x.bind(null,n,i,!1),o=x.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),u(e,t),t}(t),a=function(e,t,n){var a=n.css,o=n.sourceMap,r=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||r)&&(a=p(a));o&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([a],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),a=function(e,t){var n=t.css,a=t.media;a&&e.setAttribute("media",a);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){h(n)});return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return b(n,t),function(e){for(var a=[],o=0;o<n.length;o++){var i=n[o];(s=r[i.id]).refs--,a.push(s)}e&&b(f(e,t),t);for(o=0;o<a.length;o++){var s;if(0===(s=a[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete r[s.id]}}}};var _,g=(_=[],function(e,t){return _[e]=t,_.filter(Boolean).join("\n")});function x(e,t,n,a){var o=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var r=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,a=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:a+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";n.r(t);n(1);var a=n(0);const o=[{key:"platform",label:"Platform",db_key:"platform_code",db_label:"platform_name"},{key:"media",label:"Ad Type",db_key:"media_code",db_label:"media_label"},{key:"location",label:"Region",db_key:"location_code",db_label:"location_name"},{key:"country",label:"Country",db_key:"country_code",db_label:"country_name"},{key:"region",label:"Region",db_key:"region_code",db_label:"region_name"},{key:"audience",label:"Gender and Age",db_key:"audience_code",db_label:"audience_label"},{key:"gender",label:"Gender",db_key:"gender_code",db_label:"gender_label"},{key:"age",label:"Age",db_key:"age_code",db_label:"age_label"},{key:"day",label:"Day",db_key:"day_code",db_label:"day_label"},{key:"week",label:"Week",db_key:"week_code",db_label:"week_label"},{key:"spend",label:"Spend",db_key:"spend_code",db_label:"spend_label"},{key:"impression",label:"Impressions",db_key:"impression_code",db_label:"impression_label"}];o.filter(e=>"region"!==e.key);var r={crawlDate:"May 13, 2019",dimensions:o.filter(e=>"country"!==e.key)};const i=function(e="eu"){this.prefix=e};i.prototype._isGlobal=function(e){return void 0===e||"global"===e.key},i.prototype.getStatsFilename=function(e){return this._isGlobal(e)?`data/${this.prefix}-stats.csv`:`data/${e.key}/${this.prefix}-stats-by-${e.key}.csv`},i.prototype.getAdvertisersFilename=function(e,t){return this._isGlobal(e)?`data/${this.prefix}-advertisers.csv`:`data/${e.key}/${this.prefix}-advertisers-by-${e.key}-${t}.csv`},i.prototype.getAdvertisersPreviewFilename=function(e,t){return this._isGlobal(e)?`data/${this.prefix}-advertisers+.csv`:`data/${e.key}/${this.prefix}-advertisers+-by-${e.key}-${t}.csv`},i.prototype.loadStats=function(e){const t=this.getStatsFilename(e);return a.tsv(t)},i.prototype.loadAdvertisers=function(e,t){const n=this.getAdvertisersPreviewFilename(e,t);return a.tsv(n)};var s=i;document.addEventListener("DOMContentLoaded",function(){const e=(e,t)=>"country"===t.key?e.filter(e=>"__"!==e[t.db_key]):"audience"===t.key||"gender"===t.key?e.filter(e=>"u"!==e[t.db_key].substr(0,1)):e,t=e=>t=>e.map(e=>Object.assign({},e,{db_data:t[e.db_key]})),n=e=>e.is_number?e.is_exact?i(e.db_data):l(e.db_data):e.db_data,o=a.format(","),i=e=>o(e),l=(e,t=3)=>{const n=0===e?0:Math.floor(Math.log10(Math.abs(e)))+1,a=Math.pow(10,n-t),r=Math.round(Math.floor(e/a)*a);return o(r)},d=e=>{const t=f.getStatsFilename(e);a.selectAll(`a.csv.stats.${e.key}`).attr("href",t).selectAll("span.download_label").text("Download the full table")},c=(e,o,r=25)=>{const i=e.slice(0,r),s=[{css:"platform",db_key:"platform_name",is_platform:!0,is_number:!1,label:""},{css:"advertiser",db_key:"advertiser_name",is_platform:!1,is_number:!1,label:"Advertiser"},{css:"ad_count",db_key:"ad_count",is_platform:!1,is_number:!0,is_exact:!0,label:"Ads"},{css:"impressions",db_key:"high_impressions",is_platform:!1,is_number:!0,is_exact:!1,label:"Impressions"},{css:"spend",db_key:"high_spend",is_platform:!1,is_number:!0,is_exact:!1,label:"Spend (€)"}],l=a.select(`.table.advertisers.${o.key}`);l.selectAll("*").remove(),l.append("div").attr("class","table_header").append("div").attr("class","row header").selectAll("span").data(s).enter().append("span").attr("class",e=>`cell header ${e.css}`).text(e=>e.label);const d=l.append("div").attr("class","table_body").selectAll("div").data(i).enter().append("div").attr("class","row body").selectAll("span").data(t(s)).enter().append("span").attr("class",e=>`cell body ${e.css}`);d.filter(e=>e.is_platform).append("i").attr("class",e=>"Facebook"===e.db_data?"fab fa-facebook-square":"fab fa-google"),d.filter(e=>!e.is_platform).text(n)},p=(e,t)=>{const n=f.getAdvertisersFilename(e,t);a.selectAll(`a.csv.advertisers.${e.key}`).attr("href",n).selectAll("span.download_label").text("Download the full list of advertisers")},b={key:"global"},f=new s("cy");f.loadStats(b).then(e=>{(e=>{const t=e[0];for(const e in t)t[e]=parseInt(t[e]);a.selectAll(".stats.const.crawl_date").text(r.crawlDate),a.selectAll(".stats.global.ad_count").text(i(t.ad_count)),a.selectAll(".stats.global.advertiser_count").text(i(t.advertiser_count)),a.selectAll(".stats.global.high_impressions").text(l(t.high_impressions)),a.selectAll(".stats.global.low_impressions").text(l(t.low_impressions)),a.selectAll(".stats.global.high_spend").text(l(t.high_spend)),a.selectAll(".stats.global.low_spend").text(l(t.low_spend))})(e),d(b),f.loadAdvertisers(b).then(e=>{c(e,b,50),p(b)})}),r.dimensions.forEach(o=>{f.loadStats(o).then(r=>{((o,r,i=10)=>{const s=e(o,r).slice(0,i),l=(e=>[{css:"dimension",db_key:e.db_label,is_number:!1,label:e.label},{css:"advertiser_count",db_key:"advertiser_count",is_number:!0,is_exact:!0,label:"Advertisers"},{css:"ad_count",db_key:"ad_count",is_number:!0,is_exact:!0,label:"Ads"},{css:"impressions",db_key:"high_impressions",is_number:!0,is_exact:!1,label:"Impressions"},{css:"spend",db_key:"high_spend",is_number:!0,is_exact:!1,label:"Spend (€)"}])(r),d=a.select(`.table.stats.${r.key}`);d.append("div").attr("class","table_header").append("div").attr("class","row header").selectAll("span").data(l).enter().append("span").attr("class",e=>`cell header ${e.css}`).text(e=>e.label),d.append("div").attr("class","table_body").selectAll("div").data(s).enter().append("div").attr("class","row body").selectAll("span").data(t(l)).enter().append("span").attr("class",e=>`cell body ${e.css}`).text(n)})(r,o,"country"===o.key?28:10),d(o);const i=((e,t)=>e.sort((e,t)=>t.high_impressions-e.high_impressions)[0][t.db_key])(r,o);((t,n,o,r=10)=>{const i=e(t,n).slice(0,r).map(e=>({key:e[n.db_key],label:e[n.db_label]})).sort((e,t)=>e.label<t.label?-1:1),s=a.select(`select.select.${n.key}`);s.selectAll("option").data(i).enter().append("option").attr("value",e=>e.key).attr("selected",e=>e.key===o?"selected":null).text(e=>e.label),s.on("change",function(){const e=s.node().value;f.loadAdvertisers(n,e).then(t=>{c(t,n),p(n,e)})})})(r,o,i,"country"===o.key?28:10),f.loadAdvertisers(o,i).then(e=>{c(e,o),p(o,i)})})})})}]);