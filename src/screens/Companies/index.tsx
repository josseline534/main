import React from 'react'
import { DATA_COMPANIES } from './data'
import './styles.scss'

const Companies: React.FC = () => {
  return (
    <section id='companies' className="companiesContainer">
      <div className="contentTitle">
        <h2>Experiencia laboral</h2>
      </div>
      <div className="content">
        {DATA_COMPANIES.map((company) => (
          <a
            key={company.index}
            href={company.link}
            target="_blank"
            rel="noreferrer"
            className='contentCompany'
          >
            <img src={company.src} alt={company.index} />
            <h4>{company.name}</h4>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Companies
