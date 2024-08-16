import { SiExpress } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiNodedotjs } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'




import { StackData } from '../../components/Card/interface'

export const DATA_STACK: StackData[] = [
  {
    icon: SiMongodb,
    name: 'MONGO DB',
    experience: '4 años',
    level: 'Intermedio',
    classNameColor: 'greenDark'
  },
  {
    icon: SiExpress,
    name: 'EXPRESS',
    experience: '4 años',
    level: 'Avanzado',
    classNameColor: 'black'
  },
  {
    icon: SiReact,
    name: 'REACT',
    experience: '4 años',
    level: 'Intermedio',
    classNameColor: 'lightBlue'
  },
  {
    icon: SiNodedotjs,
    name: 'NODE.JS',
    experience: '4 años',
    level: 'Avanzado',
    classNameColor: 'greenLight'
  },
  {
    icon: SiJavascript,
    name: 'JAVASCRIPT',
    experience: '5 años',
    level: 'Avanzado',
    classNameColor: 'yellow'
  },
  {
    icon: SiTypescript,
    name: 'TYPESCRIPT',
    experience: '3 años',
    level: 'Avanzado',
    classNameColor: 'lightBlue'
  }
]