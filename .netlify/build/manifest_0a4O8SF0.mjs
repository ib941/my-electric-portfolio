import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, e as decodeKey } from './chunks/astro/server_BDkRyfZ9.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/mo%20galal/my-electric-archive/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.5ODSNKM9.css"},{"type":"inline","content":"body{background-color:#050505;background-image:radial-gradient(circle at 50% -20%,#d946ef26,#05050500 60%)}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/chat","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/chat\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"chat","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/chat.ts","pathname":"/api/chat","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const r=document.getElementById(\"gameCanvas\"),e=r.getContext(\"2d\"),v=document.getElementById(\"aiScoreLabel\"),M=document.getElementById(\"playerScoreLabel\"),P=document.getElementById(\"resetGameBtn\");let u=0,f=0;const t={x:200,y:300,vx:0,vy:0,radius:12,maxSpeed:14},s={x:200,y:500,radius:22,color:\"#D946EF\"},a={x:200,y:100,radius:22,color:\"#ffffff\",speed:4.2},n={x:130,width:140,depth:4};let y=[];function c(i,o,h){for(let d=0;d<15;d++)y.push({x:i,y:o,vx:(Math.random()-.5)*6,vy:(Math.random()-.5)*6,radius:Math.random()*2.5+1,alpha:1,decay:.02+Math.random()*.03,color:h})}function b(){if(e)for(let i=y.length-1;i>=0;i--){let o=y[i];if(o.x+=o.vx,o.y+=o.vy,o.alpha-=o.decay,o.alpha<=0){y.splice(i,1);continue}e.save(),e.globalAlpha=o.alpha,e.shadowBlur=10,e.shadowColor=o.color,e.fillStyle=o.color,e.beginPath(),e.arc(o.x,o.y,o.radius,0,Math.PI*2),e.fill(),e.restore()}}function x(){t.x=r.width/2,t.y=r.height/2,t.vx=(Math.random()>.5?1:-1)*(2+Math.random()*3),t.vy=(Math.random()>.5?1:-1)*(3+Math.random()*2)}x();function p(i,o){const h=r.getBoundingClientRect(),d=i-h.left,l=o-h.top;d>=s.radius&&d<=r.width-s.radius&&(s.x=d),l>=r.height/2+s.radius&&l<=r.height-s.radius&&(s.y=l)}r.addEventListener(\"mousemove\",i=>p(i.clientX,i.clientY));r.addEventListener(\"touchmove\",i=>{i.touches[0]&&p(i.touches[0].clientX,i.touches[0].clientY)});function m(i){const o=t.x-i.x,h=t.y-i.y;if(Math.sqrt(o*o+h*h)<t.radius+i.radius){const l=Math.atan2(h,o),S=Math.sqrt(t.vx*t.vx+t.vy*t.vy)+1.5,g=Math.min(S,t.maxSpeed);t.vx=Math.cos(l)*g,t.vy=Math.sin(l)*g,t.x=i.x+Math.cos(l)*(t.radius+i.radius),t.y=i.y+Math.sin(l)*(t.radius+i.radius),c(t.x,t.y,i.color)}}function B(){t.x+=t.vx,t.y+=t.vy,t.vx*=.998,t.vy*=.998;const i=a.speed;if(t.x>a.x+10?a.x+=i:t.x<a.x-10&&(a.x-=i),t.y<r.height/2?a.y<t.y-30?a.y+=2:a.y>t.y+30&&(a.y-=2):a.y>100&&(a.y-=2),a.x=Math.max(a.radius,Math.min(r.width-a.radius,a.x)),a.y=Math.max(a.radius,Math.min(r.height/2-a.radius,a.y)),(t.x-t.radius<=0||t.x+t.radius>=r.width)&&(t.vx*=-1,t.x=t.x-t.radius<=0?t.radius:r.width-t.radius,c(t.x,t.y,\"#22c55e\")),t.y-t.radius<=0)if(t.x>=n.x&&t.x<=n.x+n.width){u++,M.innerText=u.toString(),c(t.x,t.y,\"#D946EF\"),x();return}else t.vy*=-1,t.y=t.radius,c(t.x,t.y,\"#22c55e\");if(t.y+t.radius>=r.height)if(t.x>=n.x&&t.x<=n.x+n.width){f++,v.innerText=f.toString(),c(t.x,t.y,\"#ffffff\"),x();return}else t.vy*=-1,t.y=r.height-t.radius,c(t.x,t.y,\"#22c55e\");m(s),m(a)}function E(){e&&(e.clearRect(0,0,r.width,r.height),e.strokeStyle=\"rgba(39, 39, 42, 0.4)\",e.lineWidth=2,e.beginPath(),e.moveTo(0,r.height/2),e.lineTo(r.width,r.height/2),e.stroke(),e.strokeStyle=\"rgba(39, 39, 42, 0.2)\",e.beginPath(),e.arc(r.width/2,r.height/2,60,0,Math.PI*2),e.stroke(),e.fillStyle=\"#18181b\",e.fillRect(n.x,0,n.width,n.depth),e.fillRect(n.x,r.height-n.depth,n.width,n.depth),b(),e.shadowBlur=15,e.shadowColor=\"#ffffff\",e.fillStyle=a.color,e.beginPath(),e.arc(a.x,a.y,a.radius,0,Math.PI*2),e.fill(),e.shadowColor=s.color,e.fillStyle=s.color,e.beginPath(),e.arc(s.x,s.y,s.radius,0,Math.PI*2),e.fill(),e.shadowBlur=18,e.shadowColor=\"#22c55e\",e.fillStyle=\"#22c55e\",e.beginPath(),e.arc(t.x,t.y,t.radius,0,Math.PI*2),e.fill(),e.shadowBlur=0)}function w(){B(),E(),requestAnimationFrame(w)}requestAnimationFrame(w);P.addEventListener(\"click\",()=>{u=0,f=0,M.innerText=\"0\",v.innerText=\"0\",y=[],x()});\n"}],"styles":[{"type":"external","src":"/_astro/about.5ODSNKM9.css"},{"type":"inline","content":"body{background-color:#050505;background-image:radial-gradient(circle at 50% -20%,#d946ef1a,#05050500 60%)}canvas[data-astro-cid-th33bxg4]{touch-action:none}\n"}],"routeData":{"route":"/arcade","isIndex":false,"type":"page","pattern":"^\\/arcade\\/?$","segments":[[{"content":"arcade","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/arcade.astro","pathname":"/arcade","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const c=document.getElementById(\"generateBtn\"),s=document.getElementById(\"outputGrid\"),d=document.getElementById(\"mjOutput\"),u=document.getElementById(\"klingOutput\"),l=document.getElementById(\"campaignBudget\"),g=document.getElementById(\"budgetValue\"),m=document.getElementById(\"allocSalla\"),y=document.getElementById(\"allocVideo\"),f=document.getElementById(\"allocAds\"),a=document.getElementById(\"brandStyle\");function p(){const t=parseInt(l.value);g.innerText=`$${t.toLocaleString()}`,m.innerText=`$${Math.round(t*.2).toLocaleString()}`,y.innerText=`$${Math.round(t*.4).toLocaleString()}`,f.innerText=`$${Math.round(t*.4).toLocaleString()}`}l.addEventListener(\"input\",p);a.addEventListener(\"change\",()=>{const t=a.value,e=document.querySelector(\".from-\\\\[\\\\#D946EF\\\\]\"),o=document.querySelector(\"button[onclick*='mjOutput']\");!e||!o||(t===\"cyber\"?(e.className=\"absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-transparent\",o.style.color=\"#22d3ee\",l.style.setProperty(\"--tw-accent-color\",\"#22d3ee\")):t===\"minimalist\"?(e.className=\"absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-zinc-400 to-transparent\",o.style.color=\"#a1a1aa\",l.style.setProperty(\"--tw-accent-color\",\"#a1a1aa\")):(e.className=\"absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#D946EF] to-transparent\",o.style.color=\"#D946EF\",l.style.setProperty(\"--tw-accent-color\",\"#D946EF\")))});c.addEventListener(\"click\",()=>{const t=document.getElementById(\"userBrief\").value,e=a.value,o=document.getElementById(\"lightingStyle\").value;if(!t)return alert(\"Please enter a concept brief first.\");let i=\"chiaroscuro moody high-contrast lighting, dark shadows, specular reflections\";o===\"volumetric\"&&(i=\"volumetric light rays piercing through atmosphere, cinematic haze, dramatic dust particles\"),o===\"golden\"&&(i=\"editorial soft golden hour lighting, warm glow, diffused elegant refraction\");let r=\"commercial luxury product photography, extreme detail, 8k resolution, photorealistic, shot on Hasselblad, sleek composition --ar 4:5 --style raw --v 6.0\";e===\"minimalist\"&&(r=\"high-end stark minimalism, spacious composition, crisp surgical focus, high luxury gallery feel, premium texture contrast --ar 4:5 --style raw --v 6.0\"),e===\"cyber\"&&(r=\"futuristic cybernetic luxury design, neon fluid accents, technical geometry contrast, anamorphic lens flares, high-octane styling --ar 4:5 --v 6.0\");let n=\"Cinematic slow-motion 4k macro footage. A precise, elegant slow-dolly camera tracking shot gliding past the subject. Soft environmental dust floating.\";o===\"volumetric\"&&(n=\"Atmospheric macro 4k video. Light rays shifting across the product texture. Camera executes a smooth, high-end crane tracking down.\"),d.innerText=`${t}, ${i}, ${r}`,u.innerText=`${n} The visual elements of [${t}] begin to dynamically interact. High-viscosity liquid particles and fluid explosions activate smoothly with hyper-realistic computational physics dynamics, luxury editorial pacing, premium commercial finish.`,s.classList.remove(\"hidden\")});window.copyToClipboard=function(t,e){const o=document.getElementById(t).innerText;navigator.clipboard.writeText(o).then(()=>{const i=e.innerText;e.innerText=\"COPIED!\",e.style.color=\"#ffffff\",e.style.backgroundColor=\"rgba(34, 197, 94, 0.2)\",setTimeout(()=>{if(e.innerText=i,t===\"mjOutput\"){const r=a.value;r===\"cyber\"?e.style.color=\"#22d3ee\":r===\"minimalist\"?e.style.color=\"#a1a1aa\":e.style.color=\"#D946EF\",e.style.backgroundColor=\"rgba(217, 70, 239, 0.1)\"}else e.style.color=\"#ffffff\",e.style.backgroundColor=\"rgba(255, 255, 255, 0.1)\"},2e3)}).catch(i=>{console.error(\"Failed to copy text: \",i)})};\n"}],"styles":[{"type":"external","src":"/_astro/about.5ODSNKM9.css"},{"type":"inline","content":"body{background-color:#050505;background-image:radial-gradient(circle at 50% -20%,#d946ef1f,#05050500 60%)}\n"}],"routeData":{"route":"/director","isIndex":false,"type":"page","pattern":"^\\/director\\/?$","segments":[[{"content":"director","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/director.astro","pathname":"/director","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=document.getElementById(\"sendAmount\"),l=document.getElementById(\"targetCurrency\"),s=document.getElementById(\"feeLabel\"),u=document.getElementById(\"convertLabel\"),m=document.getElementById(\"rateLabel\"),f=document.getElementById(\"currencyBadge\"),g=document.getElementById(\"receiveAmount\"),e=document.getElementById(\"transferBtn\"),y={SAR:4.75,USD:1.27};function i(){const o=parseFloat(n.value)||0,t=l.value,c=y[t],r=o*.005,a=Math.max(0,o-r),d=a*c;s.innerText=`£${r.toFixed(2)}`,u.innerText=`£${a.toFixed(2)}`,m.innerText=`1 GBP = ${c.toFixed(2)} ${t}`,f.innerText=t===\"SAR\"?\"SAR (﷼)\":\"USD ($)\",g.innerText=d.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}n.addEventListener(\"input\",i);l.addEventListener(\"change\",i);e.addEventListener(\"click\",()=>{if((parseFloat(n.value)||0)<=0)return alert(\"Please input a valid transfer value.\");e.innerText=\"TRANSACTION PROCESSED!\",e.style.backgroundColor=\"#22c55e\",e.style.color=\"#ffffff\",setTimeout(()=>{e.innerText=\"Execute Protocol\",e.style.backgroundColor=\"#ffffff\",e.style.color=\"#000000\"},2e3)});\n"}],"styles":[{"type":"external","src":"/_astro/about.5ODSNKM9.css"},{"type":"inline","content":"body{background-color:#050505;background-image:radial-gradient(circle at 50% -20%,#22c55e1f,#05050500 60%)}\n"}],"routeData":{"route":"/fintech","isIndex":false,"type":"page","pattern":"^\\/fintech\\/?$","segments":[[{"content":"fintech","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fintech.astro","pathname":"/fintech","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.5ODSNKM9.css"},{"type":"inline","content":"body{background-color:#050505;background-image:radial-gradient(circle at 50% -20%,#d946ef26,#05050500 60%)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/mo galal/my-electric-archive/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/mo galal/my-electric-archive/src/pages/arcade.astro",{"propagation":"none","containsHead":true}],["C:/Users/mo galal/my-electric-archive/src/pages/director.astro",{"propagation":"none","containsHead":true}],["C:/Users/mo galal/my-electric-archive/src/pages/fintech.astro",{"propagation":"none","containsHead":true}],["C:/Users/mo galal/my-electric-archive/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/chat@_@ts":"pages/api/chat.astro.mjs","\u0000@astro-page:src/pages/arcade@_@astro":"pages/arcade.astro.mjs","\u0000@astro-page:src/pages/director@_@astro":"pages/director.astro.mjs","\u0000@astro-page:src/pages/fintech@_@astro":"pages/fintech.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_0a4O8SF0.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BaOKdxdU.js","/astro/hoisted.js?q=1":"_astro/hoisted.D5rmPgD9.js","/astro/hoisted.js?q=2":"_astro/hoisted.D0ntmEvV.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.5ODSNKM9.css","/favicon.ico","/favicon.svg","/project1.png","/project2.png","/project3.png"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"wfb1mnuxwgPT/Ni6euR3oRwk0RH7uwGU0DZ0FOb+7Fs=","experimentalEnvGetSecretEnabled":false});

export { manifest };
