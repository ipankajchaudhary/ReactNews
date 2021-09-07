import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl,newsUrl,author,date,source} = this.props;

    return (
      <div className= "my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} <br /> <span class="badge bg-danger my-2">{source}</span></h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small class="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString().replace('GMT','')}</small></p>
            <Link target = "_blank"  to={newsUrl} className="btn btm-sm btn-primary">
             Read More....
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
