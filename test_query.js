const WP_API_URL = "https://dev-lycanweb.pantheonsite.io/graphql";

const query = `
query HomePageQuery {
  page(id: "home", idType: URI) {
    pageBuilder {
      sections {
        __typename
        ... on PageBuilderSectionsHeroBannerLayout {
          subtitle
          title
          buttons {
            button {
              buttonStyle
              buttonText
              url
            }
          }
        }
        ... on PageBuilderSectionsCtaLayout {
          title
          subtitle
          button {
            buttonStyle
            buttonText
            url
          }
        }
        ... on PageBuilderSectionsTextCardGridLayout {
          title
          subtitle
          textCards {
            cardTitle
            linkText
            linkUrl
            subheading
            type
          }
        }
        ... on PageBuilderSectionsImageCardGridLayout {
          title
          subtitle
          imageCards {
            cardSubtitle
            cardTitle
            linkText
            linkUrl
            categories {
              tag
            }
            cardImage {
              node {
                sourceUrl
              }
            }
          }
        }
        ... on PageBuilderSectionsStatsLayout {
          subtitle
          title
          statBlocks {
            statLabel
            statValue
            description
          }
        }
        ... on PageBuilderSectionsTestimonialsliderLayout {
          testimonials {
            quote
            author
            role
          }
        }
      }
    }
  }
  generalSettings {
    title
    description
  }
  posts(first: 3) {
    nodes {
      id
      title
      excerpt
      tags {
        nodes {
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
    console.log("Status Code:", res.status);
    console.log("Headers:", Object.fromEntries(res.headers.entries()));
    const text = await res.text();
    console.log("Response text snippet (first 1000 chars):");
    console.log(text.slice(0, 1000));
  } catch (err) {
    console.error("Fetch Error:", err);
  }
}

test();
