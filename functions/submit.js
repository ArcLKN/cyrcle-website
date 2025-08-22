export async function onRequestPost(context) {
  const data = await context.request.formData();

  const dataToSend = new FormData();
  dataToSend.append("access_key", "1e4dc2df-1659-4610-9c21-63cb83781d2a");
  dataToSend.append("name", "test 1");
  dataToSend.append("email", "raphaelgreiner0@gmail.com");
  dataToSend.append("message", "test 2");
  dataToSend.append("subject", "test 3");

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
