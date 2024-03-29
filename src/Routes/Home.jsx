import React from 'react'
import { useContextGlobal } from '../Components/utils/global.context'
import '../index.css'

const Home = () => {
  const { state } = useContextGlobal();

  return (
  <main>
  <h1>inicio</h1>
  </main>
  )

}

export default Home