import { Button } from 'reactstrap'
import React from 'react'
// import './ButtonsGradient.scss'
// import 'bootstrap/dist/css/bootstrap.min.css'

const GradientButtons = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button color='gradient-primary' style={{ background: 'yellow' }}>
        Primary
      </Button>
      <Button color='gradient-secondary'>Secondary</Button>
      <Button color='gradient-success'>Success</Button>
      <Button color='danger'>Danger</Button>
      <Button color='gradient-warning'>Warning</Button>
      <Button color='gradient-info'>Info</Button>
      <Button color='gradient-dark'>Dark</Button>
    </div>
  )
}
export default GradientButtons
