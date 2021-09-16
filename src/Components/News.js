import React, { Component } from "react";
import Nitems from "./Nitems";

export class News extends Component {
  
  constructor() {
    super();
    console.log("Hii this is a constructor");
    this.state = {
      articles: [],
      loading: false
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=c7908fc25bbc49589fcaedcedfb2e114";
      
    let data = await fetch(url);
    let parsedata = await data.json()
    console.log(parsedata)
    this.setState({articles: parsedata.articles});
  }
  render() {
    return (
      <div className="container ">
        <h3 className="my-3">Top Headlines 💥</h3>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Nitems
                  title={element.title.slice(0, 50)}
                  description={element.description}
                  img={element.urlToImage}
                  nurl={element.url}
                ></Nitems>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
