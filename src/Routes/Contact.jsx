import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className="contactCons">
     
      <h2>Quieres saber mas sobre nosotros?</h2>
 
      <p>Envianos tu consulta y te contactaremos lo antes posible.</p>
      <Form/>
    </div>
  )
}

export default Contact