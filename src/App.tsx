import React from 'react'
import AppBar from './components/AppBar'
import Home from './screens/Home'
import AboutMe from './screens/AboutMe'
import MainStack from './screens/MainStack'
import Skills from './screens/Skills'
import ContactForm from './screens/ContactForm'
import Companies from './screens/Companies'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar/>
        <Home/>
        <AboutMe/>
        <MainStack/>
        <Skills/>
        <Companies/>
        <ContactForm/>
      </header>
    </div>
  )
}

export default App
