export async function onRequestPost(context) {
  const data = await context.request.formData();

  const dataToSend = new FormData();
  dataToSend.append("access_key", "YOUR_KEY_HERE");
  dataToSend.append("name", data.get("nom"));
  dataToSend.append("email", data.get("email"));
  dataToSend.append("message", data.get("message"));
  dataToSend.append("subject", data.get("objet") || `${data.get("nom")} sent a message`);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: dataToSend,
  });

  const result = await response.json();

  return new Response(JSON.stringify(result), {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}
