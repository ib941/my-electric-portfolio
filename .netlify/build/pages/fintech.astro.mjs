/* empty css                                 */
import { c as createComponent, d as renderHead, r as renderTemplate, b as createAstro } from '../chunks/astro/server_BDkRyfZ9.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Fintech = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Fintech;
  return renderTemplate`<html lang="en" data-astro-cid-obni4hbl> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>BABB CORE UTILITY | INTERACTIVE FLOW</title>${renderHead()}</head> <body class="text-white min-h-screen flex flex-col font-sans antialiased" data-astro-cid-obni4hbl> <div class="w-full h-[1px] bg-zinc-900" data-astro-cid-obni4hbl></div> <header class="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-6 flex justify-between items-center border-b border-zinc-900" data-astro-cid-obni4hbl> <div class="text-xs uppercase tracking-[0.3em] font-medium text-zinc-400" data-astro-cid-obni4hbl>
Fintech Product Simulation <span class="text-zinc-600" data-astro-cid-obni4hbl>©2026</span> </div> <div class="text-sm font-bold tracking-[0.4em] text-white" data-astro-cid-obni4hbl>
IBRAHIM | LABS
</div> <nav class="flex gap-8 text-xs uppercase tracking-[0.3em] text-zinc-400" data-astro-cid-obni4hbl> <a href="/" class="hover:text-[#D946EF] transition-colors" data-astro-cid-obni4hbl>Home</a> <a href="/director" class="hover:text-[#D946EF] transition-colors" data-astro-cid-obni4hbl>Director App</a> <a href="/fintech" class="hover:text-[#D946EF] transition-colors" data-astro-cid-obni4hbl>Fintech App</a> <a href="/arcade" class="hover:text-[#D946EF] transition-colors" data-astro-cid-obni4hbl>Arcade</a> <a href="/about" class="hover:text-[#D946EF] transition-colors" data-astro-cid-obni4hbl>About</a> </nav> </header> <main class="w-full max-w-[1200px] mx-auto px-6 py-16 flex-grow flex flex-col items-center justify-center" data-astro-cid-obni4hbl> <div class="text-center mb-10 max-w-md" data-astro-cid-obni4hbl> <span class="text-[10px] uppercase tracking-[0.3em] text-green-400 font-bold bg-green-500/10 px-3 py-1 rounded-full" data-astro-cid-obni4hbl>Babb Ecosystem Core Study</span> <h1 class="text-3xl font-black tracking-tight mt-4 uppercase" data-astro-cid-obni4hbl>Micro-Remittance Engine</h1> <p class="text-xs text-zinc-500 mt-2 tracking-wide" data-astro-cid-obni4hbl>A high-fidelity client-side user flow mapping deterministic exchange math and dynamic transaction data models.</p> </div> <div class="w-full max-w-md border border-zinc-900 bg-[#080808]/80 backdrop-blur-md p-6 rounded-sm relative overflow-hidden" data-astro-cid-obni4hbl> <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-400 to-transparent" data-astro-cid-obni4hbl></div> <div class="mb-4 bg-zinc-950 p-4 border border-zinc-900 rounded-sm" data-astro-cid-obni4hbl> <div class="flex justify-between items-center mb-2" data-astro-cid-obni4hbl> <span class="text-[10px] uppercase tracking-wider text-zinc-500" data-astro-cid-obni4hbl>You Send</span> <span class="text-xs font-mono font-bold text-zinc-400" data-astro-cid-obni4hbl>GBP (£)</span> </div> <input type="number" id="sendAmount" value="1000" class="w-full bg-transparent text-2xl font-mono text-white focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" data-astro-cid-obni4hbl> </div> <div class="px-2 py-3 flex flex-col gap-2.5 border-l border-zinc-800 ml-6 my-2 text-xs" data-astro-cid-obni4hbl> <div class="flex justify-between text-zinc-500" data-astro-cid-obni4hbl> <span data-astro-cid-obni4hbl>Babb Network Fee (0.5%):</span> <span id="feeLabel" class="font-mono text-zinc-300" data-astro-cid-obni4hbl>£5.00</span> </div> <div class="flex justify-between text-zinc-500" data-astro-cid-obni4hbl> <span data-astro-cid-obni4hbl>Amount to Convert:</span> <span id="convertLabel" class="font-mono text-zinc-300" data-astro-cid-obni4hbl>£995.00</span> </div> <div class="flex justify-between text-zinc-400 font-medium" data-astro-cid-obni4hbl> <span data-astro-cid-obni4hbl>Guaranteed Rate:</span> <span id="rateLabel" class="font-mono text-green-400" data-astro-cid-obni4hbl>1 GBP = 4.75 SAR</span> </div> </div> <div class="mb-6" data-astro-cid-obni4hbl> <label class="block text-[10px] uppercase tracking-wider text-zinc-500 mb-2" data-astro-cid-obni4hbl>Destination Currency</label> <select id="targetCurrency" class="w-full bg-[#0d0d0d] border border-zinc-800 text-zinc-300 px-4 py-3 text-sm rounded-sm focus:border-green-400 focus:outline-none transition-colors" data-astro-cid-obni4hbl> <option value="SAR" data-astro-cid-obni4hbl>Saudi Riyal (SAR / ﷼)</option> <option value="USD" data-astro-cid-obni4hbl>US Dollar (USD / $)</option> </select> </div> <div class="bg-zinc-900/40 p-4 border border-zinc-900 rounded-sm mb-6" data-astro-cid-obni4hbl> <div class="flex justify-between items-center mb-2" data-astro-cid-obni4hbl> <span class="text-[10px] uppercase tracking-wider text-zinc-500" data-astro-cid-obni4hbl>Recipient Receives</span> <span id="currencyBadge" class="text-xs font-mono font-bold text-green-400" data-astro-cid-obni4hbl>SAR (﷼)</span> </div> <div id="receiveAmount" class="text-2xl font-mono text-white font-bold" data-astro-cid-obni4hbl>4,726.25</div> </div> <button id="transferBtn" class="w-full bg-white text-black font-bold uppercase text-xs tracking-widest py-4 hover:bg-green-400 hover:text-black transition-all rounded-sm" data-astro-cid-obni4hbl>
Execute Protocol
</button> </div> </main> <footer class="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-8 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-zinc-600 border-t border-zinc-900/50 mt-12" data-astro-cid-obni4hbl> <div data-astro-cid-obni4hbl>Built with Astro Framework</div> <div data-astro-cid-obni4hbl>All Rights Reserved</div> </footer>  </body> </html>`;
}, "C:/Users/mo galal/my-electric-archive/src/pages/fintech.astro", void 0);

const $$file = "C:/Users/mo galal/my-electric-archive/src/pages/fintech.astro";
const $$url = "/fintech";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Fintech,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
