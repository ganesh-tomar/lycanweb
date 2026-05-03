export const ImageCardGridFragment = `
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
`;
