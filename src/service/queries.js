export const getPostsQuery = extraFilter => {
  return /* groq */ `*[
    _type == "post" &&
    defined(slug.current) &&
    publishedAt < now()
    ${extraFilter ? `&& ${extraFilter}` : ''}
  ] | order(publishedAt desc)`;
}

export const getPortfoliosQuery = () => {
  return /* groq */ `*[_type == "work"]`;
}

export const getToolsQuery = () => {
  return /* groq */ `*[_type == "tool"]`;
}