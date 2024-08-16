// src/declarations.d.ts
declare module '*.svg' {
  import React from 'react'
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module '*.gif' {
  const value: string
  export default value
}

declare module '*.png' {
  const value: string
  export default value
}
declare module '*.jpeg' {
  const value: string
  export default value
}