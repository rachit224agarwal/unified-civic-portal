import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, language } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = language === 'hi' 
      ? `आप एक सहायक सरकारी सेवा पोर्टल चैटबॉट हैं। आप नागरिकों को विभिन्न सरकारी सेवाओं के बारे में मदद करते हैं जैसे:
- बिल भुगतान (बिजली, पानी, गैस)
- दस्तावेज़ अनुरोध (जन्म प्रमाण पत्र, निवास प्रमाण पत्र, आदि)
- शिकायत दर्ज करना
- स्वास्थ्य सेवाएं
- संपत्ति रिकॉर्ड
- कर सेवाएं
- शिक्षा सेवाएं
- व्यवसाय लाइसेंस

हमेशा विनम्र, स्पष्ट और सहायक रहें। यदि आप किसी प्रश्न का उत्तर नहीं जानते हैं, तो उपयोगकर्ता को उचित सरकारी विभाग से संपर्क करने की सलाह दें।`
      : `You are a helpful government service portal chatbot. You assist citizens with various government services including:
- Bill Payments (electricity, water, gas)
- Document Requests (birth certificates, residence certificates, etc.)
- Grievance Filing
- Health Services
- Property Records
- Tax Services
- Education Services
- Business Licenses

Always be polite, clear, and helpful. If you don't know the answer to a question, advise the user to contact the appropriate government department.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required. Please add funds to continue." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
