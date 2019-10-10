import React, {Component} from "react";
import "./style.css";
export default class AddEmployee extends Component{
    state = {
        name : null,
        city : null,
        department : null
    }
    
    onChangeHandler = (e)=>{
        this.setState({
            [e.target.id] : e.target.value
        });
       
        
    }
    
    onSubmitListener = (e)=>{
        e.preventDefault();
        this.props.addNew(this.state);
         
    }
    
    render(){
        return(
            <div className="form">
            
                  <form>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="name" name="firstname" placeholder="Your name.." onChange={this.onChangeHandler}/>

                    <label htmlFor="lname">City</label>
                    <input type="text" id="city" name="lastname" placeholder="Your city name.." onChange={this.onChangeHandler} />

                    <label htmlFor="country">Country</label>
                    <select id="department" name="country"  onChange={this.onChangeHandler}>
                      <option value="Computer Science">Please Select </option>
                       <option value="Computer Science">Computer Science</option>
                      <option value="Software Engineering">Software Engineering</option>
                      <option value="Information Technology">Information Technology</option>
                    </select>

                    <input type="submit" value="Submit" onClick={this.onSubmitListener}/>
                  </form>
            </div>
        );
    }
}












