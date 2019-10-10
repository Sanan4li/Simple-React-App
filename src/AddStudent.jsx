import React, { Component } from "react";
import { Button , Input} from "flwww";
class AddStudent extends Component{
    
    state = {
       id : Math.random(),
        name : null, 
        city : null , 
        department : null
    };
    onChangeHandler = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        });
}
    onClickHander = (e)=>{
        e.preventDefault();
        this.props.Add(this.state);
    }
    



    render(){
        return(
            <div>
                <form>
                   Name :  <input type="text" placeholder="Name" id="name" onChange={this.onChangeHandler} />
                   City     : <input type="text" placeholder="City" id="city" onChange={this.onChangeHandler} />
                   Department : <input type="text" placeholder="Department" id="department" onChange={this.onChangeHandler} />
                     <button type="success" onClick={this.onClickHander} >Success</button>    
                </form>
            </div>
        );
    }
    
    
    
    
}

export default AddStudent;















