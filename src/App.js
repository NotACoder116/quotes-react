import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/layout';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import QuoteDetail from './pages/QuoteDetail';
// import MainHeader from './components/MainHeader';
// import ProductDetail from './pages/ProductDetails';
// import Products from './pages/Products';
// import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Navigate to="/quotes"></Navigate>} />
          <Route path="/quotes" element={<AllQuotes />}></Route>
          <Route path="/quotes/:quoteId/*" element={<QuoteDetail />}></Route>
          <Route path="/new-quotes" element={<NewQuote />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
      {/* <MainHeader/>
      <main> 
        <Routes>
          <Route path="/" exact element={ <Navigate to="/welcome"></Navigate>} />
          <Route path="/welcome/*" element={<Welcome />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail/>} />
        </Routes>
      </main> */}
    </div>
  );
}

export default App;
