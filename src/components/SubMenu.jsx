import { Component } from "react";

class SubMenu extends Component {
  render() {
    return (
        <div className="container">
      <div className="row py-4 d.flex justify-content-md-between bg-dark">
        <div className="col col-md-8 d-flex p-2 p-lg-0 justify-content-between justify-content-md-start align-items-center">
          <p className="h2 me-5">TV Shows</p>
          <div className="dropdown">
            <button
              className="btn btn-dark dropdown-toggle border border-white rounded-0"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Genres
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#vuoto">
                  Drama
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#vuoto">
                  Comedy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#vuoto">
                  Medical
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#vuoto">
                  Horror
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#vuoto">
                  Martial Arts
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col col-md-4 d-flex p-0 justify-content-md-end align-items-center d-none d-md-inline-flex">
          <p className="border border-white px-2 m-0">
            <i className="bi bi-text-left right-icons" />
          </p>
          <p className="border border-white px-2 m-0">
            <i className="bi bi-grid right-icons" />
          </p>
        </div>
      </div>
        </div>
    );
  }
}

export default SubMenu