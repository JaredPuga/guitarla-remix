import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta() {
  return {
    title: 'Guitar LA - Nosotros',
    description: 'Venta de guitarras, blog de música y más'
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    }
  ]
}

const Nosotros = () => {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img  src={imagen} alt='contenido imagen' />
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut lobortis mauris, et interdum ex. Quisque magna sapien, 
          cursus id sem vitae, malesuada elementum magna. Donec eu elementum est, id gravida sapien. Phasellus viverra eleifend erat 
          fermentum aliquam. Curabitur feugiat ut ipsum tincidunt fermentum. Sed ut diam vel sem fringilla tincidunt. Sed sit amet euismod purus, 
          et ultricies felis.
          </p>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut lobortis mauris, et interdum ex. Quisque magna sapien, 
          cursus id sem vitae, malesuada elementum magna. Donec eu elementum est, id gravida sapien. Phasellus viverra eleifend erat 
          fermentum aliquam. Curabitur feugiat ut ipsum tincidunt fermentum. Sed ut diam vel sem fringilla tincidunt. Sed sit amet euismod purus, 
          et ultricies felis.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros