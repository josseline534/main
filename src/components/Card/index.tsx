import React from 'react'
import { BsBriefcase } from 'react-icons/bs'
import { PiChartBarLight } from 'react-icons/pi'

import './styles.scss'
import { StackData } from './interface'

const Card: React.FC<StackData> = (props: StackData) => {
  const { icon, name, experience, level, classNameColor } = props
  const IconComponent = icon
  return (
    <div className='cardContainer' onClick={() => {console.log('HOLA')}}>
      <div className='contentImage'>
        <IconComponent className={`techLogo ${classNameColor}`} />
      </div>
      <h3>{name}</h3>
      <div className='details'>
        <div className='detailsContent'>
          <div className='iconContent'>
            <BsBriefcase />
          </div>
          <div>
            <p>Experiencia</p>
            <strong>{experience}</strong>
          </div>
        </div>

        <div className='detailsContent'>
          <div className='iconContent'>
            <PiChartBarLight />
          </div>
          <div>
            <p>Nivel</p>
            <strong>{level}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
