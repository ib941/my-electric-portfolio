/* empty css                                 */
import { c as createComponent, d as renderHead, r as renderTemplate, b as createAstro } from '../chunks/astro/server_BDkRyfZ9.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Arcade = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Arcade;
  return renderTemplate`<html lang="en" data-astro-cid-th33bxg4> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>IBRAHIM ARCHIVE | ARCADE LABS</title>${renderHead()}</head> <body class="text-white min-h-screen flex flex-col font-sans antialiased" data-astro-cid-th33bxg4> <div class="w-full h-[1px] bg-zinc-900" data-astro-cid-th33bxg4></div> <header class="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-6 flex justify-between items-center border-b border-zinc-900" data-astro-cid-th33bxg4> <div class="text-xs uppercase tracking-[0.3em] font-medium text-zinc-400" data-astro-cid-th33bxg4>
Experimental Interactive Core <span class="text-zinc-600" data-astro-cid-th33bxg4>©2026</span> </div> <div class="text-sm font-bold tracking-[0.4em] text-white" data-astro-cid-th33bxg4>
IBRAHIM | LABS
</div> <nav class="flex gap-8 text-xs uppercase tracking-[0.3em] text-zinc-400" data-astro-cid-th33bxg4> <a href="/" class="hover:text-[#D946EF] transition-colors" data-astro-cid-th33bxg4>Home</a> <a href="/director" class="hover:text-[#D946EF] transition-colors" data-astro-cid-th33bxg4>Director App</a> <a href="/fintech" class="hover:text-[#D946EF] transition-colors" data-astro-cid-th33bxg4>Fintech App</a> <a href="/arcade" class="text-white hover:text-[#D946EF] transition-colors" data-astro-cid-th33bxg4>Arcade</a> <a href="/about" class="hover:text-[#D946EF] transition-colors" data-astro-cid-th33bxg4>About</a> </nav> </header> <main class="w-full max-w-[1200px] mx-auto px-6 py-12 flex-grow flex flex-col items-center justify-center" data-astro-cid-th33bxg4> <div class="text-center mb-8 max-w-md" data-astro-cid-th33bxg4> <span class="text-[10px] uppercase tracking-[0.3em] text-[#D946EF] font-bold bg-[#D946EF]/10 px-3 py-1 rounded-full" data-astro-cid-th33bxg4>System Sandbox v1.0</span> <h1 class="text-3xl font-black tracking-tight mt-4 uppercase" data-astro-cid-th33bxg4>Neon Hockey Arcade</h1> <p class="text-xs text-zinc-500 mt-2 tracking-wide" data-astro-cid-th33bxg4>Move your mouse or finger inside the bottom half of the board to control your glowing striker.</p> </div> <div class="flex flex-col md:flex-row gap-8 items-center justify-center w-full" data-astro-cid-th33bxg4> <div class="border border-zinc-900 bg-[#080808]/50 p-4 rounded-sm shadow-2xl backdrop-blur-md relative" data-astro-cid-th33bxg4> <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D946EF] to-transparent" data-astro-cid-th33bxg4></div> <canvas id="gameCanvas" width="400" height="600" class="bg-zinc-950 border border-zinc-900 rounded-sm cursor-none" data-astro-cid-th33bxg4></canvas> </div> <div class="w-full max-w-[280px] flex flex-col gap-4" data-astro-cid-th33bxg4> <div class="border border-zinc-900 bg-[#080808] p-5 rounded-sm relative overflow-hidden" data-astro-cid-th33bxg4> <h2 class="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-bold" data-astro-cid-th33bxg4>System Telemetry</h2> <div class="flex flex-col gap-3 font-mono text-xs" data-astro-cid-th33bxg4> <div class="flex justify-between items-center py-2 border-b border-zinc-900" data-astro-cid-th33bxg4> <span class="text-zinc-500" data-astro-cid-th33bxg4>AI Core Score:</span> <span id="aiScoreLabel" class="text-white font-bold text-sm" data-astro-cid-th33bxg4>0</span> </div> <div class="flex justify-between items-center py-2 border-b border-zinc-900" data-astro-cid-th33bxg4> <span class="text-zinc-500" data-astro-cid-th33bxg4>Player Score:</span> <span id="playerScoreLabel" class="text-[#D946EF] font-bold text-sm" data-astro-cid-th33bxg4>0</span> </div> <div class="flex justify-between items-center py-2" data-astro-cid-th33bxg4> <span class="text-zinc-500" data-astro-cid-th33bxg4>Render Pipeline:</span> <span class="text-emerald-400 text-[10px] uppercase tracking-wider font-sans font-bold bg-emerald-500/10 px-2 py-0.5 rounded-sm" data-astro-cid-th33bxg4>60 FPS Canvas</span> </div> </div> </div> <button id="resetGameBtn" class="w-full border border-zinc-900 bg-zinc-950 text-zinc-400 font-bold uppercase text-[10px] tracking-widest py-3.5 hover:bg-white hover:text-black hover:border-white transition-all rounded-sm" data-astro-cid-th33bxg4>
Reset Game Matrix
</button> </div> </div> </main> <footer class="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-8 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-zinc-600 border-t border-zinc-900/50" data-astro-cid-th33bxg4> <div data-astro-cid-th33bxg4>Engineered via Astro + HTML5 Canvas</div> <div data-astro-cid-th33bxg4>All Rights Reserved</div> </footer>  </body> </html>`;
}, "C:/Users/mo galal/my-electric-archive/src/pages/arcade.astro", void 0);

const $$file = "C:/Users/mo galal/my-electric-archive/src/pages/arcade.astro";
const $$url = "/arcade";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Arcade,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
