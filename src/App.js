import './App.css';
import './index.css';

import {
    BrowserRouter as Router,
    Route, Routes,
} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import ProductPage from "./pages/ProductPage/ProductPage";
import ScrollToTop from "./Hooks/ScrollToTop/ScrollToTop";

const App = () => {

    return (
        <Router>
            <div className="container">
                <div className='header-container'>
                    <Header/>
                </div>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="*" element={<Home />} />
                </Routes>
                <div className='separator'/>
                <div className='default_wrapper'>
                    <Footer/>
                </div>
            </div>
        </Router>
    );
}

export default App;
