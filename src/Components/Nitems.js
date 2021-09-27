import React, { Component } from "react";

export class Nitems extends Component {
  render() {
    let { title, description, img, nurl, date,author } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={!img ? "./not.jpg" : img}
            alt="Sorry! Image not available"
          />
          <div className="card-body">
            
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p
              className="card-text"
              style={{ color: "red", fontWeight: "bold" }}
            >
              Published on {new Date(date).toGMTString()}
            </p>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex: "1",left: "20%"}}>
              {author}
            </span>
            <a href={nurl} target="_blank" className="btn btn-success">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Nitems;
