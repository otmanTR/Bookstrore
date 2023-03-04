import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="app">
        <h1>Bookstore</h1>
        <nav>
          <ul className="navContainer">
            <li className="navItems">
              <Link to="/">Books</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
