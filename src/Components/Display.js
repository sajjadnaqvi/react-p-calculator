import React,{Component} from 'react'

class Display extends Component{
    // initialize the state object in the constructor
    
    render(){
        return(
            <div className="result">
               <p>{this.props.result}</p>
            </div>
        );
    }
}

export default Display