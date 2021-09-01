import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super();
        this.state= {
            articles: []
        }
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=aa798d329d9e4cb28464cd4d462cdf94";
        let data= await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})
    }
    render() {
        
        return (
            <>
              <div className="row my-3 justify-content-center">
                  {this.state.articles.map((element)=>{
                      return(
                        <div className="col-md-4 col-sm-6" key={element.url}>
                            <NewsItem title={element.title.slice(0,51)} description={element.description.slice(0,65)} newsUrl={element.url} ImgUrl={element.urlToImage}/>
                        </div>
                      )
                  })}
                  
              </div>
            </>
        )
    }
}

export default News
