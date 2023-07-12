import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary p-0">
        <div className="container-fluid bg-black">
          <div className="nav-section">
            <img className="mb-3 mt-3" src={logo} />
            <div className="nav-text">
              <span className="nav-subtitle">FASHION </span>
              <span className="nav-subtitle">CULTURE </span>
              <span className="nav-subtitle">PORTRAIT </span>
            </div>
          </div>
          <form className="form d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
