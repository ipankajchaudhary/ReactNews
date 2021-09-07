import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    static defaultProps = {
        country: 'in',
        category:'general'
    }

    static propTypes = {
        country: PropTypes.string,
        category:PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loading: false
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=e3ab2aa59b534e6486ad431ff0a99f9b&page=1&pageSize=21&category=${this.props.category}`;
        this.setState({ loading : true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults : parsedData.totalResults,
            loading : false

        })
    }

    fetchMoreData = async() => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=e3ab2aa59b534e6486ad431ff0a99f9b&page=1&pageSize=21&category=${this.props.category}`;
        this.setState({ loading : true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults : parsedData.totalResults,
            loading : false
        })
    }


    render() {
        return (
            <div className="container my-3">
                <h4 className="text-center" style={{marginTop: '65px'}}>Made with &#10084;&#65039; and &lt;/code&gt; by Pankaj Chaudhary</h4>
                <h2 className="text-center">TOP HEADLINES</h2>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={<h4>{<Spinner />}</h4>}
                >
                <div className="row mx-2">
                    {this.state.articles.map((element) => {
                            return <div className="col-md-4" key = {element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })} 
                </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default News
