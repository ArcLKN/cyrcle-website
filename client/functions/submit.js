export async function onRequestPost(context) {
  // Get form data from the request
  const data = await context.request.formData();

  // Add your secret key (stored in Cloudflare environment variables)
  data.append("access_key", context.env.VITE_WEB3FORMS_KEY);

  // Send the form to Web3Forms
  const response = await fetch('https://api.web3forms.com/submit', {
    method: "POST",
    headers: {
     'Content-Type': 'application/json',
   },
    body: JSON.stringify(data),
  });

  // Return the Web3Forms response
  return new Response(await response.text(), {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}
