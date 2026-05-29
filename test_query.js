const WP_API_URL = "https://dev-lycanweb.pantheonsite.io/graphql";

const query = `
query TestBlogQueries {
  posts(first: 5) {
    nodes {
      id
      title
      slug
      excerpt
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      tags {
        nodes {
          name
        }
      }
      author {
        node {
          name
        }
      }
    }
  }
}
`;

async function test() {
  const headers = { "Content-Type": "application/json" };
  try {
    const res = await fetch(WP_API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    console.log("Response data:", JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Fetch Error:", err);
  }
}

test();
