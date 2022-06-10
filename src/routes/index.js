import {getPostsQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'

// Fetch all valid posts to display in the homepage
export async function get() {
  const data = await client.fetch(/* groq */ `{
		"posts": ${getPostsQuery()}
  }`)

  if (data) {
    return {
      status: 200,
      body: data
    }
  }

  return {
    status: 404
  }
}
