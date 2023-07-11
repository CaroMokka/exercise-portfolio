import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary p-0">
        <div className="container-fluid bg-black">
          <div className="text-white">
            <img className="mb-3 mt-3" src={logo} />
            <span>FASHION </span>
            <span>CULTURE </span>
            <span>PORTRAIT </span>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
