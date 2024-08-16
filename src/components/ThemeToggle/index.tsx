// src/ThemeToggle.tsx
import React, { useState, useEffect } from 'react'
import { ReactComponent as DarkModeIcon } from '../../assets/icons/dark_mode.svg'
import { ReactComponent as LightModeIcon } from '../../assets/icons/light_mode.svg'

import './styles.scss'
import './theme.scss'

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode'
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <div>
      <button className={'buttonMode'} onClick={toggleTheme}>
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </div>
  )
}

export default ThemeToggle
