import ErrorCard from "components/ErrorCard/ErrorCard";
import { Component } from "react";
import { getNews } from "serveces/getNews";

const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved',
};

class ContentInfo  extends Component {
    state = {
        news: null,
       // isLoading: false,
        error: '',
        status: STATUS.IDLE
    }
    componentDidUpdate(prevProps, prevState) {
       // console.log(this.props)
        if (prevProps.searchText !== this.props.searchText) {
            this.setState({ status: STATUS.PENDING});
            getNews(this.props.searchText)
                .then((resp) => resp.json())//axios
                .then((data) => {
                    if (data.status === 'ok')
                        this.setState({ news: data.articles, status: STATUS.RESOLVED })
                    else return Promise.reject(data.message)
                })
                .catch((error) => {
                   this.setState({error, status: STATUS.REJECTED})
                })
              //  .finally(() => this.setState({ isLoading: false }))
        };
    };

    render() {
        const { news, error } = this.state;
        if (this.state.status === STATUS.PENDING) return (
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
        else if (this.state.status === STATUS.RESOLVED) return (
            <ul>
                {news.map(article => {
                    return <li key={article.url}>{article.title}</li>
                })}
            </ul>
        );
        else if (this.state.status === STATUS.REJECTED) return <ErrorCard>{error}</ErrorCard>
        // return (
        //     <>
        //         {error && <ErrorCard>{error}</ErrorCard>}
        //         {isLoading && (<div className="spinner-grow" role="status">
        //         <span className="visually-hidden">Loading...</span>
        //     </div>)}
        //         <ul>
        //             {news && news.map(article => {
        //                 return <li key={article.url}>{article.title}</li>
        //             })}
        //         </ul>
        //     </>
        // );   
    };
};

export default ContentInfo;