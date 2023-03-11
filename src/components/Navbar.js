import { Link } from 'react-router-dom';
import { GoPerson } from 'react-icons/go';

export default function Navbar() {
  return (
    <>
      <div className="app">

        <nav>
          <ul className="navContainer">
            <li className="navHeader">
              <h1>Bookstore CMS</h1>
            </li>
            <li>
              <Link className="navBooks" to="/">Books</Link>
            </li>
            <li>
              <Link className="navCategories" to="/categories">Categories</Link>
            </li>
            <li className="icon-container">
              <GoPerson className="mask-icon" />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
