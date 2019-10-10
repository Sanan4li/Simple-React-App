import React, {Component} from "react";
import "./style.css";
export default class ShowEmployees extends Component{
    
//    componenDidMount(){
//        console.log("Component Mounted");
//    }
//    componentDidUpdate(previousProps, previousState){
//        console.log("Component Updated");
//        console.log(previousProps);
//        console.log(previousState);
//    }
    
    
    
    render(){
        let List = this.props.employees;
        let AllEmployees = List.map(
        (l)=>{
            return(
                        <div key={l.id} className="main">
                                <div>{l.name}</div>
                                <div>{l.city}</div>
                                <div>{l.department}</div>
                                <div> <button onClick={()=>{this.props.deleteEmployee(l.id)}} className="deleteButton">Delete</button> </div>
                    </div>  
            );
        }
        );
        return(
        
                <div>
                    {AllEmployees}
                </div>
        
        );
    }
}




















