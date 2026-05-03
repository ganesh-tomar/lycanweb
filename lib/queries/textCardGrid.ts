export const TextCardGridFragment = `
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
`;
