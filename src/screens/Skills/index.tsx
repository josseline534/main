import React from 'react'
import { FaLink } from 'react-icons/fa'

import { DATA_SKILLS } from './data'

import './styles.scss'

const Skills: React.FC = () => {
  return (
    <section id='skills' className="skillsContainer">
      <div className="content">
        <h2>Tecnologías & Experiencia</h2>
        <p className="subheading">
          Soy especialista en desarrollo de interfaces, frontend, backend,
          mobile, manejo y gestión de bases de datos.
        </p>
        <p className="description">
          Soy una entusiasta del aprendizaje continuo, siempre buscando
          incorporar las últimas prácticas y tecnologías para mantenerme
          actualizada en un campo tan dinámico como el desarrollo. Mi objetivo
          es contribuir al éxito de los proyectos mediante la aplicación de
          mejores prácticas de ingeniería y mi pasión por la innovación
          tecnológica.
        </p>
        <p className="linkedIn">
          Visite mi{' '}
          <strong>
            <a href="https://linkedin.com">
              LinkedIn <FaLink className="iconLink" />{' '}
            </a>
          </strong>{' '}
          para obtener más detalles
        </p>
        <div className="skillsIcons">
          {DATA_SKILLS.map((skill) => {
            const IconComponent = skill.icon
            return (
              <div key={skill.name}>
                <IconComponent className={`techLogo ${skill.classNameColor}`} />
                <p>{skill.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
