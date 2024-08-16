import React from 'react'
import { VscComment } from 'react-icons/vsc'
import { DATA_SOCIAL_CONTACT } from './data'
import profileImage from '../../assets/img/profile.png'
import './styles.scss'
import { goSection } from '../../utils/goSection'

const AboutMe: React.FC = () => {
  return (
    <section id="aboutMe" className="aboutMeContainer">
      <div className="content">
        <h2>Acerca de mí...</h2>
        <p>Hola! 👋</p>
        <p>
          Mi nombre es <strong>Josseline Sánchez</strong>. Soy Ingeniera en
          Sistemas especializada como Full Stack Developer!
        </p>
        <p>
          Tengo más de 4 años de experiencia en el{' '}
          <strong>desarrollo, mantenimiento</strong> y aseguramiento de{' '}
          <strong>calidad</strong> en todas las fases del ciclo de vida del{' '}
          <strong>software</strong>. Me especializo en la creación y despliegue
          de servicios <strong>backend</strong> y aplicaciones{' '}
          <strong>frontend y mobile</strong>.
        </p>
        <p>
          Me encanta convertir ideas en realidad y asegurarme de que todo
          funcione a la perfección. Además cuento con destrezas en herramientas
          de{' '}
          <strong>
            visualización de datos, gestión de proyectos, trabajo en equipo y
            resolución de problemas complejos
          </strong>
          , siempre enfocada en la mejora continua, la excelencia técnica y en
          entregar un trabajo de <strong>alta calidad</strong> que satisfaga sus
          necesidades.
        </p>
        <p>
          ¡Trabajemos en <strong>equipo</strong> y hagamos realidad algo{' '}
          <strong>extraordinario</strong>!
        </p>
        <div className="divider"></div>
        <div className="contact">
          <button className="btnLine" onClick={() => goSection('contactForm')}>
            <VscComment className="btnIcon" /> Contáctame
          </button>
          <div className="socialIcons">
            {DATA_SOCIAL_CONTACT.map((socialContact) => (
              <a
                key={socialContact.index}
                href={socialContact.link}
                target="_blank"
                rel="noreferrer"
              >
                <socialContact.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <div className="borderBehind"></div>
        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  )
}

export default AboutMe
