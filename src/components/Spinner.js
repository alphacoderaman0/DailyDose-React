import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="..." style={{width:'30rem' , height: '30rem'}} />
      </div>
    )
  }
}

export default Spinner
