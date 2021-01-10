import './styles.css';
// eslint-disable-next-line
import { ReactComponent as Logo, ReactComponent } from './logo.svg';
import { Link } from 'react-router-dom';

function Navbar(){

    return (
        <nav className="main-navbar">
        <Logo />
        <Link to="/" className="logo-text">DS Food Delivery</Link>
        </nav>
    )
}

export default Navbar;