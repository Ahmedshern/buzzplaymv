(()=>{var e={};e.id=596,e.ids=[596],e.modules={20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},79637:e=>{"use strict";e.exports=import("firebase-admin/auth")},66744:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{patchFetch:()=>p,routeModule:()=>c,serverHooks:()=>h,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>l});var a=r(88797),i=r(10042),n=r(58492),o=r(57309),u=e([o]);o=(u.then?(await u)():u)[0];let c=new a.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/auth/resend-verification/route",pathname:"/api/auth/resend-verification",filename:"route",bundlePath:"app/api/auth/resend-verification/route"},resolvedPagePath:"/home/shan/Desktop/Shan/buzzplaymv/app/api/auth/resend-verification/route.ts",nextConfigOutput:"",userland:o}),{workAsyncStorage:d,workUnitAsyncStorage:l,serverHooks:h}=c;function p(){return(0,n.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:l})}s()}catch(e){s(e)}})},78031:()=>{},35303:()=>{},57309:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{POST:()=>o});var a=r(59540),i=r(79637),n=e([i]);async function o(e){try{let{email:t}=await e.json();if(!t)return a.NextResponse.json({error:"Email is required"},{status:400});let r=await (0,i.getAuth)().getUserByEmail(t);if(!r)return a.NextResponse.json({error:"User not found"},{status:404});let s={url:`http://localhost:3000/auth/verify-email?email=${t}`,handleCodeInApp:!0};return await (0,i.getAuth)().updateUser(r.uid,{emailVerified:!1}),await (0,i.getAuth)().generateEmailVerificationLink(t,s),a.NextResponse.json({success:!0,message:"Verification email sent successfully"})}catch(e){return console.error("Error sending verification email:",e),a.NextResponse.json({error:e.message||"Failed to send verification email"},{status:500})}}i=(n.then?(await n)():n)[0],s()}catch(e){s(e)}})}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[492,661],()=>r(66744));module.exports=s})();