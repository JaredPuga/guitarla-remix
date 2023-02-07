import { useLoaderData } from "@remix-run/react";
import ListadoPost from "~/components/listado-post";
import { getPosts } from "~/models/post.server";

export function meta() {
  return {
    title: 'Guitar LA - Blog'
  }
}

export async function loader() {
  const posts = await getPosts();

  return posts.data
}

const Blog = () => {

  const posts = useLoaderData();

  return (
      <ListadoPost posts={posts} />
  )
}

export default Blog