import './App.css';
import React from 'react';
import Button from "./Components/Button";
import Display from "./Components/Display";

class App extends React.Component{

  constructor(props){
    super(props);

    this.state ={
        result:'',
        operator :'',
        firstValue : '',
        secontValue : '',
        answer : ''
    };

  }

buttonPressed = (buttonName)=>{
  this.clrearScreen();

 /* if(buttonName === "+" ||buttonName === "-"||buttonName ==="/"||buttonName==="*")
  {
    this.setState({
      operator: buttonName,
      firstValue :this.result,
    });
    this.clrearScreen();
  }
  else*/ if (buttonName === "="){
    /*this.setState({
      secontValue : this.result
    });*/
    this.calculatation();
  }
  else if (buttonName === "ce"){
    this.setState({
      result : ""
    });
    this.clrearScreen();
  }
  else{
    this.setState({
      result : this.state.result + buttonName
  });
  }
  
};

clrearScreen = () => {
  this.setState({
      result: ""
  });
};

calculatation = () =>{
 try{ this.setState({
    result : eval(this.state.result)
  });
}
catch (e){
  this.setState({
    result : "error"
  });

}
};

calculate = () =>{
  let a= 0;
  this.clrearScreen();
  if(this.state.firstValue === "" || this.state.secontValue ==="")
  {
    this.setState({
        result : "error",
        firstValue : "",
        secontValue: "",
        operator : ""
    });
  }
  else if (this.state.operator === '+'){
    console.log("add function is running");
     a = parseFloat(this.state.firstValue)+parseFloat(this.state.secontValue);
  }
  else if (this.state.operator === '-'){
    a = parseFloat(this.state.firstValue)-parseFloat(this.state.secontValue);
  }
  else if (this.state.operator === '*'){
    a = parseFloat(this.state.firstValue)*parseFloat(this.state.secontValue);
  }
  else if (this.state.operator === '/'){
    a = parseFloat(this.state.firstValue)/parseFloat(this.state.secontValue);
  }
  else{
    a = "error";
  }

  this.setState({
    result : a,
    firstValue:"",
    secontValue:"",
    answer : ""
  });
}

 
  render(){
    return (
    <div className="App">
      <div className="key-body">
      <Display result={this.state.result}/>
      <Button buttonPressed={this.buttonPressed}/>
      </div>
      </div>
     );
}
}

export default App;
