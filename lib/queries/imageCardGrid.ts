export const ImageCardGridFragment = `
  ... on PageBuilderSectionsImageCardGridLayout {
    title
    subtitle
    cards {
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
          altText
        }
      }
    }
  }
`;
