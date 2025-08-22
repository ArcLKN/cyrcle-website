export async function onRequestPost(context) {
  const data = await context.request.formData();
  data.append("access_key", context.env.VITE_WEB3FORMS_KEY);

  let result;
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    // Try parsing JSON, fallback to text
    try {
      result = await response.json();
    } catch {
      const text = await response.text();
      result = { success: false, message: text };
    }

    return new Response(JSON.stringify(result), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    console.error("Fetch error:", err);
    return new Response(JSON.stringify({
      success: false,
      message: "Could not reach Web3Forms"
    }), {
      headers: { "Content-Type": "application/json" },
      status: 500
    });
  }
}
