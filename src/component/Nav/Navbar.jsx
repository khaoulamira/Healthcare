// src/Navbar.jsx
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FaSearch } from 'react-icons/fa'; // For the search icon
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false); // Navbar toggle state
  const [showSearch, setShowSearch] = useState(false); // Search input toggle state

  const toggleNavbar = () => setIsExpanded(!isExpanded);
  const toggleSearch = () => setShowSearch(!showSearch);

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#EBF3E8' }}>
      {/* Circular Image and Brand Name */}
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img
          src="././src/assets/img.jpg" // Replace with your desired image URL
          alt="Logo"
          className="rounded-circle mx-2"
          style={{ width: '40px', height: '40px' }}
        />
        <span style={{ fontWeight: 'bold', color: 'green' }}>MiracleDocs</span>
      </a>

      {/* Navbar Toggler */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarNavDropdown"
        aria-expanded={isExpanded}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible Navbar */}
      <div
        className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`}
        id="navbarNavDropdown"
      >
        {/* Left-aligned Links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>

          {/* Dropdown 1 */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownMenu1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li>
                <a className="dropdown-item" href="#">Action 1</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Another Action 1</a>
              </li>
            </ul>
          </li>

          {/* Dropdown 2 */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownMenu2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pages
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <a className="dropdown-item" href="#">Action 2</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Another Action 2</a>
              </li>
            </ul>
          </li>

          {/* Dropdown 3 */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownMenu3"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Blog
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu3">
              <li>
                <a className="dropdown-item" href="#">Action 3</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Another Action 3</a>
              </li>
            </ul>
          </li>
        </ul>

        {/* Centered Search Form */}
        <div className="mx-1 d-flex ">
          {showSearch && (
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              autoFocus
            />
          )}
          <Button  className="mx-auto" variant="outline-success" onClick={toggleSearch}>
            <FaSearch />
          </Button>
        </div>

        {/* Right-aligned Contact Info */}
        {/* Right-aligned Contact Us Button and Phone Number */}
        <div className="d-flex align-items-center ms-auto"> {/* Use ms-auto to push it to the right */}
          <span className="fw-bold me-2">+123 456 7890</span> {/* fw-bold makes the text bold */}
          <Button variant="outline-success mx-3">Contact Us</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
