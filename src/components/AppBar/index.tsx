import React from 'react'
import ThemeToggle from '../ThemeToggle'
import myLogo from '../../assets/img/myLogo.png'
import './styles.scss'

const AppBar: React.FC = () => {
  //const [showMobileNav, _setShowMobileNav] = useState<boolean>(false);

  return (
    <header className={'appHeader'}>
      <a href='#home' className='logo'>
        <img src={myLogo} alt={'Josseline Sánchez'} />
        <div>Joss Sánchez</div>
      </a>
      <nav className='nav'>
        <a href='#aboutMe'>
          Acerca de mí...
        </a>
        <a href='#mainStack'>
          Stack
        </a>
        <a href='#skills'>
          Tecnologías
        </a>
        <a href='#companies'>
          Empresas
        </a>
        <a href='#contactForm'>
          Contactos
        </a>
      </nav>
      <ThemeToggle />
    </header>
  )
}

export default AppBar
