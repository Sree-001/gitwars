import React, { Component } from "react";

const Ninja = ({userInp,userName,onInputChange}) => {
  return (
    <div className="card">
      <div className="row">
        <div className="col-6">
          <img src="" alt="" />
        </div>
        <div className="col-6 ">
          <form className="p-lg-3">
            <p className="text text-dark"> {'Ninja '+userName} </p>
            <div className="form-group">
              <label htmlFor="" className="text text-dark m-lg-3">
                enter user git username
              </label>
              <input
                type="text"
                name={'user'+userName}
                id=""
                className="form-control mt-lg-4"
                value={userInp}
                onChange={onInputChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Ninja;
