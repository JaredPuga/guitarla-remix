import { useLoaderData } from '@remix-run/react'
import ListadoGuitarras from '~/components/listado-guitarras'
import ListadoPost from '~/components/listado-post'
import { getGuitarras } from '../models/guitarras.server'
import { getPosts } from '../models/post.server'
import stylesGuitarras from '../styles/guitarras.css'
import stylesPost from '../styles/blog.css'
import { getCurso } from '~/models/curso.server'
import Curso from '~/components/curso'
import stylesCurso from '../styles/curso.css'

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ])

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data,
  }
}

export function meta() {

}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras,
    },
    {
      rel: 'stylesheet',
      href: stylesPost,
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    },
  ]
}

const Index = () => {
  const {guitarras, posts, curso} = useLoaderData();

  return (
    <>
      <main className='contenedor'>
        <ListadoGuitarras guitarras={guitarras}/>
      </main>
      <Curso curso={curso}/>
      <section className='contenedor'>
        <ListadoPost posts={posts} />
      </section>
      
    </>
  )
}

export default Index
