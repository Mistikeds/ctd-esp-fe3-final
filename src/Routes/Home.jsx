import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'
import '../index.css'

const Home = () => {
  const { state } = useContextGlobal();
  
  return (
    <main className="">
      <h1>Inicio</h1>
      <div className='card-container'>
        <div className='card-grid'>
          {state.data.map(item => <Card key={item.id} item={item} />)}
        </div>
      </div>
    </main>
  )
}

export default Home