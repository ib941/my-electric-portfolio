import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { query } = await request.json();

    if (!query) {
      return new Response(JSON.stringify({ error: 'Query required' }), { status: 400 });
    }

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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

    console.log("Gemini raw response:", JSON.stringify(data, null, 2));

    let reply = "System structural loop error.";

    if (data?.candidates && data.candidates.length > 0) {
      const parts = data.candidates[0]?.content?.parts;
      if (parts && parts.length > 0) {
        reply = parts.map((p: any) => p.text || "").join(" ");
      }
    }

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.log("API Error:", error);
    return new Response(JSON.stringify({ error: 'Internal server error', details: String(error) }), { status: 500 });
  }
};