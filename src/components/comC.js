import React, { useContext } from 'react'
import { BioData } from './comA'

const ComC = () => {
    const context = useContext(BioData)
  return (
    <div>Hello {context}</div>
  )
}

export default ComC