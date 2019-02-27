import React from 'react'
import PropTypes from 'prop-types'

import './ModalCapital.css'

const ModalCapital = (props) => props.visible && (
  <section className='ModalCapital'>
    <div className="wrapper">
    <header>
      <h2>{props.climate.capital}</h2>
      <button onClick={props.onmodal}>cerrar</button>
    </header>
    <div className="modal-body">
      <h3>{props.climate.temperature} <small>temperatura</small></h3>
      <hr/>
      <dl>
        <dt>Humedad:</dt>
        <dd>{props.climate.humidity}</dd>
        <dt>Viento:</dt>
        <dd>{props.climate.windSpeed}</dd>
      </dl>
      <hr/>
      <h3>{props.climate.summary} <small>estado</small></h3>
    </div>
    </div>
  </section>
)

ModalCapital.propTypes = {
  visible: PropTypes.bool
}
export default ModalCapital
