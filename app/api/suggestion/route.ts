export async function GET(request: Request) {
  // hit azure endpoint w/ this response
  const response = await fetch("...", {
    cache: "no-store",
  });

  const data = await response.text();

  return new Response(JSON.stringify(data.trim()), {
    status: 200,
  });
}
