import React, { Component } from 'react'

export class Newsitem extends Component {
    
  render() {
    let {title,description,imageUrl,newsUrl,author,date,sources} = this.props
    return (
      <div className='my-3'>
            <div className="card ">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'85%'}}>{sources}</span>
            <img src={!imageUrl?"https://images.deccanherald.com/deccanherald%2F2024-03%2Fe691af5e-ada1-42a3-aff6-0ef47fe599af%2F2023newsmlRC2R3Z9A5CAK2115118513.jpeg?rect=0%2C0%2C3500%2C1838&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop":imageUrl} className="card-img-top" alt="..." style={{height:'150px'}}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description} ...</p>
                <p class="card-text text-left"><small className="text-body-secondary">By <strong>{!author?"Unknown":author}</strong> on {new Date(date).toGMTString()}</small></p>
                <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default Newsitem
