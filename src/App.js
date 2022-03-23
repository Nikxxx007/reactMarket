import './App.css';
import Navbar from './components/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact />
                <Route path='/'/>
                <Route path='/'/>
                <Route path='/'/>
            </Routes>
        </Router>
    );
}

export default App;
