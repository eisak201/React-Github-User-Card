import React, { Component } from 'react';
import './App.css';
import Users from './Components/Users'
import Data from './Components/Data'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [Data]
    }
  };


  componentDidMount (){
    fetch ('https://dog.ceo/api/breed/boxer/images' )
    .then(res => res.json ())
    .then(users => this.setState({users: users.message}))
    .catch (err => console.error(err))
  }
  

  
  render() {
    console.log ("IN RENDER", this.state.users)
    return (
       <div className="App" >
        <h1>Hello User</h1> 
        {
        this.state.users.length > 0 ?
        
            this.state.users.map( (users, index) =>{
return <img width='200' src={users} key={index}/>
            })
             : 
            <h2>Loading...</h2> 
            }                        
</div>
    
    );
  }
}
export default App;
