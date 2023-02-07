import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/post.server";
import { formatearFecha } from "~/utils/helpers";

export async function loader({params}) {
    const { postsURL } = params
    const post = await getPost(postsURL);

    if (post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Post no encontrado'
        })
    }
    return post
}

export function meta({data}) {
    if (!data) {
        return {
            title: 'Post no encontrado',
            descripcion: `Posts, Post no encontrado`
        }
    }

    return {
        title: `Guitar LA - ${data.data[0].attributes.titulo}`,
        descripcion: `Posts, Post ${data.data[0].attributes.titulo}`
    }
}

const Post = () => {
    const post = useLoaderData();

    const {titulo, imagen,publishedAt, contenido} = post.data[0]?.attributes

  return (
    <article className="post mt-3">
        <img className="imagen"  src={imagen?.data.attributes.url} alt={`imagen blog ${titulo}`}/>
        <div className="contenido">
            <h3>{ titulo }</h3>
            <p className="fecha">{ formatearFecha(publishedAt) }</p>
            <p className="texto">{ contenido }</p>
        </div>
    </article>
  )
}

export default Post