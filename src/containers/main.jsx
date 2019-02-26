import React, { Component } from "react";
// import { Route, Switch } from "react-router-dom";
// import Ninja from "../components/ninja";
import axios from "axios";
import Home from "./home";
import Winner from './winner';
const url = "https://api.github.com/users";

class Main extends Component {
  state = {
    user1Inp: "",
    user1Data: "",
    user2Inp: "",
    user2Data: "",
    winner:'',
  };

  handleInputChange = evt => {
    evt.preventDefault();
    let name = evt.target.name;
    if (name == "user1") {
      this.setState({
        user1Inp: evt.target.value
      });
    } else {
      this.setState({
        user2Inp: evt.target.value
      });
    }
  };

  getUserInfo = async () => {
    const { user1Inp, user2Inp } = this.state;
  try{
    const { data: user1Data } = await axios.get(`${url}/${user1Inp}`);
    const { data: user2Data } = await axios.get(`${url}/${user2Inp}`);

    console.log("User 1 Data : ", user1Data);
    console.log("User 2 Data : ", user2Data);
 
    if(user1Data){
        const {name:name1, id:id1 , avatar_url:avatar_url1,followers:followers1}= user1Data;
    
        this.setState((prevState)=>{
       return {user1Data : {name:name1,id:id1,avatar_url:avatar_url1,followers:followers1}}       
        })
    }
    if(user2Data){
        const {name:name2, id:id2 , avatar_url:avatar_url2,followers:followers2}= user2Data;
        
        this.setState((prevState)=>{
           return {  user2Data : {name:name2, id:id2, avatar_url:avatar_url2,followers:followers2}}
        })
    }

    if(user1Data && user2Data){

        if(user1Data.followers > user2Data.followers){
            this.setState({
                winner: "User 1"
            })
        }else{
            this.setState({
                winner: "User 2"
            })
        }

    }
    

     
  }
  catch(error){
      console.log(error)
  }
    
  };

  render() {
    const { user1Inp, user1Data, user2Inp, user2Data,winner } = this.state;
    return (
      <div className="container">
        <div className="row" style={{'marginTop':'2em'}}>
          <div className="col-12">
            <h1 className="text text-center">GitWars</h1>
          </div>
        </div>
     { !user1Data && !user2Data && 
          <Home
          user1Inp={user1Inp}
          user2Inp={user2Inp}
          user2Data={user2Data}
          user1Data={user1Data}
          onInpChange={this.handleInputChange}
          checkWinner ={this.getUserInfo}
        />
    }
    
    { user1Data && user2Data && 
          <Winner
          user2Data={user2Data}
          user1Data={user1Data}
          winner={winner}
          onInpChange={this.handleInputChange}
          checkWinner ={this.getUserInfo}
        />
    }
          

        
      </div>
    );
  }
}

export default Main;
