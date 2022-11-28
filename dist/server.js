(()=>{"use strict";var e={752:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.listen=t.App=void 0;const s=o(r(860)),u=r(382),n=o(r(487)),l=o(r(806)),i=o(r(470)),a=o(r(582)),d=o(r(985)),f=(0,s.default)(),c=process.env.PORT||3e3,p=process.env.FE_URL||"";t.App=e=>{v(),_(e),g()};const _=e=>{e.forEach((e=>{f.use("/",e.router)}))},v=()=>{f.use((0,n.default)()),f.use((0,l.default)()),f.use((0,i.default)("combined")),f.use((0,a.default)({origin:p,credentials:!0})),f.use((0,d.default)({windowMs:6e4,max:5,statusCode:429,message:{code:429,message:"TOO MANY REQUESTS"}})),f.use(s.default.json({limit:"300kb"})),f.use(s.default.urlencoded({extended:!0}))},g=()=>{f.use(u.errorMiddleware)};t.listen=()=>{f.listen(c,(()=>{console.log(`Server is listening on port ${c}`)}))}},492:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=r(905);t.default=(e,t,r,s)=>{const u=e.status||500,n=e.message||"Some thing when wrong";o.Logger.error(`[ERROR] - Status: ${u} - Message: ${n}`),r.status(u).json({message:n})}},382:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.errorMiddleware=void 0;const s=o(r(492));t.errorMiddleware=s.default},905:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Logger=void 0;const s=o(r(495));t.Logger=s.default},495:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(r(773)),u=s.default.createLogger({transports:[new s.default.transports.File({filename:"logs/error.log",level:"error"}),new s.default.transports.File({filename:"logs/combined.log"})],format:s.default.format.combine(s.default.format.colorize({all:!0}),s.default.format.simple())});t.default=u},577:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){try{t.status(200).send("API is running....")}catch(e){r(e)}}},304:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(r(577)),u=r(860);t.default=e=>{let t=(0,u.Router)();return t.get(e,s.default),{path:e,router:t}}},570:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.IndexRoute=t.IndexController=void 0;const s=o(r(577));t.IndexController=s.default;const u=o(r(304));t.IndexRoute=u.default},582:e=>{e.exports=require("cors")},142:e=>{e.exports=require("dotenv")},860:e=>{e.exports=require("express")},985:e=>{e.exports=require("express-rate-limit")},806:e=>{e.exports=require("helmet")},487:e=>{e.exports=require("hpp")},470:e=>{e.exports=require("morgan")},773:e=>{e.exports=require("winston")}},t={};function r(o){var s=t[o];if(void 0!==s)return s.exports;var u=t[o]={exports:{}};return e[o].call(u.exports,u,u.exports,r),u.exports}(()=>{r(142).config();const e=r(570),t=r(752),o=[(0,e.IndexRoute)("/")];(0,t.App)(o),(0,t.listen)()})()})();