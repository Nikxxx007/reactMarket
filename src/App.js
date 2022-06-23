import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './pages/HomePage/Home'

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/'/>
                <Route path='/'/>
                <Route path='/'/>
                <Route path='/'/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
