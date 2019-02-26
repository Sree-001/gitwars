import React, { Component } from 'react';

const NinjaStatus = ({image_url,followers, name}) => {
    return ( <div className="col-6">
    <div className="row">
    <div className="col">
    <img src={image_url} alt="" style={{width:'100%'}}/>
    </div>
    <div className="col">
    <div className="card">
    <p className="text text-dark">{name || 'Anonymus' }</p>
    <p className="text text-dark">{followers}</p>
    </div>
    </div>
    </div>
    </div> );
}
 
export default NinjaStatus;