import { Component } from "react";
import { Col } from "react-bootstrap";

class MovieCard extends Component {

    state = {
        isCardHovered: false
      }
    
      hoverCard = ()=>{
        this.setState({isCardHovered: true})
      }

      exitCard = ()=>{
        this.setState({isCardHovered: false})
      }
    
  render() {
    let movie = this.props.movie
    let cardClass = "card-body"
    cardClass+=this.state.isCardHovered? "" : " d-none"
    return (
        <Col xs={12} sm={6} md={2}>
      <div className="card mb-2 mt-3" onMouseEnter={this.hoverCard} onMouseLeave={this.exitCard}>
        <img className="cardDimension" src={movie.Poster} alt={movie.Title} />
        <div className= {cardClass}>
          <div className="row">
            <div className="col d-flex justify-content-between">
              <div className="card-icons">
                <i className="bi bi-play-circle mx-1" />
                <i className="bi bi-plus-circle mx-1" />
              </div>
              <div className="card-icons">
              <i className="bi bi-badge-hd card-icons m-0 me-2" />
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex align-items-center">
              </div>
              <div className="col-12">
                <p className="text-white-50 h6 mt-2">{movie.Title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </Col>
    );
  }
}

export default MovieCard