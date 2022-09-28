import "./index.css";

export const NavigationBar = () => {
  return (
    <>
      <nav className="navigationItem navbar navbar-expand-lg navbar-dark bg-light">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img
              src="./media/logo.png"
              alt="logo"
              className="me-2"
              style={{ width: "16px", height: "16px" }}
            />
            <a className="navbar-brand" href="#0">
              Get the App
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#0">
                  Investor Relations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#0">
                  Add restaurant
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#0">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#0">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
