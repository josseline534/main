import React from 'react'
import { SiAboutdotme } from 'react-icons/si'
import { GoStack } from 'react-icons/go'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { IoBusinessOutline } from 'react-icons/io5'
import { MdOutlineContactMail } from 'react-icons/md'

import ThemeToggle from '../ThemeToggle'
import myLogo from '../../assets/img/myLogo.png'

import './styles.scss'

const AppBar: React.FC = () => {
  //const [showMobileNav, _setShowMobileNav] = useState<boolean>(false);

  return (
    <header className={'appHeader'}>
      <a href="#home" className="logo">
        <img src={myLogo} alt={'Josseline Sánchez'} />
        <div>Joss Sánchez</div>
      </a>
      <nav className="nav">
        <a href="#aboutMe">Acerca de mí...</a>
        <a href="#mainStack">Stack</a>
        <a href="#skills">Tecnologías</a>
        <a href="#companies">Empresas</a>
        <a href="#contactForm">Contactos</a>
      </nav>
      <nav className="navMobile">
        <a href="#aboutMe"><SiAboutdotme className='icon'/></a>
        <a href="#mainStack"><GoStack className='icon'/></a>
        <a href="#skills"><HiOutlineDesktopComputer className='icon'/></a>
        <a href="#companies"><IoBusinessOutline className='icon'/></a>
        <a href="#contactForm"><MdOutlineContactMail className='icon'/></a>
      </nav>
      <ThemeToggle />
    </header>
  )
}

export default AppBar
