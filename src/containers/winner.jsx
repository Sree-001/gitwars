import React, { Component } from 'react';
import NinjaStatus from '../components/ninjaStatus';
class Winner extends Component {
    state = {  }
    constructor(props){
        super(props);
    }
    render() { 
   
        const {user1Data,user2Data,winner} = this.props;
        const {name:name1,id:id1,avatar_url:avatar_url1,followers:followers1} = user1Data;
        const {name:name2,id:id2,avatar_url:avatar_url2,followers:followers2} = user2Data;
        return ( <div className="container">
            <div className="row">
            <h2 > Winner Page  </h2>
            
            </div>
            <div className="row">
               <div className="col-12">
               <h3 className="text text-center"> Winnner is {winner}</h3>
               </div>
               
            </div>
            <div className="row " style={{'marginTop':'5em'}}>
            <NinjaStatus  name={name1}followers={followers1} image_url={avatar_url1} />
            <NinjaStatus  name={name2}followers={followers2}   image_url={avatar_url2}/>
            </div>
        </div> );
    }
}
 
export default Winner;