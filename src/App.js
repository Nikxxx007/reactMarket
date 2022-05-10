import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar';
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
        </Router>
    );
}

export default App;
