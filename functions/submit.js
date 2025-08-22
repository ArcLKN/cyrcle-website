export async function onRequestPost(context) {
  // Extract form data
  const data = await context.request.formData();

  // Add your secret key from environment variables
  data.append("access_key", "1e4dc2df-1659-4610-9c21-63cb83781d2a");
  console.log("Key:", data);

  const dataToSend = new FormData();
dataToSend.append("access_key", "1e4dc2df-1659-4610-9c21-63cb83781d2a");
dataToSend.append("name", data.nom);
dataToSend.append("email", data.email);
dataToSend.append("message", data.message);
dataToSend.append("subject", data.objet || `${data.nom} sent a message`);

  // Forward the request to Web3Forms
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: dataToSend,
  });

  // Parse JSON from Web3Forms
  const result = await response.json();

  // Return JSON to your frontend
  return new Response(JSON.stringify(result), {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}
