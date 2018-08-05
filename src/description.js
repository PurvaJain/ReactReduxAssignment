import React, { Component } from "react";
import { connect } from "react-redux";

class Description extends Component {
  render() {
    console.log(this.props.details);
    return (
      <div className="description-container">
        {this.props.loading === true && <p>Loading....</p>}
        {this.props.details.first_name &&
          this.props.loading === false && (
            <div className="description">
              <img src={this.props.details.avatar} alt="image" />
              <div className="imageDescription">
                <div>
                  <b>ID</b>: {this.props.details.id}{" "}
                </div>
                <div>
                  <b>NAME</b>:{" "}
                  {`${this.props.details.first_name} 
                ${this.props.details.last_name}`}
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  null
)(Description);
