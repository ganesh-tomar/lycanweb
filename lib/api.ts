/* eslint-disable @typescript-eslint/no-explicit-any */
export async function fetchAPI(query: string, { variables }: { variables?: any } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  
  const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

  console.log("fetchAPI called. WP_API_URL =", WP_API_URL);

  if (!WP_API_URL) {
    throw new Error("Missing NEXT_PUBLIC_WORDPRESS_API_URL environment variable");
  }

  try {
    const res = await fetch(WP_API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    console.log("fetchAPI response status =", res.status);
    const text = await res.text();
    
    let json;
    try {
      json = JSON.parse(text);
    } catch (parseError) {
      console.error("fetchAPI JSON parsing failed. Raw response snippet:", text.slice(0, 1000));
      throw parseError;
    }

    if (json.errors) {
      console.error("fetchAPI GraphQL errors:", json.errors);
      throw new Error('Failed to fetch API');
    }
    return json.data;
  } catch (error) {
    console.error("fetchAPI error caught:", error);
    throw error;
  }
}
