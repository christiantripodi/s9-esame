import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark pt-5 ps-2 ps-md-0">
        <div className="container bg-dark text-white-50 h6">
          <div className="row">
            <div className="col pb-2 text-start mb-3">
            <i className="bi bi-twitter fs-3 me-3 social-icons" /> 
            <i className="bi bi-facebook fs-3 me-3 social-icons" /> 
            <i className="bi bi-youtube fs-3 me-3 social-icons" /> 
            <i className="bi bi-instagram fs-3 me-3 social-icons" /> 
            </div>
            <div className="row d-flex pb-2 text-start">
              <div className="col-6 col-md-3">
                <ul className="list-unstyled">
                  <li className="nav-footer">
                    <a href="#vuoto">Audio and Subtitles</a>
                  </li>
                  <li className="nav-footer">
                    <a href="#vuoto">Media Center</a>
                  </li>
                  <li className="nav-footer">
                    <a href="#vuoto">Privacy</a>
                  </li>
                  <li className="nav-footer">
                    <a href="#vuoto">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <ul className="list-unstyled">
                  <li className="nav-footer">
                    <a href="#vuoto">Audio Description</a>
                  </li>
                  <li className="nav-footer">
                    <a href="#vuoto">Investor Relations</a>
                  </li>
                  <li className="nav-footer">
                    <a href="#vuoto">Legal Notices</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <ul className="list-unstyled">
                  <li className="nav-footer">
                    <a href="#vuoto">Help Center</a>
                  </li>
                  <li className="nav-footer">
                    <a href="#vuoto">Jobs</a>
                  </li>
                  <li className="nav-footer">
                    <a href="#vuoto">Cookie Preferences</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <ul className="list-unstyled">
                  <li className="nav-footer">
                    <a href="#vuoto">Gift Cards</a>
                  </li>
                  <li className="nav-footer">
                    <a href="#vuoto">Terms of Use</a>
                  </li>
                  <li className="nav-footer">
                    <a href="#vuoto">Corporate Information</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row pb-3">
           
            </div>
            <div className="row">
              <div className="col">
                <p className="copyright">© 2024 Netflix, Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer