export async function onRequestPost(context) {
  // Extract form data
  const data = await context.request.formData();

  // Add your secret key from environment variables
  data.append("access_key", context.env.VITE_WEB3FORMS_KEY);

  // Forward the request to Web3Forms
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: data,
  });

  // Parse JSON from Web3Forms
  const result = await response.json();

  // Return JSON to your frontend
  return new Response(JSON.stringify(result), {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}
