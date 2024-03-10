import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="..." style={{width:'2rem' , height: '2rem'}} />
      </div>
    )
  }
}

export default Spinner
