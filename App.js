import React, { Component } from "react";
import logo from './asset/download.png'
import './App.css'

class App extends Component {
  url = 'https://www.bridgelabz.com/'
  constructor(){
    super()
    this.state= {
      title: '',
      name: '',
      userName: '',
      nameError: ''
    }
  }  

  onClick = ($event) => {
    console.log("save button is clicked:", $event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("value is", event.target.value);
    const nameReg = RegExp('^[A-Z]{1}[a-zA-Z]{3,}$')
    this.setState({userName: event.target.value})
    if(nameReg.test(event.target.value)){
      this.setState({nameError:''})
    }else{
      this.setState({nameError: 'Invalid Name'})
    }  
    
  }
  
  render(){
    return (
      <>
      <div className = 'form'>
        <div>
        <style>{"body { background-color: blue}"},</style>
          <h1>Hello {this.state.userName} from Bridgelabz</h1>  
          <img src={logo} onClick={this.onClick} alt="bridgelabz logo" />
        </div>
        <div>
          <input onChange={this.onNameChange}/>
          <span className="error_output"><center>{this.state.nameError}</center></span>
          <p>At Bridgelabz, we're a community of: <br/><br/>
          <u1>
            <li>technologists</li>
            <li>thinkers</li>
            <li>builders</li><br/></u1></p>
            <p>Working together to kepp the tech employeement of engineers alive and accessible, so tech companes worldwide
            can get contributors and creators for Technology Solutins. we believe this act of human collaboration across an 
            employability platfrom is essential to individual growth and our collective future<br/><br/>
            To know about us, visit <a href="https://www.bridgelabz.com" target="_blank">Bridgelabz </a>to learn even more about our mission 
            <br/><b>i.e employability to all.</b></p>    
      </div>
        </div>
        </>
    );
  }
}


export default App;
