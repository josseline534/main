import React from 'react'
import { MdOutlineLocalPhone } from 'react-icons/md'

import './styles.scss'
import { DATA_SOCIAL_CONTACT } from '../../screens/AboutMe/data'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerSection about">
          <h3 className="footerLogo">Joss Sánchez</h3>
          <p>
            Desarrolladora web apasionada por crear aplicaciones modernas y
            eficientes.
          </p>
          <ul>
            <li>josselinesanchezb@gmail.com</li>
            <li className="tel">
              <MdOutlineLocalPhone /> +593992369438
            </li>
          </ul>
          <div className="footerSocials">
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

      <div className="footerBottom">
        <p>
          &copy; {new Date().getFullYear()} Joss Code. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
