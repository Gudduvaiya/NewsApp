import React, { Component } from "react";

export class Nitems extends Component {
  render() {
      let {title,description,img,nurl}= this.props
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={!img?"./not.jpg":img} alt="Sorry! Image not available"/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
            {description}...
            </p>
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
