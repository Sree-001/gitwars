import React, { Component } from "react";
import Ninja from '../components/ninja';
class Home extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    const { user1Inp, user2Inp, onInpChange,checkWinner } = this.props;

    return (
      <div className="container" style={{'marginTop':'8em'}}>
        <div className="row ">
          <div className="col-6">
            <Ninja
              userInp={user1Inp}
              userName={"1"}
              onInputChange={onInpChange}
            />
          </div>
          <div className="col-6">
            <Ninja
              userInp={user2Inp}
              userName={"2"}
              onInputChange={onInpChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              className="btn btn-primary btn-lg btn-center p-lg-3 m-lg-3"
              onClick={checkWinner}
            >
              {" "}
              Fight{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
