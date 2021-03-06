import React, { Component } from "react";
import Nitems from "./Nitems";
import Loading from "./Loading";
import './Font.css'
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    country: "in",
    category: "general"
  }
  static propTypes={
    country: PropTypes.string,
    category: PropTypes.string
  }
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
    this.props.setProgress(10)
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7908fc25bbc49589fcaedcedfb2e114&pagesize=12`;
    this.setState({loading: true})
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedata = await data.json();
    this.props.setProgress(70)
    this.setState({
      articles: parsedata.articles,
      totalarticles: parsedata.totalResults,
      loading: false
    });
    this.props.setProgress(100)
  }
  previouspage = async () => {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}$apiKey=c7908fc25bbc49589fcaedcedfb2e114&page=${
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
    this.props.setProgress(100)
  };
  
  nextpage = async () => {
    this.props.setProgress(10)
    if (this.state.page + 1 > Math.ceil(this.state.totalarticles / 12)) {
      
    } 
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7908fc25bbc49589fcaedcedfb2e114&page=${
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
      this.props.setProgress(100)
    }
  };
  render() {
    return (
      <div className="container ">
        <h3 className="my-3" className="text-center" style={{margin: "18px 0px", fontFamily:" Permanent Marker", fontSize: "45px", marginTop: "60px"}}>Top Headlines ????</h3>
        {this.state.loading && <Loading/>}
        <div className="row">
          {!this.state.loading && this.state.articles && this.state.articles.map((element) => {
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
                  date={element.publishedAt}
                  author={element.source.name}
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
            style={{marginBottom: "55px"}}
          >
            ???? Previous
          </button>
          <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalarticles / 12))} type="button" class="btn btn-danger" onClick={this.nextpage} style={{marginBottom: "55px"}}>
            Next ????
          </button>
        </div>
      </div>
    );
  }
}

export default News;
