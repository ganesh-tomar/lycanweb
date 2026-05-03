export const TextCardGridFragment = `
  ... on PageBuilderSectionsTextCardGridLayout {
    title
    subtitle
    cards {
      cardTitle
      description
      linkText
      linkUrl
      tag
    }
  }
`;
