import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
      static defaultProps = {
        country : 'in',
        pageSize : 8,
        category : 'general'
      }
      static propTypes = {
        country :  PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string
      }




    constructor(){
        super();
        this.state ={
            articles : [],
            loading:false,
            page: 1
        }
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=4a26b76228854ce994261ce9dfbbe0ca&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles : parsedData.articles,
           totalResults: parsedData.totalResults,
          loading:false})
    }

    previous = async()=>{
      console.log("previous page")
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=4a26b76228854ce994261ce9dfbbe0ca&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        page: this.state.page -1,
        articles : parsedData.articles,
        loading: false
      })   
    }
    next = async()=>{
      if (!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      console.log("next page")
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=4a26b76228854ce994261ce9dfbbe0ca&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        page: this.state.page +1,
        articles : parsedData.articles,
        loading:false
      })
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h1 style={{textAlign:'center', margin: '40px 0px'}}>DailyDose - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title?element.title:""} description={element.description?element.description:" "}  imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
            })}
            
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type='button' className="btn btn-dark" onClick={this.previous}> &larr; Previous</button>
            <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className="btn btn-dark"onClick={this.next}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
