import React from 'react'
import robotGif from '../../assets/gif/home.gif'
import { goSection } from '../../utils/goSection'
import './styles.scss'

const Home: React.FC = () => {
  return (
    <section id="home" className="homeContainer">
      <div className="content">
        <div className="badge">Soluciones innovadoras</div>
        <h1>Full Stack Developer</h1>
        <h3>
          Desarrollo, mantenimiento de soluciones innovadoras garantizando la
          calidad y mejora continua
        </h3>
        <p>
          Creación y desarrollo de soluciones tecnológicas innovadoras, con el
          propósito de optimizar operaciones, generar resultados excepcionales y
          brindar experiencias digitales cautivadoras.
        </p>
        <div className="buttons">
          <button className="btn" onClick={() => goSection('contactForm')}>
            Contrátame
          </button>
          {/* <button className='btn btnOutLine'>Proyectos</button> */}
        </div>
      </div>
      <div className="imageContainer">
        <img src={robotGif} alt="Animated Robot" />
      </div>
    </section>
  )
}

export default Home
