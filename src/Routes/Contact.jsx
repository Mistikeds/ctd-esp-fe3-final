import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className="contactCons">
      <h2>Want to know more?</h2>
      <h2>Quieres saber mas sobre nosotros?</h2>
      <p>Send us your questions and we will contact you</p>
      <p>Envianos tu consulta y te contactaremos lo antes posible.</p>
      <Form/>
    </div>
  )
}

export default Contact