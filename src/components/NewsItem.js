import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,description,newsUrl,ImgUrl}=this.props;
    return (
      <>
        <div className="card" style={{margin:'10px'}}>
          <img src={ImgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">{description}....
            </p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
