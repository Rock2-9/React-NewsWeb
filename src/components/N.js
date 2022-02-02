import React, { Component } from "react";
import NI from "./NI";
import PropTypes from "prop-types";

export class N extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  // static propTypes = {
  //   country: propTypes.string,
  //   pageSize: propTypes.number,
  // category: propTypes.string
  // };

  constructor(props) {
    super(props);
    console.log("I am a Constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a1f5a0c61e424ba58bcf816168d15677&page=${this.state.page}&pageSize=6`;
    this.setState({ loading: true });

    let data = await fetch(url);

    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }
  handleOnPrevious = async () => {
    console.log("previous");

    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  handleOnNext = async () => {
    console.log("Next");
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1>News-Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NI
                  title={element.title}
                  description={`${element.description}.....`}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          <div className="button d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handleOnPrevious}
            >
              &laquo; Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleOnNext}
            >
              Next &raquo;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default N;
