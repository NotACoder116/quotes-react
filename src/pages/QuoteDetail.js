import { Fragment, useEffect } from "react";
import { Route, Routes, useParams } from "react-router";
import { Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

// const DUMMY_QUOTES = [
//     { id: 'q1', author: 'Yadwinder', text: 'Learning React is fun!' },
//     { id: 'q2', author: 'Yadwinder Singh', text: 'Learning React is fun!' }
// ];
const QuoteDetail = () => {
    const params = useParams(); 
    // const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    const { quoteId } = params;
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
       return (
           <div className='entered'>
               <LoadingSpinner />
           </div>
       );
    }

    if (error) {
        return <p className='centered'>{error}</p>
    }

    if (!loadedQuote.text) {
        return <p>No Quotes Found!</p>;
    }
    return <Fragment>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
        <div className="centered">
            <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
        </div>
        <Routes>
            <Route path={`/comments`} element={<Comments />}></Route>
        </Routes>
    </Fragment>
};

export default QuoteDetail;