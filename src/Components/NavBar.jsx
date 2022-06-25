import CartWidget from "./CartWidget.jsx";

const NavBar = () => {

    return (  
    <>
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">
      Panadería Alba
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li>
      </ul>
      <CartWidget />
    </div>
  </div>
</nav>
</>
    );
}
 
export default NavBar;