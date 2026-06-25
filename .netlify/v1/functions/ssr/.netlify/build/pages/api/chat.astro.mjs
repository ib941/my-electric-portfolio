export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const { query } = await request.json();
    if (!query) {
      return new Response(JSON.stringify({ error: "Query required" }), { status: 400 });
    }
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${"AQ.Ab8RN6IQnrgIqugC83Tz6PHxTQ2z97MiQpa_stompXw3iBiUIw"}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are Leo, the personal AI assistant embedded in Ibrahim's creative archive. 
Your tone is hyper-clean, minimal, and highly professional. Give direct technical outputs without conversational filler.

Core Knowledge Base:
- Identity: Ibrahim is a digital content creator, developer, and designer specializing in digital marketing, e-commerce operations, and automated multi-tier AI production pipelines.
- Portfolio Projects:
  1. Director App: A specialized cinematic design tool orchestrating multi-tier AI workflows for luxury campaigns.
  2. Fintech App: A micro-remittance engine built with reactive financial components.
  3. Experimental Interactive Core: High-performance front-end Sandboxes (the Arcade).
- Contact Info: If anyone asks how to contact Ibrahim or work with him, give them his professional contact number: +966 534657849.
- Call to Action: Heavily encourage users to actively interact with the dynamic tools on the site (like the Director and Fintech apps). If they want to explore his social channels, code repositories, or external platforms, explicitly direct them to check out the links listed on his "About" page.

When a user submits a query, analyze it against this framework and reply with direct technical accuracy. Current user query: ${query}`
          }]
        }]
      })
    });
    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "System structural loop error.";
    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
