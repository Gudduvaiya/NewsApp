import React, { Component } from "react";
import Nitems from "./Nitems";
import Loading from "./Loading";
export class News extends Component {
  constructor() {
    super();
    console.log("Hii this is a constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=c7908fc25bbc49589fcaedcedfb2e114&pagesize=12";
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      totalarticles: parsedata.totalResults,
      loading: false
    });
  }
  previouspage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c7908fc25bbc49589fcaedcedfb2e114&page=${
      this.state.page - 1
    }&pagesize=12`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      page: this.state.page - 1,
      articles: parsedata.articles,
      loading: false
    });
  };
  
  nextpage = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalarticles / 12)) {
      
    } 
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c7908fc25bbc49589fcaedcedfb2e114&page=${
        this.state.page + 1
      }&pagesize=12`;
      
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedata = await data.json();
      console.log(parsedata);
      this.setState({
        page: this.state.page + 1,
        articles: parsedata.articles,
        loading: false
      });
    }
  };
  render() {
    return (
      <div className="container ">
        <h3 className="my-3" className="text-center" style={{margin: "18px 0px", fontFamily:"'Gluten', cursive;"}}>Top Headlines 💥</h3>
        {this.state.loading && <Loading/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Nitems
                  title={element.title.slice(0, 50)}
                  description={
                    element.description
                      ? element.description.slice(0, 45)
                      : "Description is not available. The ADP"
                  }
                  img={element.urlToImage}
                  nurl={element.url}
                ></Nitems>
              </div>
            );
          })}
        </div>
        <div class="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-danger"
            onClick={this.previouspage}
          >
            👈 Previous
          </button>
          <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalarticles / 12))} type="button" class="btn btn-danger" onClick={this.nextpage}>
            Next 👉
          </button>
        </div>
      </div>
    );
  }
}

export default News;
